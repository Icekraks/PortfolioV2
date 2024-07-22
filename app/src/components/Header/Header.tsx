import React, { useEffect } from "react";
import { useRouteLoaderData } from "@remix-run/react";
import { Link, RootLoaderData } from "@app/types/schema";
import { Button } from "@app/theme/ui/button";
import { Github, Linkedin, Mail, Menu, Youtube } from "lucide-react";
import { cn } from "@app/utils/utils";
import { useMedia } from "@app/hooks/useMedia";

export const Header: React.FC = () => {
  const root = useRouteLoaderData("root") as RootLoaderData;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const isMd = useMedia();

  useEffect(() => {
    if (isMd) {
      setIsMenuOpen(false);
    }
  }, [isMd]);

  return (
    <header>
      <div
        className={cn(
          "fixed md:sticky md:translate-x-0 transition-transform top-0 left-0 w-[15rem] flex flex-col bg-[#002b36] h-[100dvh] justify-between px-4 pt-12 pb-4 md:px-12 md:pt-12 md:pb-12",
          isMenuOpen ? "translate-x-0" : "translate-x-[-100%]"
        )}
      >
        <div className="flex flex-col gap-4">
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
        <Button variant="secondary" onClick={(e) => console.log(e, "clicked")}>
          <Menu />
        </Button>
        <div className="flex md:flex-col justify-center items-center gap-2 md:gap-8">
          {root.social.email && (
            <Button variant="outline" size="icon" asChild>
              <a
                href={`mailto:${root.social.email}`}
                target="_blank"
                rel="noreferrer"
              >
                <Mail />
              </a>
            </Button>
          )}
          {root.social.linkedin && (
            <Button variant="outline" size="icon" asChild>
              <a href={root.social.linkedin} target="_blank" rel="noreferrer">
                <Linkedin />
              </a>
            </Button>
          )}
          {root.social.github && (
            <Button variant="outline" size="icon" asChild>
              <a href={root.social.github} target="_blank" rel="noreferrer">
                <Github />
              </a>
            </Button>
          )}
          {root.social.youtube && (
            <Button variant="outline" size="icon" asChild>
              <a href={root.social.youtube} target="_blank" rel="noreferrer">
                <Youtube />
              </a>
            </Button>
          )}
        </div>
      </div>
      <Button
        variant="secondary"
        className="fixed top-4 left-4 md:hidden z-50"
        onClick={() => console.log("clicked")}
      >
        <Menu />
      </Button>
    </header>
  );
};
