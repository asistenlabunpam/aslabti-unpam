import { ParallaxHeroImages } from "@/components/parallax-hero-images";
import { bottomCta, heroImages } from "@/data/content";
import { motion } from "motion/react";
import { fadeUp, staggerContainer, VIEWPORT } from "@/lib/animation";
import { PrimaryButton } from "../primary-button";

export function BottomCtaSection() {
  return (
    <div className="relative flex min-h-dvh w-full items-center justify-center py-32 overflow-hidden bg-neutral-50 mt-52">
      <ParallaxHeroImages images={heroImages} />

      <motion.div
        variants={staggerContainer(0.18, 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="relative z-20 mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center"
      >
        <motion.h1
          variants={fadeUp}
          className="text-4xl font-semibold tracking-tight text-neutral-800 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] md:text-6xl"
        >
          {bottomCta.title}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="max-w-2xl text-neutral-600 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] md:text-lg/relaxed"
        >
          Wujudkan potensi terbaikmu di lingkungan laboratorium yang mendukung, bersama tim asisten yang berdedikasi dan inovatif.
        </motion.p>

        <PrimaryButton text="Lebih Dekat" />
      </motion.div>
    </div>
  );
}
