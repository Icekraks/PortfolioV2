import { FLEXIBLE_LINK_FRAGMENT } from "../flexibleLink";
import { IMAGE_FRAGMENT } from "../imageFragment";

export const OBJECT_CTA_FRAGMENT = `
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
