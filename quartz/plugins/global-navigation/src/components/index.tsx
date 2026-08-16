import {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "../../../../components/types"

type NavigationNode = {
  title: string
  slug: string
  children: NavigationNode[]
}

function getTitle(file: QuartzComponentProps["fileData"]): string {
  return file.frontmatter?.title ?? file.slug ?? ""
}

function normalizeSlug(slug: string): string {
  return slug.replace(/^\/+|\/+$/g, "")
}

function buildTree(allFiles: QuartzComponentProps["allFiles"]): NavigationNode[] {
  const nodes = new Map<string, NavigationNode>()

  for (const file of allFiles) {
    if (!file.slug) continue

    const slug = normalizeSlug(file.slug)

    nodes.set(slug, {
      title: getTitle(file),
      slug: file.slug,
      children: [],
    })
  }

  const roots: NavigationNode[] = []

  for (const [slug, node] of nodes) {
    const parts = slug.split("/")

    if (parts.length === 1) {
      roots.push(node)
      continue
    }

    const parentSlug = parts.slice(0, -1).join("/")
    const parent = nodes.get(parentSlug)

    if (parent) {
      parent.children.push(node)
    } else {
      roots.push(node)
    }
  }

  const sortNodes = (items: NavigationNode[]) => {
    items.sort((a, b) => a.title.localeCompare(b.title, undefined, { numeric: true }))

    for (const item of items) {
      sortNodes(item.children)
    }
  }

  sortNodes(roots)

  return roots
}

function NavigationItem({
  node,
  currentSlug,
}: {
  node: NavigationNode
  currentSlug: string
}) {
  const isCurrent = normalizeSlug(node.slug) === normalizeSlug(currentSlug)

  const hasChildren = node.children.length > 0

  const containsCurrent = (item: NavigationNode): boolean => {
    if (normalizeSlug(item.slug) === normalizeSlug(currentSlug)) {
      return true
    }

    return item.children.some(containsCurrent)
  }

  const isOpen = containsCurrent(node)

  if (!hasChildren) {
    return (
      <li class={isCurrent ? "global-navigation-current" : ""}>
        <a href={node.slug}>{node.title}</a>
      </li>
    )
  }

  return (
    <li class={isCurrent ? "global-navigation-current" : ""}>
      <details open={isOpen}>
        <summary>
          <a href={node.slug}>{node.title}</a>
        </summary>

        <ul>
          {node.children.map((child) => (
            <NavigationItem
              key={child.slug}
              node={child}
              currentSlug={currentSlug}
            />
          ))}
        </ul>
      </details>
    </li>
  )
}

export const GlobalNavigation: QuartzComponentConstructor = () => {
  const Component: QuartzComponent = ({
    allFiles,
    fileData,
    displayClass,
  }: QuartzComponentProps) => {
    const tree = buildTree(allFiles)

    return (
      <nav
        class={`global-navigation ${displayClass ?? ""}`}
        aria-label="Site navigation"
      >
        <ul>
          {tree.map((node) => (
            <NavigationItem
              key={node.slug}
              node={node}
              currentSlug={fileData.slug ?? ""}
            />
          ))}
        </ul>
      </nav>
    )
  }

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
      content: "▶";
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
  `

  return Component
}