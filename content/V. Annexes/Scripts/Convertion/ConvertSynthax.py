import argparse
from pathlib import Path
import re

# ============================================================
# CONFIGURATION
# ============================================================

parser = argparse.ArgumentParser()

parser.add_argument("--vault", required=True)
parser.add_argument("--source", required=True)
parser.add_argument("--output", required=True)
parser.add_argument("--replacement", required=True)
parser.add_argument("--boundaries", required=True)

args = parser.parse_args()

VAULT_PATH = Path(args.vault)
SOURCE_DIR = VAULT_PATH / args.source
OUTPUT_DIR = VAULT_PATH / args.output
REPLACEMENTS_FILE = VAULT_PATH / args.replacement
BOUNDARIES = args.boundaries


# True  = only show what would be changed
# False = actually create the converted files
DRY_RUN = False


# ============================================================
# READ REPLACEMENT FILE
# ============================================================

def load_replacements():

    replacements = []

    with REPLACEMENTS_FILE.open(
        "r",
        encoding="utf-8"
    ) as f:

        for line_number, line in enumerate(f, start=1):

            line = line.rstrip("\n\r").strip()

            # Ignore empty lines
            if not line:
                continue

            # Ignore Markdown headings
            if line.startswith("#"):
                continue

            # Ignore lines without the separator
            if "→" not in line:
                continue

            # Split only on the first arrow
            original, replacement = line.split("→", 1)

            original = original.strip()
            replacement = replacement.strip()

            if not original:
                print(
                    f"WARNING: empty source text "
                    f"on line {line_number}"
                )
                continue

            replacements.append(
                (original, replacement)
            )

    return replacements


# ============================================================
# SPLIT YAML FRONTMATTER
# ============================================================

def split_yaml(text):

    if not text.startswith("---"):
        return "", text

    lines = text.splitlines(keepends=True)

    if lines[0].strip() != "---":
        return "", text

    for i in range(1, len(lines)):

        if lines[i].strip() in ("---", "..."):

            yaml_part = "".join(
                lines[:i + 1]
            )

            body_part = "".join(
                lines[i + 1:]
            )

            return yaml_part, body_part

    # No valid closing delimiter
    return "", text


# ============================================================
# PROTECT EXISTING WIKILINKS
# ============================================================

def protect_wikilinks(text):

    protected = []

    def replace(match):

        protected.append(match.group(0))

        return (
            f"___WIKILINK_PROTECTED_"
            f"{len(protected) - 1}___"
        )

    text = re.sub(
        r"\[\[[^\]]+\]\]",
        replace,
        text
    )

    return text, protected


def restore_wikilinks(text, protected):

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

    protected = []

    pattern = r"```[\s\S]*?```"

    def replace(match):

        protected.append(match.group(0))

        return (
            f"___CODE_BLOCK_PROTECTED_"
            f"{len(protected) - 1}___"
        )

    text = re.sub(
        pattern,
        replace,
        text
    )

    return text, protected


def restore_code_blocks(text, protected):

    for i, block in enumerate(protected):

        text = text.replace(
            f"___CODE_BLOCK_PROTECTED_{i}___",
            block
        )

    return text


# ============================================================
# APPLY REPLACEMENTS
# ============================================================

def apply_replacements(
    text,
    replacements
):

    all_changes = []

    # Longer source strings first.
    # This prevents, for example, "T cell" from being
    # replaced before "CD8+ T cell".
    replacements = sorted(
        replacements,
        key=lambda x: len(x[0]),
        reverse=True
    )

    for original, replacement in replacements:

        escaped = re.escape(original)

        pattern = re.compile(
            rf"(?:(?<=^)|(?<=[{BOUNDARIES}]))"
            rf"({escaped})"
            rf"(?=$|[{BOUNDARIES}])"
        )

        matches = list(
            pattern.finditer(text)
        )

        if not matches:
            continue

        count = len(matches)

        text = pattern.sub(
            replacement,
            text
        )

        all_changes.append(
            (original, replacement, count)
        )

    return text, all_changes


# ============================================================
# PROCESS ONE FILE
# ============================================================

def process_file(
    source_path,
    destination_path,
    replacements
):

    original_text = source_path.read_text(
        encoding="utf-8"
    )

    # --------------------------------------------------------
    # YAML is completely separated from the text processing.
    # --------------------------------------------------------

    yaml_part, body = split_yaml(
        original_text
    )

    # --------------------------------------------------------
    # Protect content that should not be modified.
    # --------------------------------------------------------

    body, protected_code = protect_code_blocks(
        body
    )

    body, protected_links = protect_wikilinks(
        body
    )

    # --------------------------------------------------------
    # Apply replacements.
    # --------------------------------------------------------

    body, changes = apply_replacements(
        body,
        replacements
    )

    # --------------------------------------------------------
    # Restore protected content.
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
    # Write new file.
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

    return changed, changes


# ============================================================
# MAIN
# ============================================================

def main():

    print("=" * 70)
    print("Text syntax conversion")
    print("=" * 70)

    print(f"\nSource:")
    print(f"  {SOURCE_DIR}")

    print(f"\nReplacement file:")
    print(f"  {REPLACEMENTS_FILE}")

    print(f"\nOutput:")
    print(f"  {OUTPUT_DIR}")

    if DRY_RUN:
        print(
            "\n*** DRY RUN — no files will be written ***"
        )

    # --------------------------------------------------------
    # Load replacement rules
    # --------------------------------------------------------

    replacements = load_replacements()

    print(
        f"\nLoaded {len(replacements)} replacement rules."
    )

    # --------------------------------------------------------
    # Process Markdown files
    # --------------------------------------------------------

    files = list(
        SOURCE_DIR.rglob("*.md")
    )

    print(
        f"Found {len(files)} Markdown files."
    )

    total_changed = 0
    total_replacements = 0

    for source_path in files:

        relative_path = source_path.relative_to(
            SOURCE_DIR
        )

        destination_path = (
            OUTPUT_DIR / relative_path
        )

        changed, changes = process_file(
            source_path,
            destination_path,
            replacements
        )

        if changed:

            total_changed += 1

            print(
                f"\n✓ {relative_path}"
            )

            for original, replacement, count in changes:

                total_replacements += count

                print(
                    f"    {original} → "
                    f"{replacement} × {count}"
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