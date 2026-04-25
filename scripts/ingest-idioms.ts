import { readFile } from "node:fs/promises";
import path from "node:path";

type RawIdiom = {
  language: string;
  region: string;
  moods: string[];
  originalText: string;
  phonetic?: string;
  literalTranslation: string;
  idiomaticMeaning: string;
  examples: Array<{ original: string; translation: string }>;
};

async function main() {
  const seedPath = path.resolve(process.cwd(), "data/seed/idioms.sample.json");
  const raw = await readFile(seedPath, "utf-8");
  const idioms = JSON.parse(raw) as RawIdiom[];

  // Placeholder for validation -> normalization -> staged upsert workflow.
  console.log(`Loaded ${idioms.length} idioms from seed.`);
}

void main();
