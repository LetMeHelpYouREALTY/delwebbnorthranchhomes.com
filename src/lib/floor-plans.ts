export type FloorPlan = {
  slug: string;
  name: string;
  series: 'Cottage' | 'Classic' | 'Retreat';
  sqft: string;
  sqftNumber: number;
  beds: number;
  baths: number;
  garage: number;
  description: string;
  priceRange: string;
  features: string[];
  imageUrl?: string;
  /** True when imageUrl is an illustrative rendering rather than a photo of this exact plan. */
  imageIsRendering?: boolean;
};

export const floorPlans: FloorPlan[] = [
  // Cottage Series
  {
    slug: 'sanctuary',
    name: 'Sanctuary',
    series: 'Cottage',
    sqft: '1,285',
    sqftNumber: 1285,
    beds: 2,
    baths: 2,
    garage: 2,
    description:
      'Efficient and comfortable, perfect for those seeking cozy living without compromise.',
    priceRange: '$400,000 - $450,000',
    features: [
      'Open-concept living area',
      'Master suite with walk-in closet',
      'Covered patio',
      'Energy-efficient design',
    ],
    imageUrl: '/images/homes/sanctuary-cottage.jpg',
    imageIsRendering: true,
  },
  {
    slug: 'haven',
    name: 'Haven',
    series: 'Cottage',
    sqft: '1,509',
    sqftNumber: 1509,
    beds: 2,
    baths: 2.5,
    garage: 2,
    description:
      'Largest in the Cottage series with 2.5 baths and expanded living space.',
    priceRange: '$450,000 - $500,000',
    features: [
      '2.5 bathrooms',
      'Expanded master suite',
      'Great room design',
      'Optional den',
    ],
    imageUrl: '/images/homes/haven-6584.jpg',
  },
  // Classic Series
  {
    slug: 'explore',
    name: 'Explore',
    series: 'Classic',
    sqft: '1,451',
    sqftNumber: 1451,
    beds: 2,
    baths: 2,
    garage: 2,
    description:
      'Room to spread out with optional den for hobbies or home office.',
    priceRange: '$475,000 - $525,000',
    features: [
      'Optional den/study',
      'Flexible living spaces',
      'Modern kitchen design',
      'Extended covered patio',
    ],
    imageUrl: '/images/homes/explore-classic.jpg',
    imageIsRendering: true,
  },
  {
    slug: 'journey',
    name: 'Journey',
    series: 'Classic',
    sqft: '1,620',
    sqftNumber: 1620,
    beds: 3,
    baths: 2,
    garage: 2,
    description:
      'Three-bedroom design with flexible space for guests or family.',
    priceRange: '$500,000 - $550,000',
    features: [
      'Three bedrooms',
      'Guest-friendly layout',
      'Spacious great room',
      'Premium finishes available',
    ],
    imageUrl: '/images/homes/journey-classic.jpg',
    imageIsRendering: true,
  },
  {
    slug: 'pursuit',
    name: 'Pursuit',
    series: 'Classic',
    sqft: '1,770',
    sqftNumber: 1770,
    beds: 3,
    baths: 2.5,
    garage: 2,
    description:
      'Spacious three-bedroom with 2.5 baths and generous living areas.',
    priceRange: '$525,000 - $575,000',
    features: [
      '2.5 bathrooms',
      'Large great room',
      'Gourmet kitchen options',
      'Extended outdoor living',
    ],
    imageUrl: '/images/homes/pursuit-classic.jpg',
    imageIsRendering: true,
  },
  // Retreat Series
  {
    slug: 'stellar',
    name: 'Stellar',
    series: 'Retreat',
    sqft: '1,716',
    sqftNumber: 1716,
    beds: 3,
    baths: 2,
    garage: 2,
    description:
      'Perfect for entertaining with open concept and premium finishes.',
    priceRange: '$550,000 - $600,000',
    features: [
      'Entertainment-focused design',
      'Premium finishes standard',
      'Large covered patio',
      'Gourmet kitchen',
    ],
    imageUrl: '/images/homes/stellar-retreat.jpg',
    imageIsRendering: true,
  },
  {
    slug: 'mystique',
    name: 'Mystique',
    series: 'Retreat',
    sqft: '1,850',
    sqftNumber: 1850,
    beds: 3,
    baths: 2.5,
    garage: 2,
    description:
      'Spacious living for those who love to host or want extra room.',
    priceRange: '$575,000 - $600,000',
    features: [
      '2.5 bathrooms',
      'Expansive great room',
      'Luxury master suite',
      'Designer finishes',
    ],
    imageUrl: '/images/homes/mystique-retreat.jpg',
    imageIsRendering: true,
  },
  {
    slug: 'reverence',
    name: 'Reverence',
    series: 'Retreat',
    sqft: '2,015',
    sqftNumber: 2015,
    beds: 3,
    baths: 2.5,
    garage: 2,
    description:
      'Largest floor plan with ample space for visiting family and entertaining.',
    priceRange: '$600,000+',
    features: [
      'Largest floor plan',
      'Luxury finishes throughout',
      'Multiple living areas',
      'Premium outdoor spaces',
    ],
    imageUrl: '/images/homes/reverence-retreat.jpg',
    imageIsRendering: true,
  },
];

