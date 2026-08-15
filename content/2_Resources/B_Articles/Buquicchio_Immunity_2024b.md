---
cssclass: literature-note
category: literaturenote
title: Distinct epigenomic landscapes underlie tissue-specific memory T cell differentiation
tags:
  - P/KLF2
  - P/CCR7
  - P/CD62L
  - P/S1PR5
  - P/ZEB2
  - P/CX3CR1
  - P/FCGR2B
  - P/HIC1
  - P/CHN2
  - P/CDH1
  - P/ITGA9
  - P/GRP55
  - P/S1PR1
  - P/TBET
  - C/IFNg
  - P/CD127
  - P/CD69
  - P/CXCR6
  - P/SNX9
  - P/PTPN5
  - P/LITAF
  - P/CREB1
  - P/E4F1
  - P/PDX1
  - P/ATF3
  - P/LEF1
  - P/TCF1
  - P/ACVR2
  - P/SNX29
  - P/XCL1
  - P/CISH
  - P/QPCT
  - P/BACH2
  - P/FOS
  - P/FOSB
  - P/FOSL1
  - P/JUN
  - C/IL12
  - S/SMAD
  - S/NFKB
  - C/IL23
  - P/ADGRL2
  - P/TOX
  - P/BLIMP1
  - P/ASCL2
  - P/PTF1A
  - P/ARNTL
  - P/KLF
  - P/BHLHE40
  - P/IRF4
  - P/EOMES
  - P/RUNX3
  - P/BATF
  - P/NFATC1
citekey: Buquicchio_Immunity_2024b
status: Read
dateread: 2026-04-08
articletype: Article
used_in_redaction: Yes
---
---
## Notes

> [!notes]
> %% begin Notes %%**Summary** : This article used scATAC seq on TRM isolated from various timepoint and from various organs. They found new protein playing a role in TRM, such as GRP55, HIC1, and FGCRIIB (which was important for Tcm/Tem and could be an early sign of comitment). They described a organ-wise common epigenetic signature, as well as organ specific. These included the identification of FOS/FOSB/FOSL/BACH2 in skin TRM. Comparaison of TRM with Tex showed that TRM only had similarities with Tex-term, but not Tex-prog/int; however, Tex-term had more specific marks.
> [[TRM Epigenetic]] [[TRM Heterogeneity]] [[TRM Differenciation]] [[TRM Precursors]] (for the FGCRIIB sorting experiment) [[1.1 Différenciation des lymphocytes T en lymphocyte T effecteur ou mémoire]]
> 
>**Experiment** : scATACseq of CD45.1 P14 T cells isolated of liver and spleen of mouse 30 days after LCMV Armstrong infection.
>**Results** : Tem, Tcm and Trm showed distinct epigenetic profile, with Trm showing decreased accessibility of KL2/CCR7/SELL/S1PR5/ZEB2/CX3CR1, FCGR2B/HIC and increase in CHN2/CDH1/ITGA9/GPR55. Increased in GPR55/HIC1 and decrease in FCGR2B was validated at RNA level using other databases, since they had no known role in TRM at this time. There was no increase in HIC1 motif accessibility. The removal of HIC1 lead to the decrease of liver and small intestine TRM.
>
>**Experiment** : ATACseq on sgHIC1/sgCTRL P14 cells from 30 dpi LCMV Arm mouse.
>**Results** : Increase and decrease included genes involved in apoptosis.
>
>**Experiment** : Isolation of GP33 tetramer+ CD8+ T cells from LCMV Arm infected mouse at day 7/14/28 post infection and scATAC-RNAseq
>**Results** : There was more diversity at day 7. Teff showed proliferation, and there was some memory precursors that were termed Tmp-circ and Tmp-rm because they shared part of the Tcirc and Trm program.
>
>**Experiment** : Pseudotime analyses of the previous dataset, with Teff as starting point, and Tmp-circ/rm as branching point.
>**Results** : There was a decrease in FGR2B accessibility that was accompagned by a decrease in protein expression in the Trm differentiation axis, as well as an increase in CXCR6 and decrease in CD62L/S1PR1/CX3CR1.
>
>**Experiment** : Sorting of P14 FCGRIIB+ and - from spleen and injection into a infection matched mouse.
>**Results** : FCGRIIB+ formed Tem and Tcm, FCRGIIB- formed increased TRM in the liver. FCGRIIB KO resulted in the reduction of TEM and TCM, without impacting TRM. FCGRIIB+ liver TRM had higher active caspase 3/7 than TCGRIIB- liver TRM.
>
>**Experiment** : scATACseq of TRM from 7 organs from different infection model, in order to find a common epigenetic signature.
>**Results** : TRM from SI-IEL/lung/skin/liver clustered separately to SG/FRT/kidney, which formed a single cluster. The peak for KLF2 and S1PR1 were always lost between all organs, whereas SNX9 and PTPN5 were always increased. Tcrm vs Tcirc showed increase in CREB1, E4F1, PDX1, ATF3 and decrease in KLF2, LEF1, TCF7.
>**Other Results** : When comparing ATACseq with published RNAseq signature, there was gene uniquely identified by ATACseq : ACVR2A, PTPN5, SNX29, and gene shared : XCL1, CISH, LITAF, QPCT.
>**Other Results** : When searching for organ-specific; TGFb pathway was enriched in skin/SI IEL, and liver was increased for IFN signaling. Skin and liver TRM were the most different, with skin TRM displaying increase in accessiblity/expression and motif of FOS, FOSB, FOSL1, JUN and BACH2
>
>**Experiment** : infection of sgFOS/FOSB/FOSL1/BACH2 P14 into mouse with DNFB to induce skin TRM
>**Results** : Skin TRM was impaired by deletion of these genes. Also with HSV infection. Deletion of FOSB affected IL12 pathway, deletion of FOS affected SMAD2/3 pathway, and deletion of both affected IL23 pathway. The deletion of BACH2 affected ADGRL2/TOX and the NFKB pathway.
>
>**Other Results** : Use of chromVAR tool with the CisBP and JASPAR databases lead to the identification of two group with distinct motifs. Group A (skin, SG/FRT/kidney, lung, liver, SI-IEL) was enriched in ASCL2, HIC1, PTF1A, TCF, while group B (skin, SG/FRT/kidney, lung, liver, SI-IEL (but not the same clusters)) was enriched in ARNTL and KLF
>
>**Experiment** : Comparaison of previous results with Tex generated with LCMV cl13.
>**Results** : There was shared transcriptional features. Tex showed 4 distinct clusters, and was overall distinct from Trm a chromatin state. Differences between Trm and Tex included TOX and TCF (only in Tex-prog). Motif deviation was higher in Tex for IRF4 and EOMES, whereas RUNX3 had high motif deviation in skin Trm and Tex-term. There was some similarity in Trm vs Tex-term, but not with Tex-prog or Tex-int. Trm and Tex-term had enrichment in RUNX motives, and Tex-term only as FEV, IRF, ETS and BCL.
> %% end Notes %%

