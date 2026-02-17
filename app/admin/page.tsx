'use client';

import { useMemo, useState } from 'react';
import resumeSeed from '@/data/resume.json';

const STORAGE_KEY = 'resume-admin-json';

export default function AdminPage() {
  const [json, setJson] = useState(() => {
    if (typeof window === 'undefined') return JSON.stringify(resumeSeed, null, 2);
    return localStorage.getItem(STORAGE_KEY) ?? JSON.stringify(resumeSeed, null, 2);
  });
  const [status, setStatus] = useState('');

  const parsedOk = useMemo(() => {
    try {
      JSON.parse(json);
      return true;
    } catch {
      return false;
    }
  }, [json]);

  const saveLocal = () => {
    if (!parsedOk) return setStatus('JSON inválido');
    localStorage.setItem(STORAGE_KEY, json);
    setStatus('Guardado en localStorage ✅');
  };

  const download = () => {
    if (!parsedOk) return setStatus('JSON inválido');
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.json';
    a.click();
    URL.revokeObjectURL(url);
    setStatus('Descargado resume.json');
  };

  return (
    <main className="container-page py-10">
      <h1 className="section-title">Admin de Contenido</h1>
      <p className="mt-2 text-sm text-slate-600">
        Editá el JSON del CV. Guarda localmente para iterar rápido y descargalo para reemplazar <code>data/resume.json</code> en el repo.
      </p>
      <div className="mt-4 flex gap-2">
        <button onClick={saveLocal} className="rounded-md border border-slate-300 px-3 py-2">Guardar local</button>
        <button onClick={download} className="rounded-md border border-slate-300 px-3 py-2">Descargar JSON</button>
      </div>
      <p className="mt-2 text-sm">{status}</p>
      <textarea
        className="mt-4 h-[70vh] w-full rounded-lg border border-slate-300 p-3 font-mono text-xs"
        value={json}
        onChange={(e) => setJson(e.target.value)}
      />
    </main>
  );
}
