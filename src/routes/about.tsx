import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "../components/SiteLayout";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ventra.uz" },
      { name: "description", content: "Ventra is building the trusted infrastructure for startup fundraising across Uzbekistan and the CIS — connecting founders with the capital and investors they deserve." },
      { property: "og:title", content: "About — Ventra.uz" },
      { property: "og:description", content: "Building the trusted fundraising infrastructure for the CIS." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { title: "Trust first", desc: "Every profile is verified. We protect both sides with transparency and accountability." },
  { title: "Local authority", desc: "Built in Tashkent, for the CIS — with deep knowledge of regional markets and regulation." },
  { title: "Founder obsessed", desc: "Fundraising should be focused and fair. We remove noise so the best companies get funded." },
];

const team = [
  { name: "Bobur Jurayev", role: "Co-founder & CEO", initials: "BJ", gradient: "from-[#2563eb] to-[#3b82f6]" },
  { name: "Dilnoza Saidova", role: "Co-founder & CTO", initials: "DS", gradient: "from-[#22c55e] to-[#16a34a]" },
  { name: "Rustam Tashmatov", role: "Head of Investor Relations", initials: "RT", gradient: "from-[#8b5cf6] to-[#6366f1]" },
  { name: "Nilufar Umarova", role: "Head of Community", initials: "NU", gradient: "from-[#ec4899] to-[#db2777]" },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="bg-gradient-to-b from-white to-gray50 py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal>
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-brand">About Ventra</p>
            <h1 className="mt-3 max-w-3xl text-[40px] font-bold leading-[1.1] tracking-[-0.8px] text-navy sm:text-[52px]">
              Building the trusted home for CIS fundraising
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-gray600">
              Ventra connects Uzbekistan's most promising founders with investors who understand the region.
              Our mission is to channel smart capital to the companies shaping Central Asia's future.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-gray200 p-8">
                <h2 className="text-lg font-bold text-navy">{v.title}</h2>
                <p className="mt-2 text-gray600">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 rounded-3xl bg-navy p-10 text-center text-white sm:grid-cols-4">
          {[
            { v: "340+", l: "Startups verified" },
            { v: "$28M", l: "Capital connected" },
            { v: "120+", l: "Active investors" },
            { v: "14", l: "Countries in CIS" },
          ].map((s) => (
            <div key={s.l}>
              <p className="text-3xl font-extrabold tracking-tight sm:text-4xl">{s.v}</p>
              <p className="mt-1 text-sm text-white/55">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-20">
        <Reveal>
          <h2 className="text-[32px] font-bold tracking-[-0.5px] text-navy">The team</h2>
          <p className="mt-2 text-gray600">Operators and investors who've built and backed companies across the region.</p>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={(i % 4) * 0.08}>
              <div className="rounded-2xl border border-gray200 p-6 text-center">
                <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${m.gradient} text-base font-bold text-white`}>{m.initials}</div>
                <p className="mt-4 text-sm font-bold text-navy">{m.name}</p>
                <p className="text-xs text-gray400">{m.role}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-accent p-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy">Join the network</h2>
          <p className="mx-auto mt-3 max-w-md text-gray600">Whether you're raising or investing, Ventra is where the right connections happen.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/signup" className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5">
              Get started <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/how-it-works" className="rounded-xl border border-gray200 bg-white px-6 py-3 text-sm font-semibold text-navy hover:bg-gray50">How it works</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
