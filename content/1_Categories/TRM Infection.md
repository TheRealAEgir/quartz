Les TRM du foie jouent un rôle dans la protection contre la malaria, où ils sont plus fonctionnels/cytotoxiques et le nombre corrèle de manière plus importante avec le contrôle de la maladie que les TEM [[Fernandez-Ruiz_Immunity_2016]].
Des TRM se formet et confèrent une protection localisé en cas de re-challenge dans un contexte d'infection HSV chez la souris [[Gebhardt_NatImmunol_2009]].
Une infection avec influenza génère des TRM dans les poumons et les tissus nasaux capable de protection contre un challenge [[Mathew_JExpMed_2026]]. La déplétion des CD4 affecte la qualité de la réponse secondaire [[Mathew_JExpMed_2026]]. La déplétion des réponses Th17 via KO conditionel de RORgt ou traitement avec des anti-IL17 affecte partiellement la réponse contre une infection influenza et la réparation des tissus [[Mathew_JExpMed_2026]].
Les TRM de l'intestin jouent un rôle dans l'infection contre LM, et l'infection orale génère plus de TRM dans ces tissus qu'une infection nasale [[Sheridan_Immunity_2014]].

Une immunisation vaginale contre HSV permet une protection contre un re-challenge avec une dose léthale [[Iijima_Science_2014a]]. Dans ce modèle, la protection est médiée par les TRM CD4 qui produisent de l'IFNg. En utilisant un modèle de parabiose avec une souris immunisée et une souris naive, seule la souris immunisée (qui comprends des TRM) est protégée contre le re-challenge, mais pas la souris naive (qui comprends les TCIRC de la souris immunisée) [[Iijima_Science_2014a]].
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