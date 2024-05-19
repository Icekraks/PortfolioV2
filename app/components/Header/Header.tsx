import React from "react";
import { useRouteLoaderData } from "@remix-run/react";
import { Link, RootLoaderData } from "../../types/schema";

export const Header: React.FC = () => {
  const root = useRouteLoaderData("root") as RootLoaderData;

  console.log(root);
  return (
    <header>
      <div className="flex">
        {root.navigation.header.links.map((link: Link, index: number) => {
          console.log(link);
          return (
            <a
              key={index}
              href={link.link}
              target={link.external ? "_blank" : ""}
              rel="noreferrer"
            >
              {link.title}
            </a>
          );
        })}
      </div>
    </header>
  );
};
