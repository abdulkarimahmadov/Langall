import assert from "node:assert/strict";
import test from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import { IdiomCard } from "@/components/IdiomCard";

test("IdiomCard renders key content", () => {
  const html = renderToStaticMarkup(
    <IdiomCard
      idiom={{
        language: "Japanese",
        region: "East Asia",
        mood: ["success"],
        originalText: "猿も木から落ちる",
        literalTranslation: "Even monkeys fall from trees",
        idiomaticMeaning: "Even experts make mistakes",
        examples: [{ original: "x", translation: "y" }],
      }}
    />,
  );

  assert.match(html, /猿も木から落ちる/);
  assert.match(html, /Even experts make mistakes/);
});
