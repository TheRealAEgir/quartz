import argparse
from pathlib import Path
import re
import shutil

# ============================================================
# CONFIGURATION
# ============================================================

parser = argparse.ArgumentParser()

parser.add_argument("--vault", required=True)
parser.add_argument("--source", default="1_Categories")
parser.add_argument("--output", default="Output")
parser.add_argument("--definitions", default="Output")

args = parser.parse_args()

VAULT_PATH = Path(args.vault)
SOURCE_DIR = VAULT_PATH / args.source
OUTPUT_DIR = VAULT_PATH / args.output
DEFINITIONS_DIR = VAULT_PATH / args.definitions

# ============================================================
# SETTINGS
# ============================================================

# True = create the new files.
# False = only print what WOULD be changed.
DRY_RUN = False

# Characters allowed immediately before/after a definition.
BOUNDARIES = r' ()\.,;:"'

# ============================================================
# FIND DEFINITIONS
# ============================================================

def find_definitions():
    """
    Find every Markdown file in Output/ recursively.

    The filename (without .md) is considered the definition.
    """

    definitions = {}
    duplicates = {}

    for path in DEFINITIONS_DIR.rglob("*.md"):
        definition = path.stem

        if definition in definitions:
            duplicates.setdefault(definition, []).append(path)
            duplicates[definition].append(definitions[definition])
        else:
            definitions[definition] = path

    # Remove duplicate definitions from the usable dictionary.
    for definition in duplicates:
        definitions.pop(definition, None)

    return definitions, duplicates


# ============================================================
# SPLIT YAML FRONTMATTER
# ============================================================

def split_yaml(text):
    """
    Separate YAML frontmatter from the Markdown body.

    Returns:
        yaml_part, body_part

    If there is no YAML frontmatter:
        "", text
    """

    if not text.startswith("---"):
        return "", text

    lines = text.splitlines(keepends=True)

    if len(lines) == 0 or lines[0].strip() != "---":
        return "", text

    for i in range(1, len(lines)):
        if lines[i].strip() in ("---", "..."):
            yaml_part = "".join(lines[:i + 1])
            body_part = "".join(lines[i + 1:])
            return yaml_part, body_part

    # No closing YAML delimiter found.
    # Treat the whole file as normal Markdown.
    return "", text


# ============================================================
# PROTECT EXISTING WIKILINKS
# ============================================================

def protect_wikilinks(text):
    """
    Temporarily replace existing [[wikilinks]] with placeholders.

    This prevents definitions inside existing wikilinks from being
    modified.
    """

    protected = []

    def replace(match):
        protected.append(match.group(0))
        return f"___WIKILINK_PROTECTED_{len(protected) - 1}___"

    text = re.sub(r"\[\[[^\]]+\]\]", replace, text)

    return text, protected


def restore_wikilinks(text, protected):
    """
    Restore previously protected wikilinks.
    """

    for i, link in enumerate(protected):
        text = text.replace(
            f"___WIKILINK_PROTECTED_{i}___",
            link
        )

    return text


# ============================================================
# PROTECT CODE BLOCKS
# ============================================================

def protect_code_blocks(text):
    """
    Protect fenced Markdown code blocks so that definitions
    inside code are not converted.
    """

    protected = []

    pattern = r"```[\s\S]*?```"

    def replace(match):
        protected.append(match.group(0))
        return f"___CODE_BLOCK_PROTECTED_{len(protected) - 1}___"

    text = re.sub(pattern, replace, text)

    return text, protected


def restore_code_blocks(text, protected):
    """
    Restore protected code blocks.
    """

    for i, block in enumerate(protected):
        text = text.replace(
            f"___CODE_BLOCK_PROTECTED_{i}___",
            block
        )

    return text


# ============================================================
# REPLACE DEFINITIONS
# ============================================================

def replace_definitions(text, definitions):
    """
    Replace valid occurrences of definitions with [[definition]].

    A valid occurrence must have an allowed boundary on both sides.

    Example:

        "CXCR6 is important"
            -> "[[CXCR6]] is important"

        "(CXCR6)"
            -> "([[CXCR6]])"

        "CXCR6, PD1"
            -> "[[CXCR6]], [[PD1]]"

    But:

        "antiCXCR6"
        "CXCR6positive"
        "CXCR60"

    will NOT be replaced.
    """

    replacements = []

    # Longest definitions first.
    sorted_definitions = sorted(
        definitions.keys(),
        key=len,
        reverse=True
    )

    for definition in sorted_definitions:

        # Escape the definition because filenames can contain
        # regex-special characters.
        escaped = re.escape(definition)

        # ----------------------------------------------------
        # IMPORTANT:
        #
        # (?<![^BOUNDARIES])
        #
        # means the preceding character must either:
        # - not exist, or
        # - belong to the allowed boundary set.
        #
        # Same principle for the following character.
        # ----------------------------------------------------

        pattern = re.compile(
            rf"(?:(?<=^)|(?<=[{BOUNDARIES}]))"
            rf"({escaped})"
            rf"(?=$|[{BOUNDARIES}])"
        )

        def replacement(match, definition=definition):
            replacements.append(definition)
            return f"[[{definition}]]"

        text = pattern.sub(replacement, text)

    return text, replacements


