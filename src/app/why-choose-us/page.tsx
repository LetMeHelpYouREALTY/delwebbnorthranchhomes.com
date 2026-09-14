import type { Metadata } from "next";
import Breadcrumbs from "@/../components/Breadcrumbs";
import Link from "next/link";
import { Button } from "@/../components/ui/button";
import ProblemSection from "@/../components/sections/problem-section";
import SolutionSection from "@/../components/sections/solution-section";
import ValuePropsSection from "@/../components/sections/value-props";
import RealScoutListings from "@/../components/RealScoutListings";
import PageHero from "@/../components/PageHero";
import { SITE_ORIGIN } from "@/lib/site";
import { metaDescriptionBlock, TITLE_SUFFIX } from "@/lib/hyperlocal";
import { mediaOpenGraph, mediaTwitterImages } from "@/lib/media";

export const metadata: Metadata = {
  title: `Why Choose Del Webb North Ranch | ${TITLE_SUFFIX}`,
  description: metaDescriptionBlock(
    "Why choose Del Webb North Ranch 55+ community: single-story living, resort amenities, no state income tax, and neighbors who get it. North Las Vegas"
  ),
  alternates: { canonical: `${SITE_ORIGIN}/why-choose-us` },
  openGraph: {
    title: `Why Choose Del Webb North Ranch | ${TITLE_SUFFIX}`,
    description: "Single-story living, resort amenities, no state income tax, and a community built for living. North Las Vegas 55+.",
    url: `${SITE_ORIGIN}/why-choose-us`,
    siteName: TITLE_SUFFIX,
    locale: "en_US",
    type: "website",
    images: [mediaOpenGraph("whyChooseUs.hero")],
  },
  twitter: {
    card: "summary_large_image",
    title: `Why Choose Del Webb North Ranch | ${TITLE_SUFFIX}`,
    description: "Why active adults choose Del Webb North Ranch in North Las Vegas.",
    images: mediaTwitterImages("whyChooseUs.hero"),
  },
};

export default function WhyChooseUsPage() {
  return (
    <>
      <main>
        <Breadcrumbs
          items={[
            { label: "Del Webb North Ranch", href: "/" },
            { label: "Why Choose Us", href: "/why-choose-us" },
          ]}
        />
        <PageHero
          mediaKey="whyChooseUs.hero"
          title="Why Choose Del Webb North Ranch?"
          subtitle="A 55+ gated community in North Las Vegas built for people who want to live, not just exist."
        />

        {/* Office RealScout widget - below hero */}
        <RealScoutListings h2Text="Homes for Sale at Del Webb North Ranch | North Las Vegas 55+ Listings" />

        {/* Long-form: Del Webb North Ranch variations, H2/H3, 1500+ words */}
        <section className="py-12 md:py-16 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg max-w-none text-text-dark">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-playfair">
                What Makes Del Webb North Ranch Different
              </h2>
              <p className="mb-6">
                Del Webb North Ranch is a 55+ active adult gated community in North Las Vegas with 394 single-story homes on 80 acres. Unlike newer developments still waiting on amenities, North Ranch is fully built: the 10,000 sq ft clubhouse is open, the resort-style pool and pickleball courts are ready, and the fitness center and social clubs are in full swing. When you choose Del Webb North Ranch, you&apos;re choosing a community that&apos;s complete—so you can start living from day one. North Ranch real estate is in demand because this premier 55+ community in North Las Vegas offers single-story living, low maintenance, and neighbors who chose the same lifestyle.
              </p>
              <h3 className="text-xl font-bold text-primary mt-10 mb-4 font-playfair">
                Single-Story Living at North Ranch
              </h3>
              <p className="mb-6">
                Every home at Del Webb North Ranch is single-story. Floor plans span the Cottage, Classic, and Retreat series from about 1,285 to 2,015 square feet, with two or three bedrooms, open layouts, and attached two-car garages. No stairs means easier daily living now and later—and the North Ranch community is designed so you can age in place without worrying about steps or upkeep. The Del Webb North Ranch clubhouse and amenities are all built for active adults, so whether you&apos;re into pickleball, fitness, or social clubs, North Ranch has it. View current homes for sale at Del Webb North Ranch in the listings above.
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mt-12 mb-6 font-playfair">
                North Las Vegas and Del Webb North Ranch
              </h2>
              <p className="mb-6">
                North Las Vegas offers no state income tax, strong healthcare (VA Southern Nevada Hospital, Centennial Hills Hospital), and outdoor recreation like Craig Ranch Regional Park and Lake Mead. Del Webb North Ranch sits in zip code 89086 with easy access to Aliante, Centennial Hills, and the Las Vegas Strip. The North Ranch community is gated with virtual concierge and roving security—so you get the benefits of North Las Vegas living with the peace of mind of a 55+ community. When you choose Del Webb North Ranch, you&apos;re choosing North Ranch amenities, North Las Vegas location, and a neighborhood built for the next chapter.
              </p>
            </div>
          </div>
        </section>

        <ProblemSection />
        <SolutionSection />
        <ValuePropsSection />
        <section className="py-12 md:py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">
                Ready to See It For Yourself?
              </h2>
              <p className="text-lg text-gray-100 mb-6">
                Schedule a private tour or browse current homes for sale in Del Webb North Ranch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="accent" size="lg" className="bg-white text-primary hover:bg-gray-100 min-h-[48px]">
                  <Link href="/schedule">Schedule a Tour</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 min-h-[48px]">
                  <Link href="/homes-for-sale">Homes for Sale</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
