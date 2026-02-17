import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lisandro Martín Argüello | Product Owner Portfolio',
  description: 'Portfolio y CV online de Lisandro Martín Argüello, Product Owner y Business Analyst.',
  openGraph: {
    title: 'Lisandro Martín Argüello | Product Owner Portfolio',
    description: 'CV online orientado a estrategia, producto y transformación digital.',
    type: 'website',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lisandro Martín Argüello | Product Owner Portfolio',
    description: 'CV online orientado a estrategia, producto y transformación digital.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
