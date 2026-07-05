import { useLang, type Lang } from "../lib/i18n";

export function LanguageToggle({ light = false }: { light?: boolean }) {
  const { lang, setLang } = useLang();
  const opts: Lang[] = ["ru", "uz"];
  return (
    <div
      className={`flex items-center gap-0.5 rounded-full border p-0.5 text-xs font-semibold ${
        light ? "border-alabaster/30" : "border-navy/20"
      }`}
    >
      {opts.map((o) => {
        const active = lang === o;
        return (
          <button
            key={o}
            onClick={() => setLang(o)}
            className={`rounded-full px-2.5 py-1 uppercase tracking-wide transition-colors ${
              active
                ? "bg-navy text-alabaster"
                : light
                  ? "text-alabaster/70 hover:text-alabaster"
                  : "text-muted-ink hover:text-navy"
            }`}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}
