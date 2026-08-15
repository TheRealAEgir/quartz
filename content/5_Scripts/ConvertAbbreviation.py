import re
import os

# ============================================================
# SETTINGS
# ============================================================

# Directory containing the input Markdown files
input_dir = "C:/Users/10053234/Documents/Thesis_bibliography/Obsidian/Plan/Liens"

# Directory where the split notes will be created
output_dir = "C:/Users/10053234/Documents/Thesis_bibliography/Obsidian/Output"

# ============================================================
# CREATE OUTPUT DIRECTORY
# ============================================================

os.makedirs(output_dir, exist_ok=True)

# ============================================================
# LOOP OVER ALL MARKDOWN FILES
# ============================================================

for input_file in os.listdir(input_dir):

    # Only process Markdown files
    if not input_file.lower().endswith(".md"):
        continue

    input_path = os.path.join(input_dir, input_file)

    # Extract parent filename without path or extension
    parent_filename = os.path.splitext(input_file)[0]

    print(f"\nProcessing: {input_file}")

    # ========================================================
    # READ FILE
    # ========================================================

    with open(input_path, "r", encoding="utf-8") as f:
        content = f.read()

    # ========================================================
    # SPLIT INTO TOP-LEVEL HEADINGS
    # ========================================================

    pattern = r'# (.*?)\n(.*?)(?=\n# |$)'

    sections = re.findall(
        pattern,
        content,
        re.DOTALL
    )

    # ========================================================
    # PROCESS EACH SECTION
    # ========================================================

    for title, body in sections:

        # Remove empty lines from the body
        body = "\n".join(
            line for line in body.split("\n")
            if line.strip()
        )

        # ----------------------------------------------------
        # EXTRACT TYPE FROM PARENTHESES
        # ----------------------------------------------------

        type_match = re.search(r'\((.*?)\)', title)

        if type_match:
            note_type = type_match.group(1).strip()

            # Remove "(Type)" from the filename only
            filename_title = re.sub(
                r'\s*\(.*?\)',
                '',
                title
            ).strip()

        else:
            note_type = None
            filename_title = title.strip()

        # ----------------------------------------------------
        # CREATE SAFE FILENAME
        # ----------------------------------------------------

        filename = re.sub(
            r'[^\w\-_]',
            '_',
            filename_title
        )

        filename = f"{filename}.md"

        output_path = os.path.join(
            output_dir,
            filename
        )

        # ----------------------------------------------------
        # CREATE YAML FRONTMATTER
        # ----------------------------------------------------

        # Parent is ALWAYS included
        yaml_frontmatter = f"""---
parent: "{parent_filename}"
"""

        # Type is only included when parentheses exist
        if note_type:
            yaml_frontmatter += f'type: "{note_type}"\n'

        yaml_frontmatter += "---\n"

        # ----------------------------------------------------
        # WRITE NOTE
        # ----------------------------------------------------

        with open(output_path, "w", encoding="utf-8") as f:

            f.write(
                f"{yaml_frontmatter}"
                f"# {title}\n\n"
                f"{body}\n"
            )

        print(f"  → {filename}")

    print(f"  Split {len(sections)} notes.")

print("\nDone!")