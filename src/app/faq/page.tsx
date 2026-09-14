import type { Metadata } from 'next';
import Image from 'next/image';
import Breadcrumbs from '@/../components/Breadcrumbs';
import FAQAccordion from '@/../components/FAQAccordion';
import { getAllQuestions } from '@/lib/faqData';
import { getHyperlocalFaq } from '@/lib/hyperlocalData';
import { SITE_ORIGIN, SITE_PHONE_TEL, SITE_PHONE_DISPLAY } from '@/lib/site';
import { altPrefix, metaDescriptionBlock, TITLE_SUFFIX } from '@/lib/hyperlocal';
import Link from 'next/link';
import RealScoutListings from '@/../components/RealScoutListings';

export const metadata: Metadata = {
  title: `Frequently Asked Questions | ${TITLE_SUFFIX}`,
  description: metaDescriptionBlock(
    'Find answers about Del Webb North Ranch 55+ community: HOA fees, amenities, age requirements, and more'
  ),
  alternates: {
    canonical: `${SITE_ORIGIN}/faq`,
  },
  openGraph: {
    title: `Frequently Asked Questions | ${TITLE_SUFFIX}`,
    description:
      'Find answers to frequently asked questions about Del Webb North Ranch, a 55+ active adult community in North Las Vegas.',
    url: `${SITE_ORIGIN}/faq`,
    siteName: TITLE_SUFFIX,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_ORIGIN}/images/amenities/resort-pool.jpeg`,
        width: 1200,
        height: 630,
        alt: altPrefix('Resort-style pool'),
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Frequently Asked Questions | ${TITLE_SUFFIX}`,
    description: 'Find answers about Del Webb North Ranch 55+ community in North Las Vegas.',
    images: [`${SITE_ORIGIN}/images/amenities/resort-pool.jpeg`],
  },
};

// FAQ schema: main FAQ + hyperlocal North Las Vegas 55+ questions
const allQuestions = getAllQuestions();
const hyperlocalFaq = getHyperlocalFaq();
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    ...allQuestions.map((q) => ({
      '@type': 'Question' as const,
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer' as const,
        text: q.answer,
      },
    })),
    ...hyperlocalFaq.map((q) => ({
      '@type': 'Question' as const,
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer' as const,
        text: q.answer,
      },
    })),
  ],
};

