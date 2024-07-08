import { defineCollection, z } from "astro:content";

const legalCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string(),
    description: z.string(),
    date: z.date(),
  }),
});

export const collections = {
  legal: legalCollection,
};
