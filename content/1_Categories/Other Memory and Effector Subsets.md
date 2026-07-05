Il a été imaginé que le pool de cellules mémoires est fixé, et que le nombre de cellules mémoires total ne peut pas dépasser un certain seuil. Dans ce modèle, le nombre de cellules est déterminé par la sécrétion en cytokines (IL-7, IL-15) dont la concentration est limitante.
Cependant, en utilisant une stratégie de vaccination HPBB (Heterologous prime boost boost) contenant plusieurs série d'injection de vaccin différents contre le même antigène, il a été observé que le nombre total de lymphocytes T circulants et de T résidents dans les muqueuses (SG, FRT) peut augmenter [[Schenkel_JImmunol_2016]]. Dans ce modèle, les cellules ont moins de HP, mais il existe aussi des populations (CD62L- circulants, ou TRM selon les tissus) dont la survie et/ou HP est indépendante de l'IL15 [[Schenkel_JImmunol_2016]].
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