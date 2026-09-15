import type { Metadata } from "next";
import Breadcrumbs from "@/../components/Breadcrumbs";
import Link from "next/link";
import { FileText, Download } from "lucide-react";
import { Button } from "@/../components/ui/button";
import { getAllFlyers } from "@/lib/flyers";
import { SITE_ORIGIN, SITE_PHONE_TEL, SITE_PHONE_DISPLAY } from "@/lib/site";
import { metaDescriptionBlock, TITLE_SUFFIX } from "@/lib/hyperlocal";
import RealScoutListings from "@/../components/RealScoutListings";
import PageHero from "@/../components/PageHero";
import LocalVisitSection from "@/../components/LocalVisitSection";
import SectionPhoto from "@/../components/SectionPhoto";
import { mediaOpenGraph, mediaTwitterImages } from "@/lib/media";

export const metadata: Metadata = {
  title: `Community Flyers & Brochures | ${TITLE_SUFFIX}`,
  description: metaDescriptionBlock(
    "Download printable flyers and brochures about Del Webb North Ranch. Community information, floor plans, and amenities"
  ),
  alternates: {
    canonical: `${SITE_ORIGIN}/flyers`,
  },
  openGraph: {
    title: `Community Flyers & Brochures | ${TITLE_SUFFIX}`,
    description:
      "Download printable flyers and brochures about Del Webb North Ranch 55+ community.",
    url: `${SITE_ORIGIN}/flyers`,
    siteName: TITLE_SUFFIX,
    locale: "en_US",
    type: "website",
    images: [mediaOpenGraph("flyers.hero")],
  },
  twitter: {
    card: "summary_large_image",
    title: `Community Flyers & Brochures | ${TITLE_SUFFIX}`,
    description: "Download printable flyers and brochures about Del Webb North Ranch 55+ community.",
    images: mediaTwitterImages("flyers.hero"),
  },
};

