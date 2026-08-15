import type { QuartzTransformerPlugin } from "@quartz-community/types"
import type { Root, Element } from "hast"
import type { VFile } from "vfile"
import { visit } from "unist-util-visit"

function parentToClass(parent: string): string {
  return (
    "parent-" +
    parent
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
  )
}

export const ParentLinks: QuartzTransformerPlugin = () => {
  return {
    name: "ParentLinks",

    htmlPlugins() {
      return [
        () => {
          return (tree: Root, file: VFile) => {
            visit(tree, "element", (node: Element) => {
              if (node.tagName !== "a") return
              if (!node.properties) return

              const classes = (node.properties.className ?? []) as string[]

              // Only modify internal links
              if (!classes.includes("internal-link")) return

              const targetSlug = node.properties["data-slug"]

              if (typeof targetSlug !== "string") return

              /*
               * For now we just log the target.
               * This lets us verify that the transformer is running
               * and that CrawlLinks has already resolved the link.
               */
              console.log(
                `[ParentLinks] ${file.data.slug} -> ${targetSlug}`,
              )
            })
          }
        },
      ]
    },
  }
}