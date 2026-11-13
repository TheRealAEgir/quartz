#!/usr/bin/env python3
"""
Merge Annexes (Python)

Reads   "V. Annexes/Pandoc/Full links.md"
Writes  "V. Annexes/Pandoc/Full.md"

Features:
- Expands linked thesis notes and recursively expands Markdown embeds.
- Uses article-note YAML citekeys to create Pandoc citations without importing
  the article notes themselves.
- Removes YAML frontmatter from exported notes and optional content after a
  subsequent standalone --- separator.
- Converts Obsidian image embeds into Pandoc-compatible Markdown images.
- Replaces SVG images with PNG equivalents when available.
- Converts remaining Obsidian wikilinks into standard Markdown links.
- Separates figure titles (Pandoc figure captions) from figure legends
  (the Word paragraph style "Figure Legend").
- Normalizes Markdown headings for Pandoc.
"""

import os
import re
import sys
from pathlib import Path
from urllib.parse import quote, unquote


SOURCE = "V. Annexes/Pandoc/Full links.md"
OUTPUT = "V. Annexes/Pandoc/Full.md"

ARTICLE_FOLDERS = ("A finir", "Articles", "Reviews")

LINK_RE = re.compile(
    r"(!?)\[\[([^ \]|#][^]|#]*|[^]|#]+)(#[^]|]*)?(?:\|([^\]]*))?\]\]"
)

IMAGE_EXT = {
    ".png", ".jpg", ".jpeg", ".gif", ".bmp",
    ".svg", ".webp", ".tif", ".tiff",
}

BINARY_EXT = IMAGE_EXT | {
    ".pdf", ".mp3", ".mp4", ".ogg",
    ".wav", ".webm", ".excalidraw",
}


def build_article_index(vault: Path) -> dict[str, str]:
    """
    Map article-note names (not their contents) to Zotero/Pandoc citekeys.

    Searches:
        V. Annexes/Notes Articles/A finir/
        V. Annexes/Notes Articles/Articles/
        V. Annexes/Notes Articles/Reviews/
    """
    article_root = vault / "V. Annexes" / "Notes Articles"
    index: dict[str, str] = {}
    duplicates = set()

    for folder in ARTICLE_FOLDERS:
        folder_path = article_root / folder

        if not folder_path.is_dir():
            print(f"WARNING: Article folder not found: {folder_path}")
            continue

        for note in folder_path.rglob("*.md"):
            content = note.read_text(encoding="utf-8-sig")

            frontmatter = re.match(
                r"\A---[ \t]*\r?\n(.*?)\r?\n---[ \t]*(?:\r?\n|\Z)",
                content,
                re.DOTALL,
            )
            if not frontmatter:
                continue

            match = re.search(
                r"(?m)^citekey\s*:\s*[\"']?([^\"'\r\n]+?)[\"']?[ \t]*$",
                frontmatter.group(1),
            )
            if not match:
                continue

            citekey = match.group(1).strip()
            note_name = note.stem
            key = note_name.casefold()

            if key in index:
                duplicates.add(note_name)
                continue

            index[key] = citekey

    if duplicates:
        print("WARNING: Duplicate article-note names (first match retained):")
        for name in sorted(duplicates):
            print(f"  - {name}")

    print(f"Indexed {len(index)} article notes.")
    return index


def convert_article_links(text: str, article_index: dict[str, str]) -> str:
    """
    Convert links to article notes into Pandoc citations.

    [[Article_Name]]                  -> [@citekey]
    [[Article_Name|Gerlach et al.]]   -> Gerlach et al. [-@citekey]

    Article-note links are converted to citations; article notes are never
    expanded or copied into the thesis.
    """
    link_re = re.compile(
        r"(!?)\[\[([^\]|#]+)(#[^\]|]*)?(?:\|([^\]]*))?\]\]"
    )

    def replace_link(match: re.Match) -> str:
        embed = match.group(1)
        target = match.group(2).strip()
        alias = match.group(4)

        # Never turn an embed into a citation.
        if embed:
            return match.group(0)

        note_name = target.replace("\\", "/").split("/")[-1]
        note_name = re.sub(r"\.md$", "", note_name, flags=re.IGNORECASE)
        citekey = article_index.get(note_name.casefold())

        if not citekey:
            return match.group(0)

        if alias is not None and alias.strip():
            return f"{alias.strip()} [-@{citekey}]"

        return f"[@{citekey}]"

    return link_re.sub(replace_link, text)


