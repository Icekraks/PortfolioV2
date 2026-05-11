import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID ?? "qoxr4rik",
  dataset: process.env.SANITY_DATASET ?? "production",
  token: process.env.SANITY_TOKEN,
  useCdn: true,
  apiVersion: new Date().toISOString().split("T")[0],
  perspective: "published",
});
