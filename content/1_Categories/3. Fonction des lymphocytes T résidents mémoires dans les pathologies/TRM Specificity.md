Les TRM peuvent se différencier à partir de cellule naïves dans une souris sans infection et sans microbiote [[Casey_JImmunol_2012]]. Ce résultat pourrait être expliqué de deux façons; soit il existe des TRM n'ayant jamais reconnu l'antigène et qui sont rentrés dans les tissus par "remplissage" suite à la prolifération homéostatique (ce qui va à l'encontre de leur "mémoire"), soit ils se sont développé contre des auto-antigènes qui peuvent être dérivés de lésions ou de micro-lésions. A noter que cette étude est relativement précoce (2012), et que les cellules ont été catégorisés "TRM" à cause de leur phénotype uniquement (CD69+CD103+CD62L-Ly6C-GZMB+CD122-CD27-).
Dans un modèle d'infection influenza, il a été observé que les TRM CD4+ spécifiques pour les peptides dérivés de NP ont un phénotype Th17/Th1, tandis que ceux qui sont spécifiques de HA ont un phénotype plutôt Tfh/cytotoxique [[Mathew_JExpMed_2026]].
Les TRM CD4 dans les tissus vaginaux suite à une immunisation HSV ont des séquences TCR très expandues, suggérant que des cellules sont spécifiques des antigènes d'HSV [[Iijima_Science_2014a]].
Il a été montré que des lymphocytes clonaux peuvent se différencier préférentiellement vers les TRM ou les TCIRCM, mais que la spécificité à l'antigène n'est pas impliqué dans ce mécanisme [[Kok_JExpMed_2020]].

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