export function buildArticlePopupContent(
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
      ...root.querySelectorAll("*"),
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
  // ARTICLE METADATA
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
  // FIND PERSONAL NOTES
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

    const calloutTitle =
      clone.querySelector(
        ".callout-title",
      )

    calloutTitle?.remove()

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