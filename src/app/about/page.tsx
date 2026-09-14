import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/../components/Breadcrumbs";
import { Button } from "@/../components/ui/button";
import Link from "next/link";
import ScrollAnimation from "@/../components/scroll-animation";
import { Phone, MapPin, Award, Users, Home, Calendar } from "lucide-react";
import { getAllTestimonials } from "@/lib/old-site-data";
import { getCommunityInfo } from "@/lib/communityData";
import { Quote } from "lucide-react";
import ScheduleTour from "@/../components/ScheduleTour";
import RealScoutListings from "@/../components/RealScoutListings";
import LocalVisitSection from "@/../components/LocalVisitSection";
import { SITE_ORIGIN, SITE_PHONE_TEL, SITE_PHONE_DISPLAY, SITE_PHONE_SCHEMA } from "@/lib/site";
import { metaDescriptionBlock, TITLE_SUFFIX } from "@/lib/hyperlocal";

export const metadata: Metadata = {
  title: `About Dr. Jan Duffy REALTOR® | ${TITLE_SUFFIX}`,
  description: metaDescriptionBlock(
    "Meet Dr. Jan Duffy, REALTOR® specializing in this premier 55+ community; licensed with Berkshire Hathaway HomeServices"
  ),
  alternates: {
    canonical: `${SITE_ORIGIN}/about`,
  },
  openGraph: {
    title: `About Dr. Jan Duffy REALTOR® | ${TITLE_SUFFIX}`,
    description:
      "Your trusted REALTOR® specializing in Del Webb North Ranch and North Las Vegas 55+ communities.",
    url: `${SITE_ORIGIN}/about`,
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
    title: `About Dr. Jan Duffy REALTOR® | ${TITLE_SUFFIX}`,
    description: "Your trusted REALTOR® specializing in Del Webb North Ranch 55+ community.",
    images: [`${SITE_ORIGIN}/images/about/dr-jan-duffy.jpg`],
  },
};

const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

const specialties = [
  {
    icon: <Home className="w-6 h-6" />,
    title: "Del Webb North Ranch Expert",
    description:
      "Exclusive focus on this premier 55+ community means deep knowledge of every floor plan, homesite, and resale opportunity.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Licensed REALTOR®",
    description:
      "Licensed professional (S.0197614.LLC) with Berkshire Hathaway HomeServices Nevada Properties, committed to ethical service.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "55+ Community Specialist",
    description:
      "Understanding the unique needs of 55+ buyers, from downsizing to lifestyle transitions and retirement planning.",
  },
];

