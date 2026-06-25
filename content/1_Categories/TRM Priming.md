Priming of TRM using a vaccination with peptide-Ab anti CLEC9A with CpG confered high liver TRM number than with poly(I:C) [[Fernandez-Ruiz_Immunity_2016]].
Dans les tumeurs HGSOC, les Trecirc co-localisent avec les DC CLEC9A, mais pas les TRM [[Anadon_CancerCell_2022]].
En triant et en transferant des lymphocytes T effecteurs de la rate, ou des mLN et iLN, il a été observé que les lymphocytes provenant des mLN sont recrutés plus facilement dans les intestins, en accord avec d'autres observations précédantes [[Masopust_JExpMed_2010]]. Ce résultat suggère que le lieu d'activation peut influencer la différenciation des TRM par rapport à leur localisation. Cependant, la majorité des TRM dans les intestins semblent provenir tout de même de la rate où le nombre de lymphocytes T effecteur est largement supérieur [[Masopust_JExpMed_2010]].
Les cellules dendritiques DC3, mais pas les monocytes ou les cDC2 sont capable d'induire l'expression de CD103 sur des lymphocytes T naïfs en co-culture, et de manière TGFb dépendante [[Bourdely_Immunity_2020]]. L'infiltration des tumeurs de cancer du sein avec des DC3 est positivement correlée à celle des TRM CD69+CD103+ [[Bourdely_Immunity_2020]].
La différenciation des TRM dépend du priming par les cellules dendritiques CD11blowCD8aplha+ ou CD103+, mais pas des CD11bhiCD8aplha- [[Iborra_Immunity_2016]]. Cette effet dépend de la cross-présentation, car le KO de DNGR1 ou de BATF3 a un impact sur la différenciation des TRM [[Iborra_Immunity_2016]]. De plus, la cross-présentation semble affecter la longueur du priming, car les lymphocytes sortent plus rapidement des LN dans les souris KO, expriment plus de S1PR1 et de KLF2, et que le traitement transitoire avec du FTY720 restaure partiellement les effets du KO [[Iborra_Immunity_2016]]. Finalement, la différenciation des lymphocytes T semble être améliorée grâce à l'IL12, l'IL15 et CD24 au moment du priming [[Iborra_Immunity_2016]].
Les mDC sont capables de prédisposer la différenciation des lymphocytes naïfs en TRM dans les LN, via une reprogrammation épigénétique [[Mani_Science_2019a]]. Celle-ci dépend du TGFb activé par ITGAV et des interactions avec le CMH-I [[Mani_Science_2019a]].
Les DC CD1c+, mais pas les DC CD141+ sont capable d'induire l'expression de CD103 sur les lymphocytes T [[Yu_Immunity_2013]]. Cet effet est dépendant du TGFb, qui n'est retrouvé sous sa forme active que sur la membrane des DC CD1c+ [[Yu_Immunity_2013]].
Lors d'une réponse systémique, les monocytes activés par anti-CD40/poly(IC:LC) sécrètent de l'IL10, qui jouerai un rôle autocrine et provoquerai la sécrétion de TGFb et l'expression de CD103 par les lymphocytes T activés lors de cette réponse [[Thompson_CellRep_2019]].
L'exposition au TGFb dès le priming d'un lymphocyte T pourrait favoriser sa différentiation vers un phénotype TRM exprimant CD103 [[Thompson_CellRep_2019]].
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