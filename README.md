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