export function buildFigurePopupContent(
  html: Document,
  popoverInner: HTMLElement,
  targetUrl: URL,
) {
  // ============================================================
  // FIND FIGURE CONTENT
  // ============================================================

  const content =
    html.querySelector("article.popover-hint") ??
    html.querySelector(".popover-hint")

  if (!content) {
    return false
  }

  // ============================================================
  // TITLE
  // ============================================================

  const title =
    content.querySelector("h1, h2, h3, h4, h5, h6")

  if (title) {
    const titleElement =
      document.createElement("h1")

    titleElement.classList.add(
      "custom-figure-title",
    )

    titleElement.innerHTML =
      title.innerHTML

    popoverInner.appendChild(
      titleElement,
    )
  }

  // ============================================================
  // FIND IMAGE
  // ============================================================

  const sourceObject =
    content.querySelector(
      "object[data]",
    ) as HTMLObjectElement | null

  const sourceImage =
    content.querySelector(
      "img[src]",
    ) as HTMLImageElement | null

  let imagePath: string | null = null

  if (sourceObject) {
    imagePath =
      sourceObject.getAttribute("data")
  } else if (sourceImage) {
    imagePath =
      sourceImage.getAttribute("src")
  }

  if (!imagePath) {
    console.warn(
      `FIGURE POPUP: no image found in ${targetUrl.pathname}`,
    )

    return false
  }

  // ============================================================
  // RESOLVE IMAGE URL
  // ============================================================

  const imageUrl =
    new URL(
      imagePath,
      targetUrl,
    ).toString()

  // ============================================================
  // IMAGE
  // ============================================================

  const image =
    document.createElement("img")

  image.classList.add(
    "custom-figure-image",
  )

  image.src =
    imageUrl

  image.alt =
    title?.textContent?.trim() ?? ""

  popoverInner.appendChild(
    image,
  )

  // ============================================================
  // LEGEND
  // ============================================================

  const legendElement =
    content.querySelector("em")

  if (legendElement) {
    const legend =
      document.createElement("p")

    legend.classList.add(
      "custom-figure-legend",
    )

    legend.innerHTML =
      legendElement.innerHTML

    popoverInner.appendChild(
      legend,
    )
  }

  return true
}