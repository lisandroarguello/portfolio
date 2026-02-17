import { getLang, getResume, t } from '@/lib/resume';

export default async function PrintPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const lang = getLang((await searchParams).lang);
  const resume = getResume();
  return (
    <main className="mx-auto max-w-3xl px-8 py-10 text-black">
      <header className="print-section border-b pb-4">
        <h1 className="text-3xl font-bold">{resume.basics.name}</h1>
        <p className="mt-1 text-lg">{t(lang, resume.basics.role)}</p>
        <p className="text-sm">{resume.basics.location} · {resume.basics.email}</p>
        <div className="mt-2 text-sm">
          {resume.basics.links.map((l) => <p key={l.url}>{l.label}: {l.url}</p>)}
        </div>
      </header>

      <section className="print-section mt-5">
        <h2 className="text-xl font-semibold">Summary</h2>
        <p className="mt-1 text-sm">{t(lang, resume.basics.summary)}</p>
      </section>

      <section className="print-section mt-5">
        <h2 className="text-xl font-semibold">Experience</h2>
        <div className="mt-2 space-y-3 text-sm">
          {resume.experience.map((exp) => (
            <article key={exp.company + exp.startDate}>
              <h3 className="font-semibold">{t(lang, exp.role)} - {exp.company}</h3>
              <p>{exp.startDate} - {exp.endDate} · {exp.location}</p>
              <ul className="list-disc pl-5">
                {exp.highlights.map((h, i) => <li key={i}>{t(lang, h)}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="print-section mt-5">
        <h2 className="text-xl font-semibold">Education</h2>
        <div className="mt-2 space-y-2 text-sm">
          {resume.education.map((edu) => <p key={edu.institution}>{edu.degree} - {edu.institution} ({edu.period})</p>)}
        </div>
      </section>

      <section className="print-section mt-5">
        <h2 className="text-xl font-semibold">Skills</h2>
        <div className="mt-2 space-y-1 text-sm">
          {resume.skills.map((s) => <p key={s.category.es}><strong>{t(lang, s.category)}:</strong> {s.items.join(', ')}</p>)}
        </div>
      </section>
    </main>
  );
}
