import type { Metadata } from 'next';
import Breadcrumbs from '@/../components/Breadcrumbs';
import ScrollAnimation from '@/../components/scroll-animation';
import { getAllTestimonials } from '@/lib/old-site-data';
import { Quote, Star } from 'lucide-react';
import { SITE_ORIGIN, GOOGLE_REVIEW_LINK, SITE_PHONE_TEL, SITE_PHONE_DISPLAY, GBP_AGGREGATE_RATING, GBP_BUSINESS_NAME } from '@/lib/site';
import { metaDescriptionBlock, TITLE_SUFFIX } from '@/lib/hyperlocal';
import RealScoutListings from '@/../components/RealScoutListings';

export const metadata: Metadata = {
  title: `Client Testimonials | ${TITLE_SUFFIX}`,
  description: metaDescriptionBlock(
    'Read what our clients say about working with Dr. Jan Duffy to find their dream home in Del Webb North Ranch'
  ),
  alternates: {
    canonical: `${SITE_ORIGIN}/testimonials`,
  },
  openGraph: {
    title: `Client Testimonials | ${TITLE_SUFFIX}`,
    description:
      'Client reviews and testimonials about finding homes in Del Webb North Ranch 55+ community.',
    url: `${SITE_ORIGIN}/testimonials`,
    siteName: TITLE_SUFFIX,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_ORIGIN}/images/about/dr-jan-duffy.jpg`,
        width: 1200,
        height: 630,
        alt: 'Dr. Jan Duffy, REALTOR®',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Client Testimonials | ${TITLE_SUFFIX}`,
    description: 'Client reviews about Del Webb North Ranch homes.',
    images: [`${SITE_ORIGIN}/images/about/dr-jan-duffy.jpg`],
  },
};