export default function AboutPage() {
  const testimonials = getAllTestimonials().slice(0, 3); // Show first 3 testimonials

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Del Webb North Ranch", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />
      <main>
        {/* E-E-A-T: ProfilePage + Person schema for About (Jan 2026 realtor SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "ProfilePage",
                  "@id": `${SITE_ORIGIN}/about#profilepage`,
                  url: `${SITE_ORIGIN}/about`,
                  mainEntity: { "@id": `${SITE_ORIGIN}/#person` },
                },
                {
                  "@type": "Person",
                  "@id": `${SITE_ORIGIN}/#person`,
                  name: "Dr. Jan Duffy",
                  jobTitle: "REALTOR®",
                  description: "REALTOR® specializing in Del Webb North Ranch and North Las Vegas 55+ communities. Licensed with Berkshire Hathaway HomeServices Nevada Properties.",
                  image: `${SITE_ORIGIN}/images/about/dr-jan-duffy.jpg`,
                  url: `${SITE_ORIGIN}/about`,
                  telephone: SITE_PHONE_SCHEMA,
                  worksFor: { "@type": "Organization", name: "Berkshire Hathaway HomeServices Nevada Properties" },
                  hasCredential: {
                    "@type": "EducationalOccupationalCredential",
                    credentialCategory: "Real Estate License",
                    credentialNumber: "S.0197614.LLC",
                  },
                },
              ],
            }).replace(/</g, "\\u003c"),
          }}
        />
        {/* Hero Section */}
        <section className="bg-primary text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                About Dr. Jan Duffy REALTOR® | Del Webb North Ranch 55+ Real Estate
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                Your trusted REALTOR® specializing in Del Webb North Ranch and
                North Las Vegas 55+ communities
              </p>
            </div>
          </div>
        </section>

        {/* Office RealScout widget - directly below hero */}
        <RealScoutListings h2Text="View Available Homes in Del Webb North Ranch | Work With Dr. Jan Duffy" />

        {/* About Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Image */}
                <ScrollAnimation>
                  <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
                    <Image
                      src="/images/about/dr-jan-duffy.jpg"
                      alt="Dr. Jan Duffy, REALTOR® specializing in Del Webb North Ranch"
                      fill
                      className="object-cover rounded-lg shadow-three"
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </ScrollAnimation>

                {/* Content */}
                <ScrollAnimation delay={100}>
                  <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-6 font-playfair">
                      Your Del Webb North Ranch Expert
                    </h2>
                    <div className="prose prose-lg max-w-none space-y-4">
                      <p className="text-base md:text-lg text-text-dark leading-relaxed">
                        Dr. Jan Duffy isn't a builder's sales rep. She's an
                        independent REALTOR® with Berkshire Hathaway
                        HomeServices who specializes exclusively in Del Webb
                        North Ranch.
                      </p>
                      <p className="text-base md:text-lg text-text-dark leading-relaxed">
                        With years of experience helping clients find their dream
                        homes in vibrant 55+ communities, Dr. Duffy understands
                        the unique needs of active adults. She knows which <Link href="/floor-plans" className="text-primary hover:underline underline">floor plans</Link> get the best morning light. Which homesites have
                        the best mountain views. Which <Link href="/homes-for-sale" className="text-primary hover:underline underline">resale homes</Link> are worth
                        considering and which to skip.
                      </p>
                      <p className="text-base md:text-lg text-text-dark leading-relaxed font-semibold">
                        When you work with her, you get honest guidance—not a
                        sales pitch. Her goal is to help you find the perfect
                        home that matches your lifestyle, not just make a sale.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>

        {/* Specialties */}
        <section className="py-12 md:py-16 lg:py-20 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center font-playfair">
                Why Work With Dr. Jan Duffy?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {specialties.map((specialty, index) => (
                  <ScrollAnimation key={specialty.title} delay={index * 100}>
                    <div className="bg-white p-6 md:p-8 rounded-lg shadow-two hover:shadow-three transition-shadow">
                      <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                        <div className="text-primary">{specialty.icon}</div>
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-3 font-playfair">
                        {specialty.title}
                      </h3>
                      <p className="text-text-dark leading-relaxed">
                        {specialty.description}
                      </p>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Community History Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center font-playfair">
                About Del Webb North Ranch
              </h2>
              <div className="prose prose-lg max-w-none space-y-4 text-text-dark">
                <p>
                  Del Webb North Ranch is a premier 55+ active adult gated community developed by Del Webb (Pulte Homes) in North Las Vegas, Nevada.
                </p>
                <p>
                  Construction began in 2020, with the first homeowners moving in that same year. The community was completed in 2024, with all 394 single-story homes now built on approximately 80 acres. The 10,000 sq ft clubhouse amenity center opened on October 16, 2021, and has been serving residents ever since.
                </p>
                <p>
                  The community features three collections: Cottage Series (132 homes, 1,285-1,509 sq ft), Classic Series (132 homes, 1,451-1,770 sq ft), and Retreat Series (130 homes, 1,716-2,015 sq ft). Explore all <Link href="/floor-plans" className="text-primary hover:underline underline">9 floor plans</Link> available. Homes are in a gated community with virtual concierge and roving security. Discover the <Link href="/amenities" className="text-primary hover:underline underline">resort-style amenities</Link> that make this community special.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center font-playfair">
                A Passion for Helping You Find Home
              </h2>
              <div className="prose prose-lg max-w-none space-y-4 text-text-dark">
                <p>
                  Hi, I'm Dr. Jan Duffy 👋 A passionate REALTOR® specializing in
                  helping clients find their dream homes in vibrant 55+
                  communities. Let's connect! 🏡
                </p>
                <p>
                  I understand that buying a home in a 55+ community is more
                  than just a real estate transaction—it's a lifestyle decision.
                  That's why I take the time to truly understand your needs,
                  preferences, and goals. Whether you're downsizing from a
                  larger home, relocating from another state, or looking for
                  your perfect retirement home, I'm here to guide you every step
                  of the way.
                </p>
                <p>
                  My exclusive focus on Del Webb North Ranch means I know this
                  community inside and out. I can tell you which homesites have
                  the best views, which <Link href="/floor-plans" className="text-primary hover:underline underline">floor plans</Link> work best for entertaining,
                  and which <Link href="/homes-for-sale" className="text-primary hover:underline underline">resale homes</Link> represent the best value. Learn more about the <Link href="/lifestyle" className="text-primary hover:underline underline">active adult lifestyle</Link> at Del Webb North Ranch. I'm not here
                  to push you into a sale—I'm here to help you make an informed
                  decision about your next chapter.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-12 md:py-16 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center font-playfair">
                Let's Connect
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-two text-center">
                  <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-primary mb-2">Phone</h3>
                  <a
                    href={SITE_PHONE_TEL}
                    className="text-text-dark hover:text-primary transition-colors"
                  >
                    {SITE_PHONE_DISPLAY}
                  </a>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-two text-center">
                  <Calendar className="w-8 h-8 text-primary mx-auto mb-4" aria-hidden />
                  <h3 className="font-semibold text-primary mb-2">Schedule</h3>
                  <ScheduleTour variant="outline" size="default" className="w-full" />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-two text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-primary mb-2">Location</h3>
                  <p className="text-text-dark text-sm">
                    9406 Del Webb Boulevard
                    <br />
                    Las Vegas, NV 89134
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-12 md:py-16 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center font-playfair">
                What Clients Say About Dr. Jan Duffy
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <ScrollAnimation key={testimonial.name} delay={index * 100}>
                    <div className="bg-white p-6 rounded-lg shadow-two hover:shadow-three transition-shadow h-full flex flex-col">
                      <Quote className="w-6 h-6 text-primary mb-3 opacity-50" />
                      <p className="text-sm md:text-base text-text-dark leading-relaxed mb-4 flex-grow font-playfair italic">
                        "{testimonial.text.substring(0, 150)}..."
                      </p>
                      <div className="border-t border-gray-200 pt-3">
                        <p className="text-base font-semibold text-primary">
                          — {testimonial.name}
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link
                  href="/testimonials"
                  className="text-primary hover:underline font-semibold transition-colors"
                >
                  Read All Testimonials →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* License & Brokerage */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-bg-light p-6 md:p-8 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-4 font-playfair">
                  License & Brokerage Information
                </h3>
                <div className="space-y-2 text-text-dark">
                  <p>
                    <strong>License:</strong> S.0197614.LLC
                  </p>
                  <p>
                    <strong>Brokerage:</strong> Berkshire Hathaway HomeServices
                    Nevada Properties
                  </p>
                  <p className="text-sm text-gray-600 mt-4">
                    Equal Housing Opportunity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next steps - buyer/seller/community */}
        <section className="py-12 md:py-16 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-playfair">
                Your Next Step
              </h2>
              <p className="text-text-dark mb-6">
                Whether you&apos;re buying or selling in North Las Vegas, or exploring the area—start here.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="default" size="lg" className="min-h-[48px]">
                  <Link href="/buyers">For Buyers</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="min-h-[48px]">
                  <Link href="/sellers">For Sellers</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="min-h-[48px]">
                  <Link href="/community">Community & Area</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <LocalVisitSection heading="Visit Del Webb North Ranch with Dr. Jan Duffy" />
        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">
                Ready to Find Your Dream Home?
              </h2>
              <p className="text-lg text-gray-100 mb-6">
                Let's schedule a time to discuss your needs and tour Del Webb
                North Ranch together. <Link href="/contact" className="text-white hover:text-gray-200 underline">Contact Dr. Jan Duffy</Link> to get started.
              </p>
              <ScheduleTour variant="accent" size="lg" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

