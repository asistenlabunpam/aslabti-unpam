import { labDetailsContent } from "@/data/content";
import { motion } from "motion/react";
import { fadeLeft, fadeRight, fadeUp, scaleUp, staggerContainer, VIEWPORT } from "@/lib/animation";

export function LabDetailsSection() {
  return (
    <div className="bg-neutral-50 overflow-hidden">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 2xl:px-0">
        <section aria-labelledby="details-heading">
          <motion.div
            variants={staggerContainer(0.15, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="flex flex-col items-center text-center"
          >
            <motion.h2
              variants={fadeUp}
              id="details-heading"
              className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl"
            >
              {labDetailsContent.heading}
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-3 max-w-3xl text-lg text-neutral-600">
              {labDetailsContent.description}
            </motion.p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
            >
              <motion.img
                variants={scaleUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                loading="lazy"
                alt="Ruang Laboratorium Jaringan Komputer"
                src="https://res.cloudinary.com/dhaonb1vn/image/upload/v1788871734/ruang-lab-611_buoukq.webp"
                className="aspect-3/2 w-full rounded-lg object-cover"
              />
              <p className="mt-8 text-base text-neutral-500">
                {labDetailsContent.box1Text}
              </p>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
            >
              <motion.img
                variants={scaleUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                loading="lazy"
                alt="Ruang Laboratorium Komputer"
                src="https://res.cloudinary.com/dhaonb1vn/image/upload/v1788871717/ruang-lab-775_ym6vvd.webp"
                className="aspect-3/2 w-full rounded-lg object-cover"
              />
              <p className="mt-8 text-base text-neutral-500">
                {labDetailsContent.box2Text}
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
