import { SocialMedia } from "@app/types/global";
import React from "react";
import { Button } from "@app/theme/ui/button";
import { Github, Linkedin, Mail, Youtube } from "lucide-react";

type HeaderFooterProps = {
  social: SocialMedia;
};

export const HeaderFooter: React.FC<HeaderFooterProps> = ({ social }) => {
  return (
    <div className="flex md:flex-col justify-center items-center gap-2 md:gap-8">
      {social.email && (
        <Button variant="outline" size="icon" asChild>
          <a href={`mailto:${social.email}`} target="_blank" rel="noreferrer">
            <Mail />
          </a>
        </Button>
      )}
      {social.linkedin && (
        <Button variant="outline" size="icon" asChild>
          <a href={social.linkedin} target="_blank" rel="noreferrer">
            <Linkedin />
          </a>
        </Button>
      )}
      {social.github && (
        <Button variant="outline" size="icon" asChild>
          <a href={social.github} target="_blank" rel="noreferrer">
            <Github />
          </a>
        </Button>
      )}
      {social.youtube && (
        <Button variant="outline" size="icon" asChild>
          <a href={social.youtube} target="_blank" rel="noreferrer">
            <Youtube />
          </a>
        </Button>
      )}
    </div>
  );
};
