import styles from './Program.module.css'

export function Program(){
  return (
    <section id="program" className={styles.wrap}>
      <h2 className={styles.title}>Програма тренувань</h2>
      <ul className={styles.list}>
        <li>3 тренування/тиждень: верх/низ/фулл-боді</li>
        <li>30–45 хвилин, обладнання мінімальне</li>
        <li>Розігрів, силовий блок, кардіо-інтервали, заминка</li>
        <li>Харчові рекомендації та чек-листи</li>
      </ul>
    </section>
  )
}