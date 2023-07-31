'use client'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { navigation } from '@/data/navigation'
import { cn } from '@/lib/utils'

function NavigationList() {
  const segment: string | null = useSelectedLayoutSegment()

  const data = navigation(segment).filter((item) => !item.mobileOnly)

  return (
    <ul
      className="list-reset hidden w-full flex-grow md:flex md:w-auto md:flex-grow-0 md:items-center md:gap-10"
      role="list"
    >
      {data.map((item) => (
        <li key={item.name}>
          <Button
            variant={item.name === 'Sign Up' ? 'outline' : 'link'}
            asChild
          >
            <Link
              className={cn(
                '!no-underline',
                item.name === 'Sign Up' && 'animated-button',
                item.current && 'text-pulse-green-800'
              )}
              href={item.href}
            >
              {item.name}
            </Link>
          </Button>
        </li>
      ))}
    </ul>
  )
}
export default NavigationList
