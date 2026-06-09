import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ShieldCheck, Scale, Zap, Users, Languages, Briefcase, ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "../components/SiteLayout";
import { Reveal } from "../components/Reveal";
import { StartupCard, InvestorCard } from "../components/Cards";
import { startups, investors, trustedLogos, testimonials } from "../lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ventra.uz — Where great startups meet smart capital" },
      {
        name: "description",
        content:
          "Ventra connects Uzbekistan's most promising founders with investors who back the next generation of Central Asian tech. List your startup or join as an investor.",
      },
      { property: "og:title", content: "Ventra.uz — Where great startups meet smart capital" },
      {
        property: "og:description",
        content: "The CIS region's trusted startup-investor marketplace. 340+ startups, $28M connected.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: LandingPage,
});

const stats = [
  { value: "340+", label: "Startups listed" },
  { value: "$28M", label: "Capital connected" },
  { value: "120+", label: "Active investors" },
];

const steps = [
  { n: "01", title: "Build your profile", desc: "Tell your story with metrics, traction, and a pitch deck in minutes." },
  { n: "02", title: "Get verified", desc: "Our team reviews you within 48 hours. Verified startups get 4× more interest." },
  { n: "03", title: "Discover investors", desc: "Browse 120+ active investors and filter by stage, ticket size, and focus." },
  { n: "04", title: "Connect and close", desc: "Request warm introductions and move from pitch to term sheet in weeks." },
];

const benefits = [
  { icon: ShieldCheck, title: "Verified profiles only", desc: "Every startup and investor is vetted by our team before going live.", bg: "bg-accent", fg: "text-brand" },
  { icon: Scale, title: "Local legal & compliance", desc: "Built for CIS regulation, with templates and guidance for each market.", bg: "bg-successpale", fg: "text-success" },
  { icon: Zap, title: "Real-time deal analytics", desc: "See who viewed your deck, saved your profile, and where interest is building.", bg: "bg-[#fff7ed]", fg: "text-warning" },
  { icon: Users, title: "Warm introductions", desc: "No cold outreach. Connections happen through mutual interest and intros.", bg: "bg-[#f5f3ff]", fg: "text-[#7c3aed]" },
  { icon: Languages, title: "Multilingual platform", desc: "Work in English, Russian, or Uzbek — your investors do too.", bg: "bg-[#f0fdfa]", fg: "text-[#0d9488]" },
  { icon: Briefcase, title: "Secure data room", desc: "Share decks and documents with granular, revocable access control.", bg: "bg-accent", fg: "text-brand" },
];

