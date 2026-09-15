import ScrollAnimation from "../scroll-animation";
import MediaImage from "../MediaImage";

export default function ProblemSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-bg-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <ScrollAnimation>
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg shadow-three">
              <MediaImage
                mediaKey="home.hero"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={70}
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={100}>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary font-playfair mb-4 md:mb-6">
                Ready for a Simpler Next Chapter?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-text-dark leading-relaxed">
                You&apos;ve worked hard to get here. Maybe you&apos;re done with
                California&apos;s traffic and taxes. Maybe the house feels too big
                now. Maybe you&apos;re tired of weekends spent on yard work instead
                of doing what you actually enjoy.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-text-dark leading-relaxed mt-4 md:mt-6 font-semibold">
                You want your retirement to feel like a reward, not more of the
                same.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
