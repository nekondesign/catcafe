// components/Formlink.js
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Formlink() {
  const t = useTranslations('cta');

  return (
    <div className="mb-8">
      <div className="relative h-[380px] w-full">
        <div className="absolute inset-0 bg-hero-image bg-cover" />
        <div className="relative h-full flex items-center px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
          <div className="absolute inset-0 flex items-center justify-center">
            <Link 
              href="/"
              className="px-6 py-3 bg-[#B8860B] text-white rounded hover:bg-[#9B7200] transition-colors"
            >
              {t('button')}
            </Link>
          </div>
        </div>
      </div>
      <p className="text-center py-4">
        {t('description')}
      </p>
    </div>
  );
}