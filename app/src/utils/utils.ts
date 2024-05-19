import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { createClient } from "@sanity/client";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  token: process.env.SANITY_TOKEN,
  useCdn: true,
  apiVersion: new Date().toISOString().split("T")[0],
});
