import fs from 'node:fs';
import path from 'node:path';
import { ResumeSchema, type Lang, type Resume } from '@/lib/resume-schema';

const resumePath = path.join(process.cwd(), 'data', 'resume.json');

export function getResume(): Resume {
  const raw = fs.readFileSync(resumePath, 'utf-8');
  const parsed = JSON.parse(raw);
  return ResumeSchema.parse(parsed);
}

export function t(lang: Lang, value: { es: string; en: string }): string {
  return value[lang] ?? value.es;
}

export function getLang(input?: string): Lang {
  return input === 'en' ? 'en' : 'es';
}
