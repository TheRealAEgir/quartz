---
cssclass: literature-note
category: literaturenote
title: Transcriptional programs of neoantigen-specific TIL in anti-PD-1-treated lung cancers
tags:
  - P/CD103
  - P/HOBIT
  - P/LINC02446
  - P/HLA-DR
  - C/GZMH
  - C/IFNg
  - P/NKG7
  - C/GZMK
  - P/EOMES
  - P/PD1
  - P/LAG3
  - P/TIGIT
  - P/TIM3
  - P/TOX
  - P/TOX2
  - P/BLIMP1
  - P/CD39
  - P/CTLA4
  - P/TCF1
  - P/CD127
  - C/IL7
citekey: Caushi_Nature_2021
status: Read
dateread: 2026-04-10
articletype: Article
used_in_redaction: Yes
---
---
## Notes

> [!notes]
> %% begin Notes %%**Summary** : This article used MANAfest and ViralFest to detect TCR specific for some antigen, and paired this analysis with scRNA-TCRseq of NSCLC T cells. Patient with non-MPR had fewer MANA-specific, and there was no association in clinical outcome and blood MANA-specific T cells. MANA-specific CD8+ T cells were restricted to TRM clusters with distinct transcriptome from influenza-specific TRM cluster, and EBV-specific were mainly Teff. Influenza-specific had higher IL7 responsivness than MANA-specific. MANA-specific TRM from MPR patient had higher expression of immune-checkpoin than non-MPR patient who had higher CD127/TCF1. There was detection of MANA-specific T cells in the blood following anti-PD1 treatment with a TRM-like phenotype (mostly because of HOBIT expression), and it slowly decreased with time.
> [[TRM Cancer]] [[TRM Phenotype]] [[TRM Effector]] [[TRM Recirculation]] [[TRM Heterogeneity]] [[TRM Cancer]]
> 
>**Experiment** : scRNA-TCRseq of TIL/Normal/tdLN/distant metastasis of T cells in neoadjuvant anti-PD1 treated NSCLC + MANAFEST/ViralFEST
>**Results** : UMAP analyses showed differences between tumor/normal tissue, but little difference in MPR vs non-MPR TILs. MANAFEST/ViralFEST showed some TCR clonotypes associated with neo-antigen and viral antigen, respectively. Patient with non-MPR had more MANA-specfic TIL, and there was no association between clinical responses and tissue/blood viral-specific T cells. Frequency of MANA-specific T cells in the blood was very low.
>**Other Results** : Some MANA-specific clonotype were validated with TCR cloning.
>
>**Other Results** : Analysis of the CD8 showed 6 TRM clusters (based on HOBIT, LINC02446, CD103) with heterogenous immune checkpoint expression. No clonotype was restricted to a cluster. EBV-specific were mainly Teff, while influenza/MANA were mainly TRM. Both expressed activation/cytolytic molecules, but MANA-specific lacked GZMK and EOMES. MANA-specific T cells showed higher exhaustion and immune-checkpoint expression. CD39 was the most differentialy expressed gene between MANA and virus-specific T cells. Influenza-specific had lower activation/exhaustion and more TCF1/CD127, and was more responsible to IL7 (even though TRM did had some IL7 responsiveness to supraphisiological treatment). The cloning of some TCR sequence from the cluster of MANA-specific into T cells did show some MANA reactivity to a affinity comparable to the virus-specific TCR, but TCR from non-MPR patient was lower.
>**Other Results** : DEG between MPR and non-MPR patient in the MANA-specific cluster showed high expression of TOX2/CTLA4/TIM3/CD39 in non-MPR, and CD127/TCF1 in MPR.
>
>**Experiment** : scRNA-TCRseq of TCRb2+ FACS sorted cells from a patient at anti-PD1 treatment and several timepoint after that.
>**Results** : There was a cluster with a TRM-like phenotype that disappeared with time. RNA velocity analyses revealed a differenciation either toward Teff of Tmem.
> %% end Notes %%

> [!Useful Informations]-
> %% begin Useful Informations %%
> > %% end Useful Informations %%
> 

---

