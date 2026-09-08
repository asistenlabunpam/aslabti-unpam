import { ParallaxHeroImages } from "@/components/parallax-hero-images";
import { bottomCta, heroImages } from "@/data/content";
import { motion } from "motion/react";
import { fadeUp, VIEWPORT } from "@/lib/animation";

export function BottomCtaSection() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-neutral-50">
      <ParallaxHeroImages images={heroImages} />
      <div className="relative z-20 mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 text-center">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="text-4xl font-bold tracking-tight text-neutral-800 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] md:text-6xl"
        >
          {bottomCta.title}
        </motion.h1>
      </div>
    </div>
  );
}
