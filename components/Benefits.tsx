import styles from './Benefits.module.css'

const items = [
  {title:'Жироспалення без марафонів', text:'Функціональні комплекси з пульс-контролем.'},
  {title:'Тонус і мобільність', text:'Силові та стретч-блоки для красивих ліній.'},
  {title:'Гнучкий графік', text:'Займайся коли зручно — відео та супровід.'}
]
export function Benefits(){
  return (
    <section id="benefits" className={styles.wrap}>
      <h2 className={styles.title}>Чому це працює</h2>
      <div className={styles.grid}>
        {items.map((i)=> (
          <div key={i.title} className={styles.card}>
            <div className={styles.cardTitle}>{i.title}</div>
            <div className={styles.cardText}>{i.text}</div>
          </div>
        ))}
      </div>
    </section>
  )
}