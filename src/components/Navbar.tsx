import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { LanguageToggle } from "./LanguageToggle";
import { useLang } from "../lib/i18n";
import { useConsultation } from "../lib/consultation";

export function Navbar() {
  const { t } = useLang();
  const { open } = useConsultation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/#about", label: t.nav.about },
    { href: "/#team", label: t.nav.team },
    { href: "/#treatments", label: t.nav.treatments },
    { href: "/#technology", label: t.nav.technology },
    { href: "/#contact", label: t.nav.contact },
  ];

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "bg-alabaster/90 shadow-soft backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-5 sm:px-8">
        <Logo light={!solid} />

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                solid ? "text-muted-ink hover:text-navy" : "text-alabaster/85 hover:text-alabaster"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle light={!solid} />
          <button
            onClick={() => open()}
            className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-alabaster shadow-soft transition-all hover:-translate-y-0.5 hover:bg-navydark"
          >
            {t.nav.book}
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle light={!solid} />
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
            className={solid ? "text-navy" : "text-alabaster"}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-border bg-alabaster px-5 py-4 lg:hidden">
          <nav className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-muted-ink hover:bg-white hover:text-navy"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <button
            onClick={() => {
              setMenuOpen(false);
              open();
            }}
            className="mt-3 w-full rounded-full bg-navy py-3 text-sm font-semibold text-alabaster"
          >
            {t.nav.book}
          </button>
        </div>
      )}
    </header>
  );
}
