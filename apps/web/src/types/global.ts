import type {
  SanityRootData,
  SanitySocial,
  SanityNotFound,
  SanityMenus,
  SanityMaintenance,
  Section,
  FlexibleLink,
} from "@portfolio/sanity";

export type RootData = SanityRootData & {
  passwordEnabled: boolean;
};

export type WeatherData = {
  coord: { lat: number; lon: number };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: { speed: number; deg: number };
  clouds: { all: number };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export type Coordinates = { lat: string; lon: string };

export type SectionsTypes = Section;

export type {
  SanitySocial as SocialMedia,
  SanityNotFound as NotFound,
  SanityMenus as Navigation,
  FlexibleLink,
};
