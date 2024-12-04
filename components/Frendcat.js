import Image from "next/image";

export default function Frendcat() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h6 className="mb-12 font-semibold leading-5 text-center text-xl">
        Cats
      </h6>
      <div className="grid grid-cols-2 gap-5 row-gap-6 mb-10 sm:grid-cols-3 lg:grid-cols-6">
        <div className="text-center">
          <h6 className="mb-2 font-semibold leading-5">がんも</h6>
          <div className="flex items-center justify-center w-24 h-24 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <Image
              src="/images/01neko.jpg"
              alt=""
              width={500}
              height={500}
              className="rounded-full object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="text-center">
          <h6 className="mb-2 font-semibold leading-5">きなこ</h6>
          <div className="flex items-center justify-center w-24 h-24 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <Image
              src="/images/02neko.jpg"
              alt="Cats"
              width={500}
              height={500}
              className="rounded-full object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="text-center">
          <h6 className="mb-2 font-semibold leading-5">あい</h6>
          <div className="flex items-center justify-center w-24 h-24 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <Image
              src="/images/03neko.jpg"
              alt="Cats"
              width={500}
              height={500}
              className="rounded-full object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="text-center">
          <h6 className="mb-2 font-semibold leading-5">ポチ&みい</h6>
          <div className="flex items-center justify-center w-24 h-24 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <Image
              src="/images/04neko.jpg"
              alt="Cats"
              width={500}
              height={500}
              className="rounded-full object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="text-center">
          <h6 className="mb-2 font-semibold leading-5">さび</h6>
          <div className="flex items-center justify-center w-24 h-24 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <Image
              src="/images/01neko.jpg"
              alt="Cats"
              width={500}
              height={500}
              className="rounded-full object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="text-center">
          <h6 className="mb-2 font-semibold leading-5">くるみ&ミケ</h6>
          <div className="flex items-center justify-center w-24 h-24 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <Image
              src="/images/01neko.jpg"
              alt="Cats"
              width={500}
              height={500}
              className="rounded-full object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
