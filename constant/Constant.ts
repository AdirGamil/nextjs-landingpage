export const navLinks = [
  {
    id: 1,
    url: '#top',
    label: 'Home',
  },
  {
    id: 2,
    url: '#about',
    label: 'About',
  },
  {
    id: 3,
    url: '#features',
    label: 'Features',
  },
  {
    id: 4,
    url: '#testimonials',
    label: 'Testimonials',
  },
  {
    id: 5,
    url: '#pricing',
    label: 'Pricing',
  },

]

export const pricingPlans = [
  {
    id: 1,
    name: 'Standard plan',
    price: 49,
    features: [
      '2 team members',
      '20GB Cloud storage',
      'Integration help',
      { label: 'Sketch Files', disabled: true },
      { label: 'API Access', disabled: true },
      { label: 'Complete documentation', disabled: true },
      { label: '24×7 phone & email support', disabled: true },
    ],
  },
  {
    id: 2,
    name: 'Pro plan',
    price: 99,
    features: [
      '10 team members',
      '100GB Cloud storage',
      'Priority Integration',
      'Sketch Files',
      'API Access',
      { label: 'Complete documentation', disabled: true },
      { label: '24×7 phone & email support', disabled: true },
    ],
  },
  {
    id: 3,
    name: 'Enterprise plan',
    price: 199,
    features: [
      'Unlimited team members',
      '1TB Cloud storage',
      'Full Integration support',
      'Sketch Files',
      'API Access',
      'Complete documentation',
      '24×7 phone & email support',
    ],
  },
]
