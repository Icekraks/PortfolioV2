/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Button } from "@app/theme/ui/button";
import { Link, RootLoaderData } from "@app/types/global";
import { useRouteLoaderData } from "@remix-run/react";
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
      <Button
        variant="secondary"
        className="md:hidden z-50"
        onClick={() => {
          console.log("clicked");
          setIsOpen(!isOpen);
        }}
      >
        <Menu />
      </Button>
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
            <Button className="ml-[auto]" onClick={() => setIsOpen(false)}>
              <X />
            </Button>
          </div>
          <div className="flex flex-col gap-4 flex-grow overflow-y-auto py-4">
            {root.navigation.header.links.map((link: Link, index: number) => {
              return (
                <Button key={index} variant="secondary" asChild>
                  <a
                    key={index}
                    href={link.link}
                    target={link.external ? "_blank" : ""}
                    rel="noreferrer"
                  >
                    {link.title}
                  </a>
                </Button>
              );
            })}
          </div>

          <div className="mt-auto pt-4">
            <HeaderFooter social={root.social} />
          </div>
        </div>
      </div>
    </>
  );
};
