import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Rocket, Briefcase, ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { AuthLayout } from "../components/AuthLayout";
import { Field, PasswordField, OAuthButtons, Divider } from "../components/Field";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Create your account — Ventra.uz" },
      { name: "description", content: "Join 340+ startups and 120+ investors on Ventra.uz, the CIS region's trusted startup-investor marketplace." },
    ],
  }),
  component: SignUpPage,
});

type Role = "founder" | "investor";

function SignUpPage() {
  const navigate = useNavigate();
  const [role, setRole] = useState<Role>("founder");
  const [loading, setLoading] = useState(false);
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    if (!String(fd.get("name") ?? "").trim()) next.name = "Enter your full name";
    const email = String(fd.get("email") ?? "");
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) next.email = "Enter a valid email";
    if (String(fd.get("password") ?? "").length < 8) next.password = "Min. 8 characters";
    if (fd.get("password") !== fd.get("confirm")) next.confirm = "Passwords don't match";
    if (!agree) next.agree = "Please accept the terms";
    setErrors(next);
    if (Object.keys(next).length) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Account created! Check your inbox to verify.");
      navigate({ to: "/verify-email" });
    }, 1100);
  };

  return (
    <AuthLayout
      heading="Join 340+ startups already raising on Ventra"
      subtext="The CIS region's most trusted startup-investor platform."
      proof={[
        { text: "Verified by our team within 48 hours" },
        { text: "120+ active investors browsing daily" },
        { text: "$28M in capital connected to date" },
      ]}
      quote={{ text: "We met our lead investor within 3 weeks.", name: "Bobur Jurayev", role: "CEO, PayFlow UZ" }}
    >
      <p className="text-sm text-gray600">
        Already have an account?{" "}
        <Link to="/signin" className="font-semibold text-brand hover:text-brandhover">Sign in</Link>
      </p>
      <h2 className="mt-3 text-[28px] font-bold tracking-tight text-navy">Create your account</h2>
      <p className="mt-1 text-sm text-gray600">Get discovered by investors across Uzbekistan and the CIS.</p>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <RoleCard active={role === "founder"} onClick={() => setRole("founder")} icon={Rocket} title="I'm a Founder" desc="List your startup and raise capital" />
        <RoleCard active={role === "investor"} onClick={() => setRole("investor")} icon={Briefcase} title="I'm an Investor" desc="Discover and back startups" />
      </div>

      <form onSubmit={submit} className="mt-6 space-y-4">
        <Field label="Full name" name="name" placeholder="Bobur Jurayev" error={errors.name} />
        <Field label="Email address" name="email" type="email" placeholder="you@company.com" error={errors.email} />
        <PasswordField label="Password" name="password" placeholder="Min. 8 characters" error={errors.password} />
        <PasswordField label="Confirm password" name="confirm" placeholder="Re-enter password" error={errors.confirm} />
        <Field
          label={role === "founder" ? "Startup name" : "Fund or firm name"}
          name="company"
          placeholder={role === "founder" ? "PayFlow UZ" : "Samarkand Ventures"}
        />
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy">Phone number</label>
          <div className="flex gap-2">
            <span className="flex items-center rounded-lg border border-gray200 bg-gray50 px-3 text-sm font-medium text-navy">🇺🇿 +998</span>
            <input name="phone" placeholder="90 123 45 67" className="w-full rounded-lg border border-gray200 px-3.5 py-2.5 text-sm text-navy outline-none transition-all placeholder:text-gray400 focus:border-brand focus:ring-2 focus:ring-brand/20" />
          </div>
        </div>

        <label className="flex items-start gap-2.5 text-sm text-gray600">
          <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="mt-0.5 h-4 w-4 rounded border-gray200 text-brand accent-[#2563eb]" />
          <span>
            I agree to Ventra's <a className="text-brand underline">Terms of Service</a> and{" "}
            <a className="text-brand underline">Privacy Policy</a>
          </span>
        </label>
        {errors.agree && <p className="-mt-2 text-xs text-danger">{errors.agree}</p>}

        <button disabled={loading} className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand text-sm font-semibold text-white transition-all hover:bg-brandhover disabled:opacity-70">
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <>Create account <ArrowRight className="h-4 w-4" /></>}
        </button>
      </form>

      <div className="my-6"><Divider text="or continue with" /></div>
      <OAuthButtons />
    </AuthLayout>
  );
}

function RoleCard({ active, onClick, icon: Icon, title, desc }: { active: boolean; onClick: () => void; icon: typeof Rocket; title: string; desc: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl border p-4 text-left transition-all hover:scale-[1.02] ${
        active ? "border-brand bg-accent" : "border-gray200 bg-white"
      }`}
    >
      <Icon className={`h-6 w-6 ${active ? "text-brand" : "text-gray400"}`} />
      <p className="mt-2 text-sm font-bold text-navy">{title}</p>
      <p className="mt-0.5 text-xs text-gray600">{desc}</p>
    </button>
  );
}
