'use client';

import {
  bounceAnimation,
  linkAnimation,
  menuItemAnimation,
  navigationAnimation,
  sidebarAnimation,
  staggeredAnimation,
} from '@/utils/animations';
import { motion, useCycle } from 'framer-motion';

import Container from '@/components/ui/container';

import { mainMenu } from '@/config/navigation';
import { useDimensions } from '@/utils/useDimensions';
import { useRef } from 'react';
import Logo from '@/assets/logo-white.svg';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Path = (props: {
  d?: string;
  variants?: any;
  transition?: any;
  initial?: string;
  animate?: string;
}) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#d4d4d4"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }: { toggle: () => void }) => (
  <button
    onClick={toggle}
    className="fixed  left-[8px] top-[8px] z-30 flex h-16 w-16 items-center justify-center rounded-full  outline-none text-slate-300"
  >
    <svg width="20" height="20" viewBox="0 0 20 20">
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </button>
);

function MobileNavigation({
  open,
  toggleOpen,
}: {
  open: boolean;
  toggleOpen: () => void;
}) {
  return (
    <motion.div
      className={`width-72 padding-6 fixed top-24 flex h-screen flex-col gap-y-12 text-2xl text-white ${
        open ? 'z-40' : 'z-0'
      }`}
      variants={navigationAnimation}
    >
      {mainMenu.map((item, index) => (
        <motion.div
          key={item.path}
          variants={menuItemAnimation}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            className="flex w-full gap-x-2 items-center flex-row "
            href={item.path}
            onClick={toggleOpen}
          >
            {item.title}
            {item.icon ? (
              <item.icon className="h-6 w-6 text-slate-300" />
            ) : null}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}

function MobileNavbar() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const dimensions = useDimensions(containerRef);
  const height = dimensions ? dimensions.height : 0;
  return (
    <main>
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
        className=" flex lg:hidden"
      >
        <motion.div className="background" variants={sidebarAnimation} />
        <MobileNavigation open={isOpen} toggleOpen={toggleOpen} />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
      <motion.a
        variants={bounceAnimation}
        className="absolute right-[12px] top-[14px] font-coolvetica text-3xl uppercase text-white lg:hidden"
        href="/"
      >
        <Image src={Logo} alt="Logo" />
      </motion.a>
    </main>
  );
}

function DesktopNavbar() {
  return (
    <motion.header
      initial="initial"
      animate="animate"
      variants={staggeredAnimation}
      className="hidden items-center justify-between p-5 lg:flex lg:flex-row "
    >
      <motion.a
        variants={bounceAnimation}
        className="z-10 hidden font-gothic h-full w-auto text-3xl uppercase text-white lg:flex"
        href="/"
      >
        <Image src={Logo} alt="Logo h-12 w-auto" />
      </motion.a>
      <motion.div
        variants={bounceAnimation}
        className="mt-2 hidden w-full flex-col lg:mt-0 lg:flex lg:w-auto lg:flex-row lg:text-lg"
      >
        {mainMenu.map((item) => (
          <Link
            key={item.title}
            href={item.path}
            className=" z-10 cursor-pointer text-white lg:mx-4"
            passHref
          >
            <motion.div
              variants={linkAnimation}
              initial="initial"
              whileHover="hover"
              className="gap-x-2 flex flex-row"
            >
              {item.title}
              {item.icon ? <item.icon className="h-6 w-6" /> : null}
            </motion.div>
          </Link>
        ))}
      </motion.div>
      <motion.div variants={bounceAnimation}>
        <Button className="z-10 hidden lg:flex" size="default">
          <Link href="/apply">Join Waitlist</Link>
        </Button>
      </motion.div>
    </motion.header>
  );
}

export default function Navbar() {
  return (
    <Container>
      <MobileNavbar />
      <DesktopNavbar />
    </Container>
  );
}
