import {
  Link as RemixLink,
  useLocation,
  useRouteLoaderData,
} from "@remix-run/react";
import { Link, RootLoaderData } from "@app/types/global";
import { Button } from "@app/theme/ui/button";
import { HeaderFooter } from "./HeaderFooter";
import { Home } from "lucide-react";

export const HeaderDesktop: React.FC = () => {
  const root = useRouteLoaderData("root") as RootLoaderData;

  return (
    <div
      className={
        "sticky transition-transform top-0 left-0 w-full lg:max-w-[5rem] hidden lg:flex flex-col bg-[#002b36] h-[100dvh] justify-between  pt-12 pb-4  lg:pt-12 md:pb-12 border-r-2 border-r-borderAlt"
      }
    >
      <HeaderFooter social={root.social} />
      <div className="flex items-center justify-center">
        <h4 className="text-secondary text-md lg:text-xl sidewaysText">{`${new Date().getFullYear()} © Felix Hu`}</h4>
      </div>
    </div>
  );
};
