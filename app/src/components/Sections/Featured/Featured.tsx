import React from "react";
import { ObjectFeatured } from "@app/types/schema";
import { ImageResponsive } from "@app/components/ImageResponsive";
import { cn } from "@app/utils/utils";

type FeaturedProps = ObjectFeatured & {
  sectionIndex: number;
};

const Featured: React.FC<FeaturedProps> = ({
  title,
  description,
  featuredSites,
  sectionIndex,
}) => {
  return (
    <div
      className={cn(
        "relative pb-12 px-8 lg:pb-16 2xl:pb-24 md:px-16",
        sectionIndex !== 0 ? "pt-12 lg:pt-16 2xl:pt-24" : ""
      )}
    >
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-primary text-2xl lg:text-4xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-primary text-lg lg:text-xl mb-8">{description}</p>
        <div className="flex flex-col gap-y-24 lg:gap-y-16 md:px-10 lg:px-16">
          {featuredSites &&
            featuredSites.map((site, index) => {
              return (
                <a href={site.url} target="_blank" key={index}>
                  <div className="flex flex-col lg:flex-row gap-x-8">
                    <div className="w-full lg:w-[34%] mb-4 lg:mb-0">
                      <ImageResponsive image={site.image} aspectRatio={0.75} />
                    </div>
                    <div className="w-full lg:w-[66%]">
                      <h4 className="text-primary text-xl lg:text-2xl font-bold mb-4">
                        {site.title}
                      </h4>
                      <p className="text-primary">{site.description}</p>
                    </div>
                  </div>
                </a>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Featured;
