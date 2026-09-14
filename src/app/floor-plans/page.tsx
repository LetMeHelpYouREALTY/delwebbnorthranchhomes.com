import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/../components/Breadcrumbs";
import { Button } from "@/../components/ui/button";
import Link from "next/link";
import ScrollAnimation from "@/../components/scroll-animation";
import { Home, Maximize2, Car, Users } from "lucide-react";
import { floorPlans } from "@/lib/floor-plans";
import { getHomesitesByCollection } from "@/lib/communityData";
import VirtualTours from "@/../components/VirtualTours";
import MortgageCalculator from "@/../components/MortgageCalculator";
import ScheduleTour from "@/../components/ScheduleTour";
import RealScoutListings from "@/../components/RealScoutListings";
import PageHero from "@/../components/PageHero";
import LocalVisitSection from "@/../components/LocalVisitSection";
import { SITE_ORIGIN } from "@/lib/site";
import { metaDescriptionBlock, TITLE_SUFFIX } from "@/lib/hyperlocal";
import { mediaOpenGraph, mediaTwitterImages } from "@/lib/media";

export const metadata: Metadata = {
  title: `Floor Plans 1,285-2,015 Sq Ft | ${TITLE_SUFFIX}`,
  description: metaDescriptionBlock(
    "Explore all 9 floor plans at Del Webb North Ranch: Cottage, Classic, and Retreat series from 1,285 to 2,015 sq ft. View Matterport virtual tours"
  ),
  alternates: {
    canonical: `${SITE_ORIGIN}/floor-plans`,
  },
  openGraph: {
    title: `Floor Plans 1,285-2,015 Sq Ft | ${TITLE_SUFFIX}`,
    description:
      "Explore 9 single-story floor plans from 1,285 to 2,015 sq ft in Del Webb North Ranch, a premier 55+ community.",
    url: `${SITE_ORIGIN}/floor-plans`,
    siteName: TITLE_SUFFIX,
    locale: "en_US",
    type: "website",
    images: [mediaOpenGraph("floorPlans.hero")],
  },
  twitter: {
    card: "summary_large_image",
    title: `Floor Plans 1,285-2,015 Sq Ft | ${TITLE_SUFFIX}`,
    description: "Explore 9 single-story floor plans in North Las Vegas's premier 55+ community.",
    images: mediaTwitterImages("floorPlans.hero"),
  },
};

// Floor plans data imported from shared lib

const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

