import { HERO_SECTION_FRAGMENT } from "./hero";
import { TEXT_SECTION_FRAGMENT } from "./text";
import { TAGS_SECTION_FRAGMENT } from "./tags";
import { FEATURED_SECTION_FRAGMENT } from "./featured";
import { FEATURED_CAROUSEL_SECTION_FRAGMENT } from "./featured-carousel";
import { CONTACT_SECTION_FRAGMENT } from "./contact";
import { CTA_SECTION_FRAGMENT } from "./cta";

export const SECTIONS_FRAGMENT = `
  _type,
  _key,
  _type == 'objectHero' => { ${HERO_SECTION_FRAGMENT} },
  _type == 'objectText' => { ${TEXT_SECTION_FRAGMENT} },
  _type == 'objectTags' => { ${TAGS_SECTION_FRAGMENT} },
  _type == 'objectFeatured' => { ${FEATURED_SECTION_FRAGMENT} },
  _type == 'objectFeaturedCarousel' => { ${FEATURED_CAROUSEL_SECTION_FRAGMENT} },
  _type == 'objectContact' => { ${CONTACT_SECTION_FRAGMENT} },
  _type == 'objectCTA' => { ${CTA_SECTION_FRAGMENT} }
`;
