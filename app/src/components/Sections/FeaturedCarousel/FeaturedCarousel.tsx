import { useRef } from "react";
import {
  SwiperCarousel,
  SwiperRef,
  SwiperSlide,
} from "@app/components/Carousel/SwiperCarousel";
import type { ObjectFeaturedCarousel } from "@app/types/schema";
import { CarouselObject } from "@app/components/Sections/FeaturedCarousel/CarouselObject";

type FeaturedCarouselProps = ObjectFeaturedCarousel & {
  sectionIndex: number;
};

const FeaturedCarousel: React.FC<FeaturedCarouselProps> = ({
  title,
  carouselSlides,
}) => {
  const carouselRef = useRef<SwiperRef>(null);

  return (
    <div className="relative my-12 lg:my-16 2xl:my-24 px-8 lg:px-16 h-[100dvh] max-h-[750px] lg:max-h-[1000px]">
      <div className="max-w-[1440px] mx-auto">
        {title && (
          <h2 className="text-primary text-2xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
        )}
        {carouselSlides && (
          <div>
            <SwiperCarousel parentRef={carouselRef}>
              {carouselSlides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <CarouselObject {...slide} />
                </SwiperSlide>
              ))}
            </SwiperCarousel>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedCarousel;
