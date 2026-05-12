"use client";

import { Button } from "@portfolio/ui/button";
import { Github, Linkedin, Mail, Youtube } from "lucide-react";
import Link from "next/link";
import type { SanitySocial } from "@portfolio/sanity";

type HeaderFooterProps = {
  social: SanitySocial;
};

export const HeaderFooter: React.FC<HeaderFooterProps> = ({ social }) => {
  return (
    <>
      {social.email && (
        <Button
          variant="outline"
          size="icon"
          nativeButton={false}
          render={
            <Link
              href={`mailto:${social.email}`}
              target="_blank"
              rel="noreferrer"
            />
          }
        >
          <Mail />
        </Button>
      )}
      {social.linkedin && (
        <Button
          variant="outline"
          size="icon"
          nativeButton={false}
          render={
            <Link href={social.linkedin} target="_blank" rel="noreferrer" />
          }
        >
          <Linkedin />
        </Button>
      )}
      {social.github && (
        <Button
          variant="outline"
          size="icon"
          nativeButton={false}
          render={
            <Link href={social.github} target="_blank" rel="noreferrer" />
          }
        >
          <Github />
        </Button>
      )}
      {social.youtube && (
        <Button
          variant="outline"
          size="icon"
          nativeButton={false}
          render={
            <Link href={social.youtube} target="_blank" rel="noreferrer" />
          }
        >
          <Youtube />
        </Button>
      )}
    </>
  );
};
