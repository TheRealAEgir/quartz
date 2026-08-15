Tout comme il existe des lymphocytes MPEC et SLEC capable de donner lieu à des cellules mémoires ou effectrices, il a été étudié s’il existait des précurseurs de TRM. Il a été observé très tôt que les précurseurs de TRM étaient des cellules peu différenciées qui possédaient des capacités de cellule souche. En effet, les lymphocytes KLRG1-, mais pas les lymphocytes KLRG1+, sont capables de se différencier en TRM après transfert dans une souris après une nouvelle infection [[Mackay_NatImmunol_2013]].  Les précurseurs de TRM expriment aussi CXCR3 et nécessitent les récepteurs de chimiokine pour leur entrée dans les tissus mais doivent réprimer CCR7 [[Mackay_NatImmunol_2013]].

L'analyse des séquences TCR entre les différents tissus montre qu'il existe des séquences partagées entre les TRM et les TCM, suggérant une origine clonale des deux types cellulaires [[Gaide_NatMed_2015]] [[Poon_NatImmunol_2023]]. Ce résultat est visible dans modèle d'infection, mais aussi avec du DNFB [[Gaide_NatMed_2015]]. Ce résultat est cohérant avec ceux de l'équipe de [[Sheridan_Immunity_2014]], qui décrit que le taux de MPEC corrèle avec celui des TRM CD103+ dans l'intestin. [[Kok_JExpMed_2020]] précise que les MP 7 jours après l'infection peuvent être divisés en deux d'un point de vue transcriptomique par ressemblance avec les TRM ou les lymphocytes T circulants. Les deux populations obtenues se différencient préférentiellement en TRM et en lymphocyte T circulant mémoire, respectivement [[Kok_JExpMed_2020]]. Ces deux populations sont formées à cause de différences intrinsèques, et la spécificité antigénique n'est pas impliquée [[Kok_JExpMed_2020]]. [[Poon_NatImmunol_2023]] décris que certains clones sont préférentiellement partagés entre certains couples de tissus et que le partage de séquence TCR est plus commun chez les TRM CD8; ce résultat suggère qu'il existe un confinement relatif aux précurseurs de TRM dans certains sites anatomiques.

Bien que les premières observations suggéraient que les lymphocytes T KLRG1+ ne pouvaient pas se différencier en TRM, d'autres travaux ont montrés que la population KLRG1+ était hétérogène et contenait une fraction capable de se différencier en TRM. En effet, le transfert de TCM, TEM et LLEC montre que les LLEC sont recrutés à des taux similaires que les TCM et TEM lorsque l'infection est localisée, et qu'ils perdent l'expression de KLRG1 et CX3CR1 pour CD69 et CD103 à long terme [[Lucas_SciImmunol_2024]]. En utilisant un modèle de fate mapping, il a été observé que les lymphocytes KLRG1+ peuvent perdre l'expression de KLRG1 et se différencier en TRM dans les tissus [[Herndler-Brandstetter_Immunity_2018]]. Les cellules obtenues ont alors un phénotype intermédiaire aux TRM en n'exprimant pas CD103 et en exprimant des niveaux faibles de CD127, CD62L, CX3CR1 et TCF1. Tout de même, celles-ci expriment CD69 et dépendent de l'IL15 [[Herndler-Brandstetter_Immunity_2018]].

En cas de réponse mémoire secondaire, les lymphocytes T mémoires peuvent aussi se différencier en TRM.  Il a été démontré que les TCM semblent plus aptes à se différencier en TRM, et que les TRM formés de cette manière sont différents des TRM primaires par l'expression de CD103 [[Osborn_PLoSPathog_2019]]. De la même manière, les TEX isolés à partir de tumeur sont capable de se différencier en TRM [[Burn_NatImmunol_2026]].

Dans les cancers, des TRM peuvent se former après l'élimination d'une tumeur, et les précurseurs sont KLRG1-CXCR3+ [[Malik_SciImmunol_2017]].

Des séquences TCR partagées sont retrouvées entre les TEM du sang et les TRM dans les tumeurs primaires et les métastases des LN dans les cancers du sein [[Lee_Sci.Immunol._2022]], ce qui suggèrent que l'une des population peut se différencier en l'autre.
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
