"use client";

import { useRoot } from "@/providers/root-provider";
import { Header } from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ReturnTop from "@/components/ReturnTop";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { passwordEnabled } = useRoot();

  if (passwordEnabled) {
    return (
      <div className="flex flex-col">
        <main className="w-full bg-[#fdf6e3] h-full">{children}</main>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <Header />
      <main className="w-full bg-[#fdf6e3] h-full">
        {children}
        <ReturnTop />
      </main>
      <Footer />
    </div>
  );
};
