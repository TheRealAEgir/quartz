import { JSX as JSX$1 } from 'preact';
import { JSX } from 'preact/jsx-runtime';
import { Root, Node } from 'hast';
import { Data, VFile } from 'vfile';
import * as _quartz_community_types from '@quartz-community/types';
import { FullSlug, FilePath, SimpleSlug } from '@quartz-community/types';
import { PluggableList } from 'unified';
import { FullSlug as FullSlug$1, FilePath as FilePath$1 } from '@quartz-community/utils';

type QuartzPluginData = Data;
type ProcessedContent = [Root, VFile];

type JSResource = {
    loadTime: "beforeDOMReady" | "afterDOMReady";
    moduleType?: "module";
    spaPreserve?: boolean;
} & ({
    src: string;
    contentType: "external";
} | {
    script: string;
    contentType: "inline";
});
type CSSResource = {
    content: string;
    inline?: boolean;
    spaPreserve?: boolean;
};
interface StaticResources {
    css: CSSResource[];
    js: JSResource[];
    additionalHead: (JSX.Element | ((pageData: QuartzPluginData) => JSX.Element))[];
}
type StringResource = string | string[] | undefined;

declare const TRANSLATIONS: {
    readonly "en-US": {
        readonly propertyDefaults: {
            readonly title: "Untitled";
            readonly description: "No description provided";
        };
        readonly components: {
            readonly callout: {
                readonly note: "Note";
                readonly abstract: "Abstract";
                readonly info: "Info";
                readonly todo: "Todo";
                readonly tip: "Tip";
                readonly success: "Success";
                readonly question: "Question";
                readonly warning: "Warning";
                readonly failure: "Failure";
                readonly danger: "Danger";
                readonly bug: "Bug";
                readonly example: "Example";
                readonly quote: "Quote";
            };
            readonly backlinks: {
                readonly title: "Backlinks";
                readonly noBacklinksFound: "No backlinks found";
            };
            readonly themeToggle: {
                readonly lightMode: "Light mode";
                readonly darkMode: "Dark mode";
            };
            readonly readerMode: {
                readonly title: "Reader mode";
            };
            readonly explorer: {
                readonly title: "Explorer";
            };
            readonly footer: {
                readonly createdWith: "Created with";
            };
            readonly graph: {
                readonly title: "Graph View";
            };
            readonly recentNotes: {
                readonly title: "Recent Notes";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "Link to original";
            };
            readonly search: {
                readonly title: "Search";
                readonly searchBarPlaceholder: "Search for something";
            };
            readonly tableOfContents: {
                readonly title: "Table of Contents";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "Recent notes";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "Not Found";
                readonly notFound: "Either this page is private or doesn't exist.";
                readonly home: "Return to Homepage";
            };
            readonly folderContent: {
                readonly folder: "Folder";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "Tag";
                readonly tagIndex: "Tag Index";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "en-GB": {
        readonly propertyDefaults: {
            readonly title: "Untitled";
            readonly description: "No description provided";
        };
        readonly components: {
            readonly callout: {
                readonly note: "Note";
                readonly abstract: "Abstract";
                readonly info: "Info";
                readonly todo: "To-Do";
                readonly tip: "Tip";
                readonly success: "Success";
                readonly question: "Question";
                readonly warning: "Warning";
                readonly failure: "Failure";
                readonly danger: "Danger";
                readonly bug: "Bug";
                readonly example: "Example";
                readonly quote: "Quote";
            };
            readonly backlinks: {
                readonly title: "Backlinks";
                readonly noBacklinksFound: "No backlinks found";
            };
            readonly themeToggle: {
                readonly lightMode: "Light mode";
                readonly darkMode: "Dark mode";
            };
            readonly readerMode: {
                readonly title: "Reader mode";
            };
            readonly explorer: {
                readonly title: "Explorer";
            };
            readonly footer: {
                readonly createdWith: "Created with";
            };
            readonly graph: {
                readonly title: "Graph View";
            };
            readonly recentNotes: {
                readonly title: "Recent Notes";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "Link to original";
            };
            readonly search: {
                readonly title: "Search";
                readonly searchBarPlaceholder: "Search for something";
            };
            readonly tableOfContents: {
                readonly title: "Table of Contents";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "Recent notes";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "Not Found";
                readonly notFound: "Either this page is private or doesn't exist.";
                readonly home: "Return to Homepage";
            };
            readonly folderContent: {
                readonly folder: "Folder";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "Tag";
                readonly tagIndex: "Tag Index";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "fr-FR": {
        readonly propertyDefaults: {
            readonly title: "Sans titre";
            readonly description: "Aucune description fournie";
        };
        readonly components: {
            readonly callout: {
                readonly note: "Note";
                readonly abstract: "Résumé";
                readonly info: "Info";
                readonly todo: "À faire";
                readonly tip: "Conseil";
                readonly success: "Succès";
                readonly question: "Question";
                readonly warning: "Avertissement";
                readonly failure: "Échec";
                readonly danger: "Danger";
                readonly bug: "Bogue";
                readonly example: "Exemple";
                readonly quote: "Citation";
            };
            readonly backlinks: {
                readonly title: "Liens retour";
                readonly noBacklinksFound: "Aucun lien retour trouvé";
            };
            readonly themeToggle: {
                readonly lightMode: "Mode clair";
                readonly darkMode: "Mode sombre";
            };
            readonly readerMode: {
                readonly title: "Mode lecture";
            };
            readonly explorer: {
                readonly title: "Explorateur";
            };
            readonly footer: {
                readonly createdWith: "Créé avec";
            };
            readonly graph: {
                readonly title: "Vue Graphique";
            };
            readonly recentNotes: {
                readonly title: "Notes Récentes";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "Lien vers l'original";
            };
            readonly search: {
                readonly title: "Recherche";
                readonly searchBarPlaceholder: "Rechercher quelque chose";
            };
            readonly tableOfContents: {
                readonly title: "Table des Matières";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "Notes récentes";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "Introuvable";
                readonly notFound: "Cette page est soit privée, soit elle n'existe pas.";
                readonly home: "Retour à la page d'accueil";
            };
            readonly folderContent: {
                readonly folder: "Dossier";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "Étiquette";
                readonly tagIndex: "Index des étiquettes";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "it-IT": {
        readonly propertyDefaults: {
            readonly title: "Senza titolo";
            readonly description: "Nessuna descrizione";
        };
        readonly components: {
            readonly callout: {
                readonly note: "Nota";
                readonly abstract: "Abstract";
                readonly info: "Info";
                readonly todo: "Da fare";
                readonly tip: "Consiglio";
                readonly success: "Completato";
                readonly question: "Domanda";
                readonly warning: "Attenzione";
                readonly failure: "Errore";
                readonly danger: "Pericolo";
                readonly bug: "Problema";
                readonly example: "Esempio";
                readonly quote: "Citazione";
            };
            readonly backlinks: {
                readonly title: "Link entranti";
                readonly noBacklinksFound: "Nessun link entrante";
            };
            readonly themeToggle: {
                readonly lightMode: "Tema chiaro";
                readonly darkMode: "Tema scuro";
            };
            readonly readerMode: {
                readonly title: "Modalità lettura";
            };
            readonly explorer: {
                readonly title: "Esplora";
            };
            readonly footer: {
                readonly createdWith: "Creato con";
            };
            readonly graph: {
                readonly title: "Vista grafico";
            };
            readonly recentNotes: {
                readonly title: "Note recenti";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "Link all'originale";
            };
            readonly search: {
                readonly title: "Cerca";
                readonly searchBarPlaceholder: "Cerca qualcosa";
            };
            readonly tableOfContents: {
                readonly title: "Indice";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "Note recenti";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "Non trovato";
                readonly notFound: "Questa pagina è privata o non esiste.";
                readonly home: "Ritorna alla home page";
            };
            readonly folderContent: {
                readonly folder: "Cartella";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "Etichetta";
                readonly tagIndex: "Indice etichette";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "ja-JP": {
        readonly propertyDefaults: {
            readonly title: "無題";
            readonly description: "説明なし";
        };
        readonly components: {
            readonly callout: {
                readonly note: "ノート";
                readonly abstract: "抄録";
                readonly info: "情報";
                readonly todo: "やるべきこと";
                readonly tip: "ヒント";
                readonly success: "成功";
                readonly question: "質問";
                readonly warning: "警告";
                readonly failure: "失敗";
                readonly danger: "危険";
                readonly bug: "バグ";
                readonly example: "例";
                readonly quote: "引用";
            };
            readonly backlinks: {
                readonly title: "バックリンク";
                readonly noBacklinksFound: "バックリンクはありません";
            };
            readonly themeToggle: {
                readonly lightMode: "ライトモード";
                readonly darkMode: "ダークモード";
            };
            readonly readerMode: {
                readonly title: "リーダーモード";
            };
            readonly explorer: {
                readonly title: "エクスプローラー";
            };
            readonly footer: {
                readonly createdWith: "作成";
            };
            readonly graph: {
                readonly title: "グラフビュー";
            };
            readonly recentNotes: {
                readonly title: "最近の記事";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "元記事へのリンク";
            };
            readonly search: {
                readonly title: "検索";
                readonly searchBarPlaceholder: "検索ワードを入力";
            };
            readonly tableOfContents: {
                readonly title: "目次";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "最近の記事";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "Not Found";
                readonly notFound: "ページが存在しないか、非公開設定になっています。";
                readonly home: "ホームページに戻る";
            };
            readonly folderContent: {
                readonly folder: "フォルダ";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "タグ";
                readonly tagIndex: "タグ一覧";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "de-DE": {
        readonly propertyDefaults: {
            readonly title: "Unbenannt";
            readonly description: "Keine Beschreibung angegeben";
        };
        readonly components: {
            readonly callout: {
                readonly note: "Hinweis";
                readonly abstract: "Zusammenfassung";
                readonly info: "Info";
                readonly todo: "Zu erledigen";
                readonly tip: "Tipp";
                readonly success: "Erfolg";
                readonly question: "Frage";
                readonly warning: "Warnung";
                readonly failure: "Fehlgeschlagen";
                readonly danger: "Gefahr";
                readonly bug: "Fehler";
                readonly example: "Beispiel";
                readonly quote: "Zitat";
            };
            readonly backlinks: {
                readonly title: "Backlinks";
                readonly noBacklinksFound: "Keine Backlinks gefunden";
            };
            readonly themeToggle: {
                readonly lightMode: "Heller Modus";
                readonly darkMode: "Dunkler Modus";
            };
            readonly readerMode: {
                readonly title: "Lesemodus";
            };
            readonly explorer: {
                readonly title: "Explorer";
            };
            readonly footer: {
                readonly createdWith: "Erstellt mit";
            };
            readonly graph: {
                readonly title: "Graphansicht";
            };
            readonly recentNotes: {
                readonly title: "Zuletzt bearbeitete Seiten";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "Link zum Original";
            };
            readonly search: {
                readonly title: "Suche";
                readonly searchBarPlaceholder: "Suche nach etwas";
            };
            readonly tableOfContents: {
                readonly title: "Inhaltsverzeichnis";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "Zuletzt bearbeitete Seiten";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "Nicht gefunden";
                readonly notFound: "Diese Seite ist entweder nicht öffentlich oder existiert nicht.";
                readonly home: "Zur Startseite";
            };
            readonly folderContent: {
                readonly folder: "Ordner";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "Tag";
                readonly tagIndex: "Tag-Übersicht";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "nl-NL": {
        readonly propertyDefaults: {
            readonly title: "Naamloos";
            readonly description: "Geen beschrijving gegeven.";
        };
        readonly components: {
            readonly callout: {
                readonly note: "Notitie";
                readonly abstract: "Samenvatting";
                readonly info: "Info";
                readonly todo: "Te doen";
                readonly tip: "Tip";
                readonly success: "Succes";
                readonly question: "Vraag";
                readonly warning: "Waarschuwing";
                readonly failure: "Mislukking";
                readonly danger: "Gevaar";
                readonly bug: "Bug";
                readonly example: "Voorbeeld";
                readonly quote: "Citaat";
            };
            readonly backlinks: {
                readonly title: "Backlinks";
                readonly noBacklinksFound: "Geen backlinks gevonden";
            };
            readonly themeToggle: {
                readonly lightMode: "Lichte modus";
                readonly darkMode: "Donkere modus";
            };
            readonly readerMode: {
                readonly title: "Leesmodus";
            };
            readonly explorer: {
                readonly title: "Verkenner";
            };
            readonly footer: {
                readonly createdWith: "Gemaakt met";
            };
            readonly graph: {
                readonly title: "Grafiekweergave";
            };
            readonly recentNotes: {
                readonly title: "Recente notities";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "Link naar origineel";
            };
            readonly search: {
                readonly title: "Zoeken";
                readonly searchBarPlaceholder: "Doorzoek de website";
            };
            readonly tableOfContents: {
                readonly title: "Inhoudsopgave";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "Recente notities";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "Niet gevonden";
                readonly notFound: "Deze pagina is niet zichtbaar of bestaat niet.";
                readonly home: "Keer terug naar de start pagina";
            };
            readonly folderContent: {
                readonly folder: "Map";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "Label";
                readonly tagIndex: "Label-index";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "nl-BE": {
        readonly propertyDefaults: {
            readonly title: "Naamloos";
            readonly description: "Geen beschrijving gegeven.";
        };
        readonly components: {
            readonly callout: {
                readonly note: "Notitie";
                readonly abstract: "Samenvatting";
                readonly info: "Info";
                readonly todo: "Te doen";
                readonly tip: "Tip";
                readonly success: "Succes";
                readonly question: "Vraag";
                readonly warning: "Waarschuwing";
                readonly failure: "Mislukking";
                readonly danger: "Gevaar";
                readonly bug: "Bug";
                readonly example: "Voorbeeld";
                readonly quote: "Citaat";
            };
            readonly backlinks: {
                readonly title: "Backlinks";
                readonly noBacklinksFound: "Geen backlinks gevonden";
            };
            readonly themeToggle: {
                readonly lightMode: "Lichte modus";
                readonly darkMode: "Donkere modus";
            };
            readonly readerMode: {
                readonly title: "Leesmodus";
            };
            readonly explorer: {
                readonly title: "Verkenner";
            };
            readonly footer: {
                readonly createdWith: "Gemaakt met";
            };
            readonly graph: {
                readonly title: "Grafiekweergave";
            };
            readonly recentNotes: {
                readonly title: "Recente notities";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "Link naar origineel";
            };
            readonly search: {
                readonly title: "Zoeken";
                readonly searchBarPlaceholder: "Doorzoek de website";
            };
            readonly tableOfContents: {
                readonly title: "Inhoudsopgave";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "Recente notities";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "Niet gevonden";
                readonly notFound: "Deze pagina is niet zichtbaar of bestaat niet.";
                readonly home: "Keer terug naar de start pagina";
            };
            readonly folderContent: {
                readonly folder: "Map";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "Label";
                readonly tagIndex: "Label-index";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "ro-RO": {
        readonly propertyDefaults: {
            readonly title: "Fără titlu";
            readonly description: "Nici o descriere furnizată";
        };
        readonly components: {
            readonly callout: {
                readonly note: "Notă";
                readonly abstract: "Rezumat";
                readonly info: "Informație";
                readonly todo: "De făcut";
                readonly tip: "Sfat";
                readonly success: "Succes";
                readonly question: "Întrebare";
                readonly warning: "Avertisment";
                readonly failure: "Eșec";
                readonly danger: "Pericol";
                readonly bug: "Bug";
                readonly example: "Exemplu";
                readonly quote: "Citat";
            };
            readonly backlinks: {
                readonly title: "Legături înapoi";
                readonly noBacklinksFound: "Nu s-au găsit legături înapoi";
            };
            readonly themeToggle: {
                readonly lightMode: "Modul luminos";
                readonly darkMode: "Modul întunecat";
            };
            readonly readerMode: {
                readonly title: "Modul de citire";
            };
            readonly explorer: {
                readonly title: "Explorator";
            };
            readonly footer: {
                readonly createdWith: "Creat cu";
            };
            readonly graph: {
                readonly title: "Graf";
            };
            readonly recentNotes: {
                readonly title: "Notițe recente";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "Legătură către original";
            };
            readonly search: {
                readonly title: "Căutare";
                readonly searchBarPlaceholder: "Introduceți termenul de căutare...";
            };
            readonly tableOfContents: {
                readonly title: "Cuprins";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "Notițe recente";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "Pagina nu a fost găsită";
                readonly notFound: "Fie această pagină este privată, fie nu există.";
                readonly home: "Reveniți la pagina de pornire";
            };
            readonly folderContent: {
                readonly folder: "Dosar";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "Etichetă";
                readonly tagIndex: "Indexul etichetelor";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "ro-MD": {
        readonly propertyDefaults: {
            readonly title: "Fără titlu";
            readonly description: "Nici o descriere furnizată";
        };
        readonly components: {
            readonly callout: {
                readonly note: "Notă";
                readonly abstract: "Rezumat";
                readonly info: "Informație";
                readonly todo: "De făcut";
                readonly tip: "Sfat";
                readonly success: "Succes";
                readonly question: "Întrebare";
                readonly warning: "Avertisment";
                readonly failure: "Eșec";
                readonly danger: "Pericol";
                readonly bug: "Bug";
                readonly example: "Exemplu";
                readonly quote: "Citat";
            };
            readonly backlinks: {
                readonly title: "Legături înapoi";
                readonly noBacklinksFound: "Nu s-au găsit legături înapoi";
            };
            readonly themeToggle: {
                readonly lightMode: "Modul luminos";
                readonly darkMode: "Modul întunecat";
            };
            readonly readerMode: {
                readonly title: "Modul de citire";
            };
            readonly explorer: {
                readonly title: "Explorator";
            };
            readonly footer: {
                readonly createdWith: "Creat cu";
            };
            readonly graph: {
                readonly title: "Graf";
            };
            readonly recentNotes: {
                readonly title: "Notițe recente";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "Legătură către original";
            };
            readonly search: {
                readonly title: "Căutare";
                readonly searchBarPlaceholder: "Introduceți termenul de căutare...";
            };
            readonly tableOfContents: {
                readonly title: "Cuprins";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "Notițe recente";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "Pagina nu a fost găsită";
                readonly notFound: "Fie această pagină este privată, fie nu există.";
                readonly home: "Reveniți la pagina de pornire";
            };
            readonly folderContent: {
                readonly folder: "Dosar";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "Etichetă";
                readonly tagIndex: "Indexul etichetelor";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "ca-ES": {
        readonly propertyDefaults: {
            readonly title: "Sense títol";
            readonly description: "Sense descripció";
        };
        readonly components: {
            readonly callout: {
                readonly note: "Nota";
                readonly abstract: "Resum";
                readonly info: "Informació";
                readonly todo: "Per fer";
                readonly tip: "Consell";
                readonly success: "Èxit";
                readonly question: "Pregunta";
                readonly warning: "Advertència";
                readonly failure: "Fall";
                readonly danger: "Perill";
                readonly bug: "Error";
                readonly example: "Exemple";
                readonly quote: "Cita";
            };
            readonly backlinks: {
                readonly title: "Retroenllaç";
                readonly noBacklinksFound: "No s'han trobat retroenllaços";
            };
            readonly themeToggle: {
                readonly lightMode: "Mode clar";
                readonly darkMode: "Mode fosc";
            };
            readonly readerMode: {
                readonly title: "Mode lector";
            };
            readonly explorer: {
                readonly title: "Explorador";
            };
            readonly footer: {
                readonly createdWith: "Creat amb";
            };
            readonly graph: {
                readonly title: "Vista Gràfica";
            };
            readonly recentNotes: {
                readonly title: "Notes Recents";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "Enllaç a l'original";
            };
            readonly search: {
                readonly title: "Cercar";
                readonly searchBarPlaceholder: "Cerca alguna cosa";
            };
            readonly tableOfContents: {
                readonly title: "Taula de Continguts";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "Notes recents";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "No s'ha trobat.";
                readonly notFound: "Aquesta pàgina és privada o no existeix.";
                readonly home: "Torna a la pàgina principal";
            };
            readonly folderContent: {
                readonly folder: "Carpeta";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "Etiqueta";
                readonly tagIndex: "índex d'Etiquetes";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "es-ES": {
        readonly propertyDefaults: {
            readonly title: "Sin título";
            readonly description: "Sin descripción";
        };
        readonly components: {
            readonly callout: {
                readonly note: "Nota";
                readonly abstract: "Resumen";
                readonly info: "Información";
                readonly todo: "Por hacer";
                readonly tip: "Consejo";
                readonly success: "Éxito";
                readonly question: "Pregunta";
                readonly warning: "Advertencia";
                readonly failure: "Fallo";
                readonly danger: "Peligro";
                readonly bug: "Error";
                readonly example: "Ejemplo";
                readonly quote: "Cita";
            };
            readonly backlinks: {
                readonly title: "Retroenlaces";
                readonly noBacklinksFound: "No se han encontrado retroenlaces";
            };
            readonly themeToggle: {
                readonly lightMode: "Modo claro";
                readonly darkMode: "Modo oscuro";
            };
            readonly readerMode: {
                readonly title: "Modo lector";
            };
            readonly explorer: {
                readonly title: "Explorador";
            };
            readonly footer: {
                readonly createdWith: "Creado con";
            };
            readonly graph: {
                readonly title: "Vista Gráfica";
            };
            readonly recentNotes: {
                readonly title: "Notas Recientes";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "Enlace al original";
            };
            readonly search: {
                readonly title: "Buscar";
                readonly searchBarPlaceholder: "Busca algo";
            };
            readonly tableOfContents: {
                readonly title: "Tabla de Contenidos";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "Notas recientes";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "No se ha encontrado.";
                readonly notFound: "Esta página es privada o no existe.";
                readonly home: "Regresa a la página principal";
            };
            readonly folderContent: {
                readonly folder: "Carpeta";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "Etiqueta";
                readonly tagIndex: "Índice de Etiquetas";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "ar-SA": {
        readonly propertyDefaults: {
            readonly title: "غير معنون";
            readonly description: "لم يتم تقديم أي وصف";
        };
        readonly direction: "rtl";
        readonly components: {
            readonly callout: {
                readonly note: "ملاحظة";
                readonly abstract: "ملخص";
                readonly info: "معلومات";
                readonly todo: "للقيام";
                readonly tip: "نصيحة";
                readonly success: "نجاح";
                readonly question: "سؤال";
                readonly warning: "تحذير";
                readonly failure: "فشل";
                readonly danger: "خطر";
                readonly bug: "خلل";
                readonly example: "مثال";
                readonly quote: "اقتباس";
            };
            readonly backlinks: {
                readonly title: "وصلات العودة";
                readonly noBacklinksFound: "لا يوجد وصلات عودة";
            };
            readonly themeToggle: {
                readonly lightMode: "الوضع النهاري";
                readonly darkMode: "الوضع الليلي";
            };
            readonly explorer: {
                readonly title: "المستعرض";
            };
            readonly readerMode: {
                readonly title: "وضع القارئ";
            };
            readonly footer: {
                readonly createdWith: "أُنشئ باستخدام";
            };
            readonly graph: {
                readonly title: "التمثيل التفاعلي";
            };
            readonly recentNotes: {
                readonly title: "آخر الملاحظات";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "وصلة للملاحظة الرئيسة";
            };
            readonly search: {
                readonly title: "بحث";
                readonly searchBarPlaceholder: "ابحث عن شيء ما";
            };
            readonly tableOfContents: {
                readonly title: "فهرس المحتويات";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "آخر الملاحظات";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "غير موجود";
                readonly notFound: "إما أن هذه الصفحة خاصة أو غير موجودة.";
                readonly home: "العوده للصفحة الرئيسية";
            };
            readonly folderContent: {
                readonly folder: "مجلد";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "الوسم";
                readonly tagIndex: "مؤشر الوسم";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "ar-AE": {
        readonly propertyDefaults: {
            readonly title: "غير معنون";
            readonly description: "لم يتم تقديم أي وصف";
        };
        readonly direction: "rtl";
        readonly components: {
            readonly callout: {
                readonly note: "ملاحظة";
                readonly abstract: "ملخص";
                readonly info: "معلومات";
                readonly todo: "للقيام";
                readonly tip: "نصيحة";
                readonly success: "نجاح";
                readonly question: "سؤال";
                readonly warning: "تحذير";
                readonly failure: "فشل";
                readonly danger: "خطر";
                readonly bug: "خلل";
                readonly example: "مثال";
                readonly quote: "اقتباس";
            };
            readonly backlinks: {
                readonly title: "وصلات العودة";
                readonly noBacklinksFound: "لا يوجد وصلات عودة";
            };
            readonly themeToggle: {
                readonly lightMode: "الوضع النهاري";
                readonly darkMode: "الوضع الليلي";
            };
            readonly explorer: {
                readonly title: "المستعرض";
            };
            readonly readerMode: {
                readonly title: "وضع القارئ";
            };
            readonly footer: {
                readonly createdWith: "أُنشئ باستخدام";
            };
            readonly graph: {
                readonly title: "التمثيل التفاعلي";
            };
            readonly recentNotes: {
                readonly title: "آخر الملاحظات";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "وصلة للملاحظة الرئيسة";
            };
            readonly search: {
                readonly title: "بحث";
                readonly searchBarPlaceholder: "ابحث عن شيء ما";
            };
            readonly tableOfContents: {
                readonly title: "فهرس المحتويات";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "آخر الملاحظات";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "غير موجود";
                readonly notFound: "إما أن هذه الصفحة خاصة أو غير موجودة.";
                readonly home: "العوده للصفحة الرئيسية";
            };
            readonly folderContent: {
                readonly folder: "مجلد";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "الوسم";
                readonly tagIndex: "مؤشر الوسم";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "ar-QA": {
        readonly propertyDefaults: {
            readonly title: "غير معنون";
            readonly description: "لم يتم تقديم أي وصف";
        };
        readonly direction: "rtl";
        readonly components: {
            readonly callout: {
                readonly note: "ملاحظة";
                readonly abstract: "ملخص";
                readonly info: "معلومات";
                readonly todo: "للقيام";
                readonly tip: "نصيحة";
                readonly success: "نجاح";
                readonly question: "سؤال";
                readonly warning: "تحذير";
                readonly failure: "فشل";
                readonly danger: "خطر";
                readonly bug: "خلل";
                readonly example: "مثال";
                readonly quote: "اقتباس";
            };
            readonly backlinks: {
                readonly title: "وصلات العودة";
                readonly noBacklinksFound: "لا يوجد وصلات عودة";
            };
            readonly themeToggle: {
                readonly lightMode: "الوضع النهاري";
                readonly darkMode: "الوضع الليلي";
            };
            readonly explorer: {
                readonly title: "المستعرض";
            };
            readonly readerMode: {
                readonly title: "وضع القارئ";
            };
            readonly footer: {
                readonly createdWith: "أُنشئ باستخدام";
            };
            readonly graph: {
                readonly title: "التمثيل التفاعلي";
            };
            readonly recentNotes: {
                readonly title: "آخر الملاحظات";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "وصلة للملاحظة الرئيسة";
            };
            readonly search: {
                readonly title: "بحث";
                readonly searchBarPlaceholder: "ابحث عن شيء ما";
            };
            readonly tableOfContents: {
                readonly title: "فهرس المحتويات";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "آخر الملاحظات";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "غير موجود";
                readonly notFound: "إما أن هذه الصفحة خاصة أو غير موجودة.";
                readonly home: "العوده للصفحة الرئيسية";
            };
            readonly folderContent: {
                readonly folder: "مجلد";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "الوسم";
                readonly tagIndex: "مؤشر الوسم";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "ar-BH": {
        readonly propertyDefaults: {
            readonly title: "غير معنون";
            readonly description: "لم يتم تقديم أي وصف";
        };
        readonly direction: "rtl";
        readonly components: {
            readonly callout: {
                readonly note: "ملاحظة";
                readonly abstract: "ملخص";
                readonly info: "معلومات";
                readonly todo: "للقيام";
                readonly tip: "نصيحة";
                readonly success: "نجاح";
                readonly question: "سؤال";
                readonly warning: "تحذير";
                readonly failure: "فشل";
                readonly danger: "خطر";
                readonly bug: "خلل";
                readonly example: "مثال";
                readonly quote: "اقتباس";
            };
            readonly backlinks: {
                readonly title: "وصلات العودة";
                readonly noBacklinksFound: "لا يوجد وصلات عودة";
            };
            readonly themeToggle: {
                readonly lightMode: "الوضع النهاري";
                readonly darkMode: "الوضع الليلي";
            };
            readonly explorer: {
                readonly title: "المستعرض";
            };
            readonly readerMode: {
                readonly title: "وضع القارئ";
            };
            readonly footer: {
                readonly createdWith: "أُنشئ باستخدام";
            };
            readonly graph: {
                readonly title: "التمثيل التفاعلي";
            };
            readonly recentNotes: {
                readonly title: "آخر الملاحظات";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "وصلة للملاحظة الرئيسة";
            };
            readonly search: {
                readonly title: "بحث";
                readonly searchBarPlaceholder: "ابحث عن شيء ما";
            };
            readonly tableOfContents: {
                readonly title: "فهرس المحتويات";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "آخر الملاحظات";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "غير موجود";
                readonly notFound: "إما أن هذه الصفحة خاصة أو غير موجودة.";
                readonly home: "العوده للصفحة الرئيسية";
            };
            readonly folderContent: {
                readonly folder: "مجلد";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "الوسم";
                readonly tagIndex: "مؤشر الوسم";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "ar-KW": {
        readonly propertyDefaults: {
            readonly title: "غير معنون";
            readonly description: "لم يتم تقديم أي وصف";
        };
        readonly direction: "rtl";
        readonly components: {
            readonly callout: {
                readonly note: "ملاحظة";
                readonly abstract: "ملخص";
                readonly info: "معلومات";
                readonly todo: "للقيام";
                readonly tip: "نصيحة";
                readonly success: "نجاح";
                readonly question: "سؤال";
                readonly warning: "تحذير";
                readonly failure: "فشل";
                readonly danger: "خطر";
                readonly bug: "خلل";
                readonly example: "مثال";
                readonly quote: "اقتباس";
            };
            readonly backlinks: {
                readonly title: "وصلات العودة";
                readonly noBacklinksFound: "لا يوجد وصلات عودة";
            };
            readonly themeToggle: {
                readonly lightMode: "الوضع النهاري";
                readonly darkMode: "الوضع الليلي";
            };
            readonly explorer: {
                readonly title: "المستعرض";
            };
            readonly readerMode: {
                readonly title: "وضع القارئ";
            };
            readonly footer: {
                readonly createdWith: "أُنشئ باستخدام";
            };
            readonly graph: {
                readonly title: "التمثيل التفاعلي";
            };
            readonly recentNotes: {
                readonly title: "آخر الملاحظات";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "وصلة للملاحظة الرئيسة";
            };
            readonly search: {
                readonly title: "بحث";
                readonly searchBarPlaceholder: "ابحث عن شيء ما";
            };
            readonly tableOfContents: {
                readonly title: "فهرس المحتويات";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "آخر الملاحظات";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "غير موجود";
                readonly notFound: "إما أن هذه الصفحة خاصة أو غير موجودة.";
                readonly home: "العوده للصفحة الرئيسية";
            };
            readonly folderContent: {
                readonly folder: "مجلد";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "الوسم";
                readonly tagIndex: "مؤشر الوسم";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "ar-OM": {
        readonly propertyDefaults: {
            readonly title: "غير معنون";
            readonly description: "لم يتم تقديم أي وصف";
        };
        readonly direction: "rtl";
        readonly components: {
            readonly callout: {
                readonly note: "ملاحظة";
                readonly abstract: "ملخص";
                readonly info: "معلومات";
                readonly todo: "للقيام";
                readonly tip: "نصيحة";
                readonly success: "نجاح";
                readonly question: "سؤال";
                readonly warning: "تحذير";
                readonly failure: "فشل";
                readonly danger: "خطر";
                readonly bug: "خلل";
                readonly example: "مثال";
                readonly quote: "اقتباس";
            };
            readonly backlinks: {
                readonly title: "وصلات العودة";
                readonly noBacklinksFound: "لا يوجد وصلات عودة";
            };
            readonly themeToggle: {
                readonly lightMode: "الوضع النهاري";
                readonly darkMode: "الوضع الليلي";
            };
            readonly explorer: {
                readonly title: "المستعرض";
            };
            readonly readerMode: {
                readonly title: "وضع القارئ";
            };
            readonly footer: {
                readonly createdWith: "أُنشئ باستخدام";
            };
            readonly graph: {
                readonly title: "التمثيل التفاعلي";
            };
            readonly recentNotes: {
                readonly title: "آخر الملاحظات";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "وصلة للملاحظة الرئيسة";
            };
            readonly search: {
                readonly title: "بحث";
                readonly searchBarPlaceholder: "ابحث عن شيء ما";
            };
            readonly tableOfContents: {
                readonly title: "فهرس المحتويات";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "آخر الملاحظات";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "غير موجود";
                readonly notFound: "إما أن هذه الصفحة خاصة أو غير موجودة.";
                readonly home: "العوده للصفحة الرئيسية";
            };
            readonly folderContent: {
                readonly folder: "مجلد";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "الوسم";
                readonly tagIndex: "مؤشر الوسم";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "ar-YE": {
        readonly propertyDefaults: {
            readonly title: "غير معنون";
            readonly description: "لم يتم تقديم أي وصف";
        };
        readonly direction: "rtl";
        readonly components: {
            readonly callout: {
                readonly note: "ملاحظة";
                readonly abstract: "ملخص";
                readonly info: "معلومات";
                readonly todo: "للقيام";
                readonly tip: "نصيحة";
                readonly success: "نجاح";
                readonly question: "سؤال";
                readonly warning: "تحذير";
                readonly failure: "فشل";
                readonly danger: "خطر";
                readonly bug: "خلل";
                readonly example: "مثال";
                readonly quote: "اقتباس";
            };
            readonly backlinks: {
                readonly title: "وصلات العودة";
                readonly noBacklinksFound: "لا يوجد وصلات عودة";
            };
            readonly themeToggle: {
                readonly lightMode: "الوضع النهاري";
                readonly darkMode: "الوضع الليلي";
            };
            readonly explorer: {
                readonly title: "المستعرض";
            };
            readonly readerMode: {
                readonly title: "وضع القارئ";
            };
            readonly footer: {
                readonly createdWith: "أُنشئ باستخدام";
            };
            readonly graph: {
                readonly title: "التمثيل التفاعلي";
            };
            readonly recentNotes: {
                readonly title: "آخر الملاحظات";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "وصلة للملاحظة الرئيسة";
            };
            readonly search: {
                readonly title: "بحث";
                readonly searchBarPlaceholder: "ابحث عن شيء ما";
            };
            readonly tableOfContents: {
                readonly title: "فهرس المحتويات";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "آخر الملاحظات";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "غير موجود";
                readonly notFound: "إما أن هذه الصفحة خاصة أو غير موجودة.";
                readonly home: "العوده للصفحة الرئيسية";
            };
            readonly folderContent: {
                readonly folder: "مجلد";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "الوسم";
                readonly tagIndex: "مؤشر الوسم";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "ar-IR": {
        readonly propertyDefaults: {
            readonly title: "غير معنون";
            readonly description: "لم يتم تقديم أي وصف";
        };
        readonly direction: "rtl";
        readonly components: {
            readonly callout: {
                readonly note: "ملاحظة";
                readonly abstract: "ملخص";
                readonly info: "معلومات";
                readonly todo: "للقيام";
                readonly tip: "نصيحة";
                readonly success: "نجاح";
                readonly question: "سؤال";
                readonly warning: "تحذير";
                readonly failure: "فشل";
                readonly danger: "خطر";
                readonly bug: "خلل";
                readonly example: "مثال";
                readonly quote: "اقتباس";
            };
            readonly backlinks: {
                readonly title: "وصلات العودة";
                readonly noBacklinksFound: "لا يوجد وصلات عودة";
            };
            readonly themeToggle: {
                readonly lightMode: "الوضع النهاري";
                readonly darkMode: "الوضع الليلي";
            };
            readonly explorer: {
                readonly title: "المستعرض";
            };
            readonly readerMode: {
                readonly title: "وضع القارئ";
            };
            readonly footer: {
                readonly createdWith: "أُنشئ باستخدام";
            };
            readonly graph: {
                readonly title: "التمثيل التفاعلي";
            };
            readonly recentNotes: {
                readonly title: "آخر الملاحظات";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "وصلة للملاحظة الرئيسة";
            };
            readonly search: {
                readonly title: "بحث";
                readonly searchBarPlaceholder: "ابحث عن شيء ما";
            };
            readonly tableOfContents: {
                readonly title: "فهرس المحتويات";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "آخر الملاحظات";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "غير موجود";
                readonly notFound: "إما أن هذه الصفحة خاصة أو غير موجودة.";
                readonly home: "العوده للصفحة الرئيسية";
            };
            readonly folderContent: {
                readonly folder: "مجلد";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "الوسم";
                readonly tagIndex: "مؤشر الوسم";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "ar-SY": {
        readonly propertyDefaults: {
            readonly title: "غير معنون";
            readonly description: "لم يتم تقديم أي وصف";
        };
        readonly direction: "rtl";
        readonly components: {
            readonly callout: {
                readonly note: "ملاحظة";
                readonly abstract: "ملخص";
                readonly info: "معلومات";
                readonly todo: "للقيام";
                readonly tip: "نصيحة";
                readonly success: "نجاح";
                readonly question: "سؤال";
                readonly warning: "تحذير";
                readonly failure: "فشل";
                readonly danger: "خطر";
                readonly bug: "خلل";
                readonly example: "مثال";
                readonly quote: "اقتباس";
            };
            readonly backlinks: {
                readonly title: "وصلات العودة";
                readonly noBacklinksFound: "لا يوجد وصلات عودة";
            };
            readonly themeToggle: {
                readonly lightMode: "الوضع النهاري";
                readonly darkMode: "الوضع الليلي";
            };
            readonly explorer: {
                readonly title: "المستعرض";
            };
            readonly readerMode: {
                readonly title: "وضع القارئ";
            };
            readonly footer: {
                readonly createdWith: "أُنشئ باستخدام";
            };
            readonly graph: {
                readonly title: "التمثيل التفاعلي";
            };
            readonly recentNotes: {
                readonly title: "آخر الملاحظات";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "وصلة للملاحظة الرئيسة";
            };
            readonly search: {
                readonly title: "بحث";
                readonly searchBarPlaceholder: "ابحث عن شيء ما";
            };
            readonly tableOfContents: {
                readonly title: "فهرس المحتويات";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "آخر الملاحظات";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "غير موجود";
                readonly notFound: "إما أن هذه الصفحة خاصة أو غير موجودة.";
                readonly home: "العوده للصفحة الرئيسية";
            };
            readonly folderContent: {
                readonly folder: "مجلد";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "الوسم";
                readonly tagIndex: "مؤشر الوسم";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "ar-IQ": {
        readonly propertyDefaults: {
            readonly title: "غير معنون";
            readonly description: "لم يتم تقديم أي وصف";
        };
        readonly direction: "rtl";
        readonly components: {
            readonly callout: {
                readonly note: "ملاحظة";
                readonly abstract: "ملخص";
                readonly info: "معلومات";
                readonly todo: "للقيام";
                readonly tip: "نصيحة";
                readonly success: "نجاح";
                readonly question: "سؤال";
                readonly warning: "تحذير";
                readonly failure: "فشل";
                readonly danger: "خطر";
                readonly bug: "خلل";
                readonly example: "مثال";
                readonly quote: "اقتباس";
            };
            readonly backlinks: {
                readonly title: "وصلات العودة";
                readonly noBacklinksFound: "لا يوجد وصلات عودة";
            };
            readonly themeToggle: {
                readonly lightMode: "الوضع النهاري";
                readonly darkMode: "الوضع الليلي";
            };
            readonly explorer: {
                readonly title: "المستعرض";
            };
            readonly readerMode: {
                readonly title: "وضع القارئ";
            };
            readonly footer: {
                readonly createdWith: "أُنشئ باستخدام";
            };
            readonly graph: {
                readonly title: "التمثيل التفاعلي";
            };
            readonly recentNotes: {
                readonly title: "آخر الملاحظات";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "وصلة للملاحظة الرئيسة";
            };
            readonly search: {
                readonly title: "بحث";
                readonly searchBarPlaceholder: "ابحث عن شيء ما";
            };
            readonly tableOfContents: {
                readonly title: "فهرس المحتويات";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "آخر الملاحظات";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "غير موجود";
                readonly notFound: "إما أن هذه الصفحة خاصة أو غير موجودة.";
                readonly home: "العوده للصفحة الرئيسية";
            };
            readonly folderContent: {
                readonly folder: "مجلد";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "الوسم";
                readonly tagIndex: "مؤشر الوسم";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "ar-JO": {
        readonly propertyDefaults: {
            readonly title: "غير معنون";
            readonly description: "لم يتم تقديم أي وصف";
        };
        readonly direction: "rtl";
        readonly components: {
            readonly callout: {
                readonly note: "ملاحظة";
                readonly abstract: "ملخص";
                readonly info: "معلومات";
                readonly todo: "للقيام";
                readonly tip: "نصيحة";
                readonly success: "نجاح";
                readonly question: "سؤال";
                readonly warning: "تحذير";
                readonly failure: "فشل";
                readonly danger: "خطر";
                readonly bug: "خلل";
                readonly example: "مثال";
                readonly quote: "اقتباس";
            };
            readonly backlinks: {
                readonly title: "وصلات العودة";
                readonly noBacklinksFound: "لا يوجد وصلات عودة";
            };
            readonly themeToggle: {
                readonly lightMode: "الوضع النهاري";
                readonly darkMode: "الوضع الليلي";
            };
            readonly explorer: {
                readonly title: "المستعرض";
            };
            readonly readerMode: {
                readonly title: "وضع القارئ";
            };
            readonly footer: {
                readonly createdWith: "أُنشئ باستخدام";
            };
            readonly graph: {
                readonly title: "التمثيل التفاعلي";
            };
            readonly recentNotes: {
                readonly title: "آخر الملاحظات";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "وصلة للملاحظة الرئيسة";
            };
            readonly search: {
                readonly title: "بحث";
                readonly searchBarPlaceholder: "ابحث عن شيء ما";
            };
            readonly tableOfContents: {
                readonly title: "فهرس المحتويات";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "آخر الملاحظات";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "غير موجود";
                readonly notFound: "إما أن هذه الصفحة خاصة أو غير موجودة.";
                readonly home: "العوده للصفحة الرئيسية";
            };
            readonly folderContent: {
                readonly folder: "مجلد";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "الوسم";
                readonly tagIndex: "مؤشر الوسم";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "ar-PL": {
        readonly propertyDefaults: {
            readonly title: "غير معنون";
            readonly description: "لم يتم تقديم أي وصف";
        };
        readonly direction: "rtl";
        readonly components: {
            readonly callout: {
                readonly note: "ملاحظة";
                readonly abstract: "ملخص";
                readonly info: "معلومات";
                readonly todo: "للقيام";
                readonly tip: "نصيحة";
                readonly success: "نجاح";
                readonly question: "سؤال";
                readonly warning: "تحذير";
                readonly failure: "فشل";
                readonly danger: "خطر";
                readonly bug: "خلل";
                readonly example: "مثال";
                readonly quote: "اقتباس";
            };
            readonly backlinks: {
                readonly title: "وصلات العودة";
                readonly noBacklinksFound: "لا يوجد وصلات عودة";
            };
            readonly themeToggle: {
                readonly lightMode: "الوضع النهاري";
                readonly darkMode: "الوضع الليلي";
            };
            readonly explorer: {
                readonly title: "المستعرض";
            };
            readonly readerMode: {
                readonly title: "وضع القارئ";
            };
            readonly footer: {
                readonly createdWith: "أُنشئ باستخدام";
            };
            readonly graph: {
                readonly title: "التمثيل التفاعلي";
            };
            readonly recentNotes: {
                readonly title: "آخر الملاحظات";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "وصلة للملاحظة الرئيسة";
            };
            readonly search: {
                readonly title: "بحث";
                readonly searchBarPlaceholder: "ابحث عن شيء ما";
            };
            readonly tableOfContents: {
                readonly title: "فهرس المحتويات";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "آخر الملاحظات";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "غير موجود";
                readonly notFound: "إما أن هذه الصفحة خاصة أو غير موجودة.";
                readonly home: "العوده للصفحة الرئيسية";
            };
            readonly folderContent: {
                readonly folder: "مجلد";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "الوسم";
                readonly tagIndex: "مؤشر الوسم";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "ar-LB": {
        readonly propertyDefaults: {
            readonly title: "غير معنون";
            readonly description: "لم يتم تقديم أي وصف";
        };
        readonly direction: "rtl";
        readonly components: {
            readonly callout: {
                readonly note: "ملاحظة";
                readonly abstract: "ملخص";
                readonly info: "معلومات";
                readonly todo: "للقيام";
                readonly tip: "نصيحة";
                readonly success: "نجاح";
                readonly question: "سؤال";
                readonly warning: "تحذير";
                readonly failure: "فشل";
                readonly danger: "خطر";
                readonly bug: "خلل";
                readonly example: "مثال";
                readonly quote: "اقتباس";
            };
            readonly backlinks: {
                readonly title: "وصلات العودة";
                readonly noBacklinksFound: "لا يوجد وصلات عودة";
            };
            readonly themeToggle: {
                readonly lightMode: "الوضع النهاري";
                readonly darkMode: "الوضع الليلي";
            };
            readonly explorer: {
                readonly title: "المستعرض";
            };
            readonly readerMode: {
                readonly title: "وضع القارئ";
            };
            readonly footer: {
                readonly createdWith: "أُنشئ باستخدام";
            };
            readonly graph: {
                readonly title: "التمثيل التفاعلي";
            };
            readonly recentNotes: {
                readonly title: "آخر الملاحظات";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "وصلة للملاحظة الرئيسة";
            };
            readonly search: {
                readonly title: "بحث";
                readonly searchBarPlaceholder: "ابحث عن شيء ما";
            };
            readonly tableOfContents: {
                readonly title: "فهرس المحتويات";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "آخر الملاحظات";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "غير موجود";
                readonly notFound: "إما أن هذه الصفحة خاصة أو غير موجودة.";
                readonly home: "العوده للصفحة الرئيسية";
            };
            readonly folderContent: {
                readonly folder: "مجلد";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "الوسم";
                readonly tagIndex: "مؤشر الوسم";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "ar-EG": {
        readonly propertyDefaults: {
            readonly title: "غير معنون";
            readonly description: "لم يتم تقديم أي وصف";
        };
        readonly direction: "rtl";
        readonly components: {
            readonly callout: {
                readonly note: "ملاحظة";
                readonly abstract: "ملخص";
                readonly info: "معلومات";
                readonly todo: "للقيام";
                readonly tip: "نصيحة";
                readonly success: "نجاح";
                readonly question: "سؤال";
                readonly warning: "تحذير";
                readonly failure: "فشل";
                readonly danger: "خطر";
                readonly bug: "خلل";
                readonly example: "مثال";
                readonly quote: "اقتباس";
            };
            readonly backlinks: {
                readonly title: "وصلات العودة";
                readonly noBacklinksFound: "لا يوجد وصلات عودة";
            };
            readonly themeToggle: {
                readonly lightMode: "الوضع النهاري";
                readonly darkMode: "الوضع الليلي";
            };
            readonly explorer: {
                readonly title: "المستعرض";
            };
            readonly readerMode: {
                readonly title: "وضع القارئ";
            };
            readonly footer: {
                readonly createdWith: "أُنشئ باستخدام";
            };
            readonly graph: {
                readonly title: "التمثيل التفاعلي";
            };
            readonly recentNotes: {
                readonly title: "آخر الملاحظات";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "وصلة للملاحظة الرئيسة";
            };
            readonly search: {
                readonly title: "بحث";
                readonly searchBarPlaceholder: "ابحث عن شيء ما";
            };
            readonly tableOfContents: {
                readonly title: "فهرس المحتويات";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "آخر الملاحظات";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "غير موجود";
                readonly notFound: "إما أن هذه الصفحة خاصة أو غير موجودة.";
                readonly home: "العوده للصفحة الرئيسية";
            };
            readonly folderContent: {
                readonly folder: "مجلد";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "الوسم";
                readonly tagIndex: "مؤشر الوسم";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "ar-SD": {
        readonly propertyDefaults: {
            readonly title: "غير معنون";
            readonly description: "لم يتم تقديم أي وصف";
        };
        readonly direction: "rtl";
        readonly components: {
            readonly callout: {
                readonly note: "ملاحظة";
                readonly abstract: "ملخص";
                readonly info: "معلومات";
                readonly todo: "للقيام";
                readonly tip: "نصيحة";
                readonly success: "نجاح";
                readonly question: "سؤال";
                readonly warning: "تحذير";
                readonly failure: "فشل";
                readonly danger: "خطر";
                readonly bug: "خلل";
                readonly example: "مثال";
                readonly quote: "اقتباس";
            };
            readonly backlinks: {
                readonly title: "وصلات العودة";
                readonly noBacklinksFound: "لا يوجد وصلات عودة";
            };
            readonly themeToggle: {
                readonly lightMode: "الوضع النهاري";
                readonly darkMode: "الوضع الليلي";
            };
            readonly explorer: {
                readonly title: "المستعرض";
            };
            readonly readerMode: {
                readonly title: "وضع القارئ";
            };
            readonly footer: {
                readonly createdWith: "أُنشئ باستخدام";
            };
            readonly graph: {
                readonly title: "التمثيل التفاعلي";
            };
            readonly recentNotes: {
                readonly title: "آخر الملاحظات";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "وصلة للملاحظة الرئيسة";
            };
            readonly search: {
                readonly title: "بحث";
                readonly searchBarPlaceholder: "ابحث عن شيء ما";
            };
            readonly tableOfContents: {
                readonly title: "فهرس المحتويات";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "آخر الملاحظات";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "غير موجود";
                readonly notFound: "إما أن هذه الصفحة خاصة أو غير موجودة.";
                readonly home: "العوده للصفحة الرئيسية";
            };
            readonly folderContent: {
                readonly folder: "مجلد";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "الوسم";
                readonly tagIndex: "مؤشر الوسم";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "ar-LY": {
        readonly propertyDefaults: {
            readonly title: "غير معنون";
            readonly description: "لم يتم تقديم أي وصف";
        };
        readonly direction: "rtl";
        readonly components: {
            readonly callout: {
                readonly note: "ملاحظة";
                readonly abstract: "ملخص";
                readonly info: "معلومات";
                readonly todo: "للقيام";
                readonly tip: "نصيحة";
                readonly success: "نجاح";
                readonly question: "سؤال";
                readonly warning: "تحذير";
                readonly failure: "فشل";
                readonly danger: "خطر";
                readonly bug: "خلل";
                readonly example: "مثال";
                readonly quote: "اقتباس";
            };
            readonly backlinks: {
                readonly title: "وصلات العودة";
                readonly noBacklinksFound: "لا يوجد وصلات عودة";
            };
            readonly themeToggle: {
                readonly lightMode: "الوضع النهاري";
                readonly darkMode: "الوضع الليلي";
            };
            readonly explorer: {
                readonly title: "المستعرض";
            };
            readonly readerMode: {
                readonly title: "وضع القارئ";
            };
            readonly footer: {
                readonly createdWith: "أُنشئ باستخدام";
            };
            readonly graph: {
                readonly title: "التمثيل التفاعلي";
            };
            readonly recentNotes: {
                readonly title: "آخر الملاحظات";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "وصلة للملاحظة الرئيسة";
            };
            readonly search: {
                readonly title: "بحث";
                readonly searchBarPlaceholder: "ابحث عن شيء ما";
            };
            readonly tableOfContents: {
                readonly title: "فهرس المحتويات";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "آخر الملاحظات";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "غير موجود";
                readonly notFound: "إما أن هذه الصفحة خاصة أو غير موجودة.";
                readonly home: "العوده للصفحة الرئيسية";
            };
            readonly folderContent: {
                readonly folder: "مجلد";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "الوسم";
                readonly tagIndex: "مؤشر الوسم";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "ar-MA": {
        readonly propertyDefaults: {
            readonly title: "غير معنون";
            readonly description: "لم يتم تقديم أي وصف";
        };
        readonly direction: "rtl";
        readonly components: {
            readonly callout: {
                readonly note: "ملاحظة";
                readonly abstract: "ملخص";
                readonly info: "معلومات";
                readonly todo: "للقيام";
                readonly tip: "نصيحة";
                readonly success: "نجاح";
                readonly question: "سؤال";
                readonly warning: "تحذير";
                readonly failure: "فشل";
                readonly danger: "خطر";
                readonly bug: "خلل";
                readonly example: "مثال";
                readonly quote: "اقتباس";
            };
            readonly backlinks: {
                readonly title: "وصلات العودة";
                readonly noBacklinksFound: "لا يوجد وصلات عودة";
            };
            readonly themeToggle: {
                readonly lightMode: "الوضع النهاري";
                readonly darkMode: "الوضع الليلي";
            };
            readonly explorer: {
                readonly title: "المستعرض";
            };
            readonly readerMode: {
                readonly title: "وضع القارئ";
            };
            readonly footer: {
                readonly createdWith: "أُنشئ باستخدام";
            };
            readonly graph: {
                readonly title: "التمثيل التفاعلي";
            };
            readonly recentNotes: {
                readonly title: "آخر الملاحظات";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "وصلة للملاحظة الرئيسة";
            };
            readonly search: {
                readonly title: "بحث";
                readonly searchBarPlaceholder: "ابحث عن شيء ما";
            };
            readonly tableOfContents: {
                readonly title: "فهرس المحتويات";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "آخر الملاحظات";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "غير موجود";
                readonly notFound: "إما أن هذه الصفحة خاصة أو غير موجودة.";
                readonly home: "العوده للصفحة الرئيسية";
            };
            readonly folderContent: {
                readonly folder: "مجلد";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "الوسم";
                readonly tagIndex: "مؤشر الوسم";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "ar-TN": {
        readonly propertyDefaults: {
            readonly title: "غير معنون";
            readonly description: "لم يتم تقديم أي وصف";
        };
        readonly direction: "rtl";
        readonly components: {
            readonly callout: {
                readonly note: "ملاحظة";
                readonly abstract: "ملخص";
                readonly info: "معلومات";
                readonly todo: "للقيام";
                readonly tip: "نصيحة";
                readonly success: "نجاح";
                readonly question: "سؤال";
                readonly warning: "تحذير";
                readonly failure: "فشل";
                readonly danger: "خطر";
                readonly bug: "خلل";
                readonly example: "مثال";
                readonly quote: "اقتباس";
            };
            readonly backlinks: {
                readonly title: "وصلات العودة";
                readonly noBacklinksFound: "لا يوجد وصلات عودة";
            };
            readonly themeToggle: {
                readonly lightMode: "الوضع النهاري";
                readonly darkMode: "الوضع الليلي";
            };
            readonly explorer: {
                readonly title: "المستعرض";
            };
            readonly readerMode: {
                readonly title: "وضع القارئ";
            };
            readonly footer: {
                readonly createdWith: "أُنشئ باستخدام";
            };
            readonly graph: {
                readonly title: "التمثيل التفاعلي";
            };
            readonly recentNotes: {
                readonly title: "آخر الملاحظات";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "وصلة للملاحظة الرئيسة";
            };
            readonly search: {
                readonly title: "بحث";
                readonly searchBarPlaceholder: "ابحث عن شيء ما";
            };
            readonly tableOfContents: {
                readonly title: "فهرس المحتويات";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "آخر الملاحظات";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "غير موجود";
                readonly notFound: "إما أن هذه الصفحة خاصة أو غير موجودة.";
                readonly home: "العوده للصفحة الرئيسية";
            };
            readonly folderContent: {
                readonly folder: "مجلد";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "الوسم";
                readonly tagIndex: "مؤشر الوسم";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "ar-DZ": {
        readonly propertyDefaults: {
            readonly title: "غير معنون";
            readonly description: "لم يتم تقديم أي وصف";
        };
        readonly direction: "rtl";
        readonly components: {
            readonly callout: {
                readonly note: "ملاحظة";
                readonly abstract: "ملخص";
                readonly info: "معلومات";
                readonly todo: "للقيام";
                readonly tip: "نصيحة";
                readonly success: "نجاح";
                readonly question: "سؤال";
                readonly warning: "تحذير";
                readonly failure: "فشل";
                readonly danger: "خطر";
                readonly bug: "خلل";
                readonly example: "مثال";
                readonly quote: "اقتباس";
            };
            readonly backlinks: {
                readonly title: "وصلات العودة";
                readonly noBacklinksFound: "لا يوجد وصلات عودة";
            };
            readonly themeToggle: {
                readonly lightMode: "الوضع النهاري";
                readonly darkMode: "الوضع الليلي";
            };
            readonly explorer: {
                readonly title: "المستعرض";
            };
            readonly readerMode: {
                readonly title: "وضع القارئ";
            };
            readonly footer: {
                readonly createdWith: "أُنشئ باستخدام";
            };
            readonly graph: {
                readonly title: "التمثيل التفاعلي";
            };
            readonly recentNotes: {
                readonly title: "آخر الملاحظات";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "وصلة للملاحظة الرئيسة";
            };
            readonly search: {
                readonly title: "بحث";
                readonly searchBarPlaceholder: "ابحث عن شيء ما";
            };
            readonly tableOfContents: {
                readonly title: "فهرس المحتويات";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "آخر الملاحظات";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "غير موجود";
                readonly notFound: "إما أن هذه الصفحة خاصة أو غير موجودة.";
                readonly home: "العوده للصفحة الرئيسية";
            };
            readonly folderContent: {
                readonly folder: "مجلد";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "الوسم";
                readonly tagIndex: "مؤشر الوسم";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "ar-MR": {
        readonly propertyDefaults: {
            readonly title: "غير معنون";
            readonly description: "لم يتم تقديم أي وصف";
        };
        readonly direction: "rtl";
        readonly components: {
            readonly callout: {
                readonly note: "ملاحظة";
                readonly abstract: "ملخص";
                readonly info: "معلومات";
                readonly todo: "للقيام";
                readonly tip: "نصيحة";
                readonly success: "نجاح";
                readonly question: "سؤال";
                readonly warning: "تحذير";
                readonly failure: "فشل";
                readonly danger: "خطر";
                readonly bug: "خلل";
                readonly example: "مثال";
                readonly quote: "اقتباس";
            };
            readonly backlinks: {
                readonly title: "وصلات العودة";
                readonly noBacklinksFound: "لا يوجد وصلات عودة";
            };
            readonly themeToggle: {
                readonly lightMode: "الوضع النهاري";
                readonly darkMode: "الوضع الليلي";
            };
            readonly explorer: {
                readonly title: "المستعرض";
            };
            readonly readerMode: {
                readonly title: "وضع القارئ";
            };
            readonly footer: {
                readonly createdWith: "أُنشئ باستخدام";
            };
            readonly graph: {
                readonly title: "التمثيل التفاعلي";
            };
            readonly recentNotes: {
                readonly title: "آخر الملاحظات";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "وصلة للملاحظة الرئيسة";
            };
            readonly search: {
                readonly title: "بحث";
                readonly searchBarPlaceholder: "ابحث عن شيء ما";
            };
            readonly tableOfContents: {
                readonly title: "فهرس المحتويات";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "آخر الملاحظات";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "غير موجود";
                readonly notFound: "إما أن هذه الصفحة خاصة أو غير موجودة.";
                readonly home: "العوده للصفحة الرئيسية";
            };
            readonly folderContent: {
                readonly folder: "مجلد";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "الوسم";
                readonly tagIndex: "مؤشر الوسم";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "uk-UA": {
        readonly propertyDefaults: {
            readonly title: "Без назви";
            readonly description: "Опис не надано";
        };
        readonly components: {
            readonly callout: {
                readonly note: "Примітка";
                readonly abstract: "Абстракт";
                readonly info: "Інформація";
                readonly todo: "Завдання";
                readonly tip: "Порада";
                readonly success: "Успіх";
                readonly question: "Питання";
                readonly warning: "Попередження";
                readonly failure: "Невдача";
                readonly danger: "Небезпека";
                readonly bug: "Баг";
                readonly example: "Приклад";
                readonly quote: "Цитата";
            };
            readonly backlinks: {
                readonly title: "Зворотні посилання";
                readonly noBacklinksFound: "Зворотних посилань не знайдено";
            };
            readonly themeToggle: {
                readonly lightMode: "Світлий режим";
                readonly darkMode: "Темний режим";
            };
            readonly readerMode: {
                readonly title: "Режим читання";
            };
            readonly explorer: {
                readonly title: "Провідник";
            };
            readonly footer: {
                readonly createdWith: "Створено за допомогою";
            };
            readonly graph: {
                readonly title: "Вигляд графа";
            };
            readonly recentNotes: {
                readonly title: "Останні нотатки";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "Посилання на оригінал";
            };
            readonly search: {
                readonly title: "Пошук";
                readonly searchBarPlaceholder: "Шукати щось";
            };
            readonly tableOfContents: {
                readonly title: "Зміст";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "Останні нотатки";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "Не знайдено";
                readonly notFound: "Ця сторінка або приватна, або не існує.";
                readonly home: "Повернутися на головну сторінку";
            };
            readonly folderContent: {
                readonly folder: "Тека";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "Мітка";
                readonly tagIndex: "Індекс мітки";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "ru-RU": {
        readonly propertyDefaults: {
            readonly title: "Без названия";
            readonly description: "Описание отсутствует";
        };
        readonly components: {
            readonly callout: {
                readonly note: "Заметка";
                readonly abstract: "Резюме";
                readonly info: "Инфо";
                readonly todo: "Сделать";
                readonly tip: "Подсказка";
                readonly success: "Успех";
                readonly question: "Вопрос";
                readonly warning: "Предупреждение";
                readonly failure: "Неудача";
                readonly danger: "Опасность";
                readonly bug: "Баг";
                readonly example: "Пример";
                readonly quote: "Цитата";
            };
            readonly backlinks: {
                readonly title: "Обратные ссылки";
                readonly noBacklinksFound: "Обратные ссылки отсутствуют";
            };
            readonly themeToggle: {
                readonly lightMode: "Светлый режим";
                readonly darkMode: "Тёмный режим";
            };
            readonly readerMode: {
                readonly title: "Режим чтения";
            };
            readonly explorer: {
                readonly title: "Проводник";
            };
            readonly footer: {
                readonly createdWith: "Создано с помощью";
            };
            readonly graph: {
                readonly title: "Вид графа";
            };
            readonly recentNotes: {
                readonly title: "Недавние заметки";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "Ссылка на оригинал";
            };
            readonly search: {
                readonly title: "Поиск";
                readonly searchBarPlaceholder: "Найти что-нибудь";
            };
            readonly tableOfContents: {
                readonly title: "Оглавление";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "Недавние заметки";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "Страница не найдена";
                readonly notFound: "Эта страница приватная или не существует";
                readonly home: "Вернуться на главную страницу";
            };
            readonly folderContent: {
                readonly folder: "Папка";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "Тег";
                readonly tagIndex: "Индекс тегов";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "ko-KR": {
        readonly propertyDefaults: {
            readonly title: "제목 없음";
            readonly description: "설명 없음";
        };
        readonly components: {
            readonly callout: {
                readonly note: "노트";
                readonly abstract: "개요";
                readonly info: "정보";
                readonly todo: "할일";
                readonly tip: "팁";
                readonly success: "성공";
                readonly question: "질문";
                readonly warning: "주의";
                readonly failure: "실패";
                readonly danger: "위험";
                readonly bug: "버그";
                readonly example: "예시";
                readonly quote: "인용";
            };
            readonly backlinks: {
                readonly title: "백링크";
                readonly noBacklinksFound: "백링크가 없습니다.";
            };
            readonly themeToggle: {
                readonly lightMode: "라이트 모드";
                readonly darkMode: "다크 모드";
            };
            readonly readerMode: {
                readonly title: "리더 모드";
            };
            readonly explorer: {
                readonly title: "탐색기";
            };
            readonly footer: {
                readonly createdWith: "Created with";
            };
            readonly graph: {
                readonly title: "그래프 뷰";
            };
            readonly recentNotes: {
                readonly title: "최근 게시글";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "원본 링크";
            };
            readonly search: {
                readonly title: "검색";
                readonly searchBarPlaceholder: "검색어를 입력하세요";
            };
            readonly tableOfContents: {
                readonly title: "목차";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "최근 게시글";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "Not Found";
                readonly notFound: "페이지가 존재하지 않거나 비공개 설정이 되어 있습니다.";
                readonly home: "홈페이지로 돌아가기";
            };
            readonly folderContent: {
                readonly folder: "폴더";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "태그";
                readonly tagIndex: "태그 목록";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "zh-CN": {
        readonly propertyDefaults: {
            readonly title: "无题";
            readonly description: "无描述";
        };
        readonly components: {
            readonly callout: {
                readonly note: "笔记";
                readonly abstract: "摘要";
                readonly info: "提示";
                readonly todo: "待办";
                readonly tip: "提示";
                readonly success: "成功";
                readonly question: "问题";
                readonly warning: "警告";
                readonly failure: "失败";
                readonly danger: "危险";
                readonly bug: "错误";
                readonly example: "示例";
                readonly quote: "引用";
            };
            readonly backlinks: {
                readonly title: "反向链接";
                readonly noBacklinksFound: "无法找到反向链接";
            };
            readonly themeToggle: {
                readonly lightMode: "亮色模式";
                readonly darkMode: "暗色模式";
            };
            readonly readerMode: {
                readonly title: "阅读模式";
            };
            readonly explorer: {
                readonly title: "探索";
            };
            readonly footer: {
                readonly createdWith: "Created with";
            };
            readonly graph: {
                readonly title: "关系图谱";
            };
            readonly recentNotes: {
                readonly title: "最近的笔记";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "指向原始笔记的链接";
            };
            readonly search: {
                readonly title: "搜索";
                readonly searchBarPlaceholder: "搜索些什么";
            };
            readonly tableOfContents: {
                readonly title: "目录";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "最近的笔记";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "无法找到";
                readonly notFound: "私有笔记或笔记不存在。";
                readonly home: "返回首页";
            };
            readonly folderContent: {
                readonly folder: "文件夹";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "标签";
                readonly tagIndex: "标签索引";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "zh-TW": {
        readonly propertyDefaults: {
            readonly title: "無題";
            readonly description: "無描述";
        };
        readonly components: {
            readonly callout: {
                readonly note: "筆記";
                readonly abstract: "摘要";
                readonly info: "提示";
                readonly todo: "待辦";
                readonly tip: "提示";
                readonly success: "成功";
                readonly question: "問題";
                readonly warning: "警告";
                readonly failure: "失敗";
                readonly danger: "危險";
                readonly bug: "錯誤";
                readonly example: "範例";
                readonly quote: "引用";
            };
            readonly backlinks: {
                readonly title: "反向連結";
                readonly noBacklinksFound: "無法找到反向連結";
            };
            readonly themeToggle: {
                readonly lightMode: "亮色模式";
                readonly darkMode: "暗色模式";
            };
            readonly readerMode: {
                readonly title: "閱讀模式";
            };
            readonly explorer: {
                readonly title: "探索";
            };
            readonly footer: {
                readonly createdWith: "Created with";
            };
            readonly graph: {
                readonly title: "關係圖譜";
            };
            readonly recentNotes: {
                readonly title: "最近的筆記";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "指向原始筆記的連結";
            };
            readonly search: {
                readonly title: "搜尋";
                readonly searchBarPlaceholder: "搜尋些什麼";
            };
            readonly tableOfContents: {
                readonly title: "目錄";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "最近的筆記";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "無法找到";
                readonly notFound: "私人筆記或筆記不存在。";
                readonly home: "返回首頁";
            };
            readonly folderContent: {
                readonly folder: "資料夾";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "標籤";
                readonly tagIndex: "標籤索引";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "vi-VN": {
        readonly propertyDefaults: {
            readonly title: "Không có tiêu đề";
            readonly description: "Không có mô tả";
        };
        readonly components: {
            readonly callout: {
                readonly note: "Ghi chú";
                readonly abstract: "Tổng quan";
                readonly info: "Thông tin";
                readonly todo: "Cần phải làm";
                readonly tip: "Gợi ý";
                readonly success: "Thành công";
                readonly question: "Câu hỏi";
                readonly warning: "Cảnh báo";
                readonly failure: "Thất bại";
                readonly danger: "Nguy hiểm";
                readonly bug: "Lỗi";
                readonly example: "Ví dụ";
                readonly quote: "Trích dẫn";
            };
            readonly backlinks: {
                readonly title: "Liên kết ngược";
                readonly noBacklinksFound: "Không có liên kết ngược nào";
            };
            readonly themeToggle: {
                readonly lightMode: "Chế độ sáng";
                readonly darkMode: "Chế độ tối";
            };
            readonly readerMode: {
                readonly title: "Chế độ đọc";
            };
            readonly explorer: {
                readonly title: "Nội dung";
            };
            readonly footer: {
                readonly createdWith: "Được tạo bằng";
            };
            readonly graph: {
                readonly title: "Sơ đồ";
            };
            readonly recentNotes: {
                readonly title: "Ghi chú gần đây";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "Xem trang gốc";
            };
            readonly search: {
                readonly title: "Tìm";
                readonly searchBarPlaceholder: "Tìm kiếm thông tin";
            };
            readonly tableOfContents: {
                readonly title: "Mục lục";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "Ghi chú gần đây";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "Không tìm thấy";
                readonly notFound: "Trang này riêng tư hoặc không tồn tại.";
                readonly home: "Về trang chủ";
            };
            readonly folderContent: {
                readonly folder: "Thư mục";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "Thẻ";
                readonly tagIndex: "Danh sách thẻ";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "pt-BR": {
        readonly propertyDefaults: {
            readonly title: "Sem título";
            readonly description: "Sem descrição";
        };
        readonly components: {
            readonly callout: {
                readonly note: "Nota";
                readonly abstract: "Abstrato";
                readonly info: "Info";
                readonly todo: "Pendência";
                readonly tip: "Dica";
                readonly success: "Sucesso";
                readonly question: "Pergunta";
                readonly warning: "Aviso";
                readonly failure: "Falha";
                readonly danger: "Perigo";
                readonly bug: "Bug";
                readonly example: "Exemplo";
                readonly quote: "Citação";
            };
            readonly backlinks: {
                readonly title: "Backlinks";
                readonly noBacklinksFound: "Sem backlinks encontrados";
            };
            readonly themeToggle: {
                readonly lightMode: "Tema claro";
                readonly darkMode: "Tema escuro";
            };
            readonly readerMode: {
                readonly title: "Modo leitor";
            };
            readonly explorer: {
                readonly title: "Explorador";
            };
            readonly footer: {
                readonly createdWith: "Criado com";
            };
            readonly graph: {
                readonly title: "Visão de gráfico";
            };
            readonly recentNotes: {
                readonly title: "Notas recentes";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "Link ao original";
            };
            readonly search: {
                readonly title: "Pesquisar";
                readonly searchBarPlaceholder: "Pesquisar por algo";
            };
            readonly tableOfContents: {
                readonly title: "Sumário";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "Notas recentes";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "Não encontrado";
                readonly notFound: "Esta página é privada ou não existe.";
                readonly home: "Retornar a página inicial";
            };
            readonly folderContent: {
                readonly folder: "Arquivo";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "Tag";
                readonly tagIndex: "Sumário de Tags";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "hu-HU": {
        readonly propertyDefaults: {
            readonly title: "Névtelen";
            readonly description: "Nincs leírás";
        };
        readonly components: {
            readonly callout: {
                readonly note: "Jegyzet";
                readonly abstract: "Abstract";
                readonly info: "Információ";
                readonly todo: "Tennivaló";
                readonly tip: "Tipp";
                readonly success: "Siker";
                readonly question: "Kérdés";
                readonly warning: "Figyelmeztetés";
                readonly failure: "Hiba";
                readonly danger: "Veszély";
                readonly bug: "Bug";
                readonly example: "Példa";
                readonly quote: "Idézet";
            };
            readonly backlinks: {
                readonly title: "Visszautalások";
                readonly noBacklinksFound: "Nincs visszautalás";
            };
            readonly themeToggle: {
                readonly lightMode: "Világos mód";
                readonly darkMode: "Sötét mód";
            };
            readonly readerMode: {
                readonly title: "Olvasó mód";
            };
            readonly explorer: {
                readonly title: "Fájlböngésző";
            };
            readonly footer: {
                readonly createdWith: "Készítve ezzel:";
            };
            readonly graph: {
                readonly title: "Grafikonnézet";
            };
            readonly recentNotes: {
                readonly title: "Legutóbbi jegyzetek";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "Hivatkozás az eredetire";
            };
            readonly search: {
                readonly title: "Keresés";
                readonly searchBarPlaceholder: "Keress valamire";
            };
            readonly tableOfContents: {
                readonly title: "Tartalomjegyzék";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "Legutóbbi jegyzetek";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "Nem található";
                readonly notFound: "Ez a lap vagy privát vagy nem létezik.";
                readonly home: "Vissza a kezdőlapra";
            };
            readonly folderContent: {
                readonly folder: "Mappa";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "Címke";
                readonly tagIndex: "Címke index";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "fa-IR": {
        readonly propertyDefaults: {
            readonly title: "بدون عنوان";
            readonly description: "توضیح خاصی اضافه نشده است";
        };
        readonly direction: "rtl";
        readonly components: {
            readonly callout: {
                readonly note: "یادداشت";
                readonly abstract: "چکیده";
                readonly info: "اطلاعات";
                readonly todo: "اقدام";
                readonly tip: "نکته";
                readonly success: "تیک";
                readonly question: "سؤال";
                readonly warning: "هشدار";
                readonly failure: "شکست";
                readonly danger: "خطر";
                readonly bug: "باگ";
                readonly example: "مثال";
                readonly quote: "نقل قول";
            };
            readonly backlinks: {
                readonly title: "بک‌لینک‌ها";
                readonly noBacklinksFound: "بدون بک‌لینک";
            };
            readonly themeToggle: {
                readonly lightMode: "حالت روشن";
                readonly darkMode: "حالت تاریک";
            };
            readonly readerMode: {
                readonly title: "حالت خواندن";
            };
            readonly explorer: {
                readonly title: "مطالب";
            };
            readonly footer: {
                readonly createdWith: "ساخته شده با";
            };
            readonly graph: {
                readonly title: "نمای گراف";
            };
            readonly recentNotes: {
                readonly title: "یادداشت‌های اخیر";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "پیوند به اصلی";
            };
            readonly search: {
                readonly title: "جستجو";
                readonly searchBarPlaceholder: "مطلبی را جستجو کنید";
            };
            readonly tableOfContents: {
                readonly title: "فهرست";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "یادداشت‌های اخیر";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "یافت نشد";
                readonly notFound: "این صفحه یا خصوصی است یا وجود ندارد";
                readonly home: "بازگشت به صفحه اصلی";
            };
            readonly folderContent: {
                readonly folder: "پوشه";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "برچسب";
                readonly tagIndex: "فهرست برچسب‌ها";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "pl-PL": {
        readonly propertyDefaults: {
            readonly title: "Bez nazwy";
            readonly description: "Brak opisu";
        };
        readonly components: {
            readonly callout: {
                readonly note: "Notatka";
                readonly abstract: "Streszczenie";
                readonly info: "informacja";
                readonly todo: "Do zrobienia";
                readonly tip: "Wskazówka";
                readonly success: "Zrobione";
                readonly question: "Pytanie";
                readonly warning: "Ostrzeżenie";
                readonly failure: "Usterka";
                readonly danger: "Niebiezpieczeństwo";
                readonly bug: "Błąd w kodzie";
                readonly example: "Przykład";
                readonly quote: "Cytat";
            };
            readonly backlinks: {
                readonly title: "Odnośniki zwrotne";
                readonly noBacklinksFound: "Brak połączeń zwrotnych";
            };
            readonly themeToggle: {
                readonly lightMode: "Trzyb jasny";
                readonly darkMode: "Tryb ciemny";
            };
            readonly readerMode: {
                readonly title: "Tryb czytania";
            };
            readonly explorer: {
                readonly title: "Przeglądaj";
            };
            readonly footer: {
                readonly createdWith: "Stworzone z użyciem";
            };
            readonly graph: {
                readonly title: "Graf";
            };
            readonly recentNotes: {
                readonly title: "Najnowsze notatki";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "Łącze do oryginału";
            };
            readonly search: {
                readonly title: "Szukaj";
                readonly searchBarPlaceholder: "Wpisz frazę wyszukiwania";
            };
            readonly tableOfContents: {
                readonly title: "Spis treści";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "Najnowsze notatki";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "Nie znaleziono";
                readonly notFound: "Ta strona jest prywatna lub nie istnieje.";
                readonly home: "Powrót do strony głównej";
            };
            readonly folderContent: {
                readonly folder: "Folder";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "Znacznik";
                readonly tagIndex: "Spis znaczników";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "cs-CZ": {
        readonly propertyDefaults: {
            readonly title: "Bez názvu";
            readonly description: "Nebyl uveden žádný popis";
        };
        readonly components: {
            readonly callout: {
                readonly note: "Poznámka";
                readonly abstract: "Abstract";
                readonly info: "Info";
                readonly todo: "Todo";
                readonly tip: "Tip";
                readonly success: "Úspěch";
                readonly question: "Otázka";
                readonly warning: "Upozornění";
                readonly failure: "Chyba";
                readonly danger: "Nebezpečí";
                readonly bug: "Bug";
                readonly example: "Příklad";
                readonly quote: "Citace";
            };
            readonly backlinks: {
                readonly title: "Příchozí odkazy";
                readonly noBacklinksFound: "Nenalezeny žádné příchozí odkazy";
            };
            readonly themeToggle: {
                readonly lightMode: "Světlý režim";
                readonly darkMode: "Tmavý režim";
            };
            readonly readerMode: {
                readonly title: "Režim čtečky";
            };
            readonly explorer: {
                readonly title: "Procházet";
            };
            readonly footer: {
                readonly createdWith: "Vytvořeno pomocí";
            };
            readonly graph: {
                readonly title: "Graf";
            };
            readonly recentNotes: {
                readonly title: "Nejnovější poznámky";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "Odkaz na původní dokument";
            };
            readonly search: {
                readonly title: "Hledat";
                readonly searchBarPlaceholder: "Hledejte něco";
            };
            readonly tableOfContents: {
                readonly title: "Obsah";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "Nejnovější poznámky";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "Nenalezeno";
                readonly notFound: "Tato stránka je buď soukromá, nebo neexistuje.";
                readonly home: "Návrat na domovskou stránku";
            };
            readonly folderContent: {
                readonly folder: "Složka";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "Tag";
                readonly tagIndex: "Rejstřík tagů";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "tr-TR": {
        readonly propertyDefaults: {
            readonly title: "İsimsiz";
            readonly description: "Herhangi bir açıklama eklenmedi";
        };
        readonly components: {
            readonly callout: {
                readonly note: "Not";
                readonly abstract: "Özet";
                readonly info: "Bilgi";
                readonly todo: "Yapılacaklar";
                readonly tip: "İpucu";
                readonly success: "Başarılı";
                readonly question: "Soru";
                readonly warning: "Uyarı";
                readonly failure: "Başarısız";
                readonly danger: "Tehlike";
                readonly bug: "Hata";
                readonly example: "Örnek";
                readonly quote: "Alıntı";
            };
            readonly backlinks: {
                readonly title: "Backlinkler";
                readonly noBacklinksFound: "Backlink bulunamadı";
            };
            readonly themeToggle: {
                readonly lightMode: "Açık mod";
                readonly darkMode: "Koyu mod";
            };
            readonly readerMode: {
                readonly title: "Okuma modu";
            };
            readonly explorer: {
                readonly title: "Gezgin";
            };
            readonly footer: {
                readonly createdWith: "Şununla oluşturuldu";
            };
            readonly graph: {
                readonly title: "Grafik Görünümü";
            };
            readonly recentNotes: {
                readonly title: "Son Notlar";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "Orijinal bağlantı";
            };
            readonly search: {
                readonly title: "Arama";
                readonly searchBarPlaceholder: "Bir şey arayın";
            };
            readonly tableOfContents: {
                readonly title: "İçindekiler";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "Son notlar";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "Bulunamadı";
                readonly notFound: "Bu sayfa ya özel ya da mevcut değil.";
                readonly home: "Anasayfaya geri dön";
            };
            readonly folderContent: {
                readonly folder: "Klasör";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "Etiket";
                readonly tagIndex: "Etiket Sırası";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "th-TH": {
        readonly propertyDefaults: {
            readonly title: "ไม่มีชื่อ";
            readonly description: "ไม่ได้ระบุคำอธิบายย่อ";
        };
        readonly components: {
            readonly callout: {
                readonly note: "หมายเหตุ";
                readonly abstract: "บทคัดย่อ";
                readonly info: "ข้อมูล";
                readonly todo: "ต้องทำเพิ่มเติม";
                readonly tip: "คำแนะนำ";
                readonly success: "เรียบร้อย";
                readonly question: "คำถาม";
                readonly warning: "คำเตือน";
                readonly failure: "ข้อผิดพลาด";
                readonly danger: "อันตราย";
                readonly bug: "บั๊ก";
                readonly example: "ตัวอย่าง";
                readonly quote: "คำพูกยกมา";
            };
            readonly backlinks: {
                readonly title: "หน้าที่กล่าวถึง";
                readonly noBacklinksFound: "ไม่มีหน้าที่โยงมาหน้านี้";
            };
            readonly themeToggle: {
                readonly lightMode: "โหมดสว่าง";
                readonly darkMode: "โหมดมืด";
            };
            readonly readerMode: {
                readonly title: "โหมดอ่าน";
            };
            readonly explorer: {
                readonly title: "รายการหน้า";
            };
            readonly footer: {
                readonly createdWith: "สร้างด้วย";
            };
            readonly graph: {
                readonly title: "มุมมองกราฟ";
            };
            readonly recentNotes: {
                readonly title: "บันทึกล่าสุด";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "ดูหน้าต้นทาง";
            };
            readonly search: {
                readonly title: "ค้นหา";
                readonly searchBarPlaceholder: "ค้นหาบางอย่าง";
            };
            readonly tableOfContents: {
                readonly title: "สารบัญ";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "บันทึกล่าสุด";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "ไม่มีหน้านี้";
                readonly notFound: "หน้านี้อาจตั้งค่าเป็นส่วนตัวหรือยังไม่ถูกสร้าง";
                readonly home: "กลับหน้าหลัก";
            };
            readonly folderContent: {
                readonly folder: "โฟลเดอร์";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "แท็ก";
                readonly tagIndex: "แท็กทั้งหมด";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "lt-LT": {
        readonly propertyDefaults: {
            readonly title: "Be Pavadinimo";
            readonly description: "Aprašymas Nepateiktas";
        };
        readonly components: {
            readonly callout: {
                readonly note: "Pastaba";
                readonly abstract: "Santrauka";
                readonly info: "Informacija";
                readonly todo: "Darbų sąrašas";
                readonly tip: "Patarimas";
                readonly success: "Sėkmingas";
                readonly question: "Klausimas";
                readonly warning: "Įspėjimas";
                readonly failure: "Nesėkmingas";
                readonly danger: "Pavojus";
                readonly bug: "Klaida";
                readonly example: "Pavyzdys";
                readonly quote: "Citata";
            };
            readonly backlinks: {
                readonly title: "Atgalinės Nuorodos";
                readonly noBacklinksFound: "Atgalinių Nuorodų Nerasta";
            };
            readonly themeToggle: {
                readonly lightMode: "Šviesus Režimas";
                readonly darkMode: "Tamsus Režimas";
            };
            readonly readerMode: {
                readonly title: "Modalità lettore";
            };
            readonly explorer: {
                readonly title: "Naršyklė";
            };
            readonly footer: {
                readonly createdWith: "Sukurta Su";
            };
            readonly graph: {
                readonly title: "Grafiko Vaizdas";
            };
            readonly recentNotes: {
                readonly title: "Naujausi Užrašai";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "Nuoroda į originalą";
            };
            readonly search: {
                readonly title: "Paieška";
                readonly searchBarPlaceholder: "Ieškoti";
            };
            readonly tableOfContents: {
                readonly title: "Turinys";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "Naujausi užrašai";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "Nerasta";
                readonly notFound: "Arba šis puslapis yra pasiekiamas tik tam tikriems vartotojams, arba tokio puslapio nėra.";
                readonly home: "Grįžti į pagrindinį puslapį";
            };
            readonly folderContent: {
                readonly folder: "Aplankas";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "Žyma";
                readonly tagIndex: "Žymų indeksas";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "fi-FI": {
        readonly propertyDefaults: {
            readonly title: "Nimetön";
            readonly description: "Ei kuvausta saatavilla";
        };
        readonly components: {
            readonly callout: {
                readonly note: "Merkintä";
                readonly abstract: "Tiivistelmä";
                readonly info: "Info";
                readonly todo: "Tehtävälista";
                readonly tip: "Vinkki";
                readonly success: "Onnistuminen";
                readonly question: "Kysymys";
                readonly warning: "Varoitus";
                readonly failure: "Epäonnistuminen";
                readonly danger: "Vaara";
                readonly bug: "Virhe";
                readonly example: "Esimerkki";
                readonly quote: "Lainaus";
            };
            readonly backlinks: {
                readonly title: "Takalinkit";
                readonly noBacklinksFound: "Takalinkkejä ei löytynyt";
            };
            readonly themeToggle: {
                readonly lightMode: "Vaalea tila";
                readonly darkMode: "Tumma tila";
            };
            readonly readerMode: {
                readonly title: "Lukijatila";
            };
            readonly explorer: {
                readonly title: "Selain";
            };
            readonly footer: {
                readonly createdWith: "Luotu käyttäen";
            };
            readonly graph: {
                readonly title: "Verkkonäkymä";
            };
            readonly recentNotes: {
                readonly title: "Viimeisimmät muistiinpanot";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "Linkki alkuperäiseen";
            };
            readonly search: {
                readonly title: "Haku";
                readonly searchBarPlaceholder: "Hae jotain";
            };
            readonly tableOfContents: {
                readonly title: "Sisällysluettelo";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "Viimeisimmät muistiinpanot";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "Ei löytynyt";
                readonly notFound: "Tämä sivu on joko yksityinen tai sitä ei ole olemassa.";
                readonly home: "Palaa etusivulle";
            };
            readonly folderContent: {
                readonly folder: "Kansio";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "Tunniste";
                readonly tagIndex: "Tunnisteluettelo";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "nb-NO": {
        readonly propertyDefaults: {
            readonly title: "Uten navn";
            readonly description: "Ingen beskrivelse angitt";
        };
        readonly components: {
            readonly callout: {
                readonly note: "Notis";
                readonly abstract: "Abstrakt";
                readonly info: "Info";
                readonly todo: "Husk på";
                readonly tip: "Tips";
                readonly success: "Suksess";
                readonly question: "Spørsmål";
                readonly warning: "Advarsel";
                readonly failure: "Feil";
                readonly danger: "Farlig";
                readonly bug: "Bug";
                readonly example: "Eksempel";
                readonly quote: "Sitat";
            };
            readonly backlinks: {
                readonly title: "Tilbakekoblinger";
                readonly noBacklinksFound: "Ingen tilbakekoblinger funnet";
            };
            readonly themeToggle: {
                readonly lightMode: "Lys modus";
                readonly darkMode: "Mørk modus";
            };
            readonly readerMode: {
                readonly title: "Læsemodus";
            };
            readonly explorer: {
                readonly title: "Utforsker";
            };
            readonly footer: {
                readonly createdWith: "Laget med";
            };
            readonly graph: {
                readonly title: "Graf-visning";
            };
            readonly recentNotes: {
                readonly title: "Nylige notater";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "Lenke til original";
            };
            readonly search: {
                readonly title: "Søk";
                readonly searchBarPlaceholder: "Søk etter noe";
            };
            readonly tableOfContents: {
                readonly title: "Oversikt";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "Nylige notat";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "Ikke funnet";
                readonly notFound: "Enten er denne siden privat eller så finnes den ikke.";
                readonly home: "Returner til hovedsiden";
            };
            readonly folderContent: {
                readonly folder: "Mappe";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "Tagg";
                readonly tagIndex: "Tagg Indeks";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "id-ID": {
        readonly propertyDefaults: {
            readonly title: "Tanpa Judul";
            readonly description: "Tidak ada deskripsi";
        };
        readonly components: {
            readonly callout: {
                readonly note: "Catatan";
                readonly abstract: "Abstrak";
                readonly info: "Info";
                readonly todo: "Daftar Tugas";
                readonly tip: "Tips";
                readonly success: "Berhasil";
                readonly question: "Pertanyaan";
                readonly warning: "Peringatan";
                readonly failure: "Gagal";
                readonly danger: "Bahaya";
                readonly bug: "Bug";
                readonly example: "Contoh";
                readonly quote: "Kutipan";
            };
            readonly backlinks: {
                readonly title: "Tautan Balik";
                readonly noBacklinksFound: "Tidak ada tautan balik ditemukan";
            };
            readonly themeToggle: {
                readonly lightMode: "Mode Terang";
                readonly darkMode: "Mode Gelap";
            };
            readonly readerMode: {
                readonly title: "Mode Pembaca";
            };
            readonly explorer: {
                readonly title: "Penjelajah";
            };
            readonly footer: {
                readonly createdWith: "Dibuat dengan";
            };
            readonly graph: {
                readonly title: "Tampilan Grafik";
            };
            readonly recentNotes: {
                readonly title: "Catatan Terbaru";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "Tautan ke asli";
            };
            readonly search: {
                readonly title: "Cari";
                readonly searchBarPlaceholder: "Cari sesuatu";
            };
            readonly tableOfContents: {
                readonly title: "Daftar Isi";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "Catatan terbaru";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "Tidak Ditemukan";
                readonly notFound: "Halaman ini bersifat privat atau tidak ada.";
                readonly home: "Kembali ke Beranda";
            };
            readonly folderContent: {
                readonly folder: "Folder";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "Tag";
                readonly tagIndex: "Indeks Tag";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "kk-KZ": {
        readonly propertyDefaults: {
            readonly title: "Атаусыз";
            readonly description: "Сипаттама берілмеген";
        };
        readonly components: {
            readonly callout: {
                readonly note: "Ескерту";
                readonly abstract: "Аннотация";
                readonly info: "Ақпарат";
                readonly todo: "Істеу керек";
                readonly tip: "Кеңес";
                readonly success: "Сәттілік";
                readonly question: "Сұрақ";
                readonly warning: "Ескерту";
                readonly failure: "Қате";
                readonly danger: "Қауіп";
                readonly bug: "Қате";
                readonly example: "Мысал";
                readonly quote: "Дәйексөз";
            };
            readonly backlinks: {
                readonly title: "Артқа сілтемелер";
                readonly noBacklinksFound: "Артқа сілтемелер табылмады";
            };
            readonly themeToggle: {
                readonly lightMode: "Жарық режимі";
                readonly darkMode: "Қараңғы режим";
            };
            readonly readerMode: {
                readonly title: "Оқу режимі";
            };
            readonly explorer: {
                readonly title: "Зерттеуші";
            };
            readonly footer: {
                readonly createdWith: "Құрастырылған құрал:";
            };
            readonly graph: {
                readonly title: "Граф көрінісі";
            };
            readonly recentNotes: {
                readonly title: "Соңғы жазбалар";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "Бастапқыға сілтеме";
            };
            readonly search: {
                readonly title: "Іздеу";
                readonly searchBarPlaceholder: "Бірдеңе іздеу";
            };
            readonly tableOfContents: {
                readonly title: "Мазмұны";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "Соңғы жазбалар";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "Табылмады";
                readonly notFound: "Бұл бет жеке немесе жоқ болуы мүмкін.";
                readonly home: "Басты бетке оралу";
            };
            readonly folderContent: {
                readonly folder: "Қалта";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "Тег";
                readonly tagIndex: "Тегтер индексі";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
    readonly "he-IL": {
        readonly propertyDefaults: {
            readonly title: "ללא כותרת";
            readonly description: "לא סופק תיאור";
        };
        readonly direction: "rtl";
        readonly components: {
            readonly callout: {
                readonly note: "הערה";
                readonly abstract: "תקציר";
                readonly info: "מידע";
                readonly todo: "לעשות";
                readonly tip: "טיפ";
                readonly success: "הצלחה";
                readonly question: "שאלה";
                readonly warning: "אזהרה";
                readonly failure: "כשלון";
                readonly danger: "סכנה";
                readonly bug: "באג";
                readonly example: "דוגמה";
                readonly quote: "ציטוט";
            };
            readonly backlinks: {
                readonly title: "קישורים חוזרים";
                readonly noBacklinksFound: "לא נמצאו קישורים חוזרים";
            };
            readonly themeToggle: {
                readonly lightMode: "מצב בהיר";
                readonly darkMode: "מצב כהה";
            };
            readonly readerMode: {
                readonly title: "מצב קריאה";
            };
            readonly explorer: {
                readonly title: "סייר";
            };
            readonly footer: {
                readonly createdWith: "נוצר באמצעות";
            };
            readonly graph: {
                readonly title: "מבט גרף";
            };
            readonly recentNotes: {
                readonly title: "הערות אחרונות";
                readonly seeRemainingMore: ({ remaining }: {
                    remaining: number;
                }) => string;
            };
            readonly transcludes: {
                readonly transcludeOf: ({ targetSlug }: {
                    targetSlug: _quartz_community_types.FullSlug;
                }) => string;
                readonly linkToOriginal: "קישור למקורי";
            };
            readonly search: {
                readonly title: "חיפוש";
                readonly searchBarPlaceholder: "חפשו משהו";
            };
            readonly tableOfContents: {
                readonly title: "תוכן עניינים";
            };
            readonly contentMeta: {
                readonly readingTime: ({ minutes }: {
                    minutes: number;
                }) => string;
            };
        };
        readonly pages: {
            readonly rss: {
                readonly recentNotes: "הערות אחרונות";
                readonly lastFewNotes: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly error: {
                readonly title: "לא נמצא";
                readonly notFound: "העמוד הזה פרטי או לא קיים.";
                readonly home: "חזרה לעמוד הבית";
            };
            readonly folderContent: {
                readonly folder: "תיקייה";
                readonly itemsUnderFolder: ({ count }: {
                    count: number;
                }) => string;
            };
            readonly tagContent: {
                readonly tag: "תגית";
                readonly tagIndex: "מפתח התגיות";
                readonly itemsUnderTag: ({ count }: {
                    count: number;
                }) => string;
                readonly showingFirst: ({ count }: {
                    count: number;
                }) => string;
                readonly totalTags: ({ count }: {
                    count: number;
                }) => string;
            };
        };
    };
};
type ValidLocale = keyof typeof TRANSLATIONS;

type ContentDetails = {
    slug: FullSlug;
    filePath: FilePath;
    title: string;
    links: SimpleSlug[];
    tags: string[];
    content: string;
    richContent?: string;
    date?: Date;
    description?: string;
};

/** Sort direction */
type SortDirection = "ASC" | "DESC";
/** Sort entry — one column + direction pair */
interface SortEntry {
    property: string;
    direction?: SortDirection;
}
/** Filter tree node — recursive and/or/not structure matching Obsidian spec */
type FilterNode = string | {
    and: FilterNode[];
} | {
    or: FilterNode[];
} | {
    not: FilterNode[];
};
/** Group-by configuration */
interface GroupBy {
    property: string;
    direction?: SortDirection;
}
/** Summary type — built-in aggregation functions + extensible string for custom */
type SummaryType = "Count" | "Average" | "Min" | "Max" | "Sum" | "Range" | "Median" | "Stddev" | "Earliest" | "Latest" | "Checked" | "Unchecked" | "Empty" | "Filled" | "Unique" | string;
/** Property display configuration */
interface PropertyConfig {
    displayName?: string;
}
/** View definition from .base file YAML — matches full Obsidian spec */
interface BasesView {
    /** View type identifier */
    type: string;
    /** Display name for this view (shown in view selector tab) */
    name?: string;
    /** Maximum number of entries to display */
    limit?: number;
    /** Group entries by a property */
    groupBy?: GroupBy;
    /** View-specific filters (merged with global filters at resolve time) */
    filters?: FilterNode;
    /** Sort order — list of property paths in priority order */
    order?: string[];
    /** Multi-key sort with explicit direction per column */
    sort?: SortEntry[];
    /** Per-property summary aggregations */
    summaries?: Record<string, SummaryType>;
    /** Column widths in pixels, keyed by property path */
    columnSize?: Record<string, number>;
    /** Row height in pixels */
    rowHeight?: number;
    /** Property name containing the image URL/path */
    image?: string;
    /** Card width (unitless ratio or pixels depending on renderer) */
    cardSize?: number;
    /** Image aspect ratio (width:height, e.g. 1 for square). Obsidian spec field. */
    imageAspectRatio?: number;
    /** Image fit mode: "cover" (crop to fill) or "contain" (scale to fit). Default: "cover". */
    imageFit?: "cover" | "contain";
    /**
     * @deprecated Use imageAspectRatio instead. Kept for backwards compatibility.
     */
    cardAspect?: number;
    /** Property path for the date field */
    date?: string;
    /** Alias for date */
    dateField?: string;
    /** Alias for date */
    dateProperty?: string;
    /** Property to group board columns by (if not using groupBy) */
    boardProperty?: string;
    /** Escape hatch for future/unknown view-specific fields */
    [key: string]: unknown;
}
/** Parsed .base file data — top-level YAML structure */
interface BasesData {
    /** Global filters applied to all views */
    filters?: FilterNode;
    /** Formula definitions — keys are formula names, values are expressions */
    formulas?: Record<string, string>;
    /** Property display configuration */
    properties?: Record<string, PropertyConfig>;
    /** Global summary configuration */
    summaries?: Record<string, string>;
    /** View definitions — each entry defines one tab/view */
    views?: BasesView[];
}

declare module "vfile" {
    interface DataMap {
        basesBlocks?: BasesData[];
        embeds?: string[];
    }
}

declare module "vfile" {
    interface DataMap {
        aliases: FullSlug[];
        frontmatterLinks: string[];
        noteProperties: {
            properties: Record<string, unknown>;
            hideView: boolean;
            showProperties?: boolean;
            collapseProperties?: boolean;
            resolvedLinks?: Record<string, string>;
        };
    }
}

interface FileTrieData {
    slug: string;
    title: string;
    filePath: string;
}
declare class FileTrieNode<T extends FileTrieData = ContentDetails> {
    isFolder: boolean;
    children: Array<FileTrieNode<T>>;
    private slugSegments;
    private fileSegmentHint?;
    private displayNameOverride?;
    data: T | null;
    constructor(segments: string[], data?: T);
    get displayName(): string;
    set displayName(name: string);
    get slug(): FullSlug$1;
    get slugSegment(): string;
    private makeChild;
    private insert;
    add(file: T): void;
    findNode(path: string[]): FileTrieNode<T> | undefined;
    ancestryChain(path: string[]): Array<FileTrieNode<T>> | undefined;
    /**
     * Filter trie nodes. Behaves similar to `Array.prototype.filter()`, but modifies tree in place
     */
    filter(filterFn: (node: FileTrieNode<T>) => boolean): void;
    /**
     * Map over trie nodes. Behaves similar to `Array.prototype.map()`, but modifies tree in place
     */
    map(mapFn: (node: FileTrieNode<T>) => void): void;
    /**
     * Sort trie nodes according to sort/compare function
     */
    sort(sortFn: (a: FileTrieNode<T>, b: FileTrieNode<T>) => number): void;
    static fromEntries<T extends FileTrieData>(entries: [FullSlug$1, T][]): FileTrieNode<T>;
    /**
     * Get all entries in the trie
     * in the a flat array including the full path and the node
     */
    entries(): [FullSlug$1, FileTrieNode<T>][];
    /**
     * Get all folder paths in the trie
     * @returns array containing folder state for trie
     */
    getFolderPaths(): FullSlug$1[];
}

interface Argv {
    directory: string;
    verbose: boolean;
    output: string;
    serve: boolean;
    watch: boolean;
    port: number;
    wsPort: number;
    remoteDevHost?: string;
    concurrency?: number;
}
type BuildTimeTrieData = QuartzPluginData & {
    slug: string;
    title: string;
    filePath: string;
};
/**
 * Mapping from logical asset names (e.g. "index.css") to their content-hashed
 * filenames (e.g. "index-a3f2c1b.css"). Populated by the ComponentResources
 * emitter before pages are rendered.
 */
type HashedResourceNames = Record<string, string>;
interface BuildCtx {
    buildId: string;
    argv: Argv;
    cfg: QuartzConfig;
    allSlugs: FullSlug$1[];
    allFiles: FilePath$1[];
    trie?: FileTrieNode<BuildTimeTrieData>;
    incremental: boolean;
    /** Virtual pages generated by page type plugins (e.g. tag pages, folder pages, bases pages) */
    virtualPages: ProcessedContent[];
    /** Content-hashed asset filenames, populated by ComponentResources emitter */
    hashedResourceNames?: HashedResourceNames;
    /** Maps CSS content strings to their emitted hashed filenames. Populated by ComponentResources. */
    componentCssMap?: Map<string, string>;
    /** Maps inline CSS/JS content to extracted external file paths. Populated by ComponentResources. */
    extractedInlineResources?: Map<string, string>;
}

interface PluginTypes {
    transformers: QuartzTransformerPluginInstance[];
    filters: QuartzFilterPluginInstance[];
    emitters: QuartzEmitterPluginInstance[];
    pageTypes?: PageTypePluginEntry[];
}
type OptionType = object | undefined;
type ExternalResourcesFn = (ctx: BuildCtx) => Partial<StaticResources> | undefined;
type QuartzTransformerPlugin<Options extends OptionType = undefined> = (opts?: Options) => QuartzTransformerPluginInstance;
type QuartzTransformerPluginInstance = {
    name: string;
    textTransform?: (ctx: BuildCtx, src: string) => string;
    markdownPlugins?: (ctx: BuildCtx) => PluggableList;
    htmlPlugins?: (ctx: BuildCtx) => PluggableList;
    externalResources?: ExternalResourcesFn;
};
type QuartzFilterPlugin<Options extends OptionType = undefined> = (opts?: Options) => QuartzFilterPluginInstance;
type QuartzFilterPluginInstance = {
    name: string;
    shouldPublish(ctx: BuildCtx, content: ProcessedContent): boolean;
};
type ChangeEvent = {
    type: "add" | "change" | "delete";
    path: FilePath$1;
    file?: VFile;
};
type QuartzEmitterPlugin<Options extends OptionType = undefined> = (opts?: Options) => QuartzEmitterPluginInstance;
type QuartzEmitterPluginInstance = {
    name: string;
    emit: (ctx: BuildCtx, content: ProcessedContent[], resources: StaticResources) => Promise<FilePath$1[]> | AsyncGenerator<FilePath$1>;
    partialEmit?: (ctx: BuildCtx, content: ProcessedContent[], resources: StaticResources, changeEvents: ChangeEvent[]) => Promise<FilePath$1[]> | AsyncGenerator<FilePath$1> | null;
    /**
     * Returns the components (if any) that are used in rendering the page.
     * This helps Quartz optimize the page by only including necessary resources
     * for components that are actually used.
     */
    getQuartzComponents?: (ctx: BuildCtx) => QuartzComponent[];
    externalResources?: ExternalResourcesFn;
};
type PageMatcher = (args: {
    slug: string;
    fileData: QuartzPluginData;
    cfg: GlobalConfiguration;
    [key: string]: unknown;
}) => boolean;
interface VirtualPage {
    slug: string;
    title: string;
    data: Partial<QuartzPluginData> & Record<string, unknown>;
}
type PageGenerator = (args: {
    content: ProcessedContent[];
    cfg: GlobalConfiguration;
    ctx: BuildCtx;
    [key: string]: unknown;
}) => VirtualPage[];
/** A function that mutates a HAST tree at render time, when allFiles is available. */
type TreeTransform = (root: Root, slug: FullSlug$1, componentData: QuartzComponentProps) => void;
type QuartzPageTypePlugin<Options extends OptionType = undefined> = (opts?: Options) => QuartzPageTypePluginInstance;
interface QuartzPageTypePluginInstance {
    name: string;
    priority?: number;
    fileExtensions?: string[];
    match: PageMatcher;
    generate?: PageGenerator;
    layout: string;
    /** Optional page frame name (e.g. "default", "full-width", "minimal"). Defaults to "default". */
    frame?: string;
    body: QuartzComponentConstructor;
    /** Optional render-time HAST tree transforms (e.g. resolving inline codeblocks). */
    treeTransforms?: (ctx: BuildCtx) => TreeTransform[];
}
interface PageTypePluginEntry {
    name: string;
    priority?: number;
    fileExtensions?: string[];
    match: (...args: never[]) => boolean;
    generate?: (...args: never[]) => VirtualPage[];
    layout: string;
    /** Optional page frame name (e.g. "default", "full-width", "minimal"). Defaults to "default". */
    frame?: string;
    body: QuartzComponentConstructor;
    treeTransforms?: (...args: never[]) => TreeTransform[];
}

type PluginCategory = "transformer" | "filter" | "emitter" | "pageType" | "component";
type LayoutPosition = "left" | "right" | "beforeBody" | "afterBody";
/**
 * Component manifest metadata
 */
interface ComponentManifest {
    name: string;
    displayName: string;
    description: string;
    version: string;
    quartzVersion?: string;
    author?: string;
    homepage?: string;
}
/**
 * Layout defaults for a component declared in a plugin manifest.
 * These are used as fallback values when no user layout config is specified.
 */
interface ComponentLayoutDefaults {
    displayName: string;
    description?: string;
    defaultPosition?: LayoutPosition;
    defaultPriority?: number;
}
/**
 * Plugin manifest metadata for discovery and documentation.
 *
 * This corresponds to the `quartz` field in a plugin's `package.json`.
 */
interface PluginManifest {
    name: string;
    displayName: string;
    description: string;
    version: string;
    author?: string;
    homepage?: string;
    keywords?: string[];
    category?: PluginCategory | PluginCategory[];
    quartzVersion?: string;
    /** Plugin sources this plugin depends on (e.g., "github:quartz-community/crawl-links") */
    dependencies?: string[];
    /** Default numeric execution order (0-100 convention, lower = runs first). Defaults to 50. */
    defaultOrder?: number;
    /** Whether the plugin is enabled by default on install. Defaults to true. */
    defaultEnabled?: boolean;
    /** Default options applied when no user options are specified */
    defaultOptions?: Record<string, unknown>;
    /** JSON Schema for the plugin's options object, used for validation and TUI generation */
    configSchema?: object;
    /** Components provided by this plugin, keyed by component export name */
    components?: Record<string, ComponentManifest & ComponentLayoutDefaults>;
    /** Page frames provided by this plugin, keyed by export name. Each entry maps to a PageFrame object. */
    frames?: Record<string, {
        exportName: string;
    }>;
    /** Whether the plugin requires `npm install` after cloning (e.g. for native dependencies like sharp). */
    requiresInstall?: boolean;
}
/**
 * Loaded plugin with metadata
 */
interface LoadedPlugin {
    plugin: QuartzTransformerPlugin | QuartzFilterPlugin | QuartzEmitterPlugin | QuartzPageTypePlugin;
    manifest: PluginManifest;
    type: PluginCategory;
    source: string;
}
/**
 * Plugin specifier - can be:
 * - String package name (e.g., "@quartz-community/my-plugin")
 * - Object with name and options (e.g., { name: "@quartz-community/my-plugin", options: {...} })
 * - Inline plugin object (already loaded plugin instance)
 */
type PluginSpecifier = string | {
    name: string;
    options?: unknown;
} | {
    plugin: LoadedPlugin["plugin"];
    manifest?: Partial<PluginManifest>;
};

interface ColorScheme {
    light: string;
    lightgray: string;
    gray: string;
    darkgray: string;
    dark: string;
    secondary: string;
    tertiary: string;
    highlight: string;
    textHighlight: string;
}
interface Colors {
    lightMode: ColorScheme;
    darkMode: ColorScheme;
}
type FontSpecification = string | {
    name: string;
    weights?: number[];
    includeItalic?: boolean;
};
interface Theme {
    typography: {
        title?: FontSpecification;
        header: FontSpecification;
        body: FontSpecification;
        code: FontSpecification;
    };
    cdnCaching: boolean;
    colors: Colors;
    fontOrigin: "googleFonts" | "local";
}

type Analytics = null | {
    provider: "plausible";
    host?: string;
} | {
    provider: "google";
    tagId: string;
} | {
    provider: "umami";
    websiteId: string;
    host?: string;
} | {
    provider: "goatcounter";
    websiteId: string;
    host?: string;
    scriptSrc?: string;
} | {
    provider: "posthog";
    apiKey: string;
    host?: string;
} | {
    provider: "tinylytics";
    siteId: string;
} | {
    provider: "cabin";
    host?: string;
} | {
    provider: "clarity";
    projectId?: string;
} | {
    provider: "matomo";
    host: string;
    siteId: string;
} | {
    provider: "vercel";
} | {
    provider: "rybbit";
    siteId: string;
    host?: string;
};
interface GlobalConfiguration {
    pageTitle: string;
    pageTitleSuffix?: string;
    /** Whether to enable single-page-app style rendering. this prevents flashes of unstyled content and improves smoothness of Quartz */
    enableSPA: boolean;
    /** Whether to display Wikipedia-style popovers when hovering over links */
    enablePopovers: boolean;
    /** Analytics mode */
    analytics: Analytics;
    /** Glob patterns to not search */
    ignorePatterns: string[];
    /** Base URL to use for CNAME files, sitemaps, and RSS feeds that require an absolute URL.
     *   Quartz will avoid using this as much as possible and use relative URLs most of the time
     */
    baseUrl?: string;
    theme: Theme;
    /**
     * Allow to translate the date in the language of your choice.
     * Also used for UI translation (default: en-US)
     * Need to be formatted following BCP 47: https://en.wikipedia.org/wiki/IETF_language_tag
     * The first part is the language (en) and the second part is the script/region (US)
     * Language Codes: https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes
     * Region Codes: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
     */
    locale: ValidLocale;
}
interface QuartzConfig {
    configuration: GlobalConfiguration;
    plugins: PluginTypes;
    externalPlugins?: PluginSpecifier[];
}

type QuartzComponentProps = {
    ctx: BuildCtx;
    externalResources: StaticResources;
    fileData: QuartzPluginData;
    cfg: GlobalConfiguration;
    children: (QuartzComponent | JSX$1.Element)[];
    tree: Node;
    allFiles: QuartzPluginData[];
    displayClass?: "mobile-only" | "desktop-only";
} & JSX$1.IntrinsicAttributes & {
    [key: string]: any;
};
type QuartzComponent = ((props: QuartzComponentProps) => any) & {
    displayName?: string;
    css?: StringResource;
    beforeDOMLoaded?: StringResource;
    afterDOMLoaded?: StringResource;
};
type QuartzComponentConstructor<Options extends object | undefined = undefined> = (opts: Options) => QuartzComponent;

declare const GlobalNavigation: QuartzComponentConstructor;

export { GlobalNavigation };
