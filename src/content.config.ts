import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const posts = defineCollection({
  loader: glob({ base: "./src/content/posts", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    language: z.enum(["en", "ko"]),
    track: z.enum(["professional", "personal", "culture", "creative"]),
    format: z.enum(["essay", "photo"]).default("essay"),
    featured: z.boolean().default(false),
    status: z.enum(["draft", "published"]).default("draft"),
    cover: z.string().optional(),
  }),
});

const work = defineCollection({
  loader: glob({ base: "./src/content/work", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    kind: z.enum(["project", "paper", "talk"]),
    summary: z.string(),
    year: z.number(),
    authors: z.array(z.string()).default([]),
    venue: z.string().optional(),
    topics: z.array(z.string()).default([]),
    links: z
      .object({
        repo: z.string().url().optional(),
        demo: z.string().url().optional(),
        paper: z.string().url().optional(),
        slides: z.string().url().optional(),
      })
      .default({}),
    featured: z.boolean().default(false),
    status: z.enum(["draft", "published"]).default("draft"),
    language: z.enum(["en", "ko"]).default("en"),
    cover: z.string().optional(),
  }),
});

export const collections = { posts, work };
