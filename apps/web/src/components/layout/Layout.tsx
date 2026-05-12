"use client";

import { useRoot } from "@/providers/root-provider";
import { Header } from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ReturnTop from "@/components/ReturnTop";
import { Analytics } from "@vercel/analytics/next";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { passwordEnabled } = useRoot();

  if (passwordEnabled) {
    return (
      <div className="flex flex-col min-h-dvh">
        <main className="w-full bg-[#fdf6e3] flex-1">{children}</main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-dvh">
      <Analytics />
      <Header />
      <main className="w-full bg-[#fdf6e3] flex-1">
        {children}
        <ReturnTop />
      </main>
      <Footer />
    </div>
  );
};
