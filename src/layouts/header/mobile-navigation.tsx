'use client'
import { Button } from '@/components/ui/button'
import { navigation } from '@/data/navigation'
import { useAppSelector } from '@/lib/redux/hooks/useAppSelector'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { useMemo } from 'react'
import styles from './mobile-navigation.module.css'

function MobileNavigation() {
  const segment: string | null = useSelectedLayoutSegment()
  const data = useMemo(() => navigation(segment), [segment])
  const isOpen = useAppSelector((state) => state.mobileNavigation.isOpen)

  return (
    <ul
      className={cn(
        styles.mobileNavigation,
        isOpen && styles.mobileNavigationOpen
      )}
    >
      {data.map((item) =>
        item.name !== 'Sign Up' ? (
          <li
            key={item.name}
            className={cn(
              styles.mobileNavigationItem,
              isOpen && styles.mobileNavigationItemOpen
            )}
          >
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
          <li
            key={item.name}
            className={cn(
              'pt-4',
              styles.mobileNavigationItem,
              isOpen && styles.mobileNavigationItemOpen
            )}
          >
            <Button variant="gradient" asChild fontSize="lg">
              <Link className="p-4" href={item.href}>
                {item.name + `${' '}for a Free 30-Day Trial`}
              </Link>
            </Button>
          </li>
        )
      )}
    </ul>
  )
}
export default MobileNavigation