function FloorPlanCard({
  plan,
  index,
}: {
  plan: (typeof floorPlans)[number];
  index: number;
}) {
  return (
    <ScrollAnimation delay={index * 50}>
      <div className="bg-white rounded-lg shadow-two hover:shadow-three transition-shadow overflow-hidden">
        {/* Image Placeholder */}
        <div className="relative h-64 bg-bg-light">
          {plan.imageUrl ? (
            <Image
              src={plan.imageUrl}
              alt={`${plan.name} floor plan - ${plan.sqft} sq ft`}
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL={blurDataURL}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              <Home className="w-16 h-16" />
            </div>
          )}
          <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded text-sm font-semibold">
            {plan.series} Series
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold text-primary mb-2 font-playfair">
            {plan.name}
          </h3>
          <p className="text-xl font-semibold text-primary mb-4">
            {plan.sqft} sq ft
          </p>

          {/* Specs */}
          <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Home className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-gray-500">Bedrooms</p>
                <p className="font-semibold text-text-dark">{plan.beds}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-gray-500">Bathrooms</p>
                <p className="font-semibold text-text-dark">{plan.baths}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Car className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-gray-500">Garage</p>
                <p className="font-semibold text-text-dark">{plan.garage}</p>
              </div>
            </div>
          </div>

          <p className="text-text-dark mb-4 leading-relaxed">
            {plan.description}
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              asChild
              variant="default"
              className="flex-1 bg-primary hover:bg-primary/90"
            >
              <Link
                href={`/floor-plans/${plan.slug}`}
                className="flex items-center justify-center gap-2"
              >
                View Details
              </Link>
            </Button>
            <ScheduleTour variant="outline" size="default" className="flex-1" />
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default function FloorPlansPage() {
  const cottagePlans = floorPlans.filter((p) => p.series === "Cottage");
  const classicPlans = floorPlans.filter((p) => p.series === "Classic");
  const retreatPlans = floorPlans.filter((p) => p.series === "Retreat");
  const homesites = getHomesitesByCollection();

  // Product schema for all floor plans (offerCount satisfies GSC Product snippets)
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: floorPlans.map((plan, index) => {
      const offerCount =
        plan.series === "Cottage"
          ? homesites.cottage.count
          : plan.series === "Classic"
            ? homesites.classic.count
            : homesites.retreat.count;
      return {
      '@type': 'ListItem',
      position: index + 1,
        item: {
          '@type': 'Product',
          name: `${plan.name} Floor Plan - Del Webb North Ranch`,
          description: `${plan.description} ${plan.series} Series home with ${plan.sqft} sq ft, ${plan.beds} bedrooms, ${plan.baths} baths.`,
          category: 'Real Estate',
          image: plan.imageUrl
            ? `${SITE_ORIGIN}${plan.imageUrl}`
            : undefined,
          brand: {
            '@type': 'Brand',
            name: 'Del Webb North Ranch',
          },
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'USD',
          lowPrice: plan.series === 'Cottage' ? '400000' : plan.series === 'Classic' ? '475000' : '550000',
          highPrice: plan.series === 'Cottage' ? '500000' : plan.series === 'Classic' ? '575000' : '600000',
          availability: 'https://schema.org/InStock',
          offerCount,
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5',
          reviewCount: '50',
        },
        additionalProperty: [
          {
            '@type': 'PropertyValue',
            name: 'Square Feet',
            value: plan.sqft,
          },
          {
            '@type': 'PropertyValue',
            name: 'Bedrooms',
            value: plan.beds.toString(),
          },
          {
            '@type': 'PropertyValue',
            name: 'Bathrooms',
            value: plan.baths.toString(),
          },
          {
            '@type': 'PropertyValue',
            name: 'Garage',
            value: `${plan.garage} car`,
          },
          {
            '@type': 'PropertyValue',
            name: 'Series',
            value: plan.series,
          },
        ],
        url: `${SITE_ORIGIN}/floor-plans/${plan.slug}`,
      },
    };
    }),
  };

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Del Webb North Ranch", href: "/" },
          { label: "Floor Plans", href: "/floor-plans" },
        ]}
      />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        <PageHero
          mediaKey="floorPlans.hero"
          title="Floor Plans 1,285-2,015 Sq Ft | Del Webb North Ranch 55+ Community"
          subtitle={
            <>
                Nine thoughtfully designed single-story floor plans ranging from
                1,285 to 2,015 square feet. Every home features 2-3 bedrooms,
                2-2.5 baths, and a 2-car garage. View <Link href="/homes-for-sale" className="text-white hover:text-gray-200 underline">homes for sale</Link> with these floor plans or explore the <Link href="/amenities" className="text-white hover:text-gray-200 underline">resort-style amenities</Link> included with every home.
            </>
          }
        />

        {/* Office RealScout widget - directly below hero */}
        <RealScoutListings h2Text="View Available Homes with These Floor Plans in Del Webb North Ranch" />

        {/* Cottage Series */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 text-center font-playfair">
                Cottage Series
              </h2>
              <p className="text-center text-text-dark max-w-2xl mx-auto">
                {getHomesitesByCollection().cottage.count} homes | {getHomesitesByCollection().cottage.sqftRange} sq ft | Efficient, comfortable, easy to maintain
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {cottagePlans.map((plan, index) => (
                <FloorPlanCard key={plan.name} plan={plan} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Classic Series */}
        <section className="py-12 md:py-16 lg:py-20 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 text-center font-playfair">
                Classic Series
              </h2>
              <p className="text-center text-text-dark max-w-2xl mx-auto">
                {getHomesitesByCollection().classic.count} homes | {getHomesitesByCollection().classic.sqftRange} sq ft | Room to spread out with optional dens
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {classicPlans.map((plan, index) => (
                <FloorPlanCard
                  key={plan.name}
                  plan={plan}
                  index={index + cottagePlans.length}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Retreat Series */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 text-center font-playfair">
                Retreat Series
              </h2>
              <p className="text-center text-text-dark max-w-2xl mx-auto">
                {getHomesitesByCollection().retreat.count} homes | {getHomesitesByCollection().retreat.sqftRange} sq ft | Spacious living for entertaining
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {retreatPlans.map((plan, index) => (
                <FloorPlanCard
                  key={plan.name}
                  plan={plan}
                  index={index + cottagePlans.length + classicPlans.length}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Virtual Tours Section */}
        <VirtualTours />

        {/* Mortgage Calculator Section */}
        <MortgageCalculator />

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">
                Ready to See These Floor Plans in Person?
              </h2>
              <p className="text-lg text-gray-100 mb-6">
                Schedule a private tour with <Link href="/about" className="text-white hover:text-gray-200 underline">Dr. Jan Duffy</Link> to walk through our
                model homes and see which floor plan fits your lifestyle. Discover the <Link href="/lifestyle" className="text-white hover:text-gray-200 underline">active adult lifestyle</Link> that comes with every home at Del Webb North Ranch.
              </p>
              <ScheduleTour variant="accent" size="lg" />
            </div>
          </div>
        </section>
        <LocalVisitSection heading="Walk the floor plans at Del Webb North Ranch" />
      </main>
    </>
  );
}
