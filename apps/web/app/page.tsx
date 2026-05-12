import {
  sanityClient,
  INDEX_QUERY,
  type SanityHomepage,
} from "@portfolio/sanity";
import LoadingBarAnimation from "@/components/LoadingBarAnimation";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { Button } from "@portfolio/ui/button";

export const revalidate = 60;

export default async function HomePage() {
  const data = await sanityClient.fetch<SanityHomepage>(
    INDEX_QUERY,
    {},
    { next: { revalidate: 60 } },
  );

  const { title, subtitle, description, image, file } = data ?? {};

  return (
    <div className="py-12 px-8 lg:py-8 2xl:py-12 lg:px-16 max-w-screen-2xl mx-auto">
      <LoadingBarAnimation />
      <div className="flex flex-col items-center gap-3 mx-auto w-full lg:max-w-[50%]">
        {image?.asset && (
          <ResponsiveImage
            className="w-[375px] rounded-lg overflow-hidden"
            src={image.asset.url}
            alt={image.asset.altText}
          />
        )}
        <h1 className="font-serif mt-4 text-4xl lg:text-6xl font-bold text-[#002b36]">
          {title}
        </h1>
        <h4 className="font-sans text-[#cb4b16]">{subtitle}</h4>
        {description && (
          <p className="text-primary max-w-[450px]">
            {description.replace("{x}", `${new Date().getFullYear() - 2020}`)}
          </p>
        )}
        {file?.asset?.url && (
          <div>
            <Button
              variant="default"
              nativeButton={false}
              render={<a href={file.asset.url} download target="_blank" />}
            >
              Get my CV
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
