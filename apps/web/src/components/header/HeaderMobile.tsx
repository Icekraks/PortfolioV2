"use client";

import Link from "next/link";
import { Button } from "@portfolio/ui/button";
import { cn } from "@portfolio/ui/utils";
import {
  Cloud,
  CloudDrizzle,
  CloudLightning,
  CloudRain,
  CloudSnow,
  Menu,
  Sun,
  X,
} from "lucide-react";
import { useRoot } from "@/providers/root-provider";
import { HeaderFooter } from "./HeaderFooter";
import type { WeatherData } from "@/types/global";
import type { SanityLinkObject } from "@portfolio/sanity";

type HeaderMobileProps = {
  isOpen: boolean;
  weather: WeatherData | null;
  setIsOpen: (open: boolean) => void;
};

function WeatherIcon({ main }: { main: string }) {
  const size = 24;
  if (main === "Clear") return <Sun size={size} />;
  if (main === "Clouds") return <Cloud size={size} />;
  if (main === "Drizzle") return <CloudDrizzle size={size} />;
  if (main === "Rain") return <CloudRain size={size} />;
  if (main === "Thunderstorm") return <CloudLightning size={size} />;
  if (main === "Snow") return <CloudSnow size={size} />;
  return null;
}

export const HeaderMobile: React.FC<HeaderMobileProps> = ({
  isOpen,
  setIsOpen,
  weather,
}) => {
  const root = useRoot();

  const handleLinkClick = (link: SanityLinkObject) => {
    if (link.link.link.includes("#")) {
      const el = document.querySelector(link.link.link);
      if (el) {
        window.location.hash = link.link.link;
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <>
      <div className="p-4 flex lg:hidden items-center justify-between">
        <Button
          variant="secondary"
          className="z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu />
        </Button>
        {root.navigation?.headerTitle && (
          <Link href="/">
            <h4 className="font-sans">{root.navigation.headerTitle}</h4>
          </Link>
        )}
      </div>

      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={cn(
          "fixed top-0 left-0 w-full h-full z-[49] bg-black opacity-20 cursor-pointer",
          isOpen ? "block" : "hidden"
        )}
      />

      {/* Drawer */}
      <div
        className={cn(
          "lg:hidden fixed transition-transform top-0 left-0 w-[90dvw] max-w-[400px] bg-[#002b36] h-[100dvh] px-4 pt-4 pb-4 z-50",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="relative h-full flex flex-col">
          <div className="header flex">
            <h1 className="font-sans">{root.navigation?.headerTitle}</h1>
            <Button className="ml-[auto]" onClick={() => setIsOpen(false)}>
              <X />
            </Button>
          </div>

          <div className="flex flex-col gap-4 flex-grow overflow-y-auto py-4">
            <Button
              variant="secondary"
              render={<Link href="/" rel="noreferrer" />}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Button>
            {root.navigation?.header?.linksNew?.map((item, index) => {
              const isAnchor = item.link.link.includes("#");
              return (
                <Button
                  key={index}
                  variant="secondary"
                  onClick={() => handleLinkClick(item)}
                  render={
                    !isAnchor ? (
                      <Link
                        href={item.link.link}
                        target={item.link.external ? "_blank" : undefined}
                        rel="noreferrer"
                      />
                    ) : undefined
                  }
                >
                  {item.link.title}
                </Button>
              );
            })}
          </div>

          <div className="mt-auto pt-4 mb-6">
            {weather && (
              <div className="flex items-center justify-center ml-auto mb-4 text-white">
                {weather.name}
                <div className="mx-2">
                  <WeatherIcon main={weather.weather[0].main} />
                </div>
                {weather.main.temp}°C
              </div>
            )}
            <div className="flex lg:flex-col justify-center items-center gap-2 lg:gap-8">
              {root.social && <HeaderFooter social={root.social} />}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <h4 className="font-sans text-secondary text-md lg:text-xl">
              {`${new Date().getFullYear()} © Felix Hu`}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};
