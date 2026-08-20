---
cssclass: literature-note
category: literaturenote
title: Chromatin states define tumor-specific T cell dysfunction and reprogramming
tags:
  - P/CD44
  - P/CD62L
  - P/TBET
  - C/GZMB
  - C/IFNg
  - C/TNFa
  - C/PRF1
  - P/LDHA
  - P/KI67
  - P/PD1
  - P/LAG3
  - P/NFATC1
  - P/NFATC2
  - S/NFAT
  - P/CTLA4
  - P/TIGIT
  - P/SOCS1
  - P/CBLB
  - P/EGR2
  - P/EGR1
  - P/TCF1
  - S/WNT
  - P/E2F
  - P/KLF
  - P/ETS
  - P/ICOS
  - P/CD28
  - P/SOCS2
  - P/CISH1
  - P/CD38
  - P/CD101
  - P/CD30L
  - P/CD5
  - P/IRF4
  - P/BCL2
  - P/CD127
citekey: Philip_Nature_2017
status: Read
dateread: 2026-03-31
articletype: Article
used_in_redaction: Yes
---
---
## Notes

> [!notes]
> %% begin Notes %%**Summary** : This article accessed chromatin accessibility of acute vs tumoral tumor antigen specific CD8+ T cells, and found two distinct state of dysfunction (before and after day 12). The dysfunction included decreases in TCR signalling, cytokine production, Wnt/TCF1 signalling and T cells differentiation and increases in NFAT signalling. Only TILs from before day 12 could be functionally restored by IL15 *in vitro*.
> [[1.3 Dysfonction des lymphocytes T]] [[1.1 Différenciation des lymphocytes T en lymphocyte T effecteur ou mémoire]]
> Gene involved in dysfunction : NFATC1/2-related genes (CTLA4, PD1, TIGIT, SOCS1, CBLB, EGR2), E2F/KLF/ETS TF families, CISH1/SOCS2, CD101/CD38/CD30L/CD5
> Gene lossed by dysfunction : IFNg, Wnt/TCF1, ICOS/CD28, 
>Bioinformatics : list("peak opening L14 vs L7" = c("2EF1", "SP1", "SP4", "ELK1", "ELK3", "ELK4", "MBD2", "KLF6", "ZFX", "ZBTB7A", "KLF7", "SP3", "E2F4", "E2F3", "KLF2", "KLF4", "KLF16", "GABPA", "MBD1", "ELF1", "NR2C2", "EGR1", "E2F2", "E2F5"),
>"peak closing L14 vs L7" = c("IRF1", "AHCTF1", "NFATC2", "PBX1", "NFE2L1", "BACH1", "NFATC1", "MEF2C", "EGR2", "NFAT5", "JUNB", "BCL6", "JUND", "BATF", "TCF7", "TCF7L1", "FOSB", "SMARCC1", "FOS", "TCF7L2", "LEF1"))
>list("State 1" = c("KLRB1", "CD7", "CD200R1", "CAR2", "KLRE1", "CD101", "CFAP126", "CD244", "MRC2", "CCRL2", "CD38", "KLRA10", "MYLIP", "PNPLA7", "SELENBP2", "LPAR6", "TNFSF10", "KLRA23", "KLRD1", "ENTPD1", "LQSEC1", "SWAP70", "SLC35F5", "CD30L", "PKRA"),
>"State 2" = c("CD9", "CRTAM3", "CD5", "NRP1", "ANO10", "CD40LG", "TNFSF14", "ANXA2", "ITM2A", "RGS10", "REEP2", "DPP4", "UPK1A", "RECK", "ITGB7", "NT5E", "TRPM1", "GPM6B", "TBX2AR", "S1PR1", "CD28", "CCR7", "CD200", "SLAMF6", "SELL"))
>
>**Experiment** : Infection of mouse with LM-TAG (SV40) and transfer of TCR-TAG specific T cells + ATAC/RNA-seq at day 0 (naive), 5/7 (effectors) and 60 (memory)
>**Results** : There was great changes in naive to effector in term of chromatin accessibility. No changes in PRF1, TNF, LDHA, MKI67. Chromatin of memory cells was "effector like", despite no RNA expression.
>
>**Model** : Tamoxifen-inducible liver cancer mouse with TAG as a tumor-specific antigen, and transfer of TCR-TAG T cells + ATAC-seq and comparison with the previous acute infection samples.
>**Results** : TIL TCR-TAG were CD62L-/IGN-/TNFa- and PD1+LAG3+, consistent with a dysfunctional state. There was great changes in chromatin accessibility at day 5, and between day 7-14, and little changes up to day 60, suggesting a two-state dysfunction, which was different from the acute infection. Differences with acute infection included TCR signaling and cytokine production, like IFNg as well as immune checkpoing (PD1). Prediction of TF pattern resulted in the identification of NFATC1 (with targets : CTLA4, PDCD1, TIGIT, SOCS1, CBLB, EGR1, EGR2)
>
>**Experiment** : Isolation of day 5 to 50 TIL and culture with IL15 to restore proliferation and effector function
>**Results** : Only TILs from before day 12 had functions restored by IL15, suggesting that the dysfunction is plastic until day 12.
>
>**Other Results** : TCF1 expression and chromatin accessibility was decreased between day 7 and 14, as well as Wnt signaling genes, cytokine response, TCR signaling and T cell differenciation. There was an upregulation of E2F/ETS/KLF TF motifs and TCR negative regulator CISH1/SOCS2. Co-stimulation (ICOS, CD28) was decreased.
>
>**Experiment** : Treatment with a NFAT, WNT/TCF1 pharmalogical inhibitors and activators
>**Results** : Inhibition of NFAT in combinaison with WNT/TCF1 activation lead to decrease in PD1/LAG3 and increase in TCF1/EOMES expression.
>
>**Other Results** : By searching for surface proteins that discriminate state 1 and 2 : PD1/LAG3 was the same, but there was an increase of CD38/CD101/CD30L and decrease of CD5. Sorting of these cells proved there dysfunctional state. This was also found in a B16-OVA OT-I model.
>
>**Experiment** : Transfer of memory T cells instead of naive in tumor bearing mice
>**Results** : The pattern was exactly the same to naive.
>
>**Other Results** : The pattern has similarities in human TIL vs naive blood.
> %% end Notes %%

