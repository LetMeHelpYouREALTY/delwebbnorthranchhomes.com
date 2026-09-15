'use client';

import { Quote } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import ScrollAnimation from "../scroll-animation";
import { getAllTestimonials, type Testimonial } from "@/lib/old-site-data";

export default function TestimonialSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState<Testimonial | null>(null);
  const testimonials = getAllTestimonials();

  const [paused, setPaused] = useState(false);

  useEffect(() => {
    // Set initial testimonial (Stephanie O. - first one)
    if (testimonials.length > 0) {
      setCurrentTestimonial(testimonials[0]);
    }
  }, []);

  // Rotate testimonials every 8 seconds
  useEffect(() => {
    if (testimonials.length <= 1 || paused) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => {
        if (!prev) return testimonials[0];
        const currentIndex = testimonials.findIndex((t) => t.name === prev.name);
        const nextIndex = (currentIndex + 1) % testimonials.length;
        return testimonials[nextIndex];
      });
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials, paused]);

  if (!currentTestimonial) return null;

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-bg-light relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,#1e3a5f_1px,transparent_0)] bg-[length:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation>
            <div
              className="bg-white p-6 md:p-8 lg:p-12 rounded-lg shadow-three transition-opacity duration-500"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-playfair">
                What Buyers Say About Del Webb North Ranch
              </h2>
              <Quote className="w-10 h-10 md:w-12 md:h-12 text-primary mb-4 md:mb-6 opacity-50" />
              <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-text-dark leading-relaxed mb-6 md:mb-8 font-playfair italic px-2">
                "{currentTestimonial.text}"
              </blockquote>
              <p className="text-base md:text-lg lg:text-xl text-primary font-semibold px-2">
                — {currentTestimonial.name}
              </p>
              
              {/* Testimonial indicators */}
              {testimonials.length > 1 && (
                <div className="flex justify-center gap-2 mt-6">
                  {testimonials.map((testimonial, index) => (
                    <button
                      key={testimonial.name}
                      onClick={() => setCurrentTestimonial(testimonial)}
                      className={`h-11 w-11 rounded-full transition-all flex items-center justify-center ${
                        currentTestimonial.name === testimonial.name
                          ? 'bg-primary'
                          : 'bg-gray-300 hover:bg-primary/50'
                      }`}
                      aria-label={`View testimonial from ${testimonial.name}`}
                    >
                      <span className={`h-2 w-2 rounded-full ${
                        currentTestimonial.name === testimonial.name ? 'bg-white' : 'bg-gray-500'
                      }`} />
                    </button>
                  ))}
                </div>
              )}
              <p className="mt-6 text-center">
                <Link
                  href="/testimonials"
                  className="inline-flex min-h-[44px] items-center font-semibold text-primary hover:underline"
                >
                  Read all client testimonials
                </Link>
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
