// components/Cats.js
import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function Cats() {
  const t = useTranslations('cats');
  
  const cats = [
    { id: 'ganmo', img: '/images/sample.png' },
    { id: 'kinako', img: '/images/sample.png' },
    { id: 'ai', img: '/images/sample.png' },
    { id: 'pochimii', img: '/images/sample.png' },
    { id: 'sabi', img: '/images/sample.png' },
    { id: 'kurumimike', img: '/images/sample.png' }
  ];

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h6 className="mb-12 font-semibold leading-5 text-center text-xl">
        {t('title')}
      </h6>
      <div className="grid grid-cols-2 gap-5 row-gap-6 mb-10 sm:grid-cols-3 lg:grid-cols-6">
        {cats.map((cat) => (
          <div key={cat.id} className="text-center">
            <h6 className="mb-2 font-semibold leading-5">{t(cat.id)}</h6>
            <div className="flex items-center justify-center w-24 h-24 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
              <Image
                src={cat.img}
                alt={t(cat.id)}
                width={500}
                height={500}
                className="rounded-full object-cover w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}