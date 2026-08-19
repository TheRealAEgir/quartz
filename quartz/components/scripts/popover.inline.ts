import { computePosition, flip, inline, shift } from "@floating-ui/dom"
import { normalizeRelativeURLs } from "../../util/path"
import { fetchCanonical } from "./util"

const p = new DOMParser()

let activeAnchor: HTMLAnchorElement | null = null

// ============================================================
// HELPERS
// ============================================================

function getTextContent(
  element: Element | null,
): string {
  return element?.textContent?.trim() ?? ""
}

function findMetadataValue(
  content: Element,
  field: string,
): string {
  const elements = [
    ...content.querySelectorAll("p, li, div"),
  ]

  for (const element of elements) {
    const text = element.textContent?.trim() ?? ""

    if (
      text.startsWith(`**${field}**::`) ||
      text.startsWith(`${field}::`)
    ) {
      return text
        .replace(
          new RegExp(`^\\*\\*${field}\\*\\*::\\s*`),
          "",
        )
        .replace(
          new RegExp(`^${field}::\\s*`),
          "",
        )
        .trim()
    }
  }

  return ""
}

// ============================================================
// CUSTOM SCIENTIFIC NOTE POPUP
// ============================================================

function buildCustomPopupContent(
  html: Document,
  popoverInner: HTMLElement,
) {
  const title = html.querySelector("h1")

  if (!title) {
    return false
  }

  // ----------------------------------------------------------
  // Title
  // ----------------------------------------------------------

  const titleRow = document.createElement("div")
  titleRow.classList.add("custom-popover-title-row")

  const titleElement = document.createElement("h1")
  titleElement.classList.add("custom-popover-title")
  titleElement.innerHTML = title.innerHTML

  titleRow.appendChild(titleElement)
  popoverInner.appendChild(titleRow)

  // ----------------------------------------------------------
  // Main content
  // ----------------------------------------------------------

  const content =
    html.querySelector("article.popover-hint") ??
    html.querySelector(".popover-hint")

  if (!content) {
    return false
  }

  // ----------------------------------------------------------
  // Extract bullet points
  // ----------------------------------------------------------

  const filteredLines = [
    ...content.querySelectorAll("li"),
  ]
    .map((li) => li.textContent?.trim() ?? "")
    .filter((text) => text.length > 0)

  if (filteredLines.length === 0) {
    return true
  }

  // ----------------------------------------------------------
  // One line
  // ----------------------------------------------------------

  if (filteredLines.length === 1) {
    const description = document.createElement("p")
    description.classList.add(
      "custom-popover-description",
    )

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
  // Subtitle
  // ----------------------------------------------------------

  const subtitle = document.createElement("span")
  subtitle.classList.add("custom-popover-subtitle")
  subtitle.textContent = filteredLines[0]

  titleRow.appendChild(subtitle)

  // ----------------------------------------------------------
  // Description
  // ----------------------------------------------------------

  const description = document.createElement("p")
  description.classList.add(
    "custom-popover-description",
  )

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
    observations.classList.add(
      "custom-popover-observations",
    )

    const observationsLabel =
      document.createElement("strong")

    observationsLabel.textContent =
      "Observations : "

    observations.appendChild(
      observationsLabel,
    )

    observations.appendChild(
      document.createTextNode(
        filteredLines.slice(2).join(" "),
      ),
    )

    popoverInner.appendChild(
      observations,
    )
  }

  return true
}

// ============================================================
// ARTICLE POPUP
// ============================================================

