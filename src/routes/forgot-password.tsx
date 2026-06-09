import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Lock, CheckCircle2, Loader2 } from "lucide-react";
import { Logo } from "../components/Logo";
import { Field } from "../components/Field";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({ meta: [{ title: "Forgot password — Ventra.uz" }] }),
  component: ForgotPasswordPage,
});

function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    if (!sent) return;
    setCountdown(60);
    const id = setInterval(() => setCountdown((c) => (c > 0 ? c - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, [sent]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 900);
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray50 px-6 py-20">
      <div className="w-full max-w-[420px]">
        <Link to="/signin" className="inline-flex items-center gap-1.5 text-sm text-gray600 hover:text-navy">
          <ArrowLeft className="h-4 w-4" /> Back to sign in
        </Link>
        <div className="mt-8 flex justify-center"><Logo /></div>

        <div className="mt-8 rounded-2xl border border-gray200 bg-white p-8 shadow-subtle">
          {!sent ? (
            <>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-brand">
                <Lock className="h-5 w-5" />
              </div>
              <h1 className="mt-4 text-center text-[24px] font-bold tracking-tight text-navy">Forgot your password?</h1>
              <p className="mt-2 text-center text-sm text-gray600">Enter your email and we'll send you a reset link.</p>
              <form onSubmit={submit} className="mt-6 space-y-4">
                <Field label="Email address" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" />
                <button disabled={loading} className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand text-sm font-semibold text-white transition-all hover:bg-brandhover disabled:opacity-70">
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <>Send reset link <ArrowRight className="h-4 w-4" /></>}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-successpale text-success">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h1 className="mt-4 text-[24px] font-bold tracking-tight text-navy">Check your inbox</h1>
              <p className="mt-2 text-sm text-gray600">We sent a reset link to <span className="font-semibold text-navy">{email || "you@company.com"}</span></p>
              <button
                disabled={countdown > 0}
                onClick={() => setSent(true)}
                className="mt-6 text-sm font-medium text-brand disabled:text-gray400"
              >
                {countdown > 0 ? `Resend in ${countdown}s` : "Resend email"}
              </button>
            </div>
          )}
        </div>

        <p className="mt-6 text-center text-sm text-gray600">
          <Link to="/signin" className="font-medium text-brand hover:text-brandhover">Back to sign in</Link>
        </p>
      </div>
    </div>
  );
}
