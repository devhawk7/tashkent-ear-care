import type { Stage } from "../lib/data";

const stageColors: Record<Stage, string> = {
  "Pre-idea": "bg-secondary text-gray600",
  "Pre-seed": "bg-accent text-brand",
  Seed: "bg-accent text-brand",
  "Series A": "bg-[#ede9fe] text-[#6d28d9]",
  "Series B": "bg-[#fef3c7] text-[#b45309]",
  Growth: "bg-successpale text-[#15803d]",
};

export function StageBadge({ stage }: { stage: Stage }) {
  return (
    <span className={`inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-semibold ${stageColors[stage]}`}>
      {stage}
    </span>
  );
}

export function VerifiedBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-successpale px-2.5 py-1 text-xs font-semibold text-[#15803d]">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
        <path d="m5 12 4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Verified
    </span>
  );
}

export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-lg bg-secondary px-2.5 py-1 text-xs font-medium text-gray600">
      {children}
    </span>
  );
}
