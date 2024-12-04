import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function Info() {
  const t = useTranslations('info');

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-24 row-gap-8 lg:grid-cols-3">
        <div className="text-wrap">
          <div className="flex items-center justify-center w-16 h-16 mb-4 sm:mx-auto sm:w-24 sm:h-24">
            <Image
              src="/images/icon01.png"
              alt="Cafe interior"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-center text-lg">
            {t('cafe.title')}
          </h6>
          <p className="max-w-md mb-3 sm:mx-auto">
            {t('cafe.description')}
          </p>
        </div>
        <div className="text-wrap">
          <div className="flex items-center justify-center w-16 h-16 mb-4 sm:mx-auto sm:w-24 sm:h-24">
            <Image
              src="/images/icon02.png"
              alt="Cafe interior"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-center text-lg">
            {t('cats.title')}
          </h6>
          <p className="max-w-md mb-3 sm:mx-auto">
            {t('cats.description')}
          </p>
        </div>
        <div className="text-wrap">
          <div className="flex items-center justify-center w-16 h-16 mb-4 sm:mx-auto sm:w-24 sm:h-24">
            <Image
              src="/images/icon03.png"
              alt="Cafe interior"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-center text-lg">
            {t('staff.title')}
          </h6>
          <p className="max-w-md mb-3 sm:mx-auto">
            {t('staff.description')}
          </p>
        </div>
      </div>
    </div>
  );
}