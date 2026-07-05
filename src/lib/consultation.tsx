import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, Check, Loader2, ChevronDown } from "lucide-react";
import { useLang } from "./i18n";
import { services } from "./services-data";
import { sendConsultation } from "./consultation.functions";

type Ctx = { open: (serviceId?: string) => void };
const ConsultationContext = createContext<Ctx | null>(null);

export function useConsultation() {
  const ctx = useContext(ConsultationContext);
  if (!ctx) throw new Error("useConsultation must be used within ConsultationProvider");
  return ctx;
}

type Status = "idle" | "sending" | "success" | "error";

export function ConsultationProvider({ children }: { children: ReactNode }) {
  const { t, lang } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [preselect, setPreselect] = useState<string>("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string; general?: string }>({});
  const firstFieldRef = useRef<HTMLInputElement>(null);

  const open = (serviceId?: string) => {
    setStatus("idle");
    setErrors({});
    if (serviceId) {
      setPreselect(serviceId);
      setService(serviceId);
    }
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
    setTimeout(() => {
      setStatus("idle");
      setName("");
      setPhone("");
      setMessage("");
      setService(preselect);
      setErrors({});
    }, 250);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => firstFieldRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next: typeof errors = {};
    if (name.trim().length < 1) next.name = t.form.errName;
    if (phone.replace(/\D/g, "").length < 7) next.phone = t.form.errPhone;
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("sending");
    const chosen = services.find((s) => s.id === service);
    try {
      await sendConsultation({
        data: {
          name: name.trim(),
          phone: phone.trim(),
          service: chosen ? chosen[lang].name : "",
          message: message.trim(),
          lang,
        },
      });
      setStatus("success");
    } catch {
      setStatus("error");
      setErrors({ general: t.form.errGeneric });
    }
  };

  return (
    <ConsultationContext.Provider value={{ open }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-navydark/60 backdrop-blur-sm" onClick={close} />
            <motion.div
              role="dialog"
              aria-modal="true"
              className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-lift"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                onClick={close}
                aria-label={t.form.close}
                className="absolute right-4 top-4 z-10 text-muted-ink transition-colors hover:text-navy"
              >
                <X className="h-5 w-5" />
              </button>

              {status === "success" ? (
                <div className="px-8 py-14 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-greige/40">
                    <Check className="h-8 w-8 text-navy" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl text-navy">{t.form.successTitle}</h3>
                  <p className="mt-2 text-sm text-muted-ink">{t.form.successText}</p>
                  <button
                    onClick={close}
                    className="mt-7 rounded-lg bg-navy px-6 py-3 text-sm font-medium text-alabaster transition-colors hover:bg-navydark"
                  >
                    {t.form.close}
                  </button>
                </div>
              ) : (
                <div className="px-7 py-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-greigedark">
                    Doctor Vays
                  </p>
                  <h3 className="mt-1.5 font-display text-2xl text-navy">{t.form.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-ink">{t.form.subtitle}</p>

                  <form onSubmit={submit} className="mt-6 space-y-4">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-navy">{t.form.name}</label>
                      <input
                        ref={firstFieldRef}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={t.form.namePh}
                        className="w-full rounded-lg border border-border bg-alabaster/60 px-3.5 py-2.5 text-sm text-navy outline-none transition-all placeholder:text-muted-ink/60 focus:border-navy focus:bg-white focus:ring-2 focus:ring-navy/10"
                      />
                      {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-navy">{t.form.phone}</label>
                      <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder={t.form.phonePh}
                        inputMode="tel"
                        className="w-full rounded-lg border border-border bg-alabaster/60 px-3.5 py-2.5 text-sm text-navy outline-none transition-all placeholder:text-muted-ink/60 focus:border-navy focus:bg-white focus:ring-2 focus:ring-navy/10"
                      />
                      {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-navy">{t.form.service}</label>
                      <div className="relative">
                        <select
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="w-full appearance-none rounded-lg border border-border bg-alabaster/60 px-3.5 py-2.5 pr-9 text-sm text-navy outline-none transition-all focus:border-navy focus:bg-white focus:ring-2 focus:ring-navy/10"
                        >
                          <option value="">{t.form.servicePh}</option>
                          {services.map((s) => (
                            <option key={s.id} value={s.id}>
                              {s[lang].name}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-ink" />
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-navy">{t.form.message}</label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={t.form.messagePh}
                        rows={3}
                        className="w-full resize-none rounded-lg border border-border bg-alabaster/60 px-3.5 py-2.5 text-sm text-navy outline-none transition-all placeholder:text-muted-ink/60 focus:border-navy focus:bg-white focus:ring-2 focus:ring-navy/10"
                      />
                    </div>

                    {errors.general && <p className="text-xs text-destructive">{errors.general}</p>}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-navy py-3 text-sm font-semibold text-alabaster transition-all hover:bg-navydark disabled:opacity-70"
                    >
                      {status === "sending" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          {t.form.sending}
                        </>
                      ) : (
                        t.form.submit
                      )}
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ConsultationContext.Provider>
  );
}
