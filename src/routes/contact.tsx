import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Globe } from "lucide-react";
import { ClinicMap } from "../components/ClinicMap";
import { useLang } from "../lib/i18n";


export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact LOR Clinic — 24/7 ENT, Babur Street Tashkent" },
      {
        name: "description",
        content:
          "Contact LOR Clinic, the 24/7 ENT clinic on Babur Street, Tashkent. Call +998 95 095 50 50 anytime. Care in Russian and Uzbek for adults, children and emergencies.",
      },
      { property: "og:title", content: "Contact LOR Clinic — 24/7 ENT Tashkent" },
      {
        property: "og:description",
        content: "Reach our ENT specialists any time of day or night. Babur Street, Tashkent.",
      },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const details = [
  { icon: Phone, t: "Phone", v: "+998 95 095 50 50", href: "tel:+998950955050" },
  { icon: MapPin, t: "Address", v: "Babur Street, Tashkent, Uzbekistan" },
  { icon: Clock, t: "Hours", v: "Open 24 hours · 7 days a week" },
  { icon: Globe, t: "Languages", v: "Русский · Oʻzbek" },
];

function ContactPage() {
  return (
    <>
      <section className="bg-primary py-24 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Get in touch
          </span>
          <h1 className="mt-4 max-w-2xl font-display text-5xl font-semibold md:text-6xl">
            We're here for you, 24/7
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/80">
            Call us, or visit our clinic on Babur Street in central Tashkent. Our team is ready to
            help at any hour.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="grid gap-5 sm:grid-cols-2">
            {details.map((d) => (
              <div key={d.t} className="rounded-2xl border border-border bg-card p-7 shadow-card">
                <d.icon className="h-7 w-7 text-gold" />
                <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {d.t}
                </p>
                {d.href ? (
                  <a href={d.href} className="mt-1 block text-lg font-semibold text-foreground hover:text-gold">
                    {d.v}
                  </a>
                ) : (
                  <p className="mt-1 text-lg font-semibold text-foreground">{d.v}</p>
                )}
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-secondary/50 p-8">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              ENT emergency?
            </h2>
            <p className="mt-2 text-muted-foreground">
              Don't wait. Our specialists are on duty around the clock.
            </p>
            <a
              href="tel:+998950955050"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-luxe transition-transform hover:scale-[1.04]"
            >
              <Phone className="h-4 w-4" /> Call now
            </a>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="font-display text-3xl font-semibold text-foreground">Find us &amp; get directions</h2>
          <p className="mt-2 max-w-xl text-muted-foreground">
            We're on Babur Street in central Tashkent. Choose a starting point for driving
            directions.
          </p>
          <div className="mt-8">
            <ClinicMap />
          </div>
        </div>
      </section>
    </>
  );
}

