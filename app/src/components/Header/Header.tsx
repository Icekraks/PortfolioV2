import React, { useEffect, useState } from "react";

import { useMedia } from "@app/hooks/useMedia";
import { HeaderDesktop } from "@app/components/Header/HeaderDesktop";
import { HeaderMobile } from "@app/components/Header/HeaderMobile";
import { useFetcher } from "@remix-run/react";
import { useLocation } from "@app/hooks/useLocation";
import { WeatherData } from "@app/types/global";

export const Header: React.FC = () => {
  const { isMd } = useMedia();
  const fetcher = useFetcher();
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const { getCoords } = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      console.log(coords);
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
      setWeather(fetcher.data as WeatherData | null);
    }
  }, [fetcher]);

  useEffect(() => {
    if (isMd) {
      setIsMenuOpen(false);
    }
  }, [isMd]);

  return (
    <header className="bg-[#002b36] w-full sticky top-0 left-0 z-10">
      <div id="headerElement">
        <HeaderDesktop weather={weather} />
        <HeaderMobile
          isOpen={isMenuOpen}
          setIsOpen={setIsMenuOpen}
          weather={weather}
        />
      </div>
    </header>
  );
};
