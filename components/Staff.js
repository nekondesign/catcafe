import Image from "next/image";

export default function Staff() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h5 className="mb-12 font-semibold leading-5 text-center text-xl">
          Staff
        </h5>
        <div className="flex justify-center">
          <div className="grid max-w-2xl gap-8 row-gap-10">
            <div className="flex flex-col max-w-full sm:flex-row">
              <div className="mr-4">
                <div className="flex items-center justify-center w-32 h-32 mb-4 rounded-full">
                  <Image
                    src="/images/st01.jpg"
                    alt="Owner"
                    width={500}
                    height={500}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
              </div>
              <div>
                <h6 className="mb-3 text-xl font-bold leading-5">Mai, オーナー</h6>
                <p className="mb-3">
                  自宅に3匹の猫と暮らす大の猫好き。キャットケアスペシャリストの資格保持者。
                </p>
              </div>
            </div>
            <div className="flex flex-col max-w-full sm:flex-row">
              <div className="mr-4">
                <div className="flex items-center justify-center w-32 h-32 mb-4 rounded-full">
                  <Image
                    src="/images/st02.jpg"
                    alt="DIY"
                    width={500}
                    height={500}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
              </div>
              <div>
                <h6 className="mb-3 text-xl font-bold leading-5">Youko,カフェ・料理担当</h6>
                <p className="mb-3">
                  バリスタの資格を持つカフェの料理番。月に一度、美味しいコーヒー&カフェセミナー開催中。
                </p>
              </div>
            </div>
            <div className="flex flex-col max-w-full sm:flex-row">
              <div className="mr-4">
                <div className="flex items-center justify-center w-32 h-32 mb-4 rounded-full">
                  <Image
                    src="/images/st03.jpg"
                    alt="DIY"
                    width={500}
                    height={500}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
              </div>
              <div>
                <h6 className="mb-3 text-xl font-bold leading-5">Daisuke, 猫パパ</h6>
                <p className="mb-3">
                  DIYとバイクが趣味の大の猫好き。カフェの内装のほとんどを彼が手掛けています。
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}