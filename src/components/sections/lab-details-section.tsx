import { labDetailsContent } from "@/data/content";
import { motion } from "motion/react";
import {
  fadeLeft,
  fadeRight,
  fadeUp,
  scaleUp,
  staggerContainer,
  useParallaxY,
  VIEWPORT,
} from "@/lib/animation";

export function LabDetailsSection() {
  // Three independent parallax refs — alternating directions for a layered depth effect
  const { ref: ref1, y: y1 } = useParallaxY([40, -60]);   // right col: moves up
  const { ref: ref2, y: y2 } = useParallaxY([-60, 40]);   // center col: moves down
  const { ref: ref3, y: y3 } = useParallaxY([30, -70]);   // left col: moves up (offset)

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

          <div className="grid grid-cols-1 gap-y-16 py-20 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
            {/* Image 1 — drifts up as you scroll down */}
            <motion.div
              ref={ref1}
              style={{ y: y1 }}
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
                className="aspect-3/4 w-full rounded-lg object-cover"
              />
            </motion.div>

            {/* Image 2 — drifts down as you scroll down (opposing) */}
            <motion.div
              ref={ref2}
              style={{ y: y2 }}
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
                className="aspect-3/4 w-full rounded-lg object-cover"
              />
            </motion.div>

            {/* Image 3 — offset up from image 1 for staggered depth */}
            <motion.div
              ref={ref3}
              style={{ y: y3 }}
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
                className="aspect-3/4 w-full rounded-lg object-cover"
              />
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
