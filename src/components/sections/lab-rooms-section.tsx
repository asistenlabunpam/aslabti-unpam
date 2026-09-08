import { labRoomsSection, labRooms } from "@/data/content";
import { motion } from "motion/react";
import { fadeLeft, fadeRight, fadeUp, staggerContainer, VIEWPORT } from "@/lib/animation";

export function LabRoomsSection() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <motion.div
            variants={staggerContainer(0.12, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="max-w-3xl"
          >
            <motion.h2 variants={fadeUp} className="font-semibold text-neutral-500">
              {labRoomsSection.tag}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
            >
              {labRoomsSection.title}
            </motion.p>
            <motion.p variants={fadeUp} className="mt-4 text-neutral-500">
              {labRoomsSection.description}
            </motion.p>
          </motion.div>

          <div className="mt-10 space-y-16 border-t border-neutral-200 pt-10 sm:mt-16 sm:pt-16">
            {labRooms.map((feature, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={feature.name}
                  className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-12"
                >
                  <motion.div
                    variants={isEven ? fadeLeft : fadeRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={VIEWPORT}
                    className="flex-auto"
                  >
                    <img
                      alt={feature.imageAlt}
                      src={feature.imageSrc}
                      className="aspect-3/2 w-full rounded-lg bg-neutral-100 object-cover"
                    />
                  </motion.div>
                  <motion.div
                    variants={isEven ? fadeRight : fadeLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={VIEWPORT}
                    className="mt-6 lg:mt-0"
                  >
                    <h3 className="text-lg font-medium text-neutral-900">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-sm text-neutral-500">
                      {feature.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
