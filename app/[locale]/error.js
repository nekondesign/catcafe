'use client';

import { useTranslations } from 'next-intl';

export default function Error({ error, reset }) {
  const t = useTranslations('error');

  return (
    <div className="text-center py-10">
      <h2 className="text-2xl font-bold mb-4">{t('title')}</h2>
      <p className="mb-4">{t('description')}</p>
      <button
        onClick={() => reset()}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {t('retry')}
      </button>
    </div>
  );
}
