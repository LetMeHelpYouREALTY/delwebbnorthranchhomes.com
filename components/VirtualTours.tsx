'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { oldSiteData } from '@/lib/fetchOldSiteData';
import { Play, Square } from 'lucide-react';

function tourSlug(model: string): string {
  return model.toLowerCase().replace(/\s+/g, '-');
}

export default function VirtualTours() {
  const [selectedModel, setSelectedModel] = useState(
    oldSiteData.virtualTours.find((t) => t.embedUrl) || oldSiteData.virtualTours[0]
  );
  const [iframeAllowed, setIframeAllowed] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const tours = oldSiteData.virtualTours.filter((t) => t.embedUrl);

  // Defer Matterport iframe until section is in viewport (saves ~1.8MB on initial load)
  useEffect(() => {
    if (!sectionRef.current || tours.length === 0) return;
    const el = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setIframeAllowed(true);
      },
      { rootMargin: '100px', threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [tours.length]);

  if (tours.length === 0) {
    return (
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-playfair">
              Virtual Tours Coming Soon
            </h2>
            <p className="text-text-dark">
              Virtual tours for our model homes will be available soon. In the
              meantime, schedule a private tour to see the homes in person.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 font-playfair">
              Take a Virtual Tour
            </h2>
            <p className="text-lg text-text-dark">
              Explore our model homes from the comfort of your home
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Video player - iframe loads only when section in viewport */}
            <div className="lg:col-span-2">
              <div className="bg-bg-light rounded-lg overflow-hidden shadow-three">
                <div className="aspect-video">
                  {selectedModel.embedUrl && iframeAllowed ? (
                    <iframe
                      src={selectedModel.embedUrl}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={`${selectedModel.model} Virtual Tour`}
                    />
                  ) : selectedModel.embedUrl ? (
                    <div className="w-full h-full flex flex-col items-center justify-center text-text-dark bg-gray-100">
                      <Play className="w-16 h-16 text-primary mb-4 opacity-50" />
                      <p className="text-lg font-semibold">Load virtual tour</p>
                      <p className="text-sm text-gray-600 mt-2">Scroll to load the 3D tour</p>
                    </div>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-text-dark bg-gray-100">
                      <Play className="w-16 h-16 text-primary mb-4 opacity-50" />
                      <p className="text-lg font-semibold">Virtual tour coming soon</p>
                      <p className="text-sm text-gray-600 mt-2">
                        Contact us to schedule an in-person tour
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-4 md:mt-6">
                <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-3">
                  <span className="text-sm font-semibold text-primary">
                    {selectedModel.series} Series
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-2 font-playfair">
                  {selectedModel.model} Floor Plan
                </h3>
                <div className="flex flex-wrap gap-4 text-text-dark">
                  <div className="flex items-center gap-2">
                    <Square className="w-4 h-4 text-primary" />
                    <span className="text-sm md:text-base">{selectedModel.sqft} sq ft</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm md:text-base">
                      {selectedModel.beds} bed{selectedModel.beds !== 1 ? 's' : ''}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm md:text-base">
                      {selectedModel.baths} bath{selectedModel.baths !== 1 ? 's' : ''}
                    </span>
                  </div>
                </div>
                <p className="mt-4">
                  <Link
                    href={`/virtual-tours/${tourSlug(selectedModel.model)}`}
                    className="text-primary hover:underline font-medium"
                  >
                    Watch on dedicated video page →
                  </Link>
                </p>
              </div>
            </div>

            {/* Model selector */}
            <div className="space-y-3">
              <h4 className="font-semibold text-primary mb-4 text-lg font-playfair">
                Select a Model
              </h4>
              <div className="space-y-2 max-h-[600px] overflow-y-auto">
                {tours.map((tour) => (
                  <button
                    key={tour.model}
                    onClick={() => setSelectedModel(tour)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      selectedModel.model === tour.model
                        ? 'border-primary bg-primary/5 shadow-two'
                        : 'border-gray-200 hover:border-primary/50 bg-white'
                    }`}
                  >
                    <p className="font-semibold text-primary mb-1">{tour.model}</p>
                    <p className="text-sm text-text-dark">
                      {tour.series} Series
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      {tour.sqft} sq ft • {tour.beds} bed • {tour.baths} bath
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
