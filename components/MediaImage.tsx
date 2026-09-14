import Image, { type ImageProps } from "next/image";
import {
  MEDIA_BLUR_DATA_URL,
  isCloudflareImagesEnabled,
  mediaAlt,
  mediaSrc,
  type MediaKey,
} from "@/lib/media";

type MediaImageProps = Omit<ImageProps, "src" | "alt"> & {
  mediaKey: MediaKey;
  alt?: string;
};

export default function MediaImage({
  mediaKey,
  alt,
  placeholder,
  blurDataURL,
  ...rest
}: MediaImageProps) {
  return (
    <Image
      src={mediaSrc(mediaKey)}
      alt={alt ?? mediaAlt(mediaKey)}
      unoptimized={isCloudflareImagesEnabled()}
      placeholder={placeholder ?? "blur"}
      blurDataURL={blurDataURL ?? MEDIA_BLUR_DATA_URL}
      {...rest}
    />
  );
}
