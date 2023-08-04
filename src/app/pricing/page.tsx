import type { NextPage } from 'next'
import ClientFeedback from './_components/client-feedback'
import FaqSection from './_components/faq'
import Hero from './_components/hero'
import PricingBlocks from './_components/pricing-blocks'

const Pricing: NextPage = () => {
  return (
    <>
      <section className="border-b bg-pulse-green-100">
        <Hero />
        <PricingBlocks />
        <ClientFeedback />
      </section>
      <FaqSection />
    </>
  )
}
export default Pricing
