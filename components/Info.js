import Image from "next/image";

export default function Info() {
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
            カフェについて
          </h6>
          <p className="max-w-md mb-3 sm:mx-auto">
            豊富なカフェメニューと軽食をご用意。お食事スペースとキャットスペースを分けていますので落ち着いて過ごすことができます。
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
            猫ちゃんたち
          </h6>
          <p className="max-w-md mb-3 sm:mx-auto">
            子猫や人気の長毛種など様々な猫ちゃんが揃っています。お膝に乗るのが好きな子もいますので触れ合いたい方はぜひ。
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
            スタッフについて
          </h6>
          <p className="max-w-md mb-3 sm:mx-auto">
            キャットケアスペシャリストの資格を持つスタッフや美味しい料理が得意なスタッフがそろっています。リラックスできる空間づくりに努めています。
          </p>
        </div>
      </div>
    </div>
  );
}
