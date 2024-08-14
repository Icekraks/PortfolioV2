import { Button } from "@app/theme/ui/button";
import { ObjectText } from "@app/types/schema";
import { cn } from "@app/utils/utils";
import { Link } from "@remix-run/react";

export type TextProps = ObjectText & {
  sectionIndex: number;
};

const Text: React.FC<TextProps> = ({
  title,
  description,
  file,
  fileLabel,
  cta,
  sectionIndex,
}) => {
  return (
    <div
      className={cn(
        "relative pb-12 px-0 lg:pb-16 2xl:pb-24 md:px-16",
        sectionIndex !== 0 ? "pt-12 lg:pt-16 2xl:pt-24" : ""
      )}
    >
      <div className="flex flex-col w-full items-center max-w-[1440px] mx-auto">
        {sectionIndex === 0 ? (
          <h1 className="text-primary text-4xl lg:text-6xl font-bold mb-8 w-full">
            {title}
          </h1>
        ) : (
          <h2 className="text-primary text-2xl lg:text-4xl font-bold mb-4 w-full">
            {title}
          </h2>
        )}
        <p className="text-primary md:px-10 lg:px-16 mb-8 w-full">
          {description}
        </p>
        <div className="flex gap-4 w-full md:px-10 lg:px-16">
          {file && (
            <Button variant="default" asChild>
              <Link to={file.asset.url} download target="_blank">
                {fileLabel ? fileLabel : "Get my CV"}
              </Link>
            </Button>
          )}
          {cta && (
            <Button variant="default" asChild>
              <Link to={cta.link}>{cta.title}</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Text;
