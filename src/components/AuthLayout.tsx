import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

interface Proof {
  text: string;
}

export function AuthLayout({
  children,
  heading,
  subtext,
  proof,
  quote,
  activity,
}: {
  children: ReactNode;
  heading: string;
  subtext: string;
  proof?: Proof[];
  quote?: { text: string; name: string; role: string };
  activity?: { text: string; time: string; color: string }[];
}) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Left panel */}
      <div className="relative hidden flex-col justify-between bg-navy p-12 text-white lg:flex xl:p-[60px]">
        <Logo light />
        <div className="max-w-md">
          <h1 className="text-[36px] font-bold leading-[1.1] tracking-tight">{heading}</h1>
          <p className="mt-4 text-white/55">{subtext}</p>

          {proof && (
            <ul className="mt-8 space-y-3">
              {proof.map((p) => (
                <li key={p.text} className="flex items-center gap-3 text-sm text-white/50">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 text-success">
                    <path d="m5 12 4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {p.text}
                </li>
              ))}
            </ul>
          )}

          {activity && (
            <div className="mt-8 space-y-2.5 rounded-xl border border-white/[0.08] bg-white/[0.06] p-5">
              {activity.map((a) => (
                <div key={a.text} className="flex items-center gap-3 text-sm">
                  <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: a.color }} />
                  <span className="text-white/70">{a.text}</span>
                  <span className="ml-auto whitespace-nowrap text-xs text-white/35">{a.time}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {quote ? (
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.06] p-5">
            <div className="flex gap-0.5 text-warning">{"★★★★★"}</div>
            <p className="mt-2 text-sm italic text-white/80">"{quote.text}"</p>
            <p className="mt-3 text-sm font-semibold text-white">{quote.name}</p>
            <p className="text-xs text-white/45">{quote.role}</p>
          </div>
        ) : (
          <div />
        )}
      </div>

      {/* Right panel */}
      <div className="flex flex-col items-center justify-center bg-white px-6 py-12 sm:px-12">
        <div className="lg:hidden">
          <Logo />
        </div>
        <div className="mt-8 w-full max-w-[400px] lg:mt-0">{children}</div>
        <div className="mt-8 flex items-center gap-3 text-sm">
          <button className="font-medium text-navy">EN</button>
          <span className="text-gray200">|</span>
          <button className="text-gray400 hover:text-navy">RU</button>
          <span className="text-gray200">|</span>
          <button className="text-gray400 hover:text-navy">UZ</button>
        </div>
        <Link to="/" className="mt-4 text-xs text-gray400 hover:text-navy">← Back to home</Link>
      </div>
    </div>
  );
}
