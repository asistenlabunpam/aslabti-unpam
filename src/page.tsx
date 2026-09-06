"use client";

import { ParallaxHeroImages } from "@/components/parallax-hero-images";

export default function Page() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      <ParallaxHeroImages images={images} variant="edge-focus" />
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-800 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] md:text-6xl">
          State of the art, cutting edge images, everywhere.
        </h1>
        <p className="max-w-md text-neutral-600 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">
          Move your mouse to see the parallax effect. Images at different depths
          move at different speeds.
        </p>
      </div>
    </div>
  );
}

const images = [
  "https://assets.aceternity.com/components/hero-section-with-mesh-gradient.webp",
  "https://assets.aceternity.com/components/3d-globe.webp",
  "https://assets.aceternity.com/components/keyboard-2.webp",
  "https://assets.aceternity.com/components/hero-1.webp",
  "https://assets.aceternity.com/components/hero-2.webp",
  "https://assets.aceternity.com/components/hero-3.webp",
];
