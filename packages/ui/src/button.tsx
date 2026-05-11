"use client";

import { Button as BaseButton } from "@base-ui-components/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import { cn } from "./utils";

const buttonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "bg-transparent text-secondary-foreground hover:bg-secondary/80",
        link: "text-primary underline-offset-4 hover:underline",
        linkInvert:
          "text-primary-foreground underline-offset-4 hover:underline",
        headingLink:
          "font-serif text-primary underline-offset-4 hover:underline",
        headingDefault:
          "font-serif bg-primary text-primary-foreground hover:bg-primary/90",
        headingSecondary:
          "font-serif bg-secondary text-secondary-foreground hover:bg-secondary/80",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type ButtonProps = React.ComponentPropsWithRef<typeof BaseButton> &
  VariantProps<typeof buttonVariants> & {
    render?: React.ReactElement | ((props: Record<string, unknown>) => React.ReactElement);
  };

export function Button({ className, variant, size, render, ...props }: ButtonProps) {
  return (
    <BaseButton
      className={cn(buttonVariants({ variant, size, className }))}
      render={render}
      {...props}
    />
  );
}

export { buttonVariants };
