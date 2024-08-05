import { SectionsTypes } from "@app/types/global";
import { ObjectSections } from "@app/types/schema";
import Hero from "@app/components/Sections/Hero/Hero";
import Text from "@app/components/Sections/Text/Text";

type Props = {
  sections: ObjectSections;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const sectionsComponents: any = {
  Hero,
  Text,
};

const Sections: React.FC<Props> = ({ sections }) => {
  return sections ? (
    <>
      {sections?.map((section: SectionsTypes, index: number) => {
        const SectionName: string = section._type.replace("object", "");
        const SectionComponent = sectionsComponents[SectionName];

        if (!SectionComponent) return null;
        return (
          <section
            key={section._key}
            id={`section-${index}`}
            data-section-name={SectionName?.toLowerCase()}
          >
            <SectionComponent
              name={SectionName}
              {...section}
              sectionIndex={index}
            />
          </section>
        );
      })}
    </>
  ) : null;
};

export default Sections;
