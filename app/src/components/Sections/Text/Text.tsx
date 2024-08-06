import { ObjectText } from "@app/types/schema";

export type TextProps = ObjectText & {
  sectionIndex: number;
};

const Text: React.FC<TextProps> = ({ title, description }) => {
  return (
    <div className="bg-[#fdf6e3] relative py-12 px-8 md:py-24 md:px-16 h-[100dvh] max-h-[500px] md:max-h-[700px] scroll-pt-[144px]">
      <div className="flex flex-col w-full items-center max-w-[1440px] mx-auto">
        <h2 className="text-primary text-2xl md:text-4xl font-bold mb-4 w-full">
          {title}
        </h2>
        <p className="text-primary md:px-16">{description}</p>
      </div>
    </div>
  );
};

export default Text;
