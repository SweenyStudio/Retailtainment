import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import CircleObject from '@/assets/circle.webp';
import Container from '@/components/ui/container';
import Image from 'next/image';
import Link from 'next/link';
import LogoWhite from '@/assets/logo-white.svg';
import SquareObject from '@/assets/square-object.webp';
import StarObject from '@/assets/star-object.webp';
import ThingoObject from '@/assets/thingo.webp';

export default function Hero() {
  return (
    <section className="bg-black relative py-56 dark:bg-grid-white/[0.1] overflow-hidden ">
      <div className="absolute top-4 left-2 w-36 h-auto z-10  animate-drift1">
        <Image src={StarObject} alt="Star" className=" w-24 m-2 h-auto " />
      </div>
      <div className="absolute -bottom-4 left-2 w-36 h-auto z-10 animate-drift2">
        <Image src={SquareObject} alt="Square" className=" w-24 m-2 h-auto " />
      </div>
      <div className="absolute -bottom-[8rem] -right-[6rem] z-10 animate-drift3 ">
        <Image src={CircleObject} alt="Circle" className=" w-60 m-2 h-auto " />
      </div>
      <Container>
        <div>
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <Image src={LogoWhite} alt="Logo" className="w-full h-auto" />
          <div className="flex flex-col text-center justify-center items-center">
            <p className="text-3xl font-bold relative tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 mt-4 uppercase">
              Ecommerce & Retail Accelerator
            </p>
            <p className="mt-4 text-neutral-300">
              SCALING THE NEXT GENERATION OF BRANDS
            </p>
            <Button asChild size="lg">
              <Link href={'/apply'}>Apply To Join Waitlist</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
