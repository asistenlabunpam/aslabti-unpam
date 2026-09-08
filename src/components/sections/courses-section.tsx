import { coursesHeading, timeline } from "@/data/content";
import { motion } from "motion/react";
import { fadeUp, staggerContainer, staggerItem, VIEWPORT } from "@/lib/animation";

export function CoursesSection() {
  return (
    <div className="bg-white space-y-20 py-20">
      <motion.hgroup
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="max-w-lg mx-auto text-center"
      >
        <h3 className="text-balance text-4xl font-medium tracking-tight sm:text-5xl">
          {coursesHeading}
        </h3>
      </motion.hgroup>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={staggerContainer(0.1, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-24 lg:gap-y-20"
        >
          {timeline.map((item) => (
            <motion.div key={item.name} variants={staggerItem}>
              <div className="flex items-center text-sm/6 font-semibold text-neutral-600">
                <svg
                  viewBox="0 0 4 4"
                  aria-hidden="true"
                  className="mr-4 size-1 flex-none"
                >
                  <circle r={2} cx={2} fill="currentColor" />
                </svg>
                <div className="w-28 h-0.5 bg-neutral-800 rounded-full" />
                <div
                  aria-hidden="true"
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-neutral-900/30 sm:-ml-4 lg:static lg:-mr-6 lg:ml-6 lg:w-auto lg:flex-auto lg:translate-x-0"
                />
              </div>
              <h3 className="mt-6 text-lg/8 font-semibold tracking-tight text-neutral-900 sm:text-2xl lg:text-3xl">
                {item.name}
              </h3>
              <p className="mt-4 leading-7 text-neutral-600 lg:text-lg/relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
