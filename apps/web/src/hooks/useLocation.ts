import { useCallback } from "react";
import type { Coordinates } from "@/types/global";

export const useLocation = () => {
  const getCoords = useCallback(async (): Promise<Coordinates | null> => {
    try {
      const pos = (await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      }));
      return {
        lat: pos.coords.latitude.toString(),
        lon: pos.coords.longitude.toString(),
      };
    } catch {
      return null;
    }
  }, []);

  return { getCoords };
};
