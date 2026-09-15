import type { Metadata } from "next";
import Breadcrumbs from "@/../components/Breadcrumbs";
import Link from "next/link";
import ScrollAnimation from "@/../components/scroll-animation";
import ScheduleTour from "@/../components/ScheduleTour";
import RealScoutListings from "@/../components/RealScoutListings";
import { getDistances } from "@/lib/communityData";
import { SITE_ORIGIN } from "@/lib/site";
import { metaDescriptionBlock, TITLE_SUFFIX } from "@/lib/hyperlocal";
import { mediaOpenGraph, mediaTwitterImages } from "@/lib/media";
import PageHero from "@/../components/PageHero";
import SectionPhoto from "@/../components/SectionPhoto";
import LocalVisitSection from "@/../components/LocalVisitSection";
import MediaImage from "@/../components/MediaImage";
import {
  Users,
  Heart,
  Music,
  BookOpen,
  UtensilsCrossed,
  Gamepad2,
  Camera,
} from "lucide-react";

export const metadata: Metadata = {
  title: `Active Adult Lifestyle | ${TITLE_SUFFIX}`,
  description: metaDescriptionBlock(
    "Discover the vibrant 55+ lifestyle: clubs, events, and active adult living"
  ),
  alternates: {
    canonical: `${SITE_ORIGIN}/lifestyle`,
  },
  openGraph: {
    title: `Active Adult Lifestyle | ${TITLE_SUFFIX}`,
    description:
      "Vibrant community life with clubs, events, and activities in Del Webb North Ranch 55+ community.",
    url: `${SITE_ORIGIN}/lifestyle`,
    siteName: TITLE_SUFFIX,
    locale: "en_US",
    type: "website",
    images: [mediaOpenGraph("lifestyle.hero")],
  },
  twitter: {
    card: "summary_large_image",
    title: `Active Adult Lifestyle | ${TITLE_SUFFIX}`,
    description: "Vibrant community life in North Las Vegas's premier 55+ community.",
    images: mediaTwitterImages("lifestyle.hero"),
  },
};

const clubs = [
  {
    icon: <Heart className="w-8 h-8" />,
    name: "Health & Wellness",
    description: "Walking groups, fitness classes, and wellness workshops",
  },
  {
    icon: <Gamepad2 className="w-8 h-8" />,
    name: "Games & Recreation",
    description: "Pickleball, bocce, card games, and billiards leagues",
  },
  {
    icon: <Music className="w-8 h-8" />,
    name: "Arts & Culture",
    description: "Book clubs, music groups, and art classes",
  },
  {
    icon: <UtensilsCrossed className="w-8 h-8" />,
    name: "Culinary",
    description: "Cooking classes, wine tastings, and dining groups",
  },
  {
    icon: <Camera className="w-8 h-8" />,
    name: "Photography",
    description: "Photo walks and photography workshops",
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    name: "Learning",
    description: "Educational seminars and discussion groups",
  },
];

const events = [
  {
    title: "Community Socials",
    description:
      "Monthly gatherings at the clubhouse with food, music, and dancing",
  },
  {
    title: "Holiday Celebrations",
    description:
      "Special events for holidays throughout the year with themed activities",
  },
  {
    title: "Fitness Challenges",
    description:
      "Community-wide fitness programs and friendly competitions",
  },
  {
    title: "Educational Seminars",
    description:
      "Guest speakers on topics like health, finance, and local history",
  },
];

