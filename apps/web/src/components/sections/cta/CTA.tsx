"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@portfolio/ui/button";
import { cn } from "@portfolio/ui/utils";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import useLink from "@/hooks/useLink";
import type { SectionCTA } from "@portfolio/sanity";

type CTAProps = SectionCTA & { sectionIndex: number };

const CTA: React.FC<CTAProps> = ({
  title,
  description,
  image,
  callToAction,
  sectionIndex,
  leftImage,
}) => {
  const { urlResolver } = useLink();
  const [readMore, setReadMore] = useState(false);

  const resolvedUrl = callToAction ? urlResolver(callToAction) : null;

  return (
    <div className="relative">
      <div
        className={cn(
          "flex flex-col w-full items-start mx-auto",
          leftImage ? "lg:flex-row" : "lg:flex-row-reverse"
        )}
      >
        <div className="relative w-full lg:w-1/2 pb-[min(60%,720px)]">
          <div className="absolute inset-0">
            {image?.asset ? (
              <ResponsiveImage
                src={image.asset.url}
                alt={image.asset.altText}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-solarized-black" />
            )}
          </div>
        </div>
        <div
          className={cn(
            "w-full lg:w-1/2 lg:max-w-[720px] px-4 pb-12 lg:pb-16 mx-auto lg:px-8",
            sectionIndex !== 0 && "pt-12 lg:pt-16"
          )}
        >
          {sectionIndex === 0 ? (
            <h1 className="text-primary text-4xl lg:text-6xl font-bold mb-8 w-full">
              {title}
            </h1>
          ) : (
            <h2 className="text-primary text-2xl lg:text-4xl font-bold mb-4 w-full">
              {title}
            </h2>
          )}
          <div className="flex flex-col mb-4 lg:mb-12">
            {description && (
              <p className="text-primary px-4 md:px-10 lg:px-16 w-full">
                <span className="block md:hidden">
                  {readMore
                    ? description
                    : `${description.split(" ").slice(0, 40).join(" ")}...`}{" "}
                </span>
                <span className="hidden md:block">{description}</span>
              </p>
            )}
            <div className="md:hidden">
              <Button
                variant="link"
                className="mt-2 underline w-auto"
                onClick={() => setReadMore(!readMore)}
              >
                {readMore ? "Read Less" : "Read More"}
              </Button>
            </div>
          </div>
          {resolvedUrl && (
            <div className="flex px-4 md:px-10 lg:px-16">
              <Button
                render={
                  <Link
                    href={resolvedUrl.url}
                    target={resolvedUrl.external ? "_blank" : undefined}
                  />
                }
              >
                {resolvedUrl.label}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CTA;
