import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { LanguageToggle } from '@/components/language-toggle';
import { EducationSection, ExperienceSection, ProjectsSection, SkillsSection } from '@/components/sections';
import { getLang, getResume } from '@/lib/resume';

export default async function Home({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const lang = getLang((await searchParams).lang);
  const resume = getResume();

  return (
    <>
      <Header resume={resume} lang={lang} />
      <main className="container-page space-y-12 py-6">
        <div className="flex justify-end"><LanguageToggle /></div>
        <Hero resume={resume} lang={lang} />
        <ExperienceSection resume={resume} lang={lang} />
        <ProjectsSection resume={resume} lang={lang} />
        <SkillsSection resume={resume} lang={lang} />
        <EducationSection resume={resume} lang={lang} />
      </main>
      <Footer resume={resume} />
    </>
  );
}
