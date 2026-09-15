export function buildFigurePopupContent(
  html: Document,
  popoverInner: HTMLElement,
  targetUrl: URL,
) {
  // ==========================================================
  // DEBUG VERSION
  //
  // This function ALWAYS produces a popup.
  // ==========================================================

  // ----------------------------------------------------------
  // Gather information
  // ----------------------------------------------------------

  const pathname = targetUrl.pathname

  const content =
    html.querySelector("article.popover-hint") ??
    html.querySelector(".popover-hint")

  const title =
    content?.querySelector("h1") ??
    html.querySelector("h1")

  const sourceObject =
    content?.querySelector(
      "object[data]",
    ) as HTMLObjectElement | null

  const sourceImage =
    content?.querySelector(
      "img[src]",
    ) as HTMLImageElement | null

  const allImages =
    Array.from(
      html.querySelectorAll("img"),
    ) as HTMLImageElement[]

  const allObjects =
    Array.from(
      html.querySelectorAll("object"),
    ) as HTMLObjectElement[]

  // ----------------------------------------------------------
  // Extract image paths
  // ----------------------------------------------------------

  const objectData =
    sourceObject?.getAttribute("data") ?? "NONE"

  const imageSrc =
    sourceImage?.getAttribute("src") ?? "NONE"

  const allImageSources =
    allImages
      .map((img) => img.getAttribute("src"))
      .filter(Boolean)
      .join("\n")

  const allObjectSources =
    allObjects
      .map((obj) => obj.getAttribute("data"))
      .filter(Boolean)
      .join("\n")

  // ----------------------------------------------------------
  // Test URL resolution
  // ----------------------------------------------------------

  let resolvedImageUrl = "NOT RESOLVED"

  const testImagePath =
    objectData !== "NONE"
      ? objectData
      : imageSrc !== "NONE"
        ? imageSrc
        : null

  if (testImagePath) {
    try {
      resolvedImageUrl =
        new URL(
          testImagePath,
          targetUrl,
        ).toString()
    } catch (error) {
      resolvedImageUrl =
        `ERROR: ${String(error)}`
    }
  }

  // ----------------------------------------------------------
  // Build visible debug popup
  // ----------------------------------------------------------

  const debug =
    document.createElement("div")

  debug.style.fontSize = "13px"
  debug.style.lineHeight = "1.4"

  debug.innerHTML = `
    <h2>FIGURE POPUP DEBUG</h2>

    <hr>

    <h3>1. Target URL</h3>
    <pre>${escapeHtml(pathname)}</pre>

    <h3>2. Content container</h3>
    <pre>${
      content
        ? `${content.tagName}.${content.className}`
        : "NOT FOUND"
    }</pre>

    <h3>3. Title</h3>
    <pre>${
      title
        ? title.textContent ?? "EMPTY"
        : "NOT FOUND"
    }</pre>

    <h3>4. Object[data]</h3>
    <pre>${escapeHtml(objectData)}</pre>

    <h3>5. img[src]</h3>
    <pre>${escapeHtml(imageSrc)}</pre>

    <h3>6. ALL images in fetched HTML</h3>
    <pre>${
      escapeHtml(
        allImageSources || "NONE"
      )
    }</pre>

    <h3>7. ALL objects in fetched HTML</h3>
    <pre>${
      escapeHtml(
        allObjectSources || "NONE"
      )
    }</pre>

    <h3>8. Resolved image URL</h3>
    <pre>${escapeHtml(resolvedImageUrl)}</pre>

    <h3>9. Fetched content HTML</h3>

    <details>
      <summary>Click to show HTML</summary>

      <pre style="
        white-space: pre-wrap;
        max-height: 500px;
        overflow: auto;
        font-size: 10px;
      ">${escapeHtml(
        content?.innerHTML ??
        html.body?.innerHTML ??
        "NO HTML"
      )}</pre>
    </details>
  `

  popoverInner.appendChild(debug)

  // IMPORTANT:
  // Always report success so the popup remains visible.
  return true
}


// ============================================================
// Escape HTML
// ============================================================

function escapeHtml(
  value: string,
): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}