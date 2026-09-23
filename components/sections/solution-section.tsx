import ScrollAnimation from "../scroll-animation";
import MediaImage from "../MediaImage";
import Link from "next/link";

export default function SolutionSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <ScrollAnimation>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-three bg-bg-light">
                <MediaImage
                  mediaKey="community.fullAerial"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={70}
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6 font-playfair px-2">
                  A Community Built for Living
                </h2>
                <div className="prose prose-lg max-w-none space-y-4 md:space-y-6">
                  <p className="text-base sm:text-lg md:text-xl text-text-dark leading-relaxed px-2">
                    Del Webb North Ranch is a gated 55+ community with 394 single-story homes on 80 acres, built for people who want to live, not just exist.
                  </p>
                  <p className="text-base sm:text-lg md:text-xl text-text-dark leading-relaxed px-2">
                    Every home is single-story. No stairs to worry about now or later. The landscaping is handled. The 10,000 sq ft <Link href="/amenities" className="text-primary hover:underline underline">clubhouse is fully built and ready</Link>. Gated with 24/7 security. The neighbors are your age and actually want to meet you. Explore the <Link href="/lifestyle" className="text-primary hover:underline underline">active adult lifestyle</Link> and <Link href="/floor-plans" className="text-primary hover:underline underline">9 floor plans</Link> available. And Nevada has no state income tax—so more of your money stays yours.
                  </p>
                  <p className="text-base sm:text-lg md:text-xl text-text-dark leading-relaxed font-semibold px-2">
                    This isn't a place to slow down. It's a place to finally do
                    everything you've been putting off.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
