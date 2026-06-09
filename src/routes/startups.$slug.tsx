import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Heart, ArrowRight, Lock, Globe } from "lucide-react";
import { toast } from "sonner";
import { SiteLayout } from "../components/SiteLayout";
import { StageBadge, VerifiedBadge, Pill } from "../components/Badges";
import { startups } from "../lib/data";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45Z" />
    </svg>
  );
}

export const Route = createFileRoute("/startups/$slug")({
  head: ({ params }) => {
    const s = startups.find((x) => x.slug === params.slug);
    return {
      meta: [
        { title: s ? `${s.name} — ${s.tagline} | Ventra.uz` : "Startup — Ventra.uz" },
        { name: "description", content: s ? `${s.name}: ${s.description.slice(0, 150)}` : "Startup profile on Ventra.uz" },
        { property: "og:title", content: s ? `${s.name} — Ventra.uz` : "Ventra.uz" },
        { property: "og:description", content: s?.tagline ?? "" },
      ],
    };
  },
  loader: ({ params }) => {
    const s = startups.find((x) => x.slug === params.slug);
    if (!s) throw notFound();
    return s;
  },
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-[1200px] px-6 py-32 text-center">
        <h1 className="text-2xl font-bold text-navy">Startup not found</h1>
        <Link to="/startups" className="mt-4 inline-block text-brand">Back to startups</Link>
      </div>
    </SiteLayout>
  ),
  component: StartupProfile,
});

