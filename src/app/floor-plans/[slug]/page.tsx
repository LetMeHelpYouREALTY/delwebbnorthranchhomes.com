import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/../components/Breadcrumbs';
import { Button } from '@/../components/ui/button';
import ScrollAnimation from '@/../components/scroll-animation';
import {
  getFloorPlanBySlug,
  getAllFloorPlanSlugs,
  type FloorPlan,
} from '@/lib/floor-plans';
import { getHomesitesByCollection } from '@/lib/communityData';
import { getVirtualTourByModel, getVirtualTourSlug } from '@/lib/old-site-data';
import { Bed, Bath, Square, Car, ArrowLeft, Phone, Play } from 'lucide-react';
import ScheduleTour from '@/../components/ScheduleTour';
import { SITE_ORIGIN, SITE_PHONE_TEL, SITE_PHONE_DISPLAY } from '@/lib/site';
import { TITLE_SUFFIX } from '@/lib/hyperlocal';

export async function generateStaticParams() {
  return getAllFloorPlanSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const plan = getFloorPlanBySlug(slug);

  if (!plan) {
    return {
      title: 'Floor Plan Not Found | Del Webb North Ranch',
    };
  }

  const url = `${SITE_ORIGIN}/floor-plans/${slug}`;

  return {
    title: `${plan.name} Floor Plan | ${plan.series} Series | ${TITLE_SUFFIX}`,
    description: `${plan.name} floor plan: ${plan.sqft} sq ft, ${plan.beds} bed, ${plan.baths} bath ${plan.series} Series home in Del Webb North Ranch, a premier 55+ community in North Las Vegas. ${plan.description}`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${plan.name} Floor Plan | ${plan.series} Series | ${TITLE_SUFFIX}`,
      description: `${plan.sqft} sq ft, ${plan.beds} bed, ${plan.baths} bath ${plan.series} Series home. ${plan.priceRange}.`,
      url: url,
      siteName: TITLE_SUFFIX,
      locale: 'en_US',
      type: 'website',
      images: plan.imageUrl
        ? [
            {
              url: `${SITE_ORIGIN}${plan.imageUrl}`,
              width: 1200,
              height: 630,
              alt: `${plan.name} floor plan`,
            },
          ]
        : [
            {
              url: `${SITE_ORIGIN}/images/hero/hero-bg.jpg`,
              width: 1200,
              height: 630,
              alt: 'Del Webb North Ranch',
            },
          ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${plan.name} Floor Plan | ${TITLE_SUFFIX}`,
      description: `${plan.sqft} sq ft ${plan.series} Series home in North Las Vegas 55+ community.`,
      images: plan.imageUrl
        ? [`${SITE_ORIGIN}${plan.imageUrl}`]
        : [`${SITE_ORIGIN}/images/hero/hero-bg.jpg`],
    },
  };
}

function ProductSchema({ plan }: { plan: FloorPlan }) {
  const homesites = getHomesitesByCollection();
  const offerCount =
    plan.series === 'Cottage'
      ? homesites.cottage.count
      : plan.series === 'Classic'
        ? homesites.classic.count
        : homesites.retreat.count;

  const productSchema = {
    '@context': 'https://schema.org',
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
      lowPrice:
        plan.series === 'Cottage'
          ? '400000'
          : plan.series === 'Classic'
            ? '475000'
            : '550000',
      highPrice:
        plan.series === 'Cottage'
          ? '500000'
          : plan.series === 'Classic'
            ? '575000'
            : '600000',
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
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema).replace(/</g, "\\u003c") }}
    />
  );
}

function VideoObjectSchema({
  plan,
  virtualTour,
}: {
  plan: FloorPlan;
  virtualTour: NonNullable<ReturnType<typeof getVirtualTourByModel>> & { embedUrl: string };
}) {
  const watchSlug = getVirtualTourSlug(virtualTour);
  const watchUrl = `${SITE_ORIGIN}/virtual-tours/${watchSlug}`;
  const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: `${plan.name} Virtual Tour | Del Webb North Ranch Model Home`,
    description: `${plan.name} ${plan.series} Series ${plan.sqft} sq ft model home virtual tour at Del Webb North Ranch 55+ community in North Las Vegas.`,
    thumbnailUrl: plan.imageUrl ? `${SITE_ORIGIN}${plan.imageUrl}` : `${SITE_ORIGIN}/images/hero/hero-bg.jpg`,
    uploadDate: '2024-01-01',
    contentUrl: virtualTour.embedUrl,
    embedUrl: virtualTour.embedUrl,
    url: watchUrl,
    publisher: {
      '@type': 'Organization',
      name: 'Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties',
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema).replace(/</g, '\\u003c') }}
    />
  );
}

function BreadcrumbSchema({ plan }: { plan: FloorPlan }) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_ORIGIN,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Floor Plans',
        item: `${SITE_ORIGIN}/floor-plans`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: plan.name,
        item: `${SITE_ORIGIN}/floor-plans/${plan.slug}`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }}
    />
  );
}

