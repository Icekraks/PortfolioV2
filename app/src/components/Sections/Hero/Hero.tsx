import React from "react";
import type { ObjectHero } from "@app/types/schema";
import { ResponsiveImage } from "@app/components/ResponsiveImage";
import { Button } from "@app/theme/ui/button";

type HeroProps = ObjectHero & {
  sectionIndex: number;
};

const Hero: React.FC<HeroProps> = ({
  title,
  pretitle,
  subtitle,
  description,
  file,
  image,
}) => {
  return (
    <div className="bg-[#fdf6e3] relative py-12 px-8 lg:py-16 2xl:py-24 md:px-16 h-[100dvh] max-h-[750px] md:max-h-[1000px]">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-x-[10rem] gap-y-[2.5rem] max-w-[1440px] mx-auto">
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
          {description && (
            <p className="text-primary max-w-[450px]">
              {description.replace("{x}", `${new Date().getFullYear() - 2020}`)}
            </p>
          )}
          <div>
            {file && (
              <Button variant="default" asChild>
                <a href={file.asset.url} download target="_blank">
                  Get my CV
                </a>
              </Button>
            )}
          </div>
        </div>
        {image && image.asset && (
          <ResponsiveImage
            className="w-[375px] rounded-lg overflow-hidden"
            src={image.asset.url}
            alt={image.asset.altText}
          />
        )}
      </div>
    </div>
  );
};

export default Hero;
