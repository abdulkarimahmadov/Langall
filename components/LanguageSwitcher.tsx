import { Select } from "@/components/ui/Select";

type LanguageSwitcherProps = {
  languages: string[];
  currentLanguage?: string;
};

export function LanguageSwitcher({ languages, currentLanguage = "" }: LanguageSwitcherProps) {
  return (
    <Select aria-label="Language switcher" defaultValue={currentLanguage}>
      <option value="">All Languages</option>
      {languages.map((language) => (
        <option key={language} value={language}>
          {language}
        </option>
      ))}
    </Select>
  );
}
