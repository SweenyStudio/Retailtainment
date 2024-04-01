'use client';

import { bounceAnimation, staggeredAnimation } from '@/utils/animations';
import { motion, useInView } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

import Arrow from '@/assets/arrow.webp';
import image1 from '@/assets/flywheel/1.webp';
import image2 from '@/assets/flywheel/2.webp';
import image3 from '@/assets/flywheel/3.webp';
import image4 from '@/assets/flywheel/4.webp';
import Container from '@/components/ui/container';
import { Carousel } from 'flowbite-react';
import { useRef } from 'react';
import { SubHeaderLight } from '../ui/text';

const FlyWheelObjects = [
  {
    title: 'Customer Context',
    image: image1,
  },
  {
    title: 'Pricing',
    image: image2,
  },
  {
    title: 'Content Process',
    image: image3,
  },
  {
    title: 'Daily Loop',
    image: image4,
  },
];

export default function Flywheel() {
  return (
    <section className="py-16 bg-black ">
      <Container>
        <FlyWheelHeading />
        <FlyWheelMobile />
        <div className="bg-grid-small-white/40 z-10">
          {FlyWheelObjects.map((object, index) => (
            <FlyWheelStep
              index={index}
              title={object.title}
              image={object.image}
              key={object.title}
              flip={index % 2 === 0}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function FlyWheelContents() {
  return (
    <motion.section
      variants={bounceAnimation}
      className="relative mt-6 w-full max-w-7xl hidden md:block "
    >
      <div className="flex gap-5 items-start">
        {FlyWheelObjects.map((object, index) => (
          <div className="flex flex-col basis-1/4" key={object.title}>
            <div className="flex flex-col px-1.5 m-auto text-2xl font-bold tracking-tighter leading-10 text-center text-white uppercase">
              <div className="flex justify-center items-center self-center rounded-3xl border-2 border-white border-opacity-20 h-11 w-11">
                {index + 1}
              </div>
              <div className="mt-2.5">{object.title}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex absolute w-full justify-center gap-14 top-5">
        <hr className="w-1/5 border-dashed border-white border-t-2 after:content-['•']" />
        <hr className="w-1/5 border-dashed border-white border-t-2 after:content-['•']" />
        <hr className="w-1/5 border-dashed border-white border-t-2 after:content-['•']" />
      </div>
    </motion.section>
  );
}

function FlyWheelHeading() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div
      initial="initial"
      ref={ref}
      animate={isInView ? 'animate' : 'initial'}
      variants={staggeredAnimation}
      className="flex flex-col items-center justify-center"
    >
      <motion.p variants={bounceAnimation} className="text-zinc-300">
        Introducing the
      </motion.p>
      <motion.div variants={bounceAnimation}>
        <SubHeaderLight className="text-center mt-2">
          Profitable Scaling Flywheel
        </SubHeaderLight>
      </motion.div>
      <FlyWheelContents />
    </motion.div>
  );
}

function FlyWheelMobile() {
  return (
    <div className="h-96 md:hidden">
      <Carousel slide={false} className="border-y border-zinc-800 mt-6">
        {FlyWheelObjects.map((object, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-between"
          >
            <div className="flex flex-row items-center justify-start gap-x-2 text-start">
              <SubHeaderLight className="text-start text-7xl tracking-tight opacity-50 font-black">
                0{index + 1}
              </SubHeaderLight>
              <SubHeaderLight className=" text-start text-3xl tracking-tight">
                {object.title}
              </SubHeaderLight>
            </div>
            <Image
              src={object.image}
              alt={object.title}
              className="h-72 w-auto self-center"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

function FlyWheelStep({
  title,
  image,
  index,
  flip,
}: {
  title: string;
  image: StaticImageData;
  index: number;
  flip?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div
      initial="initial"
      ref={ref}
      animate={isInView ? 'animate' : 'initial'}
      variants={staggeredAnimation}
      className="hidden md:grid grid-cols-2 p-12 relative"
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex flex-col items-center justify-center  gap-y-12">
        <div className="flex flex-row items-center justify-center relative ">
          <motion.p
            variants={bounceAnimation}
            className="text-[200px] leading-none tracking-tight text-zinc-700 font-bold"
          >
            0{1 + index}
          </motion.p>
          <motion.div variants={bounceAnimation}>
            <SubHeaderLight className="md:text-7xl leading-none -tranzinc-x-8 tracking">
              {title}
            </SubHeaderLight>
          </motion.div>
        </div>
        <motion.div variants={bounceAnimation}>
          <Image
            src={Arrow}
            className={` w-48 h-auto ${flip ? 'scale-x-[-1] rotate-[-127deg]' : 'rotate-[127deg]'} `}
            alt="arrow"
          />
        </motion.div>
      </div>
      <motion.div
        variants={bounceAnimation}
        className={`${flip ? 'order-last' : 'order-first'}`}
      >
        <Image
          src={image}
          alt="Customer Context"
          className="w-full h-auto p-16 "
        />
      </motion.div>
    </motion.div>
  );
}
