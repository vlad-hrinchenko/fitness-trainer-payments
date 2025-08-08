'use client'
import styles from './Header.module.css'

export default function Header(){
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.row}>
          <a href="/" className={styles.logo}>
            Fit by <span className={styles.accent}>Nika</span>
          </a>
          <nav className={styles.nav}>
            <a href="#benefits" className={styles.navLink}>Переваги</a>
            <a href="#program" className={styles.navLink}>Програма</a>
            <a href="#pricing" className={styles.navLink}>Ціни</a>
            <a href="/course" className={`${styles.navLink} ${styles.navCta}`}>Курс відео</a>
          </nav>
        </div>
      </div>
    </header>
  )
}