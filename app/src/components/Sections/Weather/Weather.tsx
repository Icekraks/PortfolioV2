import { Button } from "@app/theme/ui/button";
import { Input } from "@app/theme/ui/input";
import { ObjectWeather } from "@app/types/schema";
import { cn } from "@app/utils/utils";

export type WeatherProps = ObjectWeather & {
  sectionIndex: number;
};

const Weather: React.FC<WeatherProps> = ({
  title,
  description,
  sectionIndex,
}: WeatherProps) => {
  return (
    <div
      className={cn(
        "relative mb-12 lg:mb-16 2xl:mb-24 px-4 md:px-16",
        sectionIndex !== 0 ? "mt-12 lg:mt-16 2xl:mt-24" : ""
      )}
    >
      <div className="flex flex-col w-full items-center max-w-[1440px] mx-auto">
        {sectionIndex === 0 ? (
          <h1 className="text-primary text-4xl lg:text-6xl font-bold mb-8 w-full">
            {title}
          </h1>
        ) : (
          <h2 className="text-primary text-2xl lg:text-4xl font-bold mb-4 w-full">
            {title}
          </h2>
        )}
        <p className="text-primary md:px-10 lg:px-16 mb-8 w-full">
          {description}
        </p>
        <div className="flex gap-4 w-full md:px-10 lg:px-16">
          <div className="flex relative">
            <Input className="pr-10" />
            <Button size="icon"></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
