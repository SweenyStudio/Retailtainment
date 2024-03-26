import Container from '@/components/ui/container';
import Gif600 from '@/assets/600m.gif';
import Image from 'next/image';

export default function MainFeature() {
  return (
    <section className="bg-neutral-100 py-32 border-y border-neutral-500 bg-dot-black/30 relative rounded-2xl block ">
      <div className="absolute pointer-events-none z-10 inset-0  items-center justify-center bg-neutral-200 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] rounded-2xl block"></div>

      <div className="flex flex-col text-center items-center z-20">
        <Container>
          <h3 className="text-3xl text-neutral-950 font-bold tracking-tight leading-none z-40">
            PROVEN PLAYBOOK ON HOW TO SCALE A BRAND TO
          </h3>
        </Container>
        <Image
          src={Gif600}
          alt="0 to 600m"
          className="border-y border-neutral-800 w-full shadow-xl "
        />
        <Container>
          <p>transparent</p>
        </Container>
      </div>
    </section>
  );
}
