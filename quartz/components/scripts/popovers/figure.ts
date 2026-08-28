export function buildFigurePopupContent(
  html: Document,
  popoverInner: HTMLElement,
  targetUrl: URL,
) {
  // ----------------------------------------------------------
  // Find article content
  // ----------------------------------------------------------

  const content =
    html.querySelector("article.popover-hint") ??
    html.querySelector(".popover-hint")

  if (!content) {
    return false
  }

  // ----------------------------------------------------------
  // Title
  // ----------------------------------------------------------

  const title = content.querySelector("h1")

  if (!title) {
    return false
  }

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

  // ----------------------------------------------------------
  // Find embedded image
  //
  // SVG:
  //   <object data="figure-1.svg">
  //
  // PNG/JPG/etc.:
  //   <img src="figure-3.png">
  // ----------------------------------------------------------

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

  // ----------------------------------------------------------
  // Resolve image path relative to the figure note
  // ----------------------------------------------------------

  const imageUrl =
    new URL(
      imagePath,
      targetUrl,
    ).toString()

  // ----------------------------------------------------------
  // Create popup image
  // ----------------------------------------------------------

  const image =
    document.createElement("img")

  image.classList.add(
    "custom-figure-image",
  )

  image.src = imageUrl

  image.alt =
    title.textContent?.trim() ?? ""

  popoverInner.appendChild(
    image,
  )

  // ----------------------------------------------------------
  // Figure legend
  //
  // The legend is the <em> element following the image.
  // ----------------------------------------------------------

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