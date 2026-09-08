import { ParallaxHeroImages } from "@/components/parallax-hero-images";
import { heroContent, heroImages } from "@/data/content";
import { motion } from "motion/react";
import { fadeDown, fadeUp, staggerContainer } from "@/lib/animation";
import { ArrowRight, Mouse } from "lucide-react";

export function HeroSection() {
  return (
    <div
      id="beranda"
      className="relative flex w-full items-center justify-center overflow-hidden min-h-dvh 2xl:h-200"
    >
      <ParallaxHeroImages images={heroImages} variant="edge-focus" />
      <motion.div
        className="relative z-20 mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 text-center"
        variants={staggerContainer(0.15, 0.2)}
        initial="hidden"
        animate="visible"
      >
        <div className="flex justify-center mb-5">
          <div className="relative flex items-center gap-x-2 rounded-full pl-1 py-1 pr-3 text-sm/6 text-neutral-700 ring-1 ring-neutral-900/15">
            <div className="flex items-center gap-x-1.5 text-neutral-100 font-medium bg-neutral-900 px-2 py-0.5 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="size-4 fill-neutral-100"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </div>
            <a href="https://github.com/asistenlabunpam" className="flex items-center gap-x-1">
              <span aria-hidden="true" className="absolute inset-0" />
              Announcing our next round of funding. <ArrowRight className="size-3" />
            </a>
          </div>
        </div>
        <motion.h1
          variants={fadeDown}
          className="text-4xl font-semibold tracking-tight text-neutral-800 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] md:text-7xl"
        >
          {heroContent.title}
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="max-w-3xl text-neutral-600 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] md:text-lg/relaxed"
        >
          {heroContent.description}
        </motion.p>
      </motion.div>

      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 flex flex-col gap-y-1.5 items-center animate-bounce opacity-30">
        <Mouse className="size-3.5" />
        <span className="text-[0.75rem] tracking-widest">SWIPE DOWN</span>
      </div>
    </div>
  );
}
