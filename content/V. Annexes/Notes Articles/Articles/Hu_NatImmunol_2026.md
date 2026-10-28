---
cssclass: literature-note
category: literaturenote
title: Mapping self-associating chromatin hubs identifies Id proteins as key determinants of exhausted CD8+ T cell fate
tags:
  - P/EZH2
  - C/IL21
  - P/TBET
  - P/KLRG1
  - P/RUNX2
  - P/ID2
  - C/IFNg
  - C/GZMA
  - P/CCL5
  - P/CDK6
  - P/CXCR6
  - P/CX3CR1
  - P/AFF3
  - P/POU2AF1
  - Q/ID2
  - Q/ID3
  - P/ID3
  - P/AHR
  - P/CD127
  - P/TOX
  - P/PD1
  - P/LAG3
  - P/MYB
citekey: Hu_NatImmunol_2026
status: Read
dateread: 2026-07-08
articletype: Article
used_in_redaction: Yes
---

---
## Notes

> [!notes]
> %% begin Notes %%**Summary** : This article studied 3D chromatine structure with Hi-C in Tpex and Tex-eff, and highlight a role for ID2 (for Tex-eff) and ID3 (for Tpex). This was validated using KO. [[2. Hypothèses TIL]]
> 
>**Experiment** : Transfer of TCF1-GFP naive P14 T cell into mouse and LCMV Cl13 infection, then sorting and Hi-C of TIM3loSLAMF6hiTCF1-GFP+ (early Tpex) and TIM3hiSLAMF6loTCF1-GFP- (early Tex-eff) for Hi-C analyses
>**Results** : These were highly different from naive T cell, but Tex-eff clustered relatively close to Teff. A HiCHub algorithm was applied to determine chromatine interactions hubs, and those were clustered. There was antigen-induced and repressed hubs, and eff- and pex-specific hubs, with one hub being shared between naive and Tpex. This was linked to a RNAseq analysis which showed concordance with this data.
>**Other Results** : Some genes including EZH2/IL21/TBET/KLRG1/RUNX2 were induced in RNA and Hi-C and in Tex-eff and Tpex, while ID2/IFNG/GZMA/CCL5/CDK6 was in Tex-eff only
>
>**Experiment** : EZH2 T cell conditionnal KO mouse infected with LCMV Cl13
>**Results** : There was less antigen-speicific T cells in KO and less TIM3hi Tex-eff with reduced PD1, LAG3 and TOX. EZH2 seems to have a big impact in Tex-eff differenciation.
>
>**Experiment** : nucleofection to deplete ID2 expression in T cells, then transfer in mouse and infection with LCMV Cl13.
>**Results** : Reduction in Tex at 8 dpi, and increase in Tpex, with an increase in PD1, LAG3 and TOX expression. Reduction of a CX3CR1+/CXCR6+ cluster in CITE-seq while a ID3+ cluster increased.
>
>**Experiment** : Transfer of AFF3 or POU2AF1 KO in mouse
>**Results** : No reduction in Tex, but increase in Tpex.
>
>**Experiment** : ID3 cKO mouse and LCMV Cl13 infection
>**Results** : Reduction in both antigen-specific Tpex and Tex. Also in CITE-seq.
>
>**Experiment** : ID2 KO scATACseq.
>**Results** : ID2 mostly regulated chromatin accessibility in Tex. There was repression in exhaustion associated genes, including TOX, PD1, TCF1, ID3 and MYB. ID2 induced genes included Teff genes IFNG and KLRD1. It also changes the accessibility of TF motifs : repression of AP1 and IRF, enrichment in Tbet.
>**Experiment** : ID3 cKO mouse scATACseq
>**Results** : Most differences in Tpex. Positive regulation of CD127 and AHR and negative regulation of FASL and BTG2 by ID3. + Motifs = both positive and negative, but notable repression of Tbet.
>
>**Experiment** : Co-precipitation
>**Results** : Interaction between ID2/ID3 with RUNX3, TCF1 and TBET through E proteins as a bridge.
>
>**Experiment** : CUT&RUN on ID2 and ID3 from sorted Tpex and Tex-eff from LCMV Cl13 infected mouse
>**Results** : Different target. Only ID2 had E proteins
>**Experiment** : CUT&RUN on ID2 KO from sorted Tpex and Tex-eff from LCMV Cl13 infected mouse using E2A or RUNX3 antibody
>**Results** : More binding when ID2 is absent, indicating repression.
> %% end Notes %%

