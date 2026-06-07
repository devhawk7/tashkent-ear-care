import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Globe } from "lucide-react";
import { useLang } from "../lib/i18n";

export function Footer() {
  const { t } = useLang();

  const navItems = [
    { to: "/", l: t.nav.home },
    { to: "/services", l: t.nav.services },
    { to: "/about", l: t.nav.about },
    { to: "/contact", l: t.nav.contact },
  ] as const;

  return (
    <footer className="border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gold to-primary-foreground/20 font-display text-lg font-bold text-primary">
              L
            </span>
            <span className="font-display text-xl font-semibold">LOR Clinic</span>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/70">{t.footer.tagline}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">
            {t.footer.navigate}
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            {navItems.map((i) => (
              <li key={i.to}>
                <Link to={i.to} className="transition-colors hover:text-gold">
                  {i.l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">
            {t.footer.contact}
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-gold" />
              <a href="tel:+998950955050" className="hover:text-gold">+998 95 095 50 50</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-gold" /> {t.footer.address}
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 text-gold" /> {t.footer.hours}
            </li>
            <li className="flex items-start gap-2">
              <Globe className="mt-0.5 h-4 w-4 text-gold" /> {t.common.languages}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">
            {t.footer.emergency}
          </h4>
          <p className="mt-4 text-sm text-primary-foreground/70">{t.footer.emergencyBody}</p>
          <a
            href="tel:+998950955050"
            className="mt-4 inline-flex rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground transition-transform hover:scale-[1.03]"
          >
            {t.common.callNow}
          </a>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} {t.footer.rights}
      </div>
    </footer>
  );
}
