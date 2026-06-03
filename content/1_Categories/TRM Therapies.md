Une strategie de vaccination "prime and trap" mettant en jeu les TRM a été proposé contre la malaria. Cette stratégie consiste en deux étapes; d'abord, les lymphocytes sont primés avec l'utilisation d'un peptide couplé à un anticorps anti-CLEC9A (qui cible les cellules dendritiques) et d'un adjuvant (CpG); puis, ceux-ci sont recruités dans le foie avec l'utilisation d'un adénovirus recombinant faisant exprimer le peptide par les hépatocytes uniquement. Cette stratégie a montré une accumulation plus importante de TRM dans le foie et une corrélation positive entre le nombre de TRM et l'efficacité de protection. De plus, la déplétion des TRM en injectant des anticorps anti-CXCR3 empêche l'effet protecteur du traitement, suggérant un rôle crucial des TRM dans ce modèle [[Fernandez-Ruiz_Immunity_2016]].

Dans les cancers, les thérapies nécessite de réactiver les lymphocytes T spécifiques d'antigènes tumoraux. Ceux-ci expriment CD39 [[Duhen_NatCommun_2018]].

Le microbiote a un impact sur la formation des TRM dans les intestins, et l'utilisation d'antibiotique a un impact délétaire sur le nombre de TRM [[DaSilva_Immunity_2020]]. Ce résultat pourrait être expliqué par l'eATP relargué par le microbiote [[DaSilva_Immunity_2020]].

Une équipe a augmenté l'efficacité de CAR-T anti-CD19 dans un modèle de tumeur solide exprimant CD19 chez la souris, en ajoutant une signalisation constitutive de H1Fa. Dans le reste de l'article, il est décris que cette modification a un impact positif sur les TRM [[Liikanen_JClinInvest_2021]]. Il est donc probable que des thérapies utilisant les TRM puissent être amélioré en provoquant une signalisation liée à l'hypoxie dans les cellules.

L'utilisation de vaccins intra-nasaux génère des TRM dans les tissus nasaux, améliorant la protection. Cet effet est diminué lorsque les lymphocytes CD4 sont déplétés, mais pas les lymphocytes CD8 [[Mathew_JExpMed_2026]].
L'infection orale par LM génère une population protectricee de TRM CD103+ dans l'intestin, mais cette population et réduite lors d'une infection intranasale [[Sheridan_Immunity_2014]].

Une stratégie de vaccination contre influenza montre un contrôle plus efficace et une expension de TRM CD69+CD103-+ dans les poumons lorsque 4-1BBL est admnistré en même temps (injection intra nasale) [[Zhou_MucosalImmunol_2017]]. L'utilisation d'une injection systémique intra-péritonéale plutôt qu'intra-nasale génère plus de T mémoires dans la rate, mais moins de TRM dans les poumons [[Zhou_MucosalImmunol_2017]].
Seule l'immunisation vaginale permet la protection contre un re-challenge dans les souris infectées par HSV [[Iijima_Science_2014a]].
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