function LandingPage() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray50">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 py-20 lg:grid-cols-[55fr_45fr] lg:py-28">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1.5 text-[12px] font-semibold uppercase tracking-wide text-brand"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              Now live in Uzbekistan &amp; CIS
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-[44px] font-bold leading-[1.08] tracking-[-1.5px] text-navy sm:text-[56px] lg:text-[64px]"
            >
              Where great startups meet <span className="text-brand">smart capital</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-gray600"
            >
              Ventra connects Uzbekistan's most promising founders with investors who back the next
              generation of Central Asian tech.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link to="/signup" className="inline-flex items-center gap-2 rounded-xl bg-brand px-7 py-3.5 text-[15px] font-semibold text-white shadow-medium transition-all hover:bg-brandhover hover:-translate-y-0.5">
                List your startup <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/investors" className="inline-flex items-center rounded-xl border border-gray200 bg-white px-7 py-3.5 text-[15px] font-semibold text-navy transition-all hover:bg-gray50 hover:-translate-y-0.5">
                I'm an investor
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-9 grid max-w-md grid-cols-3 gap-4 border-t border-gray200 pt-9"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold text-navy">{s.value}</p>
                  <p className="mt-0.5 text-[13px] text-gray400">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <HeroVisual />
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="border-y border-gray100 bg-gray50 py-12">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-gray400">
            Trusted by founders and investors across the region
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {trustedLogos.map((logo) => (
              <span key={logo} className="text-sm font-bold text-gray400 transition-colors hover:text-navylight">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED STARTUPS */}
      <section className="mx-auto max-w-[1200px] px-6 py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-brand">Featured startups</p>
              <h2 className="mt-2 text-[32px] font-bold tracking-[-0.5px] text-navy">Startups raising now</h2>
              <p className="mt-2 text-gray600">Verified founders actively raising on Ventra this month.</p>
            </div>
            <Link to="/startups" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brandhover">
              View all 340+ startups <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {startups.slice(0, 3).map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.08}>
              <StartupCard s={s} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-navy py-24 text-white">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal>
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-brandhover/90">How it works</p>
            <h2 className="mt-2 max-w-2xl text-[32px] font-bold tracking-[-0.5px]">
              From pitch to term sheet in weeks, not months
            </h2>
            <p className="mt-2 max-w-xl text-white/55">
              A focused, transparent path from listing your startup to closing your round.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div className="space-y-3">
              {steps.map((step, i) => {
                const active = activeStep === i;
                return (
                  <button
                    key={step.n}
                    onClick={() => setActiveStep(i)}
                    className={`flex w-full gap-4 rounded-2xl border p-5 text-left transition-all ${
                      active ? "border-white/15 bg-white/[0.05]" : "border-transparent hover:bg-white/[0.03]"
                    }`}
                  >
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] text-sm font-bold ${
                      active ? "bg-brand text-white" : "border border-white/10 text-white/70"
                    }`}>
                      {step.n}
                    </span>
                    <div>
                      <p className="font-semibold">{step.title}</p>
                      <p className="mt-1 text-sm text-white/55">{step.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="rounded-3xl border border-white/[0.08] bg-white/[0.04] p-8 sm:p-10">
              <p className="text-sm text-white/55">Profile completeness</p>
              <div className="mt-2 flex items-center gap-3">
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                  <motion.div className="h-full rounded-full bg-brand" initial={{ width: 0 }} whileInView={{ width: "82%" }} viewport={{ once: true }} transition={{ duration: 0.8 }} />
                </div>
                <span className="text-sm font-bold">82%</span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/[0.05] p-5">
                  <p className="text-xs text-white/50">Profile views</p>
                  <p className="mt-1 text-2xl font-bold">1,284</p>
                  <p className="text-xs font-semibold text-success">↑ 34% this week</p>
                </div>
                <div className="rounded-2xl bg-white/[0.05] p-5">
                  <p className="text-xs text-white/50">Interested</p>
                  <p className="mt-1 text-2xl font-bold">12</p>
                  <p className="text-xs text-white/50">investors</p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  { c: "#2563eb", t: "Samarkand Ventures viewed your deck", time: "2m" },
                  { c: "#22c55e", t: "New connection request received", time: "1h" },
                  { c: "#f59e0b", t: "Silk Road Capital saved your profile", time: "3h" },
                ].map((a) => (
                  <div key={a.t} className="flex items-center gap-3 text-sm">
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: a.c }} />
                    <span className="text-white/70">{a.t}</span>
                    <span className="ml-auto text-xs text-white/35">{a.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-[1200px] px-6 py-24">
        <Reveal>
          <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-brand">Why Ventra</p>
          <h2 className="mt-2 text-[32px] font-bold tracking-[-0.5px] text-navy">Built for the CIS market</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) * 0.08}>
              <div className="h-full rounded-2xl border border-gray200 p-8 transition-all hover:-translate-y-0.5 hover:shadow-medium">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${b.bg} ${b.fg}`}>
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray600">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* INVESTOR NETWORK */}
      <section className="bg-gray50 py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal>
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-brand">Investor network</p>
            <h2 className="mt-2 text-[32px] font-bold tracking-[-0.5px] text-navy">Active investors on Ventra</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {investors.slice(0, 4).map((inv, i) => (
              <Reveal key={inv.slug} delay={(i % 4) * 0.08}>
                <InvestorCard inv={inv} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-brand py-20">
        <div className="mx-auto grid max-w-[900px] grid-cols-2 gap-y-10 px-6 md:grid-cols-4">
          {[
            { v: "340+", l: "Startups verified" },
            { v: "$28M", l: "Capital connected" },
            { v: "120+", l: "Active investors" },
            { v: "14", l: "Countries in CIS" },
          ].map((s, i) => (
            <div key={s.l} className={`px-4 text-center ${i > 0 ? "md:border-l md:border-white/20" : ""}`}>
              <p className="text-[44px] font-extrabold tracking-[-1.5px] text-white">{s.v}</p>
              <p className="mt-1 text-sm text-white/70">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-[1200px] px-6 py-24">
        <Reveal>
          <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-brand">Founder stories</p>
          <h2 className="mt-2 text-[32px] font-bold tracking-[-0.5px] text-navy">Startups that found their match</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-gray200 p-8">
                <div className="flex gap-0.5 text-warning">{"★★★★★"}</div>
                <p className="mt-4 text-[15px] italic leading-relaxed text-gray600">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} text-xs font-bold text-white`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-navy">{t.name}</p>
                    <p className="text-xs text-gray400">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-24">
        <div className="mx-auto max-w-[700px] px-6 text-center">
          <Reveal>
            <h2 className="text-[40px] font-bold tracking-[-1px] text-white sm:text-[48px]">
              Ready to find your next investor?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/55">
              Join 340+ startups raising on Ventra and get discovered by investors across the CIS.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/signup" className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[15px] font-bold text-navy transition-transform hover:-translate-y-0.5">
                Create your startup profile <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/signup" className="inline-flex items-center rounded-xl border border-white/25 px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/10">
                I'm an investor — get access
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

function HeroVisual() {
  const front = startups[0];
  return (
    <div className="relative mx-auto hidden h-[440px] w-full max-w-[420px] lg:block">
      {/* back cards */}
      <div className="absolute left-8 top-6 h-[320px] w-[320px] rotate-6 rounded-2xl border border-gray200 bg-white shadow-subtle" />
      <div className="absolute left-4 top-3 h-[320px] w-[320px] rotate-3 rounded-2xl border border-gray200 bg-white shadow-subtle" />

      {/* front card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute left-0 top-0 w-[340px] rounded-2xl border border-gray200 bg-white p-6 shadow-large"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`flex h-10 w-10 items-center justify-center rounded-[10px] bg-gradient-to-br ${front.gradient} text-sm font-bold text-white`}>
              {front.initials}
            </div>
            <div>
              <p className="text-sm font-bold text-navy">{front.name}</p>
              <p className="text-xs text-gray400">{front.industry} · {front.city}</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-successpale px-2 py-0.5 text-[11px] font-semibold text-[#15803d]">✓ Verified</span>
        </div>
        <div className="my-4 h-px bg-gray100" />
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div><p className="text-xs text-gray400">Funding ask</p><p className="font-bold text-navy">{front.ask}</p></div>
          <div><p className="text-xs text-gray400">Stage</p><p className="font-bold text-brand">{front.stage}</p></div>
          <div><p className="text-xs text-gray400">MRR</p><p className="font-bold text-navy">{front.mrr}</p></div>
          <div><p className="text-xs text-gray400">Growth MoM</p><p className="font-bold text-success">{front.growth}</p></div>
        </div>
        <div className="mt-4">
          <div className="h-2 overflow-hidden rounded-full bg-gray100">
            <div className="h-full rounded-full bg-success" style={{ width: `${front.committedPct}%` }} />
          </div>
          <div className="mt-2 flex justify-between text-xs">
            <span className="text-gray400">{front.committedPct}% of ask committed</span>
            <span className="font-semibold text-brand">{front.investorsInterested} interested</span>
          </div>
        </div>
      </motion.div>

      {/* floating notifications */}
      <motion.div
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute -left-2 top-[280px] flex w-[230px] items-center gap-3 rounded-xl border border-gray200 bg-white p-3 shadow-large"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-successpale text-success">✓</span>
        <div>
          <p className="text-xs font-bold text-navy">New connection request</p>
          <p className="text-[11px] text-gray400">Samarkand Ventures · $50K–200K</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute right-0 top-[-10px] flex w-[210px] items-center gap-3 rounded-xl border border-gray200 bg-white p-3 shadow-large"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-brand">
          <Users className="h-4 w-4" />
        </span>
        <div>
          <p className="text-xs font-bold text-navy">Alisher Nazarov</p>
          <p className="text-[11px] text-gray400">Viewed your pitch deck</p>
        </div>
      </motion.div>
    </div>
  );
}
