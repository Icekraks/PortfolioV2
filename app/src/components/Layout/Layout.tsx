import { Header } from "../Header/Header";
import { useRef } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const mainRef = useRef<HTMLElement>(null);

  return (
    <div className="flex flex-col md:flex-row">
      <Header />
      <main className="w-full bg-[#fdf6e3]" ref={mainRef}>
        {children}
      </main>
    </div>
  );
};
