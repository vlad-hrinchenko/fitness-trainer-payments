import Link from 'next/link'
import styles from './Pricing.module.css'

export function Pricing(){
  return (
    <section id="pricing" className={styles.wrap}>
      <h2 className={styles.title}>Ціни</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Персональний супровід</div>
          <div className={styles.price}>₴2 490 / місяць</div>
          <ul className={styles.features}>
            <li>3 тренування на тиждень</li>
            <li>Щотижневий контакт і корекції</li>
            <li>План харчування</li>
          </ul>
          <a href="#form" className="btn btnOutline">Записатися</a>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Відеокурс «Старт за 21 день»</div>
          <div className={styles.price}>₴990 одноразово</div>
          <ul className={styles.features}>
            <li>12 відео (3/тиждень)</li>
            <li>PDF-план і чек-листи</li>
            <li>Доступ 12 місяців</li>
          </ul>
          <Link href="/course" className="btn btnPrimary">Купити курс</Link>
        </div>
      </div>
    </section>
  )
}