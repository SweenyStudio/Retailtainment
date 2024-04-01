import AboutHero from '@/components/sections/about-hero';
import AboutText from '@/components/sections/about-text';
import Navbar from '@/components/sections/navbar';

export default function Page() {
  return (
    <>
      <div className="relative overflow-hidden ">
        <Navbar />
        <AboutHero />
      </div>
      <AboutText />
    </>
  );
}
