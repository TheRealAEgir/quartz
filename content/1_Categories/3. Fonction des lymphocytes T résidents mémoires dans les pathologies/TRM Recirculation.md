### 3.1.3 Recirculation des lymphocytes T résidents mémoires dans l'organisme : rôle de protection à distance ?

L'une des caractéristiques principales des TRM est la résidence au sein des tissus, et il a initialement été décris que les TRM ne recirculent pas [[Masopust_JExpMed_2010]]. En effet, les lymphocytes mémoires sortant des tissus n'expriment pas CD69 et correspondent à des TEM [[Steinert_Cell_2015]]. Cependant, il a été observé que certains TRM peuvent sortir des tissus et recirculer, et ces observations seront décrites dans cette partie.

##### 3.1.3.1 Expériences démontrant l'existence de lymphocytes T résidents mémoires re-circulants

Certaines observations montrent qu'il existe des clonotypes partagés entre les TRM et des lymphocytes d'un autre site anatomique. Par exemple, des donneurs sains volontaires injectés avec un agent inflammatoire dans le bras montrent des clonotypes partagés entre le bras et la jambe [[Gaide_NatMed_2015]]. Lors d'une réponse tumorale, des clonotypes sont partagés entre les TRM de la tumeur primaire, le sang et les métastases au niveau des LN [[Lee_Sci.Immunol._2022]]. Bien que ces cellules pourraient provenir de TRM re-circulants, ils pourraient aussi avoir été générés au moment de l'activation initiale et provenir d'une différentiation parallèle à celle des TRM.

Une preuve plus solide de l'existence de TRM re-circulants repose sur l'utilisation de la parabiose. Dans ce modèle, la circulation d'une souris contient la moitié de ses propres cellules, et la moitié des cellules du parabiont. Après dissociation chirurgicale des deux souris, les cellules de la circulation s'enrichissent progressivement avec des TEM autologues [[Wijeyesinghe_Nature_2021]]. Une interprétation possible de ce résultat est que les TRM des tissus recirculent et se différencient en TEM [[Wijeyesinghe_Nature_2021]]. Une autre expérience repose aussi sur l'utilisation de la parabiose et de la déplétion des Tcirc. Dans ce modèle, il y a une apparition de Tcirc provenant du parabiont dans la souris hôte, ce qui suggèrent que ces cellules proviennent des TRM [[Christo_NatImmunol_2021]].

Des observations similaires sont possibles en utilisant des greffes avec des marqueurs congéniques. [[Fonseca_NatImmunol_2020]] décris que des TRM sont capables de recirculer depuis le greffon jusqu'à l'hôte de manière S1P dépendante. Les cellules obtenues sont alors CCR9+Ly6C+, mais perdent l'expression de CD69 et de CD103 [[Fonseca_NatImmunol_2020]]. De manière intéressante, si ces cellules sont récupérées, réactivées et transférées dans une nouvelle souris hôte, elles se différencient préférentiellement en TRM (mais génèrent aussi des TCM) et migrent préférentiellement dans le tissus d'origine [[Fonseca_NatImmunol_2020]].

L'un des modèles les plus importants dans l'étude de la recirculation des TRM a été mis au point par [[Behr_NatImmunol_2020]], en utilisant le fate mapping du gène HOBIT (le fate mapping qui, en utilisant des gènes rapporteurs et le système CRE-LOX, permet de marquage irréversible des cellules ayant exprimé un gène d'intérêt). Des cellules exHOBIT sont alors retrouvées dans les ganglions drainants le tissu infecté et dans le sang (avec un phénotype semble à des TEM et TCM) [[Behr_NatImmunol_2020]].

##### 3.1.3.2 Impact physiologique des lymphocytes T résidents mémoires re-circulants

Le paradigme suggère que les TRM servent de barrière contre les pathogènes, tandis que les TCM permettent de renforcer la réponse immunitaire à distance, depuis les SLOs. Un tel modèle a été qualifié de "inside out" par [[Fonseca_NatImmunol_2020]], dans un article qui suggère qu'il existe également une immunité suivant un modèle "outside in". Dans le modèle "outside-in", les TRM participent à l'immunité systémique en recirculant et en alimentant les populations de Tcircm et notamment de TCM [[Fonseca_NatImmunol_2020]]. Ce modèle est consolidé par les observations de [[Behr_NatImmunol_2020]], qui montrent que la déplétion des TRM avant un rechallenge impacte la formation de TEM. Ainsi, en plus de participer à la protection locale, les TRM pourraient aussi participer à la protection systémique de l'organisme.



maybe :
Dans un contexte de cancer NSCLC chez l'homme, [[Caushi_Nature_2021]] décris une population de cellules ayant un phénotype semblable aux TRM (HOBIT+) circulant dans le sang. Ces cellules apparaissant après le traitement par immunothérapie, et possèdent des séquences TCR retrouvées dans la tumeur avant le traitement, suggérant qu'elle pourrait provenir de la re-circulation des TRM de la tumeur [[Caushi_Nature_2021]].

L'acide rétinoïque est capable de bloquer la recirculation des exTRM, et le traitement avec du FTY720 limite cet effet [[Obers_Immunity_2024]].

Les TRM CD4+ ont plus de facilité à ressotir des tissus via les vaisseaux lymphatiques afférents [[Gebhardt_Nature_2011]].

Les TRM dans les LN sont plus stem-like, prolifèrent plus et sécrètent plus d'IFNg que les TRM dans les poumons [[Heim_bioRxiv_2026]]
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