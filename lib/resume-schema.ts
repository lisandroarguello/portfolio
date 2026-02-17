import { z } from 'zod';

const LinkSchema = z.object({
  label: z.string(),
  url: z.string().url(),
});

const LocalizedSchema = z.object({
  es: z.string(),
  en: z.string(),
});

const SkillCategorySchema = z.object({
  category: LocalizedSchema,
  items: z.array(z.string()),
});

const ExperienceSchema = z.object({
  company: z.string(),
  role: LocalizedSchema,
  startDate: z.string(),
  endDate: z.string(),
  location: z.string(),
  summary: LocalizedSchema,
  highlights: z.array(LocalizedSchema),
});

const ProjectSchema = z.object({
  slug: z.string(),
  name: z.string(),
  period: z.string(),
  description: LocalizedSchema,
  stack: z.array(z.string()),
  highlights: z.array(LocalizedSchema),
  links: z.array(LinkSchema),
});

export const ResumeSchema = z.object({
  basics: z.object({
    name: z.string(),
    role: LocalizedSchema,
    location: z.string(),
    email: z.string().email(),
    phone: z.string().optional(),
    summary: LocalizedSchema,
    links: z.array(LinkSchema),
  }),
  extras: z.object({
    about: LocalizedSchema,
    services: z.array(LocalizedSchema),
    availability: LocalizedSchema,
  }),
  skills: z.array(SkillCategorySchema),
  experience: z.array(ExperienceSchema),
  projects: z.array(ProjectSchema).min(3).max(8),
  education: z.array(
    z.object({
      institution: z.string(),
      degree: z.string(),
      period: z.string(),
      details: LocalizedSchema,
    }),
  ),
  certifications: z.array(z.string()).optional(),
  languages: z.array(z.object({ name: z.string(), level: LocalizedSchema })).optional(),
});

export type Resume = z.infer<typeof ResumeSchema>;
export type Lang = 'es' | 'en';
