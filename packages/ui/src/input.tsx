"use client";

import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import { cn } from "./utils";

const inputVariants = cva(
  "flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground file:text-primary-foreground border-primary",
        inverted: "bg-secondary text-secondary-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputVariants>;

export const Input = ({
  className,
  variant,
  type = "text",
  ...props
}: InputProps) => {
  return (
    <input
      type={type}
      className={cn(inputVariants({ variant }), className)}
      {...props}
    />
  );
};
