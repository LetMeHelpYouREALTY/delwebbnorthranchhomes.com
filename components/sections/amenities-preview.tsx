import { Activity, Users, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import ScrollAnimation from "../scroll-animation";
import MediaImage from "../MediaImage";
import type { MediaKey } from "@/lib/media";

interface AmenityColumnProps {
  mediaKey: MediaKey;
  icon: React.ReactNode;
  title: string;
  items: string[];
  delay?: number;
}

function AmenityColumn({
  mediaKey,
  icon,
  title,
  items,
  delay = 0,
}: AmenityColumnProps) {
  return (
    <ScrollAnimation delay={delay}>
      <div className="bg-white rounded-lg shadow-two hover:shadow-three transition-shadow h-full flex flex-col overflow-hidden">
        <div className="relative aspect-[16/10]">
          <MediaImage
            mediaKey={mediaKey}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            quality={70}
          />
        </div>
        <div className="flex flex-col flex-grow p-6 md:p-8">
          <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-success/10 rounded-full mb-4 md:mb-6">
            {icon}
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6 font-playfair">
            {title}
          </h3>
          <ul className="space-y-3 md:space-y-4 flex-grow">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-success mt-1 flex-shrink-0">✓</span>
                <span className="text-sm md:text-base lg:text-lg text-text-dark">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default function AmenitiesPreviewSection() {
  const amenities: Array<{
    mediaKey: MediaKey;
    icon: React.ReactNode;
    title: string;
    items: string[];
  }> = [
    {
      mediaKey: "amenities.pickleballDusk",
      icon: <Activity className="w-8 h-8 text-success" />,
      title: "Stay Active",
      items: [
        "Fitness center with modern equipment",
        "Heated lap pool for morning swims",
        "Lighted pickleball and bocce courts",
      ],
    },
    {
      mediaKey: "clubhouse.patioSunset",
      icon: <Users className="w-8 h-8 text-success" />,
      title: "Stay Connected",
      items: [
        "Clubhouse for clubs and classes",
        "Outdoor firepit for evening gatherings",
        "Event lawn for community celebrations",
      ],
    },
    {
      mediaKey: "amenities.poolDeck",
      icon: <Sparkles className="w-8 h-8 text-success" />,
      title: "Stay Relaxed",
      items: [
        "Resort-style pool and spa",
        "Scenic walking trails with mountain views",
        "Billiards room for laid-back afternoons",
      ],
    },
  ];

  return (
    <section id="amenities" className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 md:mb-4 text-center font-playfair px-4">
          Your Private Resort, Minutes From Home
        </h2>
        <p className="text-center text-base md:text-lg text-text-dark mb-8 md:mb-12 max-w-2xl mx-auto px-4">
          Every amenity is designed to help you live your best life, right here
          in your community.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8 md:mb-12">
          {amenities.map((amenity, index) => (
            <AmenityColumn
              key={amenity.title}
              mediaKey={amenity.mediaKey}
              icon={amenity.icon}
              title={amenity.title}
              items={amenity.items}
              delay={index * 100}
            />
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto min-h-[48px] min-w-[48px] px-8 py-4">
            <Link href="/amenities" className="inline-flex items-center justify-center min-h-[48px]">Explore All Amenities</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
