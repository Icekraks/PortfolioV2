import { ObjectSections } from "./schema";

export type RootLoaderData = {
  navigation: {
    header: Navigation;
    footer: Navigation;
  };
  social: SocialMedia;
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
};

export type Link = {
  title: string;
  link: string;
  external: boolean;
};

export type ExtractType<T> = T extends Array<infer U> ? U : never;

export type SectionsTypes = ExtractType<ObjectSections>;