export default function FlyersPage() {
  const flyers = getAllFlyers();
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Del Webb North Ranch", href: "/" },
          { label: "Flyers & Brochures", href: "/flyers" },
        ]}
      />
      <main>
        <PageHero
          mediaKey="flyers.hero"
          title="Community Flyers & Brochures"
          subtitle="Download printable flyers and brochures about Del Webb North Ranch. Share with friends and family or keep for your records."
        />

        {/* Office RealScout widget - directly below hero */}
        <RealScoutListings h2Text="Homes for Sale at Del Webb North Ranch | North Las Vegas 55+ Listings" />

        {/* Why download flyers */}
        <section className="py-12 md:py-16 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <SectionPhoto mediaKey="community.fullAerial" heading="Why Download Del Webb North Ranch Flyers &amp; Brochures">
                <p>
                  Whether you&apos;re exploring North Ranch for the first time or sharing the community with family, our printable flyers and brochures put key information about the Del Webb North Ranch 55+ community at your fingertips. From floor plans and amenities to area highlights, you can review details offline and share with others who might be considering this premier 55+ community in North Las Vegas.
                </p>
              </SectionPhoto>
              <h3 className="text-xl font-bold text-primary mb-3 font-playfair">Community overview</h3>
              <p className="text-text-dark mb-4 leading-relaxed">
                Del Webb North Ranch in North Las Vegas offers single-story living, resort-style amenities, and an active adult lifestyle. Our flyers summarize what makes North Ranch real estate and the Del Webb North Ranch clubhouse so appealing—so you can compare options and plan your visit or move with confidence.
              </p>
              <h3 className="text-xl font-bold text-primary mb-3 font-playfair">Floor plans and homes</h3>
              <p className="text-text-dark mb-4 leading-relaxed">
                North Ranch floor plans range from cozy cottages to spacious retreats. Download our materials to see square footage, bedroom and bathroom counts, and series details for Del Webb North Ranch resale homes and new construction. Pair these with a visit to our homes-for-sale listings to see what&apos;s currently available in the community.
              </p>
              <h3 className="text-xl font-bold text-primary mb-3 font-playfair">Share with family and friends</h3>
              <p className="text-text-dark mb-6 leading-relaxed">
                Many buyers share Del Webb North Ranch information with adult children or friends who are also considering 55+ active adult communities. Having a PDF or printed brochure makes it easy to pass along accurate, up-to-date details about North Ranch amenities, location, and lifestyle.
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-playfair">
                Printable Resources for North Ranch Buyers and Sellers
              </h2>
              <p className="text-text-dark mb-4 leading-relaxed">
                Our Del Webb North Ranch flyers and brochures are designed for both buyers and sellers. If you&apos;re exploring the North Ranch 55+ community as a potential buyer, you&apos;ll find overviews of floor plans, amenities, and the active adult lifestyle at Del Webb North Ranch in North Las Vegas. If you&apos;re already in the area and considering selling, the same materials can help you explain the community to family or to your own agent—so everyone has a clear picture of what makes North Ranch real estate and the Del Webb North Ranch clubhouse so desirable.
              </p>
              <h3 className="text-xl font-bold text-primary mb-3 font-playfair">Using flyers when relocating</h3>
              <p className="text-text-dark mb-4 leading-relaxed">
                Relocating to North Las Vegas from another state? Download our Del Webb North Ranch materials before your visit. You can review North Ranch floor plans, HOA details, and area information on the plane or in your hotel—and bring printed copies to your tour so you can compare what you see in person with the overview. Many 55+ buyers find that having a physical or PDF reference makes it easier to remember which Del Webb North Ranch home or series they liked best.
              </p>
              <h3 className="text-xl font-bold text-primary mb-3 font-playfair">Keeping information handy</h3>
              <p className="text-text-dark leading-relaxed">
                Even after you&apos;ve toured or bought, our North Ranch flyers and brochures remain useful. Residents often keep them for guests who ask about the community, or for friends who are considering Del Webb North Ranch as their next address. The Del Webb North Ranch 55+ community is one of North Las Vegas&apos;s premier active adult neighborhoods—and having clear, professional materials to share helps spread the word about North Ranch amenities, lifestyle, and real estate.
              </p>
            </div>
          </div>
        </section>

        {/* Quick access to materials */}
        <section className="py-10 md:py-12 bg-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-playfair text-center">
                Del Webb North Ranch Materials at a Glance
              </h2>
              <p className="text-text-dark text-center leading-relaxed">
                The flyers and brochures below cover the North Ranch 55+ community from floor plans and amenities to area highlights. Download what you need, then explore current homes for sale at Del Webb North Ranch in the listings above or schedule a tour with Dr. Jan Duffy to see the Del Webb North Ranch clubhouse and North Ranch real estate in person.
              </p>
            </div>
          </div>
        </section>

        {/* Flyers Grid */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {flyers.map((flyer) => (
                  <div
                    key={flyer.slug}
                    className="bg-white rounded-lg shadow-two hover:shadow-three transition-shadow border border-gray-200 overflow-hidden flex flex-col"
                  >
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                        <FileText className="w-8 h-8 text-primary" />
                      </div>
                      <div className="mb-2">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                          {flyer.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-3 font-playfair">
                        {flyer.title}
                      </h3>
                      <p className="text-text-dark mb-6 flex-grow leading-relaxed">
                        {flyer.description}
                      </p>
                      <div className="flex flex-col gap-3">
                        <Button
                          asChild
                          variant="default"
                          className="w-full bg-primary hover:bg-primary/90"
                        >
                          <Link
                            href={`/flyers/${flyer.slug}`}
                            className="flex items-center justify-center gap-2"
                          >
                            View Details
                          </Link>
                        </Button>
                        <a
                          href={flyer.filePath}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-4 py-2 border-2 border-primary text-primary font-semibold rounded-md hover:bg-primary/5 transition-colors"
                        >
                          <Download className="w-4 h-4" />
                          Download PDF
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* More resources at North Ranch */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-playfair text-center">
                More Resources for Del Webb North Ranch
              </h2>
              <p className="text-text-dark mb-6 text-center leading-relaxed">
                Beyond flyers and brochures, explore the full Del Webb North Ranch experience: current listings, floor plans, amenities, and the active adult lifestyle at North Ranch in North Las Vegas.
              </p>
              <p className="text-text-dark text-center">
                <Link href="/buyers" className="text-primary hover:underline font-medium">For Buyers</Link>
                {" · "}
                <Link href="/sellers" className="text-primary hover:underline font-medium">For Sellers</Link>
                {" · "}
                <Link href="/community" className="text-primary hover:underline font-medium">Community & Area</Link>
                {" · "}
                <Link href="/homes-for-sale" className="text-primary hover:underline font-medium">Homes for Sale</Link>
                {" · "}
                <Link href="/schedule" className="text-primary hover:underline font-medium">Schedule a Tour</Link>
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-playfair">
                Need More Information?
              </h2>
              <p className="text-lg text-text-dark mb-6">
                Contact Dr. Jan Duffy to schedule a private tour or get answers to your questions about Del Webb North Ranch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={SITE_PHONE_TEL}
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Call {SITE_PHONE_DISPLAY}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors"
                >
                  Schedule a Tour
                </Link>
              </div>
            </div>
          </div>
        </section>
        <LocalVisitSection heading="Pick up community details at Del Webb North Ranch" />
      </main>
    </>
  );
}
