import { NextResponse } from 'next/server'

// Simple helper to validate and format message
function formatMessage({ name, contact, email }: { name: string; contact: string; email?: string }) {
  const lines = [
    '📝 *Нова заявка — Fit by Nika*',
    `• Ім'я: ${name}`,
    `• Контакт: ${contact}`,
    email ? `• Email: ${email}` : null,
    `• Час: ${new Date().toLocaleString('uk-UA')}`
  ].filter(Boolean);
  return lines.join('\n');
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { name, contact, email, website } = body as { name?: string; contact?: string; email?: string; website?: string };

    // Honeypot (bot trap) — if filled, silently accept
    if (website) return NextResponse.json({ ok: true });

    if (!name || !contact) {
      return NextResponse.json({ message: "Поля 'name' і 'contact' обов'язкові" }, { status: 400 });
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (!token || !chatId) {
      console.warn('[lead] Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID');
      return NextResponse.json({ message: 'Сервіс тимчасово недоступний' }, { status: 503 });
    }

    const text = formatMessage({ name, contact, email });
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'Markdown'
      })
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('[lead] Telegram error:', err);
      return NextResponse.json({ message: 'Помилка надсилання' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error('[lead] Error:', e?.message || e);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}