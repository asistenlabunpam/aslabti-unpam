import {
  aboutContent,
  aboutTimeline,
  pillarsHeading,
  leftFeatures,
  rightFeatures,
  type NumberedFeature,
} from "@/data/content";
import { motion } from "motion/react";
import {
  fadeLeft,
  fadeRight,
  fadeUp,
  scaleUp,
  staggerContainer,
  staggerItemLeft,
  useParallaxY,
  VIEWPORT,
} from "@/lib/animation";

function FeatureColumn({
  features,
  direction,
}: {
  features: NumberedFeature[];
  direction: "left" | "right";
}) {
  return (
    <dl className="grid h-full grid-rows-2 divide-y divide-black/10 dark:divide-white/10">
      {features.map((feature, i) => (
        <motion.div
          key={feature.number}
          variants={direction === "left" ? fadeLeft : fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          custom={i}
          whileHover={{
            backgroundColor: "rgba(0,0,0,0.02)",
            transition: { duration: 0.2 },
          }}
          className="flex min-h-48 flex-col justify-between gap-8 p-6 sm:p-8 rounded-xl cursor-default"
        >
          <dt className="flex items-start justify-between gap-4">
            <span className="text-lg font-medium">{feature.title}</span>
            <motion.span
              className="font-mono text-sm tracking-wide text-neutral-400 tabular-nums dark:text-neutral-500"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.4, delay: i * 0.1 + 0.3 }}
            >
              {feature.number}
            </motion.span>
          </dt>
          <dd className="max-w-[40ch] text-pretty text-base/7 text-neutral-600 dark:text-neutral-400 sm:text-sm/6">
            {feature.description}
          </dd>
        </motion.div>
      ))}
    </dl>
  );
}

export function AboutSection() {
  const { ref: headingRef, y: headingY } = useParallaxY([-20, 20]);
  const { ref: imgRef, y: imgY } = useParallaxY([-50, 50]);

  return (
    <div id="tentang" className="bg-white py-32 overflow-hidden">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 2xl:px-0">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <motion.h2
            ref={headingRef as React.RefObject<HTMLHeadingElement>}
            style={{ y: headingY }}
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="text-4xl font-semibold tracking-tight text-pretty text-neutral-900 sm:text-5xl"
          >
            {aboutContent.heading}
          </motion.h2>

          <motion.div
            variants={staggerContainer(0.15, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="mt-10 flex flex-col gap-x-8 gap-y-20 lg:flex-row"
          >
            <div className="lg:w-full lg:max-w-6xl lg:flex-auto">
              <motion.p
                variants={fadeUp}
                className="text-2xl/normal text-neutral-800"
              >
                {aboutContent.vision}
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="mt-10 max-w-5xl text-xl/relaxed text-neutral-700"
              >
                {aboutContent.mission}
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.14, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="mx-auto max-w-2xl space-y-20 overflow-hidden py-20 lg:mx-0 lg:max-w-none"
          >
            {aboutTimeline.map((item) => (
              <motion.div key={item.name} variants={staggerItemLeft}>
                <div className="relative flex items-center font-semibold text-neutral-700">
                  <svg
                    viewBox="0 0 4 4"
                    aria-hidden="true"
                    className="mr-4 size-1 flex-none"
                  >
                    <circle r={2} cx={2} cy={2} fill="currentColor" />
                  </svg>
                  <motion.div
                    className="h-0.5 bg-neutral-800 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: 112 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.2,
                    }}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute -ml-2 h-px w-screen -translate-x-full bg-neutral-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-6 lg:w-auto lg:flex-auto lg:translate-x-0"
                  />
                </div>
                <h3 className="text-lg/8 font-medium tracking-tight text-neutral-900 mt-8 sm:text-xl lg:text-2xl">
                  {item.name}
                </h3>
                <p className="mt-5 leading-7 text-neutral-700 md:text-lg/relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <div className="w-full space-y-16 py-20">
            <motion.hgroup
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="max-w-lg mx-auto text-center"
            >
              <h3 className="text-balance text-4xl font-medium tracking-tight sm:text-5xl">
                {pillarsHeading}
              </h3>
            </motion.hgroup>

            <div className="grid lg:grid-cols-[3fr_4fr_3fr]">
              <div className="order-2 border-black/10 dark:border-white/10 lg:order-1 lg:border-r">
                <FeatureColumn features={leftFeatures} direction="left" />
              </div>

              <motion.div
                ref={imgRef}
                style={{ y: imgY }}
                className="order-1 lg:order-2"
              >
                <motion.img
                  variants={scaleUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT}
                  src="https://assets.aceternity.com/screenshots/green-dither-2.webp"
                  alt="Laboratorium Komputasi Teknik Informatika"
                  className="aspect-4/5 min-h-96 bg-stone-300 rounded-2xl dark:bg-neutral-800 w-full object-cover lg:aspect-auto lg:min-h-92"
                />
              </motion.div>

              <div className="order-3 border-t border-black/10 dark:border-white/10 lg:border-t-0 lg:border-l">
                <FeatureColumn features={rightFeatures} direction="right" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
