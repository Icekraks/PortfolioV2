import { Button } from "@portfolio/ui/button";
import { cn } from "@portfolio/ui/utils";
import Link from "next/link";
import type { SectionText } from "@portfolio/sanity";

type TextProps = SectionText & { sectionIndex: number };

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
        "relative mb-12 lg:mb-16 2xl:mb-24 px-4 md:px-16",
        sectionIndex !== 0 && "mt-12 lg:mt-16 2xl:mt-24"
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
          {file?.asset?.url && (
            <Button
              variant="default"
              render={<a href={file.asset.url} download target="_blank" />}
            >
              {fileLabel ?? "Get my CV"}
            </Button>
          )}
          {cta?.link && (
            <Button
              variant="default"
              render={<Link href={cta.link} />}
            >
              {cta.title}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Text;
