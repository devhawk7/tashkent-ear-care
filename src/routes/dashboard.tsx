import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout, type NavItem } from "../components/DashboardLayout";
import { startups, investors } from "../lib/data";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Founder Dashboard — Ventra.uz" }] }),
  component: StartupDashboard,
});

const nav: NavItem[] = [
  { label: "Overview", to: "/dashboard", icon: "overview" },
  { label: "My Profile", to: "/dashboard", icon: "profile" },
  { label: "Pitch Deck", to: "/dashboard", icon: "deck" },
  { label: "Team", to: "/dashboard", icon: "team" },
  { label: "Connections", to: "/dashboard", icon: "connections", badge: 3 },
  { label: "Messages", to: "/dashboard", icon: "messages", badge: 2 },
  { label: "Analytics", to: "/dashboard", icon: "analytics" },
  { label: "Settings", to: "/dashboard", icon: "settings" },
];

const stats = [
  { label: "Profile views this week", value: "1,284", trend: "↑ 34%", up: true },
  { label: "Interested investors", value: "12", trend: "↑ 3 new", up: true },
  { label: "Pitch deck views", value: "487", trend: "↑ 12%", up: true },
  { label: "Connections", value: "8", trend: "accepted", up: true },
];

const checklist = [
  { label: "Add pitch deck", done: true },
  { label: "Complete company overview", done: true },
  { label: "Add team members", done: false },
  { label: "Verify company docs", done: false },
];

const activity = [
  { c: "#2563eb", t: "Alisher Nazarov viewed your pitch deck", time: "2m ago" },
  { c: "#22c55e", t: "New connection request from Silk Road Capital", time: "1h ago" },
  { c: "#f59e0b", t: "Frontier Ventures saved your profile", time: "3h ago" },
  { c: "#8b5cf6", t: "New message from CIS Angel Network", time: "5h ago" },
];

function StartupDashboard() {
  const completeness = 82;
  return (
    <DashboardLayout nav={nav} user={{ name: "Bobur Jurayev", role: "Startup", initials: "BJ" }}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h1 className="text-2xl font-bold text-navy">Good morning, Bobur 👋</h1>
        <p className="text-sm text-gray400">Monday, June 9, 2026</p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-gray200 bg-white p-5">
            <p className="text-sm text-gray400">{s.label}</p>
            <p className="mt-1 text-2xl font-bold text-navy">{s.value}</p>
            <p className={`text-xs font-semibold ${s.up ? "text-success" : "text-danger"}`}>{s.trend}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-2xl border border-gray200 bg-white p-6">
          <h2 className="text-lg font-bold text-navy">Profile completeness</h2>
          <div className="mt-4 flex items-center gap-6">
            <Ring value={completeness} />
            <ul className="flex-1 space-y-2.5">
              {checklist.map((c) => (
                <li key={c.label} className="flex items-center gap-2.5 text-sm">
                  <span className={`flex h-5 w-5 items-center justify-center rounded-full ${c.done ? "bg-success text-white" : "border border-gray200 text-transparent"}`}>✓</span>
                  <span className={c.done ? "text-gray400 line-through" : "font-medium text-navy"}>{c.label}</span>
                  {!c.done && <button className="ml-auto text-xs font-semibold text-brand">Add</button>}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-gray200 bg-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-navy">Recent activity</h2>
            <button className="text-xs font-semibold text-brand">View all</button>
          </div>
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
      </div>

      <div className="mt-6 rounded-2xl border border-gray200 bg-white p-6">
        <h2 className="text-lg font-bold text-navy">Investor interest</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray100 text-left text-[11px] font-bold uppercase tracking-[0.06em] text-gray400">
                <th className="py-2 pr-4">Investor</th><th className="py-2 pr-4">Fund</th><th className="py-2 pr-4">Action</th><th className="py-2">Time</th>
              </tr>
            </thead>
            <tbody>
              {investors.slice(0, 5).map((inv, i) => (
                <tr key={inv.slug} className="border-b border-gray100 transition-colors last:border-0 hover:bg-gray50">
                  <td className="py-3 pr-4">
                    <div className="flex items-center gap-2.5">
                      <span className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${inv.gradient} text-[10px] font-bold text-white`}>{inv.initials}</span>
                      <span className="font-medium text-navy">{inv.name}</span>
                    </div>
                  </td>
                  <td className="py-3 pr-4 text-gray600">{inv.fund}</td>
                  <td className="py-3 pr-4">
                    <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-semibold text-brand">{["Viewed deck", "Saved", "Connected", "Viewed", "Saved"][i]}</span>
                  </td>
                  <td className="py-3 text-gray400">{["2m", "1h", "3h", "5h", "1d"][i]} ago</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}

function Ring({ value }: { value: number }) {
  const r = 42, c = 2 * Math.PI * r;
  return (
    <div className="relative h-28 w-28 shrink-0">
      <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
        <circle cx="50" cy="50" r={r} fill="none" stroke="#e2e8f0" strokeWidth="8" />
        <circle cx="50" cy="50" r={r} fill="none" stroke="#2563eb" strokeWidth="8" strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c - (value / 100) * c} />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-navy">{value}%</span>
    </div>
  );
}
