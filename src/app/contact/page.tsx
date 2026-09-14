import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/../components/Breadcrumbs";
import ScrollAnimation from "@/../components/scroll-animation";
import { Phone, MapPin, Calendar, Youtube, FileText, ExternalLink, Star, MapPinned, MessageSquare, Clock } from "lucide-react";
import { oldSiteData } from "@/lib/fetchOldSiteData";
import ScheduleTour from "@/../components/ScheduleTour";
import CalendlyInline from "@/../components/CalendlyInline";
import RealScoutListings from "@/../components/RealScoutListings";
import LocalVisitSection from "@/../components/LocalVisitSection";
import {
  SITE_ORIGIN,
  GOOGLE_REVIEW_LINK,
  GOOGLE_MAPS_DIRECTIONS_URL,
  SITE_PHONE_TEL,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_SMS,
  GBP_BUSINESS_NAME,
  GBP_ADDRESS,
  GBP_HOURS_DISPLAY,
  SITE_PHONE_SCHEMA,
  SITE_EMAIL,
  gbpPostalAddressSchema,
} from "@/lib/site";
import { metaDescriptionBlock, TITLE_SUFFIX } from "@/lib/hyperlocal";

export const metadata: Metadata = {
  title: `Contact & Schedule a Tour | ${TITLE_SUFFIX}`,
  description: metaDescriptionBlock(
    `Contact Dr. Jan Duffy to schedule a tour of Del Webb North Ranch. Call ${SITE_PHONE_DISPLAY} or schedule online.`
  ),
  alternates: {
    canonical: `${SITE_ORIGIN}/contact`,
  },
  openGraph: {
    title: `Contact & Schedule a Tour | ${TITLE_SUFFIX}`,
    description:
      `Schedule a tour of Del Webb North Ranch, a premier 55+ community in North Las Vegas. Call ${SITE_PHONE_DISPLAY}.`,
    url: `${SITE_ORIGIN}/contact`,
    siteName: TITLE_SUFFIX,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE_ORIGIN}/images/about/dr-jan-duffy.jpg`,
        width: 1200,
        height: 630,
        alt: "Dr. Jan Duffy, REALTOR®",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact & Schedule a Tour | ${TITLE_SUFFIX}`,
    description: "Schedule a tour of Del Webb North Ranch 55+ community in North Las Vegas.",
    images: [`${SITE_ORIGIN}/images/about/dr-jan-duffy.jpg`],
  },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact & Schedule a Tour | ${GBP_BUSINESS_NAME}`,
    url: `${SITE_ORIGIN}/contact`,
    mainEntity: {
      "@type": "RealEstateAgent",
      name: GBP_BUSINESS_NAME,
      telephone: SITE_PHONE_SCHEMA,
      email: SITE_EMAIL,
      address: gbpPostalAddressSchema(),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Breadcrumbs
        items={[
          { label: "Del Webb North Ranch", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />
      <main>
        {/* Hero - exactly one H1 */}
        <section className="bg-primary text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                Contact & Schedule a Tour | {GBP_BUSINESS_NAME}
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                Ready to explore Del Webb North Ranch? Contact <Link href="/about" className="text-white hover:text-gray-200 underline">Dr. Jan Duffy</Link> to
                schedule a private tour, ask questions, or learn more about
                <Link href="/homes-for-sale" className="text-white hover:text-gray-200 underline"> available homes</Link>. Explore <Link href="/floor-plans" className="text-white hover:text-gray-200 underline">floor plans</Link> and <Link href="/amenities" className="text-white hover:text-gray-200 underline">amenities</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Office RealScout widget - below hero */}
        <RealScoutListings h2Text="Homes for Sale at Del Webb North Ranch | North Las Vegas 55+ Listings" />

        {/* Contact Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Calendly Scheduling */}
                <ScrollAnimation>
                  <div className="w-full">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-playfair">
                      Schedule a Consultation
                    </h2>
                    <p className="text-text-dark mb-6">
                      Book a 15-minute consultation with Dr. Jan Duffy to discuss your home search and tour Del Webb North Ranch.
                    </p>
                    <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 w-full">
                      <CalendlyInline />
                    </div>
                  </div>
                </ScrollAnimation>

                {/* Contact Info with Image */}
                <ScrollAnimation delay={100}>
                  <div>
                    {/* Image */}
                    <div className="relative aspect-square rounded-lg overflow-hidden shadow-three bg-bg-light mb-6">
                      <Image
                        src="/images/about/dr-jan-duffy.jpg"
                        alt="Dr. Jan Duffy, REALTOR® specializing in Del Webb North Ranch"
                        fill
                        className="object-cover"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-playfair">
                      Get in Touch
                    </h2>
                    <div className="space-y-6">
                      {/* Phone & Text */}
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                          <Phone className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary mb-1">
                            Phone
                          </h3>
                          <a
                            href={SITE_PHONE_TEL}
                            className="text-text-dark hover:text-primary transition-colors text-lg"
                          >
                            {SITE_PHONE_DISPLAY}
                          </a>
                          <p className="text-sm text-gray-500 mt-1">
                            <a
                              href={SITE_PHONE_SMS}
                              className="inline-flex items-center gap-1 hover:text-primary transition-colors"
                              aria-label={`Text ${SITE_PHONE_DISPLAY}`}
                            >
                              <MessageSquare className="w-4 h-4" aria-hidden />
                              Text {SITE_PHONE_DISPLAY}
                            </a>
                          </p>
                        </div>
                      </div>

                      {/* Business Hours */}
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                          <Clock className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary mb-1">
                            Business Hours
                          </h3>
                          <p className="text-text-dark">{GBP_HOURS_DISPLAY}</p>
                          <p className="text-sm text-gray-500 mt-1">
                            Closed July 3–4, 2026 for Independence Day
                          </p>
                        </div>
                      </div>

                      {/* Schedule consultation */}
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                          <Calendar className="w-6 h-6 text-primary" aria-hidden />
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary mb-1">
                            Schedule a Consultation
                          </h3>
                          <ScheduleTour variant="outline" size="default" />
                          <p className="text-sm text-gray-500 mt-2">
                            Book an in-person real estate consultation online
                          </p>
                        </div>
                      </div>

                      {/* Business Location – matches Google Business Profile */}
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                          <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary mb-1">
                            Business Location
                          </h3>
                          <p className="text-text-dark mb-2">
                            {GBP_ADDRESS.streetAddress}
                            <br />
                            {GBP_ADDRESS.addressLocality}, {GBP_ADDRESS.addressRegion} {GBP_ADDRESS.postalCode}
                          </p>
                          <a
                            href={GOOGLE_MAPS_DIRECTIONS_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 min-h-[48px] px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-md font-semibold text-sm transition-colors"
                            aria-label="Get directions to Del Webb North Ranch on Google Maps"
                          >
                            <MapPinned className="w-4 h-4 shrink-0" />
                            Get directions
                          </a>
                          <p className="text-xs text-gray-500 mt-2">
                            Service area: North Las Vegas, NV, USA
                          </p>
                        </div>
                      </div>

                      {/* Brokerage Office */}
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                          <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary mb-1">
                            Brokerage Office
                          </h3>
                          <p className="text-text-dark">
                            Berkshire Hathaway HomeServices
                            <br />
                            Nevada Properties
                            <br />
                            9406 Del Webb Boulevard
                            <br />
                            Las Vegas, NV 89134
                          </p>
                        </div>
                      </div>

                    </div>

                    {/* License Info */}
                    <div className="mt-8 p-6 bg-bg-light rounded-lg">
                      <h3 className="font-semibold text-primary mb-2">
                        License Information
                      </h3>
                      <p className="text-sm text-text-dark">
                        <strong>License:</strong> S.0197614.LLC
                        <br />
                        <strong>Brokerage:</strong> Berkshire Hathaway
                        HomeServices Nevada Properties
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-playfair">
                Ready to Schedule a Tour?
              </h2>
              <p className="text-lg text-text-dark mb-6">
                The best way to experience Del Webb North Ranch is to see it in
                person. Schedule a private tour to walk the community, explore
                the amenities, and step inside the homes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={SITE_PHONE_TEL}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-md font-semibold hover:bg-primary/90 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call {SITE_PHONE_DISPLAY}
                </a>
                <ScheduleTour variant="accent" size="lg" />
              </div>
              
              {/* Additional Resources */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-text-dark mb-4 text-center">Additional Resources:</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href={oldSiteData.integrations.realscout}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border-2 border-primary text-primary rounded-md font-semibold hover:bg-primary hover:text-white transition-colors"
                  >
                    Browse Homes
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={oldSiteData.integrations.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border-2 border-primary text-primary rounded-md font-semibold hover:bg-primary hover:text-white transition-colors"
                  >
                    <Youtube className="w-4 h-4" />
                    YouTube Channel
                  </a>
                  <a
                    href={oldSiteData.integrations.brochurePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border-2 border-primary text-primary rounded-md font-semibold hover:bg-primary hover:text-white transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    Download Brochure
                  </a>
                  <a
                    href={GOOGLE_REVIEW_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 min-h-[48px] border-2 border-primary text-primary rounded-md font-semibold hover:bg-primary hover:text-white transition-colors"
                    aria-label="Leave a review on Google"
                  >
                    <Star className="w-4 h-4" />
                    Leave a review on Google
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <LocalVisitSection heading="Find Us at Del Webb North Ranch" />
      </main>
    </>
  );
}

