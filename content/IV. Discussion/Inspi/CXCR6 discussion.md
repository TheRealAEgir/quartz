La déplétion de CXCR6 par KO affecte le nombre de TRM dans les tissus, et les cellules KO sont retrouvées en plus grand nombre dans le sang et les organes lymphoïdes secondaires [[Mathew_JExpMed_2026]]. Les cellules CXCR6 co-localise avec CXCL16 [[Mathew_JExpMed_2026]]. Le traitement avec des anti-CXCL16 affecte le nombre de cellules dans les tissus nasaux après une infection influenza [[Mathew_JExpMed_2026]].
CXCR6 KO CAR-T cells are less efficient [[Srivastava_CancerCell_2021]].
CXCR6+ CD8+ T cells are more numerous in tumor when mouse are treated with anti-CD40 [[Wang_JImmunotherCancer_2021a]].
CXCL16 expression is constant in tumor [[Wang_JImmunotherCancer_2021a]].
Les LT CD8+ CXCR6+ sont plus efficace dans le contrôle tumoral et la sécrétion de cytokine dans un modèle de tumeur chez la souris. Les souris KO pour CXCR6 de manière conditionnelle ont une survie plus faible que les souris WT [[Wang_JImmunotherCancer_2021a]].
Dans un modèle de vaccination intranasale chez la souris, les lymphocytes T spécifiques des antigènes tumoraux ont un phénotype TRM et expriment CXCR6. Lorsqu'un co transfert CXCR6 KO/WT est réalisé, la fraction KO est sous représenté parmi les lymphocytes T spécifiques d'antigènes, et ont un phénotype plutôt effecteur. Finalement, CXCR6 pourrait être impliqué dans le recrutement des lymphocytes dans la tumeur; en effet, les souris KO pour CXCR6 ont une perte partielle de l'efficacité du vaccin et présentent moins de lymphocytes dans la tumeur, sans impacter leur cytotoxicité. De plus, le vaccin induit une augmentation transitoire de l'expression de CXCL16 [[Karaki_JImmunotherCancer_2021]].
Le KO simultané de HOBIT et BLIMP1 limite la formation de TRM CD69+CD103+CXCR6+ dans les poumons après une infection IA [[Behr_FrontImmunol_2019]].
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