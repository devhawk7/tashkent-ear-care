import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Mail } from "lucide-react";
import { Logo } from "../components/Logo";

export const Route = createFileRoute("/verify-email")({
  head: () => ({ meta: [{ title: "Verify your email — Ventra.uz" }] }),
  component: VerifyEmailPage,
});

function VerifyEmailPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray50 px-6 py-20">
      <div className="w-full max-w-[440px] text-center">
        <div className="flex justify-center"><Logo /></div>
        <div className="mt-8 rounded-2xl border border-gray200 bg-white p-10 shadow-subtle">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent text-brand"
          >
            <Mail className="h-7 w-7" />
          </motion.div>
          <h1 className="mt-6 text-[26px] font-bold tracking-tight text-navy">Verify your email</h1>
          <p className="mt-3 text-sm leading-relaxed text-gray600">
            We sent a verification link to <span className="font-semibold text-navy">bobur@payflow.uz</span>.
            Check your inbox and click the link to activate your account.
          </p>
          <button className="mt-6 w-full rounded-xl border border-gray200 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-gray50">
            Resend verification email
          </button>
          <p className="mt-4 text-sm text-gray600">
            Wrong email?{" "}
            <Link to="/signup" className="font-medium text-brand hover:text-brandhover">Sign up again</Link>
          </p>
        </div>
        <p className="mt-6 text-sm text-gray600">
          Already verified?{" "}
          <Link to="/dashboard" className="font-medium text-brand hover:text-brandhover">Go to dashboard</Link>
        </p>
      </div>
    </div>
  );
}
