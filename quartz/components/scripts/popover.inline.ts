import { computePosition, flip, inline, shift } from "@floating-ui/dom"
import { normalizeRelativeURLs } from "../../util/path"
import { fetchCanonical } from "./util"

const p = new DOMParser()
let activeAnchor: HTMLAnchorElement | null = null

// ============================================================
// HELPERS
// ============================================================

function getYamlValue(
  html: Document,
  key: string,
): string | null {
  const meta = html.querySelector(
    `meta[name="quartz-${key}"]`,
  )

  return meta?.getAttribute("content") ?? null
}

// ============================================================
// CUSTOM DEFINITION POPUP
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
  // TITLE
  // ----------------------------------------------------------

  const titleRow = document.createElement("div")
  titleRow.classList.add("custom-popover-title-row")

  const titleElement = document.createElement("h1")
  titleElement.classList.add("custom-popover-title")
  titleElement.innerHTML = title.innerHTML

  titleRow.appendChild(titleElement)
  popoverInner.appendChild(titleRow)

  // ----------------------------------------------------------
  // CONTENT
  // ----------------------------------------------------------

  const content =
    html.querySelector("article.popover-hint") ??
    html.querySelector(".popover-hint")

  if (!content) {
    return false
  }

  const filteredLines = [
    ...content.querySelectorAll("li"),
  ]
    .map((li) => li.textContent?.trim() ?? "")
    .filter((text) => text.length > 0)

  if (filteredLines.length === 0) {
    return true
  }

  // ----------------------------------------------------------
  // ONE BULLET
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
  // SUBTITLE
  // ----------------------------------------------------------

  const subtitle = document.createElement("span")
  subtitle.classList.add("custom-popover-subtitle")
  subtitle.textContent = filteredLines[0]

  titleRow.appendChild(subtitle)

  // ----------------------------------------------------------
  // DESCRIPTION
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
  // OBSERVATIONS
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

// ============================================================
// ARTICLE POPUP
// ============================================================

