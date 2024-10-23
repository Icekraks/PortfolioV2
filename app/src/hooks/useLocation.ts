import { useCallback } from "react";

export const useLocation = () => {
  const getCoords = useCallback(async () => {
    try {
      const pos = (await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      })) as GeolocationPosition;
      const latLng = {
        lat: pos.coords.latitude.toString(),
        lon: pos.coords.longitude.toString(),
      };

      return latLng;
    } catch (error) {
      return null;
    }
  }, []);

  return { getCoords };
};
