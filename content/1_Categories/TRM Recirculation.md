En utilisant un modèle de fate mapping ciblant HOBIT et une infection secondaire, une population CD69-HOBIT+ a été observé dans les ganglions associé au tissu infecté, mais aussi des populations exHOBIT de TCM et TEM dans le sang. Ces populations pourrait provenir des TRM HOBIT+ de l'infection primaire, suggérant que ceux-ci peuvent recirculer [[Behr_NatImmunol_2020]]. Cependant, le transfert de TRM du foie ou des intestins dans une souris re-infectée par le LCMV ne permet pas de reformer des TCM dans les ganglions lymphatiques et ne forme que des TEM KLRG1+CX3CR1+ dans la rate [[Behr_NatImmunol_2020]]. De plus, la déplétion des TRM avant l'infection impacte la formation des TRM et des TEM [[Behr_NatImmunol_2020]]. Ces résultats suggèrent que les TRM sont en parti capable de recirculation, et, bien qu'ils ne puissent pas e différencier en TCM, ils semblent tout de même important pour la formation de TEM dans une infection secondaire.

En utilisant un agent provoquant l'inflammation dans le bras de donneurs volontaires, des TRM avec des séquences partagées sont retrouvés dans le bras et la jambe du même individu [[Gaide_NatMed_2015]]. A noter que dans ce modèle, la dissémination des clonotypes n'est pas forcément due à une re-circulation des TRM, mais peut être lié à d'autres types cellulaires.

Dans un contexte de cancer NSCLC chez l'homme, [[Caushi_Nature_2021]] décris une population de cellules ayant un phénotype semblable aux TRM (HOBIT+) circulant dans le sang. Ces cellules apparaissant après le traitement par immunothérapie, et possèdent des séquences TCR retrouvées dans la tumeur avant le traitement, suggérant qu'elle pourrait provenir de la re-circulation des TRM de la tumeur [[Caushi_Nature_2021]].

En utilisant une déplétion des TCIRC (via anti-CXCR3) ou des TRM (via anti-Gr-1) dans un modèle de parabiose, il a été montré que des TRM pouvaient perdre leur phénotype TRM et repopuler le parabiont en présence d'antigène [[Christo_NatImmunol_2021]].

Les cellules mémoires capablent de sortir de SG et FRT n'expriment pas CD69 et seraient plutôt des TEM [[Steinert_Cell_2015]]. Le thymus et la zone médullaire (mais pas corticale) serait des organes plus permissible à la recirculation [[Steinert_Cell_2015]].

[[Masopust_JExpMed_2010]] observent que les lymphocytes mémoires dans l'intestin ne reciculent pas.

En utilisant des marqueurs congénique et des greffes de peau, il a été observé qu'il existe des exTRM recirculant dans le sang après ré-activation [[Fonseca_NatImmunol_2020]]. Ceux-ci gardent des caractéristiques de TRM, y compris l'expression de CCR9 et Ly6C mais pardent l'expression de CD69 et CD103 [[Fonseca_NatImmunol_2020]]. La recirculation semble dépendre de S1P [[Fonseca_NatImmunol_2020]]. Les exTRM sont capablent de former des TCM et des TEM, et migrent de façon préférentielle dans le tissu d'origine (bien que uniquement après réactivation) [[Fonseca_NatImmunol_2020]].
L'acide rétinoïque est capable de bloquer la recirculation des exTRM, et le traitement avec du FTY720 limite cet effet [[Obers_Immunity_2024]].
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