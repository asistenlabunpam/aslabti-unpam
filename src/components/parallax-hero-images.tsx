"use client";

import { useEffect, useMemo, memo } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  MotionValue,
} from "motion/react";
import { cn } from "@/lib/utils";

type PositionKey =
  | "top-left"
  | "top-right"
  | "mid-left"
  | "mid-right"
  | "bottom-left"
  | "bottom-right"
  | "far-left"
  | "far-right";

type ImagePosition = {
  src: string;
  position: PositionKey;
  depth: number;
  delay: number;
};

interface PositionConfig {
  top: string;
  left?: string;
  right?: string;
  rotate: number;
  sizeClasses: string;
  opacity?: number;
  hideOnMobile?: boolean;
}

const positionConfigs: Record<PositionKey, PositionConfig> = {
  "top-left": {
    top: "5%",
    left: "3%",
    rotate: -5,
    sizeClasses: "w-28 h-20 sm:w-44 sm:h-32 md:w-56 md:h-40",
  },
  "top-right": {
    top: "6%",
    right: "3%",
    rotate: 4,
    sizeClasses: "w-24 h-28 sm:w-36 sm:h-44 md:w-48 md:h-56",
  },
  "mid-left": {
    top: "24%",
    left: "2%",
    rotate: 3,
    sizeClasses: "w-24 h-18 sm:w-40 sm:h-28 md:w-52 md:h-36",
  },
  "mid-right": {
    top: "50%",
    right: "2.5%",
    rotate: -4,
    sizeClasses: "w-28 h-20 sm:w-44 sm:h-32 md:w-56 md:h-40",
  },
  "bottom-left": {
    top: "70%",
    left: "3.5%",
    rotate: -6,
    sizeClasses: "w-28 h-20 sm:w-46 sm:h-32 md:w-58 md:h-40",
  },
  "bottom-right": {
    top: "70%",
    right: "3.5%",
    rotate: 5,
    sizeClasses: "w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48",
  },
  "far-left": {
    top: "46%",
    left: "0.5%",
    rotate: -2,
    sizeClasses: "w-20 h-16 sm:w-32 sm:h-24 md:w-40 md:h-30",
    opacity: 0.8,
    hideOnMobile: true,
  },
  "far-right": {
    top: "24%",
    right: "1%",
    rotate: 6,
    sizeClasses: "w-22 h-26 sm:w-32 sm:h-38 md:w-40 md:h-48",
    opacity: 0.8,
    hideOnMobile: true,
  },
};

const positionOrder: PositionKey[] = [
  "top-left",
  "top-right",
  "mid-left",
  "mid-right",
  "bottom-left",
  "bottom-right",
  "far-left",
  "far-right",
];

type DepthVariant = "default" | "edge-focus";

const depthValuesByVariant: Record<DepthVariant, number[]> = {
  default: [0.3, 0.35, 0.5, 0.45, 0.35, 0.4, 0.25, 0.2],
  "edge-focus": [0.45, 0.5, 0.3, 0.35, 0.45, 0.5, 0.25, 0.3],
};

const SPRING_CONFIG = { damping: 25, stiffness: 120 };

export interface ParallaxHeroImagesProps {
  images: string[];
  className?: string;
  imageClassName?: string;
  variant?: DepthVariant;
}

export const ParallaxHeroImages = ({
  images,
  className,
  imageClassName,
  variant = "default",
}: ParallaxHeroImagesProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, SPRING_CONFIG);
  const smoothMouseY = useSpring(mouseY, SPRING_CONFIG);

  const positions = useMemo(() => {
    const limitedImages = images.slice(0, 8);
    const depthValues = depthValuesByVariant[variant];
    return limitedImages.map((src, index) => ({
      src,
      position: positionOrder[index],
      depth: depthValues[index],
      delay: index * 0.1,
    }));
  }, [images, variant]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden max-w-7xl mx-auto",
        className,
      )}
    >
      {positions.map((pos, index) => (
        <ParallaxImage
          key={`${pos.src}-${index}`}
          src={pos.src}
          position={pos.position}
          depth={pos.depth}
          delay={pos.delay}
          imageClassName={imageClassName}
          smoothMouseX={smoothMouseX}
          smoothMouseY={smoothMouseY}
        />
      ))}
    </div>
  );
};

interface ParallaxImageProps extends ImagePosition {
  imageClassName?: string;
  smoothMouseX: MotionValue<number>;
  smoothMouseY: MotionValue<number>;
}

const ParallaxImage = memo(function ParallaxImage({
  src,
  position,
  depth,
  delay,
  imageClassName,
  smoothMouseX,
  smoothMouseY,
}: ParallaxImageProps) {
  const config = positionConfigs[position];
  const maxOffset = 25;

  const translateX = useTransform(
    smoothMouseX,
    [-1, 1],
    [-maxOffset * depth, maxOffset * depth],
  );

  const translateY = useTransform(
    smoothMouseY,
    [-1, 1],
    [-maxOffset * depth, maxOffset * depth],
  );

  return (
    <motion.div
      className={cn(
        "pointer-events-auto absolute",
        config.hideOnMobile && "hidden sm:block",
      )}
      style={{
        top: config.top,
        left: config.left,
        right: config.right,
        x: translateX,
        y: translateY,
        zIndex: Math.round(depth * 8),
      }}
      initial={{
        opacity: 0,
        filter: "blur(14px)",
        scale: 0.88,
        rotate: config.rotate,
      }}
      animate={{
        opacity: config.opacity ?? 1,
        filter: "blur(0px)",
        scale: 1,
        rotate: config.rotate,
      }}
      whileHover={{
        scale: 1.08,
        rotate: 0,
        zIndex: 15,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <div
        className={cn(
          "group relative overflow-hidden rounded-2xl bg-neutral-50/80 p-1 shadow-xl shadow-neutral-900/8 ring-1 ring-neutral-950/10 backdrop-blur-sm transition-all duration-300 hover:bg-neutral-50 hover:shadow-2xl hover:shadow-neutral-900/15 hover:ring-neutral-900/20",
          config.sizeClasses,
        )}
      >
        <img
          src={src}
          alt=""
          loading="lazy"
          decoding="async"
          className={cn(
            "size-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105",
            imageClassName,
          )}
        />
        <div className="pointer-events-none absolute inset-0 rounded-xl bg-linear-to-tr from-neutral-900/10 via-transparent to-neutral-100/25 opacity-70 transition-opacity group-hover:opacity-10" />
      </div>
    </motion.div>
  );
});
