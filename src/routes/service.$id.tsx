import { createFileRoute, Link, useParams, notFound } from "@tanstack/react-router";
import { ArrowLeft, Sparkles, ListChecks, Star, Wallet, Clock, HeartPulse } from "lucide-react";
import { motion } from "motion/react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Reveal } from "../components/Reveal";
import { useLang } from "../lib/i18n";
import { useConsultation } from "../lib/consultation";
import { getService } from "../lib/services-data";

export const Route = createFileRoute("/service/$id")({
  loader: ({ params }) => {
    const service = getService(params.id);
    if (!service) throw notFound();
    return { id: params.id };
  },
  component: ServicePage,
  notFoundComponent: ServiceNotFound,
});

function ServicePage() {
  const { id } = useParams({ from: "/service/$id" });
  const { t, lang } = useLang();
  const { open } = useConsultation();
  const service = getService(id);

  if (!service) return <ServiceNotFound />;
  const c = service[lang];

  const sections = [
    { icon: Sparkles, title: t.service.science, body: c.science },
    { icon: ListChecks, title: t.service.ritual, body: c.ritual },
    { icon: Star, title: t.service.outcome, body: c.outcome },
  ];

  const meta = [
    { icon: Wallet, label: t.service.price, value: c.price },
    { icon: Clock, label: t.service.duration, value: c.duration },
    { icon: HeartPulse, label: t.service.recovery, value: c.recovery },
  ];

  return (
    <div className="min-h-screen bg-alabaster">
      <Navbar />

      <section className="relative flex min-h-[62vh] items-end overflow-hidden">
        <img src={service.image} alt={c.name} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navydark/85 via-navydark/40 to-navydark/20" />
        <div className="relative mx-auto w-full max-w-[1240px] px-5 pb-14 pt-28 sm:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-alabaster/80 transition-colors hover:text-alabaster"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.service.back}
          </Link>
          <motion.h1
            className="mt-5 max-w-2xl font-display text-4xl text-alabaster sm:text-5xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {c.name}
          </motion.h1>
          <p className="mt-3 max-w-xl text-[15px] text-alabaster/80">{c.tagline}</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-10">
            {sections.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-greige/30 text-navy">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <h2 className="font-display text-2xl text-navy">{s.title}</h2>
                  </div>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted-ink">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="sticky top-24 rounded-2xl border border-border bg-white p-7 shadow-soft">
              <div className="space-y-5">
                {meta.map((m) => (
                  <div key={m.label} className="flex items-center gap-3.5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-alabaster">
                      <m.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-ink">{m.label}</p>
                      <p className="mt-0.5 font-display text-lg text-navy">{m.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => open(service.id)}
                className="mt-7 w-full rounded-full bg-navy py-3.5 text-sm font-semibold text-alabaster transition-all hover:bg-navydark"
              >
                {t.service.cta}
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ServiceNotFound() {
  const { t } = useLang();
  return (
    <div className="min-h-screen bg-alabaster">
      <Navbar />
      <div className="mx-auto flex min-h-[70vh] max-w-[1240px] flex-col items-center justify-center px-5 text-center">
        <h1 className="font-display text-4xl text-navy">404</h1>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-alabaster hover:bg-navydark"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.service.back}
        </Link>
      </div>
      <Footer />
    </div>
  );
}
