import { type Resume } from '@/lib/resume-schema';

type Props = { resume: Resume };

export function Footer({ resume }: Props) {
  return (
    <footer className="mt-16 border-t border-slate-200 py-10">
      <div className="container-page text-sm text-slate-600">
        <p>{resume.basics.name} · {resume.basics.location}</p>
        <p>{resume.basics.email}</p>
      </div>
    </footer>
  );
}
