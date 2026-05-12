import { IMAGE_FRAGMENT } from "../image";

export const FEATURED_SECTION_FRAGMENT = `
  _type,
  _key,
  title,
  description,
  featuredSites[] {
    title,
    description,
    image {
      ${IMAGE_FRAGMENT}
    },
    url
  }
`;
