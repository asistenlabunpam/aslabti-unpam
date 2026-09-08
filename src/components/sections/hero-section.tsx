import { ParallaxHeroImages } from "@/components/parallax-hero-images";
import { heroContent, heroImages } from "@/data/content";
import { motion } from "motion/react";
import { fadeDown, fadeUp, staggerContainer } from "@/lib/animation";

export function HeroSection() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      <ParallaxHeroImages images={heroImages} variant="edge-focus" />
      <motion.div
        className="relative z-20 mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 text-center"
        variants={staggerContainer(0.15, 0.2)}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={fadeDown}
          className="text-4xl font-bold tracking-tight text-neutral-800 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] md:text-6xl"
        >
          {heroContent.title}
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="max-w-md text-neutral-600 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
        >
          {heroContent.description}
        </motion.p>
      </motion.div>
    </div>
  );
}
