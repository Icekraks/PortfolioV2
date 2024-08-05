import { IMAGE_FRAGMENT } from "../imageFragment";

export const HERO_SECTION_FRAGMENT = `
  _type,
  _key,
  title,
  pretitle,
  subtitle,
  description,
  file {
    ...,
  },
  image {
    ${IMAGE_FRAGMENT}
  }
`;
