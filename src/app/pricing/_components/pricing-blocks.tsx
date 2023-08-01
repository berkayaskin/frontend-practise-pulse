import { pricingBlockList, type PricingBlockItem } from '@/data/pricing-page'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'
import Link from 'next/link'

const PricingBlocks = () => {
  return (
    <div className="container">
      <div className="-mx-4 lg:flex lg:items-center">
        {pricingBlockList.map((item: PricingBlockItem) =>
          item.name === 'Basics' ? (
            <div
              className="mb-8 lg:mb-0 lg:flex lg:w-1/3 lg:p-8"
              key={item.name}
            >
              <div className="container">
                <h2 className="mb-4 block text-xl font-bold leading-tight text-pulse-green-400">
                  {item.title}
                </h2>
                <ul className="mb-4 ml-8 block list-disc text-base lg:ml-4">
                  {item.features.map((feature: string) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <p className="text-base">
                  {item.included}
                  <br />
                  <Link
                    href={item.href}
                    className="font-normal text-pulse-gray-800 underline"
                  >
                    Get them now
                  </Link>{' '}
                  for {item.price}.
                </p>
              </div>
            </div>
          ) : (
            <div className="lg:flex lg:w-1/3" key={item.name}>
              <Link
                className={cn(
                  'group mx-4 mb-8 flex flex-col bg-white text-pulse-gray-700 no-underline lg:mx-0 lg:mb-0 lg:text-center',
                  item.name === 'Plus'
                    ? 'z-10 rounded-bl-none rounded-br-none rounded-tl-lg rounded-tr-lg outline outline-1 outline-pulse-green-400'
                    : 'border'
                )}
                href={item.href}
              >
                <div className="relative h-full overflow-hidden font-normal lg:flex lg:flex-col lg:px-8 lg:pb-6 lg:pt-12">
                  <div
                    className={cn(
                      'text-center lg:absolute lg:right-0 lg:top-0',
                      item.name === 'Plus'
                        ? 'w-full rounded-bl-none rounded-br-none rounded-tl-lg rounded-tr-lg bg-pulse-green-400 py-2 text-xs font-bold uppercase tracking-widest text-white lg:py-1'
                        : 'border-b border-b-border bg-pulse-gray-200 p-4 text-sm leading-snug lg:px-8 lg:pb-6 lg:pt-5'
                    )}
                  >
                    {item.banner}
                  </div>
                  <div className="flex items-center justify-between p-4 lg:block lg:p-0">
                    <div>
                      <div
                        className={cn(
                          '!leading-none tracking-tighterer text-pulse-green-400 xs:inline-block lg:block',
                          item.name === 'Plus'
                            ? 'text-4xl font-bold lg:mt-4 lg:px-4 lg:text-5xl'
                            : 'text-3xl lg:mt-16 lg:text-4xl'
                        )}
                      >
                        {item.title}
                      </div>
                      <div className="align-text-bottom !leading-none tracking-tighter text-pulse-gray-600 xs:inline-block xs:pl-2 xs:text-xl sm:pl-3 sm:align-bottom sm:text-2xl lg:my-2 lg:mb-6 lg:block lg:text-2xl">
                        {item.price}
                      </div>
                      <div className="mt-auto hidden lg:block">
                        <div className="mb-8 inline-block bg-pulse-green-300 px-8 pb-3 pt-2 text-xl font-bold leading-normal transition-all duration-55 ease-in-out scale-100 group-hover:scale-110">
                          {item.buttonText}
                        </div>
                      </div>
                      <div className="mt-8 text-xs font-bold uppercase leading-tight tracking-widest lg:mt-0">
                        {item.included}
                      </div>
                    </div>
                  </div>
                  <ul className="px-8 pb-4 text-left tracking-tighter lg:mb-4 lg:px-0 lg:pb-0">
                    {item.features.map((feature: string) => (
                      <li
                        className="relative py-2 leading-tight lg:leading-normal"
                        key={feature}
                      >
                        <Check
                          strokeWidth={4}
                          className="relative -left-1 inline-block h-3 w-3 text-pulse-green-400"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="block p-4 lg:hidden">
                    <div className="w-full bg-pulse-green-300 px-8 pb-3 pt-2 text-center text-xl font-bold">
                      {item.buttonText}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default PricingBlocks
