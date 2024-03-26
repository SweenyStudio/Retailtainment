import Container from '@/components/ui/container';
import Gif600 from '@/assets/600m.gif';
import Image from 'next/image';
import { SubHeader } from '../ui/text';
import usp1 from '@/assets/1.webp';
import usp2 from '@/assets/2.webp';
import usp3 from '@/assets/3.webp';

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
  return (
    <section className="bg-neutral-100 py-16 bg-dot-black/30 relative rounded-2xl block shadow-xl shadow-white/30 ">
      <div className="absolute pointer-events-none z-10 inset-0  items-center justify-center bg-neutral-200 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] rounded-2xl block"></div>

      <div className="flex flex-col text-center items-center z-20 relative">
        <Container>
          <SubHeader className="mb-6">
            PROVEN PLAYBOOK ON HOW TO SCALE A BRAND TO
          </SubHeader>
        </Container>
        <Image
          src={Gif600}
          alt="0 to 600m"
          className="border-y border-neutral-300 w-full sm:w-1/2 shadow-xl sm:rounded-full  "
        />
        <Container>
          <SubHeader className="mt-6">
            COMPLETELY BOOTSTRAPPED. NO DEBT, NO INVESTORS.
          </SubHeader>
          <div className="border-y border-neutral-700 divide-y divide-neutral-700 mt-6">
            {Usps.map((usp, index) => (
              <div
                key={index}
                className="flex flex-row items-center justify-center py-6 h-52  "
              >
                <div className="w-24 h-24 ">
                  <Image
                    src={usp.image}
                    alt={usp.title}
                    className="w-full h-full animate-hover"
                  />
                </div>
                <div className="w-full flex flex-col justify-center">
                  <SubHeader className="mt-4 text-xl text-start">
                    {usp.title}
                  </SubHeader>
                  <p className="mt-4 text-start text-base tracking-normal leading-tight text-neutral-600">
                    {usp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
