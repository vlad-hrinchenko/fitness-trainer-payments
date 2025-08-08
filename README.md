# Fit by Nika — CSS Modules edition

- Стек: Next.js 15 (App Router) + TypeScript + **CSS Modules**
- Сторінки: `/` — презентація; `/course` — опис курсу та купівля
- Оплати: **LiqPay** (через автосабміт-форму). Якщо ключі не вказані, діє дев-фолбек.

## Запуск
```bash
pnpm i
pnpm dev
```
`.env.local`:
```
BASE_URL=http://localhost:3000
LIQPAY_PUBLIC_KEY=your_public_key
LIQPAY_PRIVATE_KEY=your_private_key
```

## Заявки (Telegram)
- API-роут: `POST /api/lead` — надсилає повідомлення у ваш Telegram чат.
- Потрібні змінні оточення:
```
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
```
Як отримати:
1) Створіть бота через @BotFather → отримаєте `TELEGRAM_BOT_TOKEN`.
2) Додайте бота до вашого чату/каналу і надайте права. Дізнайтесь `chat_id` (найпростіше — написати в бота і зчитати через сервіс на кшталт getUpdates або спеціального бота echo).

Форма відправляє: `name`, `contact`, `email` (опційно). Є honeypot поле `website` для відсікання ботів.
