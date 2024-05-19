import React from "react";
import { useRouteLoaderData } from "@remix-run/react";
import { Link, RootLoaderData } from "@app/types/schema";
import { Button } from "@app/theme/ui/button";

export const Header: React.FC = () => {
  const root = useRouteLoaderData("root") as RootLoaderData;

  return (
    <header>
      <div className="flex py-12 px-12">
        {root.navigation.header.links.map((link: Link, index: number) => {
          return (
            <Button key={index} asChild>
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
    </header>
  );
};
