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
  Sun,
} from "lucide-react";
import { useRoot } from "@/providers/root-provider";
import type { WeatherData } from "@/types/global";

type HeaderDesktopProps = {
  weather: WeatherData | null;
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

export const HeaderDesktop: React.FC<HeaderDesktopProps> = ({ weather }) => {
  const root = useRoot();

  return (
    <div
      className={cn(
        "hidden lg:flex mx-auto border-b-[1px] bg-[#002b36] sticky top-0 z-50 transition-background ease-in-out duration-100",
      )}
    >
      <div className="flex justify-center items-center gap-2 lg:gap-8">
        {root.navigation?.header?.linksNew && (
          <nav className="flex gap-4 pt-1 px-8 max-w-screen-2xl mx-auto">
            <Button
              variant="linkInvert"
              nativeButton={false}
              render={<Link href="/" rel="noreferrer" />}
            >
              Home
            </Button>
            {root.navigation.header.linksNew.map((item, index) => (
              <Button
                key={index}
                variant="linkInvert"
                nativeButton={false}
                render={
                  <Link
                    href={item.link.link}
                    rel="noreferrer"
                    aria-label={item.link.title}
                  />
                }
              >
                {item.link.title}
              </Button>
            ))}
          </nav>
        )}
      </div>

      {weather && (
        <div className="flex items-center justify-center ml-auto pr-8 text-white">
          {weather.name}
          <div className="mx-2">
            <WeatherIcon main={weather.weather[0].main} />
          </div>
          {weather.main.temp}°C
        </div>
      )}
    </div>
  );
};
