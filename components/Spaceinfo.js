// components/Spaceinfo.js
import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function Spaceinfo() {
  const t = useTranslations('spaceinfo');

  const sections = [
    { id: 'catspace', img: '/images/nekocafe2.jpg' },
    { id: 'reception', img: '/images/uketuke1.jpg' },
    { id: 'gourmet', img: '/images/ryouri.jpg' }
  ];

  return (
    <div className="bg-stone-200">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h5 className="mb-12 font-semibold leading-5 text-center text-xl">
          {t('title')}
        </h5>
        <div className="grid gap-6 row-gap-5 lg:grid-cols-3">
          {sections.map((section) => (
            <div key={section.id}>
              <Image
                src={section.img}
                alt={t(`${section.id}.title`)}
                width={500}
                height={300}
                className="object-cover"
              />
              <h5 className="my-2 text-xl font-bold leading-none text-center sm:text-xl">
                {t(`${section.id}.title`)}
              </h5>
              <div className="px-8">
                <p className="text-gray-700">
                  {t(`${section.id}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}