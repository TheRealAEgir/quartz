# 0. Préface - La réponse immunitaire adaptative

# 1. La réponse immunitaire adaptative mémoire
## [[1.1 Différenciation des lymphocytes T en lymphocyte T effecteur ou mémoire]] (3-4 pages)
## [[1.2 Hétérogénéité des lymphocytes T mémoires et mécanisme d'action]] (3-4 pages)

```dataviewjs
// Specify the target note's name (without .md extension)
const targetNoteName = "1_Categories/1. La réponse immunitaire adaptative mémoire/1.2 Les différents types de lymphocytes T mémoires et leurs rôles";

// Construct the full path (assuming the note is in the root of your vault)
const targetNotePath = targetNoteName.endsWith(".md") ? targetNoteName : targetNoteName + ".md";

// Get the target note
const targetNote = app.vault.getAbstractFileByPath(targetNotePath);

if (!targetNote) {
    dv.paragraph(`Note "${targetNoteName}" not found.`);
} else {
    // Read the target note's content
    const noteContent = await app.vault.read(targetNote);

    // Use regex to find all Markdown headings
    const headingRegex = /^(#+)\s+(.*?)\s*$/gm;
    const headings = [];
    let match;

    while ((match = headingRegex.exec(noteContent)) !== null) {
        const level = match[1].length; // Number of '#' characters
        const headingText = match[2].trim();
        headings.push({ level, text: headingText });
    }

    // Display the headings as plain text with original heading levels and empty lines
    if (headings.length > 0) {
        let output = "";
        for (const heading of headings) {
            const hashes = "#".repeat(heading.level);
            output += `${hashes} ${heading.text}\n\n`;
        }
        dv.paragraph(output.trim());
    } else {
        dv.paragraph(`No headings found in "${targetNoteName}".`);
    }
}
```
## [[1.3 Dysfonction des lymphocytes T]] rôle (3-4 pages)

```dataviewjs
// Specify the target note's name (without .md extension)
const targetNoteName = "1_Categories/1. La réponse immunitaire adaptative mémoire/1.3 Dysfonction des lymphocytes T";

// Construct the full path (assuming the note is in the root of your vault)
const targetNotePath = targetNoteName.endsWith(".md") ? targetNoteName : targetNoteName + ".md";

// Get the target note
const targetNote = app.vault.getAbstractFileByPath(targetNotePath);

if (!targetNote) {
    dv.paragraph(`Note "${targetNoteName}" not found.`);
} else {
    // Read the target note's content
    const noteContent = await app.vault.read(targetNote);

    // Use regex to find all Markdown headings
    const headingRegex = /^(#+)\s+(.*?)\s*$/gm;
    const headings = [];
    let match;

    while ((match = headingRegex.exec(noteContent)) !== null) {
        const level = match[1].length; // Number of '#' characters
        const headingText = match[2].trim();

        // Skip the specified headings
        if (headingText !== "List of used references" && headingText !== "List of references still to be used") {
            headings.push({ level, text: headingText });
        }
    }

    // Display the headings as plain text with original heading levels and empty lines
    if (headings.length > 0) {
        let output = "";
        for (const heading of headings) {
            const hashes = "#".repeat(heading.level);
            output += `${hashes} ${heading.text}\n\n`;
        }
        dv.paragraph(output.trim());
    } else {
        dv.paragraph(`No headings found in "${targetNoteName}".`);
    }
}
```

# 2. Les lymphocytes T résidents mémoires
### 2.0 [[TRM Historic]]
### 2.1 [[TRM Phenotype]] and [[TRM Epigenetic]] (10-15 pages)

