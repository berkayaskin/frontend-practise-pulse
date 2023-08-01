type NavigationItem = {
  name: string
  href: string
  current: boolean
  mobileOnly: boolean
}

type NavigationList = NavigationItem[]

export function navigation(segment: string | null): NavigationList {
  return [
    {
      name: 'Features',
      href: '/features',
      current: segment === 'features',
      mobileOnly: false,
    },
    {
      name: 'Customer Stories',
      href: '/customer-stories',
      current: segment === 'customer-stories',
      mobileOnly: false,
    },
    {
      name: 'Pricing',
      href: '/pricing',
      current: segment === 'pricing',
      mobileOnly: false,
    },
    {
      name: 'Blog',
      href: '/blog',
      current: segment === 'blog',
      mobileOnly: false,
    },
    {
      name: 'Contact',
      href: '/contact',
      current: segment === 'contact',
      mobileOnly: true,
    },
    {
      name: 'Support',
      href: '/support',
      current: segment === 'support',
      mobileOnly: true,
    },
    {
      name: 'Sign Up',
      href: '/sign-up',
      current: segment === 'sign-up',
      mobileOnly: false,
    },
  ]
}
