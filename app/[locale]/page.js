import Hero from '@/components/Hero';
import Info from '@/components/Info';
import Cats from '@/components/Cats';
import Spaceinfo from '@/components/Spaceinfo';
import Staff from '@/components/Staff';
import Formlink from '@/components/Formlink';
import Footer from '@/components/Footer';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { routing } from '@/src/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function Home() {
  return (
    <main>
      <div className="absolute top-4 right-4 z-10">
        <LanguageSwitcher />
      </div>
      <Hero />
      <Info />
      <Cats />
      <Spaceinfo />
      <Staff />
      <Formlink />
      <Footer />
    </main>
  );
}