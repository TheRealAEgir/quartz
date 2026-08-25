export function buildFigurePopupContent(
  html: Document,
  popoverInner: HTMLElement,
  targetUrl: URL,
) {
  // ----------------------------------------------------------
  // Title
  // ----------------------------------------------------------

  const title = html.querySelector("h1")

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
  // DEBUG: inspect the HTML returned for the figure note
  // ----------------------------------------------------------

  const debug =
    document.createElement("pre")

  debug.classList.add(
    "custom-figure-debug",
  )

  const article =
    html.querySelector(
      "article.popover-hint",
    ) ??
    html.querySelector(
      ".popover-hint",
    )

  debug.textContent =
    `FIGURE POPUP DEBUG\n\n` +
    `Note URL:\n${targetUrl.toString()}\n\n` +
    `HTML contains img: ${
      html.querySelector("img")
        ? "YES"
        : "NO"
    }\n\n` +
    `Images found: ${
      html.querySelectorAll("img").length
    }\n\n` +
    `--- ARTICLE HTML ---\n\n` +
    (
      article?.innerHTML ??
      "NO ARTICLE FOUND"
    )

  popoverInner.appendChild(
    debug,
  )
  

  // ----------------------------------------------------------
  // Find the embedded figure
  // ----------------------------------------------------------

  const sourceObject =
    html.querySelector("object") as
      | HTMLObjectElement
      | null

  const sourceImage =
    html.querySelector("img") as
      | HTMLImageElement
      | null

  const embeddedElement =
    sourceObject ?? sourceImage

  if (!embeddedElement) {
    console.warn(
      "FIGURE POPUP: no embedded image found",
      targetUrl.toString(),
    )

    return false
  }

  const imagePath =
    embeddedElement.getAttribute(
      sourceObject ? "data" : "src",
    )

  if (!imagePath) {
    console.warn(
      "FIGURE POPUP: embedded image has no path",
    )

    return false
  }

  // ----------------------------------------------------------
  // Resolve image path
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

  popoverInner.appendChild(image)

  // ----------------------------------------------------------
  // Return success
  // ----------------------------------------------------------

    return true
}