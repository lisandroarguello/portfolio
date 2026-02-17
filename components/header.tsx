import Link from 'next/link';
import { type Resume } from '@/lib/resume-schema';

type Props = { resume: Resume; lang: 'es' | 'en' };

export function Header({ resume, lang }: Props) {
  const links = resume.basics.links;
  const linkedin = links.find((l) => l.label.toLowerCase() === 'linkedin')?.url ?? '#';
  const github = links.find((l) => l.label.toLowerCase() === 'github')?.url ?? '#';

  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container-page flex flex-wrap items-center justify-between gap-3 py-4">
        <Link href="/" className="font-semibold tracking-tight">{resume.basics.name}</Link>
        <nav className="flex items-center gap-2 text-sm">
          <Link className="rounded-md border border-slate-300 px-3 py-2" href={`/api/pdf?format=A4&lang=${lang}`}>
            {lang === 'es' ? 'Descargar PDF (ATS)' : 'Download PDF (ATS)'}
          </Link>
          <a className="rounded-md border border-slate-300 px-3 py-2" href={linkedin} target="_blank">LinkedIn</a>
          <a className="rounded-md border border-slate-300 px-3 py-2" href={github} target="_blank">GitHub</a>
          <Link className="rounded-md border border-slate-300 px-3 py-2" href="/admin">Admin</Link>
        </nav>
      </div>
    </header>
  );
}
