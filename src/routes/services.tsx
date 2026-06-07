import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Phone } from "lucide-react";
import { services } from "../lib/services-data";
import { useLang } from "../lib/i18n";


export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "ENT Services — LOR Clinic Tashkent" },
      {
        name: "description",
        content:
          "Full range of ENT services at LOR Clinic Tashkent: ear care, sinus, throat & voice, pediatric ENT, emergency care, endoscopy, minor surgery and allergy testing. 24/7.",
      },
      { property: "og:title", content: "ENT Services — LOR Clinic Tashkent" },
      {
        property: "og:description",
        content: "Comprehensive ear, nose and throat services, available 24/7 in Tashkent.",
      },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useLang();

  return (
    <>
      <section className="bg-primary py-24 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            {t.services.eyebrow}
          </span>
          <h1 className="mt-4 max-w-2xl font-display text-5xl font-semibold md:text-6xl">
            {t.services.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/80">{t.services.intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => {
            const item = t.services.items[idx];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.08 }}
                className="group rounded-2xl border border-border bg-card p-8 shadow-card transition-transform hover:-translate-y-1"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-primary/10 text-primary transition-colors group-hover:from-gold group-hover:to-gold group-hover:text-gold-foreground">
                  <s.icon className="h-7 w-7" />
                </div>
                <h2 className="mt-6 font-display text-2xl font-semibold text-foreground">{item.title}</h2>
                <p className="mt-3 text-muted-foreground">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 rounded-2xl bg-secondary/50 p-10 text-center">
          <h2 className="font-display text-3xl font-semibold text-foreground">
            {t.services.notSureTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">{t.services.notSureBody}</p>
          <a
            href="tel:+998950955050"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:scale-[1.04]"
          >
            <Phone className="h-4 w-4" /> +998 95 095 50 50
          </a>
        </div>
      </section>
    </>
  );
}