function buildArticlePopupContent(
  html: Document,
  popoverInner: HTMLElement,
) {
  // ----------------------------------------------------------
  // TITLE
  // ----------------------------------------------------------

  const title = html.querySelector("h1")

  if (!title) {
    return false
  }

  const titleElement = document.createElement("h1")
  titleElement.classList.add("article-popover-title")
  titleElement.innerHTML = title.innerHTML

  popoverInner.appendChild(titleElement)

  // ----------------------------------------------------------
  // ARTICLE INFORMATION
  // ----------------------------------------------------------

  const articleInfo =
    [...html.querySelectorAll("h2, h3, h4")].find(
      (heading) =>
        heading.textContent?.trim() ===
        "Article Informations",
    )

  let journal = ""
  let year = ""
  let doi = ""

  // Try to extract the citation from the Article Informations
  // callout.
  if (articleInfo) {
    const parent = articleInfo.parentElement

    if (parent) {
      const text =
        parent.textContent?.replace(/\s+/g, " ").trim() ?? ""

      // DOI
      const doiMatch = text.match(
        /10\.\d{4,9}\/[-._;()/:A-Z0-9]+/i,
      )

      if (doiMatch) {
        doi = doiMatch[0]
          .replace(/[.,]+$/, "")
      }

      // ------------------------------------------------------
      // Extract journal + year from the formatted citation
      //
      // Example:
      //
      // ... (2022). Ovarian cancer... Cancer Cell,
      // 40(5), 545-557.
      // ------------------------------------------------------

      const yearMatch = text.match(
        /\((\d{4})\)/,
      )

      if (yearMatch) {
        year = yearMatch[1]
      }

      // Journal is extracted from the citation where possible.
      //
      // Zotero generally italicizes the journal name, so first
      // try to find an <em> element.
      const journalElement =
        parent.querySelector("em")

      if (journalElement) {
        journal =
          journalElement.textContent?.trim() ?? ""
      }
    }
  }

  // ----------------------------------------------------------
  // FALLBACK: YEAR FROM PAGE DATE
  // ----------------------------------------------------------

  if (!year) {
    const pageText =
      html.body.textContent ?? ""

    const yearMatch =
      pageText.match(/\b(19|20)\d{2}\b/)

    if (yearMatch) {
      year = yearMatch[0]
    }
  }

  // ----------------------------------------------------------
  // JOURNAL / YEAR / DOI LINE
  // ----------------------------------------------------------

  if (journal || year || doi) {
    const metadata = document.createElement("p")
    metadata.classList.add(
      "article-popover-metadata",
    )

    const parts: string[] = []

    if (journal) {
      parts.push(journal)
    }

    if (year) {
      parts.push(year)
    }

    if (doi) {
      parts.push(`DOI: ${doi}`)
    }

    metadata.textContent = parts.join(" · ")

    popoverInner.appendChild(metadata)
  }

  // ----------------------------------------------------------
  // AUTHORS
  // ----------------------------------------------------------

  const authorsMeta = getYamlValue(
    html,
    "authors",
  )

  if (authorsMeta) {
    let authors: string[] = []

    try {
      const parsed = JSON.parse(authorsMeta)

      if (Array.isArray(parsed)) {
        authors = parsed.map(
          (author) => String(author),
        )
      }
    } catch {
      // If Quartz doesn't expose the YAML field as JSON,
      // fall back to parsing the text representation.
      authors = authorsMeta
        .split(",")
        .map((author) => author.trim())
        .filter(Boolean)
    }

    if (authors.length > 0) {
      const details = document.createElement("details")
      details.classList.add(
        "article-popover-section",
        "article-popover-authors",
      )

      // Collapsed by default
      details.open = false

      const summary = document.createElement("summary")
      summary.textContent = "Authors"

      details.appendChild(summary)

      // ------------------------------------------------------
      // Collapsed summary:
      //
      // First authors, ..., Last author
      // ------------------------------------------------------

      const preview = document.createElement("span")
      preview.classList.add(
        "article-popover-authors-preview",
      )

      if (authors.length <= 4) {
        preview.textContent =
          authors.join(", ")
      } else {
        preview.textContent =
          `${authors.slice(0, 3).join(", ")}, …, ${
            authors[authors.length - 1]
          }`
      }

      summary.appendChild(preview)

      // ------------------------------------------------------
      // Full author list
      // ------------------------------------------------------

      const authorList =
        document.createElement("ul")

      authorList.classList.add(
        "article-popover-author-list",
      )

      authors.forEach((author) => {
        const li =
          document.createElement("li")

        li.textContent = author

        authorList.appendChild(li)
      })

      details.appendChild(authorList)

      popoverInner.appendChild(details)
    }
  }

  // ----------------------------------------------------------
  // ABSTRACT
  // ----------------------------------------------------------

  const abstractHeading =
    [...html.querySelectorAll("h2, h3, h4")].find(
      (heading) =>
        heading.textContent?.trim() ===
        "Abstract",
    )

  if (abstractHeading) {
    const abstractContent =
      abstractHeading.parentElement

    if (abstractContent) {
      const abstractText =
        abstractContent.textContent
          ?.replace(/^Abstract\s*/i, "")
          .trim()

      if (abstractText) {
        const details =
          document.createElement("details")

        details.classList.add(
          "article-popover-section",
          "article-popover-abstract",
        )

        details.open = false

        const summary =
          document.createElement("summary")

        summary.textContent = "Abstract"

        details.appendChild(summary)

        const text =
          document.createElement("p")

        text.textContent = abstractText

        details.appendChild(text)

        popoverInner.appendChild(details)
      }
    }
  }

  // ----------------------------------------------------------
  // PERSONAL NOTES
  // ----------------------------------------------------------

  const notesHeading =
    [...html.querySelectorAll("h1, h2, h3, h4")].find(
      (heading) =>
        heading.textContent?.trim() ===
        "Notes",
    )

  if (notesHeading) {
    let notesContainer =
      notesHeading.nextElementSibling

    const noteElements: Element[] = []

    while (notesContainer) {
      // Stop at the next major section.
      if (
        notesContainer.matches("h1, h2")
      ) {
        break
      }

      // Don't include the Article Informations
      // or other Zotero-generated sections.
      if (
        !notesContainer.matches(
          "hr",
        )
      ) {
        noteElements.push(
          notesContainer,
        )
      }

      notesContainer =
        notesContainer.nextElementSibling
    }

    if (noteElements.length > 0) {
      const details =
        document.createElement("details")

      details.classList.add(
        "article-popover-section",
        "article-popover-notes",
      )

      details.open = false

      const summary =
        document.createElement("summary")

      summary.textContent =
        "My notes"

      details.appendChild(summary)

      const notesContent =
        document.createElement("div")

      notesContent.classList.add(
        "article-popover-notes-content",
      )

      noteElements.forEach(
        (element) => {
          notesContent.appendChild(
            element.cloneNode(true),
          )
        },
      )

      details.appendChild(
        notesContent,
      )

      popoverInner.appendChild(
        details,
      )
    }
  }

  return true
}

