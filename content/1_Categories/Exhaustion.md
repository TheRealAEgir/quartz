L'épuisement a été étudié de manière épigénétique par [[Philip_Nature_2017]], en utilisant un modèle de priming avec une infection avec LM exprimant un antigène dérivé de SV40, puis de cancer du foie exprimant le même antigène inductilbe par traitement au tamoxifène. Il a été observé que les lymphocytes subissent de grand changements 5 jours et entre 7 et 14 jours après l'apparition de la tumeur, suggérant que l'épuisement pourrait être un phénomène en deux étapes [[Philip_Nature_2017]]. De plus, seul les lymphocytes extraits avant le jour 12 peuvent être restaurés par un traitement *ex vivo* avec de l'IL-15, indiquant que le dysfonction n'est plus plastique après cette période [[Philip_Nature_2017]].
D'un point de vue moléculaire, NFATC1 a été identifié comme un facteur jouant un rôle dans l'épuisement par rapport à une infection aiguë, tandis que les voie Wnt/TCF1 sont perdues entre le jour 7 et 14 de l'épuisement [[Philip_Nature_2017]].

Il existe une population de TRM épuisée et spécifique de l'antigène CD68+CD103- et une population moins épuisée CD69+CD103+ dans un modèle de tumeur du sein chez la souris [[Virassamy_CancerCell_2023]].
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