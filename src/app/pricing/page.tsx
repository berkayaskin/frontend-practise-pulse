import type { NextPage } from 'next'
import ClientFeedback from './_components/client-feedback'
import HeroSection from './_components/hero-section'
import PricingBlocks from './_components/pricing-blocks'

const Pricing: NextPage = () => {
  return (
    <div className="border-b bg-pulse-green-100">
      <HeroSection />
      <PricingBlocks />
      <ClientFeedback />
    </div>
  )
}
export default Pricing
