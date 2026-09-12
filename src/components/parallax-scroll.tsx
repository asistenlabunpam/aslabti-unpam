"use client";
import { useScroll, useTransform, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.88, 1],
    [0, 1, 1, 0]
  );
  const textScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.95]);
  const textY = useTransform(scrollYProgress, [0, 1], [-25, 25]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      id="galeri"
      ref={containerRef}
      className={cn("relative w-full bg-linear-to-b from-blue-400 to-transparent", className)}
    >
      <div className="from-neutral-50 pointer-events-none absolute inset-x-0 top-0 z-3 w-full h-20 bg-linear-to-b" />
      <div className="sticky top-0 left-0 h-dvh w-full flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <motion.div
          style={{
            opacity: textOpacity,
            scale: textScale,
            y: textY,
          }}
          className="flex flex-col items-center justify-center text-center px-4 select-none"
        >
          <span className="font-semibold tracking-[0.35em] uppercase mb-3 drop-shadow-sm opacity-5">
            Dokumentasi & Portofolio
          </span>
          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter font-[helvetica] uppercase leading-none select-none opacity-5">
            ASLAB GALLERY
          </h2>
        </motion.div>
      </div>

      <div className="relative z-10 -mt-dvh mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-4 sm:gap-6 lg:gap-8">
          <div className="grid gap-4 sm:gap-6 lg:gap-8">
            {firstPart.map((el, idx) => (
              <motion.div
                style={{ y: isMobile ? 0 : translateFirst }}
                key={"grid-1-" + idx}
                className="overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-xl"
              >
                <img
                  src={el}
                  className="h-80 w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  alt={`Gallery thumbnail ${idx + 1}`}
                />
              </motion.div>
            ))}
          </div>
          <div className="grid gap-4 sm:gap-6 lg:gap-8">
            {secondPart.map((el, idx) => (
              <motion.div
                style={{ y: isMobile ? 0 : translateSecond }}
                key={"grid-2-" + idx}
                className="overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-xl"
              >
                <img
                  src={el}
                  className="h-80 w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  alt={`Gallery thumbnail ${idx + third + 1}`}
                />
              </motion.div>
            ))}
          </div>
          <div className="grid gap-4 sm:gap-6 lg:gap-8">
            {thirdPart.map((el, idx) => (
              <motion.div
                style={{ y: isMobile ? 0 : translateThird }}
                key={"grid-3-" + idx}
                className="overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-xl"
              >
                <img
                  src={el}
                  className="h-80 w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  alt={`Gallery thumbnail ${idx + 2 * third + 1}`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
