import {
  ObjectSections,
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  SanityReference,
} from "./schema";

export type RootLoaderData = {
  navigation: {
    headerTitle: string;
    header: Navigation;
    footer: Navigation;
  };
  social: SocialMedia;
  notFound: NotFound;
  passwordEnabled: boolean;
};

export type NotFound = {
  title: string;
  description: string;
};

export type SocialMedia = {
  email: string;
  linkedin: string;
  github: string;
  youtube: string;
};

export type Navigation = {
  title: string;
  links: Link[];
  linksNew: LinkObject[];
};

export type LinkObject = {
  icon: string;
  link: Link;
};

export type Link = {
  title: string;
  link: string;
  external: boolean;
};

export type Image = {
  _type: "image";
  asset: SanityReference<SanityImageAsset>;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;
};

export type Coordinates = {
  lat: number;
  lon: number;
};

export type WeatherData = {
  coord: Coordinates;
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
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
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

export type ExtractType<T> = T extends Array<infer U> ? U : never;

export type SectionsTypes = ExtractType<ObjectSections>;
