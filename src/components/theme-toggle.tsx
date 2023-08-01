'use client'

import { useTheme } from 'next-themes'

import { Icons } from '@/assets/lucide-icons'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Icons.Sun className="transition-all rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
      <Icons.Moon className="absolute transition-all rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
