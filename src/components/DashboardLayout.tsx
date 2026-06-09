import { useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutGrid, User, FileText, Users, Handshake, MessageSquare,
  BarChart3, Settings, Bookmark, Menu, X,
} from "lucide-react";
import { Logo } from "./Logo";

export interface NavItem {
  label: string;
  to: string;
  icon: keyof typeof iconMap;
  badge?: number;
}

const iconMap = {
  overview: LayoutGrid,
  profile: User,
  deck: FileText,
  team: Users,
  connections: Handshake,
  messages: MessageSquare,
  analytics: BarChart3,
  settings: Settings,
  watchlist: Bookmark,
};

export function DashboardLayout({
  children,
  nav,
  user,
}: {
  children: ReactNode;
  nav: NavItem[];
  user: { name: string; role: string; initials: string };
}) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const SidebarInner = (
    <div className="flex h-full flex-col">
      <div className="flex h-[68px] items-center px-6">
        <Logo />
      </div>
      <nav className="flex-1 space-y-1 px-3 py-4">
        {nav.map((item) => {
          const Icon = iconMap[item.icon];
          const active = pathname === item.to;
          return (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                active ? "bg-accent text-brand" : "text-gray600 hover:bg-gray50 hover:text-navy"
              }`}
            >
              <Icon className="h-[18px] w-[18px]" />
              <span>{item.label}</span>
              {item.badge ? (
                <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-brand px-1.5 text-[11px] font-bold text-white">
                  {item.badge}
                </span>
              ) : null}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-gray100 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brandhover text-xs font-bold text-white">
            {user.initials}
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-navy">{user.name}</p>
            <span className="inline-block rounded bg-secondary px-1.5 py-0.5 text-[10px] font-semibold text-gray600">
              {user.role}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray50">
      <aside className="fixed inset-y-0 left-0 hidden w-60 border-r border-gray200 bg-white lg:block">
        {SidebarInner}
      </aside>

      {/* Mobile top bar */}
      <div className="sticky top-0 z-40 flex h-[60px] items-center justify-between border-b border-gray200 bg-white px-4 lg:hidden">
        <Logo />
        <button onClick={() => setOpen(true)} aria-label="Menu" className="text-navy">
          <Menu />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-navy/40" onClick={() => setOpen(false)} />
          <div className="absolute inset-y-0 left-0 w-64 bg-white shadow-large">
            <button onClick={() => setOpen(false)} className="absolute right-4 top-5 text-navy" aria-label="Close">
              <X />
            </button>
            {SidebarInner}
          </div>
        </div>
      )}

      <div className="lg:pl-60">
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8">{children}</div>
      </div>
    </div>
  );
}
