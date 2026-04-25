# GlobalIdioms

GlobalIdioms is a Next.js + Tailwind web app for exploring idioms across 30+ languages with native script, pronunciation, literal translation, idiomatic meaning, and contextual examples.

## Tech Stack

- Next.js (App Router, TypeScript)
- Tailwind CSS
- Supabase client integration scaffold
- PostgreSQL schema at `db/schema.sql`

## Project Structure

- `app/(public)/page.tsx` – landing page
- `app/(public)/idioms/page.tsx` – idioms listing route
- `app/api/idioms/route.ts` – sample idioms API route
- `components/` – idiom cards, filters, UI primitives
- `lib/` – search helpers, formatters, Supabase client factory
- `types/idiom.ts` – shared domain types
- `data/seed/idioms.sample.json` – sample ingestion input
- `scripts/ingest-idioms.ts` – ingestion pipeline skeleton
- `db/schema.sql` – language/mood/idiom SQL schema and search indexes

## Environment

If you want Supabase integration enabled, add:

```bash
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Validation

```bash
npm run lint
npm run build
```
