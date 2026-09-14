import ScrollAnimation from "../scroll-animation";

export default function ProblemSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-bg-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation>
            <div className="prose prose-lg max-w-none text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary font-playfair mb-4 md:mb-6">
                Ready for a Simpler Next Chapter?
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-text-dark leading-relaxed px-2">
                You've worked hard to get here. Maybe you're done with
                California's traffic and taxes. Maybe the house feels too big
                now. Maybe you're tired of weekends spent on yard work instead
                of doing what you actually enjoy.
              </p>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-text-dark leading-relaxed mt-4 md:mt-6 font-semibold px-2">
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
