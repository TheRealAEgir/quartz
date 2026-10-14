---
cssclass: literature-note
category: literaturenote
title: Atlas-guided discovery of transcription factors for T cell programming
tags:
  - P/NR4A1
  - P/NR4A3
  - P/JUN
  - P/JUNB
  - P/FOS
  - P/KLF4
  - P/KLF6
  - P/SNAI1
  - P/NR4A2
  - P/CREM
  - P/EGR2
  - P/BLIMP1
  - P/BHLHE40
  - P/HIC1
  - P/ATF3
  - P/IRF8
  - P/JDP2
  - P/NFATC1
  - P/VAX2
citekey: Chung_Nature_2026
status: Read
dateread: 2026-10-06
articletype: Article
used_in_redaction: Yes
---
---
## Notes

> [!notes]
> %% begin Notes %%**Summary** : This article used a robust bioinformatic approach to identify important TF for the Tex and Trm formation, leading to Tex-only, Trm-only or multiple state TF identification. In order to validate it's robustness and to find potential TF target to decrease Tex formation while keeping Trm formation, they used CRISPR screening methods. All identified TF deletion correctly reduced Tex formation, and the best 8 were validated to not reduce Trm formation. + Validation in human and ICB efficacy. [[2.7 TRM Thérapies]] [[2.3 Différenciation TRM]] [[1.3 Dysfonction]]
> 
> 
>**Experiment** : Bioinformatics approaches to determine the "most importants" TF in Tex-term vs TRM (using a combinaison of weighted GNR (using predicted binding affinity of the TF for the gene, chromatin accessibility and target gene/TF expression) and a PageRank algorithm). Used old and new LCMV ATAC + RNAseq datasets.
>**Results** : 12-19 TF per cell state. TRM had JUN, JUNB, FOS, NR4A1, NRA43, KLF4, KLF6 and SNAI1. Multi-state shared with TRM included NR4A2, IRF4, CREM, EGR2, BHLHE40, PRDM1, HIC1.
>**Other Results** : Grouping of TF by predicted coordination into TF waves
>
>**Other Results** : Grouping of TF by functional relationships by TF-TF matrices, then community detection. Revealed TF groups unique to Tex (ZSCAN20, JDP2, FZP324, IRF8) and Trm (FOSB, SNAI1, KLF6). Some community were directly linked to a known physiological function. It identified proteasome activity to a new Tex feature.
>
>**Experiment** : perturb-seq of 19 of the most important TF identified for Tex differenciation (LCMV Cl13 infection model).
>**Results** : Most of the 19 TF deletion lead to a reduction in Tex-term generation
>**Experiment** : To find Tex driving TF which deletion does not impact memory T cell generation, perturb-seq of the 8 TF with the best previous results in a LCMV Arm model to generate memory T cells in spleen and SI.
>**Results** : None of the 8 TF deletion lead to a reduction in TRM formation. Among multi-state TF tested, HIC1 and GFI1 deletion lead to a reduction in TRM generation, suggesting a previously unknown role.
>
>**Experiment** : OE of KLF6 which was previously identified as single-state TRM TF. Co-transfer of WT or KLF6-OE T cells and LCMV Arm/Cl13 infection
>**Results** : High increase in TRM formation, no difference in Tex formation during chronic infection.
>
>**Experiment** : Test of efficacy : depletion of HIC1 (both TEX/TRM) or ZSCAN20 (only Tex), transfer and tumor model
>**Results** : Zscan20 deletion, but not HIC1 deletion, increased tumor control, formed Tpex and reduced Tex-term
>
>**Other Results** : Validation of conservation in human with human datasets
>
>**Other Results** : in mouse model, ICB efficacy was better with the KO of ZSCAN20 and JDP2.
> %% end Notes %%

> [!Useful Informations]-
> %% begin Useful Informations %%
> %% end Useful Informations %%
> 

---

