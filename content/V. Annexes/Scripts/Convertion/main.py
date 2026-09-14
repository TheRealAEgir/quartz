from pathlib import Path
import subprocess
import sys
import shutil

# ============================================================
# CONFIGURATION
# ============================================================

#1. Synthax conversion of all text notes and dictionary
#2. Create individual notes for popups from dictionary
#3. Convert each occurences from text notes into wikilinks to the
# newly created individual definition note

#Used by all
VAULT_PATH = Path(r"C:/Users/10053234/Documents/Thesis_bibliography/Obsidian")
SOURCE_DIR = "1_Categories"
OUTPUT_DIR = "Output"
BOUNDARIES = r' ()\.,;:"[]'

#Used by Dictionary
DICTIONARY_FILE = "1_Categories/Dictionary.md"
DICTIONARY_OUTPUT = "Output/Dictionary"

#Used by Synthax
REPLACEMENT_FILE = "5_Scripts/text_replacement.md"

#Used by Wikilinks
DEFINITIONS_DIR = "Output"

#Clean ouptut dir
output_dir = VAULT_PATH / OUTPUT_DIR
# Remove the output directory and everything inside it
if output_dir.exists():
    shutil.rmtree(output_dir)
# Recreate it
output_dir.mkdir(parents=True, exist_ok=True)


# ============================================================
# RUN SCRIPT
# ============================================================
SCRIPT_DIR = Path(__file__).parent

subprocess.run([
    sys.executable,
    SCRIPT_DIR / "ConvertDictionary.py",
    "--vault", str(VAULT_PATH),
    "--dictionary_file", DICTIONARY_FILE,
    "--dictionary_output", DICTIONARY_OUTPUT
], check=True)

subprocess.run([
    sys.executable,
    SCRIPT_DIR / "ConvertWikilinks.py",
    "--vault", str(VAULT_PATH),
    "--source", SOURCE_DIR,
    "--output", OUTPUT_DIR,
    "--definitions", DEFINITIONS_DIR
], check=True)

subprocess.run([
    sys.executable,
    SCRIPT_DIR / "ConvertSynthax.py",
    "--vault", str(VAULT_PATH),
    "--source", OUTPUT_DIR,
    "--output", OUTPUT_DIR,
    "--replacement", REPLACEMENT_FILE,
    "--boundaries", BOUNDARIES
], check=True)