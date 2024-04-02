'use client';

import LogoAustralian from '@/assets/logos/australian.svg';
import LogoFinancial from '@/assets/logos/financial-review.svg';
import LogoForbes from '@/assets/logos/forbes.svg';
import LogoShopify from '@/assets/logos/shopify.svg';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';

export default function ScrollingLogos() {
  return (
    <section className="flex pt-16 flex-col items-center relative ">
      <p className="text-zinc-300">As Seen In</p>
      <div className=" rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={Logos}
          direction="right"
          speed="slow"
          pauseOnHover={false}
        />
      </div>
    </section>
  );
}

const Logos = [
  {
    name: 'The Australian',
    image: LogoAustralian,
    href: '/about',
  },
  {
    name: 'Financial Review',
    image: LogoFinancial,
    href: '/about',
  },
  {
    name: 'Forbes',
    image: LogoForbes,
    href: '/about',
  },
  {
    name: 'Shopify',
    image: LogoShopify,
    href: '/about',
  },
];
