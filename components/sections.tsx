import Link from 'next/link';
import { t } from '@/lib/resume';
import { type Lang, type Resume } from '@/lib/resume-schema';

export function ExperienceSection({ resume, lang }: { resume: Resume; lang: Lang }) {
  return (
    <section>
      <h2 className="section-title mb-4">Experience</h2>
      <div className="space-y-4">
        {resume.experience.map((exp) => (
          <article key={`${exp.company}-${exp.startDate}`} className="card">
            <h3 className="text-lg font-semibold">{t(lang, exp.role)} · {exp.company}</h3>
            <p className="text-sm text-slate-500">{exp.startDate} - {exp.endDate} · {exp.location}</p>
            <p className="mt-2 text-slate-700">{t(lang, exp.summary)}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
              {exp.highlights.map((h, i) => <li key={i}>{t(lang, h)}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export function SkillsSection({ resume, lang }: { resume: Resume; lang: Lang }) {
  return (
    <section>
      <h2 className="section-title mb-4">Skills</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {resume.skills.map((s) => (
          <article key={s.category.es} className="card">
            <h3 className="font-semibold">{t(lang, s.category)}</h3>
            <ul className="mt-2 space-y-1 text-sm text-slate-700">
              {s.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ProjectsSection({ resume, lang }: { resume: Resume; lang: Lang }) {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="section-title">Projects</h2>
        <Link href="/projects" className="text-sm text-accent">View all</Link>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {resume.projects.slice(0, 3).map((p) => (
          <article key={p.slug} className="card">
            <h3 className="font-semibold">{p.name}</h3>
            <p className="mt-2 text-sm text-slate-700">{t(lang, p.description)}</p>
            <Link className="mt-3 inline-block text-sm text-accent" href={`/projects/${p.slug}`}>Read case</Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export function EducationSection({ resume, lang }: { resume: Resume; lang: Lang }) {
  return (
    <section>
      <h2 className="section-title mb-4">Education</h2>
      <div className="space-y-3">
        {resume.education.map((edu) => (
          <article className="card" key={edu.institution + edu.degree}>
            <h3 className="font-semibold">{edu.degree}</h3>
            <p className="text-sm text-slate-500">{edu.institution} · {edu.period}</p>
            <p className="mt-2 text-slate-700">{t(lang, edu.details)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
