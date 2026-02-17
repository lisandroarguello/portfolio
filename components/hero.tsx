import { t } from '@/lib/resume';
import { type Lang, type Resume } from '@/lib/resume-schema';

type Props = { resume: Resume; lang: Lang };

export function Hero({ resume, lang }: Props) {
  return (
    <section className="py-12">
      <p className="mb-2 text-sm uppercase tracking-widest text-accent">Portfolio · CV</p>
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{resume.basics.name}</h1>
      <p className="mt-3 text-lg text-slate-700">{t(lang, resume.basics.role)}</p>
      <p className="mt-4 max-w-3xl text-slate-600">{t(lang, resume.basics.summary)}</p>
      <p className="mt-2 text-sm text-slate-500">{resume.basics.location}</p>
    </section>
  );
}