function buildArticlePopupContent(
  html: Document,
  popoverInner: HTMLElement,
) {
  // ==========================================================
  // TITLE
  // ==========================================================

  const title = html.querySelector("h1")

  if (!title) {
    return false
  }

  const titleElement =
    document.createElement("h1")

  titleElement.classList.add(
    "article-popover-title",
  )

  titleElement.innerHTML =
    title.innerHTML

  popoverInner.appendChild(
    titleElement,
  )

  // ==========================================================
  // FIND ARTICLE INFORMATION CALLOUT
  // ==========================================================

  const callouts = [
    ...html.querySelectorAll(
      "blockquote.callout",
    ),
  ]

  const getCalloutTitle = (
    callout: Element,
  ) => {
    const titleElement =
      callout.querySelector(
        ".callout-title",
      )

    return (
      titleElement?.textContent
        ?.trim()
        .toLowerCase() ?? ""
    )
  }

  const articleInformation =
    callouts.find(
      (callout) =>
        getCalloutTitle(
          callout,
        ).includes(
          "article informations",
        ),
    )

  // ==========================================================
  // HELPER: FIND A FIELD
  // ==========================================================

  function getField(
    root: Element | Document,
    fieldName: string,
  ): string | null {
    const elements = [
      ...root.querySelectorAll(
        "*",
      ),
    ]

    for (const element of elements) {
      const text =
        element.textContent?.trim() ?? ""

      const regex =
        new RegExp(
          `^${fieldName}\\s*::\\s*(.+)$`,
          "i",
        )

      const match =
        text.match(regex)

      if (match) {
        return match[1].trim()
      }
    }

    return null
  }

  // ==========================================================
  // JOURNAL / YEAR / DOI
  // ==========================================================

  let year: string | null = null
  let journal: string | null = null
  let doi: string | null = null

  if (articleInformation) {
    year =
      getField(
        articleInformation,
        "Year",
      )

    journal =
      getField(
        articleInformation,
        "Journal",
      )

    doi =
      getField(
        articleInformation,
        "DOI",
      )
  }

  // ==========================================================
  // ARTICLE METADATA LINE
  //
  // Journal · Year · DOI
  // ==========================================================

  if (
    journal ||
    year ||
    doi
  ) {
    const metadata =
      document.createElement("p")

    metadata.classList.add(
      "article-popover-metadata",
    )

    if (journal) {
      const journalElement =
        document.createElement("span")

      journalElement.innerHTML =
        journal

      metadata.appendChild(
        journalElement,
      )
    }

    if (
      journal &&
      year
    ) {
      metadata.appendChild(
        document.createTextNode(
          " · ",
        ),
      )
    }

    if (year) {
      const yearElement =
        document.createElement("span")

      yearElement.textContent =
        year

      metadata.appendChild(
        yearElement,
      )
    }

    if (
      (journal || year) &&
      doi
    ) {
      metadata.appendChild(
        document.createTextNode(
          " · ",
        ),
      )
    }

    if (doi) {
      const doiElement =
        document.createElement("a")

      doiElement.href =
        `https://doi.org/${doi}`

      doiElement.textContent =
        `DOI: ${doi}`

      doiElement.target =
        "_blank"

      doiElement.rel =
        "noopener noreferrer"

      metadata.appendChild(
        doiElement,
      )
    }

    popoverInner.appendChild(
      metadata,
    )
  }

  // ==========================================================
  // AUTHORS
  // ==========================================================

  if (articleInformation) {
    const authors: string[] = []

    const authorMatches =
      articleInformation.textContent
        ?.match(
          /(?:FirstAuthor|Author)\s*::\s*([^\n]+)/gi,
        ) ?? []

    for (const match of authorMatches) {
      const author =
        match
          .replace(
            /^(?:FirstAuthor|Author)\s*::\s*/i,
            "",
          )
          .trim()

      if (
        author &&
        !authors.includes(author)
      ) {
        authors.push(author)
      }
    }

    if (authors.length > 0) {
      const authorDetails =
        document.createElement(
          "details",
        )

      authorDetails.classList.add(
        "article-popover-authors",
      )

      const summary =
        document.createElement(
          "summary",
        )

      if (authors.length === 1) {
        summary.textContent =
          authors[0]
      } else if (authors.length === 2) {
        summary.textContent =
          `${authors[0]}, ${authors[1]}`
      } else {
        summary.textContent =
          `${authors[0]}, …, ${authors[authors.length - 1]}`
      }

      authorDetails.appendChild(
        summary,
      )

      const authorList =
        document.createElement("ul")

      for (const author of authors) {
        const li =
          document.createElement("li")

        li.textContent =
          author

        authorList.appendChild(li)
      }

      authorDetails.appendChild(
        authorList,
      )

      popoverInner.appendChild(
        authorDetails,
      )
    }
  }
  // ==========================================================
  // FIND ABSTRACT
  // ==========================================================

  let abstractText = ""

  if (articleInformation) {
    const abstractCallout =
      [
        ...articleInformation.querySelectorAll(
          "blockquote.callout",
        ),
      ].find(
        (callout) =>
          getCalloutTitle(
            callout,
          ).includes(
            "abstract",
          ),
      )

    if (abstractCallout) {
      const clone =
        abstractCallout.cloneNode(
          true,
        ) as HTMLElement

      const calloutTitle =
        clone.querySelector(
          ".callout-title",
        )

      calloutTitle?.remove()

      abstractText =
        clone.textContent
          ?.trim() ?? ""
    }
  }

  // ==========================================================
  // ABSTRACT
  // ==========================================================

  if (abstractText) {
    const abstractDetails =
      document.createElement(
        "details",
      )

    abstractDetails.classList.add(
      "article-popover-section",
      "article-popover-abstract",
    )

    const summary =
      document.createElement(
        "summary",
      )

    summary.textContent =
      "Abstract"

    abstractDetails.appendChild(
      summary,
    )

    const abstractContent =
      document.createElement(
        "div",
      )

    abstractContent.classList.add(
      "article-popover-section-content",
    )

    abstractContent.textContent =
      abstractText

    abstractDetails.appendChild(
      abstractContent,
    )

    popoverInner.appendChild(
      abstractDetails,
    )
  }

  // ==========================================================
  // FIND PERSONAL NOTES CALLOUT
  // ==========================================================

  const notesCallout =
    callouts.find(
      (callout) =>
        getCalloutTitle(
          callout,
        ) === "notes",
    )

  let notesText = ""

  if (notesCallout) {
    const clone =
      notesCallout.cloneNode(
        true,
      ) as HTMLElement

    // Remove the callout title
    const calloutTitle =
      clone.querySelector(
        ".callout-title",
      )

    calloutTitle?.remove()

    // --------------------------------------------------------
    // Remove everything after "end Notes"
    //
    // This is mainly defensive, because Article Informations
    // should already be outside this callout.
    // --------------------------------------------------------

    const rawText =
      clone.textContent
        ?.trim() ?? ""

    notesText =
      rawText
        .replace(
          /%%\s*end\s+Notes\s*%%[\s\S]*$/i,
          "",
        )
        .trim()
  }

  // ==========================================================
  // PERSONAL NOTES
  // ==========================================================

  if (notesText) {
    const notesDetails =
      document.createElement(
        "details",
      )

    notesDetails.classList.add(
      "article-popover-section",
      "article-popover-notes",
    )

    const summary =
      document.createElement(
        "summary",
      )

    summary.textContent =
      "My notes"

    notesDetails.appendChild(
      summary,
    )

    const notesContent =
      document.createElement(
        "div",
      )

    notesContent.classList.add(
      "article-popover-section-content",
    )

    notesContent.textContent =
      notesText

    notesDetails.appendChild(
      notesContent,
    )

    popoverInner.appendChild(
      notesDetails,
    )
  }

  return true
}

