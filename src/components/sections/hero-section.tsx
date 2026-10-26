import { useRef } from "react";
import { ParallaxHeroImages } from "@/components/parallax-hero-images";
import { heroContent, heroImages } from "@/data/content";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { ArrowRight, ChevronDown, GraduationCap, Code2, Users } from "lucide-react";
import { PrimaryButton } from "../primary-button";
import { SecondaryButton } from "../secondary-button";

const ease = [0.22, 1, 0.36, 1] as const;

const incentives = [
  { name: "Asistensi Praktikum", icon: GraduationCap },
  { name: "Hands-on Coding", icon: Code2 },
  { name: "Talenta Digital", icon: Users },
];

function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.0, duration: 0.6, ease }}
      className="absolute left-1/2 bottom-4 sm:bottom-6 -translate-x-1/2 flex flex-col items-center gap-y-1.5 cursor-pointer group pointer-events-auto z-20 select-none"
      onClick={() =>
        document.getElementById("tentang")?.scrollIntoView({ behavior: "smooth" })
      }
    >
      <div className="w-3 h-5 sm:h-6 rounded-full border-2 border-neutral-400/60 flex items-start justify-center pt-1 group-hover:border-neutral-600 transition-colors duration-300">
        <motion.div
          className="w-px h-1 rounded-full bg-neutral-400/60 group-hover:bg-neutral-700 transition-colors duration-300"
          animate={{ y: [0, 6, 0], opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        />
      </div>
      <motion.div
        animate={{ y: [0, 3, 0] }}
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

  const rawY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const contentY = useSpring(rawY, { stiffness: 50, damping: 16 });
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 100]);

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
          className="h-148 sm:h-160 w-4xl sm:w-240 rounded-full opacity-20 blur-[100px] sm:blur-[120px]"
          style={{
            background:
              "radial-gradient(ellipse at center, #93c5fd 0%, #3b82f6 40%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
      </motion.div>

      <ParallaxHeroImages images={heroImages} variant="edge-focus" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-20 mx-auto flex w-full max-w-4xl flex-col items-center gap-5 px-4 sm:px-6 md:px-8 text-center lg:space-y-2"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease }}
          className="flex justify-center"
        >
          <div className="relative flex items-center gap-x-2 rounded-full pl-1 py-1 pr-3 text-xs sm:text-sm text-neutral-700 ring-1 ring-neutral-900/10 bg-neutral-100/90 backdrop-blur-sm shadow-sm">
            <div className="flex items-center gap-x-1.5 text-neutral-100 font-medium bg-neutral-900 px-2 py-0.5 rounded-full text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="size-3.5 fill-neutral-100 shrink-0"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </div>
            <a
              href="https://github.com/asistenlabunpam"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-1 font-medium pointer-events-auto min-w-0"
            >
              <span aria-hidden="true" className="absolute inset-0" />
              <span className="truncate hidden sm:inline">Eksplorasi repositori ASLAB</span>
              <span className="truncate sm:hidden">Lihat repositori</span>
              <ArrowRight className="size-3 shrink-0" />
            </a>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.75, ease }}
          className="text-3xl font-bold tracking-tight text-neutral-800 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] leading-[1.15]
                     sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {heroContent.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7, ease }}
          className="max-w-xs text-sm leading-relaxed text-neutral-700 drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]
                     sm:max-w-xl sm:text-base md:max-w-2xl md:text-lg/relaxed"
        >
          {heroContent.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.65, ease }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto"
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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.6, ease }}
          className="w-full max-w-md sm:max-w-none"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center sm:divide-x sm:divide-neutral-300 gap-2 sm:gap-0 rounded-xl sm:rounded-full bg-white/60 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none px-4 py-3 sm:p-0">
            {incentives.map((incentive, i) => (
              <motion.div
                key={incentive.name}
                initial={{ opacity: 0, x: i % 2 === 0 ? -10 : 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3 + i * 0.12, duration: 0.5, ease }}
                className="flex items-center gap-x-2 text-xs sm:text-sm font-medium text-neutral-600 sm:px-5"
              >
                <incentive.icon aria-hidden="true" className="size-4 shrink-0 text-blue-500" />
                <span>{incentive.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <ScrollIndicator />
    </div>
  );
}
