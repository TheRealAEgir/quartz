Dans une infection secondaire, les TRM sont important pour la formation d'une réponse mémoire systémique passant par la formation de TEM exHOBIT [[Behr_NatImmunol_2020]].

L'analyse cinétique de ces données a montré que les TRM semblaient se différencier des TCIRC dès 7 jours après l'infection et que FCGRIIB était un marqueur précoce de la différenciation vers les lymphocytes T mémoires circulants [[Buquicchio_Immunity_2024b]].

En utilisant l'ATACseq sur des cellules SLEC et MPEC, [[Gray_Immunity_2017]] ont démontré que la différenciation vers les SLEC plutôt que les cellules mémoires pouvait être lié à la répréssion épigénétique des gène mémoires. Cette répression est médiée en grande partie par EZH2 et les marques H3K27me3, et la délétion de ce facteur affecte la transition des cellules naïves et mémoires vers les cellules effectrices [[Gray_Immunity_2017]]. Finalement, FOXO1 pourrait limiter l'activité de EZH2 en l'empêchant de se fixer sur ces cibles [[Gray_Immunity_2017]].

Bien que les MPEC n'expriment pas KLRG1, il semblerait qu'un partie des cellules KLRG1 soient capables de perdre l'expression de KLRG1 et de se différencier en cellules mémoires [[Herndler-Brandstetter_Immunity_2018]]. Par rapport aux cellules KLRG1, ces cellules ex-KLRG1 ressemblent transcriptomiquement plus aux KLRG1- qu'aux KLRG1+ et gardent des capacités stem-like [[Herndler-Brandstetter_Immunity_2018]]. Finalement, la délétion du facteur de transcription BACH2 affecte grandement les exKLRG1 [[Herndler-Brandstetter_Immunity_2018]].

D'un point de vue épigénétique, les cellules mémoires ressemblent aux cellules effectrices, mais n'expriment pas les même gènes [[Philip_Nature_2017]].

L'IL-10 sécrété par les Treg a un impact sur la formation des lymphocytes mémoires pendant la phase d'initiation et la phase mémoire d'une inflammation LCMV chez la souris, ainsi que l'inhibition de la maturation des DC [[Laidlaw_NatImmunol_2015]].
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