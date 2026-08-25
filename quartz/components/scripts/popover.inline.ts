import {
  computePosition,
  flip,
  inline,
  shift,
} from "@floating-ui/dom"

import { normalizeRelativeURLs } from "../../util/path"
import { fetchCanonical } from "./util"

import {
  buildCustomPopupContent,
} from "./popovers/custom"

import {
  buildArticlePopupContent,
} from "./popovers/article"

import {
  buildFigurePopupContent,
} from "./popovers/figure"

const p = new DOMParser()

let activeAnchor: HTMLAnchorElement | null = null


// ============================================================
// MAIN MOUSE HANDLER
// ============================================================

async function mouseEnterHandler(
  this: HTMLAnchorElement,
  { clientX, clientY }: {
    clientX: number
    clientY: number
  },
) {
  const link =
    (activeAnchor = this)

  if (
    link.dataset.noPopover === "true"
  ) {
    return
  }

  // ==========================================================
  // DETERMINE POPUP TYPE
  // ==========================================================

  const linkPath =
    decodeURIComponent(
      link.pathname,
    ).toLowerCase()

  const isOutputNote =
    linkPath.includes(
      "/output/",
    )

  const isArticleNote =
    linkPath.includes(
      "/2_resources/a_reviews/",
    ) ||
    linkPath.includes(
      "/2_resources/b_articles/",
    ) ||
    linkPath.includes(
      "/2_resources/d_unread/",
    )

  const isFigureNote =
    linkPath.includes(
      "/2_resources/e_figures/",
    )

  // ==========================================================
  // Position
  // ==========================================================

  async function setPosition(
    popoverElement: HTMLElement,
  ) {
    const { x, y } =
      await computePosition(
        link,
        popoverElement,
        {
          strategy: "fixed",
          middleware: [
            inline({
              x: clientX,
              y: clientY,
            }),
            shift(),
            flip(),
          ],
        },
      )

    Object.assign(
      popoverElement.style,
      {
        transform:
          `translate(${x.toFixed()}px, ${y.toFixed()}px)`,
      },
    )
  }

  // ==========================================================
  // Show popup
  // ==========================================================

  function showPopover(
    popoverElement: HTMLElement,
  ) {
    clearActivePopover()

    popoverElement.classList.add(
      "active-popover",
    )

    setPosition(
      popoverElement,
    )

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
            top:
              heading.offsetTop - 12,
            behavior: "instant",
          })
        }
      }
    }
  }

  // ==========================================================
  // Target URL
  // ==========================================================

  const targetUrl =
    new URL(link.href)

  const hash =
    decodeURIComponent(
      targetUrl.hash,
    )

  targetUrl.hash = ""
  targetUrl.search = ""

  const popoverId =
    `popover-${link.pathname}`

  // ==========================================================
  // Existing popup
  // ==========================================================

  const prevPopoverElement =
    document.getElementById(
      popoverId,
    )

  if (prevPopoverElement) {
    showPopover(
      prevPopoverElement as HTMLElement,
    )

    return
  }

  // ==========================================================
  // Fetch target page
  // ==========================================================

  const response =
    await fetchCanonical(
      targetUrl,
    ).catch(
      (err) => {
        console.error(err)
      },
    )

  if (!response) {
    return
  }

  const rawContentType =
    response.headers.get(
      "Content-Type",
    )

  if (!rawContentType) {
    return
  }

  const [contentType] =
    rawContentType.split(";")

  const [
    contentTypeCategory,
    typeInfo,
  ] =
    contentType.split("/")

  // ==========================================================
  // Create popup
  // ==========================================================

  const popoverElement =
    document.createElement(
      "div",
    )

  popoverElement.id =
    popoverId

  popoverElement.classList.add(
    "popover",
  )

  const popoverInner =
    document.createElement(
      "div",
    )

  popoverInner.classList.add(
    "popover-inner",
  )

  popoverInner.dataset.contentType =
    contentType ??
    undefined

  popoverElement.appendChild(
    popoverInner,
  )

  // ==========================================================
  // IMAGE / PDF / HTML
  // ==========================================================

  switch (
    contentTypeCategory
  ) {

    // --------------------------------------------------------
    // Direct image
    // --------------------------------------------------------

    case "image": {
      const img =
        document.createElement(
          "img",
        )

      img.src =
        targetUrl.toString()

      img.alt =
        targetUrl.pathname

      popoverInner.appendChild(
        img,
      )

      break
    }

    // --------------------------------------------------------
    // PDF
    // --------------------------------------------------------

    case "application": {

      switch (typeInfo) {

        case "pdf": {
          const pdf =
            document.createElement(
              "iframe",
            )

          pdf.src =
            targetUrl.toString()

          popoverInner.appendChild(
            pdf,
          )

          break
        }

        default:
          break
      }

      break
    }

    // --------------------------------------------------------
    // HTML page
    // --------------------------------------------------------

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
      // Preserve IDs
      // ------------------------------------------------------

      html
        .querySelectorAll(
          "[id]",
        )
        .forEach(
          (el) => {
            const targetID =
              `popover-internal-${el.id}`

            el.id =
              targetID
          },
        )

      // ======================================================
      // FIGURE POPUP
      // ======================================================

      if (isFigureNote) {

        const success =
          buildFigurePopupContent(
            html,
            popoverInner,
            targetUrl,
          )

        if (!success) {
          return
        }

      }

      // ======================================================
      // ARTICLE POPUP
      // ======================================================

      else if (isArticleNote) {

        const success =
          buildArticlePopupContent(
            html,
            popoverInner,
          )

        if (!success) {
          return
        }

      }

      // ======================================================
      // SCIENTIFIC NOTE POPUP
      // ======================================================

      else if (isOutputNote) {

        const success =
          buildCustomPopupContent(
            html,
            popoverInner,
          )

        if (!success) {
          return
        }

      }

      // ======================================================
      // NORMAL QUARTZ POPUP
      // ======================================================

      else {

        const elements = [
          ...html.getElementsByClassName(
            "popover-hint",
          ),
        ]

        if (
          elements.length === 0
        ) {
          return
        }

        elements.forEach(
          (element) => {
            popoverInner.appendChild(
              element,
            )
          },
        )
      }

      break
    }
  }

  // ==========================================================
  // Prevent duplicate popup
  // ==========================================================

  if (
    document.getElementById(
      popoverId,
    )
  ) {
    return
  }

  document.body.appendChild(
    popoverElement,
  )

  if (
    activeAnchor !== this
  ) {
    return
  }

  showPopover(
    popoverElement,
  )
}


// ============================================================
// CLEAR POPOVER
// ============================================================

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


// ============================================================
// SETUP
// ============================================================

function setupPopovers() {

  const links = [
    ...document.querySelectorAll(
      "a.internal",
    ),
  ] as HTMLAnchorElement[]

  for (
    const link of links
  ) {

    link.addEventListener(
      "mouseenter",
      mouseEnterHandler,
    )

    link.addEventListener(
      "mouseleave",
      clearActivePopover,
    )

    window.addCleanup(
      () => {

        link.removeEventListener(
          "mouseenter",
          mouseEnterHandler,
        )

        link.removeEventListener(
          "mouseleave",
          clearActivePopover,
        )

      },
    )
  }
}


// ============================================================
// QUARTZ EVENTS
// ============================================================

document.addEventListener(
  "nav",
  setupPopovers,
)

document.addEventListener(
  "render",
  setupPopovers,
)