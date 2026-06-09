import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, CheckCircle2, Check, Loader2 } from "lucide-react";
import { Logo } from "../components/Logo";
import { PasswordField } from "../components/Field";

export const Route = createFileRoute("/reset-password")({
  head: () => ({ meta: [{ title: "Set a new password — Ventra.uz" }] }),
  component: ResetPasswordPage,
});

function strength(pw: string) {
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score++;
  if (/\d/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  return Math.min(score, 3);
}
const labels = ["Weak", "Fair", "Good", "Strong"];
const colors = ["#ef4444", "#f59e0b", "#3b82f6", "#22c55e"];

function ResetPasswordPage() {
  const [pw, setPw] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const s = strength(pw);
  const matches = confirm.length > 0 && pw === confirm;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pw.length < 8 || !matches) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setDone(true); }, 900);
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray50 px-6 py-20">
      <div className="w-full max-w-[420px]">
        <div className="flex justify-center"><Logo /></div>
        <div className="mt-8 rounded-2xl border border-gray200 bg-white p-8 shadow-subtle">
          {!done ? (
            <>
              <h1 className="text-[24px] font-bold tracking-tight text-navy">Set a new password</h1>
              <form onSubmit={submit} className="mt-6 space-y-4">
                <div>
                  <PasswordField label="New password" value={pw} onChange={(e) => setPw(e.target.value)} placeholder="Min. 8 characters" />
                  {pw && (
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex flex-1 gap-1">
                        {[0, 1, 2, 3].map((i) => (
                          <span key={i} className="h-1.5 flex-1 rounded-full" style={{ backgroundColor: i <= s ? colors[s] : "#e2e8f0" }} />
                        ))}
                      </div>
                      <span className="text-xs font-medium" style={{ color: colors[s] }}>{labels[s]}</span>
                    </div>
                  )}
                </div>
                <div className="relative">
                  <PasswordField label="Confirm password" value={confirm} onChange={(e) => setConfirm(e.target.value)} placeholder="Re-enter password" />
                  {matches && <Check className="absolute right-10 top-9 h-4 w-4 text-success" />}
                </div>
                <button disabled={loading} className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand text-sm font-semibold text-white transition-all hover:bg-brandhover disabled:opacity-70">
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <>Update password <ArrowRight className="h-4 w-4" /></>}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-successpale text-success">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h1 className="mt-4 text-[24px] font-bold tracking-tight text-navy">Password updated</h1>
              <p className="mt-2 text-sm text-gray600">You can now sign in with your new password.</p>
              <Link to="/signin" className="mt-6 inline-block text-sm font-medium text-brand hover:text-brandhover">Back to sign in</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
