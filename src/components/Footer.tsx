import { Link } from "@tanstack/react-router";
import { Send, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { useLang } from "../lib/i18n";
import { services } from "../lib/services-data";

export function Footer() {
  const { t, lang } = useLang();
  return (
    <footer className="bg-navydark px-5 pb-10 pt-16 text-alabaster sm:px-8">
      <div className="mx-auto grid max-w-[1240px] gap-10 md:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-alabaster/50">{t.footer.tagline}</p>
          <div className="mt-5 flex items-center gap-3">
            {[Instagram, Facebook, Send].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-alabaster/20 text-alabaster/70 transition-colors hover:border-alabaster/50 hover:text-alabaster"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-alabaster/40">
            {t.footer.nav}
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><a href="/#about" className="text-alabaster/55 hover:text-alabaster">{t.nav.about}</a></li>
            <li><a href="/#team" className="text-alabaster/55 hover:text-alabaster">{t.nav.team}</a></li>
            <li><a href="/#technology" className="text-alabaster/55 hover:text-alabaster">{t.nav.technology}</a></li>
            <li><a href="/#contact" className="text-alabaster/55 hover:text-alabaster">{t.nav.contact}</a></li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-alabaster/40">
            {t.footer.services}
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.slice(0, 5).map((s) => (
              <li key={s.id}>
                <Link to="/service/$id" params={{ id: s.id }} className="text-alabaster/55 hover:text-alabaster">
                  {s[lang].name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-alabaster/40">
            {t.footer.contact}
          </p>
          <ul className="mt-4 space-y-3 text-sm text-alabaster/55">
            <li className="flex items-start gap-2.5"><MapPin className="mt-0.5 h-4 w-4 shrink-0" />{t.contact.addressValue}</li>
            <li className="flex items-center gap-2.5"><Phone className="h-4 w-4 shrink-0" />+998 71 200 15 15</li>
            <li className="flex items-center gap-2.5"><Mail className="h-4 w-4 shrink-0" />clinic@doctorvays.uz</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-[1240px] border-t border-alabaster/10 pt-6 text-center text-sm text-alabaster/35">
        © {new Date().getFullYear()} Doctor Vays. {t.footer.rights}
      </div>
    </footer>
  );
}
