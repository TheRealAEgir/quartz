import fs from "node:fs"
import path from "node:path"

import type { Element, Root } from "hast"
import type { QuartzTransformerPlugin } from "@quartz-community/types"

export interface PageNavigationOptions {
  file: string
}

interface PageEntry {
  name: string
  slug: string
}

function loadPages(file: string): PageEntry[] {
  if (!fs.existsSync(file)) {
    throw new Error(
      `[PageNavigation] Order file not found: ${file}`,
    )
  }

  const content = fs.readFileSync(file, "utf8")
  const pages: PageEntry[] = []

  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim()

    // Ignore empty lines and Markdown headings.
    if (!trimmed || trimmed.startsWith("#")) {
      continue
    }

    const separator = trimmed.indexOf("→")

    if (separator === -1) {
      continue
    }

    const name = trimmed.slice(0, separator).trim()
    const slug = trimmed.slice(separator + 1).trim()

    if (!name || !slug) {
      continue
    }

    pages.push({
      name,
      slug,
    })
  }

  return pages
}

function createLink(
  className: string,
  direction: "Previous" | "Next",
  pageName: string,
  slug: string,
): Element {
  const isPrevious = direction === "Previous"

  return {
    type: "element",
    tagName: "a",
    properties: {
      className: [className],
      href: `./${slug}`,
    },
    children: isPrevious
      ? [
          {
            type: "element",
            tagName: "span",
            properties: {
              className: ["page-navigation-label"],
            },
            children: [{ type: "text", value: "Previous - " }],
          },
          {
            type: "text",
            value: pageName,
          },
        ]
      : [
          {
            type: "text",
            value: pageName,
          },
          {
            type: "element",
            tagName: "span",
            properties: {
              className: ["page-navigation-label"],
            },
            children: [{ type: "text", value: " - Next" }],
          },
        ],
  }
}

function createNavigation(
  previous: PageEntry | undefined,
  next: PageEntry | undefined,
): Element {
  const children: Element[] = []

  if (previous) {
    children.push(
      createLink(
        "page-navigation-previous",
        "Previous",
        previous.name,
        previous.slug,
        ),
    )
  } else {
    children.push({
      type: "element",
      tagName: "span",
      properties: {
        className: ["page-navigation-spacer"],
      },
      children: [],
    })
  }

  if (next) {
    children.push(
      createLink(
        "page-navigation-next",
        "Next",
        next.name,
        next.slug,
        ),
    )
  } else {
    children.push({
      type: "element",
      tagName: "span",
      properties: {
        className: ["page-navigation-spacer"],
      },
      children: [],
    })
  }

  return {
    type: "element",
    tagName: "nav",
    properties: {
      className: ["page-navigation"],
    },
    children,
  }
}

export const PageNavigation: QuartzTransformerPlugin<
  PageNavigationOptions
> = (opts) => {
  const options = opts ?? {
    file: "./page-order.md",
  }

  const orderFile = path.resolve(options.file)
  const pages = loadPages(orderFile)

  return {
    name: "PageNavigation",

    htmlPlugins() {
      return [
        () => {
          return (tree: Root, file: any) => {
            const slug = file.data?.slug

            if (!slug) {
              return
            }

            const currentIndex = pages.findIndex(
              (page) => page.slug === slug,
            )

            if (currentIndex === -1) {
              return
            }

            const previous =
              currentIndex > 0
                ? pages[currentIndex - 1]
                : undefined

            const next =
              currentIndex < pages.length - 1
                ? pages[currentIndex + 1]
                : undefined

            tree.children.push(
              createNavigation(previous, next),
            )
          }
        },
      ]
    },
  }
}