import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { SiteLayout } from "../components/SiteLayout";
import { VerifiedBadge, Pill, StageBadge } from "../components/Badges";
import { investors, stages, type Investor } from "../lib/data";

export const Route = createFileRoute("/investors/$slug")({
  head: ({ params }) => {
    const inv = investors.find((x) => x.slug === params.slug);
    return {
      meta: [
        { title: inv ? `${inv.name} — ${inv.fund} | Ventra.uz` : "Investor — Ventra.uz" },
        { name: "description", content: inv ? `${inv.name}, ${inv.fund}: ${inv.bio}` : "Investor profile on Ventra.uz" },
        { property: "og:title", content: inv ? `${inv.name} — Ventra.uz` : "Ventra.uz" },
        { property: "og:description", content: inv?.bio ?? "" },
      ],
    };
  },
  loader: ({ params }) => {
    const inv = investors.find((x) => x.slug === params.slug);
    if (!inv) throw notFound();
    return inv;
  },
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-[1200px] px-6 py-32 text-center">
        <h1 className="text-2xl font-bold text-navy">Investor not found</h1>
        <Link to="/investors" className="mt-4 inline-block text-brand">Back to investors</Link>
      </div>
    </SiteLayout>
  ),
  component: InvestorProfile,
});

function InvestorProfile() {
  const inv = Route.useLoaderData() as Investor;

  return (
    <SiteLayout>
      <div className="bg-gray50 pb-20 pt-8">
        <div className="mx-auto grid max-w-[1200px] gap-6 px-6 lg:grid-cols-[1fr_360px]">
          <div className="space-y-6">
            <Card>
              <div className="flex flex-wrap items-start gap-4">
                <div className={`flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br ${inv.gradient} text-2xl font-bold text-white`}>{inv.initials}</div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h1 className="text-[28px] font-bold tracking-tight text-navy">{inv.name}</h1>
                    {inv.verified && <VerifiedBadge />}
                  </div>
                  <p className="mt-0.5 text-gray600">{inv.fund}</p>
                  <p className="mt-0.5 text-sm text-gray400">{inv.location}</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-gray600">{inv.bio}</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <button onClick={() => toast.success("Connection request sent!")} className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brandhover hover:-translate-y-0.5">
                      Connect <ArrowRight className="h-4 w-4" />
                    </button>
                    <button onClick={() => toast("Now following")} className="rounded-xl border border-gray200 px-5 py-2.5 text-sm font-semibold text-navy hover:bg-gray50">Follow</button>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <SectionLabel>Investment thesis</SectionLabel>
              <p className="text-[15px] leading-relaxed text-gray600">{inv.thesis}</p>
            </Card>

            <Card>
              <SectionLabel>Preferred portfolio</SectionLabel>
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.08em] text-gray400">Stages</p>
              <div className="flex flex-wrap gap-2">
                {stages.map((st) => {
                  const on = inv.stages.includes(st);
                  return <span key={st} className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${on ? "bg-accent text-brand" : "bg-secondary text-gray400"}`}>{st}</span>;
                })}
              </div>
              <p className="mb-2 mt-5 text-[11px] font-bold uppercase tracking-[0.08em] text-gray400">Industries</p>
              <div className="flex flex-wrap gap-2">
                {inv.industries.map((i) => <Pill key={i}>{i}</Pill>)}
              </div>
            </Card>

            <Card>
              <SectionLabel>Portfolio companies</SectionLabel>
              <div className="grid gap-4 sm:grid-cols-2">
                {inv.portfolio.map((p) => (
                  <div key={p.name} className="flex items-center gap-3 rounded-xl border border-gray100 p-4">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${p.gradient} text-sm font-bold text-white`}>{p.initials}</div>
                    <div>
                      <p className="text-sm font-bold text-navy">{p.name}</p>
                      <p className="text-xs text-gray400">{p.stage} · {p.outcome}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <SectionLabel>Past investments</SectionLabel>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray100 text-left text-[11px] font-bold uppercase tracking-[0.06em] text-gray400">
                      <th className="py-2 pr-4">Company</th><th className="py-2 pr-4">Stage</th><th className="py-2 pr-4">Year</th><th className="py-2">Outcome</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inv.past.map((p) => (
                      <tr key={p.company} className="border-b border-gray100 last:border-0">
                        <td className="py-3 pr-4 font-medium text-navy">{p.company}</td>
                        <td className="py-3 pr-4"><StageBadge stage={p.stage as never} /></td>
                        <td className="py-3 pr-4 text-gray600">{p.year}</td>
                        <td className="py-3 text-gray600">{p.outcome}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          <div className="space-y-6 lg:sticky lg:top-[84px] lg:self-start">
            <Card>
              <p className="text-sm text-gray400">Ticket size</p>
              <p className="mt-1 text-[28px] font-extrabold tracking-tight text-navy">{inv.ticket}</p>
              <button onClick={() => toast.success("Connection request sent!")} className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand text-sm font-semibold text-white transition-colors hover:bg-brandhover">
                Send connection request
              </button>
            </Card>

            <Card>
              <p className="mb-3 text-sm font-bold text-navy">Quick stats</p>
              <dl className="divide-y divide-gray100 text-sm">
                <Fact k="Total investments" v={String(inv.totalInvestments)} />
                <Fact k="Avg check size" v={inv.avgCheck} />
                <Fact k="Active portfolio" v={String(inv.activePortfolio)} />
              </dl>
            </Card>

            <Card>
              <p className="mb-3 text-sm font-bold text-navy">Preferred regions</p>
              <div className="flex flex-wrap gap-2">
                {inv.regions.map((r) => <Pill key={r}>{r}</Pill>)}
              </div>
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
function Fact({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between py-2.5">
      <dt className="text-gray400">{k}</dt>
      <dd className="font-medium text-navy">{v}</dd>
    </div>
  );
}
