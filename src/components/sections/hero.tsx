"use client";

import { motion, useScroll, useInView, useTransform } from "framer-motion";

import { Button } from "@/components/ui/button";
import CircleObject from "@/assets/circle.webp";
import Container from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";
import LogoWhite from "@/assets/logo-white.svg";
import SquareObject from "@/assets/square-object.webp";
import StarObject from "@/assets/star-object.webp";
import { SubHeaderLight } from "../ui/text";
import ThingoObject from "@/assets/thingo.webp";
import { useRef } from "react";
import ScrollingLogos from "./scrolling-logos";
import { bounceAnimation, staggeredAnimation } from "@/utils/animations";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { scrollYProgress } = useScroll({ target: ref });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <>
      <section className="bg-black relative pt-32 pb-16 dark:bg-grid-white/[0.12] overflow-hidden font-gothic items-center flex flex-col justify-center  ">
        <motion.div
          initial="initial"
          ref={ref}
          animate={isInView ? "animate" : "initial"}
          variants={staggeredAnimation}
        >
          <Container>
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center z-[4] bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            <Image
              src={LogoWhite}
              alt="Logo"
              className="w-full mx-auto md:w-4/5 h-auto z-[1] relative "
            />

            <div className="flex flex-col text-center justify-center items-center">
              <motion.div variants={bounceAnimation}>
                <SubHeaderLight className="mt-4 max-w-3xl">
                  Ecommerce & Retail Accelerator
                </SubHeaderLight>
              </motion.div>
              <motion.p
                variants={bounceAnimation}
                className="mt-4 z-0 max-w-3xl font-sans font-light text-md md:text-lg tracking-normal leading-tight text-slate-300"
              >
                Elevating today&apos;s visionaries into tomorrow&apos;s market
                leaders. We&apos;re here to transform your brand&apos;s
                potential into unparalleled growth and success.
              </motion.p>
              <motion.div variants={bounceAnimation}>
                <Button asChild size="lg" className="z-10 mt-6">
                  <Link href={"/apply"}>Apply To Join Waitlist</Link>
                </Button>
              </motion.div>
            </div>
          </Container>
          <motion.div className="w-screen" variants={bounceAnimation}>
            <ScrollingLogos />
          </motion.div>
        </motion.div>

        <motion.div
          style={{
            y: y1,
          }}
          animate={{
            rotate: [0, 3, 6, 3, -1, -2, 0],
            x: [0, 10, 0, -10, 0, 10, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
          }}
          className="absolute top-4 left-2 w-36 md:w-48 h-auto "
        >
          <Image src={StarObject} alt="Star" className=" w-full m-2 h-auto " />
        </motion.div>
        <motion.div
          style={{
            y: y2,
          }}
          animate={{
            rotate: [0, -8, -2, 3, -1, 7, 0],
            x: [0, -11, -3, -10, 0, 10, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
          }}
          className="absolute -bottom-4 left-2 w-24 md:w-36 h-auto z-1"
        >
          <Image
            src={SquareObject}
            alt="Square"
            className=" w-full m-2 h-auto "
          />
        </motion.div>
        <motion.div
          style={{
            y: y3,
          }}
          animate={{
            rotate: [0, -3, -9, -12, -5, 4, 0],
            x: [0, 9, 2, 3, 7, 12, -1, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
          }}
          className="absolute -bottom-[8rem] -right-[6rem] z-1 w-60 lg:w-96 animate-drift3 "
        >
          <Image
            src={CircleObject}
            alt="Circle"
            className=" w-full m-2 h-auto "
          />
        </motion.div>
        <motion.div
          style={{
            y: y4,
          }}
          animate={{
            rotate: [0, -6, 12, -12, -5, 4, 0],
            x: [0, 1, -4, 3, 7, 12, -1, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
          }}
          className="absolute -top-4 right-2 w-36 md:w-44 h-auto z-1 animate-drift2"
        >
          <Image
            src={ThingoObject}
            alt="Thingo"
            className=" w-full m-2 h-auto "
          />
        </motion.div>
      </section>
    </>
  );
}
