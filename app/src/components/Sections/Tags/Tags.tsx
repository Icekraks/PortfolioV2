import React from "react";
import { ObjectTags } from "@app/types/schema";
import { cn } from "@app/utils/utils";
import { Button } from "@app/theme/ui/button";
import { Link } from "@remix-run/react";

type TagsProps = ObjectTags & {
  sectionIndex: number;
};

const Tags: React.FC<TagsProps> = ({ title, categories, sectionIndex }) => {
  return (
    <div
      className={cn(
        "relative pb-12 px-0 lg:pb-16 2xl:pb-24 md:px-16",
        sectionIndex !== 0 ? "pt-12 lg:pt-16 2xl:pt-24" : ""
      )}
    >
      <div className="max-w-[1440px] mx-auto mb-8">
        {sectionIndex === 0 ? (
          <h1 className="text-primary text-4xl lg:text-6xl font-bold mb-8 w-full">
            {title}
          </h1>
        ) : (
          <h2 className="text-primary text-2xl lg:text-4xl font-bold">
            {title}
          </h2>
        )}

        <div className="flex flex-col lg:flex-row justify-center mt-8 md:px-10 lg:px-16 w-full gap-4 lg:gap-8">
          {categories &&
            categories.map((category, index) => (
              <div key={index} className="flex flex-col w-full mb-4">
                <h4 className="text-primary text-lg font-bold mb-4 text-left">
                  {category.text}
                </h4>
                <div className="flex flex-wrap">
                  {category.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-sm bg-primary text-primary-foreground rounded-full px-4 py-1 mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Tags;
