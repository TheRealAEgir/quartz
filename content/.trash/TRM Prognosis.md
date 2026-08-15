L'enjeu principal du traitement des patients atteints de cancer est dû à la forte hétérogénéité des cancers, ce qui entraine des différences sur la manière dont les patients répondent aux traitements qu'ils reçoivent. Dans ce sens, le choix du traitement à utiliser pour chaque patient est difficile. Il existe des marqueurs cliniques permettant de prédire la réponse à un type de traitement, où le pronostic de survie du patient.
Dès lors que le rôle du système immunitaire dans le cancer a été précisé, certaines équipes ont observé que le taux d'infiltration des tumeurs par les lymphocytes T avait un impact clinique favorable chez les patients [[Galon_Science_2006]]. Plus récemment, le rôle des TRM a été étudié dans les cancers. Depuis, de nombreuses publications ont démontré qu'une infiltration des tumeurs par les TRM avait aussi un impact clinique favorable, et souvent plus important que celui des lymphocytes T totaux. Une liste (non exhaustive) de ces publications est disponible dans le tableau ci-dessous.
<u>Note :</u> La review écrite par [[Okla_JExpMed_2021]] contient un tableau similaire, mais qui n'a pas été utilisé pour la rédaction de celui-ci, ce qui le rend complémentaire.


| Article                                     | Type de cancer                                      | Population                         | Observation                                                                                                                                      |
| ------------------------------------------- | --------------------------------------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| [[Duhen_NatCommun_2018]]                    | HNSCC                                               | CD8+ CD103+ CD39+ T cells          | La porportion des TILs (FC) est associée avec la survie des patients                                                                             |
| [[Savas_NatMed_2018]]                       | BC                                                  | CD8+ CD103+ T cells                | Un score élevé d'une signature (bulk RNAseq de TIL trié CD8+ CD103+ vs CD103-) est associé avec la survie des patients                           |
| [[Virassamy_CancerCell_2023]]               | BC (et surtout TNBC dont METABRIC)                  | CD8+ CD69+ CD103+ T cells          | Un score élevé d'une signature (bulk RNAseq de TIL trié CD8+CD69+ CD103+ vs CD103-) est associé avec la survie des patients                      |
| [[Burn_NatImmunol_2026]]                    | BC (surtout HER2+)                                  | CD8+ TRM (ne contenant pas de Tex) | Un score élevé d'une signature (DEG d'un cluster de scRNAseq de TRM retrouvé dans le tissu sain) est associé avec la survie des patients         |
| [[Park_Nature_2019]]                        | TNBC, Urothelial carcinoma, Melanoma (et TCGA-SKCM) | CD8+ TRM (ne contenant pas de Tex) | Un score élevé d'une signature (DEG d'un cluster de scRNAseq de TRM) est associé avec la survie des patients (dans les patients CD8hi pour TCGA) |
| [[Guo_NatMed_2018]]                         | NSCLC (TCGA-LUAD)                                   | CD8+ "pre-exhausted TRM"           | Un score élevé d'une signature (DEG d'un cluster de scRNAseq) est associé avec la survie des patients                                            |
| [[Anadon_CancerCell_2022]]                  | HGSOC                                               | CD8+ CD69+ CD103+ TCF1+ "TRMstem"  | L'infiltration des tumeurs en IHC multiparamétrique est associée avec la survie des patients                                                     |
| [[Paolini_JImmunotherCancer_2024]]          | NSCLC                                               | CD8+ CD49a+ CD103+ T cells         | L'infiltration des tumeurs en IHC multiparamétrique est associée avec la survie des patients                                                     |
| [[Webb_CancerImmunolRes_2015]]              | HGSOC                                               | PD1+ and CD103+ PD1+ cells         | L'infiltration des tumeurs en IHC est associée avec la survie des patients                                                                       |
| [[Komdeur_Oncoimmunology_2017]]             | Cervical cancer (et TCGA-CESC)                      | CD103+ T cells (mostly CD8+)       | L'infiltration des tumeurs en IHC et l'expression d'ITGAE sur les bases TCGA sont associées avec la survie des patients                          |
| [[Ganesan_NatImmunol_2017]]                 | LC (et TCGA-LUAD)                                   | CD8+ CD103+ T cells                | L'infiltration des tumeurs en IHC et l'expression d'ITGAE sur les patients CD8hi sur les bases TCGA sont associées avec la survie des patients   |
| [[Menares_NatCommun_2019]]                  | Melanoma (TCGA-SKCM)                                | CD8+ CD103+ T cells                | Un score élevé d'une signature (récupérée de [[Savas_NatMed_2018]]) est associé avec la survie des patients                                      |
| [[Lee_Sci.Immunol._2022]]                   | TNBC (METABRIC), mais pas HER2+ BC                  | CD8+ CD103+ CD39+ T cells          | Un score élevé d'une signature (bulk RNAseq de TIL trié CD8+ CD103+ CD39+ vs CD39-) est associé avec la survie des patients                      |
| [[Hamid_NatImmunol_2024]]                   | Melanoma (TGCA-SKCM), NSCLC (TCGA-LUAD)             | CD3+ CD8+ CD103+ CD61+ T cells     | Un score très élevé d'une signature (CD3, CD8A, ITGAE, ITGB3) est associé avec la survie des patients                                            |
| [[DeLeon-Rodriguez_JImmunotherCancer_2024]] | Melanoma (TGCA-SKCM)                                | CD8+ CD103+ T cells                | Un score élevé d'une signature (CD8A, ITGAE) est associé avec la survie des patients                                                             |
| [[Hu_Gastroenterology_2024]]                | GC                                                  | CD8+ CD103+ CXCL13+ T cells        | L'infiltration des tumeurs en IHC multiparamétrique est associée avec la survie des patients                                                     |
| [[Jin_BrJCancer_2022]]                      | Bladder cancer (y compris MICB et TGCA-BLCA)        | CD8+ CD103+ cells                  | Une forte proportion de cellules CD8A+ITAGE+ après déconvolution dans des cohortes de bulk RNAseq est associée avec la survie des patients       |

TPEX : De plus, elles sont retrouvées en plus grand nombre chez les patients traités par immunothérapie, et l'expression de TCF1 et PD1 a une valeur pronostic dans les cohortes TCGA à nombre égal d'infiltration lymphocytaire T [[Siddiqui_Immunity_2019]].
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