'use client';

import Simon from '@/assets/simon.webp';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { SubHeader } from '../ui/text';

export default function AboutText() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section className="bg-zinc-100 py-16 bg-dot-black/30 relative rounded-2xl block shadow-xl shadow-white/30 z-0 ">
      <div className="absolute pointer-events-none z-10 inset-0  items-center justify-center bg-zinc-200 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] rounded-2xl block"></div>

      <div className="flex flex-col text-center items-center z-20 relative">
        <Container className=" max-w-7xl mx-auto">
          <p className="mb-6 text-zinc-800 max-w-7xl md:text-lg mx-auto">
            Retailtainment was conceived out of a pivotal moment that combined
            Simon Beard’s profound success with Culture Kings and a critical eye
            on the pitfalls within the digital marketing industry. When a
            marketing agency exploited a close friend&apos;s trust by claiming
            ownership over his ad account, Simon recognized a widespread
            problem: the lack of transparency and empowerment in digital
            marketing for e-commerce and retail entrepreneurs. This was the
            spark that ignited Retailtainment&apos;s mission; to elevate the
            next generation of ecommerce and retail brands through game-changing
            leverage, bringing together social media, content media, buying, and
            data all in-house. We&apos;re not just creating a flywheel;
            we&apos;re revolutionising how retail brands scale and thrive.
          </p>
          <div className="md:grid md:grid-cols-5 max-w-7xl items-center gap-x-12 mx-auto mt-16 text-zinc-800 md:text-lg ">
            <div className="col-span-3 flex flex-col">
              <p className=" italic relative">
                <span className="text-5xl absolute left-0 -top-6 md:-left-6 leading-none tracking-tight">
                  &quot;
                </span>
                <span className="text-5xl absolute -bottom-6 right-0 leading-none tracking-tight">
                  &quot;
                </span>
                I’ve always had a goal to &quot;write the new age playbook of
                retail”. In building Culture Kings, I knew we were doing
                something so different from other businesses. We are now
                pressure testing that playbook in other companies, and the
                scoreboard doesn’t lie, and I am certain this is carving out the
                right path for how business should be done. I want to continue
                to share this with even more ecommerce and retail entrepreneurs
                to allow them to truly unlock scale and growth. That feeling of
                checking your phone first thing when you wake up and your
                dashboards are all lit up in green. That feeling of bouncing out
                of bed with goosebumps of that &quot;OMG&quot; excitement. I
                know we are heading to a truly disrupted world with technology
                changing by the day, but I know resourceful entrepreneurs will
                grab this market share away from the dinosaurs. Having my
                grassroots from the markets - and a bit of carnie at heart
                myself - I want to help turn as many &quot;little
                businesses&quot; to “dinosaur slayers” as possible. <br />
              </p>
              <p className="md:text-2xl text-lg mt-6 self-end font-semibold leading-none tracking-tight">
                - Simon Beard, Founder
              </p>
            </div>
            <Image
              src={Simon}
              alt="Simon Beard"
              className="w-full h-suto mt-12 md:mt-0 md:col-span-2"
            />
          </div>
          <OurOrigin />
        </Container>
      </div>
    </section>
  );
}

