'use client';

import React from 'react';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';
import LogoAustralian from '@/assets/logos/australian.svg';
import LogoFinancial from '@/assets/logos/financial-review.svg';
import LogoForbes from '@/assets/logos/forbes.svg';
import LogoShopify from '@/assets/logos/shopify.svg';
import { SubHeaderLight } from '../ui/text';

export default function ScrollingLogos() {
  return (
    <section className="flex pt-16 flex-col items-center relative ">
      <p className="text-slate-300">As Seen In</p>
      <div className=" rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={Logos} direction="right" speed="slow" />
      </div>
    </section>
  );
}

const Logos = [
  {
    name: 'The Australian',
    image: LogoAustralian,
  },
  {
    name: 'Financial Review',
    image: LogoFinancial,
  },
  {
    name: 'Forbes',
    image: LogoForbes,
  },
  {
    name: 'Shopify',
    image: LogoShopify,
  },
];
