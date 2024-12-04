import Image from "next/image";
export default function Spaceinfo() {
    return (

        <div className="bg-stone-100">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <h5 className="mb-12 font-semibold leading-5 text-center text-xl">Cat & Cafe</h5>
                <div className="grid gap-6 row-gap-5 lg:grid-cols-3">
                    <div>
                        <Image
                            src="/images/nekocafe2.png"
                            alt="nekocafe"
                            width={600}
                            height={400}
                            className="object-cover"
                        />
                        <h5 className="my-2 text-xl font-bold leading-none text-center sm:text-xl">
                            キャットスペース
                        </h5>
                        <div className="px-8">
                        <p className="text-gray-700">
                            ご注文されたお飲み物の持ち込みOKです。おやつセットをご注文いただければ猫ちゃんにおやつをあげることができます。
                        </p></div>
                    </div>
                    <div>
                        <Image
                            src="/images/uketuke1.png"
                            alt="nekocafe"
                            width={600}
                            height={400}
                            className="object-cover"
                        />
                        <h5 className="my-2 text-xl font-bold leading-none text-center sm:text-xl">
                            受付はこちら
                        </h5>
                        <p className="text-gray-700">
                        受付はこちらでお願いします。土日は混雑していますのでネットでのご予約にご協力お願いします。
                        </p>
                    </div>
                    <div>
                        <Image
                            src="/images/ryouri.png"
                            alt="nekocafe"
                            width={600}
                            height={400}
                            className="object-cover"
                        />
                        <h5 className="my-2 text-xl font-bold leading-none text-center sm:text-xl">
                            水曜日はグルメデイ
                        </h5>
                        <p className="text-gray-700">
                        毎週水曜日はcafeスペース側でスペシャルランチのご提供をしています。週替わりメニューでとても人気があります。詳しくはお問い合わせください。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}