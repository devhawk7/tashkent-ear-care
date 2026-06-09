import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { AuthLayout } from "../components/AuthLayout";
import { Field, PasswordField, OAuthButtons, Divider } from "../components/Field";

export const Route = createFileRoute("/signin")({
  head: () => ({
    meta: [
      { title: "Sign in — Ventra.uz" },
      { name: "description", content: "Sign in to Ventra.uz to connect with startups and investors across the CIS." },
    ],
  }),
  component: SignInPage,
});

function SignInPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(fd.get("email") ?? ""))) next.email = "Enter a valid email";
    if (!String(fd.get("password") ?? "")) next.password = "Enter your password";
    setErrors(next);
    if (Object.keys(next).length) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Welcome back!");
      navigate({ to: "/dashboard" });
    }, 1000);
  };

  return (
    <AuthLayout
      heading="Welcome back to Ventra"
      subtext="Your next investor is one message away."
      activity={[
        { text: "Rustam Tashmatov saved AgroSense", time: "2m ago", color: "#22c55e" },
        { text: "New pitch deck viewed by Silk Road Capital", time: "8m ago", color: "#2563eb" },
        { text: "MedLink received a connection request", time: "15m ago", color: "#f59e0b" },
      ]}
    >
      <p className="text-sm text-gray600">
        Don't have an account?{" "}
        <Link to="/signup" className="font-semibold text-brand hover:text-brandhover">Sign up</Link>
      </p>
      <h2 className="mt-3 text-[28px] font-bold tracking-tight text-navy">Sign in to Ventra</h2>

      <form onSubmit={submit} className="mt-6 space-y-4">
        <Field label="Email address" name="email" type="email" placeholder="you@company.com" error={errors.email} />
        <div>
          <PasswordField label="Password" name="password" placeholder="Your password" error={errors.password} />
          <div className="mt-1.5 text-right">
            <Link to="/forgot-password" className="text-[13px] font-medium text-brand hover:text-brandhover">Forgot password?</Link>
          </div>
        </div>
        <button disabled={loading} className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand text-sm font-semibold text-white transition-all hover:bg-brandhover disabled:opacity-70">
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <>Sign in <ArrowRight className="h-4 w-4" /></>}
        </button>
      </form>

      <div className="my-6"><Divider text="or continue with" /></div>
      <OAuthButtons />
    </AuthLayout>
  );
}
