import { HEADER_FRAGMENT } from "../fragments/header";

export const ROOT_QUERY = `
  {
    "navigation": *[_type == "settingsMenus"][0] {
      ${HEADER_FRAGMENT}
    }
  }
`;
