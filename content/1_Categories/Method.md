Les TRM sont des cellules résidentes au sein des tissus. Cette caractéristique a rendu la découverte des TRM tardive, car il est beaucoup plus difficile d'obtenir et d'extraire des lymphocytes des tissus que du sang. Il existe cependant certaines méthodes pour étudier les TRM dans des modèles murins.

### Transplantation d'organe

L'utilisation de la transplantation d'organe d'une souris vers une autre souris a permi de démontrer que certaines cellules imminutaires ne peuvent pas re-circuler et reste dans l'organe transplanté [[Gebhardt_NatImmunol_2009]].

### Parabiose

La parabiose est une technique de chirurgie qui consiste en la liaison du système sanguin de deux souris. La parabiose est l'une des seule technique qui permet d'identifier les lymphocytes par rapport à leur capacité de résidence, sans avoir à utiliser des marqueurs annexes qui peuvent être biaisés [[Steinert_Cell_2015]].

### Injection intra-vasculaire d'anticorps

L'utilisation d'une injection intra-vasculaire d'anticorps peu de temps avant le sacrifice d'une souris permet de marquer les cellules du sang, mais exclu les cellules situées dans les tissus. Cette technique a été décrite pour l'étude des TRM par [[Anderson_JImmunol_2012]]. Cependant, lorsque les cellules sont proches de la circulation sanguine, comme dans les capillaires pulmonaires, les cellules résidentes peuvent quand même être marquées [[Anderson_JImmunol_2012]]. Dans la rate, seule les cellules de la pulpe rouge sont marquées, tandis que les cellules des ganglions lymphatiques ne sont jamais marquées [[Anderson_JImmunol_2012]]. La plupart des cellules n'ayant pas été marquées par les anticorps intra-vasculaires sont des cellules vraiment résidentes (validé par parabiose) dans la plupart des tissus. Le foie est une exception, où seulement 55% des cellules non marquées sont vraiment résidentes [[Steinert_Cell_2015]], sûrement à cause de la nature hautement perfusée de cet organe.

### Microscopie

L'isolation de cellules par des méthodes physiques et enzymatiques dans les organes sous estime le numbre de cellules de manière importante par rapport à leur nombre réel, et créé un biais vers certains sous-types cellulaires. Pour parier à ce défaut, la microscopie peut être utilisée, surtout en combinant avec une injection instra-vasculaire d'anticorps. [[Steinert_Cell_2015]]

### Fate mapping

### epigenetics

WGBS

### Mouse models

OT-I et OVA low affinity Q4H7 and G4 peptide
P14 et LCMV
gBT-I et HSV (gDT-II for CD4)
Pmel et gp100

VSV
HSV
IAV influenza A + LAIV live attenuated
LCMV Armstrong + Cl13
LM
VacV skin infection that does not spread to other tissues. This generate a local and a systemic memory response and can be used to compare skin with or without TRM [[Khan_JExpMed_2016]]. (sometimes called VV for vaccinia virus)

Transient depletion of CD4 with CD4-depleting antibody prior or concurent to infection (CD4 repopulation from thymus after ~2 weeks following GK1.5 treatement)

Lymphotoxin-alpha KO mouse don't have LN [[Mani_Science_2019a]].
### Others

Toxine pertussique.
Laser capture microdissection
Stamper-Woodruff tissue binding assay = coupe de tissue sur une lame, et passage de cellules à tester sur cette lame. A permis de déterminer l'affinité des lymphocytes pour les cellules HEV.
T-scan = TCR antigen specificity screening

### Bioinformatics

MetaCell = algorithm that gorup individual cells in meta cells of similar cells
PageRank = algorithm that rank node importance based on the number of link going to this node
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