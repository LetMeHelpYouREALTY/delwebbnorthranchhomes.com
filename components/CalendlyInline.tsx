'use client';

import { useEffect, useRef } from 'react';
import { CALENDLY_URL, resolveCalendlyUrl, whenCalendlyReady } from '@/lib/calendly';

type CalendlyInlineProps = {
  url?: string;
  height?: string;
  className?: string;
};

export default function CalendlyInline({
  url = CALENDLY_URL,
  height = '700px',
  className = '',
}: CalendlyInlineProps) {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parentElement = widgetRef.current;
    if (!parentElement) return;

    const initWidget = () => {
      if (!widgetRef.current || widgetRef.current.querySelector('iframe')) {
        return;
      }

      window.Calendly?.initInlineWidget({
        url: resolveCalendlyUrl(url, 'inline'),
        parentElement: widgetRef.current,
      });
    };

    return whenCalendlyReady(initWidget);
  }, [url]);

  return (
    <div className={`${className} w-full`} style={{ minHeight: height }}>
      {/* Official Calendly inline embed container */}
      <div
        ref={widgetRef}
        className="calendly-inline-widget w-full"
        data-url={url}
        style={{ minWidth: '320px', height, width: '100%' }}
      />
    </div>
  );
}
