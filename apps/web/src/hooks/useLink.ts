import type { FlexibleLink } from "@portfolio/sanity";

const useLink = () => {
  const urlResolver = (link: FlexibleLink) => {
    if (link.type) {
      return {
        label: link.external?.title ?? "",
        url: link.external?.link ?? "",
        external: true,
      };
    }
    const slug = link.internal?.document.slug?.current;
    return {
      label: link.internal?.title ?? "",
      url: slug === "/" ? "/" : `/${slug ?? ""}`,
      external: false,
    };
  };

  return { urlResolver };
};

export default useLink;
