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
  planAnswer,
  planFaq,
  rangeBounds,
  COMMUNITY_PRICE_RANGE,
  type FloorPlan,
} from '@/lib/floor-plans';
import { getVirtualTourByModel, getVirtualTourSlug } from '@/lib/old-site-data';
import { Bed, Bath, Square, Car, ArrowLeft, Phone, Play } from 'lucide-react';
import ScheduleTour from '@/../components/ScheduleTour';
import PageHero from '@/../components/PageHero';
import LocalVisitSection from '@/../components/LocalVisitSection';
import { SITE_ORIGIN, SITE_PHONE_TEL, SITE_PHONE_DISPLAY, gbpPostalAddressSchema } from '@/lib/site';
import { TITLE_SUFFIX } from '@/lib/hyperlocal';
import { mediaOpenGraph, mediaTwitterImages, absoluteMediaUrl } from '@/lib/media';

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
    description: `${plan.name} floor plan: ${plan.sqft} sq ft, ${plan.beds} bed, ${plan.baths} bath single-story ${plan.series} Series home at Del Webb North Ranch, a 55+ community in North Las Vegas. ${plan.description}`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${plan.name} Floor Plan | ${plan.series} Series | ${TITLE_SUFFIX}`,
      description: planAnswer(plan),
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
        : [mediaOpenGraph('homes.haven6584')],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${plan.name} Floor Plan | ${TITLE_SUFFIX}`,
      description: `${plan.sqft} sq ft ${plan.series} Series home in North Las Vegas 55+ community.`,
      images: plan.imageUrl
        ? [`${SITE_ORIGIN}${plan.imageUrl}`]
        : mediaTwitterImages('homes.haven6584'),
    },
  };
}

function FloorPlanSchema({ plan }: { plan: FloorPlan }) {
  const beds = rangeBounds(plan.beds);
  const baths = rangeBounds(plan.baths);
  const floorPlanSchema = {
    '@context': 'https://schema.org',
    '@type': 'FloorPlan',
    '@id': `${SITE_ORIGIN}/floor-plans/${plan.slug}#floorplan`,
    name: `${plan.name} Floor Plan (${plan.series} Series) - Del Webb North Ranch`,
    description: planAnswer(plan),
    url: `${SITE_ORIGIN}/floor-plans/${plan.slug}`,
    image: plan.imageUrl ? `${SITE_ORIGIN}${plan.imageUrl}` : absoluteMediaUrl('homes.haven6584'),
    floorSize: { '@type': 'QuantitativeValue', value: plan.sqftNumber, unitCode: 'FTK' },
    numberOfBedrooms: { '@type': 'QuantitativeValue', minValue: beds.min, maxValue: beds.max },
    numberOfBathroomsTotal: { '@type': 'QuantitativeValue', minValue: baths.min, maxValue: baths.max },
    amenityFeature: [
      ...plan.features.map((name) => ({ '@type': 'LocationFeatureSpecification', name, value: true })),
      { '@type': 'LocationFeatureSpecification', name: `${plan.garage}-car attached garage`, value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Single-story', value: true },
    ],
    isPlanForApartment: {
      '@type': 'SingleFamilyResidence',
      name: `${plan.name} single-story home at Del Webb North Ranch`,
      address: gbpPostalAddressSchema(),
      containedInPlace: {
        '@type': 'Place',
        name: 'Del Webb North Ranch',
        address: gbpPostalAddressSchema(),
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(floorPlanSchema).replace(/</g, "\\u003c") }}
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
    thumbnailUrl: plan.imageUrl ? `${SITE_ORIGIN}${plan.imageUrl}` : absoluteMediaUrl('homes.haven6584'),
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

function PlanFaqSchema({ plan }: { plan: FloorPlan }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: planFaq(plan).map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }}
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
        <FloorPlanSchema plan={plan} />
        <PlanFaqSchema plan={plan} />
        <PageHero
          imageSrc={plan.imageUrl || '/images/homes/haven-6584.jpg'}
          imageAlt={`${plan.name} floor plan at Del Webb North Ranch, North Las Vegas 55+ community`}
          title={`${plan.name} Floor Plan | ${plan.series} Series | Del Webb North Ranch`}
          subtitle={plan.description}
        >
          <div className="flex flex-col items-center gap-4">
            <Link
              href="/floor-plans"
              className="inline-flex min-h-[44px] items-center gap-2 text-gray-100 underline-offset-4 hover:underline"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to All Floor Plans
            </Link>
            <span className="inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">{plan.series} Series</span>
          </div>
        </PageHero>

        {/* Key Details */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <p className="mx-auto mb-8 max-w-4xl text-base md:text-lg text-text-dark leading-relaxed">
                {planAnswer(plan)}
              </p>
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
                  Del Webb North Ranch Price Range
                </p>
                <p className="text-3xl font-bold text-primary font-playfair">
                  {COMMUNITY_PRICE_RANGE}
                </p>
                <p className="text-sm text-text-dark mt-2">
                  {plan.name} pricing depends on homesite, options, and market conditions.{" "}
                  <a href={SITE_PHONE_TEL} className="font-semibold text-primary underline-offset-4 hover:underline">
                    Call {SITE_PHONE_DISPLAY}
                  </a>{" "}
                  for current {plan.name} listings.
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
                Home Exterior
              </h2>
              <div className="bg-bg-light rounded-lg p-8 min-h-[400px] flex items-center justify-center">
                {plan.imageUrl ? (
                  <figure>
                    <Image
                      src={plan.imageUrl}
                      alt={`${plan.name} ${plan.series} Series single-story home exterior at Del Webb North Ranch in North Las Vegas`}
                      width={800}
                      height={600}
                      className="rounded-lg"
                    />
                    {plan.imageIsRendering && (
                      <figcaption className="mt-3 text-center text-sm text-text-dark">
                        Illustrative exterior in the North Ranch architectural style. Actual {plan.name} elevations and finishes vary by homesite.
                      </figcaption>
                    )}
                  </figure>
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

        <section className="py-12 md:py-16 bg-bg-light" aria-labelledby="plan-faq-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 id="plan-faq-heading" className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center font-playfair">
                {plan.name} Floor Plan FAQ
              </h2>
              <dl className="space-y-6">
                {planFaq(plan).map((q) => (
                  <div key={q.question} className="rounded-lg bg-white p-6 shadow-two">
                    <dt className="mb-2 text-lg font-bold text-primary font-playfair">{q.question}</dt>
                    <dd className="text-text-dark leading-relaxed">{q.answer}</dd>
                  </div>
                ))}
              </dl>
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
        <LocalVisitSection heading="See this floor plan at Del Webb North Ranch" />
      </main>
    </>
  );
}
