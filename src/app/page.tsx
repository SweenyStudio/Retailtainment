import Flywheel from '@/components/sections/flywheel';
import Hero from '@/components/sections/hero';
import MainFeature from '@/components/sections/main-feature';
import Navbar from '@/components/sections/navbar';

import SecondaryFeature from '@/components/sections/secondary-feature';
import Suited from '@/components/sections/suited';

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden ">
        <Navbar />
        <Hero />
      </div>
      <MainFeature />
      <Flywheel />
      <SecondaryFeature />
      <Suited />
    </>
  );
}
