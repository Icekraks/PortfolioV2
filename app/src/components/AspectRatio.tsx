import { cn } from "@app/utils/utils";

type AspectRatioProps = {
  children: React.ReactNode;
  aspectRatio: number;
  className: string;
};

export const AspectRatio: React.FC<AspectRatioProps> = ({
  aspectRatio = 1,
  children,
  className,
}) => {
  const paddingBottom = 100 * aspectRatio;

  const classNameString = `relative overflow-hidden z-1 ${className} pb-[${paddingBottom}%]`;
  return (
    <div className={classNameString}>
      <div className="absolute top-0 left-0 w-full">{children}</div>
    </div>
  );
};
