export type CheckoutSession = { paymentUrl?: string; checkoutPageHtml?: string }
export interface PaymentsProvider { createCheckout(courseId: string): Promise<CheckoutSession> }