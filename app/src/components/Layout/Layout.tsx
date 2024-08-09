import { Header } from "@app/components/Header/Header";
import Footer from "@app/components/Footer/Footer";
import { useRef } from "react";
import ReturnTop from "@app/components/ReturnTop";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const mainRef = useRef<HTMLElement>(null);

  return (
    <div className="flex flex-col md:flex-row">
      <Header />
      <main className="w-full bg-[#fdf6e3] relative" ref={mainRef}>
        {children}
        <ReturnTop />
        <Footer />
      </main>
    </div>
  );
};
