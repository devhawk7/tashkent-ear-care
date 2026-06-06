import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { motion } from "motion/react";
import { Phone, User, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { requestConsultation } from "../lib/consultation.functions";

export function ConsultationForm() {
  const submit = useServerFn(requestConsultation);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (loading) return;

    if (name.trim().length < 2) {
      toast.error("Please enter your name");
      return;
    }
    if (phone.trim().length < 6) {
      toast.error("Please enter a valid phone number");
      return;
    }

    setLoading(true);
    try {
      const result = await submit({ data: { name: name.trim(), phone: phone.trim() } });
      if (result.ok) {
        toast.success("Thank you! We'll call you back shortly.");
        setName("");
        setPhone("");
      } else {
        toast.error(result.error ?? "Something went wrong. Please call us.");
      }
    } catch {
      toast.error("Something went wrong. Please call us.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-border bg-card p-8 shadow-luxe"
    >
      <h3 className="font-display text-2xl font-semibold text-foreground">
        Request a consultation
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Leave your name and phone number — our specialist will call you back, day or night.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="relative">
          <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            maxLength={100}
            autoComplete="name"
            required
            className="w-full rounded-xl border border-input bg-background py-3 pl-10 pr-4 text-sm text-foreground outline-none transition-colors focus:border-primary"
          />
        </div>

        <div className="relative">
          <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+998 ..."
            maxLength={30}
            autoComplete="tel"
            required
            className="w-full rounded-xl border border-input bg-background py-3 pl-10 pr-4 text-sm text-foreground outline-none transition-colors focus:border-primary"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-luxe transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" /> Request a call back
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}
