Il a été imaginé que le pool de cellules mémoires est fixé, et que le nombre de cellules mémoires total ne peut pas dépasser un certain seuil. Dans ce modèle, le nombre de cellules est déterminé par la sécrétion en cytokines (IL-7, IL-15) dont la concentration est limitante.
Cependant, en utilisant une stratégie de vaccination HPBB (Heterologous prime boost boost) contenant plusieurs série d'injection de vaccin différents contre le même antigène, il a été observé que le nombre total de lymphocytes T circulants et de T résidents dans les muqueuses (SG, FRT) peut augmenter [[Schenkel_JImmunol_2016]]. Dans ce modèle, les cellules ont moins de HP, mais il existe aussi des populations (CD62L- circulants, ou TRM selon les tissus) dont la survie et/ou HP est indépendante de l'IL15 [[Schenkel_JImmunol_2016]].


### Maintenance des lymphocytes par les cytokines

La survie des lymphocytes dans l'organisme est permise par des cytokines qui induise des signaux de survies dans ces cellules. Il existe plusieurs types de cytokines qui permettent la survie de différents types de lymphocytes. Par exemple, la survie des SLEC est permise par l'IL15, tandis que le TGFb induit leur apoptose [[Obar_IntImmunol_2010]]. Les lymphocytes mémoires dépendent globalement de l'IL7 pour leur survie à court terme, et de l'IL15 pour leur survie à long terme [[Obar_IntImmunol_2010]].

Les cytokines pourraient également influencer la différenciation des lymphocytes. En effet, il a été décris que l'IL2 favorise la différenciation vers des TEM, tandis que l'IL15 faovrise plutôt les TCM [[Obar_IntImmunol_2010]]. De plus, les lymphocytes CD25low (récpeteur à l'IL2) ont plutôt tendance à se différencier en TCM [[Obar_IntImmunol_2010]]. Lorsque la signalisation IL2 est forte, il a été reporté qu'elle pouvait induire l'expression de BLIMP1 et BCL6 et induire un phénotype plutôt effecteur [[Obar_IntImmunol_2010]]. L'IL21 semble favoriser les TCM, potentiellement par la perte de l'expression de CD25 [[Obar_IntImmunol_2010]].

L'IL12 semble plutôt être une cytokine entraînant des lymphocytes effecteurs. Cette cytokine est capable d'induire la signalisation mTORC1, qui à sont tour permet l'expression de TBET et la répression d'EOMES, entrainant ainsi un phénotype effecteur [[Obar_IntImmunol_2010]].

Il est classiquement décris que le nombre de lymphocyte est défini par une quantité limitante de facteur de survie comme l'IL2, l'IL7 ou l'IL15. Cependant, ce modèle est remis en question par [[Wijeyesinghe_Nature_2021]], qui décris qu'il est possible d'augmenter le nombre total de lymphocytes par des stratégies de vaccination avec deux antigènes pour le même peptide, ou en élevant des souris SPF avec des souris "pet-shop".




Il a été observé que le KO de CD62L, permettant l'entrée des lymphocytes dans les LN, provoque une baisse de l'expansion des lymphocytes dans certains type d'infection (VACV), mais pas dans d'autre (LCMV) [[Osborn_PLoSPathog_2019]].
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