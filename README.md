# Portfolio + CV ATS (Next.js)

Portfolio/CV online con fuente única de datos (`data/resume.json`) para web + PDF ATS.

## Stack
- Next.js App Router + TypeScript
- TailwindCSS
- Zod (validación de esquema)
- Puppeteer (`/api/pdf`)

## Scripts
- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`
- `npm run validate:resume`

## Correr local
```bash
npm install
npm run dev
```
Abrir `http://localhost:3000`.

## Editar contenido
1. Editar `data/resume.json`.
2. Validar esquema:
```bash
npm run validate:resume
```
3. Ver cambios en web y PDF (`/print` y `/api/pdf`).

## Admin para editar contenido
Ruta: `/admin`
- Permite editar JSON en un textarea.
- Guarda temporalmente en `localStorage`.
- Permite descargar `resume.json` para reemplazar `data/resume.json` en el repo.

## Agregar proyectos
En `data/resume.json` agregar item en `projects` con:
- `slug`
- `name`
- `description.es/en`
- `stack`
- `highlights`
- `links`

Queda disponible automáticamente en:
- `/projects`
- `/projects/[slug]`
- sitemap

## Generar PDF ATS
Endpoint:
- `/api/pdf?format=A4&lang=es`
- `/api/pdf?format=Letter&lang=en`

Implementación:
1. `/api/pdf` abre `/print` con Puppeteer.
2. Renderiza una sola columna ATS-friendly, sin gráficos complejos.
3. Devuelve `application/pdf` con descarga.

## Deploy (Vercel)
1. Importar repo en Vercel.
2. Build command: `npm run build`.
3. Output: default Next.js.
4. Configurar dominio y reemplazar `https://example.vercel.app` en `app/sitemap.ts` y `app/robots.ts`.

## TODO de placeholders
Reemplazar campos `[[...]]` en `data/resume.json`:
- `[[EMAIL]]`
- `[[GITHUB_URL]]`
- `[[PORTFOLIO_URL]]`
- `[[BAT_ARCLE_CASE_URL]]`
- `[[WAKI_SUMMARY_URL]]`
- `[[KLOWHUB_URL]]`
- `[[MBA_PERIOD]]`
- `[[DIGITAL_HOUSE_PERIOD]]`
