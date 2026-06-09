import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const cols = [
  {
    title: "Platform",
    links: [
      { label: "Browse startups", to: "/startups" },
      { label: "Browse investors", to: "/investors" },
      { label: "How it works", to: "/how-it-works" },
      { label: "Pricing", to: "/about" },
    ],
  },
  {
    title: "For founders",
    links: [
      { label: "List your startup", to: "/signup" },
      { label: "Founder dashboard", to: "/dashboard" },
      { label: "Get verified", to: "/how-it-works" },
      { label: "Resources", to: "/about" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Careers", to: "/about" },
      { label: "Contact", to: "/about" },
      { label: "Privacy", to: "/about" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy px-6 pb-10 pt-16 text-white sm:px-12">
      <div className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/40">
            The CIS region's most trusted startup-investor marketplace. Where great founders meet smart capital.
          </p>
        </div>
        {cols.map((col) => (
          <div key={col.title}>
            <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-white/40">{col.title}</p>
            <ul className="mt-4 space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-white/45 transition-colors hover:text-white/80">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 flex max-w-[1200px] flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row">
        <p className="text-sm text-white/30">© 2025 Ventra.uz. All rights reserved.</p>
        <div className="flex items-center gap-3 text-sm">
          <button className="font-medium text-white/70">EN</button>
          <span className="text-white/20">|</span>
          <button className="text-white/30 hover:text-white/70">RU</button>
          <span className="text-white/20">|</span>
          <button className="text-white/30 hover:text-white/70">UZ</button>
        </div>
      </div>
    </footer>
  );
}
