/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Button } from "@app/theme/ui/button";
import type {
  LinkObject,
  RootLoaderData,
  WeatherData,
} from "@app/types/global";
import { Link as RemixLink, useRouteLoaderData } from "@remix-run/react";
import { HeaderFooter } from "@app/components/Header/HeaderFooter";
import { cn } from "@app/utils/utils";
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

export type HeaderMobileProps = {
  isOpen: boolean;
  weather: WeatherData | null;
  setIsOpen: (isOpen: boolean) => void;
};

export const HeaderMobile: React.FC<HeaderMobileProps> = ({
  isOpen,
  setIsOpen,
  weather,
}: HeaderMobileProps) => {
  const root = useRouteLoaderData("root") as RootLoaderData;

  return (
    <>
      <div className="p-4 flex lg:hidden items-center justify-between">
        <Button
          variant="secondary"
          className="z-50"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <Menu />
        </Button>
        {root.navigation.headerTitle ? (
          <RemixLink to={"/"}>
            <h4 className="font-sans">{root.navigation.headerTitle}</h4>
          </RemixLink>
        ) : null}
      </div>
      <div
        onClick={() => setIsOpen(false)}
        className={cn(
          "fixed top-0 left-0 w-full h-full z-[49] bg-black opacity-20 cursor-pointer",
          isOpen ? "block" : "hidden"
        )}
      />
      <div
        className={cn(
          "lg:hidden fixed transition-transform top-0 left-0 w-[90dvw] max-w-[400px] bg-[#002b36] h-[100dvh] px-4 pt-4 pb-4 z-50",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="relative h-full flex flex-col">
          <div className="header flex">
            <h1 className="font-sans">{root.navigation.headerTitle}</h1>
            <Button className="ml-[auto]" onClick={() => setIsOpen(false)}>
              <X />
            </Button>
          </div>
          <div className="flex flex-col gap-4 flex-grow overflow-y-auto py-4">
            <Button
              variant="secondary"
              asChild
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <RemixLink to="/" rel="noreferrer">
                Home
              </RemixLink>
            </Button>
            {root.navigation.header.linksNew.map(
              (link: LinkObject, index: number) => {
                return (
                  <Button
                    key={index}
                    variant="secondary"
                    asChild={!link.link.link.includes("#")}
                    onClick={() => {
                      if (link.link.link.includes("#")) {
                        const element = document.querySelector(link.link.link);
                        if (element) {
                          setIsOpen(false);
                          if (index === 0) {
                            window.location.hash = "";
                            window.scrollTo({
                              top: 0,
                              left: 0,
                              behavior: "smooth",
                            });
                          } else {
                            window.location.hash = link.link.link;
                            element.scrollIntoView({ behavior: "smooth" });
                          }
                        }
                      }
                      setIsOpen(false);
                    }}
                  >
                    {!link.link.link.includes("#") ? (
                      <RemixLink
                        key={index}
                        to={link.link.link}
                        target={link.link.external ? "_blank" : ""}
                        rel="noreferrer"
                      >
                        {link.link.title}
                      </RemixLink>
                    ) : (
                      link.link.title
                    )}
                  </Button>
                );
              }
            )}
          </div>

          <div className="mt-auto pt-4 mb-6">
            {weather && (
              <div className="flex items-center justify-center ml-auto mb-4">
                {weather.name}
                <div className="mx-2">
                  {weather.weather[0].main === "Clear" ? (
                    <Sun size={24} />
                  ) : weather.weather[0].main === "Clouds" ? (
                    <Cloud size={24} />
                  ) : weather.weather[0].main === "Drizzle" ? (
                    <CloudDrizzle size={24} />
                  ) : weather.weather[0].main === "Rain" ? (
                    <CloudRain size={24} />
                  ) : weather.weather[0].main === "Thunderstorm" ? (
                    <CloudLightning size={24} />
                  ) : weather.weather[0].main === "Snow" ? (
                    <CloudSnow size={24} />
                  ) : null}
                </div>
                {weather.main.temp}°C
              </div>
            )}
            <div className="flex lg:flex-col justify-center items-center gap-2 lg:gap-8">
              <HeaderFooter social={root.social} />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <h4 className="font-sans text-secondary text-md lg:text-xl">{`${new Date().getFullYear()} © Felix Hu`}</h4>
          </div>
        </div>
      </div>
    </>
  );
};
