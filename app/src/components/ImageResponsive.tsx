import { ResponsiveImage } from "@app/components/ResponsiveImage";
import { Image } from "@app/types/global";
import { cn } from "@app/utils/utils";

type ImageResponsiveProps = {
  image: Image;
  aspectRatio: number;
  aspectRatioMobile?: number;
  className?: string;
};

export const ImageResponsive: React.FC<ImageResponsiveProps> = ({
  aspectRatio = 1,
  aspectRatioMobile,
  image,
  className = "width-full",
}) => {
  const paddingBottom = 100 * aspectRatio;
  const paddingBottomMobile = aspectRatioMobile
    ? 100 * aspectRatioMobile
    : 100 * aspectRatio;

  const classNameString = `relative overflow-hidden z-1 ${className}`;
  return (
    <>
      <div
        className={cn("hidden lg:block", classNameString)}
        style={{
          paddingBottom: `${paddingBottom}%`,
        }}
      >
        <ResponsiveImage
          className="h-full object-cover absolute top-0 left-0"
          src={image.asset.url}
          alt={image.asset.altText}
        />
      </div>
      <div
        className={cn("block lg:hidden", classNameString)}
        style={{
          paddingBottom: `${paddingBottomMobile}%`,
        }}
      >
        <ResponsiveImage
          className="h-full object-cover absolute top-0 left-0"
          src={image.asset.url}
          alt={image.asset.altText}
        />
      </div>
    </>
  );
};
