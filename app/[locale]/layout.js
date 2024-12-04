import { Noto_Sans_JP } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, getLocale } from 'next-intl/server';
import "../globals.css";
import { routing } from '@/src/i18n/routing';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  preload: true,
  variable: '--font-noto-sans-jp'
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function RootLayout({ children }) {
  const locale = await getLocale();

  if (!routing.locales.includes(locale)) {
    notFound();
    
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={notoSansJP.className}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}