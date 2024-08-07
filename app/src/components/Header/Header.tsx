import React, { useEffect, useState } from "react";

import { useMedia } from "@app/hooks/useMedia";
import { HeaderDesktop } from "@app/components/Header/HeaderDesktop";
import { HeaderMobile } from "@app/components/Header/HeaderMobile";

export const Header: React.FC = () => {
  const { isMd } = useMedia();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMd) {
      setIsMenuOpen(false);
    }
  }, [isMd]);

  return (
    <header className="bg-[#002b36] w-full md:w-[unset] p-4  md:p-0 sticky md:static top-0 left-0 z-10">
      <HeaderDesktop />
      <HeaderMobile isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </header>
  );
};
