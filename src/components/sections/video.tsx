import { bounceAnimation, staggeredAnimation } from "@/utils/animations";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react"; // Import useState

import { Button } from "../ui/button";
import Link from "next/link";
import Poster from "@/assets/poster.webp";

export default function Video() {
  const ref = useRef(null);
  const videoRef = useRef(null);
  const isInView = useInView(ref);
  const [isPlaying, setIsPlaying] = useState(false); // State to track video play status

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true); // Update state to indicate video is playing
      } else {
        video.pause();
        setIsPlaying(false); // Update state to indicate video is paused
      }
    }
  };

  return (
    <motion.div
      initial="initial"
      ref={ref}
      animate={isInView ? "animate" : "initial"}
      variants={staggeredAnimation}
      className="flex flex-col items-center justify-center mt-6 relative"
    >
      <motion.div
        variants={bounceAnimation}
        className="w-full h-full max-w-5xl rounded-3xl overflow-hidden relative"
      >
        <video
          controls
          src="https://cdn.shopify.com/videos/c/o/v/e3a8b3ef98604e048996ee326c7691fa.mp4"
          preload="none"
          poster={Poster.src}
          className="w-full h-full rounded-3xl object-contain object-center border border-neutral-950"
          ref={videoRef}
        ></video>
        {!isPlaying && ( // Conditionally render play button based on isPlaying state
          <button
            className="absolute top-0 left-0 w-full h-full items-center justify-center bg-black bg-opacity-30 flex"
            aria-label="Play"
            onClick={togglePlayPause}
          >
            <svg
              className="w-20 h-20 text-white"
              fill="currentColor"
              viewBox="0 0 74 83"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 75.28V7.33c0-5.395 5.847-8.762 10.513-6.054L70.338 35.99c4.699 2.727 4.635 9.535-.114 12.174L10.399 81.399C5.735 83.99 0 80.617 0 75.278Z"></path>
            </svg>
          </button>
        )}
      </motion.div>
       <motion.div variants={bounceAnimation}>
                <Button asChild size="lg" className="z-10 mt-6">
                  <Link href={"/apply"}>Apply To Join Waitlist</Link>
                </Button>
              </motion.div>
    </motion.div>
  );
}
