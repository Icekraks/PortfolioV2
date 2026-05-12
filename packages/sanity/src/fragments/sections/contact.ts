import { IMAGE_FRAGMENT } from "../image";

export const CONTACT_SECTION_FRAGMENT = `
  _type,
  _key,
  title,
  description,
  image {
    ${IMAGE_FRAGMENT}
  },
`;
