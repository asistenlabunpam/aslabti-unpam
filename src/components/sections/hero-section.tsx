import { useRef } from "react";
import { ParallaxHeroImages } from "@/components/parallax-hero-images";
import { heroContent, heroImages } from "@/data/content";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { fadeDown, fadeUp, staggerContainer } from "@/lib/animation";
import { ArrowRight, ChevronDown, GraduationCap, Code2, Users } from "lucide-react";
import { PrimaryButton } from "../primary-button";
import { SecondaryButton } from "../secondary-button";

const incentives = [
  { name: "Asistensi Praktikum", icon: GraduationCap },
  { name: "Hands-on Praktikum", icon: Code2 },
  { name: "Talenta Digital", icon: Users },
];

function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.6, duration: 0.6 }}
      className="absolute left-1/2 bottom-3 sm:bottom-4 -translate-x-1/2 flex flex-col items-center gap-y-2 cursor-pointer group"
      onClick={() =>
        document.getElementById("tentang")?.scrollIntoView({ behavior: "smooth" })
      }
    >
      <div className="w-3 h-6 rounded-full border-2 border-neutral-400/60 flex items-start justify-center pt-1.5 group-hover:border-neutral-600 transition-colors duration-300">
        <motion.div
          className="w-px h-1 rounded-full bg-neutral-400/60 group-hover:bg-neutral-700 transition-colors duration-300"
          animate={{ y: [0, 6, 0], opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        />
      </div>
      <motion.div
        animate={{ y: [0, 4, 0] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
      >
        <ChevronDown className="size-3 text-neutral-400 group-hover:text-neutral-700 transition-colors duration-300" />
      </motion.div>
    </motion.div>
  );
}

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const rawY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const contentY = useSpring(rawY, { stiffness: 60, damping: 18 });
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const orbY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <div
      id="beranda"
      ref={sectionRef}
      className="relative flex w-full items-center justify-center overflow-hidden bg-linear-to-b from-blue-400 to-90% to-transparent min-h-dvh 2xl:h-200"
    >
      <motion.div
        style={{ y: orbY }}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 flex justify-center"
      >
        <motion.div
          className="h-150 w-225 rounded-full opacity-20 blur-[120px]"
          style={{
            background:
              "radial-gradient(ellipse at center, #93c5fd 0%, #3b82f6 40%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
      </motion.div>

      <ParallaxHeroImages images={heroImages} variant="edge-focus" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-20 mx-auto flex max-w-4xl flex-col items-center gap-4 px-3 text-center"
      >
        <motion.div
          variants={staggerContainer(0.15, 0.2)}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-8"
        >
          <motion.div variants={fadeDown} className="flex justify-center mb-1 p-1 ring-1 ring-neutral-100/30 rounded-full">
            <div className="relative flex items-center gap-x-2 rounded-full pl-1 py-1 pr-3 text-sm/6 text-neutral-700 ring-1 ring-neutral-900/10 bg-neutral-100 backdrop-blur-sm shadow-lg">
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
              <a
                href="https://github.com/asistenlabunpam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-1 pointer-events-auto"
              >
                <span aria-hidden="true" className="absolute inset-0" />
                Eksplorasi repositori ASLAB
                <ArrowRight className="size-3" />
              </a>
            </div>
          </motion.div>

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

          <motion.div
            variants={fadeUp}
            className="my-2 flex flex-wrap items-center justify-center gap-5"
          >
            <PrimaryButton
              text="Eksplorasi Profil"
              onClick={() =>
                document.getElementById("tentang")?.scrollIntoView({ behavior: "smooth" })
              }
            />
            <SecondaryButton
              text="Dokumentasi Praktikum"
              onClick={() =>
                document.getElementById("galeri")?.scrollIntoView({ behavior: "smooth" })
              }
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex overflow-x-auto">
            <div className="mx-auto flex py-3 whitespace-nowrap divide-x divide-neutral-300">
              {incentives.map((incentive) => (
                <div key={incentive.name} className="flex items-center text-sm font-medium text-neutral-600 px-5">
                  <incentive.icon aria-hidden="true" className="mr-2 size-4 flex-none" />
                  <span>{incentive.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      <ScrollIndicator />
    </div>
  );
}
