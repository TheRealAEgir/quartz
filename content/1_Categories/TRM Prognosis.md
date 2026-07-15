L'infiltration par les lymphocytes CD103+CD39+ est associé avec une meilleur survie des patients HNSCC [[Duhen_NatCommun_2018]].
Une signature de TRM CD103+ extraite de bulk RNAseq est meilleure pour prédire le prognostic que CD8 et CD103 seuls [[Savas_NatMed_2018]].
Une signature extratie d'une population de TRM dans un modèle de cancer du sein chez la souris permet de prédire le pronostic de patients humain atteints de cancers [[Virassamy_CancerCell_2023]].
Une signature TRM est associée avec le pronostic des patients atteints de cancer, mais seule la signature TEX permet de prédire la réponse aux immunothérapies [[Burn_NatImmunol_2026]]
Avec des analyses TCGA LUAD et des signatures extraites de scRNAseq sur NSCLC, il a été observé que les patients avec un score plus important pour des TRM "pre-exhausted" était associée avec une meilleure survie des patients que ceux avec un score important en TRM "exhausted" [[Guo_NatMed_2018]].
Dans les cancers HGSOC, les TRMstem exprimant TCF1 ont un impact positif plus important que les TRM n'exprimant pas TCF1. Les Tcric exprimant TCF1 n'ont, quant à eux, pas d'impact sur le pronostic [[Anadon_CancerCell_2022]].
Le transfert de lymphocytes TRM triés ou de Trecirc CD103- montre que les TRM sont plus efficaces à ralentir la croissance tumorale chez la souris [[Anadon_CancerCell_2022]].
Les TRM CD103+CD49a+ ont un impact pronostic chez les patients NSCLC lorsqu'ils sont localisés au sein de la tumeur [[Paolini_JImmunotherCancer_2024]].
Parmi les patients avec une forte infiltration CD8, l'utilisation d'une signature dérivée des TRM dans laquelle l'effet des TEX a un impact pronostique sur une cohorte de TNBC [[Park_NatImmunol_2026]].
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