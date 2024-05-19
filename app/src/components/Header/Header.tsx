import React from "react";
import { useRouteLoaderData } from "@remix-run/react";
import { Link, RootLoaderData } from "@app/types/schema";
import { Button } from "@app/theme/ui/button";

export const Header: React.FC = () => {
  const root = useRouteLoaderData("root") as RootLoaderData;

  console.log(root);
  return (
    <header>
      <div className="flex">
        {root.navigation.header.links.map((link: Link, index: number) => {
          console.log(link);
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
