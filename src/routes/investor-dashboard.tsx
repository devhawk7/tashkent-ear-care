import { createFileRoute, Link } from "@tanstack/react-router";
import { DashboardLayout, type NavItem } from "../components/DashboardLayout";
import { startups } from "../lib/data";

export const Route = createFileRoute("/investor-dashboard")({
  head: () => ({ meta: [{ title: "Investor Dashboard — Ventra.uz" }] }),
  component: InvestorDashboard,
});

const nav: NavItem[] = [
  { label: "Overview", to: "/investor-dashboard", icon: "overview" },
  { label: "My Profile", to: "/investor-dashboard", icon: "profile" },
  { label: "Watchlist", to: "/investor-dashboard", icon: "watchlist", badge: 24 },
  { label: "Connections", to: "/investor-dashboard", icon: "connections", badge: 6 },
  { label: "Messages", to: "/investor-dashboard", icon: "messages", badge: 3 },
  { label: "Settings", to: "/investor-dashboard", icon: "settings" },
];

const stats = [
  { label: "Saved startups", value: "24", trend: "in watchlist", up: true },
  { label: "New this week", value: "8", trend: "matching criteria", up: true },
  { label: "Active connections", value: "6", trend: "↑ 2 new", up: true },
  { label: "Unread messages", value: "3", trend: "respond now", up: true },
];

const activity = [
  { c: "#2563eb", t: "PayFlow UZ posted new traction metrics", time: "1h ago" },
  { c: "#22c55e", t: "AgroSense accepted your connection", time: "4h ago" },
  { c: "#f59e0b", t: "MedLink shared their data room", time: "1d ago" },
];

function InvestorDashboard() {
  const watchlist = startups.slice(0, 3);
  const recommended = startups.slice(2, 5);
  const matches = [94, 89, 82];

  return (
    <DashboardLayout nav={nav} user={{ name: "Alisher Nazarov", role: "Investor", initials: "AN" }}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h1 className="text-2xl font-bold text-navy">Good morning, Alisher 👋</h1>
        <p className="text-sm text-gray400">Monday, June 9, 2026</p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-gray200 bg-white p-5">
            <p className="text-sm text-gray400">{s.label}</p>
            <p className="mt-1 text-2xl font-bold text-navy">{s.value}</p>
            <p className="text-xs font-semibold text-success">{s.trend}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-gray200 bg-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-navy">Watchlist</h2>
            <Link to="/startups" className="text-xs font-semibold text-brand">See all 24 →</Link>
          </div>
          <div className="mt-4 space-y-3">
            {watchlist.map((s) => (
              <Link key={s.slug} to="/startups/$slug" params={{ slug: s.slug }} className="flex items-center gap-3 rounded-xl border border-gray100 p-3 transition-colors hover:bg-gray50">
                <span className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${s.gradient} text-xs font-bold text-white`}>{s.initials}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-navy">{s.name}</p>
                  <p className="text-xs text-gray400">{s.stage} · {s.ask}</p>
                </div>
                <span className="text-xs font-semibold text-brand">View</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-gray200 bg-white p-6">
          <h2 className="text-lg font-bold text-navy">Recommended for you</h2>
          <div className="mt-4 space-y-3">
            {recommended.map((s, i) => (
              <Link key={s.slug} to="/startups/$slug" params={{ slug: s.slug }} className="flex items-center gap-3 rounded-xl border border-gray100 p-3 transition-colors hover:bg-gray50">
                <span className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${s.gradient} text-xs font-bold text-white`}>{s.initials}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-navy">{s.name}</p>
                  <p className="text-xs text-gray400">{s.industry} · {s.stage}</p>
                </div>
                <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-bold text-brand">{matches[i]}% match</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-gray200 bg-white p-6">
        <h2 className="text-lg font-bold text-navy">Recent activity</h2>
        <div className="mt-4 space-y-3.5">
          {activity.map((a) => (
            <div key={a.t} className="flex items-center gap-3 text-sm">
              <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: a.c }} />
              <span className="text-gray600">{a.t}</span>
              <span className="ml-auto whitespace-nowrap text-xs text-gray400">{a.time}</span>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
