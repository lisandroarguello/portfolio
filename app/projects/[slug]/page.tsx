import { notFound } from 'next/navigation';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { getLang, getResume, t } from '@/lib/resume';

export default async function ProjectDetail({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string }>;
}) {
  const { slug } = await params;
  const lang = getLang((await searchParams).lang);
  const resume = getResume();
  const project = resume.projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <>
      <Header resume={resume} lang={lang} />
      <main className="container-page py-10">
        <article className="card space-y-4">
          <h1 className="text-3xl font-bold">{project.name}</h1>
          <p className="text-sm text-slate-500">{project.period}</p>
          <p>{t(lang, project.description)}</p>
          <ul className="list-disc pl-5">
            {project.highlights.map((h, i) => <li key={i}>{t(lang, h)}</li>)}
          </ul>
          <p className="text-sm">Stack: {project.stack.join(', ')}</p>
          {project.links.map((l) => (
            <p key={l.url}><a className="text-accent" href={l.url} target="_blank">{l.label}: {l.url}</a></p>
          ))}
        </article>
      </main>
      <Footer resume={resume} />
    </>
  );
}
