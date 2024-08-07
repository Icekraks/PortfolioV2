import { HERO_SECTION_FRAGMENT } from "./sections/objectHero";
import { TEXT_SECTION_FRAGMENT } from "./sections/objectText";
import { TAGS_SECTION_FRAGMENT } from "./sections/objectTags";
import { FEATURED_SECTION_FRAGMENT } from "./sections/objectFeatured";

export const SECTIONS_FRAGMENT = `
  _type,
  _key,
  _type == 'objectHero' => { ${HERO_SECTION_FRAGMENT} },
  _type == 'objectText' => { ${TEXT_SECTION_FRAGMENT} },
  _type == 'objectTags' => { ${TAGS_SECTION_FRAGMENT} },
  _type == 'objectFeatured' => { ${FEATURED_SECTION_FRAGMENT} }
`;
