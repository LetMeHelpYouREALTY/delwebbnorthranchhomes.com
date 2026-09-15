import type { Metadata } from 'next';
import Breadcrumbs from '@/../components/Breadcrumbs';
import ScheduleTour from '@/../components/ScheduleTour';
import RealScoutListings from '@/../components/RealScoutListings';
import LocalVisitSection from '@/../components/LocalVisitSection';
import PageHero from '@/../components/PageHero';
import SectionPhoto from '@/../components/SectionPhoto';
import { mediaOpenGraph, mediaTwitterImages } from '@/lib/media';
import { Phone, Clock, MapPin } from 'lucide-react';
import { oldSiteData } from '@/lib/fetchOldSiteData';
import { SITE_ORIGIN, GOOGLE_MAPS_DIRECTIONS_URL, SITE_PHONE_TEL, SITE_PHONE_DISPLAY } from '@/lib/site';
import { metaDescriptionBlock, TITLE_SUFFIX } from '@/lib/hyperlocal';

export const metadata: Metadata = {
  title: `Schedule a Tour | ${TITLE_SUFFIX}`,
  description: metaDescriptionBlock(
    'Schedule a private tour of Del Webb North Ranch with Dr. Jan Duffy. Walk the community, explore amenities, and see available homes'
  ),
  alternates: {
    canonical: `${SITE_ORIGIN}/schedule`,
  },
  openGraph: {
    title: `Schedule a Tour | ${TITLE_SUFFIX}`,
    description:
      'Book a private tour of Del Webb North Ranch 55+ community in North Las Vegas. Schedule online with Dr. Jan Duffy.',
    url: `${SITE_ORIGIN}/schedule`,
    siteName: TITLE_SUFFIX,
    locale: 'en_US',
    type: 'website',
    images: [mediaOpenGraph('schedule.hero')],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Schedule a Tour | ${TITLE_SUFFIX}`,
    description: 'Book your private tour of Del Webb North Ranch community.',
    images: mediaTwitterImages('schedule.hero'),
  },
};

export default function SchedulePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Del Webb North Ranch', href: '/' },
          { label: 'Schedule a Tour', href: '/schedule' },
        ]}
      />
      <main>
        <PageHero
          mediaKey="schedule.hero"
          title="Schedule Your Private Tour | Del Webb North Ranch 55+ Community"
          subtitle="Experience Del Webb North Ranch in person. Walk the community, explore the amenities, and step inside the homes. No pressure, no obligation—just the information you need."
        />

        {/* Office RealScout widget - below hero */}
        <RealScoutListings h2Text="Homes for Sale at Del Webb North Ranch | North Las Vegas 55+ Listings" />

        {/* What to expect */}
        <section className="py-12 md:py-16 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <SectionPhoto mediaKey="clubhouse.patioSunset" heading="What to See on Your Del Webb North Ranch Tour">
                <p>
                  Your private tour of the North Ranch 55+ community can include the clubhouse, amenities, and available homes. Dr. Jan Duffy will tailor the visit to your interests—whether you&apos;re focused on Del Webb North Ranch floor plans, resale listings, or the active adult lifestyle at North Ranch in North Las Vegas.
                </p>
                <p>
                  Del Webb North Ranch is a premier 55+ active adult community in North Las Vegas, with single-story homes, a 10,000 sq ft clubhouse, resort-style pool, pickleball courts, and dozens of clubs and activities. A tour gives you a firsthand look at North Ranch real estate, the Del Webb North Ranch clubhouse, and the neighborhood—so you can decide if this community is the right fit for your next chapter.
                </p>
              </SectionPhoto>
              <SectionPhoto mediaKey="amenities.pickleballDusk" heading="Clubhouse and amenities" headingLevel="h3" reverse>
                <p>
                  Your visit can include the Del Webb North Ranch clubhouse and North Ranch amenities: the resort-style pool, fitness center, event lawn, billiards and social rooms, and pickleball courts. Seeing these spaces in person helps you picture the active adult lifestyle that comes with every home at North Ranch in North Las Vegas.
                </p>
              </SectionPhoto>
              <SectionPhoto mediaKey="homes.haven6584" heading="Available homes and floor plans" headingLevel="h3">
                <p>
                  If you&apos;re interested in buying, we can walk through available resale homes or discuss Del Webb North Ranch floor plans and the Cottage, Classic, and Retreat series. Dr. Jan Duffy specializes in this 55+ community and can answer questions about HOA fees, age requirements, and what&apos;s currently on the market at Del Webb North Ranch.
                </p>
              </SectionPhoto>
              <h3 className="text-xl font-bold text-primary mb-3 font-playfair">No pressure, no obligation</h3>
              <p className="text-text-dark leading-relaxed">
                Scheduling a tour does not commit you to anything. Many visitors are still comparing communities or deciding when to move. Your tour of the North Ranch 55+ community is an opportunity to gather information and see Del Webb North Ranch in person—so you can make an informed decision about your next home.
              </p>
            </div>
          </div>
        </section>

        {/* Why book a tour */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <SectionPhoto mediaKey="amenities.poolDeck" heading="Why Schedule a Private Tour of Del Webb North Ranch?">
                <p>
                  Photos and virtual tours are helpful, but there&apos;s no substitute for walking the community yourself. Del Webb North Ranch in North Las Vegas offers a gated, 55+ environment with single-story homes, resort-style amenities, and an active social scene. A private tour lets you experience the scale of the clubhouse, the quality of the pool and courts, and the feel of the neighborhood—things that are hard to fully capture online.
                </p>
                <p>
                  When you book with Dr. Jan Duffy, you get a dedicated guide who knows the Del Webb North Ranch community inside and out. She can point out which areas have the best views, explain how the North Ranch HOA and amenities work, and show you current homes for sale at Del Webb North Ranch that match your criteria. Whether you&apos;re relocating from out of state or moving from elsewhere in the Las Vegas valley, a tour of North Ranch is the best way to see if this premier 55+ community fits your lifestyle.
                </p>
              </SectionPhoto>
              <h3 className="text-xl font-bold text-primary mb-3 font-playfair">Ideal for out-of-town buyers</h3>
              <p className="text-text-dark mb-4 leading-relaxed">
                If you&apos;re considering a move to North Las Vegas from another state, a scheduled tour makes the most of your trip. We can coordinate your visit to the North Ranch 55+ community with available showings, so you can see the clubhouse, amenities, and one or more Del Webb North Ranch resale homes in a single, efficient visit.
              </p>
              <h3 className="text-xl font-bold text-primary mb-3 font-playfair">Next steps after your tour</h3>
              <p className="text-text-dark leading-relaxed">
                After your tour, you can browse current listings in the office widget above, request a home value if you&apos;re selling elsewhere, or simply take time to think. There&apos;s no pressure to move quickly—Del Webb North Ranch real estate turns over regularly, and Dr. Jan Duffy is here whenever you&apos;re ready to take the next step toward your North Ranch home.
              </p>
            </div>
          </div>
        </section>

        {/* Planning your visit */}
        <section className="py-12 md:py-16 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <SectionPhoto mediaKey="place.signClose" heading="Planning Your Visit to Del Webb North Ranch">
                <p>
                  Del Webb North Ranch is in North Las Vegas, zip code 89086, with easy access from the 215 and I-15. The community entrance is at 2290 Beauty Vista Avenue. When you schedule your tour, Dr. Jan Duffy will confirm the meeting point and any details you need—whether you&apos;re driving in from the valley or flying into Las Vegas for a dedicated North Ranch visit. Many 55+ buyers combine a tour of the North Ranch 55+ community with a few days in the area to explore North Las Vegas dining, healthcare, and shopping.
                </p>
              </SectionPhoto>
              <h3 className="text-xl font-bold text-primary mb-3 font-playfair">What to bring</h3>
              <p className="text-text-dark mb-4 leading-relaxed">
                You don&apos;t need to bring anything special—just yourself and any questions about Del Webb North Ranch floor plans, HOA fees, or resale listings. If you&apos;ve already browsed homes for sale at Del Webb North Ranch online, note the ones you&apos;d like to see and we can prioritize those. Comfortable shoes are recommended for walking the clubhouse and grounds; the North Ranch amenities include outdoor areas you&apos;ll want to see in person.
              </p>
              <h3 className="text-xl font-bold text-primary mb-3 font-playfair">Same-day and advance booking</h3>
              <p className="text-text-dark leading-relaxed">
                We do our best to accommodate same-day or next-day tour requests when availability allows. For out-of-town visitors planning a trip to North Las Vegas, booking a week or two ahead ensures we can align your Del Webb North Ranch tour with current resale showings and give you a full picture of the community. Use the scheduler below to pick a time that works—or call or email if you prefer to arrange your North Ranch tour that way.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Info Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="text-center p-6 bg-bg-light rounded-lg">
                  <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-primary mb-2">Tour Duration</h3>
                  <p className="text-text-dark">60-90 minutes</p>
                </div>
                <div className="text-center p-6 bg-bg-light rounded-lg">
                  <MapPin className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-primary mb-2">Location</h3>
                  <p className="text-text-dark">Del Webb North Ranch</p>
                  <p className="text-sm text-gray-600 mt-1">
                    2290 Beauty Vista Avenue
                  </p>
                  <a
                    href={GOOGLE_MAPS_DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 min-h-[48px] mt-3 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-md font-semibold text-sm transition-colors"
                    aria-label="Get directions to Del Webb North Ranch on Google Maps"
                  >
                    Get directions
                  </a>
                </div>
                <div className="text-center p-6 bg-bg-light rounded-lg">
                  <Phone className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-primary mb-2">Questions?</h3>
                  <a
                    href={SITE_PHONE_TEL}
                    className="text-primary hover:underline transition-colors"
                  >
                    {SITE_PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calendly Inline Widget */}
        <section className="py-12 md:py-16 lg:py-20 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-three p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 text-center font-playfair">
                  Select Your Preferred Date & Time
                </h2>
                <p className="text-text-dark text-center mb-8">
                  Choose a time that works for you. Dr. Jan Duffy will confirm
                  your appointment and provide all the details you need.
                </p>
                <ScheduleTour inline={true} />
              </div>
            </div>
          </div>
        </section>

        {/* Alternative Contact Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-playfair">
                Prefer to Call?
              </h2>
              <p className="text-text-dark mb-6">
                You can also reach out by phone to schedule your tour or ask any
                questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={SITE_PHONE_TEL}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-md font-semibold hover:bg-primary/90 transition-colors min-h-[44px]"
                >
                  <Phone className="w-5 h-5" aria-hidden />
                  Call {SITE_PHONE_DISPLAY}
                </a>
                <ScheduleTour variant="outline" size="lg" />
              </div>
            </div>
          </div>
        </section>
        <LocalVisitSection heading="Plan Your Visit to Del Webb North Ranch" />
      </main>
    </>
  );
}
