import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Users, Baby, Plane, Building2, ShieldCheck, Clock, Award, HeartHandshake } from "lucide-react";
import consultImg from "../assets/consultation.jpg";

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

const audiences = [
  { icon: Users, t: "Adults & Families", s: "Comprehensive ENT care for every member of your family." },
  { icon: Baby, t: "Children", s: "Gentle, specialised pediatric ENT in a reassuring setting." },
  { icon: Plane, t: "Expats & Tourists", s: "English-friendly assistance with care in Russian & Uzbek." },
  { icon: Building2, t: "Corporate Clients", s: "Priority appointments and tailored care for organisations." },
];

const values = [
  { icon: Clock, t: "Always Open", s: "True 24/7 availability — including nights, weekends and holidays." },
  { icon: ShieldCheck, t: "Clinical Excellence", s: "Experienced specialists and modern diagnostic technology." },
  { icon: Award, t: "Luxury Comfort", s: "A calm, refined environment designed around your wellbeing." },
  { icon: HeartHandshake, t: "Compassion", s: "Every patient is treated with respect, patience and care." },
];

function AboutPage() {
  return (
    <>
      <section className="bg-primary py-24 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            About us
          </span>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold md:text-6xl">
            A new standard of ENT care in Tashkent
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">
            LOR Clinic was founded on a simple belief: exceptional ear, nose and throat care should
            be available whenever you need it — delivered with the warmth, precision and comfort you
            deserve.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:grid-cols-2">
        <motion.img
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          src={consultImg}
          alt="ENT specialist with a patient at LOR Clinic Tashkent"
          width={1280}
          height={1280}
          loading="lazy"
          className="rounded-2xl shadow-luxe"
        />
        <div>
          <h2 className="font-display text-4xl font-semibold text-foreground">Care that never sleeps</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Located on Babur Street in central Tashkent, our clinic combines a team of leading
            otolaryngologists with advanced in-house diagnostics. Whether it's a routine check-up or
            a midnight emergency, you'll be seen by an expert who genuinely cares.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            We proudly serve our community in both Russian and Uzbek, and welcome expats and tourists
            with attentive, friendly support.
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center font-display text-4xl font-semibold text-foreground">
            Who we care for
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((a, idx) => (
              <motion.div
                key={a.t}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (idx % 4) * 0.08 }}
                className="rounded-2xl border border-border bg-card p-7 shadow-card"
              >
                <a.icon className="h-7 w-7 text-gold" />
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{a.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.s}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-center font-display text-4xl font-semibold text-foreground">
          What sets us apart
        </h2>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, idx) => (
            <motion.div
              key={v.t}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (idx % 4) * 0.08 }}
              className="rounded-2xl border border-border bg-card p-7 text-center shadow-card"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-primary/10 text-primary">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.s}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
