import {
  HeroSection,
  AboutSection,
  CoursesSection,
  LabDetailsSection,
  LabRoomsSection,
  ChaptersSection,
  BottomCtaSection,
} from "@/components/sections";
import { useLenisScrollSync } from "@/lib/use-lenis-scroll-sync";

export default function Page() {
  useLenisScrollSync();

  return (
    <>
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <LabDetailsSection />
      <LabRoomsSection />
      <ChaptersSection />
      <BottomCtaSection />
    </>
  );
}
