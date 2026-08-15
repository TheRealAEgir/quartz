import os
import re
from pathlib import Path

# Path to your Obsidian vault
VAULT_PATH = "C:/Users/10053234/Documents/Thesis_bibliography/Obsidian"

# String to exclude from every linked note (e.g., a header or footer)
EXCLUDE_STRING = """## List of used references
```dataview
LIST
FLATTEN file.outlinks AS outlink
WHERE file.link = this.file.link AND contains(outlink.file.outlinks, this.file.link)
GROUP BY outlink
```
## List of references still to be used
```dataview
LIST
FROM ""
WHERE contains(file.outlinks, this.file.link) AND !contains(this.file.outlinks, file.link)
```"""

def replace_wikilinks_with_content(markdown_text):
    # Find all wikilinks in the text (e.g., [[Note A]])
    wikilinks = re.findall(r'\[\[([^\]]+)\]\]', markdown_text)

    categories_path = Path(VAULT_PATH) / "1_Categories"

    for link in wikilinks:
        # Search recursively in all subfolders of 1_Categories
        matches = list(categories_path.rglob(f"{link}.md"))

        if matches:
            note_path = matches[0]

            # Read the content of the linked note
            with open(note_path, "r", encoding="utf-8") as f:
                note_content = f.read()

            # Remove the excluded string and everything after it
            note_content = note_content.split(EXCLUDE_STRING)[0].strip()

            # Replace the wikilink with the cleaned note content
            markdown_text = markdown_text.replace(f"[[{link}]]", note_content)
        else:
            print(f"Warning: Could not find '{link}.md'")

    return markdown_text

# Example usage
if __name__ == "__main__":
    # Read the main note (e.g., Thesis.md)
    main_note_path = os.path.join(VAULT_PATH, "Thesis.md")
    with open(main_note_path, "r", encoding="utf-8") as f:
        main_content = f.read()

    # Replace wikilinks with note content (excluding the string)
    inlined_content = replace_wikilinks_with_content(main_content)

    # Save the result to a new file (e.g., Thesis_inlined.md)
    output_path = os.path.join(VAULT_PATH, "Thesis_inlined.md")
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(inlined_content)

    print(f"Inlined content saved to {output_path}")