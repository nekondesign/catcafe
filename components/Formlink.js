import Link from 'next/link'

export default function Formlink() {
  return (
    <div className="mb-8">
      <div className="relative h-[380px] w-full">
        <div className="absolute inset-0 bg-hero-image bg-cover" />
        <div className="relative h-full flex items-center px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
        <div className="absolute inset-0 flex items-center justify-center">
        <Link 
          href="/"
          className="px-6 py-3 bg-[#B8860B] text-white rounded hover:bg-[#9B7200] transition-colors"
        >
          空き確認問い合わせ
        </Link>
      </div>
        </div>
      </div>
      <p className="text-center py-4">
        平日の午前中は比較的空いております。土日祝日のご利用はご予約をお願いします。<br></br>お名前と御連絡先をお送りくだされば、最新の空き情報を折り返しお送りさせていただきます。
      </p>
    </div>
  );
}