export default function FAQPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Del Webb North Ranch", href: "/" },
          { label: "FAQ", href: "/faq" },
        ]}
      />
      <main className="min-h-screen bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }}
        />
        {/* Hero Section */}
        <section className="relative bg-stone-100 py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/images/amenities/resort-pool.jpeg"
              alt={altPrefix('Resort-style pool')}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-playfair">
              Frequently Asked Questions | Del Webb North Ranch 55+ Community
            </h1>
            <p className="text-xl text-gray-600">
              Everything you need to know about Del Webb North Ranch
            </p>
          </div>
        </section>

        {/* Office RealScout widget - directly below hero */}
        <RealScoutListings h2Text="Homes for Sale at Del Webb North Ranch | North Las Vegas 55+ Listings" />

        {/* FAQ topics intro */}
        <section className="py-12 md:py-16 bg-white border-t border-stone-200">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-playfair">
              Common Topics About Del Webb North Ranch
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Below you&apos;ll find answers about the North Ranch 55+ community, from age requirements and HOA fees to amenities and resale homes. We also cover North Las Vegas and what makes Del Webb North Ranch a premier 55+ active adult community.
            </p>
            <h3 className="text-xl font-bold text-primary mb-3 font-playfair">Community and age requirements</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Del Webb North Ranch is an age-qualified 55+ community. Our FAQ covers who can buy and live in the community, guest policies, and how the Del Webb North Ranch community is managed.
            </p>
            <h3 className="text-xl font-bold text-primary mb-3 font-playfair">Homes and HOA</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Questions about HOA fees, floor plans, and resale homes at North Ranch are answered in the accordion below. You&apos;ll also find information about the Del Webb North Ranch clubhouse and North Ranch amenities.
            </p>
            <h3 className="text-xl font-bold text-primary mb-3 font-playfair">Location and lifestyle</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              North Ranch in North Las Vegas offers easy access to healthcare, shopping, and recreation. Our North Las Vegas 55+ questions section covers area benefits and what to expect when living in this premier 55+ community.
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-playfair">
              More About Del Webb North Ranch
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Del Webb North Ranch is a gated, age-qualified 55+ community developed by Del Webb (Pulte Homes) in North Las Vegas, Nevada. The community was built out between 2020 and 2024 and includes 394 single-story homes across three series: Cottage, Classic, and Retreat. The Del Webb North Ranch clubhouse—a 10,000 sq ft amenity center—opened in October 2021 and serves as the social and recreational heart of the North Ranch 55+ community. Residents enjoy a resort-style pool, heated lap pool, fitness center, pickleball courts, bocce courts, event lawn, and multiple indoor spaces for clubs and gatherings.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              North Ranch real estate ranges from approximately 1,285 to 2,015 square feet, with two or three bedrooms, two to two-and-a-half baths, and two-car garages. All homes at Del Webb North Ranch are single-story, with low-maintenance landscaping managed by the HOA. The North Ranch HOA fee is $215 per month (billed quarterly) and covers common area maintenance, the clubhouse and amenities, and security. The community is in North Las Vegas zip code 89086, with convenient access to shopping, healthcare, and major highways—while still offering a quiet, active adult environment that defines the Del Webb North Ranch lifestyle.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you&apos;re comparing Del Webb North Ranch to other 55+ communities in North Las Vegas or you&apos;re ready to dive into resale listings and floor plans, the FAQ below and the North Las Vegas 55+ questions section will help you get clear answers. For the latest availability and personalized advice, browse the homes for sale in the listings above or contact Dr. Jan Duffy, your Del Webb North Ranch specialist.
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Main FAQ Accordion */}
              <div className="lg:col-span-2">
                <FAQAccordion showSearch={true} showExpandAll={true} allowMultiple={true} />
              </div>

              {/* Visual Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Clubhouse Image */}
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/amenities/clubhouse.jpeg"
                    alt={altPrefix('10,000 sq ft clubhouse amenity center')}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm font-semibold">10,000 sq ft Clubhouse</p>
                    <p className="text-xs opacity-90">Opened October 2021</p>
                  </div>
                </div>

                {/* Pool Image */}
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/amenities/resort-pool.jpeg"
                    alt={altPrefix('Resort-style pool and spa')}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm font-semibold">Resort-Style Pool</p>
                    <p className="text-xs opacity-90">Heated lap pool & spa</p>
                  </div>
                </div>

                {/* Pickleball Courts */}
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/amenities/pickleball-courts.jpeg"
                    alt={altPrefix('Lighted pickleball courts')}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm font-semibold">Pickleball Courts</p>
                    <p className="text-xs opacity-90">Lighted for evening play</p>
                  </div>
                </div>

                {/* Community Sign */}
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/hero/community-sign.jpg"
                    alt={altPrefix('Gated community entrance')}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm font-semibold">Gated Community</p>
                    <p className="text-xs opacity-90">24/7 security & virtual concierge</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* North Las Vegas 55+ Questions (hyperlocal FAQ) */}
        <section className="py-12 md:py-16 bg-stone-50 border-t border-stone-200">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-playfair">
              North Las Vegas 55+ Questions
            </h2>
            <div className="space-y-4">
              {hyperlocalFaq.map((item) => (
                <details
                  key={item.question}
                  className="group bg-white rounded-lg shadow-sm border border-stone-200 overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-2 px-5 py-4 cursor-pointer list-none font-semibold text-gray-900 hover:bg-stone-50 transition-colors [&::-webkit-details-marker]:hidden">
                    {item.question}
                    <span className="text-primary shrink-0 transition-transform group-open:rotate-180">▼</span>
                  </summary>
                  <div className="px-5 pb-4 pt-0 text-gray-600 leading-relaxed border-t border-stone-100">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-primary py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-playfair">
              Still Have Questions?
            </h2>
            <p className="text-white/90 mb-8">
              Dr. Jan Duffy is here to help you find your perfect home in Del Webb North Ranch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={SITE_PHONE_TEL}
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Call {SITE_PHONE_DISPLAY}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Schedule a Tour
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