> [!Useful Informations]-
> %% begin Useful Informations %%
> %% end Useful Informations %%

---

> [!faq]- Article Informations
> > [!Link]
> >
> >  [Full Text PDF](file://C:\Users\10053234\Documents\Thesis_bibliography\Zotero\storage\E2SY5NC6\Philip%20et%20al.%20-%202017%20-%20Chromatin%20states%20define%20tumor-specific%20T%20cell%20dysfunction%20and%20reprogramming.pdf)
> >.
>
> > [!Cite]
> > Philip, M., Fairchild, L., Sun, L., Horste, E. L., Camara, S., Shakiba, M., Scott, A. C., Viale, A., Lauer, P., Merghoub, T., Hellmann, M. D., Wolchok, J. D., Leslie, C. S., & Schietinger, A. (2017). Chromatin states define tumor-specific T cell dysfunction and reprogramming. _Nature_, _545_(7655), 452–456. [https://doi.org/10.1038/nature22367](https://doi.org/10.1038/nature22367)
>
> > [!Abstract]-
> >
> > Tumour-specific CD8 T cells in solid tumours are dysfunctional, allowing tumours to progress. The epigenetic regulation of T cell dysfunction and therapeutic reprogrammability (for example, to immune checkpoint blockade) is not well understood. Here we show that T cells in mouse tumours differentiate through two discrete chromatin states: a plastic dysfunctional state from which T cells can be rescued, and a fixed dysfunctional state in which the cells are resistant to reprogramming. We identified surface markers associated with each chromatin state that distinguished reprogrammable from non-reprogrammable PD1hi dysfunctional T cells within heterogeneous T cell populations from tumours in mice; these surface markers were also expressed on human PD1hi tumour-infiltrating CD8 T cells. Our study has important implications for cancer immunotherapy as we define key transcription factors and epigenetic programs underlying T cell dysfunction and surface markers that predict therapeutic reprogrammability.
> >.
>
> > [!metadata]-
> > > >> > > **FirstAuthor**::
> > Philip, Mary
> >
> > > > > **Author**::
> > Fairchild, Lauren
> >
> > > > > **Author**::
> > Sun, Liping
> >
> > > > > **Author**::
> > Horste, Ellen L.
> >
> > > > > **Author**::
> > Camara, Steven
> >
> > > > > **Author**::
> > Shakiba, Mojdeh
> >
> > > > > **Author**::
> > Scott, Andrew C.
> >
> > > > > **Author**::
> > Viale, Agnes
> >
> > > > > **Author**::
> > Lauer, Peter
> >
> > > > > **Author**::
> > Merghoub, Taha
> >
> > > > > **Author**::
> > Hellmann, Matthew D.
> >
> > > > > **Author**::
> > Wolchok, Jedd D.
> >
> > > > > **Author**::
> > Leslie, Christina S.
> >
> > > > > **Author**::
> > Schietinger, Andrea
> >
> > ~
> >
> > > **Title**:: Chromatin states define tumor-specific T cell dysfunction and reprogramming
> > > **Year**:: 2017
> > > **Citekey**:: Philip_Nature_2017
> >
> > > **itemType**:: journalArticle
> >
> >
> > > **Journal**:: *Nature*
> >
> >
> > > **Volume**:: 545
> >
> >
> > > **Issue**:: 7655
> >
> >
> >
> >
> >
> > > **Pages**:: 452-456
> >
> >
> > > **DOI**:: 10.1038/nature22367
> >
> >

> [!faq]- Zotero Highlights
> %% begin annotations %%
> > 
> ### Imported on 2026-03-31 11:17 am
>
> > #### Relevant / important
>
> > > [!quote|#ffd400] Highlight
>
> > Thus, the “effector-like” accessibility in M permits basal transcription of certain effector genes (cluster 3) such as Ifng, while other genes are transcriptionally silent but poised for rapid re-expression upon TCR activation (cluster 1, Gzma)
>>
>
>
> >
> > [Page 3](zotero://open-pdf/library/items/E2SY5NC6?page=3) [2026-03-31#10:27 am]
>
> > > [!quote|#ffd400] Highlight
>
> > TCRTAG in malignant lesions followed a distinct epigenetic trajectory compared to TCRTAG in acute infection
>>
>
>
> >
> > [Page 3](zotero://open-pdf/library/items/E2SY5NC6?page=3) [2026-03-31#10:47 am]
>
> > > [!quote|#ffd400] Highlight
>
> > TCR  Philip et al. Page 3  Nature. Author manuscript; available in PMC 2017 November 20.  Author Manuscript Author Manuscript Author Manuscript Author Manuscript signaling and cytokine production pathway genes
>>
>
>
> >
> > [Page 3](zotero://open-pdf/library/items/E2SY5NC6?page=3) [2026-03-31#10:47 am]
>
> > > [!quote|#ffd400] Highlight
>
> > Predicted NFATC1 binding sites, including those in genes encoding inhibitory receptors and negative regulators such as Ctla4,Pdcd1, Tigit,Socs1, and Cblband TF Egr1and Egr2, had increased peak accessibility in dysfunctional L5
>>
>
>
> >
> > [Page 4](zotero://open-pdf/library/items/E2SY5NC6?page=4) [2026-03-31#10:47 am]
>
> > > [!quote|#ffd400] Highlight
>
> > when we re-isolated TCRTAG from liver lesions and cultured them invitro with IL15 (Fig. 3a), previously shown to induce proliferation and restore effector function in tumor-reactive CD8 T cells26,27, L5 and L7 regained the ability to produce IFNγ and TNFα, but TCRTAG isolated at day 12 and after did not
>>
>
>
> >
> > [Page 4](zotero://open-pdf/library/items/E2SY5NC6?page=4) [2026-03-31#10:51 am]
>
> > > [!quote|#ffd400] Highlight
>
> > TCF1 (encoded by Tcf7) protein levels decreased between L7 and L14
>>
>
>
> >
> > [Page 4](zotero://open-pdf/library/items/E2SY5NC6?page=4) [2026-03-31#10:51 am]
>
> > > [!quote|#ffd400] Highlight
>
> > analysis of closing peaks showed enrichment for WNT receptor signaling pathway genes, upstream of TCF family TFs, as well as cytokine response, TCR signaling, and T cell differentiation pathway genes
>>
>
>
> >
> > [Page 4](zotero://open-pdf/library/items/E2SY5NC6?page=4) [2026-03-31#10:52 am]
>
> > > [!quote|#ffd400] Highlight
>
> > Among the TCR signaling genes most up-regulated during the L7-L14 transition were negative regulators such as Cish1 and Socs2, while co-stimulatory molecule genes such as Icosand Cd28were downregulated together with closing of multiple peaks within their loci
>>
>
>
> >
> > [Page 4](zotero://open-pdf/library/items/E2SY5NC6?page=4) [2026-03-31#10:52 am]
>
> > > [!quote|#ffd400] Highlight
>
> > State 1 (L5, L7) TCRTAG had low expression of CD38, CD101, and CD30L and high expression of CD5, while state 2 (L14, L28) TCRTAG had the opposite pattern (Fig. 3d).
>>
>
>
> >
> > [Page 5](zotero://open-pdf/library/items/E2SY5NC6?page=5) [2026-03-31#11:01 am]
>
> > > [!quote|#ffd400] Highlight
>
> > Consistent with its expression, the Cd38locus contained intergenic and intronic peaks uniquely accessible in state 2 TST
>>
>
>
> >
> > [Page 5](zotero://open-pdf/library/items/E2SY5NC6?page=5) [2026-03-31#11:01 am]
>
> > > [!quote|#ffd400] Highlight
>
> > Moreover, TCRTAG from FK506 and FK506/TWS119-treated mice expressed low CD38 and CD101 compared to controls, correlating with their improved reprogrammability (Extended Data Fig. 7d). To test whether these markers could identify reprogrammable T cells within a heterogeneous TST population, we sorted CD38lo/CD101lo and CD38hi/CD101hi TST in L14 populations and assessed reprogrammability (3 days in vitroIL-15). While CD38lo/CD101lo- L14 regained the ability to produce IFNγ and TNFα, CD38 hi/CD101hi- L14 did not
>>
>
>
> >
> > [Page 5](zotero://open-pdf/library/items/E2SY5NC6?page=5) [2026-03-31#11:03 am]
>
> > > [!quote|#ffd400] Highlight
>
> > tumor-infiltrating M (ML7) rapidly upregulated PD1 and LAG3 and progressively lost effector function
>>
>
>
> >
> > [Page 5](zotero://open-pdf/library/items/E2SY5NC6?page=5) [2026-03-31#11:05 am]
>
> > > [!quote|#ffd400] Highlight
>
> > ATACSeq revealed that M followed a similar epigenetic trajectory as N in early malignant lesions (Fig. 4c and Extended Data Fig. 9b-d), and remarkably, by day 35, the chromatin state of transferred M was nearly identical to that of N at day 35 in early malignant lesions
>>
>
>
> >
> > [Page 5](zotero://open-pdf/library/items/E2SY5NC6?page=5) [2026-03-31#11:05 am]
>
> > > [!quote|#ffd400] Highlight
>
> > Dysfunctional M displayed the same gain and loss of ATAC-Seq peaks in critical gene loci including Pdcd1, Ctla4, Cd38, Tcf7, and Ifng(Extended Data Fig. 9e). Changes in surface protein expression (CD38, CD101, CD30L, and CD5) between ML7 and ML14 were like those seen with N (L7 and L14, respectively)
>>
>
>
> >
> > [Page 6](zotero://open-pdf/library/items/E2SY5NC6?page=6) [2026-03-31#11:05 am]
>
> > > [!quote|#ffd400] Highlight
>
> > Human N had a distinct chromatin state as compared to EM and CM, which were similar
>>
>
>
> >
> > [Page 6](zotero://open-pdf/library/items/E2SY5NC6?page=6) [2026-03-31#11:07 am]
>
> > > [!quote|#ffd400] Highlight
>
> > PD1hi TIL uniquely gained and lost multiple peaks, for example in IFNG, EGR2,CD5, and CTLA4
>>
>
>
> >
> > [Page 6](zotero://open-pdf/library/items/E2SY5NC6?page=6) [2026-03-31#11:07 am]
>
> > > [!quote|#ffd400] Highlight
>
> > We compared the nonpromoter peak changes that occurred during functional and dysfunctional mouse CD8 T cell differentiation with those observed in human PBL and PD1hi TIL and found that human PD1hi TIL had the greatest overlap in peak accessibility changes with fixed dysfunctional (state 2) murine TST (Fig. 5b). For example, the TCF7/Tcf7locus showed similar intergenic and intronic peak accessibility changes in human PD1hi TIL and murine state 2 TCRTAG  (Fig. 5c). A subset of PD1hi TIL expressed higher levels of CD38 /CD101 and lower levels of CD5 (Fig. 5d), suggesting that these markers could potentially be used to identify T cells amenable to therapeutic reprogramming in human tumors.
>>
>
>
> >
> > [Page 6](zotero://open-pdf/library/items/E2SY5NC6?page=6) [2026-03-31#11:08 am]
>
> > > 
> %% end annotations %%

%% Import Date: 2026-03-31T10:17:01.787+02:00 %%