def find_vault(start: Path) -> Path:
    for folder in (start, *start.parents):
        if (folder / ".obsidian").is_dir():
            return folder
    return start if start.is_dir() else start.parent


def find_note(link: str, vault: Path, source: Path) -> Path | None:
    """Find a Markdown note using its relative path or basename."""
    note_path = Path(link)

    if note_path.suffix.lower() == ".md":
        note_path = note_path.with_suffix("")

    relative_note = note_path.with_suffix(".md")
    candidates = [
        source.parent / relative_note,
        vault / relative_note,
    ]
    candidates.extend(vault.rglob(f"{note_path.name}.md"))

    for candidate in candidates:
        if candidate.is_file():
            return candidate.resolve()

    return None


def find_file(link: str, vault: Path, source: Path) -> Path | None:
    """Resolve an attachment relative to its source note first."""
    decoded_link = unquote(link)
    candidates = [
        source.parent / decoded_link,
        vault / decoded_link,
    ]
    candidates.extend(vault.rglob(Path(decoded_link).name))

    for candidate in candidates:
        if candidate.is_file():
            return candidate.resolve()

    return None


def remove_export_excluded_content(text: str) -> str:
    """
    Remove YAML frontmatter, then keep only content before the first later
    standalone --- separator.

    This deliberately does not treat the opening YAML delimiter as the
    export-exclusion separator.
    """
    # Strip a conventional initial YAML frontmatter block, if present.
    opening = re.match(r"\A---[ \t]*\r?\n", text)
    if opening:
        closing = re.search(
            r"(?m)^[ \t]*(?:---|\.\.\.)[ \t]*\r?$",
            text[opening.end():],
        )
        if closing:
            after_frontmatter = opening.end() + closing.end()
            text = text[after_frontmatter:]
            text = text.lstrip("\r\n")
        else:
            # An unmatched opening delimiter is safer left intact than
            # accidentally deleting the whole note.
            return text.strip()

    # Remove any note-specific export-excluded tail.
    separator = re.search(r"(?m)^[ \t]*---[ \t]*\r?$", text)
    if separator:
        text = text[:separator.start()]

    return text.strip()


def read_note(note: Path) -> str:
    return remove_export_excluded_content(
        note.read_text(encoding="utf-8-sig")
    )


def normalize_markdown(text: str) -> str:
    """
    Normalize headings and spacing without modifying fenced code blocks.
    """
    text = re.sub(
        r"([^\n])([ \t]+)(#{1,6}[ \t]+\d+(?:\.\d+)*[ \t]+\S)",
        r"\1\n\n\3",
        text,
    )

    lines = text.splitlines()
    output = []
    in_fence = False
    fence_marker = None

    for line in lines:
        stripped = line.lstrip()
        fence_match = re.match(r"^(`{3,}|~{3,})", stripped)

        if fence_match:
            marker = fence_match.group(1)
            if not in_fence:
                in_fence = True
                fence_marker = marker[0]
            elif marker[0] == fence_marker:
                in_fence = False
                fence_marker = None

            output.append(line)
            continue

        if in_fence:
            output.append(line)
            continue

        is_heading = re.match(r"^#{1,6}[ \t]+\S", stripped) is not None
        if is_heading:
            if output and output[-1].strip():
                output.append("")
            output.append(stripped)
            output.append("")
        else:
            output.append(line)

    return "\n".join(output)


