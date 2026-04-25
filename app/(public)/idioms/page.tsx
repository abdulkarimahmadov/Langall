import { IdiomCard } from "@/components/IdiomCard";
import type { Idiom } from "@/types/idiom";

const idioms: Idiom[] = [
  {
    id: "1",
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
  },
];

export default function IdiomsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:py-16">
      <h1 className="mb-6 text-2xl font-semibold tracking-tight">All Idioms</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {idioms.map((idiom) => (
          <IdiomCard key={idiom.id} idiom={idiom} />
        ))}
      </div>
    </main>
  );
}
