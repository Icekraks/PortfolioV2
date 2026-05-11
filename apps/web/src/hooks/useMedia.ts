import { useMediaQuery } from "react-responsive";

const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1400px",
};

export const useMedia = () => ({
  isBase: useMediaQuery({ query: "(min-width: 0px)" }),
  isSm: useMediaQuery({ query: `(min-width: ${breakpoints.sm})` }),
  isMd: useMediaQuery({ query: `(min-width: ${breakpoints.md})` }),
  isLg: useMediaQuery({ query: `(min-width: ${breakpoints.lg})` }),
  isXl: useMediaQuery({ query: `(min-width: ${breakpoints.xl})` }),
  is2xl: useMediaQuery({ query: `(min-width: ${breakpoints["2xl"]})` }),
  touch: useMediaQuery({ query: "(hover: none)" }),
});
