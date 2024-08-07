import React from "react";
import { ObjectFeatured } from "@app/types/schema";
import { Link } from "@remix-run/react";
import { imageBuilder } from "@app/utils/utils";
import { ImageResponsive } from "@app/components/ImageResponsive";

type FeaturedProps = ObjectFeatured & {
  sectionIndex: number;
};

const Featured: React.FC<FeaturedProps> = ({
  title,
  description,
  featuredSites,
}) => {
  return (
    <div className="relative py-12 px-8 lg:py-16 2xl:py-24 md:px-16">
      <div>
        <h2 className="text-primary text-2xl md:text-4xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-primary text-lg md:text-xl mb-8">{description}</p>
        <div className="flex flex-col gap-y-24 lg:gap-y-16 md:px-10 lg:px-16">
          {featuredSites &&
            featuredSites.map((site, index) => {
              return (
                <a href={site.url} target="_blank" key={index}>
                  <div className="flex flex-col md:flex-row gap-x-8">
                    <div className="w-full md:w-[34%] mb-4 lg:mb-0">
                      <ImageResponsive image={site.image} aspectRatio={0.75} />
                    </div>
                    <div className="w-full md:w-[66%]">
                      <h4 className="text-primary text-xl md:text-2xl font-bold mb-4">
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