export default function LifestylePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Del Webb North Ranch", href: "/" },
          { label: "Lifestyle", href: "/lifestyle" },
        ]}
      />
      <main>
        <PageHero
          mediaKey="lifestyle.hero"
          title="Active Adult Lifestyle | Del Webb North Ranch 55+ Community"
          subtitle="Del Webb North Ranch isn't just a place to live—it's a vibrant community where neighbors become friends and every day offers new opportunities to connect, learn, and enjoy life."
        />

        {/* Office RealScout widget - directly below hero */}
        <RealScoutListings h2Text="View Available Homes in Del Webb North Ranch to Experience This Lifestyle" />

        {/* Community Life */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <ScrollAnimation>
                  <div className="relative aspect-square rounded-lg overflow-hidden shadow-three bg-bg-light">
                    <MediaImage
                      mediaKey="lifestyle.events"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </ScrollAnimation>
                <ScrollAnimation delay={100}>
                  <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 md:mb-6 font-playfair">
                      More Than Neighbors—A Community
                    </h2>
                    <div className="prose prose-lg max-w-none space-y-4">
                      <p className="text-base md:text-lg text-text-dark leading-relaxed">
                        At Del Webb North Ranch, you'll find a community of
                        active adults who chose this lifestyle on purpose. They're
                        here to live fully, not just exist.
                      </p>
                      <p className="text-base md:text-lg text-text-dark leading-relaxed">
                        Whether you're joining a morning pickleball game at the <Link href="/amenities" className="text-primary hover:underline underline">community amenities</Link>, attending
                        a club meeting, or simply chatting with neighbors on a
                        walk, you'll discover that making friends comes naturally
                        here.
                      </p>
                      <p className="text-base md:text-lg text-text-dark leading-relaxed font-semibold">
                        Everyone here gets it. They understand what you're looking
                        for because they're looking for the same thing: a place to
                        finally do everything you've been putting off.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>

        {/* Clubs & Groups */}
        <section className="py-12 md:py-16 lg:py-20 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <SectionPhoto mediaKey="lifestyle.pickleballAerial" heading="Join a Club, Start a Group">
                <p>
                  With dozens of active clubs and groups, there&apos;s something for everyone at Del Webb North Ranch. Pickleball, walking groups, cards, cooking, and book clubs all meet around the 10,000 sq ft clubhouse in this North Las Vegas 55+ community. Don&apos;t see what you&apos;re looking for? Start your own.
                </p>
              </SectionPhoto>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {clubs.map((club, index) => (
                  <ScrollAnimation key={club.name} delay={index * 50}>
                    <div className="bg-white p-6 rounded-lg shadow-two hover:shadow-three transition-shadow">
                      <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                        <div className="text-primary">{club.icon}</div>
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-2 font-playfair">
                        {club.name}
                      </h3>
                      <p className="text-text-dark">{club.description}</p>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Events & Activities */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <SectionPhoto mediaKey="clubhouse.eventHall" heading="Community Events" reverse>
                <p>
                  Regular events and activities bring the Del Webb North Ranch community together throughout the year—clubhouse socials, holiday celebrations, fitness challenges, and educational seminars in North Las Vegas.
                </p>
              </SectionPhoto>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events.map((event, index) => (
                  <ScrollAnimation key={event.title} delay={index * 50}>
                    <div className="bg-bg-light p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-primary mb-3 font-playfair">
                        {event.title}
                      </h3>
                      <p className="text-text-dark leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Attractions & Distances */}
        <section className="py-12 md:py-16 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <SectionPhoto mediaKey="place.signClose" heading="Conveniently Located">
                <p>
                  Del Webb North Ranch at 2290 Beauty Vista Avenue, North Las Vegas, NV 89086 sits near Aliante, Centennial Hills, Craig Ranch Regional Park, and VA Southern Nevada Hospital.
                </p>
              </SectionPhoto>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(getDistances()).map(([key, distance]) => (
                  <div key={key} className="bg-white p-6 rounded-lg shadow-two">
                    <h3 className="font-semibold text-primary mb-2">
                      {distance.description}
                    </h3>
                    <p className="text-2xl font-bold text-primary">
                      {distance.miles} miles
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Social Connections */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-playfair">
                  Built-In Social Network
                </h2>
                <p className="text-lg text-text-dark">
                  One of the best parts of living in a 55+ community? Everyone
                  is in the same stage of life. You'll find:
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-bg-light p-6 rounded-lg shadow-two">
                  <h3 className="font-semibold text-primary mb-3">
                    Shared Experiences
                  </h3>
                  <p className="text-text-dark">
                    Common life experiences create instant connections and
                    understanding.
                  </p>
                </div>
                <div className="bg-bg-light p-6 rounded-lg shadow-two">
                  <h3 className="font-semibold text-primary mb-3">
                    Active Lifestyles
                  </h3>
                  <p className="text-text-dark">
                    Neighbors who want to stay active, social, and engaged.
                  </p>
                </div>
                <div className="bg-bg-light p-6 rounded-lg shadow-two">
                  <h3 className="font-semibold text-primary mb-3">
                    No Generational Gap
                  </h3>
                  <p className="text-text-dark">
                    Everyone understands your priorities and lifestyle choices.
                  </p>
                </div>
                <div className="bg-bg-light p-6 rounded-lg shadow-two">
                  <h3 className="font-semibold text-primary mb-3">
                    Easy Friendships
                  </h3>
                  <p className="text-text-dark">
                    Making friends happens naturally when everyone is open to
                    connection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">
                Experience the Lifestyle for Yourself
              </h2>
              <p className="text-lg text-gray-100 mb-6">
                Schedule a tour with <Link href="/about" className="text-white hover:text-gray-200 underline">Dr. Jan Duffy</Link> to see the community, meet residents, and learn
                about the clubs and activities available. Explore <Link href="/floor-plans" className="text-white hover:text-gray-200 underline">homes for sale</Link> or view the <Link href="/amenities" className="text-white hover:text-gray-200 underline">resort-style amenities</Link> that support this lifestyle.
              </p>
              <ScheduleTour variant="accent" size="lg" />
            </div>
          </div>
        </section>
        <LocalVisitSection heading="Experience the Del Webb North Ranch lifestyle in person" />
      </main>
    </>
  );
}
