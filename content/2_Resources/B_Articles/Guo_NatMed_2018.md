---
cssclass: literature-note
category: literaturenote
title: Global characterization of T cells in non-small-cell lung cancer by single-cell sequencing
tags:
  - P/LEF1
  - P/CCR7
  - P/LAYN
  - P/CTLA4
  - P/CX3CR1
  - C/GNLY
  - C/PRF1
  - C/GZMA
  - C/GZMB
  - P/PD1
  - P/TIM3
  - P/TBET
  - P/CXCL13
  - P/SIRPG
  - P/CD39
  - P/MYO7A
  - P/SARDH
  - P/IGFLR1
  - P/CD27
  - P/PARK7
  - P/ITM2A
  - P/VCAM1
  - P/SNAP47
  - P/TPI1
  - P/CCND2
  - P/TNFRSF1B
  - P/CD69
  - P/CD103
  - P/CXCR6
  - P/CD49a
  - P/TIGIT
  - P/LAG3
  - P/REL
  - P/4-1BB
  - P/IL1R2
citekey: Guo_NatMed_2018
status: Read
dateread: 2026-05-13
articletype: Article
used_in_redaction: Yes
---
---
## Notes

> [!notes]
> %% begin Notes %%**Summary** : This article used scRNAseq on NSCLC sample and described cell population that are associated with OS when doing TCGA scoring analyses. Pseudotime showe that effector and exhausted are distinct. TRM can be divised in 3 clusters, with one being exhauted and the other two being "pre-exhausted" and having more impact in OS of TCGA. Treg showed a blod and a tumor CTLA4 cluster, the latter being heterogenous regarding 4-1BB. Activated Treg had worse OS in TCGA. Finally, the combinaisons of all signatures and patient clustering showed two patient group, with pre-exhausted/non activated Treg/activated CD4 vs exhausted CD4/CD8/activated Treg. The first group had better OS. [[TRM Cancer]] [[TRM Prognosis]] [[TRM Heterogeneity]] 
> Bioinformatic : use cores of naïveness and cytotoxicity based on previously defined gene signatures18,19, and T cell exhaustion scores based on the average expression of 90 genes highly expressed in tumor-infiltrating exhausted CD8+ T cells.
> Use of normalization in bluk RNA scoring for OS TCGA analyses.
> 
>**Experiment** : scRNAseq of 14 treatement naive NSLCL patients with tumor/peripheral normal/blood, and with FACS sorted CD4/CD8/CD25
>**Results** : Two cluster of effector cells, one expressing CX3CR1 in the blood. One exhauted CD8, one CTLA4+ Treg.
>**Experiment** : TCR reconstruction
>**Results** : There was inter-tissue clonotype that were found in only one tissue, with different degree of clonality. Effector cluster had the highest clonality and the most inter-tissue clonotypes. Those cluster had “focal adhesion”, “cell adhesion molecules (CAMs)”, “leukocyte transendothelial migration” and “regulation of actin cytoskeleton” pathways.
>
>**Experiment** : Monocle pseudotime analysis
>**Results** : Exhausted, naive and CX3CR1 effector at opposing side. This was supported by TCR sequences (more TCR sharing in a path that in the other)
>**Experiment** : Signature analysis with naiveness, cytotoxicity and exhaustion
>**Results** : Trajectory 1 showed exhaustion, and trajectory 2 showed naiveness/cytotoxicity.
>
>**Experiment** : TRM analysis
>**Results** : One cluster CD103+PD1-, one CD103-PD1+, and one CD103+PD1+ with CTLA4, LAG3, TIM3 and TIGIT. Ratio of "pre-exhausted" vs exhausted was associated with OS in TCGA analyss
>
>**Experiment** : Pseudotime analyses for CD4 T cells
>**Results** : Naive/effector/exhausted at the extremity. About the same results to CD8.
>
>**Experiment** : Treg analysis
>**Results** : two cluster, one FOXP3 in blood, and one CTLA4 in tumors. The tumor cluster was expanded and expressed more gene, which was also found in other type of tumors. CLTA4 tumor cluster was heterogenous regarding 4-1BB, suggesting recent activation. 4-1BB- vs + revealed immunosuppressive genes REL and LAYN, and the 260 gene signature was associated with worse OS in TCGA, but no the Treg global singature. IL1R2 was associated with worse OS.
>
>**Experiment** : TCGA sample clustering based on signatures.
>**Results** : two group, with pre-exhausted/non activated Treg/activated CD4 vs exhausted CD4/CD8/activated Treg. The first group had better OS.
> %% end Notes %%

