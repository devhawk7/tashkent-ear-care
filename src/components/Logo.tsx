import { Link } from "@tanstack/react-router";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="Doctor Vays">
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-full border ${
          light ? "border-alabaster/40" : "border-navy/25"
        }`}
      >
        <span className={`font-display text-lg leading-none ${light ? "text-alabaster" : "text-navy"}`}>V</span>
      </span>
      <span className="leading-tight">
        <span
          className={`block font-display text-[1.1rem] tracking-wide ${light ? "text-alabaster" : "text-navy"}`}
        >
          Doctor Vays
        </span>
        <span
          className={`block text-[9px] font-medium uppercase tracking-[0.28em] ${
            light ? "text-alabaster/60" : "text-greigedark"
          }`}
        >
          Aesthetic Clinic
        </span>
      </span>
    </Link>
  );
}
