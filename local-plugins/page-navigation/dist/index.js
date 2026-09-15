// src/index.ts
import fs from "fs";
import path from "path";
function loadPages(file) {
  if (!fs.existsSync(file)) {
    throw new Error(
      `[PageNavigation] Order file not found: ${file}`
    );
  }
  const content = fs.readFileSync(file, "utf8");
  const pages = [];
  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }
    const separator = trimmed.indexOf("\u2192");
    if (separator === -1) {
      continue;
    }
    const name = trimmed.slice(0, separator).trim();
    const slug = trimmed.slice(separator + 1).trim();
    if (!name || !slug) {
      continue;
    }
    pages.push({
      name,
      slug
    });
  }
  return pages;
}
function createLink(className, text, slug) {
  return {
    type: "element",
    tagName: "a",
    properties: {
      className: [className],
      href: `./${slug}`
    },
    children: [
      {
        type: "text",
        value: text
      }
    ]
  };
}
function createNavigation(previous, next) {
  const children = [];
  if (previous) {
    children.push(
      createLink(
        "page-navigation-previous",
        `Previous - ${previous.name}`,
        previous.slug
      )
    );
  } else {
    children.push({
      type: "element",
      tagName: "span",
      properties: {
        className: ["page-navigation-spacer"]
      },
      children: []
    });
  }
  if (next) {
    children.push(
      createLink(
        "page-navigation-next",
        `Next - ${next.name}`,
        next.slug
      )
    );
  } else {
    children.push({
      type: "element",
      tagName: "span",
      properties: {
        className: ["page-navigation-spacer"]
      },
      children: []
    });
  }
  return {
    type: "element",
    tagName: "nav",
    properties: {
      className: ["page-navigation"]
    },
    children
  };
}
var PageNavigation = (opts) => {
  const options = opts ?? {
    file: "./page-order.md"
  };
  const orderFile = path.resolve(options.file);
  const pages = loadPages(orderFile);
  return {
    name: "PageNavigation",
    htmlPlugins() {
      return [
        () => {
          return (tree, file) => {
            const slug = file.data?.slug;
            if (!slug) {
              return;
            }
            const currentIndex = pages.findIndex(
              (page) => page.slug === slug
            );
            if (currentIndex === -1) {
              return;
            }
            const previous = currentIndex > 0 ? pages[currentIndex - 1] : void 0;
            const next = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : void 0;
            tree.children.push(
              createNavigation(previous, next)
            );
          };
        }
      ];
    }
  };
};
export {
  PageNavigation
};
//# sourceMappingURL=index.js.map