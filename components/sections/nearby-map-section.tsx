import Link from "next/link";
import { Button } from "../ui/button";
import AmenityMap from "../AmenityMap";
import ScrollAnimation from "../scroll-animation";
import { HYPERLOCAL } from "@/lib/hyperlocal";

type NearbyMapSectionProps = {
  id?: string;
  heading?: string;
  description?: string;
  compact?: boolean;
};

export default function NearbyMapSection({
  id = "whats-nearby",
  heading = `Life Near ${HYPERLOCAL.communityName}`,
  description = `Explore healthcare, golf, parks, grocery, and everyday services around ${HYPERLOCAL.primaryArea}—then dive into the full interactive map and local guide.`,
  compact = false,
}: NearbyMapSectionProps) {
  return (
    <section
      id={id}
      className="py-16 md:py-20 lg:py-24 bg-bg-light"
      aria-labelledby={`${id}-heading`}
    >
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <div className="max-w-3xl mx-auto text-center mb-8 md:mb-10">
            <h2
              id={`${id}-heading`}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 font-playfair"
            >
              {heading}
            </h2>
            <p className="text-base md:text-lg text-text-dark">{description}</p>
          </div>
        </ScrollAnimation>

        <AmenityMap
          mapHeightClass={
            compact ? "min-h-[360px] h-[360px] md:h-[400px]" : undefined
          }
          showStaticList={!compact}
        />

        <div className="mt-8 text-center">
          <Button asChild variant="default" size="lg" className="min-h-[48px]">
            <Link href="/nearby-amenities">
              View full nearby amenities guide
            </Link>
          </Button>
          <p className="mt-3 text-sm text-text-dark">
            On-site resort amenities (pool, pickleball, clubhouse) are on our{" "}
            <Link href="/amenities" className="text-primary underline">
              community amenities
            </Link>{" "}
            page.
          </p>
        </div>
      </div>
    </section>
  );
}