export default function TestimonialsPage() {
  const testimonials = getAllTestimonials();
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: GBP_BUSINESS_NAME,
    url: `${SITE_ORIGIN}/testimonials`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: GBP_AGGREGATE_RATING.ratingValue,
      reviewCount: GBP_AGGREGATE_RATING.reviewCount,
    },
    review: testimonials.map((t) => ({
      "@type": "Review" as const,
      author: { "@type": "Person" as const, name: t.name },
      reviewBody: t.text,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Breadcrumbs
        items={[
          { label: "Del Webb North Ranch", href: "/" },
          { label: "Testimonials", href: "/testimonials" },
        ]}
      />
      <main>
        {/* Hero Section */}
        <section className="bg-primary text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                Client Testimonials | Del Webb North Ranch 55+ Real Estate
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                Read real testimonials from clients who found their dream home in
                Del Webb North Ranch with Dr. Jan Duffy.
              </p>
            </div>
          </div>
        </section>

        {/* Office RealScout widget - directly below hero */}
        <RealScoutListings h2Text="Homes for Sale at Del Webb North Ranch | North Las Vegas 55+ Listings" />

        {/* Why client voices matter */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-playfair">
                Why Client Voices Matter at Del Webb North Ranch
              </h2>
              <p className="text-text-dark mb-4 leading-relaxed">
                When you&apos;re considering a move to the North Ranch 55+ community, hearing from people who&apos;ve already bought or sold here can make a real difference. Our clients have worked with Dr. Jan Duffy to find their dream homes in Del Webb North Ranch—and their stories reflect what it&apos;s like to navigate North Ranch real estate, from first tour to closing.
              </p>
              <h3 className="text-xl font-bold text-primary mb-3 font-playfair">Real experiences in the community</h3>
              <p className="text-text-dark mb-4 leading-relaxed">
                The testimonials below come from buyers and sellers who chose Del Webb North Ranch in North Las Vegas for its single-story living, resort-style amenities, and active adult lifestyle. They share how the Del Webb North Ranch community and North Ranch amenities fit their goals—and how working with a specialist made the process smoother.
              </p>
              <h3 className="text-xl font-bold text-primary mb-3 font-playfair">From search to settlement</h3>
              <p className="text-text-dark mb-4 leading-relaxed">
                Whether our clients were comparing Del Webb North Ranch floor plans, touring resale homes, or selling their North Ranch home, they relied on expertise that&apos;s focused on this premier 55+ community. Their feedback highlights the value of working with an agent who knows the Del Webb North Ranch clubhouse, floor plans, and neighborhood inside and out.
              </p>
              <h3 className="text-xl font-bold text-primary mb-3 font-playfair">Your story could be next</h3>
              <p className="text-text-dark mb-8 leading-relaxed">
                If you&apos;re ready to explore homes for sale in Del Webb North Ranch, schedule a tour or get in touch. We&apos;d love to help you find your place in this 55+ active adult community in North Las Vegas—and, if you choose to work with us, we&apos;d be grateful to hear about your experience too.
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-playfair">
                Choosing the Right 55+ Community in North Las Vegas
              </h2>
              <p className="text-text-dark mb-4 leading-relaxed">
                Deciding where to retire or downsize is a big step. Del Webb North Ranch is one of North Las Vegas&apos;s premier 55+ communities—with single-story homes, a full clubhouse and resort-style amenities, and an active social calendar. The testimonials on this page reflect real experiences from people who chose the North Ranch 55+ community for its combination of location, lifestyle, and value. They worked with Dr. Jan Duffy to find their Del Webb North Ranch home and to navigate North Ranch real estate from first visit to closing.
              </p>
              <h3 className="text-xl font-bold text-primary mb-3 font-playfair">Why buyers choose Del Webb North Ranch</h3>
              <p className="text-text-dark mb-4 leading-relaxed">
                Buyers often cite the Del Webb North Ranch clubhouse, North Ranch amenities, and the sense of community as major factors. The 10,000 sq ft clubhouse, pool, pickleball courts, and dozens of clubs make it easy to stay active and connected. Add single-story floor plans, no state income tax in Nevada, and a gated North Ranch neighborhood in North Las Vegas—and it&apos;s easy to see why so many 55+ buyers choose Del Webb North Ranch over other options.
              </p>
              <h3 className="text-xl font-bold text-primary mb-3 font-playfair">Working with a North Ranch specialist</h3>
              <p className="text-text-dark leading-relaxed">
                Dr. Jan Duffy focuses exclusively on Del Webb North Ranch and North Las Vegas 55+ real estate. That means deep knowledge of every Del Webb North Ranch floor plan, resale listing, and neighborhood detail. The testimonials below speak to the value of working with an agent who knows the community inside and out. When you&apos;re ready to tour or make an offer on a North Ranch home, we&apos;re here to help—and we look forward to adding your story to this page one day.
              </p>
            </div>
          </div>
        </section>

        {/* Why reviews matter for North Ranch */}
        <section className="py-12 md:py-16 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-playfair text-center">
                Why Reviews Matter for Del Webb North Ranch Real Estate
              </h2>
              <p className="text-text-dark mb-6 leading-relaxed">
                When you&apos;re comparing 55+ communities in North Las Vegas, hearing from people who have already bought or sold at Del Webb North Ranch can help you decide. The North Ranch 55+ community has a strong resale market and an active social scene—and the testimonials on this page reflect real experiences from buyers and sellers who chose the Del Webb North Ranch clubhouse, North Ranch amenities, and single-story lifestyle. Their feedback highlights what it&apos;s like to work with a specialist who knows every Del Webb North Ranch floor plan and neighborhood detail.
              </p>
              <h3 className="text-xl font-bold text-primary mb-3 font-playfair">From first tour to closing</h3>
              <p className="text-text-dark leading-relaxed">
                Many of our clients came from out of state or from elsewhere in the Las Vegas valley. They scheduled a tour of North Ranch, explored homes for sale at Del Webb North Ranch, and closed on a North Ranch home with confidence. The stories below cover the full journey—from initial interest in the 55+ active adult community in North Las Vegas to moving in and enjoying the Del Webb North Ranch lifestyle. If you&apos;re considering the same path, schedule a tour or browse current listings above; we&apos;d love to help you find your place at North Ranch.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-12 md:py-16 lg:py-20 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {testimonials.map((testimonial, index) => (
                  <ScrollAnimation key={testimonial.name} delay={index * 100}>
                    <div className="bg-white p-6 md:p-8 rounded-lg shadow-two hover:shadow-three transition-shadow h-full flex flex-col">
                      <Quote className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4 opacity-50" />
                      <blockquote className="text-base md:text-lg text-text-dark leading-relaxed mb-6 flex-grow font-playfair italic">
                        "{testimonial.text}"
                      </blockquote>
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-lg md:text-xl text-primary font-semibold">
                          — {testimonial.name}
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leave a review on Google */}
        <section className="py-12 md:py-16 bg-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3 font-playfair">
                Share your experience
              </h2>
              <p className="text-lg text-text-dark mb-6">
                Help others find us. Leave a review on Google — it builds trust and helps your Business Profile stand out.
              </p>
              <a
                href={GOOGLE_REVIEW_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-md font-semibold transition-colors"
                aria-label="Leave a review on Google"
              >
                <Star className="w-5 h-5" aria-hidden />
                Leave a review on Google
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">
                Ready to Find Your Dream Home?
              </h2>
              <p className="text-lg text-gray-100 mb-6">
                Join these satisfied clients and work with Dr. Jan Duffy to find
                your perfect home in Del Webb North Ranch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center min-h-[48px] px-8 py-4 bg-white text-primary rounded-md font-semibold hover:bg-gray-100 transition-colors"
                >
                  Schedule a Tour
                </a>
                <a
                  href={SITE_PHONE_TEL}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-md font-semibold hover:bg-white hover:text-primary transition-colors"
                >
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
