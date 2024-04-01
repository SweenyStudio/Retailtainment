import BeardAdvisoryLogo from '@/assets/icons/beard-advisory-logo.svg';
import BeardAdvisoryLogoLrg from '@/assets/icons/beard-advisory.svg';
import Container from '@/components/ui/container';
import Image from 'next/image';
import Link from 'next/link';
import { SubHeaderLight } from '../ui/text';

export default function BeardAdvisoryCTA() {
  return (
    <section className="py-16 bg-zinc-900">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-y-4 justify-center md:justify-between max-w-7xl mx-auto">
          <div>
            <SubHeaderLight className=" from-retailGold to-retailGold text-center md:text-start ">
              Over $50 million in turn over?
            </SubHeaderLight>
            <p className="text-center md:text-start text-2xl tracking-tight ">
              <span className="underline underline-offset-2 font-medium">
                Beard Advisory
              </span>{' '}
              may be a more suitable solution
            </p>{' '}
          </div>
          <Link
            className="p-6 rounded-3xl  bg-white/10 hover:bg-white/20 duration-300 transition-colors flex flex-row justify-center gap-x-2 items-center"
            href="https://beardadvisory.com"
          >
            <Image
              src={BeardAdvisoryLogo}
              alt="Beard Advisory Logo"
              className="w-16 h-16"
            />
            <Image
              src={BeardAdvisoryLogoLrg}
              alt="Beard Advisory Logo"
              className=""
            />
          </Link>
        </div>
      </Container>
    </section>
  );
}
