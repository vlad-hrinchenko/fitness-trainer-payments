import type { PaymentsProvider, CheckoutSession } from './provider'

function b64(input: string){ return Buffer.from(input).toString('base64') }
function sha1(str: string){
  const crypto = require('crypto')
  return crypto.createHash('sha1').update(str).digest()
}
function sign(privateKey: string, data: string){
  const toSign = privateKey + data + privateKey
  return Buffer.from(sha1(toSign)).toString('base64')
}

export const LiqPayProvider: PaymentsProvider = {
  async createCheckout(courseId: string): Promise<CheckoutSession> {
    const publicKey = process.env.LIQPAY_PUBLIC_KEY
    const privateKey = process.env.LIQPAY_PRIVATE_KEY
    const baseUrl = process.env.BASE_URL || 'http://localhost:3000'

    if(!publicKey || !privateKey){
      return { paymentUrl: `${baseUrl}/course?paid=1&c=${courseId}` }
    }

    const payload = {
      version: 3,
      public_key: publicKey,
      action: 'pay',
      amount: '990',
      currency: 'UAH',
      description: 'Відеокурс Fit by Nika — Старт за 21 день',
      order_id: `nika-${Date.now()}`,
      result_url: `${baseUrl}/course?c=${courseId}`,
      server_url: `${baseUrl}/api/checkout`,
      sandbox: 0
    }

    const data = b64(JSON.stringify(payload))
    const signature = sign(privateKey, data)

    const checkoutPageHtml = `<!doctype html>
<html><head><meta charset="utf-8"><title>Переходимо до оплати…</title></head>
<body>
  <form id="lp" method="POST" action="https://www.liqpay.ua/api/3/checkout" accept-charset="utf-8">
    <input type="hidden" name="data" value="${data}" />
    <input type="hidden" name="signature" value="${signature}" />
    <noscript><button type="submit">Перейти до оплати</button></noscript>
  </form>
  <script>document.getElementById('lp').submit();</script>
</body></html>`

    return { checkoutPageHtml }
  }
}