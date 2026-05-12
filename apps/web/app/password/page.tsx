import { redirect } from "next/navigation";
import { notFound } from "next/navigation";
import { sanityClient, PASSWORD_QUERY, type SanityMaintenance } from "@portfolio/sanity";
import { getSession } from "@/lib/session";
import { Maintenance } from "@/components/maintenance/Maintenance";

type Props = {
  searchParams: Promise<{ continue?: string }>;
};

async function handlePasswordSubmit(formData: FormData) {
  "use server";

  const password = formData.get("password") as string;
  const originalPassword = formData.get("originalPassword") as string;
  const returnUrl = (formData.get("returnUrl") as string) || "/";

  if (password === originalPassword) {
    const session = await getSession();
    session.maintenanceMode = true;
    await session.save();
    redirect(returnUrl);
  }
}

export default async function PasswordPage({ searchParams }: Props) {
  const { continue: returnUrl = "/" } = await searchParams;

  const [page, session] = await Promise.all([
    sanityClient.fetch<SanityMaintenance>(
      PASSWORD_QUERY,
      {},
      { next: { revalidate: 30 } }
    ),
    getSession(),
  ]);

  if (session.maintenanceMode || !page?.maintenanceMode) {
    redirect("/");
  }

  if (!page) notFound();

  return (
    <Maintenance
      {...page}
      returnUrl={returnUrl}
      action={handlePasswordSubmit}
    />
  );
}
