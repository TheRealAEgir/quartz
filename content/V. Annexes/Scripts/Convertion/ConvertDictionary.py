import argparse
from pathlib import Path
import re
import shutil

# ============================================================
# CONFIGURATION
# ============================================================

parser = argparse.ArgumentParser()

parser.add_argument("--vault", required=True)
parser.add_argument("--dictionary_file", required=True)
parser.add_argument(
    "--dictionary_output",
    default="Output/Dictionary"
)

args = parser.parse_args()

VAULT_PATH = Path(args.vault)
input_file = VAULT_PATH / args.dictionary_file
output_dir = VAULT_PATH / args.dictionary_output

# ============================================================
# CREATE / CLEAN OUTPUT DIRECTORY
# ============================================================

output_dir.mkdir(parents=True, exist_ok=True)

# Remove existing Markdown files
# This prevents old filenames from remaining after changes.
for old_file in output_dir.glob("*.md"):
    old_file.unlink()

# ============================================================
# READ INPUT FILE
# ============================================================

with open(input_file, "r", encoding="utf-8") as f:
    content = f.read()

# ============================================================
# SPLIT INTO ENTRIES
# ============================================================

pattern = r'# (.*?)\n(.*?)(?=\n# |$)'

sections = re.findall(
    pattern,
    content,
    re.DOTALL
)

# ============================================================
# FUNCTION TO CREATE FILENAME
# ============================================================

def make_filename(title):

    filename = title.strip()

    # --------------------------------------------------------
    # Remove everything between parentheses
    # --------------------------------------------------------
    #
    # TRM (Cellule) -> TRM
    # PD1 (codé par PDCD1) -> PD1
    #
    filename = re.sub(
        r'\s*\(.*?\)',
        '',
        filename
    )

    # --------------------------------------------------------
    # Remove HTML tags
    # --------------------------------------------------------
    #
    # T<sub>RM</sub> -> TRM
    # T<sup>...</sup> -> ...
    #
    filename = re.sub(
        r'<[^>]+>',
        '',
        filename
    )

    # --------------------------------------------------------
    # Remove Markdown formatting
    # --------------------------------------------------------
    #
    # **TRM** -> TRM
    # *TRM*   -> TRM
    #
    filename = filename.replace("*", "")
    filename = filename.replace("_", "")

    # --------------------------------------------------------
    # Remove characters that are problematic in filenames
    # --------------------------------------------------------

    filename = re.sub(
        r'[<>:"/\\|?]',
        '',
        filename
    )

    # --------------------------------------------------------
    # Replace whitespace with a single space
    # --------------------------------------------------------

    filename = re.sub(
        r'\s+',
        ' ',
        filename
    ).strip()

    return filename + ".md"


# ============================================================
# PROCESS EACH ENTRY
# ============================================================

for title, body in sections:

    title = title.strip()

    # --------------------------------------------------------
    # Remove empty lines from body
    # --------------------------------------------------------

    body = "\n".join(
        line for line in body.split("\n")
        if line.strip()
    ).strip()

    # --------------------------------------------------------
    # CREATE FILENAME
    # --------------------------------------------------------

    filename = make_filename(title)

    output_path = output_dir / filename

    # --------------------------------------------------------
    # WRITE NOTE
    # --------------------------------------------------------

    with open(output_path, "w", encoding="utf-8") as f:

        f.write(
            f"# {title}\n\n"
            f"{body}\n"
        )

    print(f"→ {filename}")

# ============================================================
# SUMMARY
# ============================================================

print(f"\nDone! Created {len(sections)} notes.")
print(f"Output directory: {output_dir}")