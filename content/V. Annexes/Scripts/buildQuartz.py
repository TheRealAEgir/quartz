from pathlib import Path
import subprocess
import sys
import shutil

# ============================================================
# CONFIGURATION
# ============================================================

# Original Obsidian vault
SOURCE_VAULT = Path(
    r"C:/Users/10053234/Documents/Thesis_bibliography/Obsidian"
)

# Alternative vault used exclusively for Quartz
QUARTZ_VAULT = Path(
    r"C:/Users/10053234/Documents/Quartz/content"
)

# Scripts are located next to this script
SCRIPT_DIR = Path(__file__).resolve().parent / "Convertion"

# ============================================================
# SOURCE / OUTPUT CONFIGURATION
# ============================================================

DICTIONARY_FILE = "V. Annexes/Abréviations.md"
DICTIONARY_OUTPUT = "V. Annexes/Abréviations"

# Directory containing notes that should be processed
# Adjust this to whatever identifies your "text" notes.
TEXT_SOURCES = [
    "I. Introduction",
    "II. Matériel et Méthodes",
    "III. Résultats",
    "IV. Discussion",
]

# Replacement rules
REPLACEMENT_FILE = "V. Annexes/Scripts/text_replacement.md"

# Used by ConvertWikilinks
DEFINITIONS_DIR = "V. Annexes/Abréviations"

# Characters allowed immediately before/after replacements
BOUNDARIES = r' ()\.,;:"[]'


# ============================================================
# HELPER
# ============================================================

def run_script(script_name, *arguments):

    script_path = SCRIPT_DIR / script_name

    print("\n" + "=" * 70)
    print(f"RUNNING: {script_name}")
    print("=" * 70)

    subprocess.run(
        [
            sys.executable,
            str(script_path),
            *arguments
        ],
        check=True
    )


# ============================================================
# STEP 1 — CREATE QUARTZ VAULT
# ============================================================

def create_quartz_vault():

    print("=" * 70)
    print("CREATING QUARTZ VAULT")
    print("=" * 70)

    # Remove previous generated vault
    if QUARTZ_VAULT.exists():

        print(
            f"\nRemoving existing Quartz vault:\n"
            f"{QUARTZ_VAULT}"
        )

        shutil.rmtree(QUARTZ_VAULT)

    # Copy the complete original vault
    print(
        f"\nCopying:\n"
        f"  {SOURCE_VAULT}\n"
        f"→ {QUARTZ_VAULT}"
    )

    shutil.copytree(
        SOURCE_VAULT,
        QUARTZ_VAULT
    )

    print("\n✓ Quartz vault created.")


# ============================================================
# STEP 2 — CREATE DICTIONARY NOTES
# ============================================================

def create_dictionary():

    run_script(
        "ConvertDictionary.py",

        "--vault",
        str(QUARTZ_VAULT),

        "--dictionary_file",
        DICTIONARY_FILE,

        "--dictionary_output",
        DICTIONARY_OUTPUT
    )


# ============================================================
# STEP 3 — CREATE WIKILINKS
# ============================================================


def create_wikilinks(TEXT_SOURCE):

    run_script(
        "ConvertWikilinks.py",

        "--vault",
        str(QUARTZ_VAULT),

        "--source",
        TEXT_SOURCE,

        "--output",
        TEXT_SOURCE,

        "--definitions",
        DEFINITIONS_DIR
    )


# ============================================================
# STEP 4 — CONVERT SYNTAX
# ============================================================

def convert_syntax(TEXT_SOURCE):

    run_script(
        "ConvertSynthax.py",

        "--vault",
        str(QUARTZ_VAULT),

        "--source",
        TEXT_SOURCE,

        "--output",
        TEXT_SOURCE,

        "--replacement",
        REPLACEMENT_FILE,

        "--boundaries",
        BOUNDARIES
    )


# ============================================================
# MAIN
# ============================================================

def main():

    print("\n")
    print("#" * 70)
    print("# BUILD QUARTZ VAULT")
    print("#" * 70)

    # --------------------------------------------------------
    # 1. Copy original vault
    # --------------------------------------------------------

    create_quartz_vault()

    # --------------------------------------------------------
    # 2. Create individual dictionary notes
    # --------------------------------------------------------

    create_dictionary()

    # --------------------------------------------------------
    # 3. Convert words into wikilinks
    # --------------------------------------------------------
    
    for TEXT_SOURCE in TEXT_SOURCES:
        create_wikilinks(TEXT_SOURCE)

    # --------------------------------------------------------
    # 4. Convert shorthand syntax
    # --------------------------------------------------------

    for TEXT_SOURCE in TEXT_SOURCES:
        convert_syntax(TEXT_SOURCE)

    # --------------------------------------------------------
    # Finished
    # --------------------------------------------------------

    print("\n" + "#" * 70)
    print("# QUARTZ VAULT READY")
    print("#" * 70)

    print(
        f"\nGenerated vault:\n"
        f"{QUARTZ_VAULT}"
    )


if __name__ == "__main__":
    main()