function StartupProfile() {
  const s = Route.useLoaderData();

  return (
    <SiteLayout>
      <div className="bg-gray50 pb-20 pt-8">
        <div className="mx-auto grid max-w-[1200px] gap-6 px-6 lg:grid-cols-[1fr_360px]">
          {/* LEFT */}
          <div className="space-y-6">
            <Card>
              <div className="flex flex-wrap items-start gap-4">
                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${s.gradient} text-lg font-bold text-white`}>{s.initials}</div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h1 className="text-[28px] font-bold tracking-tight text-navy">{s.name}</h1>
                    {s.verified && <VerifiedBadge />}
                  </div>
                  <p className="mt-1 text-gray600">{s.tagline}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <StageBadge stage={s.stage} />
                <Pill>{s.industry}</Pill>
                <Pill>{s.city}, {s.country}</Pill>
                <Pill>Founded {s.founded}</Pill>
              </div>
              <p className="mt-4 text-[17px] leading-relaxed text-gray600">{s.description}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <button onClick={() => toast.success("Introduction request sent!")} className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brandhover hover:-translate-y-0.5">
                  Request introduction <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => toast("Saved to your watchlist")} className="inline-flex items-center gap-2 rounded-xl border border-gray200 px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-gray50">
                  <Heart className="h-4 w-4" /> Save startup
                </button>
              </div>
            </Card>

            <Card>
              <SectionLabel>Problem &amp; Solution</SectionLabel>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-danger">Problem</p>
                  <p className="mt-2 text-sm leading-relaxed text-gray600">{s.problem}</p>
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-success">Solution</p>
                  <p className="mt-2 text-sm leading-relaxed text-gray600">{s.solution}</p>
                </div>
              </div>
            </Card>

            <Card>
              <SectionLabel>Market Opportunity</SectionLabel>
              <div className="grid gap-4 sm:grid-cols-3">
                {[{ l: "TAM", v: s.tam }, { l: "SAM", v: s.sam }, { l: "SOM", v: s.som }].map((m) => (
                  <div key={m.l} className="rounded-2xl bg-navy p-6 text-white">
                    <p className="text-xs text-white/55">{m.l}</p>
                    <p className="mt-1 text-3xl font-bold">{m.v}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <SectionLabel>Traction</SectionLabel>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {s.traction.map((t: typeof s.traction[number]) => (
                  <div key={t.label}>
                    <p className="text-[11px] font-bold uppercase tracking-[0.06em] text-gray400">{t.label}</p>
                    <p className="mt-1 text-xl font-bold text-navy">{t.value}</p>
                    <p className={`text-xs font-semibold ${t.up ? "text-success" : "text-danger"}`}>{t.up ? "↑" : "↓"} {t.trend}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <SectionLabel>Team</SectionLabel>
              <div className="grid gap-4 sm:grid-cols-2">
                {s.team.map((m: typeof s.team[number]) => (
                  <div key={m.name} className="flex items-center gap-3 rounded-xl border border-gray100 p-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-sm font-bold text-navy">{m.initials}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-bold text-navy">{m.name}</p>
                        {m.founder && <span className="rounded bg-accent px-1.5 py-0.5 text-[10px] font-semibold text-brand">Founder</span>}
                      </div>
                      <p className="text-xs text-gray400">{m.role}</p>
                    </div>
                    <LinkedinIcon className="h-4 w-4 text-gray400" />
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <SectionLabel>Pitch Deck</SectionLabel>
              <div className="relative overflow-hidden rounded-2xl border border-gray200">
                <div className="flex aspect-[16/9] items-center justify-center bg-gray100 blur-[2px]">
                  <span className="text-gray400">Pitch deck preview</span>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-white/60 backdrop-blur-sm">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white"><Lock className="h-5 w-5" /></span>
                  <button onClick={() => toast.success("Access requested — you'll be notified.")} className="rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white">Request access to view full deck</button>
                </div>
              </div>
            </Card>
          </div>

          {/* RIGHT */}
          <div className="space-y-6 lg:sticky lg:top-[84px] lg:self-start">
            <Card>
              <p className="text-sm text-gray400">Raising</p>
              <p className="mt-1 text-[32px] font-extrabold tracking-tight text-navy">{s.ask}</p>
              <div className="mt-4">
                <div className="h-2 overflow-hidden rounded-full bg-gray100">
                  <div className="h-full rounded-full bg-brand" style={{ width: `${s.committedPct}%` }} />
                </div>
                <div className="mt-2 flex justify-between text-xs">
                  <span className="font-semibold text-brand">{s.committedPct}% committed</span>
                  <span className="text-gray400">Goal {s.ask}</span>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[0, 1, 2, 3].map((i) => (
                    <span key={i} className="h-7 w-7 rounded-full border-2 border-white bg-gradient-to-br from-brand to-brandhover text-[10px] font-bold text-white" />
                  ))}
                </div>
                <span className="text-sm text-gray600">{s.investorsInterested} investors interested</span>
              </div>
              <button onClick={() => toast.success("Introduction request sent!")} className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand text-sm font-semibold text-white transition-colors hover:bg-brandhover">
                Request introduction
              </button>
              <button onClick={() => toast("Saved to watchlist")} className="mt-2 flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-gray200 text-sm font-semibold text-navy hover:bg-gray50">
                Save to watchlist
              </button>
            </Card>

            <Card>
              <p className="mb-3 text-sm font-bold text-navy">Quick facts</p>
              <dl className="divide-y divide-gray100 text-sm">
                <Fact k="Industry" v={s.industry} />
                <Fact k="Stage" v={s.stage} />
                <Fact k="Location" v={`${s.city}, ${s.country}`} />
                <Fact k="Founded" v={String(s.founded)} />
                <Fact k="Team size" v={String(s.teamSize)} />
                <Fact k="Website" v={s.website} icon />
              </dl>
            </Card>

            <Card>
              <p className="text-sm font-bold text-navy">Investor interest</p>
              <Sparkline />
              <p className="mt-2 text-sm text-gray600"><span className="font-bold text-navy">{s.views.toLocaleString()}</span> profile views this month</p>
            </Card>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-2xl border border-gray200 bg-white p-6 sm:p-8">{children}</div>;
}
function SectionLabel({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-4 text-lg font-bold text-navy">{children}</h2>;
}
function Fact({ k, v, icon }: { k: string; v: string; icon?: boolean }) {
  return (
    <div className="flex items-center justify-between py-2.5">
      <dt className="text-gray400">{k}</dt>
      <dd className="flex items-center gap-1.5 font-medium text-navy">{icon && <Globe className="h-3.5 w-3.5 text-gray400" />}{v}</dd>
    </div>
  );
}
function Sparkline() {
  const pts = [8, 14, 11, 20, 18, 28, 24, 34, 30, 42];
  const max = Math.max(...pts);
  const d = pts.map((p, i) => `${(i / (pts.length - 1)) * 100},${40 - (p / max) * 36}`).join(" ");
  return (
    <svg viewBox="0 0 100 40" className="mt-3 h-16 w-full" preserveAspectRatio="none">
      <polyline points={d} fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