export default async function FloorPlanPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const plan = getFloorPlanBySlug(slug);

  if (!plan) {
    notFound();
  }

  // Get virtual tour if available
  const virtualTour = getVirtualTourByModel(plan.name);
  const hasVideo = virtualTour?.embedUrl != null;

  return (
    <>
      {hasVideo && virtualTour && (
        <VideoObjectSchema plan={plan} virtualTour={virtualTour as typeof virtualTour & { embedUrl: string }} />
      )}
      <Breadcrumbs
        items={[
          { label: "Del Webb North Ranch", href: "/" },
          { label: "Floor Plans", href: "/floor-plans" },
          { label: `${plan.name} - ${plan.series} Series`, href: `/floor-plans/${slug}` },
        ]}
      />
      <main>
        <ProductSchema plan={plan} />
        <BreadcrumbSchema plan={plan} />
        {/* Hero Section */}
        <section className="bg-primary text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link
                href="/floor-plans"
                className="inline-flex items-center gap-2 text-gray-100 hover:underline transition-colors mb-6"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to All Floor Plans
              </Link>
              <div className="inline-block bg-white/20 px-4 py-2 rounded-full mb-4">
                <span className="text-sm font-semibold">{plan.series} Series</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                {plan.name} Floor Plan | {plan.series} Series | Del Webb North Ranch
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-6">
                {plan.description}
              </p>
            </div>
          </div>
        </section>

        {/* Key Details */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-bg-light p-6 rounded-lg text-center">
                  <Square className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-primary mb-1 font-playfair">
                    {plan.sqft}
                  </p>
                  <p className="text-sm text-text-dark">Square Feet</p>
                </div>
                <div className="bg-bg-light p-6 rounded-lg text-center">
                  <Bed className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-primary mb-1 font-playfair">
                    {plan.beds}
                  </p>
                  <p className="text-sm text-text-dark">Bedrooms</p>
                </div>
                <div className="bg-bg-light p-6 rounded-lg text-center">
                  <Bath className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-primary mb-1 font-playfair">
                    {plan.baths}
                  </p>
                  <p className="text-sm text-text-dark">Bathrooms</p>
                </div>
                <div className="bg-bg-light p-6 rounded-lg text-center">
                  <Car className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-primary mb-1 font-playfair">
                    {plan.garage}
                  </p>
                  <p className="text-sm text-text-dark">Car Garage</p>
                </div>
              </div>

              {/* Price Range */}
              <div className="bg-primary/10 border-2 border-primary rounded-lg p-6 text-center mb-8">
                <p className="text-sm font-semibold text-primary mb-2">
                  Estimated Price Range
                </p>
                <p className="text-3xl font-bold text-primary font-playfair">
                  {plan.priceRange}
                </p>
                <p className="text-sm text-text-dark mt-2">
                  Price varies by location, upgrades, and market conditions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        {plan.features && plan.features.length > 0 && (
          <section className="py-12 md:py-16 bg-bg-light">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center font-playfair">
                  Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {plan.features.map((feature, index) => (
                    <ScrollAnimation key={feature} delay={index * 50}>
                      <div className="bg-white p-4 rounded-lg shadow-two">
                        <p className="text-text-dark">{feature}</p>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Virtual Tour - watch page for video indexing */}
        {virtualTour?.embedUrl && (
          <section className="py-12 md:py-16 bg-bg-light" aria-labelledby="virtual-tour-heading">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 id="virtual-tour-heading" className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center font-playfair">
                  Virtual Tour
                </h2>
                <div className="bg-white rounded-lg shadow-three overflow-hidden">
                  <div className="aspect-video">
                    <iframe
                      src={virtualTour.embedUrl}
                      title={`${plan.name} Virtual Tour - Del Webb North Ranch Model Home`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <p className="text-center mt-4 text-text-dark">
                  <Link
                    href={`/virtual-tours/${getVirtualTourSlug(virtualTour)}`}
                    className="text-primary hover:underline font-medium"
                  >
                    Watch on dedicated video page →
                  </Link>
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Floor Plan Image */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center font-playfair">
                Floor Plan Layout
              </h2>
              <div className="bg-bg-light rounded-lg p-8 min-h-[400px] flex items-center justify-center">
                {plan.imageUrl ? (
                  <Image
                    src={plan.imageUrl}
                    alt={`${plan.name} floor plan layout`}
                    width={800}
                    height={600}
                    className="rounded-lg"
                  />
                ) : (
                  <div className="text-center text-gray-400">
                    <p className="text-lg mb-2">Floor Plan Image</p>
                    <p className="text-sm">
                      Contact Dr. Jan Duffy to view the detailed floor plan
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">
                Interested in the {plan.name} Floor Plan?
              </h2>
              <p className="text-lg text-gray-100 mb-6">
                Schedule a private tour to see this floor plan in person. Dr. Jan
                Duffy can show you available homes and answer all your questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ScheduleTour variant="accent" size="lg" />
                <a
                  href={SITE_PHONE_TEL}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-md font-semibold hover:bg-white hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call {SITE_PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
