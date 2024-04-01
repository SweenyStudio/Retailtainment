'use client';

import IconCross from '@/assets/icon-cross.webp';
import IconTick from '@/assets/icon-tick.webp';
import Logo from '@/assets/logo-white.svg';
import { bounceAnimation, staggeredAnimation } from '@/utils/animations';
import { DotIcon } from '@radix-ui/react-icons';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import Container from '../ui/container';
import { SubHeader } from '../ui/text';

export default function Results() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section className="text-center flex flex-col items-center justify-center">
      <Container>
        <SubHeader>Get Real Results </SubHeader>

        <motion.div
          initial="initial"
          ref={ref}
          animate={isInView ? 'animate' : 'initial'}
          variants={staggeredAnimation}
          className="md:grid md:grid-cols-4 gap-12 flex flex-col items-center justify-center mt-16 md:max-w-7xl mx-auto"
        >
          <Courses />
          <RetailTainment />
          <Agencies />
        </motion.div>
      </Container>
    </section>
  );
}

function Courses() {
  return (
    <motion.div
      variants={bounceAnimation}
      className="relative rounded-[50px] w-full border-dotted border-2 border-zinc-700 md:mt-10 p-10 h-60 "
    >
      <Image
        src={IconCross}
        alt="cross"
        className="absolute right-1/2 translate-x-1/2 -top-12 w-1/3"
      />
      <div className="p-3 bg-zinc-300 rounded-2xl">
        <p className="uppercase font-black font-gothic text-black text-2xl">
          DIY Courses?
        </p>
      </div>
      <div className="flex flex-col text-start items-start justify-start mt-4 gap-y-2">
        <div className="gap-x-2 flex flex-row text-zinc-700 font-medium leading-none tracking-tight ">
          <DotIcon width={15} height={15} className="w-4 h-4 " />
          <p>No feedback loop</p>
        </div>
        <div className="gap-x-2 flex flex-row text-zinc-700 font-medium leading-none tracking-tight">
          <DotIcon width={15} height={15} className="w-4 h-4 " />
          <p>99% Failure Rate</p>
        </div>
        <div className="gap-x-2 flex flex-row text-zinc-700 font-medium leading-none tracking-tight">
          <DotIcon width={15} height={15} className="w-4 h-4 " />
          <p>No Expert Guidance</p>
        </div>
      </div>
    </motion.div>
  );
}

function RetailTainment() {
  return (
    <motion.div
      variants={bounceAnimation}
      className="relative rounded-[50px] md:rounded-[100px] w-full col-span-2 items-center flex flex-col border-2  border-zinc-500 bg-zinc-900 p-10 h-96"
    >
      <Image
        src={IconTick}
        alt="tick"
        className="absolute right-1/2 translate-x-1/2 -top-12 w-1/3 md:w-1/6"
      />

      <div className="bg-zinc-950 p-8 rounded-3xl md:mt-6">
        <Image src={Logo} alt="logo  " className="w-72" />
      </div>
      <div className="flex flex-col items-center justify-start mt-4 gap-y-4">
        <div className="gap-x-2 flex flex-row text-zinc-100 font-bold font-gothic uppercase text-xl md:text-3xl ">
          <p>1. LEARN BY EXECUTING IN REAL TIME</p>
        </div>
        <div className="gap-x-2 flex flex-row text-zinc-100 font-bold font-gothic uppercase  text-xl md:text-3xl ">
          <p>2. DAILY PERFORMANCE FEEDBACK LOOP</p>
        </div>
        <div className="gap-x-2 flex flex-row text-zinc-100 font-bold font-gothic uppercase  text-xl md:text-3xl ">
          <p>3. CHIEFS ON DEMAND</p>
        </div>
      </div>
    </motion.div>
  );
}

function Agencies() {
  return (
    <motion.div
      variants={bounceAnimation}
      className="relative rounded-[50px] w-full border-dotted border-2 border-zinc-700 md:mt-10 p-10 h-72 "
    >
      <Image
        src={IconCross}
        alt="cross"
        className="absolute right-1/2 translate-x-1/2 -top-12 w-1/3"
      />
      <div className="p-3 bg-zinc-300 rounded-2xl">
        <p className="uppercase font-black font-gothic text-black text-2xl">
          Agency?
        </p>
      </div>
      <div className="flex flex-col text-start items-start justify-start mt-4 gap-y-2">
        <div className="gap-x-2 flex flex-row text-zinc-700 font-medium leading-none tracking-tight ">
          <DotIcon className="w-4 h-4 " />
          <p>Can&apos;t keep up with facebook</p>
        </div>
        <div className="gap-x-2 flex flex-row text-zinc-700 font-medium leading-none tracking-tight  ">
          <DotIcon width={15} height={15} className="w-4 h-4 " />
          <p>Not taking advantage of AI</p>
        </div>
        <div className="gap-x-2 flex flex-row text-zinc-700 font-medium leading-none tracking-tight ">
          <DotIcon width={15} height={15} className="w-4 h-4 " />
          <p>Minimal return on investment</p>
        </div>
        <div className="gap-x-2 flex flex-row text-zinc-700 font-medium leading-none tracking-tight  ">
          <DotIcon width={15} height={15} className="w-4 h-4 " />
          <p>Inflated performance reports</p>
        </div>
      </div>
    </motion.div>
  );
}
