import BeardAdvisoryLogo from '@/assets/icons/beard-advisory-logo.svg';
import BeardAdvisoryLogoLrg from '@/assets/icons/beard-advisory.svg';
import Container from '@/components/ui/container';
import Image from 'next/image';
import Link from 'next/link';

export default function BeardAdvisoryCTA() {
  return (
    <section className="py-16 bg-zinc-900">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-y-4 justify-center md:justify-between max-w-7xl mx-auto">
          <div>
            <h3 className=" text-retailGold font-gothic text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-none bg-clip-text uppercase text-center md:text-start ">
              Over $50 million in turn over?
            </h3>
            <div className="text-center text-zinc-50 md:text-start text-2xl tracking-tight ">
              <Link
                className="underline underline-offset-2 font-medium"
                href="https://beardadvisory.com/"
                target="_blank"
              >
                Beard Advisory
              </Link>{' '}
              may be a more suitable solution
            </div>{' '}
          </div>
          <Link
            className="p-6 rounded-3xl  bg-white/10 hover:bg-white/20 duration-300 transition-colors flex flex-row justify-center gap-x-2 items-center"
            href="https://beardadvisory.com"
            target="_blank"
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
