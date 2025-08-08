export type Course = {
  id: string
  title: string
  priceUAH: number
  description: string
  lessons: { id: string; title: string; durationMin: number }[]
}