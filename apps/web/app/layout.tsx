import type { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import "./globals.css";
import { sanityClient, ROOT_QUERY, type SanityRootData } from "@portfolio/sanity";
import { QueryProvider } from "@/providers/query-provider";
import { RootProvider } from "@/providers/root-provider";
import { getSession } from "@/lib/session";
import { Layout } from "@/components/layout/Layout";
import type { RootData } from "@/types/global";

export const metadata: Metadata = {
  title: "Felix Hu",
  description: "Portfolio of Felix Hu",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") ?? "/";

  const [sanityData, session] = await Promise.all([
    sanityClient.fetch<SanityRootData>(
      ROOT_QUERY,
      {},
      { next: { revalidate: 60 } }
    ),
    getSession(),
  ]);

  const maintenanceOn = sanityData?.maintenance?.maintenanceMode ?? false;
  const hasSession = !!session.maintenanceMode;
  const passwordEnabled = maintenanceOn && !hasSession;

  const isPasswordPage = pathname === "/password";
  const isApiRoute = pathname.startsWith("/api/");

  if (!isPasswordPage && !isApiRoute && passwordEnabled) {
    redirect(`/password?continue=${encodeURIComponent(pathname)}`);
  }

  const rootData: RootData = {
    ...sanityData,
    passwordEnabled,
  };

  return (
    <html lang="en">
      <body className="bg-white">
        <QueryProvider>
          <RootProvider data={rootData}>
            <Layout>{children}</Layout>
          </RootProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
