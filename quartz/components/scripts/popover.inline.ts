import { computePosition, flip, inline, shift } from "@floating-ui/dom"
import { normalizeRelativeURLs } from "../../util/path"
import { fetchCanonical } from "./util"

const p = new DOMParser()
let activeAnchor: HTMLAnchorElement | null = null

/**
 * Build a simplified popup from an Obsidian/Quartz note.
 *
 * Expected note structure:
 *
 * # LCMV (Virus)
 *
 * Lymphocytic Choriomeningitis Virus
 * Description text...
 * Observation text...
 *
 * Result:
 *
 * LCMV (Virus)
 * Lymphocytic Choriomeningitis Virus
 *
 * Description : Description text...
 *
 * Observations : Observation text...
 */
function buildCustomPopupContent(
  html: Document,
  popoverInner: HTMLElement,
) {
  // ----------------------------------------------------------
  // Find the main title
  // ----------------------------------------------------------

  const title = html.querySelector("h1")

  if (!title) {
    return false
  }

  // ----------------------------------------------------------
  // Extract the title
  // ----------------------------------------------------------

  const titleRow = document.createElement("div")
  titleRow.classList.add("custom-popover-title-row")

  const titleElement = document.createElement("h1")
  titleElement.classList.add("custom-popover-title")
  titleElement.innerHTML = title.innerHTML

  titleRow.appendChild(titleElement)

  popoverInner.appendChild(titleRow)

  // ----------------------------------------------------------
  // Find the main article content
  // ----------------------------------------------------------

  const content =
    html.querySelector("article.popover-hint") ??
    html.querySelector(".popover-hint")

  if (!content) {
    return false
  }

  // ----------------------------------------------------------
  // Extract text lines from the content
  // ----------------------------------------------------------

  const lines: string[] = []

  const walker = html.createTreeWalker(
    content,
    NodeFilter.SHOW_TEXT,
  )

  let node: Node | null

  while ((node = walker.nextNode())) {
    const text = node.textContent?.trim()

    if (text) {
      lines.push(text)
    }
  }

  // ----------------------------------------------------------
  // Remove the title if it was included in the content
  // ----------------------------------------------------------

  const titleText = title.textContent?.trim()

  const filteredLines = lines.filter(
    (line) => line !== titleText,
  )

  // ----------------------------------------------------------
  // No content
  // ----------------------------------------------------------

  if (filteredLines.length === 0) {
    return true
  }

  // ----------------------------------------------------------
  // One line
  //
  // Description : line
  // ----------------------------------------------------------

  if (filteredLines.length === 1) {
    const description = document.createElement("p")
    description.classList.add("custom-popover-description")

    const label = document.createElement("strong")
    label.textContent = "Description : "

    description.appendChild(label)
    description.appendChild(
      document.createTextNode(filteredLines[0]),
    )

    popoverInner.appendChild(description)

    return true
  }

  // ----------------------------------------------------------
  // Two or more lines
  //
  // First line = subtitle
  // Second line = description
  // Third+ lines = observations
  // ----------------------------------------------------------

  const subtitle = document.createElement("span")
  subtitle.classList.add("custom-popover-subtitle")
  subtitle.textContent = filteredLines[0]

  titleRow.appendChild(subtitle)

  // ----------------------------------------------------------
  // Description
  // ----------------------------------------------------------

  const description = document.createElement("p")
  description.classList.add("custom-popover-description")

  const descriptionLabel = document.createElement("strong")
  descriptionLabel.textContent = "Description : "

  description.appendChild(descriptionLabel)
  description.appendChild(
    document.createTextNode(filteredLines[1]),
  )

  popoverInner.appendChild(description)

  // ----------------------------------------------------------
  // Observations
  // ----------------------------------------------------------

  if (filteredLines.length >= 3) {
    const observations = document.createElement("p")
    observations.classList.add("custom-popover-observations")

    const observationsLabel = document.createElement("strong")
    observationsLabel.textContent = "Observations : "

    observations.appendChild(observationsLabel)

    observations.appendChild(
      document.createTextNode(
        filteredLines.slice(2).join(" "),
      ),
    )

    popoverInner.appendChild(observations)
  }

  return true
}

