import Hero from '@/components/sections/hero';
import Image from 'next/image';
import MainFeature from '@/components/sections/main-feature';
import Navbar from '@/components/sections/navbar';

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden ">
        <Navbar />
        <Hero />
      </div>

      <MainFeature />
    </>
  );
}