> [!Useful Informations]-
> %% begin Useful Informations %%
> > %% end Useful Informations %%
> 

---

> [!faq]- Article Informations
> > [!Link]
> >
> >  [Full Text PDF](file://C:\Users\10053234\Documents\Thesis_bibliography\Zotero\storage\W9VM3KAA\Guo%20et%20al.%20-%202018%20-%20Global%20characterization%20of%20T%20cells%20in%20non-small-cell%20lung%20cancer%20by%20single-cell%20sequencing.pdf)
> >.
>
> > [!Cite]
> > Guo, X., Zhang, Y., Zheng, L., Zheng, C., Song, J., Zhang, Q., Kang, B., Liu, Z., Jin, L., Xing, R., Gao, R., Zhang, L., Dong, M., Hu, X., Ren, X., Kirchhoff, D., Roider, H. G., Yan, T., & Zhang, Z. (2018). Global characterization of T cells in non-small-cell lung cancer by single-cell sequencing. _Nature Medicine_, _24_(7), 978–985. [https://doi.org/10.1038/s41591-018-0045-3](https://doi.org/10.1038/s41591-018-0045-3)
>
> > [!Abstract]-
> >
> > Cancer immunotherapies have shown sustained clinical responses in treating non-small-cell lung cancer1–3, but efficacy varies and depends in part on the amount and properties of tumor infiltrating lymphocytes4–6. To depict the baseline landscape of the composition, lineage and functional states of tumor infiltrating lymphocytes, here we performed deep single-cell RNA sequencing for 12,346 T cells from 14 treatment-naïve non-small-cell lung cancer patients. Combined expression and T cell antigen receptor based lineage tracking revealed a significant proportion of inter-tissue effector T cells with a highly migratory nature. As well as tumor-infiltrating CD8+ T cells undergoing exhaustion, we observed two clusters of cells exhibiting states preceding exhaustion, and a high ratio of “pre-exhausted” to exhausted T cells was associated with better prognosis of lung adenocarcinoma. Additionally, we observed further heterogeneity within the tumor regulatory T cells (Tregs), characterized by the bimodal distribution of TNFRSF9, an activation marker for antigen-specific Tregs. The gene signature of those activated tumor Tregs, which included IL1R2, correlated with poor prognosis in lung adenocarcinoma. Our study provides a new approach for patient stratification and will help further understand the functional states and dynamics of T cells in lung cancer.
> >.
>
> > [!metadata]-
> > > >> > > **FirstAuthor**::
> > Guo, Xinyi
> >
> > > > > **Author**::
> > Zhang, Yuanyuan
> >
> > > > > **Author**::
> > Zheng, Liangtao
> >
> > > > > **Author**::
> > Zheng, Chunhong
> >
> > > > > **Author**::
> > Song, Jintao
> >
> > > > > **Author**::
> > Zhang, Qiming
> >
> > > > > **Author**::
> > Kang, Boxi
> >
> > > > > **Author**::
> > Liu, Zhouzerui
> >
> > > > > **Author**::
> > Jin, Liang
> >
> > > > > **Author**::
> > Xing, Rui
> >
> > > > > **Author**::
> > Gao, Ranran
> >
> > > > > **Author**::
> > Zhang, Lei
> >
> > > > > **Author**::
> > Dong, Minghui
> >
> > > > > **Author**::
> > Hu, Xueda
> >
> > > > > **Author**::
> > Ren, Xianwen
> >
> > > > > **Author**::
> > Kirchhoff, Dennis
> >
> > > > > **Author**::
> > Roider, Helge Gottfried
> >
> > > > > **Author**::
> > Yan, Tiansheng
> >
> > > > > **Author**::
> > Zhang, Zemin
> >
> > ~
> >
> > > **Title**:: Global characterization of T cells in non-small-cell lung cancer by single-cell sequencing
> > > **Year**:: 2018
> > > **Citekey**:: Guo_NatMed_2018
> >
> > > **itemType**:: journalArticle
> >
> >
> > > **Journal**:: *Nature Medicine*
> >
> >
> > > **Volume**:: 24
> >
> >
> > > **Issue**:: 7
> >
> >
> >
> > > **Publisher**:: Nature Publishing Group
> >
> >
> >
> > > **Pages**:: 978-985
> >
> >
> > > **DOI**:: 10.1038/s41591-018-0045-3
> >
> >

> [!faq]- Zotero Highlights
> %% begin annotations %%
> > 
> ### Imported on 2026-05-13 11:43 am
>
> > #### Relevant / important
>
> > > [!quote|#ffd400] Highlight
>
> > only showed the highest proportions of clonal cells (Fig. 2c), consistent with previous findings14, but also contained high proportions of inter-tissue clonal cells
>>
>
>
> >
> > [Page 3](zotero://open-pdf/library/items/W9VM3KAA?page=3) [2026-05-13#10:50 am]
>
> > > [!quote|#ffd400] Highlight
>
> > Accordingly, CX3CR1+ effector T cells have been described as present in both blood and solid tissues including lung
>>
>
>
> >
> > [Page 3](zotero://open-pdf/library/items/W9VM3KAA?page=3) [2026-05-13#10:51 am]
>
> > > [!quote|#ffd400] Highlight
>
> > “focal adhesion”, “cell adhesion molecules (CAMs)”, “leukocyte transendothelial migration” and “regulation of actin cytoskeleton” pathways
>>
>
>
> >
> > [Page 3](zotero://open-pdf/library/items/W9VM3KAA?page=3) [2026-05-13#10:51 am]
>
> > > [!quote|#ffd400] Highlight
>
> > Furthermore, CD4-C3-GNLY cells showed high expression of TBX21, implying an enrichment of Type 1 T helper (Th1) cells16
>>
>
>
> >
> > [Page 3](zotero://open-pdf/library/items/W9VM3KAA?page=3) [2026-05-13#10:51 am]
>
> > > [!quote|#ffd400] Highlight
>
> > CD8+ T cell clones in at least two clusters, suggesting that CD8+ cells of different clusters were not completely independent but might undergo extensive state transitions
>>
>
>
> >
> > [Page 3](zotero://open-pdf/library/items/W9VM3KAA?page=3) [2026-05-13#10:52 am]
>
> > > [!quote|#ffd400] Highlight
>
> > with CD8-C6-LAYN exhaustion cluster positioned at the opposite end of both CD8-C1LEF1 naïve and CD8-C3-CX3CR1 effector clusters. CD8-C2-CD28, CD8-C4-GZMK and CD8-C5-ZNF683 were located in between, indicating their intermediate functional states
>>
>
>
> >
> > [Page 3](zotero://open-pdf/library/items/W9VM3KAA?page=3) [2026-05-13#10:52 am]
>
> > > [!quote|#ffd400] Highlight
>
> > The expressionbased trajectory was further supported by TCR analysis (Fig. 3c), showing that neighboring clusters along the path shared more TCRs than distant clusters
>>
>
>
> >
> > [Page 3](zotero://open-pdf/library/items/W9VM3KAA?page=3) [2026-05-13#10:54 am]
>
> > > [!quote|#ffd400] Highlight
>
> > Our 90 signature genes showed significant overlaps with exhaustion-related genes identified in hepatocellular carcinoma (HCC)20, melanoma18, and in lymphocytic choriomeningitis virus (LCMV) infected mouse models
>>
>
>
> >
> > [Page 4](zotero://open-pdf/library/items/W9VM3KAA?page=4) [2026-05-13#10:56 am]
>
> > > [!quote|#ffd400] Highlight
>
> > The human tumor-based studies contained a common set of 23 genes, 14 of which (CXCL13, SIRPG, ENTPD1, MYO7A, SARDH, IGFLR1, CD27, PARK7, ITM2A, VCAM1, SNAP47, TPI1, CCND2 and TNFRSF1B) were absent in the mouse study, possibly representing “human-specific” exhaustion markers
>>
>
>
> >
> > [Page 4](zotero://open-pdf/library/items/W9VM3KAA?page=4) [2026-05-13#10:56 am]
>
> > > [!quote|#ffd400] Highlight
>
> > Analyzing the Monocle trajectory in the context of these functional scores, we found that component 1 was highly associated with T cell exhaustion, whereas component 2 was positively associated with cytotoxicity and negatively associated with naïveness
>>
>
>
> >
> > [Page 4](zotero://open-pdf/library/items/W9VM3KAA?page=4) [2026-05-13#10:57 am]
>
> > > [!quote|#ffd400] Highlight
>
> > Although Trm marker genes, such as CD69, ITGAE (CD103), CXCR6 and ITGA1, were highly expressed in tumor-resident T cells overall (Supplementary Fig. 7b,c), they exhibited distinct expression patterns among our corresponding three CD8 clusters: CD8C4-GZMK, CD8-C5-ZNF683 and CD8-C6-LAYN (Supplementary Fig. 7d). CD8-C4-GZMK cells expressed low-level ITGAE but high-level PDCD1, whereas CD8-C5-ZNF683 T cells exhibited the opposite pattern. CD8-C6-LAYN cells showed high levels of both ITGAE and T cell exhaustion markers including PDCD1, CTLA4, HAVCR2, LAG3 and TIGIT18
>>
>
>
> >
> > [Page 4](zotero://open-pdf/library/items/W9VM3KAA?page=4) [2026-05-13#11:00 am]
>
> > > [!quote|#ffd400] Highlight
>
> > patients with high expression of the signature genes (Supplementary Table 3) of CD8-C5-ZNF683 and low CD8-C6LAYN signal (after normalizing for T cell fractions by CIBERSORT23) showed significantly better overall survival compared to those with a low CD8-C5-ZNF683 to CD8-C6-LAYN signal ratio
>>
>
>
> >
> > [Page 4](zotero://open-pdf/library/items/W9VM3KAA?page=4) [2026-05-13#11:02 am]
>
> > > [!quote|#ffd400] Highlight
>
> > Such survival differences could also be seen for patients with low versus high CD8-C4-GZMK to CD8-C6LAYN signal ratios
>>
>
>
> >
> > [Page 4](zotero://open-pdf/library/items/W9VM3KAA?page=4) [2026-05-13#11:02 am]
>
> > > [!quote|#ffd400] Highlight
>
> > inferred developmental trajectory also exhibited a branched structure, with CD4-C2-ANXA1, CD4-C4-CD69, CD4-C5-EOMES and CD4-C6-GZMA bridging naïve CD4-C1-CCR7, effector CD4-C3-GNLY and exhausted CD4C7-CXCL13 clusters
>>
>
>
> >
> > [Page 4](zotero://open-pdf/library/items/W9VM3KAA?page=4) [2026-05-13#11:04 am]
>
> > > [!quote|#ffd400] Highlight
>
> > CD4-C7-CXCL13 was characterized by high expression of exhaustion markers PDCD1, CTLA4, HAVCR2 and TIGIT (Fig. 1c), while harboring T follicular helper (TFH)-like features with high expression of BCL6, IL21, CXCL13, ICOS and low expression of CXCR5
>>
>
>
> >
> > [Page 4](zotero://open-pdf/library/items/W9VM3KAA?page=4) [2026-05-13#11:04 am]
>
> > > [!quote|#ffd400] Highlight
>
> > This pattern is consistent with a previous finding that exhausted CD4+ T cells could skew towards the TFH phenotype
>>
>
>
> >
> > [Page 4](zotero://open-pdf/library/items/W9VM3KAA?page=4) [2026-05-13#11:04 am]
>
> > > [!quote|#ffd400] Highlight
>
> > For the two Treg clusters (defined as CD4+ FOXP3+ IL2RA+, Fig. 1b,c), CD4-C8-FOXP3 was predominantly from blood, whereas CD4-C9-CTLA4 was present mostly in tumors
>>
>
>
> >
> > [Page 4](zotero://open-pdf/library/items/W9VM3KAA?page=4) [2026-05-13#11:05 am]
>
> > > [!quote|#ffd400] Highlight
>
> > Treg clonal expansion was mostly cluster-specific and occurred within tumors
>>
>
>
> >
> > [Page 4](zotero://open-pdf/library/items/W9VM3KAA?page=4) [2026-05-13#11:06 am]
>
> > > [!quote|#ffd400] Highlight
>
> > Group 1 was enriched for “pre-exhausted” CD8+ T cells (CD8-C4-GZMK), non-activated Tregs (TNFRSF9- cells of CD4-C9-CTLA4) and activated CD4+ cells (CD4-C5-EOMES). Group 2 was enriched for exhausted T cells (CD8-C6-LAYN and CD4-C7-CXCL13) and activated Tregs (TNFRSF9+ cells of CD4-C9-CTLA4). Interestingly, Group 1 patients had much better prognosis than Group 2 (P = 0.001, Cox regression, Supplementary Fig. 9h). Thus, T cell composition may be an important biomarker for subtyping human NSCLC.
>>
>
>
> >
> > [Page 7](zotero://open-pdf/library/items/W9VM3KAA?page=7) [2026-05-13#11:30 am]
>
> > > 
> %% end annotations %%

%% Import Date: 2026-05-11T16:56:48.229+02:00 %%
