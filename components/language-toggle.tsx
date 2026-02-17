'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export function LanguageToggle() {
  const params = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const lang = params.get('lang') === 'en' ? 'en' : 'es';

  const switchLang = () => {
    const next = new URLSearchParams(params.toString());
    next.set('lang', lang === 'es' ? 'en' : 'es');
    router.push(`${pathname}?${next.toString()}`);
  };

  return (
    <button onClick={switchLang} className="rounded-md border border-slate-300 px-3 py-2 text-sm">
      {lang === 'es' ? 'EN' : 'ES'}
    </button>
  );
}
