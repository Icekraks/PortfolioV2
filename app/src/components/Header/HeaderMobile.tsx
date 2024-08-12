/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Button } from "@app/theme/ui/button";
import { Link, RootLoaderData } from "@app/types/global";
import { Link as RemixLink, useRouteLoaderData } from "@remix-run/react";
import { HeaderFooter } from "@app/components/Header/HeaderFooter";
import { cn } from "@app/utils/utils";
import { Menu, X } from "lucide-react";

export type HeaderMobileProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const HeaderMobile: React.FC<HeaderMobileProps> = ({
  isOpen,
  setIsOpen,
}: HeaderMobileProps) => {
  const root = useRouteLoaderData("root") as RootLoaderData;

  return (
    <>
      <div className="flex md:hidden items-center justify-between">
        <Button
          variant="secondary"
          className="md:hidden z-50"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <Menu />
        </Button>
        {root.navigation.headerTitle ? (
          <h1>{root.navigation.headerTitle}</h1>
        ) : null}
      </div>
      <div
        onClick={() => setIsOpen(false)}
        className={cn(
          "fixed top-0 left-0 w-full h-full z-[49] bg-black opacity-20 cursor-pointer",
          isOpen ? "block" : "hidden"
        )}
      />
      <div
        className={cn(
          "md:hidden fixed transition-transform top-0 left-0 w-[90dvw] bg-[#002b36] h-[100dvh] px-4 pt-4 pb-4 z-50",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="relative h-full  flex flex-col">
          <div className="header flex">
            <h1>{root.navigation.headerTitle}</h1>
            <Button className="ml-[auto]" onClick={() => setIsOpen(false)}>
              <X />
            </Button>
          </div>
          <div className="flex flex-col gap-4 flex-grow overflow-y-auto py-4">
            {root.navigation.header.links.map((link: Link, index: number) => {
              return (
                <Button
                  key={index}
                  variant="secondary"
                  asChild={!link.link.includes("#")}
                  onClick={() => {
                    if (link.link.includes("#")) {
                      const element = document.querySelector(link.link);
                      if (element) {
                        setIsOpen(false);
                        if (index === 0) {
                          window.location.hash = "";
                          window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          });
                        } else {
                          window.location.hash = link.link;
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }
                    }
                  }}
                >
                  {!link.link.includes("#") ? (
                    <RemixLink
                      key={index}
                      to={link.link}
                      target={link.external ? "_blank" : ""}
                      rel="noreferrer"
                    >
                      {link.title}
                    </RemixLink>
                  ) : (
                    link.title
                  )}
                </Button>
              );
            })}
          </div>

          <div className="mt-auto pt-4 mb-6">
            <HeaderFooter social={root.social} />
          </div>

          <div className="flex items-center justify-center">
            <h4 className="text-secondary text-md md:text-xl">{`${new Date().getFullYear()} © Felix Hu`}</h4>
          </div>
        </div>
      </div>
    </>
  );
};
