import { ParallaxHeroImages } from "@/components/parallax-hero-images";
import { heroContent, heroImages } from "@/data/content";

export function HeroSection() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      <ParallaxHeroImages images={heroImages} variant="edge-focus" />
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-800 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] md:text-6xl">
          {heroContent.title}
        </h1>
        <p className="max-w-md text-neutral-600 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">
          {heroContent.description}
        </p>
      </div>
    </div>
  );
}
