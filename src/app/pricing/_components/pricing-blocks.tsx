import { pricingBlockList, type PricingBlock } from '@/data/pricing-page'

import PricingBlockItem from './pricing-block-item'

const PricingBlocks = () => {
  return (
    <section className="container">
      <div className="-mx-4 lg:flex lg:items-center">
        {pricingBlockList.map((block: PricingBlock) => (
          <PricingBlockItem key={block.name} block={block} />
        ))}
      </div>
    </section>
  )
}

export default PricingBlocks
