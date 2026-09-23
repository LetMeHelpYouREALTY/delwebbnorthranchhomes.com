import type { Listing } from "@/types/listing";

/**
 * Fetches Del Webb North Ranch listings
 * TODO: Replace with actual RealScout API integration
 * For now, returns mock data matching the community specifications
 */
export async function getDelWebbListings(): Promise<Listing[]> {
  // TODO: Replace with RealScout API call
  // Example:
  // const response = await fetch(
  //   `https://api.realscout.com/v3/listings?community=del-webb-north-ranch`,
  //   {
  //     headers: {
  //       Authorization: `Bearer ${process.env.REALSCOUT_API_KEY}`,
  //     },
  //   }
  // );
  // const data = await response.json();
  // return data.listings;

  // Mock data for development
  // In production, this should fetch from RealScout or MLS API
  return [
    {
      id: "1",
      address: "2290 Beauty Vista Avenue",
      city: "North Las Vegas",
      state: "NV",
      zipCode: "89086",
      price: 485000,
      bedrooms: 2,
      bathrooms: 2,
      squareFeet: 1425,
      yearBuilt: 2020,
      imageUrl: "/images/homes/haven-6584.jpg",
      status: "active",
      description: "Beautiful single-story home in Del Webb North Ranch",
      floorPlan: "Haven",
      series: "Cottage",
    },
    {
      id: "2",
      address: "2310 Beauty Vista Avenue",
      city: "North Las Vegas",
      state: "NV",
      zipCode: "89086",
      price: 525000,
      bedrooms: 3,
      bathrooms: 2.5,
      squareFeet: 1750,
      yearBuilt: 2021,
      imageUrl: "/images/homes/stellar-retreat.jpg",
      status: "active",
      description: "Spacious retreat series home with den",
      floorPlan: "Retreat Haven",
      series: "Retreat",
    },
    {
      id: "3",
      address: "2330 Beauty Vista Avenue",
      city: "North Las Vegas",
      state: "NV",
      zipCode: "89086",
      price: 450000,
      bedrooms: 2,
      bathrooms: 2,
      squareFeet: 1285,
      yearBuilt: 2019,
      imageUrl: "/images/homes/sanctuary-cottage.jpg",
      status: "active",
      description: "Cozy cottage series home perfect for downsizing",
      floorPlan: "Cottage Haven",
      series: "Cottage",
    },
  ];
}
