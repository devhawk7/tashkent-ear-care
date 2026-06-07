import { useLang, type Lang } from "../lib/i18n";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <div
      className={`flex shrink-0 overflow-hidden rounded-full border border-border ${className}`}
    >
      {(["ru", "uz"] as const).map((l: Lang) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`px-3 py-1.5 text-xs font-semibold uppercase transition-colors ${
            lang === l
              ? "bg-gold text-gold-foreground"
              : "bg-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
