'use client';

import { bounceAnimation, staggeredAnimation } from '@/utils/animations';
import { motion, useInView } from 'framer-motion';

import Expert from '@/assets/icons/expert.svg';
import Growth from '@/assets/icons/growth.svg';
import House from '@/assets/icons/house.svg';
import Navigation from '@/assets/icons/navigation.svg';
import Rocket from '@/assets/icons/rocket.svg';
import Store from '@/assets/icons/store.svg';
import Cross from '@/assets/icons/x.svg';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import Container from '../ui/container';
import { SubHeaderLight } from '../ui/text';

const BusinessValues = [
  {
    image: Expert,
    description: 'In e-commerce, retail, or wholesale sectors.',
  },
  {
    image: Growth,
    description:
      'Wanting to internalise content and marketing instead of paying $10k/month to outside agencies.',
  },
  {
    image: House,
    description: 'Have a high focus on profitable growth.',
  },
  {
    image: Navigation,
    description:
      'Valuing expert-driven feedback loops for continuous improvement.',
  },
  {
    image: Rocket,
    description:
      'Needing help navigating scale challenges in finance, inventory and AI without the budget for hiring expert-level roles in-house.',
  },
  {
    image: Store,
    description: 'Have a high willingness to scale.',
  },
];

const notForYou = [
  {
    image: Cross,
    description: 'Under $1M yearly turnover',
  },
  {
    image: Cross,
    description: 'Constricted supply chains/unable to get more product quickly',
  },
  {
    image: Cross,
    description: 'Low repeat customer rate',
  },
  {
    image: Cross,
    description: 'Prefer to outsource to agencies',
  },
  {
    image: Cross,
    description: 'Start up companies',
  },
];

export default function Suited() {
  return (
    <section className="py-16 bg-black">
      <Container className="flex flex-col items-center justify-center">
        <SubHeaderLight className="text-center">
          SUITED TO YOU IF YOU’RE A BUSINESS:
        </SubHeaderLight>
        <SubHeaderLight className="text-center mt-2">
          WITH <span className="text-retailGold">$1M - $50M</span> YEARLY
          TURNOVER +
        </SubHeaderLight>
        <SuitedFor />
        <hr className="h-px border-t-zinc-400 bg-zinc-400 w-[150px] my-10 md:my-20 mx-auto" />
        <SubHeaderLight className="text-center">NOT FOR YOU:</SubHeaderLight>
        <NotForYou />
        <motion.div variants={bounceAnimation} className="mt-12 mx-auto">
          <Button asChild size="lg" className="z-10">
            <Link href={'/apply'}>Apply To Join Waitlist</Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}

function SuitedFor() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div
      initial="initial"
      ref={ref}
      animate={isInView ? 'animate' : 'initial'}
      variants={staggeredAnimation}
      className="grid md:grid-cols-6 gap-6 mt-12"
    >
      {BusinessValues.map((value, index) => (
        <motion.div
          variants={bounceAnimation}
          key={index}
          className=" flex flex-row md:flex-col gap-2 items-center"
        >
          <Image src={value.image} alt="icon" className="w-16 h-16" />
          <p className="text-start md:text-center md:mt-4 text-zinc-300">
            {value.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}

function NotForYou() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div
      className="grid md:grid-cols-5 gap-6 mt-12 mx-auto"
      initial="initial"
      ref={ref}
      animate={isInView ? 'animate' : 'initial'}
      variants={staggeredAnimation}
    >
      {notForYou.map((value, index) => (
        <motion.div
          key={index}
          variants={bounceAnimation}
          className=" flex flex-row md:flex-col gap-2 items-center"
        >
          <Image src={value.image} alt="icon" className="w-16 h-16" />
          <p className="text-start md:text-center md:mt-4 text-zinc-300">
            {value.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
