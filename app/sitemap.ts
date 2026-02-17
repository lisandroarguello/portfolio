import type { MetadataRoute } from 'next';
import { getResume } from '@/lib/resume';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://example.vercel.app';
  const resume = getResume();
  const projectUrls = resume.projects.map((p) => ({ url: `${base}/projects/${p.slug}`, lastModified: new Date() }));

  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/resume`, lastModified: new Date() },
    { url: `${base}/projects`, lastModified: new Date() },
    ...projectUrls,
  ];
}
