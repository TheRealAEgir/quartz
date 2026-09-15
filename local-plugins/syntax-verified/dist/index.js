// src/index.ts
import fs from "fs";
import path from "path";
import { fromHtml } from "hast-util-from-html";
var DEFAULT_BOUNDARIES = ` ().,;:"[]'\u2019`;
function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function escapeCharClass(value) {
  return value.replace(/[\\\]^/-]/g, "\\$&");
}
function buildRegex(replacements, boundaries) {
  if (replacements.length === 0) {
    return null;
  }
  const alternatives = replacements.map((replacement) => escapeRegExp(replacement.source)).join("|");
  const boundaryClass = escapeCharClass(boundaries);
  return new RegExp(
    `(^|[\\s${boundaryClass}])(${alternatives})(?=$|[\\s${boundaryClass}])`,
    "g"
  );
}
function loadReplacements(file) {
  if (!fs.existsSync(file)) {
    throw new Error(
      `[SyntaxVerified] Replacement file not found: ${file}`
    );
  }
  const content = fs.readFileSync(file, "utf8");
  const replacements = [];
  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }
    const separator = trimmed.indexOf("\u2192");
    if (separator === -1) {
      continue;
    }
    const source = trimmed.slice(0, separator).trim();
    const html = trimmed.slice(separator + 1).trim();
    if (!source || !html) {
      continue;
    }
    replacements.push({
      source,
      html
    });
  }
  replacements.sort((a, b) => b.source.length - a.source.length);
  return replacements;
}
function replacementFor(source, replacements) {
  return replacements.find(
    (replacement) => replacement.source === source
  );
}
function transformText(node, replacements, regex) {
  const value = node.value;
  const result = [];
  let lastIndex = 0;
  regex.lastIndex = 0;
  let match;
  while ((match = regex.exec(value)) !== null) {
    const boundary = match[1];
    const source = match[2];
    const matchStart = match.index;
    const sourceStart = matchStart + boundary.length;
    if (matchStart > lastIndex) {
      result.push({
        type: "text",
        value: value.slice(lastIndex, matchStart)
      });
    }
    if (boundary) {
      result.push({
        type: "text",
        value: boundary
      });
    }
    const replacement = replacementFor(source, replacements);
    if (!replacement) {
      result.push({
        type: "text",
        value: source
      });
    } else {
      const parsed = fromHtml(replacement.html, {
        fragment: true
      });
      result.push(...parsed.children);
    }
    lastIndex = sourceStart + source.length;
  }
  if (lastIndex < value.length) {
    result.push({
      type: "text",
      value: value.slice(lastIndex)
    });
  }
  return result;
}
function replaceUnderscoresInLinks(element) {
  if (element.tagName === "code" || element.tagName === "pre" || element.tagName === "script" || element.tagName === "style") {
    return;
  }
  if (element.tagName === "a") {
    let replaceInText2 = function(node) {
      node.value = node.value.replace(/_/g, " ");
    }, walk2 = function(node) {
      for (const child of node.children) {
        if (child.type === "text") {
          replaceInText2(child);
        } else if (child.type === "element") {
          walk2(child);
        }
      }
    };
    var replaceInText = replaceInText2, walk = walk2;
    walk2(element);
    return;
  }
  for (const child of element.children) {
    if (child.type === "element") {
      replaceUnderscoresInLinks(child);
    }
  }
}
function transformElement(element, replacements, regex) {
  if (element.tagName === "code" || element.tagName === "pre" || element.tagName === "script" || element.tagName === "style") {
    return;
  }
  const children = element.children;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (child.type === "text") {
      const transformed = transformText(
        child,
        replacements,
        regex
      );
      children.splice(i, 1, ...transformed);
      i += transformed.length - 1;
    } else if (child.type === "element") {
      transformElement(child, replacements, regex);
    }
  }
}
var SyntaxVerified = (opts) => {
  const options = opts ?? {
    file: "./syntax-verified.md"
  };
  const boundaries = options.boundaries ?? DEFAULT_BOUNDARIES;
  const replaceUnderscores = options.replaceUnderscoresInLinks ?? false;
  const replacementFile = path.resolve(options.file);
  const replacements = loadReplacements(replacementFile);
  const regex = buildRegex(replacements, boundaries);
  return {
    name: "SyntaxVerified",
    htmlPlugins() {
      if (!regex) {
        return [];
      }
      return [
        () => {
          return (tree) => {
            transformElement(
              tree,
              replacements,
              regex
            );
            if (replaceUnderscores) {
              replaceUnderscoresInLinks(tree);
            }
          };
        }
      ];
    }
  };
};
export {
  SyntaxVerified
};
//# sourceMappingURL=index.js.map