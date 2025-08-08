'use client'
import { useState } from 'react'
import styles from './LeadForm.module.css'

export function LeadForm(){
  const [sent, setSent] = useState(false)
  return (
    <section id="form" className={styles.wrap}>
      <h2 className={styles.title}>Запис на консультацію</h2>
      <form className={styles.grid} onSubmit={(e)=>{ e.preventDefault(); setSent(true) }}>
        <input required placeholder="Ім'я" className={styles.input}/>
        <input type="tel" required placeholder="Телефон або Telegram" className={styles.input}/>
        <input type="email" placeholder="Email (необов'язково)" className={`${styles.input} ${styles.full}`}/>
        <button className={`${styles.btn} btn btnOutline`}>Відправити</button>
      </form>
      {sent && <p className={styles.note}>Дякую! Я зв'яжусь з вами протягом дня.</p>}
    </section>
  )
}