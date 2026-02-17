import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { EducationSection, ExperienceSection, SkillsSection } from '@/components/sections';
import { getLang, getResume, t } from '@/lib/resume';

export default async function ResumePage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const lang = getLang((await searchParams).lang);
  const resume = getResume();
  return (
    <>
      <Header resume={resume} lang={lang} />
      <main className="container-page space-y-10 py-10">
        <section className="card">
          <h1 className="text-3xl font-bold">{resume.basics.name}</h1>
          <p className="mt-2">{t(lang, resume.basics.role)}</p>
          <p className="mt-2 text-slate-600">{t(lang, resume.extras.about)}</p>
        </section>
        <ExperienceSection resume={resume} lang={lang} />
        <SkillsSection resume={resume} lang={lang} />
        <EducationSection resume={resume} lang={lang} />
      </main>
      <Footer resume={resume} />
    </>
  );
}
