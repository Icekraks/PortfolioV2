import { Header } from "../Header/Header";
import { useRef } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const mainRef = useRef<HTMLElement>(null);

  return (
    <div>
      <Header />
      <main ref={mainRef}>{children}</main>
    </div>
  );
};
