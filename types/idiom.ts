export type IdiomExample = {
  original: string;
  translation: string;
  contextNote?: string;
};

export type Idiom = {
  id?: string;
  language: string;
  languageCode?: string;
  region: string;
  mood: string[];
  originalText: string;
  phonetic?: string;
  literalTranslation: string;
  idiomaticMeaning: string;
  examples: IdiomExample[];
};
