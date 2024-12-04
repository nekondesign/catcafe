import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <div className="bg-white">
      <div className="relative h-[380px] w-full">
        <div className="absolute inset-0 bg-hero-image bg-cover opacity-70" />
        
        <div className="absolute top-8 w-full sm:w-auto">
          <div className="flex justify-center sm:block">
            <Image
              src="/images/nikukyuulogo.png"
              alt="Nikukyu Cafe Logo"
              width={300}
              height={50}
              className="sm:ml-8 py-4"
            />
          </div>
        </div>

        <div className="relative h-full flex items-center px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
          <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg my-6 text-3xl font-bold leading-none tracking-normal text-primary text-center pt-24 sm:text-4xl md:mx-auto">
                  {t('title')}
                </h2>
                <p className="md:text-lg text-center">
                  {t('description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}