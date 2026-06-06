import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { motion } from "motion/react";
import { Phone, User, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { requestConsultation } from "../lib/consultation.functions";

type Lang = "ru" | "uz";

const translations: Record<Lang, {
  title: string;
  subtitle: string;
  namePlaceholder: string;
  phonePlaceholder: string;
  submit: string;
  sending: string;
  nameError: string;
  phoneError: string;
  success: string;
  error: string;
}> = {
  ru: {
    title: "Запись на консультацию",
    subtitle:
      "Оставьте имя и номер телефона — наш специалист перезвонит вам в любое время дня и ночи.",
    namePlaceholder: "Ваше имя",
    phonePlaceholder: "+998 ...",
    submit: "Заказать звонок",
    sending: "Отправка...",
    nameError: "Пожалуйста, введите ваше имя",
    phoneError: "Пожалуйста, введите корректный номер телефона",
    success: "Спасибо! Мы скоро вам перезвоним.",
    error: "Что-то пошло не так. Пожалуйста, позвоните нам.",
  },
  uz: {
    title: "Konsultatsiyaga yozilish",
    subtitle:
      "Ism va telefon raqamingizni qoldiring — mutaxassisimiz kechayu kunduz sizga qo‘ng‘iroq qiladi.",
    namePlaceholder: "Ismingiz",
    phonePlaceholder: "+998 ...",
    submit: "Qo‘ng‘iroqni so‘rash",
    sending: "Yuborilmoqda...",
    nameError: "Iltimos, ismingizni kiriting",
    phoneError: "Iltimos, to‘g‘ri telefon raqamini kiriting",
    success: "Rahmat! Tez orada sizga qo‘ng‘iroq qilamiz.",
    error: "Xatolik yuz berdi. Iltimos, bizga qo‘ng‘iroq qiling.",
  },
};

export function ConsultationForm() {
  const submit = useServerFn(requestConsultation);
  const [lang, setLang] = useState<Lang>("ru");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const t = translations[lang];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (loading) return;

    if (name.trim().length < 2) {
      toast.error(t.nameError);
      return;
    }
    if (phone.trim().length < 6) {
      toast.error(t.phoneError);
      return;
    }

    setLoading(true);
    try {
      const result = await submit({ data: { name: name.trim(), phone: phone.trim() } });
      if (result.ok) {
        toast.success(t.success);
        setName("");
        setPhone("");
      } else {
        toast.error(result.error ?? t.error);
      }
    } catch {
      toast.error(t.error);
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
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl font-semibold text-foreground">
            {t.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">{t.subtitle}</p>
        </div>
        <div className="flex shrink-0 overflow-hidden rounded-full border border-border">
          {(["ru", "uz"] as const).map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLang(l)}
              aria-pressed={lang === l}
              className={`px-3 py-1.5 text-xs font-semibold uppercase transition-colors ${
                lang === l
                  ? "bg-gold text-gold-foreground"
                  : "bg-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="relative">
          <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t.namePlaceholder}
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
            placeholder={t.phonePlaceholder}
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
