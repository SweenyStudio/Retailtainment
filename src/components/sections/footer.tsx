import FacebookLogo from '@/assets/icons/facebook.svg';
import InstagramLogo from '@/assets/icons/instagram.svg';
import LinkedInLogo from '@/assets/icons/linkedin.svg';
import TiktokLogo from '@/assets/icons/tiktok.svg';
import YoutubeLogo from '@/assets/icons/youtube.svg';
import Logo from '@/assets/logo-white.svg';
import Container from '@/components/ui/container';
import Image from 'next/image';
import Link from 'next/link';
import { SubHeaderLight } from '../ui/text';

const Socials = [
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/simonbeard',
    logo: InstagramLogo,
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/simonbeardck/',
    logo: LinkedInLogo,
  },
  {
    name: 'TikTok',
    link: 'https://www.youtube.com/@simonbeard_',
    logo: TiktokLogo,
  },
  {
    name: 'YouTube',
    link: 'https://www.youtube.com/simonbeard',
    logo: YoutubeLogo,
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/simonbeardofficial',
    logo: FacebookLogo,
  },
];

export default function Footer() {
  return (
    <section className="py-16">
      <Container>
        <div className="flex flex-col justify-center items-center gap-y-6">
          <Image src={Logo} alt="Logo" className="h-12 w-auto" />
          <SubHeaderLight className="text-center">
            SCALING THE NEXT GENERATION OF BRANDS
          </SubHeaderLight>
          <div className="flex flex-row gap-x-4 mt-12">
            {Socials.map((social, index) => (
              <Link
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={social.logo}
                  alt={social.name}
                  className="h-8 w-8"
                />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