function OurOrigin() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div className="mt-12 md:mt-36">
      <div>
        <SubHeader>Our Origin: Empowering Through Experience</SubHeader>
        <p className="md:text-lg mt-6 text-zinc-800">
          Simon’s journey from the ground up, from his early days influenced by
          the markets to achieving a monumental $600 million valuation with
          Culture Kings, showcases a path of relentless innovation and deep
          understanding of retail&sapos;s evolving landscape. Retailtainment is
          built on the foundation of this journey, aiming to democratise the
          tools and strategies that led to his success. Retailtainment is
          founded on the principle of empowering business owners across every
          facet of their enterprise. Embodying Simon Beard’s entrepreneurial
          spirit and his hands-on approach to success, the company stands as a
          bastion for businesses to not only learn but to master the intricacies
          of their operations. With a strong emphasis on internal capability,
          Retailtainment equips companies with ‘Chiefs on Demand’ for
          executive-level insight in marketing, technology, finance, and beyond,
          ensuring a comprehensive grasp over business growth. The objective is
          clear:{' '}
          <strong>
            to train the quarterbacks within these companies, transforming savvy
            entrepreneurs into dynamic leaders who drive their businesses
            forward in an ever-changing market landscape, ensuring profitability
            and scalability at every turn.
          </strong>
        </p>
      </div>
      <div className="md:grid md:grid-cols-2 gap-6 mt-12 md:mt-36 text-start">
        <div>
          <SubHeader className="lg:text-3xl md:text-2xl text-xl">
            Empowerment as Our Core
          </SubHeader>
          <p className="md:text-lg text-zinc-800 mt-2">
            At the heart of Retailtainment is a commitment to teaching business
            owners to self-manage their digital advertising effectively. Simon
            discovered that with just a few dedicated hours each week, anyone
            could master the intricacies of their ad accounts, leading to
            profound insights and direct impact on their business’s growth. This
            approach is about more than just marketing; it’s about instilling a
            holistic understanding of business through the lens of digital
            engagement.
          </p>
        </div>
        <div className="mt-12 md:mt-0">
          <SubHeader className="lg:text-3xl md:text-2xl text-xl">
            Our Philosophy: Knowledge, Autonomy, and Agility
          </SubHeader>
          <p className="md:text-lg text-zinc-800 mt-2">
            Retailtainment champions the belief that the power of digital
            marketing lies in creativity and the smart use of data, rather than
            opaque, complex media buying strategies. With advancements in AI and
            changes in how platforms like Facebook operate, Simon argues that
            understanding your audience and crafting compelling content are now
            the keys to successful online advertising. He advocates for a daily
            feedback loop, allowing businesses to quickly adapt their strategies
            based on real-time data analysis, fostering a culture of continuous
            improvement and responsiveness.
          </p>
        </div>
        <div className="mt-12 md:mt-0">
          <SubHeader className="lg:text-3xl md:text-2xl text-xl">
            Chief as a Service: Expertise Without the Overheads
          </SubHeader>
          <p className="md:text-lg text-zinc-800 mt-2">
            Recognising the inefficiency in traditional corporate structures for
            emerging businesses, Retailtainment introduces the concept of
            &quot;Chief as a Service.&quot; This innovative model provides
            access to expert advice across various domains—marketing,
            technology, finance—without the need for full-time executive
            positions. It&apos;s a cost-effective way to overcome common hurdles
            and accelerate growth.
          </p>
        </div>
        <div className="mt-12 md:mt-0">
          <SubHeader className="lg:text-3xl md:text-2xl text-xl">
            Joining Retailtainment: An Invitation to Scale and Innovate
          </SubHeader>
          <p className="md:text-lg text-zinc-800 mt-2">
            Retailtainment is not just a service; it&apos;s a partnership with
            select businesses committed to growth, innovation, and the drive to
            stand out in a crowded market. We are looking for entrepreneurs who
            are passionate about their products and eager to see their
            dashboards light up green every morning. It’s an opportunity to join
            a community dedicated to reshaping the retail landscape, turning
            small businesses into formidable competitors against industry
            giants.
          </p>
        </div>
      </div>
      <div className="mt-12 md:mt-32">
        <SubHeader>Your Future with Retailtainment</SubHeader>
        <p className="md:text-lg mt-6 text-zinc-800">
          Our vision for Retailtainment is clear: to share the playbook that
          made Culture Kings a powerhouse and to guide other entrepreneurs
          through the complexities of modern retail and e-commerce. It’s about
          creating a movement of businesses that are not just surviving but
          thriving, leveraging technology, creativity, and strategic insight to
          capture market share and achieve sustainable growth.
          <strong>
            to train the quarterbacks within these companies, transforming savvy
            entrepreneurs into dynamic leaders who drive their businesses
            forward in an ever-changing market landscape, ensuring profitability
            and scalability at every turn.
          </strong>
        </p>
        <div>
          <Button asChild size="lg" className="z-10 mt-6">
            <Link href={'/apply'}>Apply To Join Waitlist</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
