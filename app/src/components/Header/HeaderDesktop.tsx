import {
  Link as RemixLink,
  useFetcher,
  useRouteLoaderData,
} from "@remix-run/react";
import { RootLoaderData } from "@app/types/global";
import { Button } from "@app/theme/ui/button";
import { cn } from "@app/utils/utils";
import { useEffect, useState } from "react";
import {
  Cloud,
  CloudDrizzle,
  CloudLightning,
  CloudRain,
  CloudSnow,
  Sun,
} from "lucide-react";
import { useLocation } from "@app/hooks/useLocation";

export const HeaderDesktop: React.FC = () => {
  const root = useRouteLoaderData("root") as RootLoaderData;
  const fetcher = useFetcher();
  const [weather, setWeather] = useState<any | null>(null);
  const { getCoords } = useLocation();

  const getCoordinates = async () => {
    try {
      const coordinates = await getCoords();
      return coordinates;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const formData = new FormData();
    const coordinates = getCoordinates();

    coordinates.then((coords) => {
      if (coords) {
        formData.append("lat", coords.lat);
        formData.append("lon", coords.lon);
      } else {
        formData.append("lat", "-33.865143");
        formData.append("lon", "151.209900");
      }
      fetcher.submit(formData, { method: "post", action: "api/weather" });
    });
  }, []);

  useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data) {
      setWeather(fetcher.data);
    }
  }, [fetcher]);

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
