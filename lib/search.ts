import type { Idiom } from "@/types/idiom";

type SearchParams = {
  query?: string;
  language?: string;
  mood?: string;
  region?: string;
};

export function filterIdioms(idioms: Idiom[], params: SearchParams) {
  const query = params.query?.trim().toLowerCase();

  return idioms.filter((idiom) => {
    const matchesQuery = !query
      ? true
      : [idiom.originalText, idiom.phonetic, idiom.literalTranslation, idiom.idiomaticMeaning]
          .filter(Boolean)
          .some((value) => value?.toLowerCase().includes(query));

    const matchesLanguage = !params.language || idiom.language === params.language;
    const matchesMood = !params.mood || idiom.mood.includes(params.mood);
    const matchesRegion = !params.region || idiom.region === params.region;

    return matchesQuery && matchesLanguage && matchesMood && matchesRegion;
  });
}
