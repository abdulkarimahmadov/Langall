import { IdiomCard } from "@/components/IdiomCard";
import { SearchFilters } from "@/components/SearchFilters";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import type { Idiom } from "@/types/idiom";

const sample: Idiom = {
  language: "Japanese",
  region: "East Asia",
  mood: ["success"],
  originalText: "猿も木から落ちる",
  phonetic: "Saru mo ki kara ochiru",
  literalTranslation: "Even monkeys fall from trees",
  idiomaticMeaning: "Even experts make mistakes",
  examples: [
    {
      original: "プロでも失敗する。猿も木から落ちるだね。",
      translation: "Even professionals fail. Even monkeys fall from trees.",
    },
  ],
};

const languages = ["Japanese", "Turkish", "Arabic", "Spanish"];
const moods = ["happiness", "sadness", "success"];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-16">
        <header className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">GlobalIdioms</h1>
          <ThemeToggle />
        </header>

        <p className="mb-6 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">
          Discover culturally rich idioms in 30+ languages with native script, pronunciation,
          literal translation, and contextual meaning.
        </p>

        <SearchFilters languages={languages} moods={moods} />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <IdiomCard idiom={sample} />
        </div>
      </section>
    </main>
  );
}