// ============================================================
// MAIN MOUSE HANDLER
// ============================================================

async function mouseEnterHandler(
  this: HTMLAnchorElement,
  {
    clientX,
    clientY,
  }: {
    clientX: number
    clientY: number
  },
) {
  const link =
    (activeAnchor = this)

  if (
    link.dataset.noPopover ===
    "true"
  ) {
    return
  }

  // ----------------------------------------------------------
  // Determine popup type from path
  // ----------------------------------------------------------

  const linkPath =
    new URL(
      link.href,
    ).pathname.toLowerCase()

  const isCustomNote =
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

  // ----------------------------------------------------------
  // Position
  // ----------------------------------------------------------

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

  // ----------------------------------------------------------
  // Show
  // ----------------------------------------------------------

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

  // ----------------------------------------------------------
  // Target URL
  // ----------------------------------------------------------

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

  // ----------------------------------------------------------
  // Existing popup
  // ----------------------------------------------------------

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

  // ----------------------------------------------------------
  // Fetch page
  // ----------------------------------------------------------

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

  // ----------------------------------------------------------
  // Create popup
  // ----------------------------------------------------------

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
  // IMAGES
  // ==========================================================

  switch (
    contentTypeCategory
  ) {
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

    // ========================================================
    // PDF
    // ========================================================

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

    // ========================================================
    // HTML
    // ========================================================

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
      // ARTICLE POPUP
      // ======================================================

      if (isArticleNote) {
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
      // CUSTOM SCIENTIFIC NOTE
      // ======================================================

      else if (isCustomNote) {
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

  // ----------------------------------------------------------
  // Prevent duplicate popup
  // ----------------------------------------------------------

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
  // IMPORTANT:
  // Listen to ALL internal links.
  //
  // The handler determines whether this is:
  //
  //   /output/              → custom scientific note
  //   /2_resources/...      → article
  //   anything else         → normal Quartz popup

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