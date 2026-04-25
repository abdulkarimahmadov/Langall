create extension if not exists pg_trgm;

create table languages (
  id uuid primary key default gen_random_uuid(),
  code varchar(10) unique not null,
  name text not null,
  native_name text not null,
  script text,
  region text,
  created_at timestamptz default now()
);

create table moods (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  label text not null
);

create table idioms (
  id uuid primary key default gen_random_uuid(),
  language_id uuid not null references languages(id) on delete cascade,
  region text,
  original_text text not null,
  phonetic text,
  literal_translation text not null,
  idiomatic_meaning text not null,
  notes text,
  source text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table idiom_moods (
  idiom_id uuid references idioms(id) on delete cascade,
  mood_id uuid references moods(id) on delete cascade,
  primary key (idiom_id, mood_id)
);

create table idiom_examples (
  id uuid primary key default gen_random_uuid(),
  idiom_id uuid not null references idioms(id) on delete cascade,
  example_original text not null,
  example_translation text not null,
  context_note text
);

create index idx_idioms_search on idioms using gin (
  to_tsvector(
    'simple',
    coalesce(original_text, '') || ' ' ||
    coalesce(phonetic, '') || ' ' ||
    coalesce(literal_translation, '') || ' ' ||
    coalesce(idiomatic_meaning, '')
  )
);

create index idx_idioms_original_trgm on idioms using gin (original_text gin_trgm_ops);
create index idx_idioms_meaning_trgm on idioms using gin (idiomatic_meaning gin_trgm_ops);
