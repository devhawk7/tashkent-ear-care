import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const consultationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name")
    .max(100, "Name is too long"),
  phone: z
    .string()
    .trim()
    .min(6, "Please enter a valid phone number")
    .max(30, "Phone number is too long")
    .regex(/^[+()\d\s-]+$/, "Phone number contains invalid characters"),
});

export type ConsultationInput = z.infer<typeof consultationSchema>;

export const requestConsultation = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => consultationSchema.parse(data))
  .handler(async ({ data }) => {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.error("Telegram credentials are not configured");
      return { ok: false as const, error: "Service unavailable. Please call us." };
    }

    const text =
      `🩺 <b>New consultation request</b>\n\n` +
      `👤 <b>Name:</b> ${escapeHtml(data.name)}\n` +
      `📞 <b>Phone:</b> ${escapeHtml(data.phone)}`;

    try {
      const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "HTML",
        }),
      });

      if (!res.ok) {
        const body = await res.text();
        console.error(`Telegram sendMessage failed [${res.status}]: ${body}`);
        return { ok: false as const, error: "Could not send your request. Please call us." };
      }

      return { ok: true as const };
    } catch (err) {
      console.error("Telegram request error", err);
      return { ok: false as const, error: "Could not send your request. Please call us." };
    }
  });

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
