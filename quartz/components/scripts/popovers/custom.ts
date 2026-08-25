export function buildCustomPopupContent(
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