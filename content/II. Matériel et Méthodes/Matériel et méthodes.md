### Echantillons humains

Les échantillons provenant de patients atteints de cancers ont été obtenu grâce au centre hospitalier universitaire (CHU) de Besançon (département de chirurgie digestive) à partir des cohortes (NIPICOL : [[TMP]], CRC01 : [[TMP]], CRC02 [[TMP]], Epitopes-CRC02 : [NCT02817178](https://clinicaltrials.gov/ct2/show/NCT02817178),NIPISAFE : [[TMP]], NEONIPIGA : [[TMP]] , HORIZON [[TMP]]). Les échantillons provenant de donneurs sains ont été obtenu grâce à l'Etablissement Français du Sang (EFS). Chaque échantillon provient d'un individu qui a donné son consentement selon les loi françaises. Cette étude a été approuvé par les comités d'éthique locaux et nationaux.





**Human subjects**

Human derived samples were obtained from the University Hospital of Besançon, Department of Digestive Surgery. For liver metastases samples, patients with histologically confirmed liver metastases were enrolled in the Epitopes-CRC02 cohort ([NCT02817178](https://clinicaltrials.gov/ct2/show/NCT02817178)). For blood samples, patients were enrolled in the NIPICOL, NEONIPIGA, CRC02 and NIPISAFE cohorts (links). Informed consent was obtained from all patients following the French regulations. This study was approved by the local and national ethics committees.

**Isolation of lymphocytes**

Lymphocytes were extracted from liver metastases sample using mechanical and enzymatic dissociation (Miltenyi Biotecs, 130-095-929), as previously described (Abdeljaoued et al., 2025). Lymphocytes were extracted from blood using gradient density centrifugation with Pancoll (Dutscher, 500206). Briefly, blood was carefully poured on 1/3 Pancoll (v/v) and centrifuged for 20 min at 2000g at room temperature (RT). PBMC ring was extracted and washed 2 times with PBS and platelets were washed away with a 2 min 3000g at RT centrifugation. Cells were used immediately and cultured in a RPMI 1640 (GibcoTM, 11875093) with 10% human serum and 1% penicillin (REF), or frozen in 10% DMSO (REF) diluted in complete culture medium.

**_In vitro_** **TRM-like differenciation, _in vitro_ exhaustion and cytokine treatment**

Freshly isolated lymphocytes were differentiated into TRM-like by adding 50 ng/mL IL-15 the first day (Miltenyi Biotec, 130-095-760), and 50 ng/mL TGF-β (Peprotech®, 100-21) the third day. TRM-like were used for further experiments after a week. For _in vitro_ exhaustion, lymphocytes were activated three times every 48 hours with anti-CD3/anti-CD28 (Gibco DynabeadsTM, 11453D) at the ratio 1 bead for 3. Exhausted-like T cells were used for further experiments after six days. For cytokine treatment, 1000 IU/mL IFNb (REF), 1000 IU/mL IFNa (REF), 10ng/mL TNFa (REF), calcipotriol (REF) were added to the culture media the first day of _in vitro_ TRM-like differenciation.

**Flow cytometry and cell sorting**

For flow cytometry staining, T cells were washed with PBS containing 0.5% BSA and 0.05 µM EDTA (REFERENCES), then stained with corresponding fluorescently conjugated antibodies (table) and fluorescent viability die (InvitrogenTM, 65-0865-14) for 20-25 min at 4°C and in obscurity. Cells were washed with PBS before cytometry acquisition or permeabilization. For intra-cytoplasmic and intra-nuclear targets, further staining was performed with « BD Cytofix/CytopermTM » (BD Bioscience, 554714) and « Transcription Factor Buffet Set » (BD Pharmingen, 562574) respectively, according to the manufacturer’s instructions. Cytometry data was acquired on a BD FACSLyricTM and a DxFLEX (Beckman Coulter) cytometer, and cells were sorted on a CytoFLEX SRT Benchtop Cell Sorter (Beckman Coulter). Data was analyzed using FlowJoTM software version 10.10.0 and R version 4.5.2 with flowCore (version 2.18.0) and FlowSOM (version 2.14.0) packages.

**Functional and cytotoxic assay**

To access cytokine secretion and cytotoxicity, cells were activated either using anti-CD3/anti-CD28 (Gibco DynabeadsTM, 11453D) at the ratio of 1 bead per 2 lymphocytes, or 1nM solitomab (REFERENCE) when co-cultured with tumor cell lines. Cytokine secretion was blocked using GolgiPlugTM (BD, 555029) and GolgiStopTM (BD, 554724) following manufacter’s instruction.

**2D co-cultures and spheroids**

Colo205 and HCT116 cell line were culture in complete DMEM medium (DMEM REF, 10% SVF REF, 1% penicillin REF) and used when reaching exponential growth. Adherent cell lines were taken off using trypsin (REF) and trypsine was inactivated by adding 10 volumes of complete DMEM medium. 2D co-cultures were done by mixing specified tumour cell line with specified effector:target ratio in RPMI 1640 with 10% human serum and 1% penicillin for 24 hours, then T cells were activated with 1nM solitomab (REFERENCE) for 16 hours before staining. Spheroids were obtained by mixing 4000 cells of the specified tumour cell line with specified effector:target ratio in a NuclonTM SpheraTM plate (Thermo ScientificTM, 174925) in 100µL RPMI 1640 with 10% human serum and 1% penicillin, and then 50µL of PBS-diluted collagen (DO THE MATH, GET THE REFS) was added to each well. Spheroids were cultured for 4 days, then T cells were activated with 1nM solitomab (REFERENCE) for 16 hours before staining.

**RNA isolation and RNA sequencing**

Sorted TRM-like populations were lysed in RLT buffer (Qiagen, 79216). RNA isolation was done using (TALK TO JR).

**Bulk RNA sequencing data processing and analysis**

Bulk RNA sequencing data was aligned using STAR version 2.7.9a and featureCounts version 2.0.6, with default parameters. Obtained counts were analyzed in R version 4.5.2 with package DESeq2 version 1.50.2, and data was vizualized with package pheatmap version 1.0.13. Genes with total counts sum across all sample less than 10 were removed for all DESeq2 analyses.

**Single-cell RNA-TCR sequencing library preparation**

T cells were cultured according to described conditions, and live CD3+ T cells were FACS-sorted before library preparation. SEE JR FOR LIBRARY PREPARATION.

**Single-cell RNA-TCR data processing and analysis**

Single-cell RNA-TCR data was aligned following Parse Biosciences’s pipeline. Publicly available data was downloaded from GSE23658 (Chen _et al._), GSE176021 (Caushi _et al_.), GSE179994 (Lui _et al_.), GSE123814 (Yost _et al._) and GSE288199 (Housaiyin _et al_.). Data was then pre-processed using Seurat version 5.5.0. Pre-processed steps differed between datasets to better suit the dataset’s characteristics, and details can be found in table XXXX.

Figures were obtained using Seurat, ggplot version 4.0.3 and patchwork version 1.3.2 packages. Clonal replacement was calculated as follow: for each patient, a cell was labelled “clonal replacement” if a post-treatment tumor-infiltrating T cell harboured a TCR sequence found 5 times or more in this compartment, and not found in any pre-treatment tumor-infiltrating T cell. Gene signature score were computed using Seurat’s AddModuleScore with default parameters. Used gene signatures can be found in XXX.

Pseudotime analyses for the dataset from Chen _et al_. were conducted using the slingshot package version 2.20.0 on the first 30 dimension components (DC) calculated by the destiny package version 3.26.0 on the first 30 Seurat principal components (PC). For this analysis, the original author’s annotation was used except for TRM-like population-annotated cells on which annotation was replaced. CellChat analyses for the dataset from Chen _et al_. were conducted using the CellChat package version 1.6.0, with XXXXX

**Single-cell RNA seq annotation**

Single-cell RNA datasets could not be annotated solely using _CXCR6_ and _PDCD1_ expression because of the limitations of this technology. Instead, custom gene signatures were retrieved from bulk RNA seq of sorted TRM-like and used as a mean to discriminate TRM-like populations. Because of the technological differences between bulk and single-cell RNA seq, we refined the gene signature with the idea of using only informative genes for annotation, and used the following method (figure S XXXX). First, DESeq2 was performed by removing genes that were expressed in less than 5% of cells in the given scRNAseq dataset to obtain a gene signature. Then, the scRNAseq dataset was subseted to ITGAE-expressing TRM-like using imputed CD8A and ITGAE expression obtained with MAGIC version MAGIC VERSION (van Dijk et al., 2018) and by removing invariant T cells subtypes (based on original author’s annotation or TCR evidences). Gene signatures were then computed by filtering DESeq2 output to the top 4000 top variable features in the resulted TRM-like only datasets, and by selecting the top 100 genes according to the ranking metrics (log2FoldChange* log10(baseMean+1)*-log10(padj)). Finally, each cell cluster was annotated to a TRM-like population by comparing the score computed by Seurat’s AddModuleScore function on MAGIC imputated gene expression, applying sub-clustering if a cell cluster had high score for multiple gene signature.

**Statistical testing**

Differences between patients (recurrence vs no recurrence, or response vs no response) were determined with a Mann-withney test. Differences between CXCR6+PD1- and CXCR6-PD1+ TRM-like for a given protein/timepoint was determined with a Wilcoxon test. Differences in cell proportion in scRNAseq dataset between two discrete variable was determined with a χ² test with FDR multiple testing correction. Differences in TRM subtypes after precursor sorting was determined with a one-way non-parametric Anova (Friedman) test. All test were performed with GraphPad Prism version 8.0.2 (GraphPad Software Inc.) or R version 4.5.2.