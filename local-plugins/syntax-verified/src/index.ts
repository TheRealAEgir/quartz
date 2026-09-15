import fs from "node:fs"
import path from "node:path"

import type { Element, Root, Text } from "hast"
import type { QuartzTransformerPlugin } from "@quartz-community/types"
import { fromHtml } from "hast-util-from-html"

export interface SyntaxVerifiedOptions {
  file: string
  boundaries?: string
  replaceUnderscoresInLinks?: boolean
}

interface Replacement {
  source: string
  html: string
}

const DEFAULT_BOUNDARIES = ` ()\.,;:"[]'’`

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function escapeCharClass(value: string): string {
  return value.replace(/[\\\]^/-]/g, "\\$&")
}

function buildRegex(
  replacements: Replacement[],
  boundaries: string,
): RegExp | null {
  if (replacements.length === 0) {
    return null
  }

  const alternatives = replacements
    .map((replacement) => escapeRegExp(replacement.source))
    .join("|")

  const boundaryClass = escapeCharClass(boundaries)

  return new RegExp(
    `(^|[\\s${boundaryClass}])(${alternatives})(?=$|[\\s${boundaryClass}])`,
    "g",
  )
}

function loadReplacements(file: string): Replacement[] {
  if (!fs.existsSync(file)) {
    throw new Error(
      `[SyntaxVerified] Replacement file not found: ${file}`,
    )
  }

  const content = fs.readFileSync(file, "utf8")

  const replacements: Replacement[] = []

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

    const source = trimmed.slice(0, separator).trim()
    const html = trimmed.slice(separator + 1).trim()

    if (!source || !html) {
      continue
    }

    replacements.push({
      source,
      html,
    })
  }

  // If two entries overlap, prefer the longest one.
  replacements.sort((a, b) => b.source.length - a.source.length)

  return replacements
}

function replacementFor(
  source: string,
  replacements: Replacement[],
): Replacement | undefined {
  return replacements.find(
    (replacement) => replacement.source === source,
  )
}

function transformText(
  node: Text,
  replacements: Replacement[],
  regex: RegExp,
): Array<Text | Element> {
  const value = node.value
  const result: Array<Text | Element> = []

  let lastIndex = 0

  regex.lastIndex = 0

  let match: RegExpExecArray | null

  while ((match = regex.exec(value)) !== null) {
    const boundary = match[1]
    const source = match[2]

    const matchStart = match.index
    const sourceStart = matchStart + boundary.length

    // Text before the match.
    if (matchStart > lastIndex) {
      result.push({
        type: "text",
        value: value.slice(lastIndex, matchStart),
      })
    }

    // Preserve the boundary.
    if (boundary) {
      result.push({
        type: "text",
        value: boundary,
      })
    }

    const replacement = replacementFor(source, replacements)

    if (!replacement) {
      result.push({
        type: "text",
        value: source,
      })
    } else {
      const parsed = fromHtml(replacement.html, {
        fragment: true,
      })

      result.push(...(parsed.children as Array<Text | Element>))
    }

    lastIndex = sourceStart + source.length
  }

  // Remaining text.
  if (lastIndex < value.length) {
    result.push({
      type: "text",
      value: value.slice(lastIndex),
    })
  }

  return result
}

function replaceUnderscoresInLinks(element: Element): void {
  if (
    element.tagName === "code" ||
    element.tagName === "pre" ||
    element.tagName === "script" ||
    element.tagName === "style"
  ) {
    return
  }

  if (element.tagName === "a") {
    function replaceInText(node: Text): void {
      node.value = node.value.replace(/_/g, " ")
    }

    function walk(node: Element): void {
      for (const child of node.children) {
        if (child.type === "text") {
          replaceInText(child)
        } else if (child.type === "element") {
          walk(child)
        }
      }
    }

    walk(element)
    return
  }

  for (const child of element.children) {
    if (child.type === "element") {
      replaceUnderscoresInLinks(child)
    }
  }
}

function transformElement(
  element: Element,
  replacements: Replacement[],
  regex: RegExp,
): void {
  // Never modify code.
  if (
    element.tagName === "code" ||
    element.tagName === "pre" ||
    element.tagName === "script" ||
    element.tagName === "style"
  ) {
    return
  }

  const children = element.children

  for (let i = 0; i < children.length; i++) {
    const child = children[i]

    if (child.type === "text") {
      const transformed = transformText(
        child,
        replacements,
        regex,
      )

      children.splice(i, 1, ...transformed)

      i += transformed.length - 1
    } else if (child.type === "element") {
      transformElement(child, replacements, regex)
    }
  }
}

export const SyntaxVerified: QuartzTransformerPlugin<
  SyntaxVerifiedOptions
> = (opts) => {
  const options = opts ?? {
    file: "./syntax-verified.md",
  }

  const boundaries =
    options.boundaries ?? DEFAULT_BOUNDARIES

  const replaceUnderscores =
    options.replaceUnderscoresInLinks ?? false

  const replacementFile = path.resolve(options.file)

  const replacements = loadReplacements(replacementFile)
  const regex = buildRegex(replacements, boundaries)

  return {
    name: "SyntaxVerified",

    htmlPlugins() {
      if (!regex) {
        return []
      }

      return [
        () => {
          return (tree: Root) => {
            transformElement(
                tree as unknown as Element,
                replacements,
                regex,
              )

              if (replaceUnderscores) {
                replaceUnderscoresInLinks(tree as unknown as Element)
              }
          }
        },
      ]
    },
  }
}