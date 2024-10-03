import { HEADER_FRAGMENT } from "../fragments/header";
import { PASSWORD_PAGE_QUERY } from "../fragments/password";

export const ROOT_QUERY = `
  {
    "navigation": *[_type == "settingsMenus"][0] {
      ${HEADER_FRAGMENT}
    },
    "social": *[_type == "settingsSocial"][0] {
      email,
      linkedin,
      github,
      youtube 
    },
    "notFound": *[_type == "settingsNotFound"][0] {
      title,
      description
    },
    "maintenance": ${PASSWORD_PAGE_QUERY}
  }
`;
