import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Page
 *
 *
 */
export interface Page extends SanityDocument {
  _type: "page";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Sections — `objectSections`
   *
   *
   */
  sections?: ObjectSections;
}

/**
 * Home
 *
 *
 */
export interface PageHomepage extends SanityDocument {
  _type: "pageHomepage";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Pretitle — `string`
   *
   *
   */
  pretitle?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Subtitle — `string`
   *
   *
   */
  subtitle?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;

  /**
   * File — `file`
   *
   *
   */
  file?: { _type: "file"; asset: SanityReference<any> };

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Meta Title — `string`
   *
   *
   */
  metaTitle?: string;

  /**
   * Meta Description — `string`
   *
   *
   */
  metaDescription?: string;
}

/**
 * Navigation
 *
 *
 */
export interface Navigation extends SanityDocument {
  _type: "navigation";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Links — `array`
   *
   *
   */
  linksNew?: Array<
    SanityKeyed<{
      /**
       * Icon — `string`
       *
       *
       */
      icon?: "about" | "contact" | "components" | "other";

      /**
       * Link — `link`
       *
       *
       */
      link?: Link;
    }>
  >;
}

/**
 * Menu Settings
 *
 *
 */
export interface SettingsMenus extends SanityDocument {
  _type: "settingsMenus";

  /**
   * Header Title — `string`
   *
   *
   */
  headerTitle?: string;

  /**
   * Header — `reference`
   *
   *
   */
  header?: SanityReference<Navigation>;

  /**
   * Footer — `reference`
   *
   *
   */
  footer?: SanityReference<Navigation>;
}

/**
 * Social Media Settings
 *
 *
 */
export interface SettingsSocial extends SanityDocument {
  _type: "settingsSocial";

  /**
   * Email — `string`
   *
   *
   */
  email?: string;

  /**
   * LinkedIn — `string`
   *
   *
   */
  linkedin?: string;

  /**
   * GitHub — `string`
   *
   *
   */
  github?: string;

  /**
   * YouTube — `string`
   *
   *
   */
  youtube?: string;
}

/**
 * 404 Settings
 *
 *
 */
export interface SettingsNotFound extends SanityDocument {
  _type: "settingsNotFound";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;
}

/**
 * Maintenance Settings
 *
 *
 */
export interface SettingsMaintenance extends SanityDocument {
  _type: "settingsMaintenance";

  /**
   * Title — `string`
   *
   *
   */
  title: string;

  /**
   * Subtitle — `string`
   *
   *
   */
  subtitle?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;

  /**
   * Maintenance Mode — `boolean`
   *
   *
   */
  maintenanceMode?: boolean;

  /**
   * Password — `string`
   *
   *
   */
  password?: string;
}

export type ObjectHero = {
  _type: "objectHero";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Pretitle — `string`
   *
   *
   */
  pretitle?: string;

  /**
   * Subtitle — `string`
   *
   *
   */
  subtitle?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;

  /**
   * File — `file`
   *
   *
   */
  file?: { _type: "file"; asset: SanityReference<any> };

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Show Scroll Down — `boolean`
   *
   *
   */
  showScrollDown?: boolean;
};

export type ObjectText = {
  _type: "objectText";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;

  /**
   * File Button Label — `string`
   *
   *
   */
  fileLabel?: string;

  /**
   * File — `file`
   *
   *
   */
  file?: { _type: "file"; asset: SanityReference<any> };

  /**
   * CTA — `link`
   *
   *
   */
  cta?: Link;
};

export type ObjectTextColumns = {
  _type: "objectTextColumns";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Columns — `array`
   *
   *
   */
  columns?: Array<SanityKeyed<TextColumnObject>>;
};

export type ObjectTags = {
  _type: "objectTags";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Categories — `array`
   *
   *
   */
  categories?: Array<SanityKeyed<CategoryObject>>;
};

export type ObjectFeaturedCarousel = {
  _type: "objectFeaturedCarousel";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;

  /**
   * Number of Columns — `number`
   *
   *
   */
  numberOfColumns?: number;

  /**
   * Carousel Slides — `array`
   *
   *
   */
  carouselSlides?: Array<SanityKeyed<CarouselObject>>;
};

export type ObjectFeatured = {
  _type: "objectFeatured";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;

  /**
   * Featured Sites — `array`
   *
   *
   */
  featuredSites?: Array<SanityKeyed<FeaturedObject>>;
};

export type ObjectContact = {
  _type: "objectContact";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
};

export type ObjectCTA = {
  _type: "objectCTA";
  /**
   * Title — `string`
   *
   *
   */
  title: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Call to Action — `flexibleLink`
   *
   *
   */
  callToAction?: FlexibleLink;

  /**
   * Image on Left? — `boolean`
   *
   *
   */
  leftImage?: boolean;
};

export type FlexibleLink = {
  _type: "flexibleLink";
  /**
   * external — `link`
   *
   *
   */
  external?: Link;

  /**
   * internal — `internal`
   *
   *
   */
  internal?: Internal;

  /**
   * External Link? — `boolean`
   *
   *
   */
  type: boolean;
};

export type FeaturedObject = {
  _type: "featuredObject";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * URL — `url`
   *
   *
   */
  url?: string;
};

export type ObjectSections = Array<
  | SanityKeyed<ObjectHero>
  | SanityKeyed<ObjectText>
  | SanityKeyed<ObjectTags>
  | SanityKeyed<ObjectTextColumns>
  | SanityKeyed<ObjectFeatured>
  | SanityKeyed<ObjectFeaturedCarousel>
  | SanityKeyed<ObjectContact>
  | SanityKeyed<ObjectCTA>
>;

export type Link = {
  _type: "link";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Link — `url`
   *
   *
   */
  link?: string;

  /**
   * New window — `boolean`
   *
   *
   */
  external?: boolean;
};

export type CarouselObject = {
  _type: "carouselObject";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * URL — `url`
   *
   *
   */
  url?: string;
};

export type Internal = {
  _type: "internal";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Document — `reference`
   *
   *
   */
  document?: SanityReference<Page | PageHomepage>;
};

export type CategoryObject = {
  _type: "categoryObject";
  /**
   * Text — `string`
   *
   *
   */
  text?: string;

  /**
   * Tags — `array`
   *
   *
   */
  tags?: Array<SanityKeyed<string>>;
};

export type TextColumnObject = {
  _type: "textColumnObject";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;
};

export type Documents =
  | Page
  | PageHomepage
  | Navigation
  | SettingsMenus
  | SettingsSocial
  | SettingsNotFound
  | SettingsMaintenance;
