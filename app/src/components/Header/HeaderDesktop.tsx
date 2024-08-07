import { useRouteLoaderData } from "@remix-run/react";
import { Link, RootLoaderData } from "@app/types/global";
import { Button } from "@app/theme/ui/button";
import { Menu } from "lucide-react";
import { cn } from "@app/utils/utils";
import { HeaderFooter } from "./HeaderFooter";

export const HeaderDesktop: React.FC = () => {
  const root = useRouteLoaderData("root") as RootLoaderData;

  return (
    <div
      className={
        "sticky transition-transform top-0 left-0 w-[15rem] hidden md:flex flex-col bg-[#002b36] h-[100dvh] justify-between px-4 pt-12 pb-4 md:px-12 md:pt-12 md:pb-12 border-r-2 border-r-borderAlt"
      }
    >
      <div className="flex flex-col gap-4">
        {root.navigation.header.links.map((link: Link, index: number) => {
          return (
            <Button
              key={index}
              variant="secondary"
              asChild={!link.link.includes("#")}
              className="text-wrap"
              onClick={() => {
                if (link.link.includes("#")) {
                  const element = document.querySelector(link.link);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
            >
              {!link.link.includes("#") ? (
                <a
                  key={index}
                  href={link.link}
                  target={link.external ? "_blank" : ""}
                  rel="noreferrer"
                >
                  {link.title}
                </a>
              ) : (
                link.title
              )}
            </Button>
          );
        })}
      </div>

      <HeaderFooter social={root.social} />
    </div>
  );
};
