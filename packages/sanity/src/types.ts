export type SanityImageAsset = {
  url: string;
  altText?: string;
  metadata?: {
    lqip?: string;
  };
};

export type SanityImage = {
  alt?: string;
  asset: SanityImageAsset;
};

export type SanityFile = {
  asset: {
    url: string;
  };
};

export type SanityLink = {
  title: string;
  link: string;
  external?: boolean;
};

export type SanityLinkObject = {
  icon?: string;
  link: SanityLink;
};

export type SanityNavigation = {
  title?: string;
  links?: SanityLink[];
  linksNew?: SanityLinkObject[];
};

export type SanityMenus = {
  headerTitle?: string;
  header?: SanityNavigation;
  footer?: SanityNavigation;
};

export type SanitySocial = {
  email?: string;
  linkedin?: string;
  github?: string;
  youtube?: string;
};

export type SanityNotFound = {
  title: string;
  description: string;
};

export type SanityMaintenance = {
  title?: string;
  subtitle?: string;
  description?: string;
  maintenanceMode?: boolean;
  password?: string;
};

export type FlexibleLinkInternal = {
  title?: string;
  document: {
    _id: string;
    slug?: { current: string };
  };
};

export type FlexibleLink = {
  type?: boolean;
  internal?: FlexibleLinkInternal;
  external?: SanityLink;
};

export type SanityCarouselSlide = {
  title?: string;
  image: SanityImage;
  url?: string;
};

export type SanityFeaturedItem = {
  title?: string;
  description?: string;
  image: SanityImage;
  url?: string;
};

export type SanityCategory = {
  text?: string;
  tags?: string[];
};

export type SectionHero = {
  _type: "objectHero";
  _key: string;
  title?: string;
  pretitle?: string;
  subtitle?: string;
  description?: string;
  file?: SanityFile;
  image?: SanityImage;
  showScrollDown?: boolean;
};

export type SectionText = {
  _type: "objectText";
  _key: string;
  title?: string;
  description?: string;
  file?: SanityFile;
  fileLabel?: string;
  cta?: SanityLink;
};

export type SectionTags = {
  _type: "objectTags";
  _key: string;
  title?: string;
  categories?: SanityCategory[];
};

export type SectionFeatured = {
  _type: "objectFeatured";
  _key: string;
  title?: string;
  description?: string;
  featuredSites?: SanityFeaturedItem[];
};

export type SectionFeaturedCarousel = {
  _type: "objectFeaturedCarousel";
  _key: string;
  title?: string;
  description?: string;
  numberOfColumns?: number;
  carouselSlides?: SanityCarouselSlide[];
};

export type SectionContact = {
  _type: "objectContact";
  _key: string;
  title?: string;
  description?: string;
  image?: SanityImage;
};

export type SectionCTA = {
  _type: "objectCTA";
  _key: string;
  title?: string;
  description?: string;
  leftImage?: boolean;
  image?: SanityImage;
  callToAction?: FlexibleLink;
};

export type Section =
  | SectionHero
  | SectionText
  | SectionTags
  | SectionFeatured
  | SectionFeaturedCarousel
  | SectionContact
  | SectionCTA;

export type SanityRootData = {
  navigation: SanityMenus;
  social: SanitySocial;
  notFound: SanityNotFound;
  maintenance: SanityMaintenance;
};

export type SanityHomepage = {
  title?: string;
  subtitle?: string;
  description?: string;
  file?: SanityFile;
  image?: SanityImage;
};

export type SanityPage = {
  title?: string;
  slug?: { current: string };
  sections?: Section[];
};
