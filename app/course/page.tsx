import { BuyButton } from '@/components/BuyButton'
import { course } from '@/content/course'
import styles from './course.module.css'

export default function CoursePage(){
  return (
    <main>
      <div className="container">
        <div className={styles.wrap}>
          <h1 className={styles.title}>{course.title}</h1>
          <p className={styles.lead}>{course.description}</p>
          <div className={styles.price}>₴{course.priceUAH}</div>
          <div style={{marginTop: 24}}><BuyButton courseId={course.id} /></div>

          <h2 className={styles.subTitle}>Що всередині</h2>
          <ul className={styles.lessons}>
            {course.lessons.map(l => (
              <li key={l.id} className={styles.lessonItem}>
                <span>{l.title}</span>
                <span className={styles.lessonTime}>~{l.durationMin} хв</span>
              </li>
            ))}
          </ul>

          <div className={styles.info}>
            <div className={styles.infoTitle}>Після оплати</div>
            <ol className={styles.infoList}>
              <li>Вас перенаправить на сторінку з доступом до відео.</li>
              <li>Додатково отримаєте лист на email з посиланням.</li>
            </ol>
          </div>
        </div>
      </div>
    </main>
  )
}