from pathlib import Path
import subprocess
import sys
import shutil
import os
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

# Files to merge
MERGE = [
    {
        "input": [
            "C:/Users/10053234/Documents/Quartz/content/I. Introduction/2.2.1 Fonctions TRM.md",
            "C:/Users/10053234/Documents/Quartz/content/I. Introduction/2.2.2 Recirculation TRM.md"
        ],
        "output": "C:/Users/10053234/Documents/Quartz/content/I. Introduction/2.2 Fonctions TRM.md"
    },
    {
        "input": [
            "C:/Users/10053234/Documents/Quartz/content/I. Introduction/2.3.1 Différenciation TRM.md",
            "C:/Users/10053234/Documents/Quartz/content/I. Introduction/2.3.2 Précurseurs TRM.md"
        ],
        "output": "C:/Users/10053234/Documents/Quartz/content/I. Introduction/2.3 Différenciation TRM.md"
    },
    {
        "input": [
            "C:/Users/10053234/Documents/Quartz/content/I. Introduction/2.4.1 Phénotype TRM.md",
            "C:/Users/10053234/Documents/Quartz/content/I. Introduction/2.4.2 Hétérogénéité TRM.md",
            "C:/Users/10053234/Documents/Quartz/content/I. Introduction/2.4.3 Epigénétique TRM.md",
            "C:/Users/10053234/Documents/Quartz/content/I. Introduction/2.4.3 Epigénétique TRM.md"
        ],
        "output": "C:/Users/10053234/Documents/Quartz/content/I. Introduction/2.4 Caractérisation TRM.md"
    }
]

#Copy text_replacement
# Source file path
src_file = "V. Annexes/Scripts/text_replacement.md"

# Destination file path (new name)
dst_file = "C:/Users/10053234/Documents/Quartz/syntax-verified.md"

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
BOUNDARIES = r''' ()\.,;:"[]\/-'’\n*<>'''

# ============================================================
# MERGE FUNCTION
# ============================================================

def merge_and_remove_md_files(input_files, output_file):
    """
    Merge multiple .md files into a single output file and remove the original files.
    Handles cases where the output file is also an input file.
    """
    # Check if the output file is in the input files
    if output_file in input_files:
        # Create a temporary file name for the output
        temp_output_file = output_file + ".temp"
    else:
        temp_output_file = output_file

    combined_content = []

    for file_path in input_files:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
            combined_content.append(content)

    merged_content = "\n\n".join(combined_content)

    # Write the merged content to the temporary output file
    with open(temp_output_file, 'w', encoding='utf-8') as file:
        file.write(merged_content)

    # Remove the original input files
    for file_path in input_files:
        if os.path.exists(file_path):
            os.remove(file_path)
            print(f"Removed: {file_path}")

    # If the output file was originally an input file, rename the temporary file to the output file
    if output_file in input_files:
        os.rename(temp_output_file, output_file)
        print(f"Renamed temporary file to {output_file}")
    else:
        print(f"Merged content written to {output_file}")

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
    # 5. Merge .md files that has to (temporary disabled)
    # --------------------------------------------------------

    #for entry in MERGE:
    #    merge_and_remove_md_files(entry["input"], entry["output"])

    # --------------------------------------------------------
    # 6. Copy text_replacement to be used by quartz on build
    # --------------------------------------------------------

    shutil.copy(src_file, dst_file)
    
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