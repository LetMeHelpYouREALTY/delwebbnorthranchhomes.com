import type { Metadata } from "next";
import { CANONICAL_HOMEPAGE, SITE_ORIGIN, SITE_PHONE_DISPLAY } from "@/lib/site";
import { TITLE_SUFFIX, altPrefix } from "@/lib/hyperlocal";
import Hero from "../../components/hero";
import ProblemSection from "../../components/sections/problem-section";
import SolutionSection from "../../components/sections/solution-section";
import ValuePropsSection from "../../components/sections/value-props";
import TestimonialSection from "../../components/sections/testimonial";
import AmenitiesPreviewSection from "../../components/sections/amenities-preview";
import HomeCollectionsSection from "../../components/sections/home-collections";
import AboutAgentSection from "../../components/sections/about-agent";
import FinalCTASection from "../../components/sections/final-cta";
import RealScoutListings from "../../components/RealScoutListings";
import ExploreCommunitySection from "../../components/sections/explore-community";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import QuickFAQ from "../../components/QuickFAQ";
import LocalVisitSection from "../../components/LocalVisitSection";
import { faqData } from "@/lib/faqData";

const HOMEPAGE_METADATA: Metadata = {
  title: TITLE_SUFFIX,
  description:
    `Del Webb at North Ranch & Del Webb North Las Vegas: 55+ homes for sale in North Las Vegas. Single-story living from $400K-$600K with resort amenities. Contact Dr. Jan Duffy at ${SITE_PHONE_DISPLAY}.`,
  alternates: {
    canonical: CANONICAL_HOMEPAGE,
  },
  openGraph: {
    title: TITLE_SUFFIX,
    description:
      "Del Webb at North Ranch & Del Webb North Las Vegas: 55+ homes for sale. Single-story living from $400K-$600K with resort amenities.",
    url: CANONICAL_HOMEPAGE,
    siteName: TITLE_SUFFIX,
    images: [
      {
        url: `${SITE_ORIGIN}/images/amenities/resort-pool.jpeg`,
        width: 1200,
        height: 630,
        alt: altPrefix("Resort-style pool"),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE_SUFFIX,
    description:
      "Del Webb at North Ranch & Del Webb North Las Vegas: 55+ homes for sale. Single-story living from $400K-$600K with resort amenities.",
    images: [`${SITE_ORIGIN}/images/amenities/resort-pool.jpeg`],
  },
};

/** Parameter URLs (?card=) get noindex so GSC treats them as alternates; canonical points to homepage. */
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ card?: string }>;
}): Promise<Metadata> {
  const params = await searchParams;
  if (params?.card) {
    return {
      ...HOMEPAGE_METADATA,
      robots: { index: false, follow: true },
    };
  }
  return HOMEPAGE_METADATA;
}

export default function Home() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${CANONICAL_HOMEPAGE}#webpage`,
    name: TITLE_SUFFIX,
    description:
      "Del Webb at North Ranch & Del Webb North Las Vegas: 55+ homes for sale in North Las Vegas. Single-story living from $400K-$600K with resort amenities.",
    url: CANONICAL_HOMEPAGE,
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${SITE_ORIGIN}/images/amenities/resort-pool.jpeg`,
    },
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_ORIGIN}/#website`,
      url: SITE_ORIGIN,
    },
  };

  const homepageFaq = [
    faqData
      .find((cat) => cat.category === "Age Requirements & Residency")
      ?.questions.find((q) => q.question.toLowerCase().includes("age requirements")),
    faqData
      .find((cat) => cat.category === "HOA & Fees")
      ?.questions.find((q) => q.question.toLowerCase().includes("hoa fees")),
    faqData
      .find((cat) => cat.category === "Pets & Lifestyle")
      ?.questions.find((q) => q.question.toLowerCase().includes("pets allowed")),
    faqData
      .find((cat) => cat.category === "About the Community")
      ?.questions.find((q) => q.question.toLowerCase().includes("gated")),
  ].filter(Boolean) as Array<{ question: string; answer: string }>;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homepageFaq.map((q) => ({
      "@type": "Question" as const,
      name: q.question,
      acceptedAnswer: { "@type": "Answer" as const, text: q.answer },
    })),
  };

  return (
    <>
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webPageSchema).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
          }}
        />
        <Hero />
        {/* Office RealScout listings - directly below hero */}
        <RealScoutListings h2Text="Browse Available Homes for Sale in Del Webb North Ranch | North Las Vegas 55+ Community" />
        {/* Explore Community Section - Prominent internal linking for sitelinks */}
        <ExploreCommunitySection />
        <ProblemSection />
        <SolutionSection />
        <ValuePropsSection />
        <section className="py-6 bg-white">
          <div className="container mx-auto px-4 text-center">
            <Button asChild variant="outline" size="lg" className="min-h-[48px]">
              <Link href="/why-choose-us">Why Choose Us — Full Page</Link>
            </Button>
          </div>
        </section>
        <TestimonialSection />
        <AmenitiesPreviewSection />
        <HomeCollectionsSection />
        {/* CTAs to full pages (content lives on dedicated pages) */}
        <section className="py-8 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
              <Button asChild variant="outline" size="lg" className="min-h-[48px] w-full">
                <Link href="/virtual-tours">Virtual Tours</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-h-[48px] w-full">
                <Link href="/testimonials">Client Testimonials</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-h-[48px] w-full">
                <Link href="/mortgage-calculator">Mortgage Calculator</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-h-[48px] w-full">
                <Link href="/faq">FAQ</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-h-[48px] w-full sm:col-span-2 lg:col-span-4">
                <Link href="/flyers">Flyers & Brochures</Link>
              </Button>
            </div>
          </div>
        </section>
        <AboutAgentSection />
        <QuickFAQ />
        <LocalVisitSection />
        <FinalCTASection />
      </main>
    </>
  );
}
