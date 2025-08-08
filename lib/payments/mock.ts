import type { PaymentsProvider, CheckoutSession } from './provider'
export const MockPayments: PaymentsProvider = {
  async createCheckout(courseId: string): Promise<CheckoutSession> {
    const url = `${process.env.BASE_URL || 'http://localhost:3000'}/course?paid=1&c=${courseId}`
    return { paymentUrl: url }
  }
}