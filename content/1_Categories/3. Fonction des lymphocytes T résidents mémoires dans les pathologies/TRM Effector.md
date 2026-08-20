### Paradigme sur le rôle des populations de lymphocytes mémoires dans le contrôle de l'infection

Le paradigme suggère que les TRM servent de barrière contre les pathogènes, tandis que les TCM permettent de renforcer la réponse immunitaire à distance, depuis les SLOs. Un tel modèle a été qualifié de "inside out" par [[Fonseca_NatImmunol_2020]], dans un article qui suggère qu'il existe également une immunité suivant un modèle "oustide in". En effet il a été observé dans ces travaux que les TRM sont des cellules capable de maintenir une certaine plasticité, et qu'une partie des TRM pouvait recirculer et se différencier en TEM et TCM [[Fonseca_NatImmunol_2020]].


Les TRM sont des cellules efficaces dans l'élimination des dangers, et deux mécanismes d'action distincts ont été décris. A l'origine, il a d'abord été décris que les TRM pouvaient recruter d'autres cellules immunitaires sur le site d'inflammation, et il n'était pas connu si ces cellules avaient des capacités cytotoxiques [[Mueller_NatRev_2016]].
Les TRM exprimant CD103 et CD39 sont capable de détruire des cellules tumorales dans une co-culture *ex-vivo* autologue [[Duhen_NatCommun_2018]].
Les TRM extraits de cancer du sein chez la souris peuvent détruire des cellules tumorale de manière IFNg et TNFa dépendante, et le traitement avec des anti-PD1/anti-CTLA4 améliore ce résultat [[Virassamy_CancerCell_2023]].

### Rôle direct cytotoxique des TRM

Dans des cancer humain, il a été observé que les TRM CD103+CD39+ pouvait sécréter de l'IFNg et induire l'activité des caspases 3/7 dans des cellules tumorales autologues dans un modèle de co-culture *ex vivo*, et ce de manière CMH-I dépendante [[Duhen_NatCommun_2018]].
Dans un modèle de mélanome murin, il a été montré que les TRM jouaient un role dans la phase d'équilibre du cancer de manière antigène dépendante, et que le TNFa avait un rôle important tandis que l'IFNg et la perforine était dispensable [[Park_Nature_2019]].
Les TRM avec une signalisation HIF1a constitutive sont plus efficace dans l'élimination de cellules tumorale dans des expériences *in vitro*[[Liikanen_JClinInvest_2021]].
Il a été montré que les TRM CD4+ expriment de manière constitutive les mRNA codant des cytokines comme l'IL17a, mais n'expriment pas les protéines dans un contexte homéstatique [[Asada_NatImmunol_2025]]. Ce mécanisme pourrait permettre une réponse plus rapide en cas d'activation des cellules.
### Rôle indirect (passant par le recrutement d'autres acteurs) des TRM

L'IFNg sécrété par les TRM pourrait avoir un rôle de recrutement des autres leukocytes, en induisant l'expression de VCAM1 sur les cellules endothéliales [[Chang_NatImmunol_2014]]. De plus, l'IFNg est connu pour induire l'expression de CXCL9 et CXCL10 (par quel type cellulaire ?), deux cytokines permettant le recrutement de lymphocytes T CD8 *via* CXCR3 [[Yenyuwadee_SciAdv_2022]]. L'IL2 et le TNFa, quand à eux, pourraient jouer sur la maturation des cellules dendritiques et des lymphocytes NK [[Chang_NatImmunol_2014]].
Les TRM des poumons sécrètent plus d'INFg que les TCIRC après stimulation *ex vivo* [[Hombrink_NatImmunol_2016]].
Les TRM avec une signalisation HIF1a constitutive ont une plus forte sécrétion de cytokines [[Liikanen_JClinInvest_2021]].
Après un re-challenge avec un peptide gp33 de TRM formés dans la peau de l'oreille de souris avec une infection gp33-VacV, il y a une inflammation locale avec du swelling, un recruitement de neutrophiles et de monocytes inflammatoires et une augmentation du nombre de lymphocyte CD8+ [[Khan_JExpMed_2016]].

### Autres rôles

Les TRM pourraient se différencier en TEM dans un contexte d'infection secondaire et mettre en place une réponse systémique [[Behr_NatImmunol_2020]].

### Modulation de l'efficacité des TRM

En l'absence de signalisation TGFb dans la peau, les TRM sont moins efficaces contre un re-challenge avec VV-OVA [[Hirai_Immunity_2019]].

La protéine CD61 peut se fixer à CD103 lors de la synapse immunologique, et les TIL CD61 sont plus fonctionnels et moins épuisés dans les cancers NSCLC [[Hamid_NatImmunol_2024]].


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