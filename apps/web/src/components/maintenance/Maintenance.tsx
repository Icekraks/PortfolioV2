"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@portfolio/ui/button";
import { Input } from "@portfolio/ui/input";
import { Eye, EyeOff } from "lucide-react";
import type { SanityMaintenance } from "@portfolio/sanity";

type MaintenanceProps = SanityMaintenance & {
  returnUrl: string;
  action: (formData: FormData) => void;
};

export const Maintenance: React.FC<MaintenanceProps> = ({
  title,
  subtitle,
  description,
  password,
  returnUrl,
  action,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative h-[100dvh] max-h-[1000px] pb-12 lg:pb-16 2xl:pb-20 px-4 md:px-16 pt-12 lg:pt-16 2xl:pt-20">
      <div className="flex flex-col w-full items-center max-w-screen-2xl mx-auto">
        <h1 className="mt-6 text-4xl lg:text-6xl text-center text-primary">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm text-primary md:px-10 lg:px-16 mb-8 w-full text-center">
            {subtitle}
          </p>
        )}

        <div className="flex flex-col max-w-[40rem] mx-auto">
          {description && (
            <p className="text-primary px-4 md:px-10 lg:px-16 w-full text-center">
              {description}
            </p>
          )}
          <div className="mt-20 mx-auto">
            <form action={action}>
              <input type="hidden" name="originalPassword" value={password ?? ""} />
              <input type="hidden" name="returnUrl" value={returnUrl} />
              <div className="flex flex-col items-center gap-4">
                <div className="flex flex-col w-[30rem]">
                  <label htmlFor="password" className="text-primary">
                    Password
                  </label>
                  <div className="relative">
                    <Input
                      id="password"
                      variant="inverted"
                      name="password"
                      type={show ? "text" : "password"}
                    />
                    <Button
                      className="absolute right-0 top-1/2 -translate-y-1/2"
                      size="icon"
                      variant="ghost"
                      type="button"
                      onClick={() => setShow(!show)}
                    >
                      {show ? (
                        <EyeOff className="w-6 h-6" />
                      ) : (
                        <Eye className="w-6 h-6" />
                      )}
                    </Button>
                  </div>
                </div>
                <Button size="lg" type="submit">
                  Login
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
