import type { Course } from '@/types/course'
export const course: Course = {
  id: 'start-21',
  title: 'Старт за 21 день',
  priceUAH: 990,
  description: 'Домашня програма для тонусу та здорових звичок за 3 тижні.',
  lessons: Array.from({length:12}).map((_,i)=>({ id: `l${i+1}`, title:`Урок ${i+1}`, durationMin: 35 }))
}