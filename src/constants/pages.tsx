import { Activity, Contact2, Home, Rocket, Settings } from "lucide-react"

export const PAGE_BOARD_CRUMBS: string[] = [
  'contacts',
  'automations',
  'integrations',
  'settings'
]

type Props = {
  [page in string]: React.ReactNode
}

export const PAGE_ICON: Props = {
  AUTOMATIONS: <Activity />,
  INTEGRATIONS: <Rocket />,
  SETTINGS: <Settings />,
  HOME: <Home />,
  CONTACTS: <Contact2 />
}

export const PLANS = [
    {
      name: 'Free Plan',
      description: 'Perfect for getting started',
      price: '$0',
      features: [
        'Boost engagement with target responses',
        'Automate comment replies to enhance audience interaction',
        'Turn followers into customers with targeted messaging',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Smart AI Plan',
      description: 'Advanced features for power users',
      price: '$99',
      features: [
        'All features from Free Plan',
        'AI-powered response generation',
        'Advanced analytics and insights',
        'Priority customer support',
        'Custom branding options',
      ],
      cta: 'Upgrade Now',
    },
  ]