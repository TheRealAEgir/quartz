## 3.4 Utilisation des lymphocytes T résidents mémoires dans des stratégies thérapeutiques

Du fait de leur forte efficacité, certaines équipes cherchent à utiliser les TRM dans un but thérapeutique ou pour augmenter l'efficacité de traitements déjà existants.
### 3.4.1 Optimisation des stratégies de vaccination pour générer des lymphocytes T résidents mémoires

La vaccination a pour but de générer une réponse immunitaire contre un antigène d'intérêt. Qu'il s'agisse d'une vaccination préventive ou thérapeutique, l'efficacité de la vaccination dépend du nombre et de la qualité des cellules générés. Certaines équipes ont alors cherché à générer un nombre important de TRM en optimisant les protocoles de vaccination.

Par exemple, une stratégie de vaccination "prime and trap" mettant en jeu les TRM a été proposée contre la malaria (paludisme). Cette stratégie consiste en deux étapes ; d'abord, les lymphocytes sont primés avec l'utilisation d'un peptide couplé à un anticorps anti-CLEC9A (qui cible les cellules dendritiques) et d'un adjuvant (CpG) ; puis, ceux-ci sont recrutés dans le foie avec l'utilisation d'un adénovirus recombinant faisant exprimer le peptide par les hépatocytes uniquement [[Fernandez-Ruiz_Immunity_2016]]. Cette stratégie a montré une accumulation plus importante de TRM dans le foie et une corrélation positive entre le nombre de TRM et l'efficacité de protection. De plus, la déplétion des TRM en injectant des anticorps anti-CXCR3 empêche l'effet protecteur du traitement, suggérant un rôle crucial des TRM dans ce modèle [[Fernandez-Ruiz_Immunity_2016]].

Le mode de vaccination ou d'infection influe beaucoup sur le nombre de TRM généré. Par exemple, les vaccins intra-nasaux sont relativement efficaces et permettent de générer des TRM dans les tissus nasaux (de manière CD4 dépendante) [[Mathew_JExpMed_2026]]. L'utilisation d'une injection systémique intra-péritonéale plutôt qu'intra-nasale génère plus de T mémoires dans la rate, mais moins de TRM dans les poumons [[Zhou_MucosalImmunol_2017]]. L'infection orale par LM génère une population protectrice de TRM CD103+ dans l'intestin, mais cette population et réduite lors d'une infection intranasale [[Sheridan_Immunity_2014]]. Un vaccin anticancéreux dirigé contre E7 génère des TRM CD103+ et est plus efficace lorsqu'il est injecté dans la muqueuse cervico-vaginale que dans le muscle [[Huang_CellularImmunology_2022]]. Finalement, seule l'immunisation vaginale permet la protection contre un rechallenge dans les souris infectées par HSV [[Iijima_Science_2014a]].

En plus du site de vaccination, il est possible d'augmenter le nombre de TRM généré en co-injectant d'autres molécules. Par exemple, la co-administration de 4-1BB-L (ligand de la molécule de co-stimulation 4-1BB) génère plus de TRM CD69+CD103+ dans les poumons [[Zhou_MucosalImmunol_2017]]. Du fait du rôle similaire d'ICOS-L à celui de 4-1BBL et ayant démontré un rôle à l'axe ICOS/ICOS-L dans la différenciation des TRM, [[Peng_Immunity_2022]] suggèrent que cette molécule pourrait être utilisée dans des vaccins. La co-stimulation d'autres cellules peut aussi être ciblée, et l'administration d'anti-CD40 (avec du poly(IC:LC)) dans une vaccination systémique active les monocytes, qui sécrètent de l'IL10 et active le TGFb, qui permet à son tour de générer plus de TRM [[Thompson_CellRep_2019]]. Dans un contexte de cancer, [[Komdeur_Oncoimmunology_2017]] montrent un rôle synergique à la radiothérapie avec une vaccination ciblant E6/E7 dans la génération de TRM CD103 intra-tumoraux.
### 3.4.2 Optimisation d'autres stratégies thérapeutiques pour favoriser les lymphocytes T résidents mémoires

Certaines thérapies anticancéreuses peuvent aussi être optimisée. Par exemple, après avoir démontré un rôle positif de la signalisation de l'hypoxie dans la génération de TRM, [[Liikanen_JClinInvest_2021]] montrent que cette signalisation augment l'efficacité d'une thérapie par CAR-T cell anti-CD19 ciblant les tumeurs solides. Bien que la radiothérapie soit considérée comme immunosuppressive, les TRM sont plus résistants que les autres lymphocytes et ne sont pas déplétés. Cet effet dépendrai du TGFb et favorise même l'efficacité des TRM, mais bloque leur cycle cellulaire [[Arina_NatCommun_2019]]. 

Certains traitements thérapeutiques ont un impact négatif sur la génération de TRM. Par exemple, les antibiotiques impactent le microbiote et diminue le nombre de TRM dans les intestins [[DaSilva_Immunity_2020]]. Ce résultat pourrait être expliqué par l'eATP relargué par le microbiote [[DaSilva_Immunity_2020]]. Finalement, PD1 a un impact positif sur la différenciation des TRM, et l'utilisation limite la génération de TRM dans la peau dans un contexte d'infection [[Devi_NatImmunol_2025a]].
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