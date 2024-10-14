import {
  Link as RemixLink,
  useLocation,
  useRouteLoaderData,
} from "@remix-run/react";
import { RootLoaderData } from "@app/types/global";
import { Button } from "@app/theme/ui/button";
import { HeaderFooter } from "./HeaderFooter";
import { Home, Phone, User, ArrowRightSquare, Puzzle } from "lucide-react";
import { cn } from "@app/utils/utils";

export const HeaderDesktop: React.FC = () => {
  const root = useRouteLoaderData("root") as RootLoaderData;

  const location = useLocation();

  console.log(root.navigation.header);

  return (
    <div
      className={cn(
        "hidden lg:flex mx-auto border-b-[1px] bg-[#002b36] sticky top-0 z-50 transition-background ease-in-out duration-100"
      )}
    >
      <div className="flex justify-center items-center gap-2 lg:gap-8">
        {root.navigation.header && root.navigation.header.linksNew && (
          <nav className="flex gap-4 pt-1 px-8 max-w-screen-2xl mx-auto">
            <Button asChild variant="linkInvert">
              <RemixLink to="/" rel="noreferrer">
                Home
              </RemixLink>
            </Button>
            {root.navigation.header.linksNew.map((link, index) => (
              <Button key={index} asChild variant="linkInvert">
                <RemixLink
                  aria-label={link.link.title}
                  to={link.link.link}
                  rel="noreferrer"
                >
                  {link.link.title}
                </RemixLink>
              </Button>
            ))}
          </nav>
        )}
      </div>

      <div className="flex items-center justify-center ml-auto pr-8">
        <h4 className="font-sans text-secondary text-md lg:text-xl">{`${new Date().getFullYear()} © Felix Hu`}</h4>
      </div>
    </div>
  );
};
