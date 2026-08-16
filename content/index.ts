import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "@jackyzha0/quartz"
import { Fragment } from "preact"
import { useEffect } from "preact/hooks"

interface NavigationItem {
  slug: string
  title: string
  children: NavigationItem[]
}

function getTitle(file: any): string {
  return file.frontmatter?.title ?? file.slug ?? "Untitled"
}

function getParentSlug(slug: string): string | null {
  const parts = slug.split("/")

  if (parts.length <= 1) {
    return null
  }

  parts.pop()
  return parts.join("/")
}

function buildTree(allFiles: any[]): NavigationItem[] {
  const items = new Map<string, NavigationItem>()

  /*
   * First create an item for every page.
   */
  for (const file of allFiles) {
    if (!file.slug) continue

    items.set(file.slug, {
      slug: file.slug,
      title: getTitle(file),
      children: [],
    })
  }

  /*
   * Then connect children to their parents.
   */
  const roots: NavigationItem[] = []

  for (const item of items.values()) {
    const parentSlug = getParentSlug(item.slug)

    if (parentSlug && items.has(parentSlug)) {
      items.get(parentSlug)!.children.push(item)
    } else {
      roots.push(item)
    }
  }

  /*
   * Sort alphabetically by slug.
   *
   * We can replace this later with an explicit numeric/order system
   * if your folder structure already encodes the desired order.
   */
  const sortItems = (array: NavigationItem[]) => {
    array.sort((a, b) => a.slug.localeCompare(b.slug, undefined, {
      numeric: true,
      sensitivity: "base",
    }))

    for (const item of array) {
      sortItems(item.children)
    }
  }

  sortItems(roots)

  return roots
}

function NavigationItemView({
  item,
  currentSlug,
}: {
  item: NavigationItem
  currentSlug: string
}) {
  const isCurrent = item.slug === currentSlug

  /*
   * A section is considered active when the current page is inside it.
   */
  const isAncestor =
    currentSlug === item.slug ||
    currentSlug.startsWith(`${item.slug}/`)

  if (item.children.length === 0) {
    return (
      <li class={isCurrent ? "global-navigation-current" : ""}>
        <a href={`/${item.slug}`}>
          {item.title}
        </a>
      </li>
    )
  }

  return (
    <li
      class={{
        "global-navigation-section": true,
        "global-navigation-current": isCurrent,
        "global-navigation-ancestor": isAncestor,
      }}
    >
      <details open={isAncestor}>
        <summary>
          <a href={`/${item.slug}`}>
            {item.title}
          </a>
        </summary>

        <ul>
          {item.children.map((child) => (
            <NavigationItemView
              key={child.slug}
              item={child}
              currentSlug={currentSlug}
            />
          ))}
        </ul>
      </details>
    </li>
  )
}

const GlobalNavigation: QuartzComponent = ({
  allFiles,
  fileData,
}: QuartzComponentProps) => {
  const tree = buildTree(allFiles)

  const currentSlug = fileData.slug ?? ""

  /*
   * Quartz uses client-side navigation. When navigating between pages,
   * this ensures the correct section is opened after the DOM is replaced.
   */
  useEffect(() => {
    const active = document.querySelector(
      ".global-navigation-current, .global-navigation-ancestor",
    )

    active?.scrollIntoView({
      block: "nearest",
    })
  }, [currentSlug])

  return (
    <nav class="global-navigation" aria-label="Site navigation">
      <ul>
        {tree.map((item) => (
          <NavigationItemView
            key={item.slug}
            item={item}
            currentSlug={currentSlug}
          />
        ))}
      </ul>
    </nav>
  )
}

export default (() => GlobalNavigation) satisfies QuartzComponentConstructor