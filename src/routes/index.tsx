import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Phone, Clock, MapPin, Globe, ArrowRight, Star, ShieldCheck, HeartPulse } from "lucide-react";
import heroImg from "../assets/hero.jpg";
import consultImg from "../assets/consultation.jpg";
import { services } from "../lib/services-data";
import { ConsultationForm } from "../components/ConsultationForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LOR Clinic — 24/7 Luxury ENT Care in Tashkent" },
      {
        name: "description",
        content:
          "Premium round-the-clock ENT (Otolaryngology) clinic on Babur Street, Tashkent. Expert care for adults, children, families and emergencies. Russian & Uzbek.",
      },
      { property: "og:title", content: "LOR Clinic — 24/7 Luxury ENT Care in Tashkent" },
      {
        property: "og:description",
        content: "Expert ear, nose and throat care, available 24 hours a day in Tashkent.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          name: "LOR Clinic",
          medicalSpecialty: "Otolaryngologic",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Babur Street",
            addressLocality: "Tashkent",
            addressCountry: "UZ",
          },
          telephone: "+998950955050",
          openingHours: "Mo-Su 00:00-23:59",
          availableLanguage: ["Russian", "Uzbek"],
        }),
      },
    ],
  }),
  component: Home,
});

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={heroImg}
          alt="Luxurious interior of LOR ENT clinic in Tashkent"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start px-6 py-28 md:py-40">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold backdrop-blur"
          >
            <Clock className="h-3.5 w-3.5" /> Open 24 hours · Every day
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.05] text-primary-foreground md:text-7xl"
          >
            Exceptional <span className="text-gradient-gold">ENT care</span>, the moment you need it.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-primary-foreground/80"
          >
            A premium ear, nose & throat clinic in the heart of Tashkent — for adults, children,
            families, expats and emergencies. Always open. Always attentive.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="tel:+998950955050"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-luxe transition-transform hover:scale-[1.04]"
            >
              <Phone className="h-4 w-4" /> +998 95 095 50 50
            </a>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/5 px-7 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-primary-foreground/15"
            >
              Explore services <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick info bar */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-px md:grid-cols-4">
          {[
            { icon: Clock, t: "24/7 Availability", s: "Care that never closes" },
            { icon: MapPin, t: "Babur Street", s: "Central Tashkent" },
            { icon: Phone, t: "+998 95 095 50 50", s: "Speak to us anytime" },
            { icon: Globe, t: "Русский · Oʻzbek", s: "Spoken fluently" },
          ].map((i) => (
            <div key={i.t} className="flex items-start gap-3 px-6 py-7">
              <i.icon className="mt-1 h-5 w-5 shrink-0 text-gold" />
              <div>
                <p className="font-semibold text-foreground">{i.t}</p>
                <p className="text-sm text-muted-foreground">{i.s}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About teaser */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:grid-cols-2">
        <motion.div {...fadeUp}>
          <img
            src={consultImg}
            alt="ENT specialist consulting a patient at LOR Clinic"
            width={1280}
            height={1280}
            loading="lazy"
            className="rounded-2xl shadow-luxe"
          />
        </motion.div>
        <motion.div {...fadeUp}>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Who we are
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold text-foreground md:text-5xl">
            World-class otolaryngology, with a human touch.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            LOR Clinic brings together leading ENT specialists, advanced diagnostics and a calm,
            luxurious environment. From routine check-ups to urgent emergencies, our team delivers
            precise, compassionate care for every patient — at any hour.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { icon: ShieldCheck, t: "Trusted experts" },
              { icon: HeartPulse, t: "Patient-first care" },
              { icon: Star, t: "5-star comfort" },
            ].map((i) => (
              <div key={i.t} className="rounded-xl border border-border bg-card p-4 text-center shadow-card">
                <i.icon className="mx-auto h-6 w-6 text-gold" />
                <p className="mt-2 text-sm font-semibold text-foreground">{i.t}</p>
              </div>
            ))}
          </div>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold"
          >
            More about the clinic <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>

      {/* Services */}
      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Our services
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-foreground md:text-5xl">
              Complete ear, nose & throat care
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A full spectrum of ENT services for adults and children, delivered with precision and
              warmth.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, idx) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (idx % 4) * 0.08 }}
                className="group rounded-2xl border border-border bg-card p-7 shadow-card transition-transform hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-primary/10 text-primary transition-colors group-hover:from-gold group-hover:to-gold group-hover:text-gold-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary py-24 text-center text-primary-foreground">
        <div className="mx-auto max-w-3xl px-6">
          <motion.h2 {...fadeUp} className="font-display text-4xl font-semibold md:text-5xl">
            Need an ENT specialist now?
          </motion.h2>
          <motion.p {...fadeUp} className="mx-auto mt-5 max-w-xl text-lg text-primary-foreground/80">
            Day or night, our doctors are ready. Call us or visit our clinic on Babur Street,
            Tashkent.
          </motion.p>
          <motion.div {...fadeUp} className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+998950955050"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-luxe transition-transform hover:scale-[1.04]"
            >
              <Phone className="h-4 w-4" /> Call +998 95 095 50 50
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Find us <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <div className="mx-auto mt-12 max-w-md text-left">
            <ConsultationForm />
          </div>
        </div>
      </section>
    </>
  );
}
