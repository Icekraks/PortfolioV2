import LoadingBarAnimation from "@app/components/LoadingBarAnimation";
import { ResponsiveImage } from "@app/components/ResponsiveImage";
import { INDEX_QUERY } from "@app/graphql/queries";
import { Button } from "@app/theme/ui/button";
import { defer } from "@remix-run/node";
import { useLoaderData, useRouteLoaderData } from "@remix-run/react";
import { SanityClient } from "@root/server";

export default function Index() {
  const { title, subtitle, description, image, file } =
    useLoaderData<typeof loader>();

  return (
    <div className="py-12 px-8 lg:py-8 2xl:py-12 lg:px-16 max-w-screen-2xl mx-auto">
      <LoadingBarAnimation />
      <div className="flex flex-col items-center gap-3 mx-auto w-full lg:max-w-[50%]">
        {image && image.asset && (
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
        <div>
          {file && (
            <Button variant="default" asChild>
              <a href={file.asset.url} download target="_blank">
                Get my CV
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export async function loader() {
  const response = await SanityClient.fetch(INDEX_QUERY);

  return defer({
    ...response,
  });
}
