import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { type PricingBlock } from '@/data/pricing-page'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'
import Link from 'next/link'

type Props = {
  block: PricingBlock
}
const PricingBlockItem = ({ block }: Props) => {
  return block.name === 'Basics' ? (
    <Card className="mb-8 border-none bg-transparent shadow-none lg:mb-0 lg:w-1/3 lg:p-8">
      <CardHeader>
        <CardTitle className="mb-4 block text-xl font-bold leading-tight text-pulse-green-400">
          {block.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="mb-4 ml-8 block list-disc text-base lg:ml-4">
          {block.features.map((feature: string) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <p className="text-base">
          {block.included}
          <br />
          <Link
            href={block.href}
            className="font-normal text-pulse-gray-800 underline"
          >
            Get them now
          </Link>{' '}
          for {block.price}.
        </p>
      </CardFooter>
    </Card>
  ) : (
    <div className="lg:w-1/3">
      <Link
        className={cn(
          'group mx-4 mb-8 flex flex-col border text-pulse-gray-700 lg:mx-0 lg:mb-0 lg:text-center',
          block.name === 'Plus' &&
            'z-50 rounded-bl-none rounded-br-none rounded-tl-lg rounded-tr-lg border-pulse-green-400'
        )}
        href={block.href}
      >
        <Card className="relative overflow-hidden border-none font-normal lg:pt-6">
          <div
            className={cn(
              'text-center lg:absolute lg:right-0 lg:top-0',
              block.name === 'Plus'
                ? 'w-full rounded-bl-none rounded-br-none rounded-tl-lg rounded-tr-lg bg-pulse-green-400 py-2 text-xs font-bold uppercase tracking-widest text-white lg:py-1'
                : 'border-b border-b-border bg-pulse-gray-200 p-4 text-sm leading-snug lg:px-8 lg:pb-6 lg:pt-5'
            )}
          >
            {block.banner}
          </div>
          <CardHeader className="inline-flex flex-row flex-wrap p-8 sm:items-center lg:flex-col">
            <CardTitle
              className={cn(
                '!leading-none tracking-tighterer text-pulse-green-400',
                block.name === 'Plus'
                  ? 'text-4xl font-bold lg:mt-4 lg:px-4 lg:text-5xl'
                  : 'text-3xl lg:mt-16 lg:text-4xl'
              )}
            >
              {block.title}
            </CardTitle>
            <CardDescription className="mb-0 text-2xl tracking-tighter text-pulse-gray-600 lg:mb-4">
              {block.price}
            </CardDescription>
            <CardDescription className="mt-auto hidden lg:block">
              <button className="inline-block bg-pulse-green-300 px-8 pb-3 pt-2 text-xl font-bold leading-normal text-pulse-gray-700 transition-all duration-55 ease-in-out scale-100 group-hover:scale-110">
                {block.buttonText}
              </button>
            </CardDescription>
          </CardHeader>
          <CardContent className="px-8 pb-4">
            <div className="pb-2 pl-1 text-xs font-bold uppercase leading-tight tracking-widest lg:mt-0">
              {block.included}
            </div>
            <ul className="text-left tracking-tighter lg:mb-4 lg:px-0 lg:pb-0">
              {block.features.map((feature: string) => (
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
          </CardContent>
          <CardFooter className="block p-4 lg:hidden">
            <div className="w-full bg-pulse-green-300 px-8 pb-3 pt-2 text-center text-xl font-bold">
              {block.buttonText}
            </div>
          </CardFooter>
        </Card>
      </Link>
    </div>
  )
}
export default PricingBlockItem
