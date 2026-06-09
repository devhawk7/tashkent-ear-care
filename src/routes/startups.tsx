import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { SiteLayout } from "../components/SiteLayout";
import { Reveal } from "../components/Reveal";
import { StartupCard } from "../components/Cards";
import { startups, industries, stages, countries, type Stage } from "../lib/data";

export const Route = createFileRoute("/startups")({
  head: () => ({
    meta: [
      { title: "Browse Startups — Ventra.uz" },
      { name: "description", content: "Discover 340+ verified startups raising across Uzbekistan and the CIS. Filter by industry, stage, country, and funding ask." },
      { property: "og:title", content: "Browse Startups — Ventra.uz" },
      { property: "og:description", content: "Discover verified startups raising across the CIS." },
    ],
    links: [{ rel: "canonical", href: "/startups" }],
  }),
  component: StartupDirectory,
});

function StartupDirectory() {
  const [search, setSearch] = useState("");
  const [selIndustries, setSelIndustries] = useState<string[]>([]);
  const [selStages, setSelStages] = useState<Stage[]>([]);
  const [country, setCountry] = useState("");
  const [maxAsk, setMaxAsk] = useState(5000000);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const toggle = <T,>(arr: T[], v: T, set: (a: T[]) => void) =>
    set(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);

  const filtered = useMemo(() => {
    return startups.filter((s) => {
      if (search && !`${s.name} ${s.tagline} ${s.industry}`.toLowerCase().includes(search.toLowerCase())) return false;
      if (selIndustries.length && !selIndustries.includes(s.industry)) return false;
      if (selStages.length && !selStages.includes(s.stage)) return false;
      if (country && s.country !== country) return false;
      if (s.askValue > maxAsk) return false;
      if (verifiedOnly && !s.verified) return false;
      return true;
    });
  }, [search, selIndustries, selStages, country, maxAsk, verifiedOnly]);

  const activeCount = selIndustries.length + selStages.length + (country ? 1 : 0) + (verifiedOnly ? 1 : 0) + (maxAsk < 5000000 ? 1 : 0);

  const clearAll = () => {
    setSelIndustries([]); setSelStages([]); setCountry(""); setMaxAsk(5000000); setVerifiedOnly(false);
  };

  const Sidebar = (
    <div className="space-y-7">
      <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-gray400">Filters</p>

      <FilterGroup title="Industry">
        {industries.map((i) => (
          <Check key={i} label={i} checked={selIndustries.includes(i)} onChange={() => toggle(selIndustries, i, setSelIndustries)} />
        ))}
      </FilterGroup>

      <FilterGroup title="Stage">
        {stages.map((s) => (
          <Check key={s} label={s} checked={selStages.includes(s)} onChange={() => toggle(selStages, s, setSelStages)} />
        ))}
      </FilterGroup>

      <FilterGroup title="Country">
        <select value={country} onChange={(e) => setCountry(e.target.value)} className="w-full rounded-lg border border-gray200 px-3 py-2 text-sm text-navy outline-none focus:border-brand">
          <option value="">All countries</option>
          {countries.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </FilterGroup>

      <FilterGroup title="Funding ask">
        <input type="range" min={0} max={5000000} step={50000} value={maxAsk} onChange={(e) => setMaxAsk(Number(e.target.value))} className="w-full accent-[#2563eb]" />
        <p className="mt-1 text-xs text-gray600">Up to ${(maxAsk / 1000000).toFixed(2)}M</p>
      </FilterGroup>

      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-navy">Verified only</span>
        <button onClick={() => setVerifiedOnly((v) => !v)} className={`relative h-6 w-11 rounded-full transition-colors ${verifiedOnly ? "bg-brand" : "bg-gray200"}`}>
          <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${verifiedOnly ? "translate-x-[22px]" : "translate-x-0.5"}`} />
        </button>
      </div>

      <button onClick={clearAll} className="text-sm font-medium text-danger">Clear all filters</button>
    </div>
  );

  return (
    <SiteLayout>
      <div className="sticky top-[68px] z-30 border-b border-gray200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-4 px-6 py-4">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-navy">Browse Startups</h1>
            <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-gray600">{filtered.length} startups</span>
          </div>
          <div className="ml-auto flex items-center gap-3">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray400" />
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search startups..." className="w-[280px] rounded-xl border border-gray200 py-2 pl-9 pr-3 text-sm outline-none focus:border-brand lg:w-[360px]" />
            </div>
            <button onClick={() => setShowFilters((v) => !v)} className="inline-flex items-center gap-2 rounded-xl border border-gray200 px-3 py-2 text-sm font-medium text-navy lg:hidden">
              <SlidersHorizontal className="h-4 w-4" /> Filters {activeCount ? `(${activeCount})` : ""}
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1200px] gap-8 px-6 py-10">
        <aside className="hidden w-[260px] shrink-0 lg:block">{Sidebar}</aside>

        {showFilters && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="absolute inset-0 bg-navy/40" onClick={() => setShowFilters(false)} />
            <div className="absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto rounded-t-2xl bg-white p-6">
              {Sidebar}
              <button onClick={() => setShowFilters(false)} className="mt-6 w-full rounded-xl bg-brand py-3 text-sm font-semibold text-white">Show {filtered.length} results</button>
            </div>
          </div>
        )}

        <div className="flex-1">
          {filtered.length ? (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((s, i) => (
                <Reveal key={s.slug} delay={(i % 6) * 0.06}>
                  <StartupCard s={s} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-gray200 py-20 text-center">
              <p className="text-base font-semibold text-navy">No startups match your filters</p>
              <p className="mt-1 text-sm text-gray600">Try widening your criteria.</p>
              <button onClick={clearAll} className="mt-4 rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white">Clear filters</button>
            </div>
          )}

          {filtered.length > 0 && (
            <div className="mt-10 text-center">
              <button className="rounded-xl border border-gray200 px-6 py-3 text-sm font-medium text-navy transition-colors hover:bg-gray50">Load 20 more startups</button>
            </div>
          )}
        </div>
      </div>
    </SiteLayout>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-3 text-sm font-semibold text-navy">{title}</p>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function Check({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 text-sm text-gray600">
      <input type="checkbox" checked={checked} onChange={onChange} className="h-4 w-4 rounded border-gray200 accent-[#2563eb]" />
      {label}
    </label>
  );
}
