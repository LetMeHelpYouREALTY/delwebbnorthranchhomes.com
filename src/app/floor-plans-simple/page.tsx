import type { Metadata } from 'next';
import { oldSiteData } from '@/lib/fetchOldSiteData';
import Link from 'next/link';
import { Button } from '@/../components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import ScheduleTour from '@/../components/ScheduleTour';
import { SITE_ORIGIN } from '@/lib/site';
import { TITLE_SUFFIX } from '@/lib/hyperlocal';

export const metadata: Metadata = {
  title: `Floor Plans | ${TITLE_SUFFIX}`,
  description:
    'Explore 9 single-story floor plans at Del Webb North Ranch. Cottage, Classic, and Retreat series from 1,285 to 2,015 sq ft.',
  alternates: {
    canonical: `${SITE_ORIGIN}/floor-plans`,
  },
  openGraph: {
    title: `Floor Plans | ${TITLE_SUFFIX}`,
    description:
      'Explore 9 single-story floor plans from 1,285 to 2,015 sq ft in Del Webb North Ranch, a premier 55+ community.',
    url: `${SITE_ORIGIN}/floor-plans`,
    siteName: TITLE_SUFFIX,
    locale: 'en_US',
    type: 'website',
  },
};

type FloorPlanDetail = {
  name: string;
  sqft: string;
  beds: number | string;
  baths: number | string;
  garage: string;
  features: string[];
};

function FloorPlanCard({
  plan,
  series,
}: {
  plan: FloorPlanDetail;
  series: 'cottage' | 'classic' | 'retreat';
}) {
  const seriesColors = {
    cottage: 'bg-success/10 border-success/30',
    classic: 'bg-primary/10 border-primary/30',
    retreat: 'bg-primary/10 border-primary/30',
  };

  return (
    <div
      className={`rounded-lg border-2 p-6 ${seriesColors[series]} transition-transform hover:scale-[1.02] shadow-two hover:shadow-three`}
    >
      <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 font-playfair">
        {plan.name}
      </h3>
      <div className="space-y-2 mb-4">
        <p className="text-2xl md:text-3xl font-bold text-primary">{plan.sqft} sq ft</p>
        <p className="text-text-dark">
          {plan.beds} Bedroom{plan.beds !== 1 ? 's' : ''} • {plan.baths} Bathroom
          {plan.baths !== 1 ? 's' : ''}
        </p>
        <p className="text-text-dark">{plan.garage} Garage</p>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-sm font-semibold text-primary mb-2">Features:</p>
        <ul className="text-sm text-text-dark space-y-1">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SeriesSection({
  title,
  description,
  plans,
  seriesKey,
  priceHint,
}: {
  title: string;
  description: string;
  plans: FloorPlanDetail[];
  seriesKey: 'cottage' | 'classic' | 'retreat';
  priceHint?: string;
}) {
  return (
    <section className="mb-12 md:mb-16">
      <div className="mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2 font-playfair">
          {title}
        </h2>
        <p className="text-text-dark text-lg">{description}</p>
        {priceHint && (
          <p className="text-sm md:text-base text-primary mt-2 font-semibold">
            {priceHint}
          </p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <FloorPlanCard key={plan.name} plan={plan} series={seriesKey} />
        ))}
      </div>
    </section>
  );
}

export default function FloorPlansSimplePage() {
  const { floorPlans } = oldSiteData;

  return (
    <>
      <main>
        {/* Header */}
        <section className="bg-primary text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                Floor Plans at Del Webb North Ranch
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                Nine single-story floor plans across three collections. Every
                home features 2-3 bedrooms, 2-2.5 baths, and an attached 2-car
                garage.
              </p>
            </div>
          </div>
        </section>

        {/* Floor Plans Content */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Cottage Series */}
              <SeriesSection
                title="Cottage Series"
                description="Efficient, comfortable, easy to maintain. Perfect if you want cozy without cramped."
                plans={floorPlans.cottage}
                seriesKey="cottage"
                priceHint="Starting in the low $400s"
              />

              {/* Classic Series */}
              <SeriesSection
                title="Classic Series"
                description="Room to spread out. Optional dens for hobbies or home offices."
                plans={floorPlans.classic}
                seriesKey="classic"
                priceHint="Mid $400s - Low $500s"
              />

              {/* Retreat Series */}
              <SeriesSection
                title="Retreat Series"
                description="Spacious living for those who love to entertain or want extra room for visiting family."
                plans={floorPlans.retreat}
                seriesKey="retreat"
                priceHint="Mid $500s - $600s"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 md:p-12 rounded-lg shadow-three text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-playfair">
                  Not sure which floor plan is right for you?
                </h3>
                <p className="text-text-dark mb-6 text-lg">
                  Schedule a tour and walk through the models in person.
                </p>
                <ScheduleTour variant="accent" size="lg" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
