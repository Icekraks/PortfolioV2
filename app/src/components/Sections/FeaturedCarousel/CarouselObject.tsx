import React from "react";
import { CarouselObject as CarouselObjecType } from "@app/types/schema";
import { ResponsiveImage } from "@app/components/ResponsiveImage";
import { Link } from "@remix-run/react";

export const CarouselObject: React.FC<CarouselObjecType> = ({
  title,
  image,
  toggleEmbed,
  url,
}) => {
  return toggleEmbed ? (
    <div>
      <iframe
        src={url}
        title={title}
        className="w-full h-full"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  ) : (
    <div>
      <Link to={url || "/"} target="_blank">
        {image ? (
          <ResponsiveImage
            src={image.asset.url}
            alt={image.asset.altText}
            aspectRatio={0.75}
          />
        ) : (
          <div> null image</div>
        )}
      </Link>
    </div>
  );
};
