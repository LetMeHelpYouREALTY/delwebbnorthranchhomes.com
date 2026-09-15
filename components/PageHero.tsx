import type { ReactNode } from "react";
import Image from "next/image";
import MediaImage from "./MediaImage";
import { MEDIA_BLUR_DATA_URL, isCloudflareImagesEnabled, type MediaKey } from "@/lib/media";

type PageHeroProps = {
  title: string;
  subtitle?: ReactNode;
  children?: ReactNode;
  mediaKey?: MediaKey;
  imageSrc?: string;
  imageAlt?: string;
};

export default function PageHero({
  mediaKey,
  imageSrc,
  imageAlt,
  title,
  subtitle,
  children,
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-gray-900 text-white md:min-h-[480px] lg:min-h-[520px]">
      <div className="absolute inset-0 z-0">
        {mediaKey ? (
          <MediaImage
            mediaKey={mediaKey}
            fill
            priority
            fetchPriority="high"
            className="object-cover"
            sizes="100vw"
            quality={72}
          />
        ) : (
          <Image
            src={imageSrc ?? "/images/hero/community-sign.jpg"}
            alt={imageAlt ?? "Del Webb North Ranch 55+ community in North Las Vegas"}
            fill
            priority
            fetchPriority="high"
            className="object-cover"
            sizes="100vw"
            quality={72}
            placeholder="blur"
            blurDataURL={MEDIA_BLUR_DATA_URL}
            unoptimized={isCloudflareImagesEnabled() && Boolean(imageSrc?.startsWith("https://imagedelivery.net/"))}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70" />
      </div>
      <div className="container relative z-10 mx-auto px-4 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 font-playfair text-3xl font-bold leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] md:mb-6 md:text-4xl lg:text-5xl">
            {title}
          </h1>
          {subtitle ? (
            <div className="mb-6 text-lg leading-relaxed text-gray-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] md:text-xl">
              {subtitle}
            </div>
          ) : null}
          {children}
        </div>
      </div>
    </section>
  );
}