> [!Useful Informations]-
> %% begin Useful Informations %%
> %% end Useful Informations %%
> 

---

> [!faq]- Article Informations
> > [!Link]
> >
> >  [ScienceDirect Full Text PDF](file://C:\Users\10053234\Documents\Thesis_bibliography\Zotero\storage\BD4A6G9K\Buquicchio%20et%20al.%20-%202024%20-%20Distinct%20epigenomic%20landscapes%20underlie%20tissue-specific%20memory%20T cell%20differentiation.pdf)
> >.
>
> > [!Cite]
> > Buquicchio, F. A., Fonseca, R., Yan, P. K., Wang, F., Evrard, M., Obers, A., Gutierrez, J. C., Raposo, C. J., Belk, J. A., Daniel, B., Zareie, P., Yost, K. E., Qi, Y., Yin, Y., Nico, K. F., Tierney, F. M., Howitt, M. R., Lareau, C. A., Satpathy, A. T., & Mackay, L. K. (2024). Distinct epigenomic landscapes underlie tissue-specific memory T cell differentiation. _Immunity_, _57_(9), 2202-2215.e6. [https://doi.org/10.1016/j.immuni.2024.06.014](https://doi.org/10.1016/j.immuni.2024.06.014)
>
> > [!Abstract]-
> >
> > The memory CD8+ T cell pool contains phenotypically and transcriptionally heterogeneous subsets with specialized functions and recirculation patterns. Here, we examined the epigenetic landscape of CD8+ T cells isolated from seven non-lymphoid organs across four distinct infection models, alongside their circulating T cell counterparts. Using single-cell transposase-accessible chromatin sequencing (scATAC-seq), we found that tissue-resident memory T (TRM) cells and circulating memory T (TCIRC) cells develop along distinct epigenetic trajectories. We identified organ-specific transcriptional regulators of TRM cell development, including FOSB, FOS, FOSL1, and BACH2, and defined an epigenetic signature common to TRM cells across organs. Finally, we found that although terminal TEX cells share accessible regulatory elements with TRM cells, they are defined by TEX-specific epigenetic features absent from TRM cells. Together, this comprehensive data resource shows that TRM cell development is accompanied by dynamic transcriptome alterations and chromatin accessibility changes that direct tissue-adapted and functionally distinct T cell states.
> >.
>
> > [!metadata]-
> > > >> > > **FirstAuthor**::
> > Buquicchio, Frank A.
> >
> > > > > **Author**::
> > Fonseca, Raissa
> >
> > > > > **Author**::
> > Yan, Patrick K.
> >
> > > > > **Author**::
> > Wang, Fangyi
> >
> > > > > **Author**::
> > Evrard, Maximilien
> >
> > > > > **Author**::
> > Obers, Andreas
> >
> > > > > **Author**::
> > Gutierrez, Jacob C.
> >
> > > > > **Author**::
> > Raposo, Colin J.
> >
> > > > > **Author**::
> > Belk, Julia A.
> >
> > > > > **Author**::
> > Daniel, Bence
> >
> > > > > **Author**::
> > Zareie, Pirooz
> >
> > > > > **Author**::
> > Yost, Kathryn E.
> >
> > > > > **Author**::
> > Qi, Yanyan
> >
> > > > > **Author**::
> > Yin, Yajie
> >
> > > > > **Author**::
> > Nico, Katherine F.
> >
> > > > > **Author**::
> > Tierney, Flora M.
> >
> > > > > **Author**::
> > Howitt, Michael R.
> >
> > > > > **Author**::
> > Lareau, Caleb A.
> >
> > > > > **Author**::
> > Satpathy, Ansuman T.
> >
> > > > > **Author**::
> > Mackay, Laura K.
> >
> > ~
> >
> > > **Title**:: Distinct epigenomic landscapes underlie tissue-specific memory T cell differentiation
> > > **Year**:: 2024
> > > **Citekey**:: Buquicchio_Immunity_2024b
> >
> > > **itemType**:: journalArticle
> >
> >
> > > **Journal**:: *Immunity*
> >
> >
> > > **Volume**:: 57
> >
> >
> > > **Issue**:: 9
> >
> >
> >
> >
> >
> > > **Pages**:: 2202-2215.e6
> >
> >
> > > **DOI**:: 10.1016/j.immuni.2024.06.014
> >
> >

> [!faq]- Zotero Highlights
> %% begin annotations %%
> > 
> ### Imported on 2026-04-08 10:35 pm
>
> > #### Relevant / important
>
> > > [!quote|#ffd400] Highlight
>
> > we found little distinction between the chromatin state of the liver and splenic TEM and TCM cells, liver TRM cells comprised a discrete cluster
>>
>
>
> >
> > [Page 3](zotero://open-pdf/library/items/BD4A6G9K?page=3) [2026-04-08#9:25 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > Direct comparison of gene scores between TRM and TEM or TCM cell clusters revealed differential accessibility in peaks corresponding to genes with decreased expression in TRM cells compared with TCIRC cells, such as Klf2, Ccr7, Sell, S1pr5, Zeb2, and Cx3cr1
>>
>
>
> >
> > [Page 3](zotero://open-pdf/library/items/BD4A6G9K?page=3) [2026-04-08#9:29 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > This analysis also revealed differential accessibility in genes with no known role in liver TRM cell formation, such as Fcgr2b and Hic1, as well as increased accessibility in adhesion-related genes, such as Chn2, Cdh1, Itga9, and Gpr55
>>
>
>
> >
> > [Page 3](zotero://open-pdf/library/items/BD4A6G9K?page=3) [2026-04-08#9:29 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > TRM cells displayed increased Gpr55 and Hic1 gene expression and decreased Fcgr2b expression when compared with TEM and TCM cells
>>
>
>
> >
> > [Page 3](zotero://open-pdf/library/items/BD4A6G9K?page=3) [2026-04-08#9:31 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > Diminished gene scores for Ccr7 and Sell were also observed in TEM relative to TCM cell clusters
>>
>
>
> >
> > [Page 3](zotero://open-pdf/library/items/BD4A6G9K?page=3) [2026-04-08#9:32 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > as well as increased accessibility at the S1pr5 and Zeb2 loci
>>
>
>
> >
> > [Page 3](zotero://open-pdf/library/items/BD4A6G9K?page=3) [2026-04-08#9:33 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > By contrast, although the chromatin accessibility of Hic1 was specifically increased in the liver TRM population (Figure 1F), HIC1 motif accessibility was significantly reduced in TRM cells relative to other subsets
>>
>
>
> >
> > [Page 3](zotero://open-pdf/library/items/BD4A6G9K?page=3) [2026-04-08#9:33 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > This is consistent with the known interaction of HIC1 with polycomb repressive complex 2 (PRC2), which plays a role in chromatin compaction and transcriptional repression.34 Nonetheless, CRISPR-Cas9-mediated Hic1 deletion in CD8+ T cells showed that liver TRM cells require this TF for development
>>
>
>
> >
> > [Page 3](zotero://open-pdf/library/items/BD4A6G9K?page=3) [2026-04-08#9:34 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > We found 137 and 175 peaks with increased and decreased accessibility, respectively (Figure S1I), which included genes involved in the regulation of cell cycle and apoptosis
>>
>
>
> >
> > [Page 6](zotero://open-pdf/library/items/BD4A6G9K?page=6) [2026-04-08#9:36 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > Cluster analysis showed that GP33 tetramer+ T cells isolated at 7 d p.i. comprised 10 clusters, whereas cells isolated at 14 and 28 d p.i. were comparatively less diverse, consisting of 3 clusters (Figures 2A, 2B, and S2A) that were enriched for TCIRC or TRM cell gene signatures
>>
>
>
> >
> > [Page 6](zotero://open-pdf/library/items/BD4A6G9K?page=6) [2026-04-08#9:41 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > Within effector cells (TEFF) isolated at 7 d p.i., we found clusters expressing genes associated with proliferation and cytotoxicity (Mki67, Top2a, Gzmb, and Pfn1; data not shown) (TEFF-1-5), as well as clusters that showed an enrichment for TCIRC or TRM cell gene signatures that we termed memory T cell precursors (TMP [TMP-CIRC1-3, TMP-RM]) (Figure S2B). TMP-CIRC-1 and TMP-CIRC-2-3 cells displayed increased accessibility and gene expression of TCM-related (e.g., Sell, Il7r) and TEM-defining genes (e.g., Tbx21, Ifng, and Fcgr2b), respectively (Figures 2C and S2C). TMP-RM cells showed enrichment in the TRM cell gene signature, as well as increased Cd69 and reduced S1pr1 accessibility and expression, hallmark features of TRM cells
>>
>
>
> >
> > [Page 6](zotero://open-pdf/library/items/BD4A6G9K?page=6) [2026-04-08#9:43 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > The FcgRIIB locus displayed reduced  accessibility in TMP-RM and TRM cells, compared with TMP-CIRC-1-3 and TCIRC cells (Figure 2F). This change in Fcgr2b accessibility was reflected by FcgRIIB protein expression in T cells at 30 d p.i.
>>
>
>
> >
> > [Page 6](zotero://open-pdf/library/items/BD4A6G9K?page=6) [2026-04-08#9:45 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > Although the progeny of FcgRIIB+ cells preferentially gave rise to TEM and TCM cells, cells lacking FcgRIIB displayed an increased propensity to form TRM cells in the liver
>>
>
>
> >
> > [Page 6](zotero://open-pdf/library/items/BD4A6G9K?page=6) [2026-04-08#9:51 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > In line with this, the genetic deletion of Fcgr2b in P14 T cells resulted in the reduction of TEM and TCM cells without impacting liver TRM cell development
>>
>
>
> >
> > [Page 6](zotero://open-pdf/library/items/BD4A6G9K?page=6) [2026-04-08#9:51 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > Consistent with the known role of FcgRIIB in apoptosis,43 we found increased active caspase-3/-7 in liver TRM cells in FcgRIIB+ cells compared with FcgRIIB cells
>>
>
>
> >
> > [Page 6](zotero://open-pdf/library/items/BD4A6G9K?page=6) [2026-04-08#9:52 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > Although TRM cells isolated from SI-IEL, lung, skin, and liver clustered separately, we found that those derived from the SGs, FRT, and kidney were predominantly present in one cluster (Figures 3A and S3B), suggesting that T cells adopt a common epigenetic program associated with tissue residence in these organs.
>>
>
>
> >
> > [Page 6](zotero://open-pdf/library/items/BD4A6G9K?page=6) [2026-04-08#9:57 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > Mapping peaks with differential accessibility to genes revealed that Klf2 and S1pr1 exhibited the most frequent losses in cis-regulatory element accessibility, whereas Snx29 and Ptpn5 exhibited the most frequent gains in cis-regulatory element accessibility
>>
>
>
> >
> > [Page 7](zotero://open-pdf/library/items/BD4A6G9K?page=7) [2026-04-08#9:59 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > To further understand gene-level accessibility changes unique to TRM cells, we identified significant gene score changes relative to TCIRC cells and observed 52 and 37 genes with decreased and increased accessibility, respectively, including Ptpn5 and Litaf
>>
>
>
> >
> > [Page 7](zotero://open-pdf/library/items/BD4A6G9K?page=7) [2026-04-08#9:59 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > We found a broad enrichment in motifs belonging to CREB1, E4F1, PDX1, and ATF3 in TRM cells while TCIRC cells were enriched in motifs for KLF2, LEF1, and TCF7, as expected from previous studies
>>
>
>
> >
> > [Page 7](zotero://open-pdf/library/items/BD4A6G9K?page=7) [2026-04-08#10:01 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > We next sought to compare genes from this common epigenetic signature with those from previously published TRM cell ‘‘core’’ signatures (from bulk4,39 and scRNA-seq datasets35). Forty-four genes were uniquely identified by scATAC-seq, including Acvr2a, Ptpn5, and Snx29 (Figure S3F). Genes shared across datasets included Xcl1, Cish, Litaf, and Qpct (Figure S3F), although such commonalities were relatively few and were likely attributable to the diverse range of organs, infection models, and time points collectively studied.
>>
>
>
> >
> > [Page 7](zotero://open-pdf/library/items/BD4A6G9K?page=7) [2026-04-08#10:04 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > Among enriched pathways, participation of transforming growth factor-b (TGF-b) signaling was observed in skin and SI IEL TRM cells, whereas liver TRM cells were enriched in interferon (IFN) signaling (Figure S4B) in line with previous findings.
>>
>
>
> >
> > [Page 9](zotero://open-pdf/library/items/BD4A6G9K?page=9) [2026-04-08#10:06 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > We found that among TRM populations, those in the liver and skin exhibited the strongest negative correlation
>>
>
>
> >
> > [Page 9](zotero://open-pdf/library/items/BD4A6G9K?page=9) [2026-04-08#10:09 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > We found 53 TFs that were differentially active and/or differentially expressed in skin TRM cells relative to liver TRM cells, including Fosb, Fos, and Jun (change in accessibility and expression) and Bach2 (change in motif accessibility only) (Figures 4B–4D and S4C), with skin TRM cells displaying the highest motif accessibility for FOSB, FOS, FOSL1, and BACH2 across all clusters (Figure 4E).
>>
>
>
> >
> > [Page 9](zotero://open-pdf/library/items/BD4A6G9K?page=9) [2026-04-08#10:09 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > Indeed, the deletion of Fosb, Fos, Fosl1, and Bach2 dramatically impaired skin TRM cell formation while leaving TRM cells in the liver unaffected (Figure 4F). Similarly, in the absence of Fosb, Fos, and Fosl1, skin TRM cell development was impaired after HSV infection (Figure S4D), demonstrating the participation of the FOS TF family in skin TRM cell formation.
>>
>
>
> >
> > [Page 9](zotero://open-pdf/library/items/BD4A6G9K?page=9) [2026-04-08#10:12 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > genetic ablation of Fosb led to a decrease in 115 peaks, including genes involved in the interleukin (IL)-12 signaling pathway (Figures 4G and S4E). Deletion of Fos led to a decrease in 53 peaks, affecting pathways related to focal adhesion kinases and SMAD2/3 signaling
>>
>
>
> >
> > [Page 9](zotero://open-pdf/library/items/BD4A6G9K?page=9) [2026-04-08#10:14 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > a reduction in accessibility of genes related to IL-23 signaling was observed in the absence of both TFs
>>
>
>
> >
> > [Page 9](zotero://open-pdf/library/items/BD4A6G9K?page=9) [2026-04-08#10:15 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > deletion of Bach2 led to a decrease in 21 peaks, including peaks located in Adgrl2 and Tox and affected pathways involved in TCR and nuclear factor kB (NF-kB)
>>
>
>
> >
> > [Page 9](zotero://open-pdf/library/items/BD4A6G9K?page=9) [2026-04-08#10:15 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > we used chromVAR to assess motif variation based on CisBP database predictions and evaluated the gene score associated with Prdm1
>>
>
>
> >
> > [Page 9](zotero://open-pdf/library/items/BD4A6G9K?page=9) [2026-04-08#10:17 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > Although CisBP revealed 30 TF motifs shared between one subcluster from each organ—group A (skin TRM-2, SG+FRT+kidney TRM-1, lung TRM-1, liver TRM-2, and SI-IEL TRM-2), JASPAR identified eight motifs shared across group A clusters (Figure 5C). Similarly, group B subclusters (skin TRM-1, SG+FRT+kidney TRM-2, lung TRM-2, liver TRM-1, and SI-IEL TRM-1) exhibited 13 and 2 TFs with consistent motif accessibility across organs using CisBP and JASPAR, respectively (Figure 5C). While both databases were enriched in motifs for ASCL2, HIC1, PTF1A, and TCF in group A subclusters, group B was enriched in motifs for ARNTL and KLF
>>
>
>
> >
> > [Page 9](zotero://open-pdf/library/items/BD4A6G9K?page=9) [2026-04-08#10:20 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > TEX cells share transcriptional and functional phenotypes with TRM cells3,12 with common TFs such as BHLHE40 and BAF complexes required for the development of both subsets.52–54
>>
>
>
> >
> > [Page 10](zotero://open-pdf/library/items/BD4A6G9K?page=10) [2026-04-08#10:21 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > We found that Tox gene scores were reduced in TRM cells when compared with all TEX cell subsets (Figure S6G), supporting low Tox expression in TRM cells (Figure S6H). Additionally, similar to expression at the protein level, increased Tcf7 gene scores were observed in TEX-PROG cells and TCM cells when compared with TRM or other TEX populations
>>
>
>
> >
> > [Page 12](zotero://open-pdf/library/items/BD4A6G9K?page=12) [2026-04-08#10:25 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > Motif deviation for several TEXassociated TFs, such as IRF4 and EOMES, was highest in TEX cell clusters (Figures S6I and S6J). RUNX3, however, exhibited the highest motif deviation in the skin TRM population and TEX-TERM cells (Figure S6J).
>>
>
>
> >
> > [Page 12](zotero://open-pdf/library/items/BD4A6G9K?page=12) [2026-04-08#10:27 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > Although we observed an enrichment of shared TRM cell peaks in TEX-TERM cells (mean deviation = 0.3332, Z score = 3.036), TEX-PROG or TEX-INT cell clusters were not enriched in peaks that defined TRM cells
>>
>
>
> >
> > [Page 12](zotero://open-pdf/library/items/BD4A6G9K?page=12) [2026-04-08#10:27 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > Similarly, liver, SI-IEL, lung, and skin TRM cell clusters were enriched in TEXTERM peaks, with no enrichment observed for TEX-PROG or TEX-INT peaks in the TRM cell clusters
>>
>
>
> >
> > [Page 12](zotero://open-pdf/library/items/BD4A6G9K?page=12) [2026-04-08#10:27 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > we assessed the overlap between peaks present in all TRM populations and the TEX-TERM cell cluster (Figure 6F). Among 254 shared peaks, we identified increased accessibility in multiple peaks located in Snx29, Ptpn5, and Cdh1 in these subsets (Figures 6F and S6L). Two of the peaks shared between skin TRM cells and TEX cells were nearest to the Pdcd1 gene; one peak 23kb from the TSS of Pdcd1 is a known TEX cell enhancer that mediates sustained PD1 expression, previously thought to be specific to TEX cells56,62
>>
>
>
> >
> > [Page 12](zotero://open-pdf/library/items/BD4A6G9K?page=12) [2026-04-08#10:28 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > Among the 5,049 TEX-TERM cell peaks that were not observed in any TRM populations studied here, 54 were linked to Tox, 11 to Nfatc1, and 10 to Batf, consistent with the roles of those TFs in mediating T cell exhaustion63–67 (Figures 6F and S6L).
>>
>
>
> >
> > [Page 12](zotero://open-pdf/library/items/BD4A6G9K?page=12) [2026-04-08#10:29 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > We observed an enrichment of RUNX motifs predominantly in skin TRM and TEX-TERM cells
>>
>
>
> >
> > [Page 12](zotero://open-pdf/library/items/BD4A6G9K?page=12) [2026-04-08#10:30 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > FEV, IRF, ETS, and BCL motifs were largely enriched in TEX-TERM cells
>>
>
>
> >
> > [Page 12](zotero://open-pdf/library/items/BD4A6G9K?page=12) [2026-04-08#10:30 pm]
>
> > > 
> %% end annotations %%

%% Import Date: 2026-04-08T16:58:53.195+02:00 %%
