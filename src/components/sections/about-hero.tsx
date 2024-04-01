'use client';

import { bounceAnimation, staggeredAnimation } from '@/utils/animations';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

import CircleObject from '@/assets/circle.webp';
import LogoWhite from '@/assets/logo-white.svg';
import SquareObject from '@/assets/square-object.webp';
import StarObject from '@/assets/star-object.webp';
import ThingoObject from '@/assets/thingo.webp';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { SubHeaderLight } from '../ui/text';
import ScrollingLogos from './scrolling-logos';

export default function AboutHero() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { scrollYProgress } = useScroll({ target: ref });

  const y1 = useTransform(scrollYProgress, [0, 0.5], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 0.5], [0, 90]);
  const y3 = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const y4 = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <>
      <section className="bg-black relative pt-32 pb-16 bg-grid-small-white/[0.2] overflow-hidden font-gothic items-center flex flex-col justify-center  ">
        <motion.div
          initial="initial"
          ref={ref}
          animate={isInView ? 'animate' : 'initial'}
          variants={staggeredAnimation}
        >
          <Container>
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center z-[4] bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            <Image
              src={LogoWhite}
              alt="Logo"
              className="w-full mx-auto md:w-4/5 h-auto z-[1] relative "
            />

            <div className="flex flex-col text-center justify-center items-center">
              <motion.div variants={bounceAnimation}>
                <SubHeaderLight className="mt-4 max-w-3xl">
                  About Us: Revolutionising Retail and E-Commerce
                </SubHeaderLight>
              </motion.div>
              <motion.p
                variants={bounceAnimation}
                className="mt-4 z-0 max-w-3xl font-sans font-light text-md md:text-lg tracking-normal leading-tight text-zinc-300"
              >
                Born from Simon Beard&apos;s experiences with Culture Kings and
                a digital marketing betrayal, Retailtainment aims to
                revolutionize e-commerce by integrating social media, content,
                purchasing, and data, fostering unparalleled retail brand
                growth.
              </motion.p>
              <motion.div variants={bounceAnimation}>
                <Button asChild size="lg" className="z-10 mt-6">
                  <Link href={'/apply'}>Apply To Join Waitlist</Link>
                </Button>
              </motion.div>
            </div>
          </Container>
          <motion.div className="w-screen" variants={bounceAnimation}>
            <ScrollingLogos />
          </motion.div>
        </motion.div>

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
          className="absolute top-4 left-2 w-36 md:w-48 h-auto "
        >
          <Image src={StarObject} alt="Star" className=" w-full m-2 h-auto " />
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
          className="absolute -bottom-4 left-2 w-24 md:w-36 h-auto z-1"
        >
          <Image
            src={SquareObject}
            alt="Square"
            className=" w-full m-2 h-auto "
          />
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
          className="absolute -bottom-[8rem] -right-[6rem] z-1 w-60 lg:w-96 animate-drift3 "
        >
          <Image
            src={CircleObject}
            alt="Circle"
            className=" w-full m-2 h-auto "
          />
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
          className="absolute -top-4 right-2 w-36 md:w-44 h-auto z-1 animate-drift2"
        >
          <Image
            src={ThingoObject}
            alt="Thingo"
            className=" w-full m-2 h-auto "
          />
        </motion.div>
      </section>
    </>
  );
}
