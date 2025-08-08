import { NextResponse } from 'next/server'
import { LiqPayProvider } from '@/lib/payments/liqpay'

export async function POST(req: Request){
  try{
    const { courseId } = await req.json()
    if(!courseId){ return NextResponse.json({ message: "courseId обов'язковий" }, { status: 400 }) }
    const session = await LiqPayProvider.createCheckout(courseId)
    return NextResponse.json(session)
  }catch(err:any){
    return NextResponse.json({ message: err?.message || 'Payment error' }, { status: 500 })
  }
}