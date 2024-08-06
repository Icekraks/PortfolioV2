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
   * Description — `string`
   *
   *
   */
  description?: string;

  /**
   * Sections — `objectSections`
   *
   *
   */
  sections?: ObjectSections;

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
  links?: Array<SanityKeyed<Link>>;
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

export type ObjectSections = Array<
  | SanityKeyed<ObjectHero>
  | SanityKeyed<ObjectText>
  | SanityKeyed<ObjectTags>
  | SanityKeyed<ObjectTextColumns>
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
  columns?: Array<
    SanityKeyed<{
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
    }>
  >;
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
  categories?: Array<
    SanityKeyed<{
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
    }>
  >;
};

export type Documents =
  | Page
  | PageHomepage
  | Navigation
  | SettingsMenus
  | SettingsSocial;
