'use client';
import { InfiniteMovingPhotos } from '../ui/infinite-moving-photos';

import Image1 from '@/assets/ugc/1.webp';
import Image10 from '@/assets/ugc/10.webp';
import Image11 from '@/assets/ugc/11.webp';
import Image12 from '@/assets/ugc/12.webp';
import Image2 from '@/assets/ugc/2.webp';
import Image3 from '@/assets/ugc/3.webp';
import Image4 from '@/assets/ugc/4.webp';
import Image5 from '@/assets/ugc/5.webp';
import Image6 from '@/assets/ugc/6.webp';
import Image7 from '@/assets/ugc/7.webp';
import Image8 from '@/assets/ugc/8.webp';
import Image9 from '@/assets/ugc/9.webp';

export default function ScrollingPhotos() {
  return (
    <section className="flex py-16 flex-col items-center relative ">
      <div className=" rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingPhotos items={Photos} direction="right" speed="slow" />
      </div>
    </section>
  );
}

const Photos = [
  {
    image: Image1,
    name: 'Image 1',
  },
  {
    image: Image2,
    name: 'Image 2',
  },
  {
    image: Image3,
    name: 'Image 3',
  },
  {
    image: Image4,
    name: 'Image 4',
  },
  {
    image: Image5,
    name: 'Image 5',
  },
  {
    image: Image6,
    name: 'Image 6',
  },
  {
    image: Image7,
    name: 'Image 7',
  },
  {
    image: Image8,
    name: 'Image 8',
  },
  {
    image: Image9,
    name: 'Image 9',
  },
  {
    image: Image10,
    name: 'Image 10',
  },
  {
    image: Image11,
    name: 'Image 11',
  },
  {
    image: Image12,
    name: 'Image 12',
  },
];
