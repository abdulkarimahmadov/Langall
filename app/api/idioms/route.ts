import { NextResponse } from "next/server";
import type { Idiom } from "@/types/idiom";

const sampleIdioms: Idiom[] = [
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

export async function GET() {
  return NextResponse.json({ data: sampleIdioms });
}
