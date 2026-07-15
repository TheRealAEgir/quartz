L'épuisement a été étudié de manière épigénétique par [[Philip_Nature_2017]], en utilisant un modèle de priming avec une infection avec LM exprimant un antigène dérivé de SV40, puis de cancer du foie exprimant le même antigène inductilbe par traitement au tamoxifène. Il a été observé que les lymphocytes subissent de grand changements 5 jours et entre 7 et 14 jours après l'apparition de la tumeur, suggérant que l'épuisement pourrait être un phénomène en deux étapes [[Philip_Nature_2017]]. De plus, seul les lymphocytes extraits avant le jour 12 peuvent être restaurés par un traitement *ex vivo* avec de l'IL-15, indiquant que le dysfonction n'est plus plastique après cette période [[Philip_Nature_2017]].
D'un point de vue moléculaire, NFATC1 a été identifié comme un facteur jouant un rôle dans l'épuisement par rapport à une infection aiguë, tandis que les voie Wnt/TCF1 sont perdues entre le jour 7 et 14 de l'épuisement [[Philip_Nature_2017]].

Il existe une population de TRM épuisée et spécifique de l'antigène CD68+CD103- et une population moins épuisée CD69+CD103+ dans un modèle de tumeur du sein chez la souris [[Virassamy_CancerCell_2023]].

En cas l'épuisement des lymphocytes T CD8+ après une infection LCMV, ceux-ci expriment des protéines associés avec le phénotype des TRM (CD69, CD103, CXCR6, CD38, CD49a, RUNX3 et répriment Ly6C et CD62L) dans les tissus et deviennent résident [[Park_NatImmunol_2026]].
Après restimulation, les Tex expriment moins de cytokines [[Park_NatImmunol_2026]].
Bien que les TRM et les TEX partagent l'expression de nombreuses protéines, et surtout de protéines de résidence, leur transcriptome et leur épigénome reste largement différent [[Park_NatImmunol_2026]]. Les deux populations dépendent de RUNX3, HOBIT et BLIMP1, mais seuls les TEX dépendent de TOX [[Park_NatImmunol_2026]]. Il est possible de mettre en place des signatures de gènes capable de distinguer les TRM des TEX, et les marqueurs protéiques les plus efficaces sont CD73 pour les TRM et CD200R pour les TEX, respectivement [[Park_NatImmunol_2026]].
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