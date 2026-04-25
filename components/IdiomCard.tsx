import type { Idiom } from "@/types/idiom";

export function IdiomCard({ idiom }: { idiom: Idiom }) {
  return (
    <article className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mb-3 flex flex-wrap gap-2 text-xs text-zinc-500 dark:text-zinc-400">
        <span>{idiom.language}</span>
        <span>•</span>
        <span>{idiom.region}</span>
      </div>

      <h2 className="text-lg font-medium tracking-tight">{idiom.originalText}</h2>
      {idiom.phonetic && (
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{idiom.phonetic}</p>
      )}

      <div className="mt-4 space-y-2 text-sm">
        <p>
          <strong>Literal:</strong> {idiom.literalTranslation}
        </p>
        <p>
          <strong>Meaning:</strong> {idiom.idiomaticMeaning}
        </p>
      </div>

      {idiom.examples[0] && (
        <div className="mt-4 rounded-xl bg-zinc-50 p-3 text-sm dark:bg-zinc-800/60">
          <p>{idiom.examples[0].original}</p>
          <p className="mt-1 text-zinc-500 dark:text-zinc-400">{idiom.examples[0].translation}</p>
        </div>
      )}
    </article>
  );
}
