import { useState, type InputHTMLAttributes } from "react";
import { Eye, EyeOff } from "lucide-react";

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function Field({ label, error, className, ...props }: FieldProps) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-navy">{label}</label>
      <input
        className={`w-full rounded-lg border border-gray200 bg-white px-3.5 py-2.5 text-sm text-navy outline-none transition-all placeholder:text-gray400 focus:border-brand focus:ring-2 focus:ring-brand/20 ${
          error ? "border-danger focus:border-danger focus:ring-danger/20" : ""
        } ${className ?? ""}`}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-danger">{error}</p>}
    </div>
  );
}

export function PasswordField({ label, error, ...props }: FieldProps) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-navy">{label}</label>
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          className={`w-full rounded-lg border border-gray200 bg-white px-3.5 py-2.5 pr-10 text-sm text-navy outline-none transition-all placeholder:text-gray400 focus:border-brand focus:ring-2 focus:ring-brand/20 ${
            error ? "border-danger" : ""
          }`}
          {...props}
        />
        <button
          type="button"
          onClick={() => setShow((v) => !v)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray400 hover:text-navy"
          aria-label="Toggle password"
        >
          {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      </div>
      {error && <p className="mt-1 text-xs text-danger">{error}</p>}
    </div>
  );
}

export function OAuthButtons() {
  return (
    <div className="space-y-2.5">
      <button className="flex w-full items-center justify-center gap-2.5 rounded-xl border border-gray200 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-gray50">
        <svg width="18" height="18" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1Z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z" />
          <path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84C6.71 7.3 9.14 5.38 12 5.38Z" />
        </svg>
        Continue with Google
      </button>
      <button className="flex w-full items-center justify-center gap-2.5 rounded-xl border border-gray200 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-gray50">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#0A66C2">
          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0Z" />
        </svg>
        Continue with LinkedIn
      </button>
    </div>
  );
}

export function Divider({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px flex-1 bg-gray200" />
      <span className="text-xs text-gray400">{text}</span>
      <span className="h-px flex-1 bg-gray200" />
    </div>
  );
}
