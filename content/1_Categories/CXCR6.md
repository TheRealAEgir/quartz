La déplétion de CXCR6 par KO affecte le nombre de TRM dans les tissus, et les cellules KO sont retrouvées en plus grand nombre dans le sang et les organes lymphoïdes secondaires [[Mathew_JExpMed_2026]]. Les cellules CXCR6 co-localise avec CXCL16 [[Mathew_JExpMed_2026]]. Le traitement avec des anti-CXCL16 affecte le nombre de cellules dans les tissus nasaux après une infection influenza [[Mathew_JExpMed_2026]].
## List of used references
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
```