> [!Useful Informations]-
> %% begin Useful Informations %%
> %% end Useful Informations %%
> 

---

> [!faq]- Article Informations
> > [!Link]
> >
> >  [Full Text PDF](file://C:\Users\10053234\Documents\Thesis_bibliography\Zotero\storage\V8WU79JN\Hu%20et%20al.%20-%202026%20-%20Mapping%20self-associating%20chromatin%20hubs%20identifies%20Id%20proteins%20as%20key%20determinants%20of%20exhausted%20CD8+.pdf)
> >.
>
> > [!Cite]
> > Hu, W., Chen, Q., Zhu, S., Hu, S. S., Yu, H., Patel, V., Wang, Y., Badovinac, V. P., Zhang, Y., Zang, C., Peng, W., & Xue, H.-H. (2026). Mapping self-associating chromatin hubs identifies Id proteins as key determinants of exhausted CD8+ T cell fate. _Nature Immunology_, 1–15. [https://doi.org/10.1038/s41590-026-02578-4](https://doi.org/10.1038/s41590-026-02578-4)
>
> > [!Abstract]-
> >
> > Within days of exposure to chronic viral infections, activated CD8+ T cells differentiate into Tcf1−Slamf6loTim3hi exhaustion-prone effector T (TEX_EFF) cells or self-renewing Tcf1+Slamf6hiTim3lo precursor exhausted T (TPEX) cells. Here we showed that early CD8+ TEX cell fates were imprinted by forming subset-specific, self-associating chromatin hubs. Chromatin hub assembly coincided with effector or stemness gene induction and identified the transcription cofactors Id2 and Id3 as key regulators that promoted CD8+ TEX_EFF and CD8+ TPEX cell fates, respectively. Id2 drove CD8+ TEX_EFF cell specification by activating effector genes, while suppressing genes involved in exhaustion and stemness. In contrast, Id3-repressed effector genes but upregulated IL-7Rα and AhR, thereby maintaining the CD8+ TPEX cell pool. Mechanistically, Id2 and Id3 exhibited a distinct impact on the chromatin accessibility landscape in early CD8+ TEX cells by engaging Runx3 and Tcf1 transcription factors along with E proteins. These findings indicated that reshaping chromatin architecture represents a critical means for specifying CD8+ TEX cell fates and ensuring lineage stability.
> >.
>
> > [!metadata]-
> > > >> > > **FirstAuthor**::
> > Hu, Wei
> >
> > > > > **Author**::
> > Chen, Qing
> >
> > > > > **Author**::
> > Zhu, Shaoqi
> >
> > > > > **Author**::
> > Hu, Shengen Shawn
> >
> > > > > **Author**::
> > Yu, Haibo
> >
> > > > > **Author**::
> > Patel, Vanita
> >
> > > > > **Author**::
> > Wang, Ying
> >
> > > > > **Author**::
> > Badovinac, Vladimir P.
> >
> > > > > **Author**::
> > Zhang, Yi
> >
> > > > > **Author**::
> > Zang, Chongzhi
> >
> > > > > **Author**::
> > Peng, Weiqun
> >
> > > > > **Author**::
> > Xue, Hai-Hui
> >
> > ~
> >
> > > **Title**:: Mapping self-associating chromatin hubs identifies Id proteins as key determinants of exhausted CD8+ T cell fate
> > > **Year**:: 2026
> > > **Citekey**:: Hu_NatImmunol_2026
> >
> > > **itemType**:: journalArticle
> >
> >
> > > **Journal**:: *Nature Immunology*
> >
> >
> >
> >
> >
> > > **Publisher**:: Nature Publishing Group
> >
> >
> >
> > > **Pages**:: 1-15
> >
> >
> > > **DOI**:: 10.1038/s41590-026-02578-4
> >
> >

> [!faq]- Zotero Highlights
> %% begin annotations %%
> > 
> ### Imported on 2026-10-21 1:56 pm
>
> > #### Relevant / important
>
> > > [!quote|#ffd400] Highlight
>
> > Functional annotation based on DAVID Bioinformatics24 revealed that ExpC1 genes, which were induced in both early CD8+ TPEX and CD8+ TEX_EFF cells, were enriched in ‘immune system process’, ‘cell adhesion’ and ‘cytokine–cytokine receptor interaction’, and included key genes in exhaustion programs (Tox, Pdcd1, Lag3, Ctla4; Fig. 1e and Extended Data Fig. 1e). ExpC2 genes that were more robustly induced in CD8+ TEX_EFF cells were highly enriched in ‘cell cycle’ and ‘DNA replication’ (E2f1, Foxm1, Cdk1, Chek1; Fig. 1e and Extended Data Fig. 1e), consistent with the strong expansion of CD8+ TEX_EFF cells. Early CD8+ TPEX cells expressed unique sets of genes, by specific induction (ExpC3) or partial retention from CD8+ TN cells (ExpC4; Fig. 1e). While ExpC3 contained a different set of ‘immune system process’ and ‘cytokinecytokine receptor interaction’ genes, ExpC4 had ‘translation’, and metabolism-related ‘mitochondrion’ and ‘fatty acid β-oxidation’ as top enriched Gene Ontology terms (Extended Data Fig. 1e). Notably, genes in ‘transcription regulation’ were present in large numbers in all DEG clusters
>>
>
>
> >
> > [Page 2](zotero://open-pdf/library/items/V8WU79JN?page=2) [2026-07-08#9:54 am]
>
> > > [!quote|#ffd400] Highlight
>
> > Enrichment analysis of DEG clusters with ChrInt hub clusters found high levels of concordance, with increased ChrInt linked to induced genes in early CD8+ TEX cells and vice versa
>>
>
>
> >
> > [Page 2](zotero://open-pdf/library/items/V8WU79JN?page=2) [2026-07-08#9:54 am]
>
> > > [!quote|#ffd400] Highlight
>
> > ExpC1 genes such as Ezh2, Il21, Tbx21, Klrg1 and Runx2 were harbored in Hub_C1, showing concordant induction of gene expression and de novo hub formation in both early CD8+ TPEX and CD8+ TEX_EFF cells compared to CD8+ TN cells (Fig. 2a,b and Extended Data Fig. 2a,b). On the other hand, ExpC2 genes such as Id2, Ifng, Gzma, Ccl5 and Cdk6 were harbored in Hub_C2 (Fig. 2c,d and Extended Data Fig. 2c,d), showing a more robust increase in gene expression and ChrInt strength within hubs formed in CD8+ TEX_EFF cells
>>
>
>
> >
> > [Page 2](zotero://open-pdf/library/items/V8WU79JN?page=2) [2026-07-08#9:57 am]
>
> > > [!quote|#ffd400] Highlight
>
> > On day 5 after LCMV-Cl13 infection, the frequency and number of GP33-MHC-I tetramer (GP33-Tet)+ antigen-specific CD8+ T cells in Ezh2cKO mice were diminished by ~70% compared to Cd4-Cre+Ezh2+/+ (wild-type) littermates
>>
>
>
> >
> > [Page 2](zotero://open-pdf/library/items/V8WU79JN?page=2) [2026-07-08#10:08 am]
>
> > > [!quote|#ffd400] Highlight
>
> > At day 5, GP33-Tet+ Tim3hiCD8+ TEX_EFF and Tim3loCD8+ TPEX cells were detected in wild-type mice, while Tim3hiCD8+ TEX_EFF cells were markedly reduced in frequency and number in Ezh2cKO mice
>>
>
>
> >
> > [Page 2](zotero://open-pdf/library/items/V8WU79JN?page=2) [2026-07-08#10:09 am]
>
> > > [!quote|#ffd400] Highlight
>
> > Ezh2cKO CD8+ TPEX and CD8+ TEX_EFF cells showed reduced expression of the coinhibitory receptors PD-1 and Lag3 and the transcription factor Tox compared to wild-type counterparts
>>
>
>
> >
> > [Page 2](zotero://open-pdf/library/items/V8WU79JN?page=2) [2026-07-08#10:10 am]
>
> > > [!quote|#ffd400] Highlight
>
> > early CD8+ TPEX and CD8+ TEX_EFF cells strongly diverged from CD8+ TN cells and that CD8+ TEX_EFF and CD8+ TEFF cells tended to cluster together
>>
>
>
> >
> > [Page 2](zotero://open-pdf/library/items/V8WU79JN?page=2) [2026-07-08#9:48 am]
>
> > > [!quote|#ffd400] Highlight
>
> > Hub_C1 were formed de novo in all antigen-experienced cells, regardless of infection type, while those in Hub_C6 and Hub_C7 were strong in CD8+ TN cells, but were decommissioned in antigen-experienced cells
>>
>
>
> >
> > [Page 2](zotero://open-pdf/library/items/V8WU79JN?page=2) [2026-07-08#9:51 am]
>
> > > [!quote|#ffd400] Highlight
>
> > ChrInt hubs in Hub_C2 and Hub_C3 were strongly induced in CD8+ TEX_EFF and CD8+ TEFF cells, while those in Hub_C4 were uniquely acquired in early CD8+ TPEX cells and those in Hub_C5 were retained between CD8+ TN and early CD8+ TPEX cells
>>
>
>
> >
> > [Page 2](zotero://open-pdf/library/items/V8WU79JN?page=2) [2026-07-08#9:52 am]
>
> > > [!quote|#ffd400] Highlight
>
> > On day 8 after infection, the number of sgId2 CD8+ TEX cells was reduced by ~50% compared to sgThy1 CD8+ TEX cell
>>
>
>
> >
> > [Page 3](zotero://open-pdf/library/items/V8WU79JN?page=3) [2026-10-21#11:35 am]
>
> > > [!quote|#ffd400] Highlight
>
> > sgId2 CD8+ TPEX and TEX_EFF cells had elevated expression of PD-1, Lag3 and Tox compared to sgThy1 counterparts (Fig. 3d), indicating that Id2 promoted CD8+ TEX_EFF cell fate and expansion at the expense of CD8+ TPEX cells and limited induction of the exhaustion program.
>>
>
>
> >
> > [Page 3](zotero://open-pdf/library/items/V8WU79JN?page=3) [2026-10-21#11:36 am]
>
> > > [!quote|#ffd400] Highlight
>
> > whereas Id3 was almost exclusively detected in C1 early TPEX cells
>>
>
>
> >
> > [Page 5](zotero://open-pdf/library/items/V8WU79JN?page=5) [2026-10-21#11:43 am]
>
> > > [!quote|#ffd400] Highlight
>
> > Analysis of cell distribution in C1–C3 showed that sgId2 cells were underrepresented in the TEX_EFF clusters (C2, C3) but were enriched in the early TPEX cluster
>>
>
>
> >
> > [Page 5](zotero://open-pdf/library/items/V8WU79JN?page=5) [2026-10-21#11:43 am]
>
> > > [!quote|#ffd400] Highlight
>
> > sgId2 CD8+ TEX cells downregulated transcripts encoding cytotoxic (Gzmb, Prf1, Ccl5) and TEX_EFF differentiation (Bhlhe40, Cxcr6, Klrd126,36) molecules
>>
>
>
> >
> > [Page 5](zotero://open-pdf/library/items/V8WU79JN?page=5) [2026-10-21#11:45 am]
>
> > > [!quote|#ffd400] Highlight
>
> > as well as expression of Cxcr6 and Klrd1 proteins compared to sgThy1 CD8+ TEX cells (Extended Data Fig. 4a), indicating Id2 activated the effector program and promoted TEX_INT differentiation in early CD8+ TEX cells
>>
>
>
> >
> > [Page 5](zotero://open-pdf/library/items/V8WU79JN?page=5) [2026-10-21#11:46 am]
>
> > > [!quote|#ffd400] Highlight
>
> > Genes in expression cluster 3 (ExpC3), such as Ikzf2, Etv6, Tox2 and Jdp2 were harbored in Hub_C4 (Fig. 4a,b and Extended Data Fig. 5a,b), indicating early CD8+ TPEX-specific, concordant induction of gene expression and de novo hub formation. ExpC4 genes, such as Id3, Pou2af1, Aff3 and Zbtb18, were similarly expressed in CD8+ TN and early CD8+ TPEX cells and were harbored in Hub_C5 hubs, which were retained between CD8+ TN and early CD8+ TPEX cells, but decommissioned in CD8+ TEX_EFF cells
>>
>
>
> >
> > [Page 7](zotero://open-pdf/library/items/V8WU79JN?page=7) [2026-10-21#11:49 am]
>
> > > [!quote|#ffd400] Highlight
>
> > Targeting Aff3 or Pou2af1 with sgRNA in P14 CD8+ TN cells followed by adoptive transfer into CD45-disparate wild-type mice and LCMV-Cl13 infection did not alter the frequency and number of early CD8+ TEX cells at day 8 after infection, but consistently diminished those of established CD8+ TPEX cells at day 21 (late stage) after infection (Fig. 4e–h), supporting a role for Aff3 and Pou2af1 in maintaining the CD8+ TPEX cell pool.
>>
>
>
> >
> > [Page 7](zotero://open-pdf/library/items/V8WU79JN?page=7) [2026-10-21#11:49 am]
>
> > > [!quote|#ffd400] Highlight
>
> > At day 8 after LCMV-Cl13 infection, the number of antigen-specific GP33-Tet+CD8+ TEX cells in Cd4-Cre+Id3fl/fl mice (hereafter Id3cKO), in which Id3 is deleted in DP thymocytes41, was reduced ~2-fold compared to Cd4-Cre+Id3+/+ (wild-type) littermates
>>
>
>
> >
> > [Page 7](zotero://open-pdf/library/items/V8WU79JN?page=7) [2026-10-21#11:52 am]
>
> > > [!quote|#ffd400] Highlight
>
> > Among the GP33-Tet+CD8+ TEX cells, Id3cKO early CD8+ TPEX cells exhibited a more pronounced reduction in frequency (~4-fold) and number (>8-fold) compared to wild-type early CD8+ TPEX cells
>>
>
>
> >
> > [Page 7](zotero://open-pdf/library/items/V8WU79JN?page=7) [2026-10-21#11:52 am]
>
> > > [!quote|#ffd400] Highlight
>
> > Id3cKO cells were greatly diminished in early CD8+ TPEX cells (c1), but showed relative expansion of CD8+ TEX_EFF cells (c2 and c3) (Fig. 5e), indicating a specific requirement for Id3 in promoting the CD8+ TPEX cell fate
>>
>
>
> >
> > [Page 7](zotero://open-pdf/library/items/V8WU79JN?page=7) [2026-10-21#11:54 am]
>
> > > [!quote|#ffd400] Highlight
>
> > Id3cKO TEX cells did not show detectable changes in Id2, Tcf1 or Myb transcript or protein (Extended Data Fig. 7b–d), suggesting that Id3 promoted CD8+ TPEX cell fate or lineage stability independently of Tcf1 and Myb.
>>
>
>
> >
> > [Page 7](zotero://open-pdf/library/items/V8WU79JN?page=7) [2026-10-21#11:56 am]
>
> > > [!quote|#ffd400] Highlight
>
> > Id2-repressed sites were frequently linked to exhaustion and stemness program genes, as observed in the first intron of Tox, downstream of Pdcd1 and upstream of Tcf7, Id3 and Myb genes
>>
>
>
> >
> > [Page 7](zotero://open-pdf/library/items/V8WU79JN?page=7) [2026-10-21#11:59 am]
>
> > > [!quote|#ffd400] Highlight
>
> > Id2-induced sites were frequently linked to effector program genes, as observed at Ifng and Klrd1 genes
>>
>
>
> >
> > [Page 7](zotero://open-pdf/library/items/V8WU79JN?page=7) [2026-10-21#1:29 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > Both Id2-repressed and Id2-induced sites were enriched in Ets, Runx, Tcf/ Lef and NF-κB motifs, with Tcf/Lef and NF-κB motifs preferentially associated with ChrAcc changes in sgId2 early CD8+ TPEX cells
>>
>
>
> >
> > [Page 7](zotero://open-pdf/library/items/V8WU79JN?page=7) [2026-10-21#1:31 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > AP1 and Irf motifs were uniquely enriched in Id2-repressed sites, while T-bet motifs were specific to Id2-induced sites
>>
>
>
> >
> > [Page 7](zotero://open-pdf/library/items/V8WU79JN?page=7) [2026-10-21#1:31 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > Over 60% of sites were in Id3_C4, Id3_C5 and Id3_C6 and were more ‘closed’ in Id3cKO early CD8+ TPEX cells compared to wild-type counterparts (referred to as ‘Id3-induced sites’
>>
>
>
> >
> > [Page 7](zotero://open-pdf/library/items/V8WU79JN?page=7) [2026-10-21#1:33 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > Multiple Id3-induced ChrAcc sites were observed at Il7r and Ahr
>>
>
>
> >
> > [Page 7](zotero://open-pdf/library/items/V8WU79JN?page=7) [2026-10-21#1:33 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > Id3-repressed sites were observed in the Fasl intron and downstream of the anti-proliferative Btg2 gene
>>
>
>
> >
> > [Page 8](zotero://open-pdf/library/items/V8WU79JN?page=8) [2026-10-21#1:35 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > Based on motif analysis, Id3-repressed and Id3-induced sites both showed enrichment of Ets, Runx, NF-κB, Irf and AP1 motifs (Fig. 6f), while E-box motifs were absent in Id3-repressed sites
>>
>
>
> >
> > [Page 8](zotero://open-pdf/library/items/V8WU79JN?page=8) [2026-10-21#1:36 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > T-bet motifs were preferentially enriched in Id3-repressed sites, while Tcf/ Lef motifs were preferentially enriched in Id3-induced sites (
>>
>
>
> >
> > [Page 8](zotero://open-pdf/library/items/V8WU79JN?page=8) [2026-10-21#1:37 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > Co-immunoprecipitation indicated Id2 and Id3 interacted directly with E2A protein, but not with Runx3, Tcf1, T-bet or Batf (Fig. 6h and Extended Data Fig. 8h), while E2A interacted directly with Runx3, Tcf1 and T-bet, but not with Batf (Fig. 6i)
>>
>
>
> >
> > [Page 8](zotero://open-pdf/library/items/V8WU79JN?page=8) [2026-10-21#1:38 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > When FLAG-tagged Id2 or Id3, untagged E2A and HA-tagged transcription factors were coexpressed, Id2 or Id3 co-immunoprecipitated with Runx3, Tcf1 and T-bet,
>>
>
>
> >
> > [Page 8](zotero://open-pdf/library/items/V8WU79JN?page=8) [2026-10-21#1:39 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > and this indirect interaction depended on the presence of E2A or Id protein HLH domain
>>
>
>
> >
> > [Page 9](zotero://open-pdf/library/items/V8WU79JN?page=9) [2026-10-21#1:39 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > Thus, Id proteins formed regulatory complexes with Runx3, Tcf1 and T-bet in primary CD8+ TEX cells, with E proteins as bridging mediators.
>>
>
>
> >
> > [Page 9](zotero://open-pdf/library/items/V8WU79JN?page=9) [2026-10-21#1:39 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > Id2 and Id3 binding peaks were both highly enriched in Ets and Runx motifs, while Id2 peaks, but not Id3 peaks, were weakly enriched for E-box motifs (Fig. 7b), indicating that Id proteins formed DNA-bound regulatory complexes through various partner transcription factors in vivo.
>>
>
>
> >
> > [Page 10](zotero://open-pdf/library/items/V8WU79JN?page=10) [2026-10-21#1:44 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > The strengthened E2A binding upon Id2 deletion provides in vivo evidence supporting the concept that Id2 exerted its repressive role by evicting E proteins from the DNA
>>
>
>
> >
> > [Page 10](zotero://open-pdf/library/items/V8WU79JN?page=10) [2026-10-21#1:45 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > The increased Runx3 binding upon Id2 deletion suggested that Id2 evicted E2A from its interacting partner Runx3 or evicted E2A–Runx3 complexes from DNA (Extended Data Fig. 9g).
>>
>
>
> >
> > [Page 10](zotero://open-pdf/library/items/V8WU79JN?page=10) [2026-10-21#1:46 pm]
>
> > > 
> %% end annotations %%

%% Import Date: 2026-07-08T09:20:05.844+02:00 %%
