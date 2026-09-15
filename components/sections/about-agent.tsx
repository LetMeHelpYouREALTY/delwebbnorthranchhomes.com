import { Button } from "../ui/button";
import Link from "next/link";
import MediaImage from "../MediaImage";
import ScrollAnimation from "../scroll-animation";

export default function AboutAgentSection() {
  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <ScrollAnimation>
              <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
                <MediaImage
                  mediaKey="agent.office"
                  fill
                  className="object-cover rounded-lg shadow-three"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={70}
                />
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={100}>
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6 font-playfair">
                  Your Del Webb North Ranch Expert
                </h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p className="text-base md:text-lg text-text-dark leading-relaxed">
                    Dr. Jan Duffy isn't a builder's sales rep. She's an
                    independent REALTOR® with Berkshire Hathaway HomeServices
                    who specializes exclusively in Del Webb North Ranch.
                  </p>
                  <p className="text-base md:text-lg text-text-dark leading-relaxed">
                    She knows which floor plans get the best morning light. Which
                    homesites have the best views. Which resale homes are worth
                    considering and which to skip.
                  </p>
                  <p className="text-base md:text-lg text-text-dark leading-relaxed font-semibold">
                    When you work with her, you get honest guidance—not a sales
                    pitch.
                  </p>
                </div>
                <div className="mt-6 md:mt-8">
                  <Button asChild variant="default" size="lg" className="w-full sm:w-auto">
                    <Link href="/about">Meet Dr. Jan Duffy</Link>
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
