import Link from 'next/link';
import Image from 'next/image';
import { Home, Layout, Sparkles, Users, HelpCircle, Phone, TrendingUp, MapPin } from 'lucide-react';
import { Button } from '../ui/button';

const exploreCards = [
  {
    title: 'For Buyers',
    description: '55+ home buying in North Las Vegas—listings, floor plans, tours',
    href: '/buyers',
    icon: Home,
    image: '/images/homes/haven-exterior.jpg',
    primary: true,
  },
  {
    title: 'For Sellers',
    description: 'Sell your North Las Vegas or Del Webb North Ranch home—home value, consultation',
    href: '/sellers',
    icon: TrendingUp,
    image: '/images/homes/haven-exterior-alt.jpg',
  },
  {
    title: 'Community & Area',
    description: 'North Las Vegas area, nearby neighborhoods, and 55+ living',
    href: '/community',
    icon: MapPin,
    image: '/images/hero/clubhouse-aerial.jpg',
  },
  {
    title: 'Homes for Sale',
    description: 'Browse available single-story homes from $400K-$600K',
    href: '/homes-for-sale',
    icon: Home,
    image: '/images/homes/haven-exterior.jpg',
  },
  {
    title: 'Floor Plans',
    description: 'Explore 1,285-2,015 sq ft designs across 3 collections',
    href: '/floor-plans',
    icon: Layout,
    image: '/images/homes/haven-exterior.jpg',
  },
  {
    title: 'Amenities',
    description: '10,000 sq ft clubhouse, pools, pickleball & more',
    href: '/amenities',
    icon: Sparkles,
    image: '/images/amenities/resort-pool.jpeg',
  },
  {
    title: 'Lifestyle',
    description: 'Discover active adult living in North Las Vegas',
    href: '/lifestyle',
    icon: Users,
    image: '/images/lifestyle/pickleball.jpg',
  },
  {
    title: 'About Dr. Jan Duffy',
    description: 'Meet your trusted REALTOR® and community expert',
    href: '/about',
    icon: Users,
    image: '/images/clubhouse/great-room.jpg',
  },
  {
    title: 'FAQ',
    description: 'Get answers to common questions about the community',
    href: '/faq',
    icon: HelpCircle,
    image: '/images/hero/monument-sign-day.jpg',
  },
];

export default function ExploreCommunitySection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 font-playfair">
              Explore Our Community
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Discover everything Del Webb North Ranch has to offer—from luxury homes to resort-style amenities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exploreCards.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group relative block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={card.image}
                      alt={`${card.title} at Del Webb North Ranch, North Las Vegas 55+ community`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={70}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    {card.primary && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Popular
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{card.description}</p>
                    <span className="text-primary font-semibold text-sm group-hover:underline">
                      Learn More →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 min-h-[48px] px-10 py-5">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 min-h-[48px]">
                <Phone className="w-5 h-5 shrink-0" />
                Schedule a Tour
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
