import { ParallaxHeroImages } from "@/components/parallax-hero-images";
import { bottomCta, heroImages } from "@/data/content";
import { motion } from "motion/react";
import { fadeUp, staggerContainer, VIEWPORT } from "@/lib/animation";

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

        <motion.a
          href="#tentang"
          variants={fadeUp}
          className="mt-2 inline-flex items-center gap-x-2 rounded-full bg-neutral-900 px-8 py-3.5 text-sm font-semibold text-white shadow-lg"
          whileHover={{
            scale: 1.04,
            backgroundColor: "#312e81",
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.97, transition: { duration: 0.1 } }}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("tentang")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Pelajari Lebih Lanjut
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-4"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
              clipRule="evenodd"
            />
          </svg>
        </motion.a>
      </motion.div>
    </div>
  );
}
