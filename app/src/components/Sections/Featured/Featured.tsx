import React from "react";
import { ObjectFeatured } from "@app/types/schema";
import { Link } from "@remix-run/react";

type FeaturedProps = ObjectFeatured & {
  sectionIndex: number;
};

const Featured: React.FC<FeaturedProps> = ({
  title,
  description,
  featuredSites,
}) => {
  return (
    <div className="bg-[#fdf6e3] relative py-12 px-8 lg:py-16 2xl:py-24 md:px-16">
      <div>
        <h2 className="text-primary text-2xl md:text-4xl font-bold">{title}</h2>
        <div>
          {featuredSites &&
            featuredSites.map((site, index) => (
              <Link to={site.url} key={index}>
                <div>
                  <div>
                    <img src={site.image.url} alt={site.image.alt} />
                  </div>
                  <div>
                    <h4>{site.title}</h4>
                    <p>{site.description}</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
