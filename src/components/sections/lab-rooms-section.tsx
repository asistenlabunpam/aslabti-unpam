import { labRoomsSection, labRooms } from "@/data/content";
import { motion } from "motion/react";
import {
  fadeLeft,
  fadeRight,
  fadeUp,
  staggerContainer,
  staggerItem,
  VIEWPORT,
} from "@/lib/animation";

export function LabRoomsSection() {
  return (
    <div id="aktivitas" className="bg-white w-full overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 2xl:px-0">
        <div className="mx-auto space-y-16 max-w-2xl px-4 lg:max-w-none">
          <motion.div
            variants={staggerContainer(0.12, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="max-w-3xl"
          >
            <motion.h2
              variants={fadeUp}
              className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl"
            >
              {labRoomsSection.title}
            </motion.h2>
          </motion.div>

          <div className="space-y-16 border-t border-neutral-200">
            {labRooms.map((feature, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={feature.name}
                  className="flex flex-col pt-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-16"
                >
                  <motion.div
                    variants={isEven ? fadeLeft : fadeRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={VIEWPORT}
                    className="relative flex-auto rounded-xl overflow-hidden"
                    whileHover={{ scale: 1.01, transition: { duration: 0.35 } }}
                  >
                    <motion.img
                      alt={feature.imageAlt}
                      src={feature.imageSrc}
                      loading="lazy"
                      className="aspect-3/2 w-full bg-neutral-100 object-cover"
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                      }}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-neutral-900 via-neutral-900/40" />
                    <div className="absolute bottom-0 left-0 right-0 flex items-center gap-x-4 p-6">
                      <motion.div
                        className="w-px h-5 bg-neutral-100 rounded-full"
                        initial={{ scaleY: 0, opacity: 0 }}
                        whileInView={{ scaleY: 1, opacity: 0.3 }}
                        viewport={VIEWPORT}
                        transition={{ duration: 0.4, delay: 0.3 }}
                      />
                      <h3 className="text-lg font-medium text-neutral-100">{feature.name}</h3>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={staggerContainer(0.12, 0.1)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={VIEWPORT}
                    className="mt-6 lg:mt-0"
                  >
                    <motion.h3
                      variants={isEven ? fadeRight : fadeLeft}
                      className="text-2xl font-medium text-neutral-900"
                    >
                      {feature.name}
                    </motion.h3>
                    <motion.p
                      variants={staggerItem}
                      className="mt-5 text-lg/normal text-neutral-700"
                    >
                      {feature.description}
                    </motion.p>
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
