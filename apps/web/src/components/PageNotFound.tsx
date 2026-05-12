"use client";

import { useRoot } from "@/providers/root-provider";

const PageNotFound: React.FC = () => {
  const root = useRoot();
  const { title, description } = root.notFound ?? {};

  return (
    <div className="w-full py-12 px-8 lg:py-16 2xl:py-24 lg:px-16 h-[93dvh] flex flex-col items-center justify-center">
      <h1 className="mt-4 text-4xl lg:text-6xl font-bold text-[#002b36] mb-4 text-center">
        {title ?? "Page not found"}
      </h1>
      <p className="text-primary md:px-10 lg:px-16 mb-8 w-full text-center">
        {description ?? "The page you are looking for does not exist."}
      </p>
    </div>
  );
};

export default PageNotFound;
