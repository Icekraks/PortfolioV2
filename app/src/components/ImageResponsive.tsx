import { ResponsiveImage } from "@app/components/ResponsiveImage";
import { Image } from "@app/types/global";

type ImageResponsiveProps = {
  image: Image;
  aspectRatio: number;
  aspectRatioMobile?: number;
  className: string;
};

export const ImageResponsive: React.FC<ImageResponsiveProps> = ({
  aspectRatio = 1,
  aspectRatioMobile,
  image,
  className,
}) => {
  const paddingBottom = 100 * aspectRatio;
  const paddingBottomMobile = aspectRatioMobile
    ? 100 * aspectRatioMobile
    : 100 * aspectRatio;

  const classNameString = `relative overflow-hidden z-1 ${className}`;
  return (
    <div
      className={classNameString}
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
  );
};
