'use client';

import { Calendar } from 'lucide-react';
import { CALENDLY_URL, openCalendlyPopup } from '@/lib/calendly';

/** Booking strip placed directly after the RealScout listings widget. */
export default function CalendlyAfterListings() {
  return (
    <div className="mx-auto my-8 flex max-w-5xl flex-col items-center justify-between gap-4 rounded-lg border border-stone-200 bg-stone-50 px-6 py-5 sm:flex-row">
      <p className="text-base text-stone-800">
        See a home you like? Pick a time to tour it with Dr. Jan Duffy.
      </p>
      <a
        href={CALENDLY_URL}
        onClick={(event) => {
          if (event.metaKey || event.ctrlKey || event.shiftKey) return;
          event.preventDefault();
          openCalendlyPopup();
        }}
        className="inline-flex min-h-[48px] items-center gap-2 rounded-md bg-stone-900 px-6 py-3 text-sm font-semibold text-white hover:bg-black"
      >
        <Calendar className="h-5 w-5" aria-hidden="true" />
        Schedule a tour
      </a>
    </div>
  );
}
