import { Link } from "@tanstack/react-router";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-white">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2 21 7v10l-9 5-9-5V7l9-5Z"
            fill="rgba(255,255,255,0.18)"
            stroke="white"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path d="m8.5 12 2.4 2.4 4.6-4.8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className={`text-[1.15rem] font-bold tracking-tight ${light ? "text-white" : "text-navy"}`}>
        Ventra<span className="text-brand">.uz</span>
      </span>
    </Link>
  );
}