> [!faq]- Article Informations
> > [!Link]
> >
> >  [Full Text PDF](file://C:\Users\10053234\Documents\Thesis_bibliography\Zotero\storage\Z38283HF\Chung%20et%20al.%20-%202026%20-%20Atlas-guided%20discovery%20of%20transcription%20factors%20for%20T%20cell%20programming.pdf)
> >.
>
> > [!Cite]
> > Chung, H. K., Liu, C., Battu, A., Jambor, A. N., Pratt, B. M., Xie, F., Riesenberg, B. P., Casillas, E., Sun, M., Landoni, E., Li, Y., Ye, Q., Joo, D., Green, J., Syed, Z., Brown, N. J., Smith, M., Ma, S., Tan, S., … Wang, W. (2026). Atlas-guided discovery of transcription factors for T cell programming. _Nature_, _651_(8107), 1077–1087. [https://doi.org/10.1038/s41586-025-09989-7](https://doi.org/10.1038/s41586-025-09989-7)
>
> > [!Abstract]-
> >
> > CD8+ T cells differentiate into diverse states that shape immune outcomes in cancer and chronic infection–. To define systematically the transcription factors (TFs) driving these states, we built a comprehensive atlas integrating transcriptional and epigenetic data across nine CD8+ T cell states and inferred TF activity profiles. Our analysis catalogued TF activity fingerprints, uncovering regulatory mechanisms governing selective cell state differentiation. Leveraging this platform, we focused on two transcriptionally similar but functionally opposing states that are critical in tumour and viral contexts: terminally exhausted T (TEXterm) cells, which are dysfunctional–, and tissue-resident memory T (TRM) cells, which are protective–. Global TF community analysis revealed distinct biological pathways and TF-driven networks underlying protective versus dysfunctional states. Through in vivo CRISPR screening integrated with single-cell RNA sequencing (in vivo Perturb-seq) we delineated several TFs that selectively govern TEXterm cell differentiation. We also identified HIC1 and GFI1 as shared regulators of TEXterm and TRM cell differentiation and KLF6 as a unique regulator of TRM cells. We discovered new TEXterm-selective TFs, including ZSCAN20 and JDP2, with no previous known function in T cells. Targeted deletion of these TFs enhanced tumour control and synergized with immune checkpoint blockade but did not interfere with TRM cell formation. Consistently, their depletion in human T cells reduces the expression of inhibitory receptors and improves effector function. By decoupling exhaustion TEX-selective from protective TRM cell programmes, our platform enables more precise engineering of T cell states, accelerating the rational design of more effective cellular immunotherapies., A comprehensive atlas platform integrating transcriptional and epigenetic data enables more precise engineering of T cell states, accelerating the rational design of more effective cellular immunotherapies.
> >.
>
> > [!metadata]-
> > > >> > > **FirstAuthor**::
> > Chung, H. Kay
> >
> > > > > **Author**::
> > Liu, Cong
> >
> > > > > **Author**::
> > Battu, Anamika
> >
> > > > > **Author**::
> > Jambor, Alexander N.
> >
> > > > > **Author**::
> > Pratt, Brandon M.
> >
> > > > > **Author**::
> > Xie, Fucong
> >
> > > > > **Author**::
> > Riesenberg, Brian P.
> >
> > > > > **Author**::
> > Casillas, Eduardo
> >
> > > > > **Author**::
> > Sun, Ming
> >
> > > > > **Author**::
> > Landoni, Elisa
> >
> > > > > **Author**::
> > Li, Yanpei
> >
> > > > > **Author**::
> > Ye, Qidang
> >
> > > > > **Author**::
> > Joo, Daniel
> >
> > > > > **Author**::
> > Green, Jarred
> >
> > > > > **Author**::
> > Syed, Zaid
> >
> > > > > **Author**::
> > Brown, Nolan J.
> >
> > > > > **Author**::
> > Smith, Matthew
> >
> > > > > **Author**::
> > Ma, Shixin
> >
> > > > > **Author**::
> > Tan, Shirong
> >
> > > > > **Author**::
> > Chick, Brent
> >
> > > > > **Author**::
> > Tripple, Victoria
> >
> > > > > **Author**::
> > Wang, Z. Audrey
> >
> > > > > **Author**::
> > Wang, Jun
> >
> > > > > **Author**::
> > Mcdonald, Bryan
> >
> > > > > **Author**::
> > He, Peixiang
> >
> > > > > **Author**::
> > Yang, Qiyuan
> >
> > > > > **Author**::
> > Chen, Timothy
> >
> > > > > **Author**::
> > Varanasi, Siva Karthik
> >
> > > > > **Author**::
> > LaPorta, Michael A.
> >
> > > > > **Author**::
> > Mann, Thomas H.
> >
> > > > > **Author**::
> > Chen, Dan
> >
> > > > > **Author**::
> > Hoffmann, Filipe
> >
> > > > > **Author**::
> > Ho, Josephine
> >
> > > > > **Author**::
> > Modliszewski, Jennifer
> >
> > > > > **Author**::
> > Williams, April
> >
> > > > > **Author**::
> > Liu, Yusha
> >
> > > > > **Author**::
> > Wang, Zhen
> >
> > > > > **Author**::
> > Liu, Jieyuan
> >
> > > > > **Author**::
> > Gao, Yiming
> >
> > > > > **Author**::
> > Hu, Zhiting
> >
> > > > > **Author**::
> > Cho, Ukrae H.
> >
> > > > > **Author**::
> > Liu, Longwei
> >
> > > > > **Author**::
> > Wang, Yingxiao
> >
> > > > > **Author**::
> > Hargreaves, Diana C.
> >
> > > > > **Author**::
> > Dotti, Gianpietro
> >
> > > > > **Author**::
> > Savoldo, Barbara
> >
> > > > > **Author**::
> > Thaxton, Jessica E.
> >
> > > > > **Author**::
> > Milner, J. Justin
> >
> > > > > **Author**::
> > Kaech, Susan M.
> >
> > > > > **Author**::
> > Wang, Wei
> >
> > ~
> >
> > > **Title**:: Atlas-guided discovery of transcription factors for T cell programming
> > > **Year**:: 2026
> > > **Citekey**:: Chung_Nature_2026
> >
> > > **itemType**:: journalArticle
> >
> >
> > > **Journal**:: *Nature*
> >
> >
> > > **Volume**:: 651
> >
> >
> > > **Issue**:: 8107
> >
> >
> >
> >
> >
> > > **Pages**:: 1077-1087
> >
> >
> > > **DOI**:: 10.1038/s41586-025-09989-7
> >
> >

> [!faq]- Zotero Highlights
> %% begin annotations %%
> > 
> ### Imported on 2026-10-06 11:55 am
>
> > #### Relevant / important
>
> > > [!quote|#ffd400] Highlight
>
> > This category included new TF genes such as Hoxa7 in naive T cells, Snai1 in TRM, Hey1 in TEXprog, Sox8 in TEXeff, and Zscan20 and Jdp2 in TEXterm cells. By contrast, 173 TFs, including Tcf7 and Tbx21, were key regulators in more than one cell state, termed ‘multi-state’ TF gene
>>
>
>
> >
> > [Page 2](zotero://open-pdf/library/items/Z38283HF?page=2) [2026-10-06#11:01 am]
>
> > > [!quote|#ffd400] Highlight
>
> > Genes encoding multi-state TFs such as Vax2, Batf, Irf8 and Stat1 were more enriched within the exhaustion-associated cell states (TEXprog, TEXeff and TEXterm). Consistent with the similarity betweenTEXterm and TRM cells
>>
>
>
> >
> > [Page 2](zotero://open-pdf/library/items/Z38283HF?page=2) [2026-10-06#11:01 am]
>
> > > [!quote|#ffd400] Highlight
>
> > TEXterm single-state TFgenes includedthose for many previously unreported TFs, such as Zscan20, Jdp2, Zfp324, Zfp143, Zbtb49 and Arid3a (Fig. 1f). TRM single-state TF genes included Fosb, Zfp692, Atf4, Pbx4, Junb and Klf6 (Fig. 1g). Of the TEXterm and TRM multi-state TF genes, some, such as Nr4a2 (ref. 12), Bhlhe40 (ref. 23) and Prdm1 (refs. 22,31), were well known to function in the development of both cell states, whereas others, such as Hic1 (ref. 38) and Gfi1 (ref. 39), were not, identifying them as new multi-state TFs to consider (Fig. 1h).
>>
>
>
> >
> > [Page 2](zotero://open-pdf/library/items/Z38283HF?page=2) [2026-10-06#11:04 am]
>
> > > [!quote|#ffd400] Highlight
>
> > the TRM TF wave (Fig. 1i), which includes genes encoding several members of the AP-1 family (for example, Atf3, Fosb and Jun) that are associated  uniquely with the TGFβ response pathway (Extended Data Fig. 4e). The TEX TF wave, which involves Irf8, Jdp2, Nfatc1 and Vax2, correlates with PD1 and senescence pathways
>>
>
>
> >
> > [Page 4](zotero://open-pdf/library/items/Z38283HF?page=4) [2026-10-06#11:06 am]
>
> > > [!quote|#ffd400] Highlight
>
> > These findings support the TF–TF network and pathway predictions and identify the proteasome pathway as a functional hallmark of TEXterm cells.
>>
>
>
> >
> > [Page 5](zotero://open-pdf/library/items/Z38283HF?page=5) [2026-10-06#11:12 am]
>
> > > [!quote|#ffd400] Highlight
>
> > CRISPR knockout (KO) of most of the 19 TEXterm-driving TF genes led to a reduction in TEXterm cell frequency. Notably, KOs of multi-state TFgenes such as Hic1, Stat3, Prdm1 and Ikzf3 (which encodes AIOLOS) resulted in a profound reduction of approximately 90% in TEXterm differentiation. Depletion of new TEXterm single-state TFgenes—including Zfp324, Zscan20 and Jdp2—reduced TEXterm differentiation significantly, by 78%, 54% and 43%, respectively (Fig. 3d, bold). Other new candidates, such as Etv5, Arid3a, Zfp410, Foxd2 and Prdm4, also reduced TEXterm representation by 25–40%, although some did not reach statistical significance. This Perturb-seq analysis highlights the platform’s ability to identify TFs that regulate the TEXterm state, with most tested TFs influencing exhaustion to varying degrees.
>>
>
>
> >
> > [Page 5](zotero://open-pdf/library/items/Z38283HF?page=5) [2026-10-06#11:18 am]
>
> > > [!quote|#ffd400] Highlight
>
> > All 19 TEXterm-TF gene KOs exhibited a marked decrease in TEXterm-signature genes46, including Cd7, Cxcr6, Nr4a2 and Entpd1 (Fig. 3g).
>>
>
>
> >
> > [Page 7](zotero://open-pdf/library/items/Z38283HF?page=7) [2026-10-06#11:19 am]
>
> > > [!quote|#ffd400] Highlight
>
> > Loss of Prdm1 and Stat3 markedly increased the frequency of TEXprog cells and upregulated TEXprog signature genes (Fig. 3g,h) whereas loss of Hic1, Zscan20, Zfp324 or Jdp2 expanded primarily the TEXeff cell population and effector  signature genes (Fig. 3g,i,j)
>>
>
>
> >
> > [Page 7](zotero://open-pdf/library/items/Z38283HF?page=7) [2026-10-06#11:20 am]
>
> > > [!quote|#ffd400] Highlight
>
> > Examination of the gRNA+ cells revealed that none of the eight TEXterm single-state TF geneKOs (Zfp324, Irf8, Zfp410, Nfatc1, Zscan20, Jdp2, Arid3a and Etv5) negatively affected TRM formation significantly (bold gene names in Fig. 4d,e). In fact, KO of Etv5 tended to increase the frequency of TRM cells.
>>
>
>
> >
> > [Page 9](zotero://open-pdf/library/items/Z38283HF?page=9) [2026-10-06#11:24 am]
>
> > > [!quote|#ffd400] Highlight
>
> > The platform also predicted new multi-state TFs, includingthose encoded by Hic1 and Gfi1. Disruption of these multi-state TFs significantly reduced TRM cell frequency (Fig. 4e) and TRM-signature gene expression (Fig. 4f and Extended Data Fig.7c), mirroring the effects of disruption of Prdm1, which encodes a known multi-state TF for TRM and TEXterm cells.
>>
>
>
> >
> > [Page 9](zotero://open-pdf/library/items/Z38283HF?page=9) [2026-10-06#11:24 am]
>
> > > [!quote|#ffd400] Highlight
>
> > When empty-vector control and Klf6-OE P14 CD8+ T cells were co-transferred, Klf6-OE cells robustly outcompeted control cells, resulting in 15-fold enrichment in the small intestine compared with controls (Fig. 4i). Furthermore, there werearound 42 times more CD69+CD103+ double-positive TRM-like cells in Klf6-OE than in control donor cells, indicating that Klf6-OE markedly increased TRM development in the small intestine (Fig. 4j). Klf6-OE did not increase terminal exhaustion during chronic infection
>>
>
>
> >
> > [Page 9](zotero://open-pdf/library/items/Z38283HF?page=9) [2026-10-06#11:28 am]
>
> > > [!quote|#ffd400] Highlight
>
> > Unlike depletion of the multi-state TFgene Hic1, depleting the TEXterm single-state TFgene Zscan20 resulted in improved tumour control
>>
>
>
> >
> > [Page 9](zotero://open-pdf/library/items/Z38283HF?page=9) [2026-10-06#11:30 am]
>
> > > [!quote|#ffd400] Highlight
>
> > Taiji analysis revealed strong cross-species conservation: TEXterm TFgenes such as JDP2, ZNF410 and FOXD2 exhibited higher activity in TEXterm clusters than in TRM-like cells (Fig. 5f). Of 34 mouse TEXterm single-state TF genes, 19 showed conserved activity patterns in human TEXterm cells. Similarly, TRM-specific TFgenes (for example, NR4A1, KLF6 and FOSB) displayed enriched activity in the human TRM cluster
>>
>
>
> >
> > [Page 10](zotero://open-pdf/library/items/Z38283HF?page=10) [2026-10-06#11:33 am]
>
> > > [!quote|#ffd400] Highlight
>
> > Following repeated CD3/CD28 stimulation over 18 days to simulate chronic activation (Fig. 5h), ZSCAN20- or JDP2-deficient CD8+ T cells exhibited increased expression of CCR7 (naive/stem cell memory/TCM marker) and decreased levels of inhibitory receptors, including LAG3, PD1 and TIM3 (Fig. 5i,j). These KO cells also produced higher levels of effector cytokines (Fig. 5k,l), indicating that ZSCAN20 and JDP2 contribute to exhaustion-associated features in human CD8+ T cells.
>>
>
>
> >
> > [Page 10](zotero://open-pdf/library/items/Z38283HF?page=10) [2026-10-06#11:33 am]
>
> > > [!quote|#ffd400] Highlight
>
> > To test synergy with ICB, treatment began 1 day after adoptive transfer of TF-depleted P14 CD8+ T cells (Fig. 5m). The combination of Zscan20 or Jdp2-KO with anti-PD1 therapy significantly reduced tumour burden
>>
>
>
> >
> > [Page 10](zotero://open-pdf/library/items/Z38283HF?page=10) [2026-10-06#11:34 am]
>
> > > 
> %% end annotations %%

%% Import Date: 2026-10-06T10:43:46.404+02:00 %%
