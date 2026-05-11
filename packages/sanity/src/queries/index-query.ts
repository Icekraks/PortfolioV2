import { IMAGE_FRAGMENT } from "../fragments/image";

export const INDEX_QUERY = `
  *[_type == "pageHomepage"][0] {
    title,
    subtitle,
    description,
    file {
      asset->{ ... }
    },
    image {
      ${IMAGE_FRAGMENT}
    },
  }
`;
