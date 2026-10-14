---
cssclass: literature-note
category: literaturenote
title: Functional evaluation of TCR-pMHC pairs at scale allows <i>in silico</i> TCR reactivity prediction
tags:
  - P/CD69
  - P/4-1BB
citekey: Messemaker_Immunity_2026
status: Read
dateread: 2026-10-12
articletype: Article
used_in_redaction: Yes
---
---
## Notes

> [!notes]
> %% begin Notes %%**Summary** : A recent article about the use of algorithm to predict curated TCR/peptide interaction and TCR reactivity prediction [[1. Hétérogénéité]]
> 
>**Experiment** : Creation of a robotic platform to test TCR reactivity (T-RAP) and test of the 10 most VDJdb reported peptides against 12k TCR.
>**Results** : Introduction of the TCR library in jurkat TCR negative CD8 cells. Validation of the TCR insertion efficacy by sequencing. Reactivity was tested by co-culture with target cell expressing the peptides, then CD69+ jurkat were sorted and TCR were sequenced. The experiment was validated using 77 random TCR, and checking the reactivity by single TCR co-culture and with CD69 + CD137. Approximately 50% of TCR were validated from VDJdb.
>
>**Experiment** : Since VDJdb is multimer binding and this is TCR signaling, verification of the concordance
>**Results** : concordance was high, but there was 3 rare multimer binding TCR sequence that does not induce TCR signaling. Errors in VDJdb might occur from these or from TCRaa cells.
>
>**Experiment** : Creation of a curated database. Algorithm used on this new database.
>**Results** : TCRdist3 and alphafold3 showed some efficacy, varying based on peptide. TCRdist is better, but need to have a reference to a known TCR/peptide couple because it measure TCR distance.
>
>**Experiment** : Focus on alphafold3 because it's the only which can predict unkown peptides.
>**Results** : Predicted correctly the previous results with pre-training.
>
>**Experiment** : Alphafold3 in a zero training cohort
>**Results** : Some results
> %% end Notes %%

> [!Useful Informations]-
> %% begin Useful Informations %%
> %% end Useful Informations %%
> 

---

