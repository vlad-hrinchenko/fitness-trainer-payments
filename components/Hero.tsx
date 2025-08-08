import styles from './Hero.module.css'

export default function Hero(){
  return (
    <section className={styles.wrap}>
      <div className={styles.colText}>
        <h1 className={styles.title}>
          Ставай сильнішою та впевненішою з <span className={styles.accent}>Нікою</span>
        </h1>
        <p className={styles.lead}>
          Персональні онлайн-тренування, збалансовані плани та підтримка. Без виснаження, з реальним результатом.
        </p>
        <div className={styles.actions}>
          <a href="#pricing" className="btn btnOutline">Записатися</a>
          <a href="/course" className="btn btnPrimary">Купити відеокурс</a>
        </div>
        <div className={styles.subnote}>• Домашні тренування • Безпечно для спини та колін • 30–45 хв</div>
      </div>
      <div className={styles.colMedia} />
    </section>
  )
}