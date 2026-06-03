Les TRM peuvent se différencier à partir de cellule naïves dans une souris sans infection et sans microbiote [[Casey_JImmunol_2012]]. Ce résultat pourrait être expliqué de deux façons; soit il existe des TRM n'ayant jamais reconnu l'antigène et qui sont rentrés dans les tissus par "remplissage" suite à la prolifération homéostatique (ce qui va à l'encontre de leur "mémoire"), soit ils se sont développé contre des auto-antigènes qui peuvent être dérivés de lésions ou de micro-lésions. A noter que cette étude est relativement précoce (2012), et que les cellules ont été catégorisés "TRM" à cause de leur phénotype uniquement (CD69+CD103+CD62L-Ly6C-GZMB+CD122-CD27-).
Dans les cancers, les TRM spécifiques d'antigènes tumoraux expriment CD39 [[Duhen_NatCommun_2018]], alors que PD1 et TIGIT sont aussi exprimé par les bystander [[Simoni_Nature_2018]].
En utilisant une approche de sc RNA-TCR seq couplé à du clonage de séquences TCR et de screening de réactivité antigénique, [[Caushi_Nature_2021]] décris qu'il existe des TRM spécifiques d'antigènes tumoraux et des TRM bystander spécifiques d'antiègnes viraux dans les tumeur du cnacer des poumons.
En utilisant la combinason d'un infection localisée et de l'injection de DNFB, [[Weiss_eLife_2025]] ont pu comparer les TRM générés en présence et en absence d'antigène et montrent qu'il existerait une compétition pour le TGFb dans la peau. Dans ce modèle, la quantité de TGFb serait limitante pour les TRM et permettrai la sélection des clonotypes les plus pertinant, à l'instar de l'IL2 et l'IL7 pour les autres types de cellules [[Weiss_eLife_2025]].
Dans un modèle d'infection influenza, il a été observé que les TRM CD4+ spécifiques pour les peptides dérivés de NP ont un phénotype Th17/Th1, tandis que ceux qui sont spécifiques de HA ont un phénotype plutôt Tfh/cytotoxique [[Mathew_JExpMed_2026]].
Les TRM spécifiques d'antigènes mais pas bystander jouent un rôle dans la phase d'équilibre de l'immunosurveillance dans un modèle d'injection de cellules tumorales au niveau de l'épithélium chez la souris [[Park_Nature_2019]].
Dans les cancers, les TRM ont des séquences TCR enrichies pour des séquences spécifiques d'antigènes viraux, alors que les TEX ont plutôt des séquences spécifiques d'antiègnes tumoraux [[Burn_NatImmunol_2026]].
Les TRM CD4 dans les tissus vaginaux suite à une immunisation HSV ont des séquences TCR très expandues, suggérant que des cellules sont spécifiques des antigènes d'HSV [[Iijima_Science_2014a]].
Les lymphocytes T spécifiques d'antigènes peuvent être détectés en utilisant la trogocytose, un processus durant lequel le lymphocyte échange une partie de sa membrane avec sa cellule cible. Ce mécanisme permet au lymphocyte d'exprimer à sa surface des protéines qu'il n'exprime normalement pas, ce qui le permet de le distinguer des autres lymphocytes. En utilisant la trogocytose dans les cancers HGCOS, il a été décrit que les lymphocytes T spécifiques des antigènes tumoraux ont un phénotype semblablent aux TRM avec des signes d'épuisement [[Anadon_CancerCell_2022]].
En utilisant le scTCRseq sur des TRM, [[Anadon_CancerCell_2022]] décrivent que l'immunogénécité des cancers ovariens dépend d'un faible nombre de séquences TCR (3% des séquences retrouvées dans la tumeur).
En clonant la séquence TCR de TRM dans des cellules Jurkat et en faisant des co-culture autologue, il a été validé que ces séquences sont spécifiques d'antigènes portés par ces cellules tumorales [[Anadon_CancerCell_2022]].
Il a été montré que des lymphocytes clonaux peuvent se différencier préférentiellement vers les TRM ou les TCIRCM, mais que la spécificité à l'antigène n'est pas impliqué dans ce mécanisme [[Kok_JExpMed_2020]].
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