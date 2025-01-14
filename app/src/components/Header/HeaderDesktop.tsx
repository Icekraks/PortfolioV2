import {
  Link as RemixLink,
  useFetcher,
  useRouteLoaderData,
} from "@remix-run/react";
import { RootLoaderData, WeatherData } from "@app/types/global";
import { Button } from "@app/theme/ui/button";
import { cn } from "@app/utils/utils";
import {
  Cloud,
  CloudDrizzle,
  CloudLightning,
  CloudRain,
  CloudSnow,
  Sun,
} from "lucide-react";

export type HeaderDesktopTypes = {
  weather: WeatherData | null;
};

export const HeaderDesktop: React.FC<HeaderDesktopTypes> = ({ weather }) => {
  const root = useRouteLoaderData("root") as RootLoaderData;

  return (
    <div
      className={cn(
        "hidden lg:flex mx-auto border-b-[1px] bg-[#002b36] sticky top-0 z-50 transition-background ease-in-out duration-100"
      )}
    >
      <div className="flex justify-center items-center gap-2 lg:gap-8">
        {root.navigation.header && root.navigation.header.linksNew && (
          <nav className="flex gap-4 pt-1 px-8 max-w-screen-2xl mx-auto">
            <Button asChild variant="linkInvert">
              <RemixLink to="/" rel="noreferrer">
                Home
              </RemixLink>
            </Button>
            {root.navigation.header.linksNew.map((link, index) => (
              <Button key={index} asChild variant="linkInvert">
                <RemixLink
                  aria-label={link.link.title}
                  to={link.link.link}
                  rel="noreferrer"
                >
                  {link.link.title}
                </RemixLink>
              </Button>
            ))}
          </nav>
        )}
      </div>

      {weather && (
        <div className="flex items-center justify-center ml-auto pr-8">
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
    </div>
  );
};
