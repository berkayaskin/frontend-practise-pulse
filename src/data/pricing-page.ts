export type Hero = {
  title: string
  subtitle: string
}

export const hero: Hero = {
  title: 'Try Pulse free for\n30 days.',
  subtitle:
    'See why Pulse is the best way to monitor your cash flow. Sign up for any plan and try Pulse absolutely free for 30 days.',
}

export type PricingBlockItem = {
  name: 'Basics' | 'Plus' | 'Premium'
  banner?: string
  title: string
  price: string
  buttonText?: string
  href: string
  included: string
  features: string[]
}

export type PricingBlockList = PricingBlockItem[]

export const pricingBlockList: PricingBlockList = [
  {
    name: 'Basics',
    title:
      "These are what we call the Pulse Basics. They're what every customer gets.",
    price: '$29 per month',
    href: '/signup/basic',
    included: 'Just need the Pulse Basics?',
    features: [
      'Manage cash flow on a daily, weekly, monthly, or yearly basis',
      'Forecast growth with recurring income or expenses that scale automatically',
      'Works with any currency',
      'See Money In and Money Out, categorize transactions, and run helpful reports',
      'Toggle entries and accounts on and off to game out different scenarios',
    ],
  },
  {
    name: 'Plus',
    banner: 'Recommended',
    title: 'Small Business Plan',
    price: '$59 per month',
    buttonText: 'Sign Up Now',
    href: '/signup/plus',
    included: 'You get pulse basics, plus:',
    features: [
      'Manage cash flow across multiple financial accounts',
      'Invite your investors, book keeper, or management team to see reports or manage cash flow',
      'Integrate with QuickBooks Online for more accurate cash flow',
      'Track your actual cash flow alongside your projected cash flow',
    ],
  },
  {
    name: 'Premium',
    banner:
      'Complex business with multiple financial accounts, currencies, or auditing needs?',
    title: 'Unlock Extra Features',
    price: '$89 per month',
    buttonText: 'Try Premium',
    href: '/signup/premium',
    included: 'Get it all, plus:',
    features: [
      'Manage cash flow across unlimited financial accounts',
      'Convert to any currency for localized cash flow reporting and projections',
      'Attach invoices or contracts to your cash flow entries for accountability and auditing',
    ],
  },
]

export type ClientFeedback = {
  client: string
  feedback: string
  image: string
}

export const clientFeedback: ClientFeedback = {
  client: 'Subvert Marketing, Inc',
  feedback:
    '“Pulse is worth every penny because it empowers business owners with critical financial insight and knowledge.”',
  image: '/assets/images/pricing-page/client.png',
}

export type FAQ = {
  question: string
  answer: string
}

export type FAQList = FAQ[]

export const faq: FAQList = [
  {
    question: 'How does the 30-day free trial work?',
    answer:
      'You can use Pulse absolutely free for 30 days. After 30 days, we will charge the credit card you used when you sign up. If you choose to cancel your account before your trial ends, your card will not be charged.',
  },
  {
    question: 'If I upgrade an existing account, do I get another free trial?',
    answer:
      'Brand new accounts are the only ones eligible for a 30-day free trial. If you upgrade an existing account, your credit card will be billed the new amount on the date of your next billing cycle.',
  },
  {
    question: 'What is a “Financial Account”?',
    answer:
      "Financial Accounts are a grouping of income and expense items that can be used for tracking or reporting purposes.\nThey're designed to be flexible and can be used to differentiate between bank accounts, companies, individuals or between personal and business entries.",
  },
  {
    question: 'Do I have to commit to a long-term contract?',
    answer:
      'No. There is no contract when you use Pulse, other than agreeing to our Terms of Service.',
  },
  {
    question: 'Will I be able to cancel my account if I don’t use Pulse?',
    answer:
      'Yes – you can cancel your account at any time. To cancel your account, go to your billing page and click on “Please cancel my account” at the bottom of the page. The account owner is the only one who can cancel an account. An email request to delete an account is not considered cancellation.',
  },
  {
    question: 'What types of payments do you accept?',
    answer:
      'We accept payments made online using Visa, Mastercard, Discover, and American Express.',
  },
]
