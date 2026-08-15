L'immunothérapie a montré des résultats très encourageants dans de nombreux cancers. Puisque les TRM semblent avoir un rôle pronostic bénéfique chez les patients, il n'est pas étonnant que certaines équipes ont étudié l'impact des traitements par immunothérapie (et surtout les traitements par ICB). Cette partie décrira les observations de ces travaux.

Tout d'abord, l'infiltration des tumeurs par les TRM semble avoir une valeur pronostique de la réponse au traitement, comme dans les cancers du sein (signature CD103+) [[Savas_NatMed_2018]], 



Suite à l'immunothérapie, une population de cellules exprimant HOBIT et pouvant provenir des TRM de la tumeur est retrouvée dans le sang. Ce populaiton disparait avec le temps [[Caushi_Nature_2021]].
Les TRM des patients qui répondent aux immunothérapie dans les cancers NSCLC ont un phéntoype stem-like (TCF1, CD127) alors que les TRM des patients qui ne répondent pas ont un phénotype plus épuisés (TOX2, CTLA4, TIM3, CD39) [[Caushi_Nature_2021]].
Sans surprise, les patients avec moins de TRM spécifiques d'antigènes tumoraux répondent moins favorablement au traitement par immunothérapie [[Caushi_Nature_2021]].
[[Simoni_Nature_2018]] ont montré chez un patient que la réponse à l'immunothérapie induisant l'apparition de cellules CD39 dans le sang, et ont suggéré que CD39 pourrait être un biomarqueur précoce de la réponse à ce type de traitement.

Les TRM avec une signalisation constitutive HIF1a ont un meilleur contrôle tumoral dans des souris traitées avec des anti-PD1, bien que le traitement n'a pas plus d'effet sur ces cellules que des cellules KO. Ces observations sont perdues lorsque les souris sont traités avec des anti-CD103, démontrant un rôle pour CD103 dans ces expériences [[Liikanen_JClinInvest_2021]].
Dans un modèle de cancer du sein chez la souris, il a été observé qu'il existait une population de TRM CD69+CD103+, et une population de TEX CD69+CD103-. Dans ce modèle, les TRM ont une plus forte augmentation de cytotoxicité médiée par l'IFNg et le TNFa après traitement avec des anti-PD1/anti-CLTA4 *ex vivo* [[Virassamy_CancerCell_2023]]. De plus, une signature extraite par bulk RNAseq de la population de TRM permet de prédire la réponse aux immunothérapides dans des cohortes de patients humains [[Virassamy_CancerCell_2023]].
Une signature TRM est associée avec le pronostic des patients atteints de cancer, mais seule la signature TEX permet de prédire la réponse aux immunothérapies [[Burn_NatImmunol_2026]]
[[Luoma_Cell_2022a]] ont observé des cellules avec un phénotype TRM dans les cancers HNSCC traités par anti-PD1 anti-CTLA4 dont la signature permet de prédire le pronostic dans une cohorte de cancer urothéliaux avec un traitement similaire.
Les LT CD8+ CXCR6+ sont plus efficaces que les CXCR6- dans un modèle de tumeur chez la souris traité par anti-PD1 [[Wang_JImmunotherCancer_2021a]].

Bien que la plupart des études ont décris que l'infiltration des tumeurs avec des TRM a un impact prédictif chez les patients traités par ICB, [[Park_NatImmunol_2026]] décris que les TRM sont différent de TEX, et que seuls les TEX répondent au traitement et ont un impact prédictif.

De plus, les lymphocytes B retrouvés dans les TLS communiquent avec les TRM *via* LTA/TNFR2 pour induire la glycolyse de manière mTOR dépendante, ce qui provoque une amélioration de l'activité des TRM et une meilleure réponse aux ICB [[Hu_Gastroenterology_2024]].

De manière surprenante, il a été observé que l'utilisation d'anti-PD1 limitait la formation de TRM dans la peau de manière TGFb-dépendante [[Devi_NatImmunol_2025a]]. Ce résultat suggère que ce traitement doit être utilisé correctement, et risque de limiter la réponse immunitaire anti-tumorale dans certains cas.

le traitement *ex vivo* par anti-PD1 +/- anti-CTLA4 induit la prolifération et améliore la fonctionnalité de lymphocytes T CD39+ avec un phénotype résident retrouvé dans des cancers du sein [[Lee_Sci.Immunol._2022]].

L'ajout d'un anti-CTLA4 à un traitement néoadjuvant et anti-PD1 dans les cancers NSCLC entraine une augmentation de l'infiltration des tumeurs par des lymphocytes, dont des lymphocytes CD4+CD103+ et CD8+CD103+ [[Cascone_NatMed_2021]].

Les TRM CD103+CD49a+ ont un impact pronostic chez les patients NSCLC lorsqu'ils sont localisés au sein de la tumeur (traité par ICB) [[Paolini_JImmunotherCancer_2024]].
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