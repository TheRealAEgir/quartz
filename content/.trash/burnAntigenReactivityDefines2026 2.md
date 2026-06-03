``

---
cssclass: literature-note
category: literaturenote
title: {{title}}
tags: {% if allTags %}{{allTags}}{% endif %}
citekey: {{citekey}}
status: unread
dateread:
---

> [!Cite]
> {{bibliography}}

>[!Synthesis]
>**Contribution**:: 
>
>**Related**:: {% for relation in relations | selectattr("citekey") %} [[@{{relation.citekey}}]]{% if not loop.last %}, {% endif%} {% endfor %}
>

> [!Link] 
> {%- for attachment in attachments | filterby("path", "endswith", ".pdf") %}
>  [{{attachment.title}}](file://{{attachment.path | replace(" ", "%20")}})  {%- endfor -%}.

> [!Abstract]-
> {%- if abstractNote %}
> {{abstractNote}}
> {%- endif -%}.


## Annotations

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

{% persist "annotations" %}
{% set annots = annotations | filterby("date", "dateafter", lastImportDate) -%}
{% if annots.length > 0 %}
### Imported on {{importDate | format("YYYY-MM-DD h:mm a")}}

{% for color, annots in annots | groupby("color") -%}
#### {{colorValueToName(color)}}

{% for annot in annots -%}
> [!quote{% if annot.color %}|{{annot.color}}{% endif %}] {{calloutHeader(annot.type)}}
{%- if annot.annotatedText %}
> {{annot.annotatedText | nl2br}}
{%- endif -%}
{%- if annot.imageRelativePath %}
> ![[{{annot.imageRelativePath}}]]
{%- endif %}
{%- if annot.ocrText %}
> {{annot.ocrText}}
{%- endif %}
{%- if annot.comment %}
>
>> {{annot.comment | nl2br}}
{%- endif %}
>
> [Page {{annot.page}}](zotero://open-pdf/library/items/{{annot.attachment.itemKey}}?page={{annot.page}}) [{{annot.date | format("YYYY-MM-DD#h:mm a")}}]

{% endfor -%}
{% endfor -%}
{% endif %}
{% endpersist %}

>[!metadata]-
{% for type, creators in creators | groupby("creatorType") -%}
{%- for creator in creators -%}
> **{{"First" if loop.first}}{{type | capitalize}}**::
{%- if creator.name %} {{creator.name}}  
{%- else %} {{creator.lastName}}, {{creator.firstName}}  
{%- endif %}  
{% endfor %}~ 
{%- endfor %}    
> **Title**:: {{title}}  
> **Year**:: {{date | format("YYYY")}}   
> **Citekey**:: {{citekey}} {%- if itemType %}  
> **itemType**:: {{itemType}}{%- endif %}{%- if itemType == "journalArticle" %}  
> **Journal**:: *{{publicationTitle}}* {%- endif %}{%- if volume %}  
> **Volume**:: {{volume}} {%- endif %}{%- if issue %}  
> **Issue**:: {{issue}} {%- endif %}{%- if itemType == "bookSection" %}  
> **Book**:: {{publicationTitle}} {%- endif %}{%- if publisher %}  
> **Publisher**:: {{publisher}} {%- endif %}{%- if place %}  
> **Location**:: {{place}} {%- endif %}{%- if pages %}   
> **Pages**:: {{pages}} {%- endif %}{%- if DOI %}  
> **DOI**:: {{DOI}} {%- endif %}{%- if ISBN %}  
> **ISBN**:: {{ISBN}} {%- endif %}    
``````

---
cssclass: literature-note
category: literaturenote
title: {{title}}
tags: {% if allTags %}{{allTags}}{% endif %}
citekey: {{citekey}}
status: unread
dateread:
---

> [!Cite]
> {{bibliography}}

>[!Synthesis]
>**Contribution**:: 
>
>**Related**:: {% for relation in relations | selectattr("citekey") %} [[@{{relation.citekey}}]]{% if not loop.last %}, {% endif%} {% endfor %}
>

> [!Link] 
> {%- for attachment in attachments | filterby("path", "endswith", ".pdf") %}
>  [{{attachment.title}}](file://{{attachment.path | replace(" ", "%20")}})  {%- endfor -%}.

> [!Abstract]-
> {%- if abstractNote %}
> {{abstractNote}}
> {%- endif -%}.


## Annotations

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

{% persist "annotations" %}
{% set annots = annotations | filterby("date", "dateafter", lastImportDate) -%}
{% if annots.length > 0 %}
### Imported on {{importDate | format("YYYY-MM-DD h:mm a")}}

{% for color, annots in annots | groupby("color") -%}
#### {{colorValueToName(color)}}

{% for annot in annots -%}
> [!quote{% if annot.color %}|{{annot.color}}{% endif %}] {{calloutHeader(annot.type)}}
{%- if annot.annotatedText %}
> {{annot.annotatedText | nl2br}}
{%- endif -%}
{%- if annot.imageRelativePath %}
> ![[{{annot.imageRelativePath}}]]
{%- endif %}
{%- if annot.ocrText %}
> {{annot.ocrText}}
{%- endif %}
{%- if annot.comment %}
>
>> {{annot.comment | nl2br}}
{%- endif %}
>
> [Page {{annot.page}}](zotero://open-pdf/library/items/{{annot.attachment.itemKey}}?page={{annot.page}}) [{{annot.date | format("YYYY-MM-DD#h:mm a")}}]

{% endfor -%}
{% endfor -%}
{% endif %}
{% endpersist %}

>[!metadata]-
{% for type, creators in creators | groupby("creatorType") -%}
{%- for creator in creators -%}
> **{{"First" if loop.first}}{{type | capitalize}}**::
{%- if creator.name %} {{creator.name}}  
{%- else %} {{creator.lastName}}, {{creator.firstName}}  
{%- endif %}  
{% endfor %}~ 
{%- endfor %}    
> **Title**:: {{title}}  
> **Year**:: {{date | format("YYYY")}}   
> **Citekey**:: {{citekey}} {%- if itemType %}  
> **itemType**:: {{itemType}}{%- endif %}{%- if itemType == "journalArticle" %}  
> **Journal**:: *{{publicationTitle}}* {%- endif %}{%- if volume %}  
> **Volume**:: {{volume}} {%- endif %}{%- if issue %}  
> **Issue**:: {{issue}} {%- endif %}{%- if itemType == "bookSection" %}  
> **Book**:: {{publicationTitle}} {%- endif %}{%- if publisher %}  
> **Publisher**:: {{publisher}} {%- endif %}{%- if place %}  
> **Location**:: {{place}} {%- endif %}{%- if pages %}   
> **Pages**:: {{pages}} {%- endif %}{%- if DOI %}  
> **DOI**:: {{DOI}} {%- endif %}{%- if ISBN %}  
> **ISBN**:: {{ISBN}} {%- endif %}    
``````

---
cssclass: literature-note
category: literaturenote
title: Antigen reactivity defines tissue-resident memory and exhausted T cells in tumors
tags: Immunological memory, Immunotherapy
citekey: burnAntigenReactivityDefines2026
status: unread
dateread:
---

> [!Cite]
> [1]

T. N. Burn _et al._, ‘Antigen reactivity defines tissue-resident memory and exhausted T cells in tumors’, _Nat Immunol_, vol. 27, no. 1, pp. 98–109, Jan. 2026, doi: [10.1038/s41590-025-02347-9](https://doi.org/10.1038/s41590-025-02347-9).

>[!Synthesis]
>**Contribution**:: 
>
>**Related**:: 
>

> [!Link] 
>
>  [Full Text PDF](file://C:\Users\10053234\Zotero\storage\L77U44CZ\Burn%20et%20al.%20-%202026%20-%20Antigen%20reactivity%20defines%20tissue-resident%20memory%20and%20exhausted%20T%20cells%20in%20tumors.pdf).

> [!Abstract]-
>
> CD8+ T cells are an important weapon in the therapeutic armamentarium against cancer. While CD8+CD103+ T cells with a tissue-resident memory T (TRM) cell phenotype are associated with favorable prognoses, the tumor microenvironment also contains dysfunctional exhausted T (TEX) cells that exhibit a variety of TRM-like features. Here we deconvolute TRM and TEX cells across human cancers, ascribing markers and gene signatures that distinguish these populations and enable their functional distinction. Although TRM cells have superior functionality and are associated with long-term survival post-tumor resection, they are not associated with responsiveness to immune checkpoint blockade. Tumor-associated TEX and TRM cells are clonally distinct, with the latter comprising tumor-independent bystanders and tumor-specific cells segregated from cognate antigen. Intratumoral TRM cells can be forced toward an exhausted fate when chronic antigen stimulation occurs, indicating that the presence or absence of continuous antigen exposure within the microenvironment is the key distinction between tumor-associated TEX and TRM populations. These results highlight unique functions for TRM and TEX cells in tumor control, underscoring the need for distinct strategies to harness these populations for cancer therapies.
>.


## Annotations

%% begin annotations %%

%% end annotations %%

>[!metadata]-
> **FirstAuthor**:: Burn, Thomas N.  
> **Author**:: Schröder, Jan  
> **Author**:: Gandolfo, Luke C.  
> **Author**:: Osman, Maleika  
> **Author**:: Wainwright, Elanor N.  
> **Author**:: Lam, Enid Y. N.  
> **Author**:: McDonald, Keely M.  
> **Author**:: Evans, Rachel B.  
> **Author**:: Li, Shihan  
> **Author**:: Rawlinson, Daniel  
> **Author**:: Dryburgh, Lachlan  
> **Author**:: Zaid, Ali  
> **Author**:: Maliga, Zoltan  
> **Author**:: Schienstock, Dominick  
> **Author**:: Meiser, Philippa  
> **Author**:: Lee, Hyun Jae  
> **Author**:: Lai, Hongjin  
> **Author**:: Moreira, Marcela L.  
> **Author**:: Zareie, Pirooz  
> **Author**:: Lee, Louis H.-Y.  
> **Author**:: Huq, Lutfi  
> **Author**:: Christo, Susan N.  
> **Author**:: Seow, Justine J. W.  
> **Author**:: Ching, Keith A.  
> **Author**:: Guillaume, Stéphane M.  
> **Author**:: Knezevic, Kathy  
> **Author**:: Park, Simone L.  
> **Author**:: Evrard, Maximilien  
> **Author**:: Waithman, Jason  
> **Author**:: Gebhardt, Thomas  
> **Author**:: Mueller, Scott N.  
> **Author**:: Riddiough, Georgina E.  
> **Author**:: Perini, Marcos V.  
> **Author**:: Tsao, Simon C. H.  
> **Author**:: Speed, Terence P.  
> **Author**:: Sorger, Peter K.  
> **Author**:: Loi, Sherene  
> **Author**:: Carbone, Francis R.  
> **Author**:: Gras, Stephanie  
> **Author**:: Fisher, Timothy S.  
> **Author**:: Baaten, Bas J.  
> **Author**:: Dawson, Mark A.  
> **Author**:: Mackay, Laura K.  
~    
> **Title**:: Antigen reactivity defines tissue-resident memory and exhausted T cells in tumors  
> **Year**:: 2026   
> **Citekey**:: burnAntigenReactivityDefines2026  
> **itemType**:: journalArticle  
> **Journal**:: *Nature Immunology*  
> **Volume**:: 27  
> **Issue**:: 1  
> **Publisher**:: Nature Publishing Group   
> **Pages**:: 98-109  
> **DOI**:: 10.1038/s41590-025-02347-9    
```

%% Import Date: 2026-03-10T17:05:27.067+01:00 %%
