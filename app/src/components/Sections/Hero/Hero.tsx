import React from "react";
import type { ObjectHero } from "@app/types/schema";
import { ResponsiveImage } from "@app/components/ResponsiveImage";

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
    <div className="bg-[#fdf6e3] relative py-[24px] px-[16px] h-[100dvh] max-h-[1200px]">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center">
        <div>
          <p>
            {pretitle && (
              <span className="text-[#b58900] font-bold">{pretitle}</span>
            )}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-[#002b36]">
            {title}
          </h1>
          <p className="text-[#cb4b16]">{subtitle}</p>
        </div>
        {image && image.asset && (
          <div className="aspect-square w-[375px]">
            <ResponsiveImage
              src={image.asset.url}
              alt={image.asset.altText}
              className="w-full"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
