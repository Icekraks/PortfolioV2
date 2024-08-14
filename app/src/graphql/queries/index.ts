import { IMAGE_FRAGMENT } from "../fragments/imageFragment";
import { SECTIONS_FRAGMENT } from "../fragments/sections";

export const INDEX_QUERY = `
  *[_type == "pageHomepage"][0] {
    title,
    subtitle,
    description,
    file {
      asset->{
        ...
      }
    },
    image {
      ${IMAGE_FRAGMENT}
    },
    sections[] {
      ${SECTIONS_FRAGMENT}
    }
  }
`;
