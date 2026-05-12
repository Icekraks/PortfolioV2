"use client";

import Link from "next/link";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import type { SanityCarouselSlide } from "@portfolio/sanity";

export const CarouselObject: React.FC<SanityCarouselSlide> = ({
  title,
  image,
  url,
}) => {
  return (
    <div className="h-full">
      <Link href={url ?? "/"} target="_blank" className="block h-full">
        {image?.asset ? (
          <ResponsiveImage
            src={image.asset.url}
            alt={image.asset.altText}
            aspectRatio={0.75}
          />
        ) : (
          <div className="w-full h-full bg-gray-200" />
        )}
      </Link>
    </div>
  );
};
