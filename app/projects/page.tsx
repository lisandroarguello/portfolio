import Link from 'next/link';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { getLang, getResume, t } from '@/lib/resume';

export default async function ProjectsPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const lang = getLang((await searchParams).lang);
  const resume = getResume();

  return (
    <>
      <Header resume={resume} lang={lang} />
      <main className="container-page py-10">
        <h1 className="section-title mb-5">Projects</h1>
        <div className="grid gap-4 md:grid-cols-2">
          {resume.projects.map((project) => (
            <article className="card" key={project.slug}>
              <h2 className="text-lg font-semibold">{project.name}</h2>
              <p className="text-sm text-slate-500">{project.period}</p>
              <p className="mt-2 text-slate-700">{t(lang, project.description)}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.stack.map((item) => <span key={item} className="rounded-full bg-slate-100 px-2 py-1 text-xs">{item}</span>)}
              </div>
              <Link className="mt-3 inline-block text-sm text-accent" href={`/projects/${project.slug}`}>View detail</Link>
            </article>
          ))}
        </div>
      </main>
      <Footer resume={resume} />
    </>
  );
}
