import { useRef } from "react";
import {
  SwiperCarousel,
  SwiperRef,
  SwiperSlide,
} from "@app/components/Carousel/SwiperCarousel";
import type { ObjectFeaturedCarousel } from "@app/types/schema";
import { CarouselObject } from "@app/components/Sections/FeaturedCarousel/CarouselObject";
import { Button } from "@app/theme/ui/button";
import { MoveLeft, MoveRight } from "lucide-react";

type FeaturedCarouselProps = ObjectFeaturedCarousel & {
  sectionIndex: number;
};

const FeaturedCarousel: React.FC<FeaturedCarouselProps> = ({
  title,
  description,
  numberOfColumns,
  carouselSlides,
}) => {
  const carouselRef = useRef<SwiperRef>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="relative my-12 lg:my-16 2xl:my-24 lg:px-16">
      <div className="max-w-[1440px] mx-auto md:px-8">
        {title && (
          <h2 className="text-primary text-2xl md:text-4xl font-bold mb-4 px-4">
            {title}
          </h2>
        )}
        {description && (
          <p className="text-primary md:px-10 lg:px-16 mb-8 w-full px-4">
            {description}
          </p>
        )}
        {carouselSlides && (
          <div className="relative">
            <div className="hidden lg:block">
              <Button
                ref={prevRef}
                size="icon"
                className="absolute top-1/2 left-0 md:left-[-1rem] lg:left-[-4rem] transform -translate-y-1/2 z-10"
              >
                <MoveLeft size={24} />
              </Button>
              <Button
                ref={nextRef}
                size="icon"
                className="absolute top-1/2 right-0 md:right-[-1rem] lg:right-[-4rem] transform -translate-y-1/2 z-10"
              >
                <MoveRight size={24} />
              </Button>
            </div>
            <SwiperCarousel
              parentRef={carouselRef}
              buttons={{ prev: prevRef, next: nextRef }}
              spaceBetween={8}
              breakpoints={{
                320: {
                  spaceBetween: 8,
                  slidesPerView: 1.25,
                },
                768: {
                  spaceBetween: 16,
                  slidesPerView: numberOfColumns,
                },
                1024: {
                  spaceBetween: 24,
                  slidesPerView: numberOfColumns,
                },
              }}
            >
              {carouselSlides.map((slide, index) => (
                <SwiperSlide key={index} autoHeight>
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
