export type FooterNavigationItem = {
  title: string
  navigation: {
    title: string
    href: string
  }[]
}

export type FooterNavigation = FooterNavigationItem[]

export const footer: FooterNavigation = [
  {
    title: 'Product',
    navigation: [
      {
        title: 'Features',
        href: '/features',
      },
      {
        title: 'Pricing',
        href: '/pricing',
      },
      {
        title: 'Sign Up',
        href: '/signup',
      },
    ],
  },
  {
    title: 'Company',
    navigation: [
      {
        title: 'Customer Stories',
        href: '/customer-stories',
      },
      {
        title: 'About',
        href: '/about',
      },
      {
        title: 'Contact',
        href: '/contact',
      },
    ],
  },
  {
    title: 'Resources',
    navigation: [
      {
        title: 'Support',
        href: '/support',
      },
      {
        title: 'Blog',
        href: '/blog',
      },
    ],
  },
]
