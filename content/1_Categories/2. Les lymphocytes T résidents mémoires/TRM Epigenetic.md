L'épigénétique permet la régulation de l'expression des gènes en contrôlant l'accessibilité de ceux-ci par la machinerie transcriptionnelle. Il est aujourd'hui bien connu que les lymphocytes T sont régulés de manière épigénétique, et particulièrement au cours de processus comme la différenciation des lymphocytes T effecteurs en lymphocytes T mémoires, l'épuisement ou la sénéscence. De manière surprenante, relativement peu d'études ont été portées sur l'épigénétique des TRM. Cette partie est consacrée aux découvertes mise en évidence par ces études.

La première étude d'envergure sur l'épigénétique des TRM a été réalisée par [[Buquicchio_Immunity_2024b]] en utilisant le sc ATAC-RNA seq sur des cellules de différents organes et à différents moments après une infection LCMV Armtrong chez la souris. Cette étude a confirmé l'expression de gènes appartement au transcriptome des TRM, mais démontre qu'il existe des gènes exclusivement visibles d'un point de vue épigénétique. Tout comme leur transcriptome, l'épigénétique des TRM est hétérogènes selon les organes, mais il existe des gènes partagés  [[Buquicchio_Immunity_2024b]].
L'analyse cinétique de ces données a montré qu'il existe un carrefour précoce de différenciation des lymphocytes vers les lymphocytes circulants ou les TRM. L'expression de FCGRIIB à 7 dpi marque la différenciation vers les lymphocytes circulants [[Buquicchio_Immunity_2024b]].
Finalement, la comparaison des TRM et des TEX générés par infection LCMV Cl13, montrent que ce deux populations ont un profil distinct [[Buquicchio_Immunity_2024b]].

D'autres découvertes mis en évidence par l'épigénétique incluent la régulation épigénétique des gènes CD69, NR4A1, KLF2 et S1PR1 dès 7 dpi dans les TRM [[Milner_Nature_2017]] mais aussi CD62L, CXCR4 et CCR9 [[Crowl_NatImmunol_2022]]. Certains gènes sont régulés par hyperméthylation de l'ADN et sont retrouvés dans la majorité des tissus (SOX4, WNT1, CCR10, GATA3, IL2RG, CD103), mais la majorité sont plutôt régulé par hypométhation et sont réprimé avec l'âge [[Lam_Immunity_2025]]. Les TRM seraient reprogrammés de manière épigénétique dès le priming des lymphocytes naïfs par le TGFb des mDC [[Mani_Science_2019a]]. De plus, il est connu que le destin cellulaire des lymphocytes naïfs vers les lymphocytes effecteurs ou lymphocytes mémoires (y compris les TRM) est déterminé par le complexe EZH2 [[Kakaradov_NatImmunol_2017]], et les TRM sont relativement proche d'un point de vue épigénétique des TCM et des TEM [[Fonseca_NatImmunol_2020]].
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
