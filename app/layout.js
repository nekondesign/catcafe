import { Noto_Sans_JP } from 'next/font/google'
import "./globals.css";


const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],  
  weight: ['400', '500', '700'],
  preload: true,
  variable: '--font-noto-sans-jp'
})

export const metadata = {
  title: 'にくきゅうカフェ',
  description: 'ほっこりする猫カフェです',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        {children}
      </body>
    </html>
  )
}
