import { notFound } from "next/navigation";
import { sanityClient, PAGE_QUERY, type SanityPage } from "@portfolio/sanity";
import Sections from "@/components/sections/Sections";

export const revalidate = 60;

type Props = {
  params: Promise<{ handle: string }>;
};

export default async function DynamicPage({ params }: Props) {
  const { handle } = await params;

  const data = await sanityClient.fetch<SanityPage>(
    PAGE_QUERY,
    { handle },
    { next: { revalidate: 60 } }
  );

  if (!data) notFound();

  return (
    <div className="w-full py-12 lg:py-16 2xl:py-24">
      <Sections sections={data.sections} />
    </div>
  );
}