// ============================================================
// MAIN POPOVER HANDLER
// ============================================================

async function mouseEnterHandler(
  this: HTMLAnchorElement,
  { clientX, clientY }: {
    clientX: number
    clientY: number
  },
) {
  const link = (activeAnchor = this)

  if (link.dataset.noPopover === "true") {
    return
  }

  const linkPath =
    new URL(link.href).pathname

  // ----------------------------------------------------------
  // Determine popup type
  // ----------------------------------------------------------

  const isCustomNote =
    linkPath.includes("/output/")

  const isArticleNote =
    linkPath.includes(
      "/2_Resources/A_Reviews/",
    ) ||
    linkPath.includes(
      "/2_Resources/B_Articles/",
    ) ||
    linkPath.includes(
      "/2_Resources/D_Unread/",
    )

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

  const prevPopoverElement =
    document.getElementById(
      popoverId,
    )

  // ----------------------------------------------------------
  // Don't refetch existing popup
  // ----------------------------------------------------------

  if (prevPopoverElement) {
    showPopover(
      prevPopoverElement as HTMLElement);

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

  if (!response) return

  const rawContentType =
    response.headers.get(
      "Content-Type",
    )

  if (!rawContentType) return

  const [contentType] =
    rawContentType.split(";")

  const [
    contentTypeCategory,
    typeInfo,
  ] =
    contentType.split("/")

  const popoverElement =
    document.createElement("div")

  popoverElement.id =
    popoverId

  popoverElement.classList.add(
    "popover",
  )

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

  // ==========================================================
  // MEDIA
  // ==========================================================

  switch (contentTypeCategory) {
    case "image": {
      const img =
        document.createElement("img")

      img.src =
        targetUrl.toString()

      img.alt =
        targetUrl.pathname

      popoverInner.appendChild(
        img,
      )

      break
    }

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
    // HTML / MARKDOWN PAGE
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
        .querySelectorAll("[id]")
        .forEach((el) => {
          const targetID =
            `popover-internal-${el.id}`

          el.id = targetID
        })

      // ------------------------------------------------------
      // CUSTOM DEFINITION NOTE
      // ------------------------------------------------------

      if (isCustomNote) {
        const success =
          buildCustomPopupContent(
            html,
            popoverInner,
          )

        if (!success) {
          return
        }

        popoverElement.classList.add(
          "custom-definition-popover",
        )
      }

      // ------------------------------------------------------
      // ARTICLE NOTE
      // ------------------------------------------------------

      else if (isArticleNote) {
        const success =
          buildArticlePopupContent(
            html,
            popoverInner,
          )

        if (!success) {
          return
        }

        popoverElement.classList.add(
          "article-popover",
        )
      }

      // ------------------------------------------------------
      // EVERYTHING ELSE
      //
      // Preserve the original Quartz popover.
      // ------------------------------------------------------

      else {
        const elts = [
          ...html.getElementsByClassName(
            "popover-hint",
          ),
        ]

        if (elts.length === 0) {
          return
        }

        elts.forEach(
          (elt) =>
            popoverInner.appendChild(
              elt,
            ),
        )
      }

      break
    }
  }

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

  if (activeAnchor !== this) {
    return
  }

  showPopover(
    popoverElement,
  )
}

// ============================================================
// CLEAR POPOVERS
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