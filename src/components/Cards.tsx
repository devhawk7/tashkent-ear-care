import { Link } from "@tanstack/react-router";
import type { Startup, Investor } from "../lib/data";
import { StageBadge, VerifiedBadge, Pill } from "./Badges";

export function StartupCard({ s }: { s: Startup }) {
  return (
    <Link
      to="/startups/$slug"
      params={{ slug: s.slug }}
      className="group flex flex-col rounded-2xl border border-gray200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-medium"
    >
      <div className="flex items-start justify-between">
        <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${s.gradient} text-sm font-bold text-white`}>
          {s.initials}
        </div>
        <StageBadge stage={s.stage} />
      </div>
      <div className="mt-4 flex items-center gap-2">
        <h3 className="text-base font-bold text-navy">{s.name}</h3>
        {s.verified && (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="text-success">
            <circle cx="12" cy="12" r="10" fill="#22c55e" />
            <path d="m8 12 2.5 2.5L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      <p className="mt-1 text-[13px] leading-snug text-gray600">{s.tagline}</p>

      <div className="mt-5 grid grid-cols-3 gap-3 border-t border-gray100 pt-4">
        <Metric label="Ask" value={s.ask} />
        <Metric label={s.metricLabel} value={s.metricValue} />
        <Metric label="Growth" value={s.growth} accent />
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-gray100 pt-4 text-[13px]">
        <span className="text-gray400">{s.industry} · {s.city}</span>
        <span className="font-semibold text-brand">{s.investorsInterested} investors →</span>
      </div>
    </Link>
  );
}

function Metric({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-[0.06em] text-gray400">{label}</p>
      <p className={`mt-0.5 text-sm font-bold ${accent ? "text-success" : "text-navy"}`}>{value}</p>
    </div>
  );
}

export function InvestorCard({ inv }: { inv: Investor }) {
  return (
    <Link
      to="/investors/$slug"
      params={{ slug: inv.slug }}
      className="group flex flex-col items-center rounded-2xl border border-gray200 bg-white p-6 text-center transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-medium"
    >
      <div className={`flex h-[72px] w-[72px] items-center justify-center rounded-full bg-gradient-to-br ${inv.gradient} text-lg font-bold text-white`}>
        {inv.initials}
      </div>
      {inv.verified && <div className="mt-3"><VerifiedBadge /></div>}
      <h3 className="mt-3 text-base font-bold text-navy">{inv.name}</h3>
      <p className="text-[13px] text-gray400">{inv.fund}</p>
      <p className="mt-2 line-clamp-2 text-[13px] leading-snug text-gray600">{inv.bio}</p>
      <div className="mt-3 flex flex-wrap justify-center gap-1.5">
        {inv.industries.slice(0, 2).map((i) => (
          <Pill key={i}>{i}</Pill>
        ))}
      </div>
      <p className="mt-3 text-sm font-bold text-brand">{inv.ticket}</p>
      <span className="mt-4 w-full rounded-xl border border-gray200 py-2 text-sm font-medium text-navy opacity-0 transition-opacity group-hover:opacity-100">
        View profile
      </span>
    </Link>
  );
}
