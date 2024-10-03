import { Header } from "@app/components/Header/Header";
import { useRef } from "react";
import ReturnTop from "@app/components/ReturnTop";
import { RootLoaderData } from "@app/types/global";
import { useRouteLoaderData } from "@remix-run/react";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const mainRef = useRef<HTMLElement>(null);
  const root = useRouteLoaderData("root") as RootLoaderData;

  const isPassword = root?.passwordEnabled;

  return isPassword ? (
    <div className="flex flex-col lg:flex-row">
      <main
        className="w-full lg:w-full bg-[#fdf6e3] h-full min-h-[100dvh]"
        ref={mainRef}
      >
        {children}
      </main>
    </div>
  ) : (
    <div className="flex flex-col lg:flex-row">
      <Header />
      <main
        className="w-full lg:w-[calc(100%-5rem)] bg-[#fdf6e3] h-full min-h-[100dvh]"
        ref={mainRef}
      >
        {children}
        <ReturnTop />
      </main>
    </div>
  );
};
