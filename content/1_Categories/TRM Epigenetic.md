L'épigénétique permet la régulation de l'expression des gènes en contrôlant l'accessibilité de ceux-ci par la machinerie transcriptionnelle. Il est aujourd'hui bien connu que les lymphocytes T sont régulés de manière épigénétique, et particulièrement au cours de processus comme la différenciation des lymphocytes T effecteurs en lymphocytes T mémoires, l'épuisement ou la sénéscence (will need references here). De manière surprenante, peu d'étude sur l'épigénétique des TRM ont été réalisées, et celles-ci sont relativement récente. Cette partie est consacrée aux découvertes mise en évidence par ces études.

La première étude d'envergure sur l'épigénétique des TRM a été réalisé par [[Buquicchio_Immunity_2024b]] en utilisant le sc ATAC-RNA seq sur des cellules de différents organes et à différents moments après une infection LCMV Armtrong chez la souris. De nombreux gènes ont été mis en évidence dans cette étude; Certains étaient déjà mis en évidence par les études de RNAseq (KL2, CCR7, SELL, S1PR5, ZEB2, CX3CR1), d'autres étaient exclusivement visiblent d'un point de vue épigénétique. Il existe des différences entre les organes, mais il existe aussi une signature épigénétique "commune" [[Buquicchio_Immunity_2024b]].
L'analyse cinétique de ces données a montré que les TRM semblaient se différencier des TCIRC dès 7 jours après l'infection et que FCGRIIB était un marqueur précoce de la différenciation vers les lymphocytes T mémoires circulants [[Buquicchio_Immunity_2024b]].
Les TRM ont un profile épigénétique distinct des TEX générés dans un modèle LCMV Cl13, malgré des similarités. Les TEX sont enrichis en motif pour TOX, TCF1, IRF4 et EOMES tandis que les TRM sont enrichis pour RUNX3 [[Buquicchio_Immunity_2024b]].

Dans un modèle d'infection par LCMV, les TRM ont une chromatine ouverte pour CD69/NR4A1 et fermée pour KLF2/S1PR1, 7 jours après l'infection [[Milner_Nature_2017]].

En utilisant le RNA seq et le WGBS, [[Fonseca_NatImmunol_2020]] décrivent qu'alors que le transcriptome des TRM est plus proche des lymphocytes T effecteurs que des TEM/TCM, le profil épigénétique des TRM est similaire avec les TCM/TEM.
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