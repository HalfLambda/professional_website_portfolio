import { defineCollection, z } from 'astro:content';

const architectureCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    role: z.string(),
    domain: z.string(),
    tech: z.array(z.string()),
    metrics: z.array(
      z.object({
        label: z.string(),
        value: z.string(),
      })
    ),
    summary: z.string(),
    featured: z.boolean().default(false),
  }),
});

const labsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum([
      'Agentic Systems & MCP',
      'Information Retrieval & RAG',
      'Media & Data Automation',
      'Open Source Tooling',
    ]),
    tech: z.array(z.string()),
    status: z.enum(['Completed', 'Active Lab', 'In Progress']).default('Active Lab'),
    githubUrl: z.string().optional(),
    youtubeUrl: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  architecture: architectureCollection,
  labs: labsCollection,
};
