import type { ReactNode } from "react";
import MediaImage from "./MediaImage";
import type { MediaKey } from "@/lib/media";

type SectionPhotoProps = {
  mediaKey: MediaKey;
  heading: string;
  headingLevel?: "h2" | "h3";
  children: ReactNode;
  reverse?: boolean;
};

export default function SectionPhoto({
  mediaKey,
  heading,
  headingLevel = "h2",
  children,
  reverse = false,
}: SectionPhotoProps) {
  const Heading = headingLevel;
  const headingClass =
    headingLevel === "h3"
      ? "mb-4 font-playfair text-xl font-bold text-primary md:text-2xl"
      : "mb-4 font-playfair text-2xl font-bold text-primary md:text-3xl";

  return (
    <div className="mb-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
      <div
        className={`relative aspect-[16/10] overflow-hidden rounded-lg shadow-three ${
          reverse ? "lg:order-2" : ""
        }`}
      >
        <MediaImage
          mediaKey={mediaKey}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          quality={70}
        />
      </div>
      <div className={reverse ? "lg:order-1" : ""}>
        <Heading className={headingClass}>{heading}</Heading>
        <div className="space-y-4 text-base leading-relaxed text-text-dark md:text-lg">
          {children}
        </div>
      </div>
    </div>
  );
}
