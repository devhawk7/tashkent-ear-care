import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, UserPlus, BadgeCheck, Search, Handshake } from "lucide-react";
import { SiteLayout } from "../components/SiteLayout";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How it works — Ventra.uz" },
      { name: "description", content: "From building your profile to closing your round — see how Ventra connects founders and investors across the CIS in weeks, not months." },
      { property: "og:title", content: "How it works — Ventra.uz" },
      { property: "og:description", content: "From pitch to term sheet in weeks, not months." },
    ],
    links: [{ rel: "canonical", href: "/how-it-works" }],
  }),
  component: HowItWorks,
});

const steps = [
  { icon: UserPlus, n: "01", title: "Build your profile", desc: "Create a compelling startup or investor profile with your story, metrics, traction, and a pitch deck. It takes minutes, not days." },
  { icon: BadgeCheck, n: "02", title: "Get verified", desc: "Our team reviews your profile within 48 hours. Verified profiles earn trust and receive 4× more interest from the other side of the table." },
  { icon: Search, n: "03", title: "Discover the right match", desc: "Browse and filter by stage, industry, ticket size, and geography. Our matching surfaces the people most relevant to you." },
  { icon: Handshake, n: "04", title: "Connect and close", desc: "Request warm introductions, share your data room securely, and move from first conversation to term sheet in weeks." },
];

function HowItWorks() {
  return (
    <SiteLayout>
      <section className="bg-navy py-24 text-white">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal>
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-brandhover/90">How it works</p>
            <h1 className="mt-3 max-w-3xl text-[40px] font-bold leading-[1.1] tracking-[-0.8px] sm:text-[52px]">
              From pitch to term sheet in weeks, not months
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/55">
              Ventra removes the friction from fundraising in the CIS — a transparent, trust-first path for founders and investors.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1000px] px-6 py-24">
        <div className="space-y-6">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <div className="flex flex-col gap-5 rounded-2xl border border-gray200 bg-white p-8 sm:flex-row sm:items-center">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent text-brand">
                  <s.icon className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-gray400">{s.n}</span>
                    <h2 className="text-xl font-bold text-navy">{s.title}</h2>
                  </div>
                  <p className="mt-2 text-gray600">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-navy p-12 text-center text-white">
          <h2 className="text-3xl font-bold tracking-tight">Ready to get started?</h2>
          <p className="mx-auto mt-3 max-w-md text-white/55">Create your profile and join the CIS region's trusted fundraising network.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/signup" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-navy transition-transform hover:-translate-y-0.5">
              Get started <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/startups" className="rounded-xl border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">Browse startups</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
