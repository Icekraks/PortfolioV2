import { FLEXIBLE_LINK_FRAGMENT } from "../flexible-link";
import { IMAGE_FRAGMENT } from "../image";

export const CTA_SECTION_FRAGMENT = `
  _type,
  _key,
  title,
  description,
  leftImage,
  image {
    ${IMAGE_FRAGMENT}
  },
  callToAction {
    ${FLEXIBLE_LINK_FRAGMENT}
  },
`;
