<%*
// Get the current note content
let content = await tp.file.read();

// Extract inline tags (e.g., #tag)
const inlineTags = [...content.matchAll(/#(\w+)/g)].map(match => match[1]);

// Get the existing YAML frontmatter
const yamlMatch = content.match(/---[\s\S]*?---/);
let yaml = yamlMatch ? yamlMatch[0] : ``;

// Update the tags line in the YAML
const updatedYaml = yaml.replace(/tags: \[[^\]]*\]/, `tags: [${inlineTags.join(', ')}]`);

// Replace the YAML in the note
const updatedContent = content.replace(yaml, updatedYaml);

// Update the note with the new content
await tp.file.replace_selection(updatedContent);
*%>