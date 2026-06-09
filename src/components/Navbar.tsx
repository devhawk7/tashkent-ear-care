import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const navLinks = [
  { to: "/startups", label: "Startups" },
  { to: "/investors", label: "Investors" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/about", label: "About" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-shadow ${
        scrolled ? "shadow-subtle" : ""
      }`}
      style={{ height: 68, backgroundColor: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)" }}
    >
      <div className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between border-b border-gray200 px-6">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-gray600 transition-colors hover:text-navy"
              activeProps={{ className: "text-navy" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/signin"
            className="rounded-xl border border-gray200 px-4 py-2 text-sm font-medium text-navy transition-colors hover:bg-gray50"
          >
            Sign in
          </Link>
          <Link
            to="/signup"
            className="rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-white shadow-subtle transition-all hover:bg-brandhover hover:-translate-y-0.5"
          >
            Get started →
          </Link>
        </div>

        <button className="text-navy md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-b border-gray200 bg-white px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray600 hover:bg-gray50 hover:text-navy"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 flex flex-col gap-2">
            <Link
              to="/signin"
              onClick={() => setOpen(false)}
              className="rounded-xl border border-gray200 px-4 py-2.5 text-center text-sm font-medium text-navy"
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-brand px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              Get started →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
