// src/components/index.tsx
import { jsx, jsxs } from "preact/jsx-runtime";
function getTitle(file) {
  return file.frontmatter?.title ?? file.slug ?? "";
}
function normalizeSlug(slug) {
  return slug.replace(/^\/+|\/+$/g, "");
}
function buildTree(allFiles) {
  const nodes = /* @__PURE__ */ new Map();
  for (const file of allFiles) {
    if (!file.slug) continue;
    const slug = normalizeSlug(file.slug);
    nodes.set(slug, {
      title: getTitle(file),
      slug: file.slug,
      children: []
    });
  }
  const roots = [];
  for (const [slug, node] of nodes) {
    const parts = slug.split("/");
    if (parts.length === 1) {
      roots.push(node);
      continue;
    }
    const parentSlug = parts.slice(0, -1).join("/");
    const parent = nodes.get(parentSlug);
    if (parent) {
      parent.children.push(node);
    } else {
      roots.push(node);
    }
  }
  const sortNodes = (items) => {
    items.sort((a, b) => a.title.localeCompare(b.title, void 0, { numeric: true }));
    for (const item of items) {
      sortNodes(item.children);
    }
  };
  sortNodes(roots);
  return roots;
}
function NavigationItem({
  node,
  currentSlug
}) {
  const isCurrent = normalizeSlug(node.slug) === normalizeSlug(currentSlug);
  const hasChildren = node.children.length > 0;
  const containsCurrent = (item) => {
    if (normalizeSlug(item.slug) === normalizeSlug(currentSlug)) {
      return true;
    }
    return item.children.some(containsCurrent);
  };
  const isOpen = containsCurrent(node);
  if (!hasChildren) {
    return /* @__PURE__ */ jsx("li", { class: isCurrent ? "global-navigation-current" : "", children: /* @__PURE__ */ jsx("a", { href: node.slug, children: node.title }) });
  }
  return /* @__PURE__ */ jsx("li", { class: isCurrent ? "global-navigation-current" : "", children: /* @__PURE__ */ jsxs("details", { open: isOpen, children: [
    /* @__PURE__ */ jsx("summary", { children: /* @__PURE__ */ jsx("a", { href: node.slug, children: node.title }) }),
    /* @__PURE__ */ jsx("ul", { children: node.children.map((child) => /* @__PURE__ */ jsx(
      NavigationItem,
      {
        node: child,
        currentSlug
      },
      child.slug
    )) })
  ] }) });
}
var GlobalNavigation = () => {
  const Component = ({
    allFiles,
    fileData,
    displayClass
  }) => {
    const tree = buildTree(allFiles);
    return /* @__PURE__ */ jsx(
      "nav",
      {
        class: `global-navigation ${displayClass ?? ""}`,
        "aria-label": "Site navigation",
        children: /* @__PURE__ */ jsx("ul", { children: tree.map((node) => /* @__PURE__ */ jsx(
          NavigationItem,
          {
            node,
            currentSlug: fileData.slug ?? ""
          },
          node.slug
        )) })
      }
    );
  };
  Component.css = `
    .global-navigation {
      padding: 0.5rem;
      font-size: 0.9rem;
    }

    .global-navigation ul {
      list-style: none;
      margin: 0;
      padding-left: 0;
    }

    .global-navigation ul ul {
      padding-left: 1rem;
    }

    .global-navigation li {
      margin: 0.15rem 0;
    }

    .global-navigation details {
      margin: 0;
    }

    .global-navigation summary {
      cursor: pointer;
      list-style: none;
    }

    .global-navigation summary::-webkit-details-marker {
      display: none;
    }

    .global-navigation summary::before {
      content: "\u25B6";
      display: inline-block;
      width: 1rem;
      font-size: 0.65em;
      transition: transform 0.15s ease;
    }

    .global-navigation details[open] > summary::before {
      transform: rotate(90deg);
    }

    .global-navigation a {
      text-decoration: none;
    }

    .global-navigation-current > a,
    .global-navigation-current > details > summary > a {
      font-weight: 600;
    }
  `;
  return Component;
};

export {
  GlobalNavigation
};
//# sourceMappingURL=chunk-GY457AGV.js.map