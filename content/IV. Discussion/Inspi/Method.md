Les TRM sont des cellules résidentes au sein des tissus. Cette caractéristique a rendu la découverte des TRM tardive, car il est beaucoup plus difficile d'obtenir et d'extraire des lymphocytes des tissus que du sang. Il existe cependant certaines méthodes pour étudier les TRM dans des modèles murins.

### Transplantation d'organe

L'utilisation de la transplantation d'organe d'une souris vers une autre souris a permi de démontrer que certaines cellules imminutaires ne peuvent pas re-circuler et reste dans l'organe transplanté [[Gebhardt_NatImmunol_2009]].

### Parabiose

La parabiose est une technique de chirurgie qui consiste en la liaison du système sanguin de deux souris. La parabiose est l'une des seule technique qui permet d'identifier les lymphocytes par rapport à leur capacité de résidence, sans avoir à utiliser des marqueurs annexes qui peuvent être biaisés [[Steinert_Cell_2015]].

### Injection intra-vasculaire d'anticorps

L'utilisation d'une injection intra-vasculaire d'anticorps peu de temps avant le sacrifice d'une souris permet de marquer les cellules du sang, mais exclu les cellules situées dans les tissus. Cette technique a été décrite pour l'étude des TRM par [[Anderson_JImmunol_2012]]. Cependant, lorsque les cellules sont proches de la circulation sanguine, comme dans les capillaires pulmonaires, les cellules résidentes peuvent quand même être marquées [[Anderson_JImmunol_2012]]. Dans la rate, seule les cellules de la pulpe rouge sont marquées, tandis que les cellules des ganglions lymphatiques ne sont jamais marquées [[Anderson_JImmunol_2012]]. La plupart des cellules n'ayant pas été marquées par les anticorps intra-vasculaires sont des cellules vraiment résidentes (validé par parabiose) dans la plupart des tissus. Le foie est une exception, où seulement 55% des cellules non marquées sont vraiment résidentes [[Steinert_Cell_2015]], sûrement à cause de la nature hautement perfusée de cet organe.
Les TRM du foie sont marqués par les injections intra-vasculaires [[Burn_Immunity_2026]]

### Microscopie

L'isolation de cellules par des méthodes physiques et enzymatiques dans les organes sous estime le numbre de cellules de manière importante par rapport à leur nombre réel, et créé un biais vers certains sous-types cellulaires. Pour parier à ce défaut, la microscopie peut être utilisée, surtout en combinant avec une injection instra-vasculaire d'anticorps. [[Steinert_Cell_2015]]

### Fate mapping

### epigenetics

WGBS
Translated and untranslated mRNA can be separated using gradient centrifugation.
actinomycine D which block transcription

### Mouse models

OT-I et OVA low affinity Q4H7 and G4 peptide
gBT-I et HSV (gDT-II for CD4)
Pmel et gp100

VSV
HSV
IAV influenza A + LAIV live attenuated
LM
VacV skin infection that does not spread to other tissues. This generate a local and a systemic memory response and can be used to compare skin with or without TRM [[Khan_JExpMed_2016]]. (sometimes called VV for vaccinia virus)
rotavirus (intestine mouse infection)
Sendai virus infection (lung)

Transient depletion of CD4 with CD4-depleting antibody prior or concurent to infection (CD4 repopulation from thymus after ~2 weeks following GK1.5 treatement)

Lymphotoxin-alpha KO mouse don't have LN [[Mani_Science_2019a]].

TRM17 can be induced in kidney with a IL17aCRE R26eYFP with Staphylococcus aureus infection.
### Others

Toxine pertussique.
Laser capture microdissection
Stamper-Woodruff tissue binding assay = coupe de tissue sur une lame, et passage de cellules à tester sur cette lame. A permis de déterminer l'affinité des lymphocytes pour les cellules HEV.
T-scan = TCR antigen specificity screening
Hi-C = High throughput chromatine conformation = étude des interactions entre les loci de l'ADN
Blocking daughter cell division with cytochalasin B
FK506 = calcineurin inhibitor
### Dissociation

En réalisant des analyses transcriptomiques à partir de TRM extrait avec différent type de dissociation enzymatique, [[Crowl_NatImmunol_2022]] ont démontré que certains gènes décris comme faisant parti de la signature TRM étaient en réalité induit par la dissociation en elle-même.

Les TRM ont été identifié avec leurs capacités de résidence, même si par soucis de praticité, la plupart des études utilisent des marqueurs phénotypique pour identifier les TRM à la place. Cependant, l'utilisation d'extraction de lymphocytes T dans les tissus et de cytométrie en flux sous-estime le compartiment des TRM par un facteur 50-70 dans les tissus muqueux, 6-28 dans les autres tissus non périphérique, et 3 dans la rate [[Steinert_Cell_2015]]. De plus, l'extraction favorise certains types cellulaires par dessus d'autres, augmentant le biais de ce type d'analyse (les cellules du sang et marginales sont enrichies par dessus le reste du tissu, l'épithélium est enrichi par dessus la lamina propria, et CD103 est surestimé). Ces observations suggèrent que pour réellement étudier les TRM, les techniques de choix seraient plutôt la parabiose, l'injectection intravasculaire d'anticorps, et la microscopie [[Steinert_Cell_2015]].
La majorité des cellules dans les tissus sont des TRM. Seulement la moitié des cellules mémoires sont retrouvées dans les organes lymphoïdes secondaires, et seulement 4% sont dans le sang (dans un modèle murin avec une seule infection) [[Steinert_Cell_2015]].
### Bioinformatics

MetaCell = algorithm that gorup individual cells in meta cells of similar cells
PageRank = algorithm that rank node importance based on the number of link going to this node


### Techniques d'analyse des cellules précurseurs

Il est plutôt difficile de travailler sur les cellules précurseurs, en particulier lorsque l'on s'intéresse à des cellules uniques. En effet, bien souvent, il est difficile d'étudier à la fois une cellule précurseur et sa progéniture, car les techniques d'analyses en biologie sont destructives. Dans ce cas, le paradoxe suivant se produit : si la cellule précurseur est analysée, alors le phénotype est connu, mais la progéniture n'existe pas car cette cellule a été détruite. Dans le cas contraire, si la progéniture est analysée, alors la cellule d'origine n'a pas été détruite, et donc son phénotype n'est pas connu. Ainsi, le seul moyen de répondre à cette question est d'utiliser une technique d'analyse non destructive capable de donner des informations sur le précurseur tout en les laissant en vie. Une autre manière consiste à considérer un ensemble de cellule comme équivalentes, et d'utiliser une partie des cellules pour l'analyse des précurseurs, et l'autre partie pour l'analyse de la progéniture. Cependant, dans de nombreux cas, cette dernière méthode est imparfaite car un ensemble de cellules contient toujours des cellules différentes les une des autres.
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