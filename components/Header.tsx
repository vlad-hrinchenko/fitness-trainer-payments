'use client'
import { useState } from 'react'
import styles from './Header.module.css'

export default function Header(){
  const [open, setOpen] = useState(false)
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.row}>
          <a href="/" className={styles.logo}>
            Fit by <span className={styles.accent}>Nika</span>
          </a>

          <button
            className={styles.burger}
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={()=> setOpen(v=>!v)}
          >
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
          </button>

          <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
            <a href="#benefits" className={styles.navLink} onClick={()=>setOpen(false)}>Переваги</a>
            <a href="#program" className={styles.navLink} onClick={()=>setOpen(false)}>Програма</a>
            <a href="#pricing" className={styles.navLink} onClick={()=>setOpen(false)}>Ціни</a>
            <a href="/course" className={`${styles.navLink} ${styles.navCta}`} onClick={()=>setOpen(false)}>Курс відео</a>
          </nav>
        </div>
      </div>
    </header>
  )
}