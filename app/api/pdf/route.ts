import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const format = searchParams.get('format') === 'Letter' ? 'Letter' : 'A4';
  const lang = searchParams.get('lang') === 'en' ? 'en' : 'es';

  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    const printUrl = `${req.nextUrl.origin}/print?lang=${lang}`;
    await page.goto(printUrl, { waitUntil: 'networkidle0' });

    const pdf = await page.pdf({
      format,
      printBackground: true,
      margin: { top: '18mm', right: '14mm', bottom: '18mm', left: '14mm' },
    });

    await browser.close();

    return new NextResponse(pdf, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Lisandro-Martin-Arguello-Resume.pdf"',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    });
  } catch {
    return NextResponse.json({ error: 'Could not generate PDF.' }, { status: 500 });
  }
}
