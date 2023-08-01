import type { NextPage } from 'next'
import HeroSection from './_components/hero-section'
import PricingBlocks from './_components/pricing-blocks'

const Pricing: NextPage = () => {
  return (
    <div className="border-b bg-pulse-green-100">
      <HeroSection />
      <PricingBlocks />
    </div>
  )
}
export default Pricing