def convert_figure_blocks(text: str, vault: Path) -> str:
    """
    Convert a figure block of the form:

        ###### Figure 1 - Figure title
        ![](path/to/image.svg)
        *Descriptive legend.*

    into a Pandoc implicit figure whose caption is only the title, followed
    by a fenced div styled as the Word paragraph style "Figure Legend".

    Pandoc's input format must include +implicit_figures+fenced_divs.
    """
    lines = text.splitlines()
    output = []
    i = 0

    heading_re = re.compile(
        r"^\s*#{1,6}\s+(Figure\s+\d+(?:\s*[-–—:]\s*.*)?)\s*$",
        re.IGNORECASE,
    )
    image_re = re.compile(
        r"^\s*!\[(?P<alt>.*?)\]\s*\\?\(\s*"
        r"(?:<(?P<angle>[^>]+)>|(?P<plain>.+?))"
        r"\s*\\?\)\s*\\?\s*$"
    )
    legend_re = re.compile(
        r"^\s*(?:&#x20;\s*)?\*(?P<legend>.+?)\*\s*\\?\s*$"
    )

    def skip_blank(index: int) -> int:
        while index < len(lines) and not lines[index].strip():
            index += 1
        return index

    def convert_image_path(path: str) -> str:
        decoded = unquote(path.strip())
        image = Path(decoded)

        candidates = [image] if image.is_absolute() else [vault / image, image]

        for candidate in candidates:
            if not candidate.is_file():
                continue

            if candidate.suffix.lower() != ".svg":
                return decoded

            png = candidate.with_suffix(".png")
            if png.is_file():
                print(f"SVG -> PNG: {candidate.name}")
                return Path(os.path.relpath(png, vault)).as_posix()

            print(f"WARNING: PNG not found: {png}; keeping SVG.")
            return decoded

        if image.suffix.lower() == ".svg":
            print(f"WARNING: SVG file not found: {decoded}")

        return decoded

    while i < len(lines):
        heading_match = heading_re.match(lines[i])

        if heading_match:
            raw_title = heading_match.group(1).strip()
            title = re.sub(
                r"^Figure\s+\d+\s*[-–—:]\s*",
                "",
                raw_title,
                flags=re.IGNORECASE,
            ).strip()

            image_line = skip_blank(i + 1)
            if image_line < len(lines):
                image_match = image_re.match(lines[image_line])

                if image_match:
                    image_path = (
                        image_match.group("angle")
                        if image_match.group("angle") is not None
                        else image_match.group("plain")
                    ).strip()
                    image_path = convert_image_path(image_path)

                    legend_line = skip_blank(image_line + 1)
                    legend_match = (
                        legend_re.match(lines[legend_line])
                        if legend_line < len(lines)
                        else None
                    )

                    # The image alt text becomes the Pandoc figure caption.
                    if title:
                        output.append(f"![{title}](<{image_path}>)")
                    else:
                        # No title after removing the manual "Figure N -" prefix.
                        output.append(f"![](<{image_path}>)")

                    if legend_match:
                        legend = legend_match.group("legend").strip()
                        output.extend([
                            "",
                            '::: {custom-style="Figure Legend"}',
                            "",
                            legend,
                            "",
                            ":::",
                        ])
                        i = legend_line + 1
                    else:
                        i = image_line + 1

                    continue

        # Also normalize ordinary Markdown images, including SVG paths.
        image_match = image_re.match(lines[i])
        if image_match:
            image_path = (
                image_match.group("angle")
                if image_match.group("angle") is not None
                else image_match.group("plain")
            ).strip()
            image_path = convert_image_path(image_path)
            alt = image_match.group("alt")
            output.append(f"![{alt}](<{image_path}>)")
        else:
            output.append(lines[i])

        i += 1

    return "\n".join(output)


def convert_wikilinks(
    text: str,
    vault: Path,
    source: Path,
    output_parent: Path,
    missing: list[str],
) -> str:
    """
    Convert remaining Obsidian wikilinks into ordinary Markdown links.
    """
    def replace(match: re.Match) -> str:
        bang = match.group(1)
        link = match.group(2).strip()
        heading = match.group(3) or ""
        alias = (match.group(4) or "").strip()

        if bang == "!":
            return match.group(0)

        if link.startswith(("http://", "https://")):
            display = alias or link
            return f"[{display}]({link})"

        note = find_note(link, vault, source)
        if note is None:
            missing.append(link)
            return alias or link

        display = alias or note.stem
        relative = Path(os.path.relpath(note, output_parent)).as_posix()
        relative = quote(relative, safe="/-._~")

        fragment = ""
        if heading:
            heading_text = heading[1:].strip()
            slug = heading_text.lower().replace(" ", "-")
            fragment = "#" + quote(slug, safe="-._~")

        return f"[{display}](<{relative}{fragment}>)"

    return LINK_RE.sub(replace, text)


