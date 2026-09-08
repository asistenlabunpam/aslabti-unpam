import StackedSections from "@/components/stacked-list";
import { chapters } from "@/data/content";
import { motion } from "motion/react";
import { scaleUp, VIEWPORT } from "@/lib/animation";

function MyFirstChapter() {
  return (
    <motion.div
      variants={scaleUp}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className="flex h-[100vh] items-center justify-center bg-red-500"
    >
      <h2 className="text-2xl font-bold">{chapters.chapter1}</h2>
    </motion.div>
  );
}

function MySecondChapter() {
  return (
    <motion.div
      variants={scaleUp}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className="flex h-dvh items-center justify-center bg-green-500"
    >
      <h2 className="text-2xl font-bold">{chapters.chapter2}</h2>
    </motion.div>
  );
}

function MyThirdChapter() {
  return (
    <motion.div
      variants={scaleUp}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className="flex h-[100vh] items-center justify-center bg-blue-500"
    >
      <h2 className="text-2xl font-bold">{chapters.chapter3}</h2>
    </motion.div>
  );
}

export function ChaptersSection() {
  return (
    <StackedSections stackOffset={48}>
      <MyFirstChapter />
      <MySecondChapter />
      <MyThirdChapter />
    </StackedSections>
  );
}
