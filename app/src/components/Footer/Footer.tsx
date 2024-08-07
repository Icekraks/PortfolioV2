import React from "react";

const Footer: React.FC<React.PropsWithChildren> = () => {
  return (
    <div className="flex justify-end py-4 px-8 lg:px-16">
      <h4 className="text-primary text-xl md:text-2xl">{`${new Date().getFullYear()} © Felix Hu`}</h4>
    </div>
  );
};

export default Footer;
