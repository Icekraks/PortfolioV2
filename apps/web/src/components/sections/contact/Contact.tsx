"use client";

import Link from "next/link";
import { Button } from "@portfolio/ui/button";
import { cn } from "@portfolio/ui/utils";
import { useRoot } from "@/providers/root-provider";
import type { SectionContact } from "@portfolio/sanity";

type ContactProps = SectionContact & { sectionIndex: number };

function currentGreeting() {
  const h = new Date().getHours();
  if (h >= 5 && h < 12) return "Good morning!";
  if (h >= 12 && h < 17) return "Good afternoon!";
  if (h >= 17 && h < 21) return "Good evening!";
  return "Good night!";
}

const Contact: React.FC<ContactProps> = ({
  title,
  description,
  sectionIndex,
}) => {
  const { social } = useRoot();

  return (
    <div
      className={cn(
        "relative mb-12 lg:mb-16 2xl:mb-24 px-4 md:px-16",
        sectionIndex !== 0 && "mt-12 lg:mt-16 2xl:mt-24"
      )}
    >
      <div className="flex flex-col md:flex-row w-full items-center max-w-[1440px] mx-auto">
        <div>
          <h1 className="text-primary text-[2rem] lg:text-[5.5rem] xl:text-[8rem] font-bold mb-8 w-full">
            {currentGreeting()}
          </h1>
          <p className="w-full lg:w-[600px] text-primary md:px-10 lg:px-16 mb-8">
            {description}
          </p>
          <div className="flex flex-col w-full md:px-10 lg:px-16">
            {social?.email && (
              <div>
                <span className="text-primary pr-1 font-bold">Email me:</span>
                <Button
                  className="px-0"
                  variant="link"
                  size="sm"
                  render={
                    <Link
                      href={`mailto:${social.email}`}
                      target="_blank"
                      rel="noreferrer"
                    />
                  }
                >
                  {social.email}
                </Button>
              </div>
            )}
            <div className="flex items-center">
              <span className="text-primary pr-1 font-bold">Socials:</span>
              {social?.linkedin && (
                <Button
                  className="px-0 mr-1"
                  variant="link"
                  size="sm"
                  render={
                    <Link
                      href={social.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    />
                  }
                >
                  LinkedIn
                </Button>
              )}
              {social?.github && (
                <Button
                  className="px-0 mr-1"
                  variant="link"
                  size="sm"
                  render={
                    <Link
                      href={social.github}
                      target="_blank"
                      rel="noreferrer"
                    />
                  }
                >
                  Github
                </Button>
              )}
              {social?.youtube && (
                <Button
                  className="px-0"
                  variant="link"
                  size="sm"
                  render={
                    <Link
                      href={social.youtube}
                      target="_blank"
                      rel="noreferrer"
                    />
                  }
                >
                  Youtube
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
