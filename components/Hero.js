import Image from 'next/image';

export default function Hero() {
  return (
    <div className="bg-white">
      <div className="relative h-[500px] w-full">
        {/* Background image with opacity */}
        <div className="absolute inset-0 bg-hero-image bg-cover opacity-70" />
         {/* Logo */}
         <div className="absolute top-4 w-full sm:w-auto">
          <div className="flex justify-center sm:block">
            <Image
              src="/images/nikukyuulogo.png"
              alt="Nikukyu Cafe Logo"
              width={300}
              height={50}
              className="sm:ml-8"
            />
          </div>
        </div>
        {/* Content without opacity */}
        <div className="relative h-full flex items-center px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
          <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 text-3xl font-bold leading-none tracking-normal text-primary text-center pt-24 sm:text-4xl md:mx-auto">
                  にくきゅうカフェ
                </h2>
                <p className="md:text-lg">
                  本格カフェメニューとフレンドリーな猫ちゃんが<br></br>
                  日頃の疲れを癒してくれます。 気軽にお立ち寄りください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