> [!faq]- Article Informations
> > [!Link]
> >
> >  [Full Text PDF](file://C:\Users\10053234\Documents\Thesis_bibliography\Zotero\storage\FI2AQUL3\Caushi%20et%20al.%20-%202021%20-%20Transcriptional%20programs%20of%20neoantigen-specific%20TIL%20in%20anti-PD-1-treated%20lung%20cancers.pdf)
> >.
>
> > [!Cite]
> > Caushi, J. X., Zhang, J., Ji, Z., Vaghasia, A., Zhang, B., Hsiue, E. H.-C., Mog, B. J., Hou, W., Justesen, S., Blosser, R., Tam, A., Anagnostou, V., Cottrell, T. R., Guo, H., Chan, H. Y., Singh, D., Thapa, S., Dykema, A. G., Burman, P., … Smith, K. N. (2021). Transcriptional programs of neoantigen-specific TIL in anti-PD-1-treated lung cancers. _Nature_, _596_(7870), 126–132. [https://doi.org/10.1038/s41586-021-03752-4](https://doi.org/10.1038/s41586-021-03752-4)
>
> > [!Abstract]-
> >
> > PD-1 blockade unleashes CD8 T cells1, including those specific for mutation-associated neoantigens (MANA), but factors in the tumour microenvironment can inhibit these T cell responses. Single-cell transcriptomics have revealed global T cell dysfunction programs in tumour-infiltrating lymphocytes (TIL). However, the majority of TIL do not recognize tumour antigens2, and little is known about transcriptional programs of MANA-specific TIL. Here, we identify MANA-specific T cell clones using the MANA functional expansion of specific T cells assay3 in neoadjuvant anti-PD-1-treated non-small cell lung cancers (NSCLC). We use their T cell receptors as a ‘barcode’ to track and analyse their transcriptional programs in the tumour microenvironment using coupled single-cell RNA sequencing and T cell receptor sequencing. We find both MANA- and virus-specific clones in TIL, regardless of response, and MANA-, influenza- and Epstein–Barr virus-specific TIL each have unique transcriptional programs. Despite exposure to cognate antigen, MANA-specific TIL express an incompletely activated cytolytic program. MANA-specific CD8 T cells have hallmark transcriptional programs of tissue-resident memory (TRM) cells, but low levels of interleukin-7 receptor (IL-7R) and are functionally less responsive to interleukin-7 (IL-7) compared with influenza-specific TRM cells. Compared with those from responding tumours, MANA-specific clones from non-responding tumours express T cell receptors with markedly lower ligand-dependent signalling, are largely confined to HOBIThigh TRM subsets, and coordinately upregulate checkpoints, killer inhibitory receptors and inhibitors of T cell activation. These findings provide important insights for overcoming resistance to PD-1 blockade.
> >.
>
> > [!metadata]-
> > > >> > > **FirstAuthor**::
> > Caushi, Justina X.
> >
> > > > > **Author**::
> > Zhang, Jiajia
> >
> > > > > **Author**::
> > Ji, Zhicheng
> >
> > > > > **Author**::
> > Vaghasia, Ajay
> >
> > > > > **Author**::
> > Zhang, Boyang
> >
> > > > > **Author**::
> > Hsiue, Emily Han-Chung
> >
> > > > > **Author**::
> > Mog, Brian J.
> >
> > > > > **Author**::
> > Hou, Wenpin
> >
> > > > > **Author**::
> > Justesen, Sune
> >
> > > > > **Author**::
> > Blosser, Richard
> >
> > > > > **Author**::
> > Tam, Ada
> >
> > > > > **Author**::
> > Anagnostou, Valsamo
> >
> > > > > **Author**::
> > Cottrell, Tricia R.
> >
> > > > > **Author**::
> > Guo, Haidan
> >
> > > > > **Author**::
> > Chan, Hok Yee
> >
> > > > > **Author**::
> > Singh, Dipika
> >
> > > > > **Author**::
> > Thapa, Sampriti
> >
> > > > > **Author**::
> > Dykema, Arbor G.
> >
> > > > > **Author**::
> > Burman, Poromendro
> >
> > > > > **Author**::
> > Choudhury, Begum
> >
> > > > > **Author**::
> > Aparicio, Luis
> >
> > > > > **Author**::
> > Cheung, Laurene S.
> >
> > > > > **Author**::
> > Lanis, Mara
> >
> > > > > **Author**::
> > Belcaid, Zineb
> >
> > > > > **Author**::
> > El Asmar, Margueritta
> >
> > > > > **Author**::
> > Illei, Peter B.
> >
> > > > > **Author**::
> > Wang, Rulin
> >
> > > > > **Author**::
> > Meyers, Jennifer
> >
> > > > > **Author**::
> > Schuebel, Kornel
> >
> > > > > **Author**::
> > Gupta, Anuj
> >
> > > > > **Author**::
> > Skaist, Alyza
> >
> > > > > **Author**::
> > Wheelan, Sarah
> >
> > > > > **Author**::
> > Naidoo, Jarushka
> >
> > > > > **Author**::
> > Marrone, Kristen A.
> >
> > > > > **Author**::
> > Brock, Malcolm
> >
> > > > > **Author**::
> > Ha, Jinny
> >
> > > > > **Author**::
> > Bush, Errol L.
> >
> > > > > **Author**::
> > Park, Bernard J.
> >
> > > > > **Author**::
> > Bott, Matthew
> >
> > > > > **Author**::
> > Jones, David R.
> >
> > > > > **Author**::
> > Reuss, Joshua E.
> >
> > > > > **Author**::
> > Velculescu, Victor E.
> >
> > > > > **Author**::
> > Chaft, Jamie E.
> >
> > > > > **Author**::
> > Kinzler, Kenneth W.
> >
> > > > > **Author**::
> > Zhou, Shibin
> >
> > > > > **Author**::
> > Vogelstein, Bert
> >
> > > > > **Author**::
> > Taube, Janis M.
> >
> > > > > **Author**::
> > Hellmann, Matthew D.
> >
> > > > > **Author**::
> > Brahmer, Julie R.
> >
> > > > > **Author**::
> > Merghoub, Taha
> >
> > > > > **Author**::
> > Forde, Patrick M.
> >
> > > > > **Author**::
> > Yegnasubramanian, Srinivasan
> >
> > > > > **Author**::
> > Ji, Hongkai
> >
> > > > > **Author**::
> > Pardoll, Drew M.
> >
> > > > > **Author**::
> > Smith, Kellie N.
> >
> > ~
> >
> > > **Title**:: Transcriptional programs of neoantigen-specific TIL in anti-PD-1-treated lung cancers
> > > **Year**:: 2021
> > > **Citekey**:: Caushi_Nature_2021
> >
> > > **itemType**:: journalArticle
> >
> >
> > > **Journal**:: *Nature*
> >
> >
> > > **Volume**:: 596
> >
> >
> > > **Issue**:: 7870
> >
> >
> >
> > > **Publisher**:: Nature Publishing Group
> >
> >
> >
> > > **Pages**:: 126-132
> >
> >
> > > **DOI**:: 10.1038/s41586-021-03752-4
> >
> >

> [!faq]- Zotero Highlights
> %% begin annotations %%
> > 
> ### Imported on 2026-04-11 5:50 pm
>
> > #### Relevant / important
>
> > > [!quote|#ffd400] Highlight
>
> > Most MANA-specific clones were detected at very low frequency (median: 0.001%) in the peripheral blood across all available time points
>>
>
>
> >
> > [Page 2](zotero://open-pdf/library/items/FI2AQUL3?page=2) [2026-04-10#10:58 am]
>
> > > [!quote|#ffd400] Highlight
>
> > Overall, pathologic response was not associated with the prevalence, frequency or intratumoral representation of MANA-specific T cells (Extended Data Figs. 2, 3 Supplementary Table 9). In fact, more MANA-specific TIL were observed among non-MPR TIL than among MPR TIL. No consistent pattern was observed for the frequency of viral-specific T cells in the tissue or peripheral blood
>>
>
>
> >
> > [Page 2](zotero://open-pdf/library/items/FI2AQUL3?page=2) [2026-04-10#10:58 am]
>
> > > [!quote|#ffd400] Highlight
>
> > Six clusters had gene expression programs consistent with TRM T cells, characterized by high expression of HOBIT, LINC02446, CD103 and a previously published TRM gene set
>>
>
>
> >
> > [Page 2](zotero://open-pdf/library/items/FI2AQUL3?page=2) [2026-04-10#11:02 am]
>
> > > [!quote|#ffd400] Highlight
>
> > The six TRM subsets were heterogenous in their expression of an exhaustion gene set described previously in NSCLC
>>
>
>
> >
> > [Page 2](zotero://open-pdf/library/items/FI2AQUL3?page=2) [2026-04-10#11:03 am]
>
> > > [!quote|#ffd400] Highlight
>
> > EBV-reactive T cells primarily resided in effector T (Teff) cell clusters, whereas influenza- and MANA-specific Tcells largely occupied distinct TRM clusters.
>>
>
>
> >
> > [Page 2](zotero://open-pdf/library/items/FI2AQUL3?page=2) [2026-04-10#11:29 am]
>
> > > [!quote|#ffd400] Highlight
>
> > Notably, because influenza is a respiratory virus, influenza-specific Tcells may be considered the archetypal lung-resident memory Tcells
>>
>
>
> >
> > [Page 2](zotero://open-pdf/library/items/FI2AQUL3?page=2) [2026-04-10#11:33 am]
>
> > > [!quote|#ffd400] Highlight
>
> > There was considerable shared expression of selective cytotoxic T lymphocyte (CTL) activation genes between MANA- and EBV-specific Tcells, in particular genes encoding Tcell activation and CTL activity, such as HLA-DRA, GZMH, IFNG and NKG7
>>
>
>
> >
> > [Page 3](zotero://open-pdf/library/items/FI2AQUL3?page=3) [2026-04-10#11:36 am]
>
> > > [!quote|#ffd400] Highlight
>
> > However, genes encoding certain canonical cytolytic molecules, such as GZMK, were expressed at low levels in MANA-specific TIL. Most notably, EOMES, which encodes a transcription factor that is critical for CTL activity19, was expressed in EBV-specific CD8 cells but was minimally expressed in most MANA-specific cells
>>
>
>
> >
> > [Page 3](zotero://open-pdf/library/items/FI2AQUL3?page=3) [2026-04-10#11:37 am]
>
> > > [!quote|#ffd400] Highlight
>
> > Notably, MANA-specific cells expressed higher levels of PRDM1, which encodes BLIMP-1 and has been reported to participate in coordinated transcriptional activation of multiple checkpoint genes, including PD-1 (also known as PDCD1), LAG3, TIGIT and HAVCR220. TOX, which encodes a chromatin modifier important for exhaustion programs of chronic virus-specific and tumour-specific T cells in mouse models21,22, was only marginally increased in MANA-specific cells, whereas its homologue, TOX2, which has also been reported to drive
>>
>
>
> >
> > [Page 3](zotero://open-pdf/library/items/FI2AQUL3?page=3) [2026-04-10#11:39 am]
>
> > > [!quote|#ffd400] Highlight
>
> > HOBIT, which is selectively upregulated in TRM T cells24, was also upregulated in MANA-specific TIL, even relative to influenza-specific TRM
>>
>
>
> >
> > [Page 3](zotero://open-pdf/library/items/FI2AQUL3?page=3) [2026-04-10#11:40 am]
>
> > > [!quote|#ffd400] Highlight
>
> > MANA-specific CD8 Tcells in the tumour have an unconventional hybrid transcriptional program characterized by incomplete activation of effector programs and significant upregulation of checkpoint molecules such as PD-1, CTLA-4, TIM3, TIGIT and CD39.
>>
>
>
> >
> > [Page 3](zotero://open-pdf/library/items/FI2AQUL3?page=3) [2026-04-10#11:42 am]
>
> > > [!quote|#ffd400] Highlight
>
> > Genes encoding each of these checkpoint molecules were more highly expressed among MANA-specific CD8 cells than either influenza- or EBV-specific CD8 cells, with CD39 being the most highly differentially expressed
>>
>
>
> >
> > [Page 3](zotero://open-pdf/library/items/FI2AQUL3?page=3) [2026-04-10#11:43 am]
>
> > > [!quote|#ffd400] Highlight
>
> > Influenza-specific TRM were distinguished from MANA-specific TRM by low levels of both activation and effector CTL programs and had lower expression of multiple checkpoint molecules, but had the highest levels of genes associated with T memory stem cells, such as TCF7 and IL-7R
>>
>
>
> >
> > [Page 3](zotero://open-pdf/library/items/FI2AQUL3?page=3) [2026-04-10#12:20 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > Nonetheless, supraphysiological levels of IL-7 induced appreciable upregulation of IL-7R-induced genes in MANA-specific TIL.
>>
>
>
> >
> > [Page 4](zotero://open-pdf/library/items/FI2AQUL3?page=4) [2026-04-10#12:22 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > eptide dose–response curves of MPR-derived TCRs were comparable to those of EBV- and influenza-specific TCRs, suggesting that these TCRs were capable of strong ligand-dependent signalling
>>
>
>
> >
> > [Page 4](zotero://open-pdf/library/items/FI2AQUL3?page=4) [2026-04-11#5:30 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > derived from patients without MPR were markedly lower
>>
>
>
> >
> > [Page 5](zotero://open-pdf/library/items/FI2AQUL3?page=5) [2026-04-11#5:30 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > Significantly higher levels of genes associated with T cell dysfunction such as TOX2, CTLA4, HAVCR2 and ENTPD1 were observed for non-MPR MANA-specific T cells, whereas MPR MANA-specific T cells had higher expression of genes associated with memory (IL7R and TCF7) and effector function (GZMK)
>>
>
>
> >
> > [Page 5](zotero://open-pdf/library/items/FI2AQUL3?page=5) [2026-04-11#5:31 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > Of note, CXCL13 is one of the genes most highly correlated with checkpoint-associated genes in non-MPR MANA-specific TIL, and was also found to be highly expressed in MANA-specific cells relative to virus-specific cells among CD8 TIL
>>
>
>
> >
> > [Page 5](zotero://open-pdf/library/items/FI2AQUL3?page=5) [2026-04-11#5:33 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > ine out of ten MANA-specific clones mapped to a TRM-like cluster (Tmem(3); Tmem, memory Tcell), with some transcriptional features of TRM, such as expression of HOBIT) two weeks after the initiation of anti-PD-1 treatment (Fig. 4d). By four weeks (time of tumour resection), a significant diversification of phenotype was observed (P≤0.021; Methods). Half of the MANA-specific cells were in Teff clusters (Fig. 4e). By 11 weeks (7 weeks after tumour resection), the MANA-specific cells were below the limit of detection in the blood, consistent with known TRM patterns in the peripheral blood
>>
>
>
> >
> > [Page 6](zotero://open-pdf/library/items/FI2AQUL3?page=6) [2026-04-11#5:38 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > Although all these tissue compartments were only available for one MPR, these findings are consistent with our hypothesis that, upon activation, functional effector MANA-specific T cells enter the blood and traffic into tissues, including normal lung, in search of micro-metastatic tumour26, and are compatible with a previous study showing that TRM cell plasticity can influence systemic memory T cell responses27.
>>
>
>
> >
> > [Page 7](zotero://open-pdf/library/items/FI2AQUL3?page=7) [2026-04-11#5:40 pm]
>
> > > [!quote|#ffd400] Highlight
>
> > Among MANA-specific CD8 TIL, roughly 90% were TRM with high expression of HOBIT that also displayed a partial but incompletely activated Teff program, along with upregulation of several targetable checkpoints in non-MPR tumours. MANA-specific T cells also express far less IL-7R relative to influenza TRM, translating functionally into poor IL-7 responsiveness.
>>
>
>
> >
> > [Page 7](zotero://open-pdf/library/items/FI2AQUL3?page=7) [2026-04-11#5:41 pm]
>
> > > 
> %% end annotations %%

%% Import Date: 2026-04-10T10:40:27.642+02:00 %%