async function mouseEnterHandler(
  this: HTMLAnchorElement,
  { clientX, clientY }: { clientX: number; clientY: number },
) {
  const link = (activeAnchor = this)

  if (link.dataset.noPopover === "true") {
    return
  }

  async function setPosition(popoverElement: HTMLElement) {
    const { x, y } = await computePosition(
      link,
      popoverElement,
      {
        strategy: "fixed",
        middleware: [
          inline({ x: clientX, y: clientY }),
          shift(),
          flip(),
        ],
      },
    )

    Object.assign(popoverElement.style, {
      transform: `translate(${x.toFixed()}px, ${y.toFixed()}px)`,
    })
  }

  function showPopover(popoverElement: HTMLElement) {
    clearActivePopover()

    popoverElement.classList.add("active-popover")

    setPosition(popoverElement)

    if (hash !== "") {
      const inner =
        popoverElement.querySelector(
          ".popover-inner",
        ) as HTMLElement | null

      if (inner) {
        const targetAnchor =
          `#popover-internal-${hash.slice(1)}`

        const heading =
          inner.querySelector(
            targetAnchor,
          ) as HTMLElement | null

        if (heading) {
          inner.scroll({
            top: heading.offsetTop - 12,
            behavior: "instant",
          })
        }
      }
    }
  }

  const targetUrl = new URL(link.href)

  const hash = decodeURIComponent(
    targetUrl.hash,
  )

  targetUrl.hash = ""
  targetUrl.search = ""

  const popoverId =
    `popover-${link.pathname}`

  const prevPopoverElement =
    document.getElementById(popoverId)

  // Don't refetch an existing popup
  if (prevPopoverElement) {
    showPopover(
      prevPopoverElement as HTMLElement,
    )

    return
  }

  const response =
    await fetchCanonical(targetUrl).catch(
      (err) => {
        console.error(err)
      },
    )

  if (!response) return

  const rawContentType =
    response.headers.get("Content-Type")

  if (!rawContentType) return

  const [contentType] =
    rawContentType.split(";")

  const [
    contentTypeCategory,
    typeInfo,
  ] = contentType.split("/")

  const popoverElement =
    document.createElement("div")

  popoverElement.id = popoverId
  popoverElement.classList.add("popover")

  const popoverInner =
    document.createElement("div")

  popoverInner.classList.add(
    "popover-inner",
  )

  popoverInner.dataset.contentType =
    contentType ?? undefined

  popoverElement.appendChild(
    popoverInner,
  )

  switch (contentTypeCategory) {
    case "image": {
      const img =
        document.createElement("img")

      img.src = targetUrl.toString()
      img.alt = targetUrl.pathname

      popoverInner.appendChild(img)

      break
    }

    case "application": {
      switch (typeInfo) {
        case "pdf": {
          const pdf =
            document.createElement("iframe")

          pdf.src = targetUrl.toString()

          popoverInner.appendChild(pdf)

          break
        }

        default:
          break
      }

      break
    }

    default: {
      const contents =
        await response.text()

      const html =
        p.parseFromString(
          contents,
          "text/html",
        )

      normalizeRelativeURLs(
        html,
        targetUrl,
      )

      // ------------------------------------------------------
      // Preserve IDs so heading links continue to work
      // ------------------------------------------------------

      html
        .querySelectorAll("[id]")
        .forEach((el) => {
          const targetID =
            `popover-internal-${el.id}`

          el.id = targetID
        })

      // ------------------------------------------------------
      // Build our custom popup
      // ------------------------------------------------------

      const success =
        buildCustomPopupContent(
          html,
          popoverInner,
        )

      if (!success) {
        return
      }

      break
    }
  }

  if (document.getElementById(popoverId)) {
    return
  }

  document.body.appendChild(
    popoverElement,
  )

  if (activeAnchor !== this) {
    return
  }

  showPopover(popoverElement)
}

function clearActivePopover() {
  activeAnchor = null

  const allPopoverElements =
    document.querySelectorAll(
      ".popover",
    )

  allPopoverElements.forEach(
    (popoverElement) =>
      popoverElement.classList.remove(
        "active-popover",
      ),
  )
}

function setupPopovers() {
  const links =
    [
      ...document.querySelectorAll(
        "a.internal",
      ),
    ] as HTMLAnchorElement[]

  for (const link of links) {
    link.addEventListener(
      "mouseenter",
      mouseEnterHandler,
    )

    link.addEventListener(
      "mouseleave",
      clearActivePopover,
    )

    window.addCleanup(() => {
      link.removeEventListener(
        "mouseenter",
        mouseEnterHandler,
      )

      link.removeEventListener(
        "mouseleave",
        clearActivePopover,
      )
    })
  }
}

document.addEventListener(
  "nav",
  setupPopovers,
)

document.addEventListener(
  "render",
  setupPopovers,
)