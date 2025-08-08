'use client'
import { useState } from 'react'
import styles from './LeadForm.module.css'

export function LeadForm(){
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    setError(null); setLoading(true); setSent(false)
    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = {
      name: String(formData.get('name') || ''),
      contact: String(formData.get('contact') || ''),
      email: String(formData.get('email') || ''),
      website: String(formData.get('website') || '') // honeypot
    }
    try{
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json().catch(()=>({}))
      if(!res.ok){ throw new Error(data?.message || 'Помилка відправки') }
      setSent(true); form.reset()
    }catch(err:any){
      setError(err.message)
    }finally{
      setLoading(false)
    }
  }

  return (
    <section id="form" className={styles.wrap}>
      <h2 className={styles.title}>Запис на консультацію</h2>
      <form className={styles.grid} onSubmit={onSubmit}>
        <input name="name" required placeholder="Ім'я" className={styles.input}/>
        <input name="contact" type="tel" required placeholder="Телефон або Telegram" className={styles.input}/>
        <input name="email" type="email" placeholder="Email (необов'язково)" className={`${styles.input} ${styles.full}`}/>
        {/* Honeypot field (hidden for humans) */}
        <input name="website" className={styles.honeypot} tabIndex={-1} autoComplete="off" />
        <button disabled={loading} className={`${styles.btn} btn btnOutline`} style={{opacity: loading ? .6 : 1}}>
          {loading ? 'Відправляю…' : 'Відправити'}
        </button>
      </form>
      {sent && <p className={styles.note}>Дякую! Я зв'яжусь з вами протягом дня.</p>}
      {error && <p className={styles.error}>❌ {error}</p>}
    </section>
  )
}