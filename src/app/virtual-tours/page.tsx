import type { Metadata } from "next";
import Breadcrumbs from "@/../components/Breadcrumbs";
import Link from "next/link";
import VirtualTours from "@/../components/VirtualTours";
import RealScoutListings from "@/../components/RealScoutListings";
import PageHero from "@/../components/PageHero";
import LocalVisitSection from "@/../components/LocalVisitSection";
import { Button } from "@/../components/ui/button";
import { SITE_ORIGIN } from "@/lib/site";
import { metaDescriptionBlock, TITLE_SUFFIX } from "@/lib/hyperlocal";
import { mediaOpenGraph, mediaTwitterImages } from "@/lib/media";

export const metadata: Metadata = {
  title: `Virtual Tours | ${TITLE_SUFFIX}`,
  description: metaDescriptionBlock(
    "Take a virtual tour of Del Webb North Ranch model homes. Explore 55+ single-story floor plans from home before you visit North Las Vegas"
  ),
  alternates: { canonical: `${SITE_ORIGIN}/virtual-tours` },
  openGraph: {
    title: `Virtual Tours | ${TITLE_SUFFIX}`,
    description: "Explore Del Webb North Ranch model homes with 3D virtual tours. North Las Vegas 55+ community.",
    url: `${SITE_ORIGIN}/virtual-tours`,
    siteName: TITLE_SUFFIX,
    locale: "en_US",
    type: "website",
    images: [mediaOpenGraph("virtualTours.hero")],
  },
  twitter: {
    card: "summary_large_image",
    title: `Virtual Tours | ${TITLE_SUFFIX}`,
    description: "Virtual tours of Del Webb North Ranch model homes in North Las Vegas.",
    images: mediaTwitterImages("virtualTours.hero"),
  },
};

export default function VirtualToursPage() {
  return (
    <>
      <main>
        <Breadcrumbs
          items={[
            { label: "Del Webb North Ranch", href: "/" },
            { label: "Virtual Tours", href: "/virtual-tours" },
          ]}
        />
        <PageHero
          mediaKey="virtualTours.hero"
          title="Virtual Tours | Del Webb North Ranch Model Homes"
          subtitle="Explore Del Webb North Ranch model homes with 3D virtual tours from anywhere. Then schedule an in-person visit at 2290 Beauty Vista Avenue, North Las Vegas, NV 89086."
        />

        {/* Office RealScout widget - below hero */}
        <RealScoutListings h2Text="Homes for Sale at Del Webb North Ranch | North Las Vegas 55+ Listings" />

        {/* Long-form: Del Webb North Ranch, H2/H3, 1500+ words */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg text-text-dark">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-playfair">
                Virtual Tours of Del Webb North Ranch Model Homes
              </h2>
              <p className="mb-6">
                Del Webb North Ranch offers 3D virtual tours of model homes so you can explore single-story floor plans from home before you visit North Las Vegas. The North Ranch community includes the Cottage, Classic, and Retreat series—each with open layouts, two or three bedrooms, and attached garages. Virtual tours let you walk through the spaces, see room sizes, and get a feel for the Del Webb North Ranch lifestyle before scheduling an in-person tour. North Ranch real estate is in demand among 55+ buyers, and seeing the community online is a great first step. Use the tours below to explore, then view current homes for sale at Del Webb North Ranch in the listings above or schedule a tour with Dr. Jan Duffy.
              </p>
              <h3 className="text-xl font-bold text-primary mt-10 mb-4 font-playfair">
                Why Tour Del Webb North Ranch Online First
              </h3>
              <p className="mb-6">
                Many buyers relocating to North Las Vegas start with a virtual tour of Del Webb North Ranch. This premier 55+ community in North Las Vegas is built for single-story living and active adult lifestyle—and seeing the floor plans and model homes online helps you narrow down which North Ranch homes fit your needs. Once you&apos;ve explored virtually, you can schedule an in-person tour to walk the community, see the clubhouse and amenities, and step inside available resale homes. The Del Webb North Ranch clubhouse, pool, and pickleball courts are all built and ready—and a virtual tour plus a real visit gives you the full picture of life at North Ranch.
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mt-12 mb-6 font-playfair">
                Del Webb North Ranch Floor Plans and Models
              </h2>
              <p className="mb-6">
                North Ranch floor plans range from about 1,285 to 2,015 square feet across the Cottage, Classic, and Retreat collections. Each Del Webb North Ranch home is single-story with open living areas, modern finishes, and low-maintenance landscaping handled by the HOA. Virtual tours showcase the models so you can compare layouts and square footage before you visit. When you&apos;re ready, browse current homes for sale at Del Webb North Ranch in the office listings above—resale inventory turns over regularly as North Ranch residents relocate or downsize. Dr. Jan Duffy specializes in this 55+ community in North Las Vegas and can help you find the right North Ranch home for your next chapter.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-primary mt-12 mb-6 font-playfair">
                From Virtual to In-Person: Next Steps at Del Webb North Ranch
              </h2>
              <p className="mb-6">
                After you&apos;ve explored the virtual tours, the next step is an in-person visit. Del Webb North Ranch in North Las Vegas is a gated 55+ community with a built-out clubhouse, resort-style pool, pickleball courts, and dozens of clubs and activities—and those are best experienced on site. Schedule a private tour with Dr. Jan Duffy to walk the community, see the North Ranch amenities, and step inside available resale homes. Many buyers combine a virtual tour with a single visit to North Ranch and leave with a clear picture of whether the Del Webb North Ranch lifestyle fits their goals.
              </p>
              <h3 className="text-xl font-bold text-primary mt-10 mb-4 font-playfair">
                What to See on Your North Ranch Tour
              </h3>
              <p className="mb-6">
                Your in-person tour can include the Del Webb North Ranch clubhouse, pool and fitness areas, pickleball and bocce courts, and one or more North Ranch homes for sale. Dr. Jan Duffy knows every Del Webb North Ranch floor plan and can match you with listings that fit your size, budget, and preferences. North Ranch real estate includes the Cottage, Classic, and Retreat series—each with open layouts and single-story living. Whether you&apos;re relocating from out of state or moving from elsewhere in the Las Vegas valley, a tour of North Ranch is the best way to see this premier 55+ community in North Las Vegas and decide if it&apos;s the right fit for your next chapter.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-white" aria-labelledby="tours-heading">
          <div className="container mx-auto px-4">
            <h2 id="tours-heading" className="text-2xl md:text-3xl font-bold text-primary mb-6 font-playfair text-center">
              Explore North Ranch Homes with 3D Virtual Tours
            </h2>
          </div>
        </section>
        <VirtualTours />
        <section className="py-12 md:py-16 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-text-dark mb-6">
                Ready to see the community in person? Schedule a private tour with Dr. Jan Duffy.
              </p>
              <Button asChild size="lg" className="min-h-[48px]">
                <Link href="/schedule">Schedule a Tour</Link>
              </Button>
            </div>
          </div>
        </section>
        <LocalVisitSection heading="See Del Webb North Ranch in person after your virtual tour" />
      </main>
    </>
  );
}
