import React from "react";
import type { ObjectHero } from "@app/types/schema";

type HeroProps = ObjectHero & {
  sectionIndex: number;
};

const Hero: React.FC<HeroProps> = ({ name, title, subtitle, sectionIndex }) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-4xl font-bold">hi iam the hero banner</h1>
    </div>
  );
};

export default Hero;
