import { GOOGLE_MAPS_EMBED_URL, GBP_ADDRESS, GBP_BUSINESS_NAME } from "@/lib/site";

type GoogleMapEmbedProps = {
  className?: string;
  title?: string;
};

export default function GoogleMapEmbed({
  className = "",
  title = `${GBP_BUSINESS_NAME} map — ${GBP_ADDRESS.streetAddress}, ${GBP_ADDRESS.addressLocality}, ${GBP_ADDRESS.addressRegion} ${GBP_ADDRESS.postalCode}`,
}: GoogleMapEmbedProps) {
  return (
    <div className={`overflow-hidden rounded-lg border border-gray-200 shadow-two ${className}`}>
      <iframe
        src={GOOGLE_MAPS_EMBED_URL}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[280px] w-full md:h-[360px]"
        allowFullScreen
      />
    </div>
  );
}
