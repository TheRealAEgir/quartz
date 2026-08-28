# 3.1 Mécanisme d'action des lymphocytes T résidents mémoires contre les infections

Les TRM ont été découverts à l'origine dans des modèles murins d'infection par HSV [[Gebhardt_NatImmunol_2009]], et les modèles murins d’infection restent les plus utilisés dans l’étude de ces cellules. Dans cette partie, le mode d'action des TRM dans la réponse immunitaire et leur rôle dans la protection contre les infections sera décrit.

### 3.1.1 Mécanisme d'action des lymphocytes T résidents mémoires dans la réponse immunitaire

Les TRM les plus étudiés sont les TRM CD8+, et le rôle des lymphocytes T CD8+ est d'éliminer les cellules dangereuses par cytotoxicité. Dans ce sens, le mécanisme d'action des TRM (en tout cas des TRM CD8+) le plus évident est que ces cellules agissent par cytotoxicité. Pourtant, le rôle cytotoxique des TRM n'a pas été mis en évidence tout de suite ; les premières observations décrivent plutôt un rôle d'initiation et de maintien de l'inflammation et de recrutement d'autres acteurs immunitaires [[Mueller_NatRev_2016]]. Dans cette partie, les rôles directs et indirects des TRM dans la réponse immunitaire seront décrit.
##### 3.1.1.1 Rôle direct cytotoxique des lymphocytes T résidents mémoires contre les infections

La cytotoxicité est le rôle le plus évident des TRM CD8+. Cependant, celui-ci a surtout été étudié dans le cadre de cancers où il est plus facile de définir les cellules cibles [[Duhen_NatCommun_2018]] [[Park_Nature_2019]] [[Liikanen_JClinInvest_2021]] ([[TRM Cancer#3.2.3.1 Rôle direct cytotoxique des lymphocytes T résidents mémoires contre les cellules tumorales|voir partie dédiée dans le chapitre suivant]]).
##### 3.1.1.2 Rôle indirect des lymphocytes T résidents mémoires contre les infections (recrutement d'autres acteurs)

Le rôle le plus décris des lymphocytes T résidents mémoires est un rôle de recrutement d'autres cellules immunitaires par l'initiation et le maintien d'une inflammation locale. Par exemple, l'IFNg sécrété par les TRM induit l'expression VCAM1 sur les cellules endothéliales (recrutant les cellules immunitaires par diapédèse) [[Chang_NatImmunol_2014]] ou la sécrétion de CXCL9 et CXCL10 (recrutant les cellules exprimant CXCR3) [[Yenyuwadee_SciAdv_2022]]. Les TRM sont les cellules les plus efficaces et sécrètent plus d'IFNg que les Tcirc dans les poumons [[Hombrink_NatImmunol_2016]]. Cette fonction a été observée dans un modèle de vaccination dans l'oreille de la peau, où les TRM spécifiques de l'antigènes entrainent une inflammation et un recrutement de neutrophiles, de monocytes inflammatoires et d'autres lymphocytes T CD8+ [[Khan_JExpMed_2016]].

L'IFNg n'est pas la seule cytokine impliquée. L'IL2 et le TNFa sont aussi sécrétés par les TRM et pourraient jouer sur la maturation des cellules dendritiques et des lymphocytes NK [[Chang_NatImmunol_2014]]. Il a aussi été montré que les TRM CD4+ expriment de manière constitutive les mRNA codant des cytokines comme l'IL17a, mais n'expriment pas les protéines dans un contexte homéostatique [[Asada_NatImmunol_2025]]. Ce mécanisme pourrait permettre une réponse plus rapide en cas d'activation des cellules.
##### 3.1.1.3 Modulation de l'efficacité des lymphocytes T résidents mémoires

En l'absence de signalisation TGFb dans la peau, les TRM sont moins efficaces contre un re-challenge avec VV-OVA [[Hirai_Immunity_2019]]. Ce résultat suggère que, margé le rôle anti-inflammatoire décris du TGFb, celui-ci pourrait au contraire jouer un rôle activateur des lymphocytes T. Des observations similaires ont aussi été décrites dans le cadre de cancers [[Boutet_CancerRes_2016]]. En plus du TGFb, l'induction de l'hypoxie augmente la sécrétion de cytokines par les TRM [[Liikanen_JClinInvest_2021]].
### 3.1.2 Efficacité des lymphocytes T résidents mémoires dans le contrôle des infections

Grâce à leurs mécanismes d'action, les TRM ont été décrit comme étant très efficace dans le contrôle de plusieurs maladies infectieuses. Par exemple, des TRM protecteurs sont générés suite à une infection localisée par HSV dans la peau [[Gebhardt_NatImmunol_2009]] [[Mackay_ProcNatlAcadSciUSA_2012]] ou la muqueuse vaginale [[Iijima_Science_2014a]] de souris. Dans le cas d'une infection HSV, la déplétion des Tcirc n'impact pas la protection médiée par les TRM [[Mackay_ProcNatlAcadSciUSA_2012]]. De plus, si une souris vaccinée est liée à une souris naïve par parabiose, seule la souris vaccinée est protégée contre un challenge de façon IFNg et TRM CD4+ dépendante [[Iijima_Science_2014a]]. De façon surprenante, la génération de TRM CD103+ non spécifiques par l'utilisation de DNFB permet quand même la protection contre un re-challenge par HSV [[Mackay_ProcNatlAcadSciUSA_2012]].

Les TRM permettent aussi la protection contre d'autres types d'infection. Par exemple, les TRM dans l'intestins ont un rôle contre l'infection par LM et une vaccination génère des TRM et préviens l'apparition de la maladie [[Sheridan_Immunity_2014]]. De manière similaire, une infection par IAV génère des TRM dans les poumons et les tissus nasaux, où la protection est TRM CD4+ dépendante et dépend partiellement des réponses Th17 et de l'IL17 [[Mathew_JExpMed_2026]]. Dans le cerveau, les TRM sont capables de produire des cytokines et protègent contre des infections dont le LCMV [[Urban_NatImmunol_2020]]. Chez l'Homme, les TRM du foie protègent contre le paludisme [[Fernandez-Ruiz_Immunity_2016]]. Dans ces expériences, les TRM sont plus fonctionnels et cytotoxiques que les TEM, et leur nombre corrèle avec le contrôle de la maladie [[Fernandez-Ruiz_Immunity_2016]].

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