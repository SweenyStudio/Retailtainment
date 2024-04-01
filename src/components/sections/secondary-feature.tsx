'use client';

import { bounceAnimation, staggeredAnimation } from '@/utils/animations';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SubHeader, SubHeaderLight } from '../ui/text';

import Container from '@/components/ui/container';
import { Button } from '../ui/button';

import Link from 'next/link';

import { Carousel } from 'flowbite-react';
import Results from './results';

const Chiefs = [
  {
    name: 'Chief Financial Officer',
    acronym: 'CFO',
    description:
      'Are you growing a business or a tumor? Sustainable, profitable growth is our North star.',
  },
  {
    name: 'Chief AI Officer',
    acronym: 'CAIO',
    description:
      'Translating the latest innovations into actionable execution plans for your business.',
  },
  {
    name: 'Chief Marketing Officer',
    acronym: 'CMO',
    description:
      'The art and science of marketing coming together across brand & performance.',
  },
  {
    name: 'Chief Customer Officer',
    acronym: 'CCO',
    description:
      'Using the latest data to enhance customer experiences and leverage feedback loops for sustained month-on-month growth.',
  },
  {
    name: 'Chief Technology Officer',
    acronym: 'CTO',
    description:
      'Leverage early mover tech advantages through a rigorously tested stress-test playbook.',
  },
  {
    name: 'Chief Retention Officer',
    acronym: 'CRO',
    description:
      'Develop a best-in-class funnel combining email, SMS, and remarketing strategies to retain customers for life.',
  },
];

export default function SecondaryFeature() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.section
      initial="initial"
      ref={ref}
      animate={isInView ? 'animate' : 'initial'}
      variants={staggeredAnimation}
      className="bg-zinc-100 py-16 bg-dot-black/30 relative rounded-2xl block shadow-xl shadow-white/30 z-0 "
    >
      <div className="absolute pointer-events-none z-10 inset-0  items-center justify-center bg-zinc-200 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] rounded-2xl block"></div>

      <div className="flex flex-col justify-center text-center items-center z-20 relative">
        <Container>
          <motion.div variants={bounceAnimation}>
            <SubHeader className="mb-6 ">
              From $1M - $50M BUSINESS, <br className="hidden md:block" /> You
              don&apos;t need to hire full time chiefs.
            </SubHeader>
          </motion.div>

          <motion.div variants={bounceAnimation}>
            <SubHeader className="mt-6 font-medium">
              Get Access to{' '}
              <span className="font-bold underline underline-offset-4 text-black">
                $1,500,000
              </span>{' '}
              Worth Of Salaries For
            </SubHeader>
          </motion.div>
          <motion.div
            variants={bounceAnimation}
            className="py-6 px-12 items-center rounded-full bg-black w-fit mt-6 self-center mx-auto"
          >
            <SubHeaderLight>
              {' '}
              ONLY{' '}
              <span className="text-retailGreen underline underline-offset-4 ">
                {' '}
                $2,500
              </span>{' '}
              /month
            </SubHeaderLight>
          </motion.div>
          <hr className="h-px border-t-neutral-400 bg-neutral-400 w-[150px] my-10 md:my-20 mx-auto" />
          <motion.div variants={bounceAnimation}>
            <DesktopChiefBoxes />
            <MobileChiefBoxes />
          </motion.div>
          <motion.div variants={bounceAnimation}>
            <Button asChild size="lg" className="z-10 mt-6">
              <Link href={'/apply'}>Apply To Join Waitlist</Link>
            </Button>
          </motion.div>
          <hr className="h-px border-t-zinc-400 bg-zinc-400 w-[150px] my-10 md:my-20 mx-auto" />
          <Results />
        </Container>
      </div>
    </motion.section>
  );
}

function DesktopChiefBoxes() {
  return (
    <div className="mt-6 md:grid md:grid-cols-3 gap-12 hidden">
      {Chiefs.map((chief) => (
        <ChiefBox
          key={chief.name}
          name={chief.name}
          acronym={chief.acronym}
          description={chief.description}
        />
      ))}
    </div>
  );
}

function MobileChiefBoxes() {
  return (
    <Carousel
      className="mt-6 block md:hidden rounded-none overflow-auto"
      slide={false}
    >
      {Chiefs.map((chief) => (
        <ChiefBox
          key={chief.name}
          name={chief.name}
          acronym={chief.acronym}
          description={chief.description}
        />
      ))}
    </Carousel>
  );
}

function ChiefBox({
  name,
  acronym,
  description,
}: {
  name: string;
  acronym: string;
  description: string;
}) {
  return (
    <div className="relative h-72 p-4 md:p-8 border-zinc-500 border bg-grid-small-white/20 bg-zinc-950">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-black" />
      <p className="absolute text-[120px] lg:text-[160px] leading-none font-black tracking-tight font-gothic text-zinc-800  left-6 top-6">
        {acronym}
      </p>
      <div className="flex flex-col justify-between h-full w-full">
        <SubHeader className="text-start text-5xl text-zinc-100">
          {name}
        </SubHeader>
        <p className="text-base text-start text-zinc-300">{description}</p>
      </div>
    </div>
  );
}

const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
