import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/../components/Breadcrumbs";
import { Button } from "@/../components/ui/button";
import Link from "next/link";
import ScrollAnimation from "@/../components/scroll-animation";
import { oldSiteData } from "@/lib/old-site-data";
import { getAmenities, getCommunityInfo } from "@/lib/communityData";
import RealScoutListings from "@/../components/RealScoutListings";
import PageHero from "@/../components/PageHero";
import { SITE_ORIGIN } from "@/lib/site";
import { altPrefix, metaDescriptionBlock, TITLE_SUFFIX } from "@/lib/hyperlocal";
import { mediaOpenGraph, mediaTwitterImages } from "@/lib/media";
import {
  Activity,
  Users,
  Sparkles,
  Waves,
  Dumbbell,
  UtensilsCrossed,
  TreePine,
  Gamepad2,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: `Resort-Style Amenities | ${TITLE_SUFFIX}`,
  description: metaDescriptionBlock(
    "Discover resort-style amenities: pool, fitness center, pickleball courts, clubhouse, walking trails"
  ),
  alternates: {
    canonical: `${SITE_ORIGIN}/amenities`,
  },
  openGraph: {
    title: `Resort-Style Amenities | ${TITLE_SUFFIX}`,
    description:
      "Resort-style amenities including pool, fitness center, pickleball courts, and clubhouse in Del Webb North Ranch 55+ community.",
    url: `${SITE_ORIGIN}/amenities`,
    siteName: TITLE_SUFFIX,
    locale: "en_US",
    type: "website",
    images: [mediaOpenGraph("amenities.hero")],
  },
  twitter: {
    card: "summary_large_image",
    title: `Resort-Style Amenities | ${TITLE_SUFFIX}`,
    description: "Resort-style amenities in North Las Vegas's premier 55+ community.",
    images: mediaTwitterImages("amenities.hero"),
  },
};

const amenities = [
  {
    category: "Stay Active",
    icon: <Activity className="w-8 h-8" />,
    items: [
      {
        name: "Resort-Style Pool",
        description: "Large pool with plenty of space for swimming and lounging",
        image: "/images/amenities/resort-pool.jpeg",
      },
      {
        name: "Heated Lap Pool",
        description: "Perfect for morning swims and year-round exercise",
        image: "/images/amenities/lap-pool.jpeg",
      },
      {
        name: "Fitness Center",
        description: "Modern equipment for your daily workout routine",
        image: "/images/amenities/fitness-center.jpg",
      },
      {
        name: "Pickleball Courts",
        description: "Lighted courts for evening games and tournaments",
        image: "/images/amenities/pickleball-courts.jpeg",
      },
      {
        name: "Bocce Courts",
        description: "Classic lawn game courts for friendly competition",
        image: "/images/amenities/event-lawn.jpeg",
      },
    ],
  },
  {
    category: "Stay Connected",
    icon: <Users className="w-8 h-8" />,
    items: [
      {
        name: "Clubhouse",
        description: "Spacious gathering place for clubs, classes, and events",
        image: "/images/amenities/clubhouse.jpeg",
      },
      {
        name: "Clubhouse Main Entrance",
        description: "Welcoming entrance to the community clubhouse",
        image: "/images/amenities/clubhouse-main-entrance.jpeg",
      },
      {
        name: "Event Lawn",
        description: "Large lawn for community celebrations and gatherings",
        image: "/images/amenities/event-lawn.jpeg",
      },
      {
        name: "Billiards Room",
        description: "Relaxed space for games and socializing",
        image: "/images/amenities/billiards-room.jpeg",
      },
      {
        name: "Social Room",
        description: "Community gathering space for events and activities",
        image: "/images/amenities/social-room.jpeg",
      },
    ],
  },
  {
    category: "Stay Relaxed",
    icon: <Sparkles className="w-8 h-8" />,
    items: [
      {
        name: "Reception Desk",
        description: "Welcome center and information desk",
        image: "/images/amenities/reception-desk.jpeg",
      },
      {
        name: "Walking Trails",
        description: "Scenic trails with beautiful mountain views",
        image: "/images/amenities/event-lawn-club.jpeg",
      },
      {
        name: "Dog Park",
        description: "Dedicated space for your furry friends to play",
        image: "/images/amenities/dog-park.jpeg",
      },
    ],
  },
];

const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

function AmenityCard({
  amenity,
  index,
}: {
  amenity: (typeof amenities)[0]["items"][0];
  index: number;
}) {
  return (
    <ScrollAnimation delay={index * 50}>
      <div className="bg-white rounded-lg shadow-two hover:shadow-three transition-shadow overflow-hidden">
        <div className="relative h-48 bg-bg-light">
          <Image
            src={amenity.image}
            alt={altPrefix(amenity.name)}
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL={blurDataURL}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-primary mb-2 font-playfair">
            {amenity.name}
          </h3>
          <p className="text-text-dark leading-relaxed">
            {amenity.description}
          </p>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default function AmenitiesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Del Webb North Ranch", href: "/" },
          { label: "Amenities", href: "/amenities" },
        ]}
      />
      <main>
        <PageHero
          mediaKey="amenities.hero"
          title="Resort-Style Amenities | Del Webb North Ranch 55+ Community"
          subtitle={
            <>
                Del Webb North Ranch offers resort-style amenities designed to
                help you live your best life. Every amenity is fully built and
                ready to enjoy. Explore <Link href="/floor-plans" className="text-white hover:text-gray-200 underline">homes with these amenities</Link> or view <Link href="/homes-for-sale" className="text-white hover:text-gray-200 underline">available homes for sale</Link>.
            </>
          }
        />

        {/* Office RealScout widget - directly below hero */}
        <RealScoutListings h2Text="View Available Homes in Del Webb North Ranch with These Amazing Amenities" />

        {/* Amenities by Category */}
        {amenities.map((category, categoryIndex) => (
          <section
            key={category.category}
            className={`py-12 md:py-16 lg:py-20 ${
              categoryIndex % 2 === 0 ? "bg-white" : "bg-bg-light"
            }`}
          >
            <div className="container mx-auto px-4">
              <div className="mb-8 md:mb-12">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-success/10 rounded-full">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary font-playfair">
                    {category.category}
                  </h2>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {category.items.map((amenity, index) => (
                  <AmenityCard
                    key={amenity.name}
                    amenity={amenity}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Home Features */}
        <section className="py-12 md:py-16 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center font-playfair">
                Home Features
              </h2>
              <div className="bg-white rounded-lg shadow-two p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {oldSiteData.amenities.homeFeatures.map((feature, index) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-text-dark">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Complete Community Features List */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center font-playfair">
                Complete Community Features
              </h2>
              <div className="bg-bg-light rounded-lg shadow-two p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {getAmenities().map((amenity, index) => (
                    <div key={amenity} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-text-dark">{amenity}</span>
                    </div>
                  ))}
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
                Experience These Amenities for Yourself
              </h2>
              <p className="text-lg text-gray-100 mb-6">
                Schedule a tour with <Link href="/about" className="text-white hover:text-gray-200 underline">Dr. Jan Duffy</Link> to see the amenities and
                community in person. Learn more about the <Link href="/lifestyle" className="text-white hover:text-gray-200 underline">active adult lifestyle</Link> at Del Webb North Ranch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  variant="accent"
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  <Link href="/contact">Schedule Your Tour</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  <Link href="/homes-for-sale">View Homes for Sale</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
