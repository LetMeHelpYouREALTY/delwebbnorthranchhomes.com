// lib/communityData.ts
// Comprehensive community data for Del Webb North Ranch

export type CommunityInfo = {
  name: string;
  developer: string;
  type: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  totalAcres: number;
  totalHomes: number;
  priceRange: string;
  hoaFee: string;
  hoaBilling: string;
  sidLid: string;
  gated: boolean;
  security: string;
  constructionStart: number;
  constructionEnd: number;
  clubhouseOpened: string;
  clubhouseSize: string;
  propertyTaxRate: string;
  petPolicy: string;
  ageRequirement: string;
};

export type HomesitesByCollection = {
  cottage: { count: number; sqftRange: string };
  classic: { count: number; sqftRange: string };
  retreat: { count: number; sqftRange: string };
};

export type Distance = {
  miles: number;
  description: string;
};

export const communityInfo: CommunityInfo = {
  name: 'Del Webb North Ranch',
  developer: 'Del Webb (Pulte Homes)',
  type: '55+ Active Adult Gated Community',
  address: '2290 Beauty Vista Avenue',
  city: 'North Las Vegas',
  state: 'NV',
  zip: '89086',
  totalAcres: 80,
  totalHomes: 394,
  priceRange: '$400,000 - $600,000',
  hoaFee: '$215/month',
  hoaBilling: 'Quarterly',
  sidLid: 'None',
  gated: true,
  security: 'Virtual concierge and roving security',
  constructionStart: 2020,
  constructionEnd: 2024,
  clubhouseOpened: 'October 16, 2021',
  clubhouseSize: '10,000 sq ft',
  propertyTaxRate: '~1% of assessed value',
  petPolicy: 'All pets welcome, follows City of North Las Vegas rules',
  ageRequirement: 'At least one resident must be 55+',
};

export const homesitesByCollection: HomesitesByCollection = {
  cottage: { count: 132, sqftRange: '1,285-1,509' },
  classic: { count: 132, sqftRange: '1,451-1,770' },
  retreat: { count: 130, sqftRange: '1,716-2,015' },
};

export const distances: Record<string, Distance> = {
  mcCarranAirport: {
    miles: 17,
    description: 'Harry Reid International Airport (formerly McCarran)',
  },
  lasVegasStrip: {
    miles: 15,
    description: 'Las Vegas Strip dining, shopping, entertainment',
  },
  centennialLibrary: {
    miles: 10,
    description: 'Centennial Hills Library (LEED Gold certified)',
  },
  craigRanchPark: {
    miles: 5,
    description: 'Craig Ranch Regional Park (170 acres)',
  },
  alianteGolf: {
    miles: 5,
    description: 'Aliante Golf Club (18-hole championship)',
  },
  floydLambPark: {
    miles: 14,
    description: 'Floyd Lamb Park (680 acres)',
  },
  lakeMead: {
    miles: 34,
    description: 'Lake Mead',
  },
  vaHospital: {
    miles: 2,
    description: 'VA Southern Nevada Hospital',
  },
  centennialHospital: {
    miles: 12,
    description: 'Centennial Hills Hospital',
  },
};

export const amenities = [
  'Resort-style pool',
  'Heated lap pool',
  'Spa',
  'Fitness center',
  'Fitness-on-demand room',
  'Great room',
  'Billiards room',
  'Social rooms',
  'Locker rooms with showers',
  'Lighted pickleball courts',
  'Bocce ball courts',
  'Community event lawn',
  'Outdoor fire pit',
  'Walking trails',
  'Dog park',
];

// Helper functions
export function getCommunityInfo(): CommunityInfo {
  return communityInfo;
}

export function getHomesitesByCollection(): HomesitesByCollection {
  return homesitesByCollection;
}

export function getDistances(): Record<string, Distance> {
  return distances;
}

export function getAmenities(): string[] {
  return amenities;
}
