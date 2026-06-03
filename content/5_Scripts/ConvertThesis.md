<%*
// Path to your Obsidian vault (adjust as needed)
const VAULT_PATH = app.vault.getRoot().path;

// String to exclude from linked notes
const EXCLUDE_STRING = `## List of used references
\`\`\`dataview
LIST
FLATTEN file.outlinks AS outlink
WHERE file.link = this.file.link AND contains(outlink.file.outlinks, this.file.link)
GROUP BY outlink
\`\`\`
## List of references still to be used
\`\`\`dataview
LIST
FROM ""
WHERE contains(file.outlinks, this.file.link) AND !contains(this.file.outlinks, file.link)
\`\`\``;

// Function to replace wikilinks with note content
async function replaceWikilinks(markdownText) {
    const wikilinks = markdownText.match(/\[\[([^\]]+)\]\]/g) || [];
    for (const link of wikilinks) {
        const linkName = link.slice(2, -2); // Remove [[ and ]]
        const notePath = `${VAULT_PATH}/${linkName}.md`;
        try {
            const noteContent = await app.vault.read(app.vault.getAbstractFileByPath(notePath));
            const cleanedContent = noteContent.split(EXCLUDE_STRING)[0].strip();
            markdownText = markdownText.replace(link, cleanedContent);
        } catch (e) {
            console.log(`Could not find note: ${linkName}`);
        }
    }
    return markdownText;
}

// Main function
async function main() {
    const currentFile = app.workspace.getActiveFile();
    if (!currentFile) {
        new Notice("No active file!");
        return;
    }

    const content = await app.vault.read(currentFile);
    const inlinedContent = await replaceWikilinks(content);

    // Save the inlined content to a new file
    const newFileName = `${currentFile.basename.replace('.md', '')}_inlined.md`;
    const newFilePath = `${VAULT_PATH}/${newFileName}`;
    await app.vault.create(newFilePath, inlinedContent);

    // Convert to DOCX using Pandoc (requires Pandoc installed)
    const { exec } = require('child_process');
    exec(`pandoc "${newFilePath}" -o "${newFilePath.replace('.md', '.docx')}"`, (error, stdout, stderr) => {
        if (error) {
            new Notice(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            new Notice(`Stderr: ${stderr}`);
            return;
        }
        new Notice(`Converted to DOCX: ${newFilePath.replace('.md', '.docx')}`);
    });
}

// Run the script
main();
*%>