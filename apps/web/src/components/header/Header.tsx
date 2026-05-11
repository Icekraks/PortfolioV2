"use client";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useMedia } from "@/hooks/useMedia";
import { useLocation } from "@/hooks/useLocation";
import { HeaderDesktop } from "./HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile";
import type { WeatherData, Coordinates } from "@/types/global";

async function fetchWeather(
  lat: string,
  lon: string
): Promise<WeatherData | null> {
  try {
    const res = await fetch("/api/weather", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lat, lon }),
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export const Header: React.FC = () => {
  const { isMd } = useMedia();
  const { getCoords } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: coords, isSuccess: coordsResolved } = useQuery<
    Coordinates | null
  >({
    queryKey: ["coords"],
    queryFn: getCoords,
    staleTime: Infinity,
    retry: false,
  });

  const { data: weather } = useQuery<WeatherData | null>({
    queryKey: ["weather", coords?.lat ?? "default"],
    queryFn: () =>
      fetchWeather(
        coords?.lat ?? "-33.865143",
        coords?.lon ?? "151.209900"
      ),
    enabled: coordsResolved,
    staleTime: 1000 * 60 * 10,
  });

  useEffect(() => {
    if (isMd) setIsMenuOpen(false);
  }, [isMd]);

  return (
    <header className="bg-[#002b36] w-full sticky top-0 left-0 z-10">
      <HeaderDesktop weather={weather ?? null} />
      <HeaderMobile
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
        weather={weather ?? null}
      />
    </header>
  );
};
