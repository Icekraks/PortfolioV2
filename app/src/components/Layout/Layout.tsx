import { Header } from "@app/components/Header/Header";
import { useRef } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const mainRef = useRef<HTMLElement>(null);

  return (
    <div className="flex flex-col lg:flex-row">
      <Header />
      <main className="w-full bg-[#fdf6e3] h-full min-h-[100dvh]" ref={mainRef}>
        {children}
      </main>
    </div>
  );
};