# ============================================================
# PROCESS ONE FILE
# ============================================================

def process_file(source_path, destination_path, definitions):

    original_text = source_path.read_text(
        encoding="utf-8"
    )

    # --------------------------------------------------------
    # Keep YAML completely untouched
    # --------------------------------------------------------

    yaml_part, body = split_yaml(original_text)

    # --------------------------------------------------------
    # Protect things that should not be modified
    # --------------------------------------------------------

    body, protected_code = protect_code_blocks(body)

    body, protected_links = protect_wikilinks(body)

    # --------------------------------------------------------
    # Replace definitions
    # --------------------------------------------------------

    body, replacements = replace_definitions(
        body,
        definitions
    )

    # --------------------------------------------------------
    # Restore protected content
    # --------------------------------------------------------

    body = restore_wikilinks(
        body,
        protected_links
    )

    body = restore_code_blocks(
        body,
        protected_code
    )

    new_text = yaml_part + body

    changed = new_text != original_text

    # --------------------------------------------------------
    # Write to new location
    # --------------------------------------------------------

    if changed and not DRY_RUN:
        destination_path.parent.mkdir(
            parents=True,
            exist_ok=True
        )

        destination_path.write_text(
            new_text,
            encoding="utf-8"
        )

    return changed, replacements


# ============================================================
# MAIN
# ============================================================

def main():

    print("=" * 70)
    print("Definition → Wikilink conversion")
    print("=" * 70)

    print(f"\nSource:")
    print(f"  {SOURCE_DIR}")

    print(f"\nDefinitions:")
    print(f"  {DEFINITIONS_DIR}")

    print(f"\nOutput:")
    print(f"  {OUTPUT_DIR}")

    if DRY_RUN:
        print("\n*** DRY RUN — no files will be written ***")

    # --------------------------------------------------------
    # Find definitions
    # --------------------------------------------------------

    definitions, duplicates = find_definitions()

    print(
        f"\nFound {len(definitions)} unique definitions."
    )

    # --------------------------------------------------------
    # Report duplicates
    # --------------------------------------------------------

    if duplicates:

        print("\nWARNING: duplicate definition names found:")

        for definition, paths in duplicates.items():

            print(f"\n  {definition}")

            # Avoid printing the same path twice.
            seen = set()

            for path in paths:
                path_str = str(path)

                if path_str not in seen:
                    print(f"    - {path}")
                    seen.add(path)

        print(
            "\nThese duplicate definitions will NOT be "
            "automatically converted."
        )

    # --------------------------------------------------------
    # Process all Markdown files
    # --------------------------------------------------------

    files = list(SOURCE_DIR.rglob("*.md"))

    print(
        f"\nFound {len(files)} Markdown files in 1_Categories."
    )

    total_changed = 0
    total_replacements = 0

    for source_path in files:

        # Preserve the directory structure.
        relative_path = source_path.relative_to(
            SOURCE_DIR
        )

        destination_path = (
            OUTPUT_DIR / relative_path
        )

        changed, replacements = process_file(
            source_path,
            destination_path,
            definitions
        )

        if changed:

            total_changed += 1
            total_replacements += len(replacements)

            print(
                f"\n✓ {relative_path}"
            )

            # Count individual definitions.
            counts = {}

            for definition in replacements:
                counts[definition] = (
                    counts.get(definition, 0) + 1
                )

            for definition, count in counts.items():
                print(
                    f"    [[{definition}]] × {count}"
                )

        else:

            print(
                f"  {relative_path} — no changes"
            )

    # --------------------------------------------------------
    # Summary
    # --------------------------------------------------------

    print("\n" + "=" * 70)
    print("SUMMARY")
    print("=" * 70)

    print(
        f"Files scanned:       {len(files)}"
    )

    print(
        f"Files changed:       {total_changed}"
    )

    print(
        f"Total replacements:  {total_replacements}"
    )

    if not DRY_RUN:
        print(
            f"\nConverted files written to:"
            f"\n{OUTPUT_DIR}"
        )

    print("=" * 70)


if __name__ == "__main__":
    main()