```dataviewjs
// Specify the target note's name (without .md extension)
const targetNoteName = "1_Categories/2. Les lymphocytes T résidents mémoires/TRM Phenotype";

// Construct the full path (assuming the note is in the root of your vault)
const targetNotePath = targetNoteName.endsWith(".md") ? targetNoteName : targetNoteName + ".md";

// Get the target note
const targetNote = app.vault.getAbstractFileByPath(targetNotePath);

if (!targetNote) {
    dv.paragraph(`Note "${targetNoteName}" not found.`);
} else {
    // Read the target note's content
    const noteContent = await app.vault.read(targetNote);

    // Use regex to find all Markdown headings
    const headingRegex = /^(#+)\s+(.*?)\s*$/gm;
    const headings = [];
    let match;

    while ((match = headingRegex.exec(noteContent)) !== null) {
        const level = match[1].length; // Number of '#' characters
        const headingText = match[2].trim();

        // Skip the specified headings
        if (headingText !== "List of used references" && headingText !== "List of references still to be used") {
            headings.push({ level, text: headingText });
        }
    }

    // Display the headings as plain text with original heading levels and empty lines
    if (headings.length > 0) {
        let output = "";
        for (const heading of headings) {
            const hashes = "#".repeat(heading.level);
            output += `${hashes} ${heading.text}\n\n`;
        }
        dv.paragraph(output.trim());
    } else {
        dv.paragraph(`No headings found in "${targetNoteName}".`);
    }
}
```
## 2.2 [[TRM Heterogeneity]] (5-10 pages)
```dataviewjs
// Specify the target note's name (without .md extension)
const targetNoteName = "1_Categories/2. Les lymphocytes T résidents mémoires/TRM Heterogeneity";

// Construct the full path (assuming the note is in the root of your vault)
const targetNotePath = targetNoteName.endsWith(".md") ? targetNoteName : targetNoteName + ".md";

// Get the target note
const targetNote = app.vault.getAbstractFileByPath(targetNotePath);

if (!targetNote) {
    dv.paragraph(`Note "${targetNoteName}" not found.`);
} else {
    // Read the target note's content
    const noteContent = await app.vault.read(targetNote);

    // Use regex to find all Markdown headings
    const headingRegex = /^(#+)\s+(.*?)\s*$/gm;
    const headings = [];
    let match;

    while ((match = headingRegex.exec(noteContent)) !== null) {
        const level = match[1].length; // Number of '#' characters
        const headingText = match[2].trim();

        // Skip the specified headings
        if (headingText !== "List of used references" && headingText !== "List of references still to be used") {
            headings.push({ level, text: headingText });
        }
    }

    // Display the headings as plain text with original heading levels and empty lines
    if (headings.length > 0) {
        let output = "";
        for (const heading of headings) {
            const hashes = "#".repeat(heading.level);
            output += `${hashes} ${heading.text}\n\n`;
        }
        dv.paragraph(output.trim());
    } else {
        dv.paragraph(`No headings found in "${targetNoteName}".`);
    }
}
```
### 2.3 [[TRM Caracteristics]]
```dataviewjs
// Specify the target note's name (without .md extension)
const targetNoteName = "1_Categories/2. Les lymphocytes T résidents mémoires/TRM Caracteristics";

// Construct the full path (assuming the note is in the root of your vault)
const targetNotePath = targetNoteName.endsWith(".md") ? targetNoteName : targetNoteName + ".md";

// Get the target note
const targetNote = app.vault.getAbstractFileByPath(targetNotePath);

if (!targetNote) {
    dv.paragraph(`Note "${targetNoteName}" not found.`);
} else {
    // Read the target note's content
    const noteContent = await app.vault.read(targetNote);

    // Use regex to find all Markdown headings
    const headingRegex = /^(#+)\s+(.*?)\s*$/gm;
    const headings = [];
    let match;

    while ((match = headingRegex.exec(noteContent)) !== null) {
        const level = match[1].length; // Number of '#' characters
        const headingText = match[2].trim();

        // Skip the specified headings
        if (headingText !== "List of used references" && headingText !== "List of references still to be used") {
            headings.push({ level, text: headingText });
        }
    }

    // Display the headings as plain text with original heading levels and empty lines
    if (headings.length > 0) {
        let output = "";
        for (const heading of headings) {
            const hashes = "#".repeat(heading.level);
            output += `${hashes} ${heading.text}\n\n`;
        }
        dv.paragraph(output.trim());
    } else {
        dv.paragraph(`No headings found in "${targetNoteName}".`);
    }
}
```
### 2.4 [[TRM Differenciation]] (15-20 pages)
```dataviewjs
// Specify the target note's name (without .md extension)
const targetNoteName = "1_Categories/2. Les lymphocytes T résidents mémoires/TRM Differenciation";

// Construct the full path (assuming the note is in the root of your vault)
const targetNotePath = targetNoteName.endsWith(".md") ? targetNoteName : targetNoteName + ".md";

// Get the target note
const targetNote = app.vault.getAbstractFileByPath(targetNotePath);

if (!targetNote) {
    dv.paragraph(`Note "${targetNoteName}" not found.`);
} else {
    // Read the target note's content
    const noteContent = await app.vault.read(targetNote);

    // Use regex to find all Markdown headings
    const headingRegex = /^(#+)\s+(.*?)\s*$/gm;
    const headings = [];
    let match;

    while ((match = headingRegex.exec(noteContent)) !== null) {
        const level = match[1].length; // Number of '#' characters
        const headingText = match[2].trim();

        // Skip the specified headings
        if (headingText !== "List of used references" && headingText !== "List of references still to be used") {
            headings.push({ level, text: headingText });
        }
    }

    // Display the headings as plain text with original heading levels and empty lines
    if (headings.length > 0) {
        let output = "";
        for (const heading of headings) {
            const hashes = "#".repeat(heading.level);
            output += `${hashes} ${heading.text}\n\n`;
        }
        dv.paragraph(output.trim());
    } else {
        dv.paragraph(`No headings found in "${targetNoteName}".`);
    }
}
```
## 2.5 [[TRM Precursors]] (4-5 pages)

# 3. Fonction des lymphocytes T résidents mémoires dans les pathologies
## 3.1 [[TRM Effector]] and [[TRM Effector]] and [[TRM Recirculation]](5-6 pages)
##### 3.1.1 Positionnement stratégique des TRM dans l'organisme
##### 3.1.2 Rôle d'alerte et de recrutement des acteurs cellulaires
##### 3.1.3 Rôle cytotoxique des TRM
##### 3.1.4 Recirculation des TRM : Rôle de protection à distance
## 3.2. [[TRM Cancer]] and [[TRM Cancer]] and [[TRM Cancer]] and [[TRM Effector]] (~20 pages)
##### 3.2.1 Introduction sur l'immunosurveillance
##### 3.2.2 Observations sur les TRM dans le cancer
##### 3.2.3 Rôle pronostique des TRM dans le cancer
##### 3.2.3 Introduction sur les immunothérapies
##### 3.2.4 Mode d'action des immunothérapies (Tpex, remplacement clonal)
##### 3.2.4 Rôle prédictifs des TRM dans un contexte d'immunothérapie
##### 3.2.5 Classification TRM/TEX et changement de paradigme
## 3.3 [[TRM Autoimmune diseases]] (5-6 pages)
## 3.4 [[TRM Therapies]] (5-10 pages)
##### 3.4.1 Utilisation des TRM comme outil diagnostic de pronostic et/ou de prédiction
##### 3.4.2 Optimisation des stratégies de vaccins pour générer des TRM
##### 3.4.3 Utilisation des TRM en thérapie cellulaire