> [!faq]- Article Informations
> > [!Link]
> >
> >  [ScienceDirect Full Text PDF](file://C:\Users\10053234\Documents\Thesis_bibliography\Zotero\storage\IC23YIPD\Messemaker%20et%20al.%20-%202026%20-%20Functional%20evaluation%20of%20TCR-pMHC%20pairs%20at%20scale%20allows%20in%20silico%20TCR%20reactivity%20prediction.pdf)
> >.
>
> > [!Cite]
> > Messemaker, M., Kwee, B. P. Y., Moravec, Ž., de Paauw, S., Urbanus, J., Álvarez-Salmoral, D., Geerligs, J., Xie, R., Voogd, R., Morris, B., Guislain, A., Winkler, Y., Richterich, C. A., Mussmann, M., Bakker, M., Steinmetz, M., Iras, M., Marcus, E., Teuwen, J., … Schumacher, T. N. (2026). Functional evaluation of TCR-pMHC pairs at scale allows _in silico_ TCR reactivity prediction. _Immunity_. [https://doi.org/10.1016/j.immuni.2026.09.007](https://doi.org/10.1016/j.immuni.2026.09.007)
>
> > [!Abstract]-
> >
> > Accurate prediction of T cell receptor (TCR) reactivity is a long-standing goal in immunology. Here, we asked whether functional validation of TCR-peptide-major histocompatibility complex (MHC) (TCR-pMHC) pairs at scale alters performance estimates of TCR-pMHC reactivity prediction models. We developed a TCR rapid assembly platform (T-RAP) that allowed the generation of large and uniform TCR libraries. T-RAP enabled evaluation of TCR signaling or MHC multimer binding of thousands of previously reported TCR-pMHC pairs under standardized conditions. In this setting of systematic standardized evaluation, only ∼50% of these TCRs showed the previously reported TCR reactivity. Notably, AlphaFold3 structural predictions showed good performance in identifying reactive TCR-pMHC pairs within the set of TCRs that experimentally validated without any task-specific training. AlphaFold3 structural predictions could likewise be used to shortlist TCRs reactive to patient-specific cancer neoantigens. In silico prediction of TCR-pMHC reactivity thus has greater feasibility than previously assumed, with implications for basic research and clinical application.
> >.
>
> > [!metadata]-
> > > >> > > **FirstAuthor**::
> > Messemaker, Marius
> >
> > > > > **Author**::
> > Kwee, Bjørn P. Y.
> >
> > > > > **Author**::
> > Moravec, Živa
> >
> > > > > **Author**::
> > de Paauw, Sam
> >
> > > > > **Author**::
> > Urbanus, Jos
> >
> > > > > **Author**::
> > Álvarez-Salmoral, Daniel
> >
> > > > > **Author**::
> > Geerligs, Jeroen
> >
> > > > > **Author**::
> > Xie, Ren
> >
> > > > > **Author**::
> > Voogd, Rhianne
> >
> > > > > **Author**::
> > Morris, Ben
> >
> > > > > **Author**::
> > Guislain, Aurélie
> >
> > > > > **Author**::
> > Winkler, Yaël
> >
> > > > > **Author**::
> > Richterich, Connor A.
> >
> > > > > **Author**::
> > Mussmann, Maike
> >
> > > > > **Author**::
> > Bakker, Marijn
> >
> > > > > **Author**::
> > Steinmetz, Maxime
> >
> > > > > **Author**::
> > Iras, Matyas
> >
> > > > > **Author**::
> > Marcus, Eric
> >
> > > > > **Author**::
> > Teuwen, Jonas
> >
> > > > > **Author**::
> > Perrakis, Anastassis
> >
> > > > > **Author**::
> > Beijersbergen, Roderick L.
> >
> > > > > **Author**::
> > Scheper, Wouter
> >
> > > > > **Author**::
> > Schumacher, Ton N.
> >
> > ~
> >
> > > **Title**:: Functional evaluation of TCR-pMHC pairs at scale allows <i>in silico</i> TCR reactivity prediction
> > > **Year**:: 2026
> > > **Citekey**:: Messemaker_Immunity_2026
> >
> > > **itemType**:: journalArticle
> >
> >
> > > **Journal**:: *Immunity*
> >
> >
> >
> >
> >
> >
> >
> >
> > > **DOI**:: 10.1016/j.immuni.2026.09.007
> >
> >

> [!faq]- Zotero Highlights
> %% begin annotations %%
> > 
> %% end annotations %%> [!faq]- Zotero Highlights
> %% begin annotations %%
> > 
> ### Imported on 2026-10-12 11:02 am
>
> > #### Relevant / important
>
> > > [!quote|#ffd400] Highlight
>
> > Three discordant TCRs remained (4_G17_YLQ, 6_G14_YLQ, and 6_A24_YLQ in Figure 3G). These were rare YLQ-MHC binders that failed to signal in both pooled screens and arrayed testing (Figures 3G, 3H, and S3H), and these TCRs showed sequence characteristics that were distinct from the majority of TCR signaling-competent YLQ TCRs (Figure S3I). Identification of such rare pMHC binders that do not induce T cell activation is consistent with prior work that reported TCRs that bind pMHC but show a limited ability to induce T cell activation, a behavior that could potentially be explained by a reversed TCR docking pattern or the lack of force-induced catch bonds at the TCR-pMHC interface.
>>
>
>
> >
> > [Page 6](zotero://open-pdf/library/items/IC23YIPD?page=6) [2026-10-12#10:42 am]
>
> > > [!quote|#ffd400] Highlight
>
> > These data indicate that both tcrdist3 (average AUROC 0.80) and AlphaFold3 min-PAE (average AUROC 0.74) show predictive performance but with the caveat that performance of tcrdist3 is restricted to settings where similarity to reference TCRs with known epitope reactivity can be utilized.
>>
>
>
> >
> > [Page 8](zotero://open-pdf/library/items/IC23YIPD?page=8) [2026-10-12#10:49 am]
>
> > > 
> %% end annotations %%

%% Import Date: 2026-10-12T10:26:32.921+02:00 %%
