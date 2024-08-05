import React from "react";
import type { ObjectHero } from "@app/types/schema";
import { ResponsiveImage } from "@app/components/ResponsiveImage";
import { Button } from "@app/theme/ui/button";
import { AspectRatio } from "@app/components/AspectRatio";

type HeroProps = ObjectHero & {
  sectionIndex: number;
};

const Hero: React.FC<HeroProps> = ({
  title,
  pretitle,
  subtitle,
  file,
  image,
  sectionIndex,
}) => {
  return (
    <div className="bg-[#fdf6e3] relative py-24 px-16 h-[100dvh] max-h-[1200px]">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="flex flex-col gap-3">
          <p>
            {pretitle && (
              <span className="text-[#b58900] font-bold">{pretitle}</span>
            )}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-[#002b36]">
            {title}
          </h1>
          <h4 className="text-[#cb4b16]">{subtitle}</h4>
          <Button variant="default">Get my CV</Button>
        </div>
        {image && image.asset && (
          <AspectRatio aspectRatio={1} className="w-full md:w-1/2">
            <ResponsiveImage
              src={image.asset.url}
              alt={image.asset.altText}
              className="w-full"
            />
          </AspectRatio>
        )}
      </div>
    </div>
  );
};

export default Hero;
