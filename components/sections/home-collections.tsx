import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import ScrollAnimation from "../scroll-animation";

const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

interface CollectionCardProps {
  title: string;
  specs: string;
  description: string;
  imagePath: string;
  delay?: number;
}

function CollectionCard({
  title,
  specs,
  description,
  imagePath,
  delay = 0,
}: CollectionCardProps) {
  return (
    <ScrollAnimation delay={delay}>
      <Link href="/floor-plans" className="block h-full rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-two hover:shadow-three transition-shadow h-full flex flex-col">
        <div className="relative h-48 md:h-56 rounded-lg mb-4 md:mb-6 overflow-hidden bg-bg-light">
          <Image
            src={imagePath}
            alt={`${title} single-story home at Del Webb North Ranch in North Las Vegas`}
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL={blurDataURL}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={70}
          />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-primary mb-2 md:mb-3 font-playfair">
          {title}
        </h3>
        <p className="text-base md:text-lg font-semibold text-primary mb-3 md:mb-4">
          {specs}
        </p>
        <p className="text-sm md:text-base text-text-dark leading-relaxed flex-grow">
          {description}
        </p>
        <span className="mt-4 text-sm font-semibold text-primary">View floor plans →</span>
      </div>
      </Link>
    </ScrollAnimation>
  );
}

export default function HomeCollectionsSection() {
  const collections = [
    {
      title: "Cottage Series",
      specs: "1,285-1,509 sq ft",
      description:
        "Efficient, comfortable, easy to maintain. Perfect if you want cozy without cramped.",
      imagePath: "/images/homes/haven-6584.jpg",
    },
    {
      title: "Classic Series",
      specs: "1,451-1,770 sq ft",
      description:
        "Room to spread out. Optional dens for hobbies or home offices.",
      imagePath: "/images/homes/classic-series.jpg",
    },
    {
      title: "Retreat Series",
      specs: "1,716-2,015 sq ft",
      description:
        "Spacious living for those who love to entertain or want extra room for visiting family.",
      imagePath: "/images/homes/stellar-retreat.jpg",
    },
  ];

  return (
    <section id="floor-plans" className="py-16 md:py-20 lg:py-24 bg-bg-light">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 md:mb-4 text-center font-playfair px-4">
          Three Collections. Nine Floor Plans. One Perfect Fit.
        </h2>
        <p className="text-center text-base md:text-lg text-text-dark mb-8 md:mb-12 max-w-2xl mx-auto px-4">
          Every home is single-story with 2-3 bedrooms, 2-2.5 baths, and a
          2-car garage. Choose the size that fits your lifestyle.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8 md:mb-12">
          {collections.map((collection, index) => (
            <CollectionCard
              key={index}
              title={collection.title}
              specs={collection.specs}
              description={collection.description}
              imagePath={collection.imagePath}
              delay={index * 100}
            />
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="default" size="lg" className="w-full sm:w-auto min-h-[48px] min-w-[48px] px-8 py-4">
            <Link href="/floor-plans" className="inline-flex items-center justify-center min-h-[48px]">Explore Floor Plans</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
