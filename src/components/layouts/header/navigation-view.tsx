'use client'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

function NavigationView({
  mobile,
  className,
}: {
  mobile?: boolean
  className?: string
}) {
  const segment: string | null = useSelectedLayoutSegment()
  const navigationMobile = [
    {
      name: 'Features',
      href: '/features',
      current: segment === 'features',
      mobile: false,
    },
    {
      name: 'Customer Stories',
      href: '/customer-stories',
      current: segment === 'customer-stories',
      mobile: false,
    },
    {
      name: 'Pricing',
      href: '/pricing',
      current: segment === 'pricing',
      mobile: false,
    },
    {
      name: 'Blog',
      href: '/blog',
      current: segment === 'blog',
      mobile: false,
    },
    {
      name: 'Contact',
      href: '/contact',
      current: segment === 'contact',
      mobile: true,
    },
    {
      name: 'Support',
      href: '/support',
      current: segment === 'support',
      mobile: true,
    },
    {
      name: 'Sign Up',
      href: '/sign-up',
      current: segment === 'sign-up',
      mobile: false,
    },
  ]
  const navigationWeb = navigationMobile.filter((item) => !item.mobile)

  return (
    <ul className={className} role="list">
      {mobile
        ? navigationMobile.map((item) =>
            item.name !== 'Sign Up' ? (
              <li key={item.name}>
                <Button variant="ghost" asChild>
                  <Link
                    className={cn(
                      '!block py-2 !text-4xl !leading-none',
                      item.current && 'text-pulse-green-800'
                    )}
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                </Button>
              </li>
            ) : (
              <li key={item.name} className="pt-4">
                <Button variant="gradient" asChild fontSize="lg">
                  <Link className="p-4" href={item.href}>
                    {item.name + `${' '}for a Free 30-Day Trial`}
                  </Link>
                </Button>
              </li>
            )
          )
        : navigationWeb.map((item) => (
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
export default NavigationView
