import Hero from '@/components/Hero';
import Info from '@/components/Info';
import Frendcat from '@/components/Frendcat';
import Spaceinfo from '@/components/Spaceinfo';
import Staff from '@/components/Staff';
import Formlink from '@/components/Formlink';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Info />
      <Spaceinfo />
      <Frendcat />
      <Staff />
      <Formlink />
      <Footer />
    </main>
  )
}