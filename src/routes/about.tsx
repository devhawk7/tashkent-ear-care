import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Users, Baby, Plane, Building2, ShieldCheck, Clock, Award, HeartHandshake } from "lucide-react";
import consultImg from "../assets/consultation.jpg";
import { useLang } from "../lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About LOR Clinic — 24/7 ENT Specialists in Tashkent" },
      {
        name: "description",
        content:
          "Learn about LOR Clinic, a premium 24/7 ENT clinic in Tashkent serving adults, children, families, expats, tourists and corporate clients in Russian and Uzbek.",
      },
      { property: "og:title", content: "About LOR Clinic — ENT Specialists in Tashkent" },
      {
        property: "og:description",
        content: "A luxury ENT clinic dedicated to round-the-clock, patient-first care in Tashkent.",
      },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const audienceIcons = [Users, Baby, Plane, Building2];
const valueIcons = [Clock, ShieldCheck, Award, HeartHandshake];

function AboutPage() {
  const { t } = useLang();

  return (
    <>
      <section className="bg-primary py-24 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            {t.about.eyebrow}
          </span>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold md:text-6xl">
            {t.about.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">{t.about.intro}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:grid-cols-2">
        <motion.img
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          src={consultImg}
          alt="LOR Clinic luxury ENT interior in Tashkent"
          width={1280}
          height={1280}
          loading="lazy"
          className="rounded-2xl shadow-luxe"
        />
        <div>
          <h2 className="font-display text-4xl font-semibold text-foreground">{t.about.careTitle}</h2>
          <p className="mt-6 text-lg text-muted-foreground">{t.about.careBody1}</p>
          <p className="mt-4 text-lg text-muted-foreground">{t.about.careBody2}</p>
        </div>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center font-display text-4xl font-semibold text-foreground">
            {t.about.audiencesTitle}
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.about.audiences.map((a, idx) => {
              const Icon = audienceIcons[idx];
              return (
                <motion.div
                  key={a.t}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: (idx % 4) * 0.08 }}
                  className="rounded-2xl border border-border bg-card p-7 shadow-card"
                >
                  <Icon className="h-7 w-7 text-gold" />
                  <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{a.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{a.s}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-center font-display text-4xl font-semibold text-foreground">
          {t.about.apartTitle}
        </h2>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.about.values.map((v, idx) => {
            const Icon = valueIcons[idx];
            return (
              <motion.div
                key={v.t}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (idx % 4) * 0.08 }}
                className="rounded-2xl border border-border bg-card p-7 text-center shadow-card"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.s}</p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}
