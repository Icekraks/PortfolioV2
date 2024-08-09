import { ObjectFeaturedCarousel } from "@app/types/schema";

type FeaturedCarouselProps = ObjectFeaturedCarousel & {
  sectionIndex: number;
};

const FeaturedCarousel: React.FC<FeaturedCarouselProps> = ({
  title,
  description,
  featuredSites,
}) => {
  return (
    <div className="relative py-12 px-8 lg:py-16 2xl:py-24 md:px-16">
      <div className="max-w-[1440px] mx-auto">
        {title && (
          <h2 className="text-primary text-2xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
        )}
      </div>
    </div>
  );
};

export default FeaturedCarousel;
