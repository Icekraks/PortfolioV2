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

  const location = useLocation();

  return (
    <div
      className={
        "sticky transition-transform top-0 left-0 w-full max-w-[5rem] hidden md:flex flex-col bg-[#002b36] h-[100dvh] justify-between  pt-12 pb-4  md:pt-12 md:pb-12 border-r-2 border-r-borderAlt"
      }
    >
      {/* <div className="flex flex-col gap-4">
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
                    window.location.hash = link.link;
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
      </div> */}
      {location.pathname !== "/" && (
        <div className="flex md:flex-col justify-center items-center gap-2 md:gap-8">
          <Button variant="outline" size="icon" asChild>
            <RemixLink to="/">
              <Home />
            </RemixLink>
          </Button>
        </div>
      )}
      {location.pathname === "/" && <HeaderFooter social={root.social} />}
      <div className="flex items-center justify-center">
        <h4 className="text-secondary text-md md:text-xl sidewaysText">{`${new Date().getFullYear()} © Felix Hu`}</h4>
      </div>
    </div>
  );
};
