interface Language {
    dayNames: string[];
    monthNames: string[];
}
interface Languages {
    [key: string]: Language;
}
declare const languages: Languages;
export = languages;
