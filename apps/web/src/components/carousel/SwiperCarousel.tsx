"use client";

import { useEffect, useRef } from "react";
import type { Swiper } from "swiper";
import { register } from "swiper/element/bundle";
import type { SwiperOptions } from "swiper/types";

export type SwiperRef = HTMLElement & {
  swiper: Swiper;
  initialize: () => void;
};

type SwiperCarouselProps = {
  children: React.ReactNode;
  parentRef: React.RefObject<SwiperRef>;
  onSlideChange?: (swiper: Swiper) => void;
  onSlideInit?: (swiper: Swiper) => void;
  buttons?: {
    prev: React.RefObject<HTMLButtonElement>;
    next: React.RefObject<HTMLButtonElement>;
  };
} & Omit<SwiperOptions, "on">;

type SwiperSlideProps = {
  children: React.ReactNode;
  autoHeight?: boolean;
};

export const SwiperCarousel: React.FC<SwiperCarouselProps> = ({
  children,
  parentRef,
  onSlideInit,
  onSlideChange,
  buttons,
  ...rest
}) => {
  useEffect(() => {
    register();

    const params = {
      on: {
        init: (swiper: Swiper) => {
          onSlideInit?.(swiper);
          if (
            buttons?.prev &&
            buttons?.next &&
            swiper.params.navigation &&
            typeof swiper.params.navigation !== "boolean"
          ) {
            swiper.params.navigation.prevEl = buttons.prev.current;
            swiper.params.navigation.nextEl = buttons.next.current;
          }
          swiper.navigation.init();
          swiper.navigation.update();
        },
        slideChange: (swiper: Swiper) => {
          onSlideChange?.(swiper);
        },
      },
      ...rest,
    };

    if (!parentRef.current) return;
    Object.assign(parentRef.current, params);
    parentRef.current.initialize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // @ts-expect-error swiper custom element
    <swiper-container init={false} ref={parentRef} style={{ zIndex: 0 }}>
      {children}
    </swiper-container>
  );
};

export const SwiperSlide: React.FC<SwiperSlideProps> = ({
  children,
  autoHeight = false,
  ...rest
}) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    // @ts-expect-error swiper custom element
    <swiper-slide
      ref={ref}
      style={{ height: autoHeight ? "auto" : "100%" }}
      {...rest}
    >
      {children}
    </swiper-slide>
  );
};
