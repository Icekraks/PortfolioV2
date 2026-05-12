import { IMAGE_FRAGMENT } from "../image";

export const FEATURED_CAROUSEL_SECTION_FRAGMENT = `
  _type,
  _key,
  title,
  description,
  numberOfColumns,
  carouselSlides[] {
    title,
    image {
      ${IMAGE_FRAGMENT}
    },
    url
  }
`;
