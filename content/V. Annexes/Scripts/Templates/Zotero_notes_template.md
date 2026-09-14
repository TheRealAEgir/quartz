---
cssclass: literature-note
category: literaturenote
title: "{{title}}"
tags:
citekey: "{{citekey}}"
status: Unread
dateread:
articletype: Article
used_in_redaction: No
---
{%- macro colorValueToName(color) -%}
    {%- switch color -%}
        {%- case "#ffd400" -%}
            Relevant / important
        {%- case "#ff6666" -%}
            Disagree
        {%- case "#e56eee" -%}
            Critiques
        {%- case "#a28ae5" -%}
            Questions / confusion
        {%- case "#5fb236" -%}
            TODO / follow up
        {%- default -%}
            Note
    {%- endswitch -%}
{%- endmacro -%}

{%- macro calloutHeader(type) -%}
    {%- switch type -%}
        {%- case "highlight" -%}
            Highlight
        {%- case "strike" -%}
            Strikethrough
        {%- case "underline" -%}
            Underline
        {%- case "image" -%}
            Image
        {%- default -%}
            Note
    {%- endswitch -%}
{%- endmacro %}
---
## Notes

> [!notes]
> {% persist "Notes" %}**Summary** :
> 
>**Experiment** : 
>**Results** : 
>
> {% endpersist %}

> [!Useful Informations]-
> {% persist "Useful Informations" %}
> {% endpersist %}
> 

---

> [!faq]- Article Informations
> > [!Link]
> > {%- for attachment in attachments | filterby("path", "endswith", ".pdf") %}
> >  [{{attachment.title}}](file://{{attachment.path | replace(" ", "%20")}})
> > {%- endfor -%}.
>
> > [!Cite]
> > {{bibliography}}
>
> > [!Abstract]-
> > {%- if abstractNote %}
> > {{abstractNote}}
> > {%- endif -%}.
>
> > [!metadata]-
> > {% for type, creators in creators | groupby("creatorType") -%}
> > {%- for creator in creators -%}
> > > **{{"First" if loop.first}}{{type | capitalize}}**::
> > {%- if creator.name %} {{creator.name}}
> > {%- else %} {{creator.lastName}}, {{creator.firstName}}
> > {%- endif %}
> > {% endfor %}~
> > {%- endfor %}
> > > **Title**:: {{title}}
> > > **Year**:: {{date | format("YYYY")}}
> > > **Citekey**:: {{citekey}}
> > {%- if itemType %}
> > > **itemType**:: {{itemType}}
> > {%- endif %}
> > {%- if itemType == "journalArticle" %}
> > > **Journal**:: *{{publicationTitle}}*
> > {%- endif %}
> > {%- if volume %}
> > > **Volume**:: {{volume}}
> > {%- endif %}
> > {%- if issue %}
> > > **Issue**:: {{issue}}
> > {%- endif %}
> > {%- if itemType == "bookSection" %}
> > > **Book**:: {{publicationTitle}}
> > {%- endif %}
> > {%- if publisher %}
> > > **Publisher**:: {{publisher}}
> > {%- endif %}
> > {%- if place %}
> > > **Location**:: {{place}}
> > {%- endif %}
> > {%- if pages %}
> > > **Pages**:: {{pages}}
> > {%- endif %}
> > {%- if DOI %}
> > > **DOI**:: {{DOI}}
> > {%- endif %}
> > {%- if ISBN %}
> > > **ISBN**:: {{ISBN}}
> > {%- endif %}

> [!faq]- Zotero Highlights
> {% persist "annotations" %}
> {% set annots = annotations | filterby("date", "dateafter", lastImportDate) -%}
> {% if annots.length > 0 %}
> ### Imported on {{importDate | format("YYYY-MM-DD h:mm a")}}
>
> {% for color, annots in annots | groupby("color") -%}
> #### {{colorValueToName(color)}}
>
> {% for annot in annots -%}
> > [!quote{% if annot.color %}|{{annot.color}}{% endif %}] {{calloutHeader(annot.type)}}
> {%- if annot.annotatedText %}
> > {{annot.annotatedText | nl2br}}
> {%- endif -%}
> {%- if annot.imageRelativePath %}
> > ![[{{annot.imageRelativePath}}]]
> {%- endif %}
> {%- if annot.ocrText %}
> > {{annot.ocrText}}
> {%- endif %}
> {%- if annot.comment %}
> >
> >> {{annot.comment | nl2br}}
> {%- endif %}
> >
> > [Page {{annot.page}}](zotero://open-pdf/library/items/{{annot.attachment.itemKey}}?page={{annot.page}}) [{{annot.date | format("YYYY-MM-DD#h:mm a")}}]
>
> {% endfor -%}
> {% endfor -%}
> {% endif %}
> {% endpersist %}
