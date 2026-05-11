export { cn } from "@portfolio/ui/utils";

export function imageBuilder(image: { alt?: string; asset: { url: string } }) {
  return {
    alt: image.alt,
    url: image.asset.url,
  };
}
