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
  },
];

export function getFloorPlanBySlug(slug: string): FloorPlan | undefined {
  return floorPlans.find((plan) => plan.slug === slug);
}

export function getAllFloorPlanSlugs(): string[] {
  return floorPlans.map((plan) => plan.slug);
}
