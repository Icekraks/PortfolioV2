import { cn } from "@portfolio/ui/utils";
import Hero from "./hero/Hero";
import Text from "./text/Text";
import Tags from "./tags/Tags";
import Featured from "./featured/Featured";
import FeaturedCarousel from "./featured-carousel/FeaturedCarousel";
import Contact from "./contact/Contact";
import CTA from "./cta/CTA";
import type { Section } from "@portfolio/sanity";

type Props = {
  sections?: Section[];
};

const sectionComponents: Record<string, React.ComponentType<any>> = {
  Hero,
  Text,
  Tags,
  Featured,
  FeaturedCarousel,
  Contact,
  CTA,
};

const Sections: React.FC<Props> = ({ sections }) => {
  if (!sections) return null;

  return (
    <>
      {sections.map((section, index) => {
        const componentName = section._type.replace("object", "");
        const SectionComponent = sectionComponents[componentName];
        if (!SectionComponent) return null;

        return (
          <section
            key={section._key}
            id={`section-${index}`}
            data-section-name={componentName.toLowerCase()}
            className={cn(index !== 0 && "scroll-mt-10 md:scroll-mt-0")}
          >
            <SectionComponent {...section} sectionIndex={index} />
          </section>
        );
      })}
    </>
  );
};

export default Sections;
