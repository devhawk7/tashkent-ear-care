import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Play,
  Check,
  ShieldCheck,
  Eye,
  HeartHandshake,
  UserCog,
  Microscope,
  Activity,
  Cpu,
  Stethoscope,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Reveal } from "../components/Reveal";
import { useLang } from "../lib/i18n";
import { useConsultation } from "../lib/consultation";
import { services } from "../lib/services-data";
import hero from "../assets/hero.jpg";
import technology from "../assets/technology.jpg";
import doc1 from "../assets/doc-1.jpg";
import doc2 from "../assets/doc-2.jpg";
import doc3 from "../assets/doc-3.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const valueIcons = [UserCog, Eye, ShieldCheck, HeartHandshake];
const cardIcons = [Microscope, Activity, Cpu, Stethoscope];

function Home() {
  const { t, lang } = useLang();
  const { open } = useConsultation();

  const doctors = [
    { img: doc1, name: "Д-р Малика Юсупова", specialty: lang === "ru" ? "Дерматокосметолог" : "Dermatokosmetolog", years: "12" },
    { img: doc2, name: "Д-р Тимур Ваисов", specialty: lang === "ru" ? "Пластический хирург" : "Plastik jarroh", years: "15" },
    { img: doc3, name: "Д-р Нигора Каримова", specialty: lang === "ru" ? "Врач-косметолог" : "Kosmetolog shifokor", years: "9" },
  ];

  return (
    <div className="min-h-screen bg-alabaster">
      <Navbar />

      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <img
          src={hero}
          alt="Doctor Vays clinic team"
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navydark/80 via-navydark/45 to-transparent" />
        <div className="relative mx-auto w-full max-w-[1240px] px-5 sm:px-8">
          <motion.div
            className="max-w-xl rounded-2xl border border-greige/25 bg-greige/15 p-8 backdrop-blur-md sm:p-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-greige">
              {t.hero.badge}
            </span>
            <h1 className="mt-4 font-display text-4xl leading-[1.1] text-alabaster sm:text-5xl">
              {t.hero.title}
            </h1>
            <p className="mt-5 text-[15px] leading-relaxed text-alabaster/80">{t.hero.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => open()}
                className="rounded-full bg-alabaster px-6 py-3 text-sm font-semibold text-navy shadow-soft transition-all hover:-translate-y-0.5 hover:bg-white"
              >
                {t.hero.cta}
              </button>
              <a
                href="#treatments"
                className="rounded-full border border-alabaster/40 px-6 py-3 text-sm font-semibold text-alabaster transition-colors hover:bg-alabaster/10"
              >
                {t.hero.secondary}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="group relative overflow-hidden rounded-2xl shadow-soft">
              <img
                src={hero}
                alt="About Doctor Vays"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-navydark/25">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-alabaster/90 text-navy transition-transform duration-300 group-hover:scale-110">
                  <Play className="ml-1 h-6 w-6 fill-navy" />
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-greigedark">
              {t.about.tag}
            </span>
            <h2 className="mt-3 font-display text-3xl text-navy sm:text-4xl">{t.about.title}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-ink">{t.about.lead}</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {t.about.values.map((v, i) => {
                const Icon = valueIcons[i];
                return (
                  <div key={v.t} className="flex gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-greige/30 text-navy">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-navy">{v.t}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-ink">{v.d}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-16 grid grid-cols-2 gap-6 rounded-2xl border border-border bg-white p-8 shadow-soft md:grid-cols-4">
            {t.about.stats.map((s) => (
              <div key={s.l} className="text-center">
                <p className="font-display text-3xl text-navy sm:text-4xl">{s.v}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-ink">{s.l}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* COMMITMENT */}
      <section className="bg-greige/25 py-24">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <Reveal>
            <div className="text-center">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-greigedark">
                {t.commitment.tag}
              </span>
              <h2 className="mt-3 font-display text-3xl text-navy sm:text-4xl">{t.commitment.title}</h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              { title: t.commitment.col1Title, items: t.commitment.col1 },
              { title: t.commitment.col2Title, items: t.commitment.col2 },
            ].map((col, ci) => (
              <Reveal key={col.title} delay={ci * 0.1}>
                <div className="rounded-2xl bg-white p-8 shadow-soft">
                  <h3 className="font-display text-xl text-navy">{col.title}</h3>
                  <ul className="mt-5 space-y-3.5">
                    {col.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-sm text-muted-ink">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-navy" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.commitment.cards.map((c, i) => {
              const Icon = cardIcons[i];
              return (
                <Reveal key={c.t} delay={i * 0.08}>
                  <div className="h-full rounded-2xl border border-border bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-alabaster">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="mt-4 font-semibold text-navy">{c.t}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-ink">{c.d}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section id="technology" className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-greigedark">
              {t.tech.tag}
            </span>
            <h2 className="mt-3 font-display text-3xl text-navy sm:text-4xl">{t.tech.title}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-ink">{t.tech.lead}</p>
            <ul className="mt-7 space-y-3">
              {t.tech.points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm text-navy">
                  <Check className="h-4 w-4 shrink-0 text-navy" />
                  {p}
                </li>
              ))}
            </ul>
            <button
              onClick={() => open()}
              className="mt-8 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-alabaster transition-all hover:-translate-y-0.5 hover:bg-navydark"
            >
              {t.tech.cta}
            </button>
          </Reveal>
          <Reveal delay={0.1}>
            <img
              src={technology}
              alt={t.tech.title}
              loading="lazy"
              width={1280}
              height={960}
              className="w-full rounded-2xl object-cover shadow-soft"
            />
          </Reveal>
        </div>
      </section>

      {/* TREATMENTS */}
      <section id="treatments" className="bg-white py-24">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <Reveal>
            <div className="text-center">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-greigedark">
                {t.treatments.tag}
              </span>
              <h2 className="mt-3 font-display text-3xl text-navy sm:text-4xl">{t.treatments.title}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-[15px] text-muted-ink">{t.treatments.lead}</p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 0.08}>
                <Link
                  to="/service/$id"
                  params={{ id: s.id }}
                  className="group block overflow-hidden rounded-2xl border border-border bg-alabaster shadow-soft transition-all hover:-translate-y-1.5 hover:shadow-lift"
                >
                  <div className="overflow-hidden">
                    <img
                      src={s.image}
                      alt={s[lang].name}
                      loading="lazy"
                      width={960}
                      height={720}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-medium uppercase tracking-wide text-greigedark">
                      {t.treatments.from} {s.priceFrom}
                    </p>
                    <h3 className="mt-1.5 font-display text-xl text-navy">{s[lang].name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-ink">{s[lang].tagline}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
                      {t.treatments.learn}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTORS / TEAM */}
      <section id="team" className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8">
        <Reveal>
          <div className="text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-greigedark">
              {t.doctors.tag}
            </span>
            <h2 className="mt-3 font-display text-3xl text-navy sm:text-4xl">{t.doctors.title}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] text-muted-ink">{t.doctors.lead}</p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {doctors.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.1}>
              <div className="text-center">
                <div className="group mx-auto h-48 w-48 overflow-hidden rounded-full border-4 border-white shadow-soft">
                  <img
                    src={d.img}
                    alt={d.name}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 font-display text-xl text-navy">{d.name}</h3>
                <p className="mt-1 text-sm font-medium text-greigedark">{d.specialty}</p>
                <p className="mt-0.5 text-sm text-muted-ink">
                  {d.years} {lang === "ru" ? "лет " : "yil "}{t.doctors.exp}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => open()}
            className="rounded-full border border-navy px-6 py-3 text-sm font-semibold text-navy transition-all hover:bg-navy hover:text-alabaster"
          >
            {t.doctors.cta}
          </button>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-navydark py-24 text-alabaster">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-greige">
                {t.contact.tag}
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl">{t.contact.title}</h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-alabaster/70">{t.contact.lead}</p>

              <div className="mt-8 space-y-5">
                {[
                  { icon: MapPin, label: t.contact.address, value: t.contact.addressValue },
                  { icon: Phone, label: t.contact.phone, value: "+998 71 200 15 15" },
                  { icon: Mail, label: t.contact.email, value: "clinic@doctorvays.uz" },
                  { icon: Clock, label: t.contact.hours, value: t.contact.hoursValue },
                ].map((row) => (
                  <div key={row.label} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-alabaster/20 text-greige">
                      <row.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-alabaster/40">{row.label}</p>
                      <p className="mt-0.5 text-[15px] text-alabaster">{row.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-wide text-alabaster/40">{t.contact.social}</p>
                <div className="mt-3 flex gap-3">
                  {[Send, MessageCircle, Phone].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-alabaster/20 text-alabaster/70 transition-colors hover:border-alabaster/50 hover:text-alabaster"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>

              <button
                onClick={() => open()}
                className="mt-9 rounded-full bg-alabaster px-6 py-3 text-sm font-semibold text-navy transition-all hover:-translate-y-0.5 hover:bg-white"
              >
                {t.contact.cta}
              </button>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="h-full min-h-[360px] overflow-hidden rounded-2xl border border-alabaster/15 shadow-lift">
                <iframe
                  title="Doctor Vays location"
                  src="https://www.google.com/maps?q=Amir+Temur+street,+Tashkent&output=embed"
                  className="h-full min-h-[360px] w-full grayscale"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
