import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  phone: z.string().trim().min(4).max(40),
  service: z.string().trim().max(120).optional().default(""),
  message: z.string().trim().max(1000).optional().default(""),
  lang: z.string().trim().max(4).optional().default("ru"),
});

export const sendConsultation = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    const text =
      `🩺 <b>Новая заявка — Doctor Vays</b>\n\n` +
      `👤 <b>Имя:</b> ${escapeHtml(data.name)}\n` +
      `📞 <b>Телефон:</b> ${escapeHtml(data.phone)}\n` +
      `💎 <b>Услуга:</b> ${escapeHtml(data.service || "—")}\n` +
      `💬 <b>Сообщение:</b> ${escapeHtml(data.message || "—")}\n` +
      `🌐 <b>Язык:</b> ${escapeHtml(data.lang)}`;

    if (!token || !chatId) {
      console.warn("Telegram credentials not configured (TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID).");
      return { ok: false, configured: false as const };
    }

    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
    });

    if (!res.ok) {
      const body = await res.text();
      throw new Error(`Telegram API error [${res.status}]: ${body}`);
    }

    return { ok: true, configured: true as const };
  });

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
