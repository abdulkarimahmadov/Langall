import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";

type SearchFiltersProps = {
  languages: string[];
  moods: string[];
};

export function SearchFilters({ languages, moods }: SearchFiltersProps) {
  return (
    <section aria-label="Idiom filters" className="mb-6 grid gap-3 md:grid-cols-3">
      <Input placeholder="Search idioms..." aria-label="Search idioms" />
      <Select aria-label="Filter by language" defaultValue="">
        <option value="">All Languages</option>
        {languages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </Select>
      <Select aria-label="Filter by mood" defaultValue="">
        <option value="">All Moods</option>
        {moods.map((mood) => (
          <option key={mood} value={mood}>
            {mood}
          </option>
        ))}
      </Select>
    </section>
  );
}
