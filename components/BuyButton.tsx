'use client'
import { useState } from 'react'

export function BuyButton({ courseId }: {courseId: string}){
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string|null>(null)
  const onBuy = async () => {
    setLoading(true); setError(null)
    try{
      const res = await fetch('/api/checkout', { method:'POST', body: JSON.stringify({ courseId }) })
      const data = await res.json()
      if(!res.ok) throw new Error(data?.message || 'Помилка оплати')
      if (data.checkoutPageHtml) {
        const win = window.open('', '_blank')
        if (win) {
          win.document.write(data.checkoutPageHtml)
          win.document.close()
        } else {
          document.open(); document.write(data.checkoutPageHtml); document.close();
        }
      } else if (data.paymentUrl) {
        window.location.href = data.paymentUrl
      }
    }catch(e:any){ setError(e.message) } finally { setLoading(false) }
  }
  return (
    <div>
      <button onClick={onBuy} disabled={loading} className="btn btnPrimary" style={{opacity: loading ? .6 : 1}}>
        {loading? 'Створення оплати…' : 'Купити зараз'}
      </button>
      {error && <p style={{color:'#dc2626', marginTop: 8, fontSize: 14}}>{error}</p>}
    </div>
  )
}