/** Parses "$400,000 - $450,000" or "$600,000+" into numeric bounds for schema offers. */
export function planPriceBounds(plan: FloorPlan): { low: number; high?: number } {
  const [low, high] = (plan.priceRange.match(/[\d,]+/g) ?? []).map((n) =>
    Number(n.replace(/,/g, ''))
  );
  return { low, high };
}

/** One-sentence, answer-first description of a plan for AI answers and featured snippets. */
export function planAnswer(plan: FloorPlan): string {
  return `The ${plan.name} is a ${plan.sqft} sq ft single-story ${plan.series} Series floor plan at Del Webb North Ranch in North Las Vegas, NV 89086, with ${plan.beds} bedrooms, ${plan.baths} bathrooms, and a ${plan.garage}-car garage. Estimated price range: ${plan.priceRange}, depending on homesite, upgrades, and market conditions.`;
}

/** Plan-specific questions answered from site data only; rendered visibly and as FAQPage schema. */
export function planFaq(plan: FloorPlan): Array<{ question: string; answer: string }> {
  const siblings = floorPlans
    .filter((p) => p.series === plan.series && p.slug !== plan.slug)
    .map((p) => `${p.name} (${p.sqft} sq ft)`);
  return [
    {
      question: `How big is the ${plan.name} floor plan at Del Webb North Ranch?`,
      answer: `The ${plan.name} is ${plan.sqft} sq ft, single-story, with ${plan.beds} bedrooms, ${plan.baths} bathrooms, and a ${plan.garage}-car garage.`,
    },
    {
      question: `How much does a ${plan.name} home cost at Del Webb North Ranch?`,
      answer: `The estimated range is ${plan.priceRange}. Final price depends on the homesite, upgrades, and current market conditions. Call Dr. Jan Duffy at (702) 500-1064 for current ${plan.name} resale listings.`,
    },
    {
      question: `Which series is the ${plan.name} in?`,
      answer: siblings.length
        ? `The ${plan.name} is in the ${plan.series} Series, alongside the ${siblings.join(' and ')}.`
        : `The ${plan.name} is in the ${plan.series} Series.`,
    },
    {
      question: `Who can buy a ${plan.name} home at Del Webb North Ranch?`,
      answer: `Del Webb North Ranch is a 55+ community: at least one resident in each home must be 55 or older under the Housing for Older Persons Act (HOPA). HOA dues are about $215 per month, billed quarterly, with no SID or LID.`,
    },
  ];
}

export function getFloorPlanBySlug(slug: string): FloorPlan | undefined {
  return floorPlans.find((plan) => plan.slug === slug);
}

export function getAllFloorPlanSlugs(): string[] {
  return floorPlans.map((plan) => plan.slug);
}
