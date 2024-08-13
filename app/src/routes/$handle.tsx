import { ResponsiveImage } from "@app/components/ResponsiveImage";
import Sections from "@app/components/Sections/Sections";
import { PAGE_QUERY } from "@app/graphql/queries/page";

import { Button } from "@app/theme/ui/button";
import { Link, RootLoaderData } from "@app/types/global";
import { defer, LoaderFunctionArgs, json } from "@remix-run/node";
import {
  Link as RemixLink,
  useLoaderData,
  useRouteLoaderData,
} from "@remix-run/react";
import { SanityClient } from "@root/server";

const Page: React.FC = () => {
  const { sections } = useLoaderData<typeof loader>();
  return (
    <div className="w-[100%] py-12 px-8 lg:py-16 2xl:py-24 lg:px-16">
      <Sections sections={sections} />
    </div>
  );
};

export async function loader({ params }: LoaderFunctionArgs) {
  const { handle } = params;
  const response = await SanityClient.fetch(PAGE_QUERY, { handle });
  if (!response) throw new Response(null, { status: 404 });

  return json({
    ...response,
  });
}

export default Page;
