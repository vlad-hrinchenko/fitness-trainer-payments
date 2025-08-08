import Hero from '@/components/Hero'
import { Benefits } from '@/components/Benefits'
import { Program } from '@/components/Program'
import { Pricing } from '@/components/Pricing'
import { LeadForm } from '@/components/LeadForm'

export default function Page(){
  return (
    <main>
      <div className="container">
        <Hero />
        <Benefits />
        <Program />
        <Pricing />
        <LeadForm />
      </div>
    </main>
  )
}