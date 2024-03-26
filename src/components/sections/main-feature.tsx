'use client';

import Container from '@/components/ui/container';
import Gif600 from '@/assets/600m.gif';
import Image from 'next/image';
import { SubHeader } from '../ui/text';
import usp1 from '@/assets/1.webp';
import usp2 from '@/assets/2.webp';
import usp3 from '@/assets/3.webp';
import { motion, useInView } from 'framer-motion';
import { bounceAnimation, staggeredAnimation } from '@/utils/animations';
import { useRef } from 'react';
import ScrollingLogos from './scrolling-logos';

const Usps = [
  {
    image: usp1,
    title: 'Leverage AI Experts',
    description:
      'Unlock the full potential of your business with our AI expertise, driving innovation in marketing, ecommerce, retail, data, culture, and finance.',
  },
  {
    image: usp2,
    title: 'Bring Everything In-House',
    description:
      'Master the transformative strategies that will bring your social media, content creation, purchasing, and data analytics entirely in-house.',
  },
  {
    image: usp3,
    title: 'Scale Your Brand Profitably',
    description:
      'Streamline your operations and supercharge your profitability with our innovative strategies that make your business leaner, more agile, and significantly ahead in efficiency.',
  },
];

export default function MainFeature() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.section
      initial="initial"
      ref={ref}
      animate={isInView ? 'animate' : 'initial'}
      variants={staggeredAnimation}
      className="bg-slate-100 py-16 bg-dot-black/30 relative rounded-2xl block shadow-xl shadow-white/30 z-0 "
    >
      <div className="absolute pointer-events-none z-10 inset-0  items-center justify-center bg-slate-200 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] rounded-2xl block"></div>

      <div className="flex flex-col text-center items-center z-20 relative">
        <Container>
          <motion.div variants={bounceAnimation}>
            <SubHeader className="mb-6">
              PROVEN PLAYBOOK ON HOW TO SCALE A BRAND TO
            </SubHeader>
          </motion.div>
        </Container>
        <Image
          src={Gif600}
          alt="0 to 600m"
          className="border-y border-slate-300 w-full sm:w-1/2 shadow-xl sm:rounded-full  "
        />
        <Container>
          <motion.div variants={bounceAnimation}>
            <SubHeader className="mt-6">
              COMPLETELY BOOTSTRAPPED. NO DEBT, NO INVESTORS.
            </SubHeader>
          </motion.div>
          <UspComponent />
        </Container>
      </div>
    </motion.section>
  );
}

function UspComponent() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div
      initial="initial"
      ref={ref}
      animate={isInView ? 'animate' : 'initial'}
      variants={staggeredAnimation}
      className="border-y md:border-y-0 flex flex-col md:flex-row  border-slate-700 divide-y md:divide-y-0 md:divide-x divide-slate-700 mt-6"
    >
      {Usps.map((usp, index) => (
        <motion.div
          key={index}
          variants={bounceAnimation}
          className="flex flex-row items-center justify-center py-6 h-52 md:h-fit  "
        >
          <div className="w-24 h-24 ">
            <Image
              src={usp.image}
              alt={usp.title}
              className="w-full h-full animate-hover"
            />
          </div>
          <div className="w-full flex flex-col justify-center">
            <SubHeader className="mt-4 text-xl md:text-2xl text-start">
              {usp.title}
            </SubHeader>
            <p className="mt-4 text-start text-base tracking-normal leading-tight text-slate-600">
              {usp.description}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
