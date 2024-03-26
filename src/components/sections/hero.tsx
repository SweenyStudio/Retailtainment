'use client';

import { motion, useScroll } from 'framer-motion';

import { Button } from '@/components/ui/button';
import CircleObject from '@/assets/circle.webp';
import Container from '@/components/ui/container';
import Image from 'next/image';
import Link from 'next/link';
import LogoWhite from '@/assets/logo-white.svg';
import SquareObject from '@/assets/square-object.webp';
import StarObject from '@/assets/star-object.webp';
import ThingoObject from '@/assets/thingo.webp';
import { useParallax } from '@/utils/useParallax';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y1 = useParallax(scrollYProgress, 300, 0.05);
  const y2 = useParallax(scrollYProgress, -400, 0.04);
  const y3 = useParallax(scrollYProgress, 300, 0.07);
  const y4 = useParallax(scrollYProgress, 500, 0.03);

  return (
    <section className="bg-black relative py-32 dark:bg-grid-white/[0.12] overflow-hidden  ">
      <motion.div
        style={{
          y: y1,
        }}
        animate={{
          rotate: [0, 3, 6, 3, -1, -2, 0],
          x: [0, 10, 0, -10, 0, 10, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
        }}
        className="absolute top-4 left-2 w-36 h-auto z-10"
      >
        <Image src={StarObject} alt="Star" className=" w-24 m-2 h-auto " />
      </motion.div>
      <motion.div
        style={{
          y: y2,
        }}
        animate={{
          rotate: [0, -8, -2, 3, -1, 7, 0],
          x: [0, -11, -3, -10, 0, 10, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
        }}
        className="absolute -bottom-4 left-2 w-36 h-auto z-10"
      >
        <Image src={SquareObject} alt="Square" className=" w-24 m-2 h-auto " />
      </motion.div>
      <motion.div
        style={{
          y: y3,
        }}
        animate={{
          rotate: [0, -3, -9, -12, -5, 4, 0],
          x: [0, 9, 2, 3, 7, 12, -1, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
        }}
        className="absolute -bottom-[8rem] -right-[6rem] z-10 animate-drift3 "
      >
        <Image src={CircleObject} alt="Circle" className=" w-60 m-2 h-auto " />
      </motion.div>
      <motion.div
        style={{
          y: y4,
        }}
        animate={{
          rotate: [0, -6, 12, -12, -5, 4, 0],
          x: [0, 1, -4, 3, 7, 12, -1, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
        }}
        className="absolute -top-4 right-2 w-36 h-auto z-10 animate-drift2"
      >
        <Image src={ThingoObject} alt="Thingo" className=" w-24 m-2 h-auto " />
      </motion.div>
      <Container>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <Image
          src={LogoWhite}
          alt="Logo"
          className="w-full h-auto z-40 block "
        />
        <div className="flex flex-col z-40 text-center justify-center items-center">
          <p className="z-40 text-3xl font-bold  tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 mt-4 uppercase">
            Ecommerce & Retail Accelerator
          </p>
          <p className="mt-4 z-40 text-neutral-300">
            SCALING THE NEXT GENERATION OF BRANDS
          </p>
          <Button asChild size="lg" className="z-40">
            <Link href={'/apply'}>Apply To Join Waitlist</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