def expand_embeds(
    text: str,
    vault: Path,
    source: Path,
    visiting: frozenset[Path],
    output_parent: Path,
    missing: list[str],
    article_index: dict[str, str],
) -> str:
    """
    Recursively expand Markdown embeds.

    article_index is passed explicitly from main(); it is not a global and
    is not implicitly available inside this function.
    """
    def replace(match: re.Match) -> str:
        bang = match.group(1)
        link = match.group(2).strip()
        extension = Path(link).suffix.lower()

        if bang != "!":
            return match.group(0)

        # Image embeds.
        if extension in IMAGE_EXT:
            image = find_file(link, vault, source)
            if image is None:
                print(f"WARNING: Image not found: {link}")
                return match.group(0)

            if image.suffix.lower() == ".svg":
                png_image = image.with_suffix(".png")
                if png_image.is_file():
                    image = png_image
                else:
                    print(
                        f"WARNING: PNG conversion not found for {image}. "
                        "Keeping SVG reference."
                    )

            relative = Path(os.path.relpath(image, vault)).as_posix()
            caption = match.group(4) or image.stem
            relative = quote(relative, safe="/-._~")
            return f"![{caption}](<{relative}>)"

        # Other binary embeds remain unchanged.
        if extension in BINARY_EXT:
            return match.group(0)

        # Markdown note embeds.
        note = find_note(link, vault, source)
        if note is None:
            missing.append(link)
            return match.group(0)

        resolved_note = note.resolve()
        if resolved_note in visiting:
            print(f"WARNING: Circular embed detected: {note}")
            return match.group(0)

        content = read_note(note)
        content = expand_embeds(
            content,
            vault,
            note,
            visiting | {resolved_note},
            output_parent,
            missing,
            article_index,
        )

        # Citation links must be converted before ordinary wikilinks.
        content = convert_article_links(content, article_index)
        content = convert_wikilinks(
            content,
            vault,
            note,
            output_parent,
            missing,
        )
        return content

    return LINK_RE.sub(replace, text)


def main() -> None:
    vault = find_vault(Path(__file__).resolve().parent)
    article_index = build_article_index(vault)

    source = vault / SOURCE
    output = vault / OUTPUT

    if not source.is_file():
        sys.exit(f"Source note not found: {source}")

    text = source.read_text(encoding="utf-8-sig")
    missing: list[str] = []
    replaced = 0

    def replace_top(match: re.Match) -> str:
        nonlocal replaced

        bang = match.group(1)
        link = match.group(2).strip()

        # Keep binary embeds for the embed-processing stage.
        if bang == "!" and Path(link).suffix.lower() in BINARY_EXT:
            return match.group(0)

        # Article notes have already become citations, so they are not expanded.
        note = find_note(link, vault, source)
        if note is None:
            missing.append(link)
            return match.group(0)

        if note.resolve() == source.resolve():
            return match.group(0)

        content = read_note(note)
        content = expand_embeds(
            content,
            vault,
            note,
            frozenset({note.resolve()}),
            output.parent,
            missing,
            article_index,
        )

        replaced += 1
        return content

    # IMPORTANT: Convert article-note links in Full links.md BEFORE expansion.
    # This prevents personal article notes from being expanded into the thesis.
    text = convert_article_links(text, article_index)

    # Expand the thesis notes explicitly listed in Full links.md.
    merged = LINK_RE.sub(replace_top, text)

    # Catch article citations in the top-level thesis notes that were expanded.
    merged = convert_article_links(merged, article_index)

    # Convert all remaining Obsidian links only after citation conversion.
    merged = convert_wikilinks(
        merged,
        vault,
        source,
        output.parent,
        missing,
    )

    # Split figure title and descriptive legend, then normalize Markdown.
    merged = convert_figure_blocks(merged, vault)
    merged = normalize_markdown(merged)

    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(merged.rstrip() + "\n", encoding="utf-8")

    print(f"Merged {replaced} notes -> {output}")

    if missing:
        unique_missing = sorted(set(missing))
        print("Unresolved links:")
        for item in unique_missing:
            print(f"  - {item}")


if __name__ == "__main__":
    main()
