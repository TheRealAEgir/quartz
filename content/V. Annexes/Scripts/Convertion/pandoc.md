pandoc -f markdown-yaml_metadata_block+implicit_figures+fenced_divs `
  -t docx+native_numbering `
  "V. Annexes/Pandoc/Full.md" `
  -o "V. Annexes/Pandoc/Full.docx" `
  --resource-path="." `
  --reference-doc="V. Annexes/Pandoc/word_reference.docx" `
  --bibliography="V. Annexes/Pandoc/zotero_references.bib" `
  --citeproc `
  --csl="V. Annexes/Pandoc/Nature_Conversion.csl" `
  --lua-filter="V. Annexes/Pandoc/custom.lua" `
  --metadata link-citations=true