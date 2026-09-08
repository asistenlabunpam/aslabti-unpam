import { logo } from "@/constants";
import { motion } from "motion/react";
import { fadeLeft, fadeRight, fadeUp, staggerContainer, VIEWPORT } from "@/lib/animation";
import { TextHoverEffect } from "./text-hover-effect";

export function AppFooter() {
  return (
    <footer id="kontak" className="pt-32 w-full">
      <motion.div
        variants={staggerContainer(0.12, 0)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="grid px-4 pb-13 max-w-7xl mx-auto sm:px-6 lg:grid-cols-4 lg:gap-x-8 lg:px-8 2xl:px-0"
      >
        <motion.div variants={fadeLeft} className="max-w-lg lg:col-span-2">
          <a href="#">
            <span className="sr-only">
              Asisten Laboratorium Teknik Informatika Universitas Pamulang
            </span>
            <img
              alt="Logo Aslab TI Universitas Pamulang"
              src={logo}
              className="h-10 w-auto"
            />
          </a>
          <p className="mt-4 text-sm/6 text-neutral-600">
            Unit penunjang kegiatan praktikum, asistensi akademik, dan
            pengembangan riset teknologi pada Program Studi Teknik Informatika
            Universitas Pamulang.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="w-full space-y-8 mt-8 lg:mt-0">
          <h3 className="font-semibold text-neutral-900">Sosial Media</h3>
          <div className="flex flex-col gap-y-5 text-sm text-neutral-600">
            {(["Instagram", "TikTok", "GitHub"] as const).map((name) => (
              <motion.a
                key={name}
                href="#"
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="inline-block hover:text-neutral-900 transition-colors duration-200"
              >
                {name}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeRight} className="w-full space-y-8 mt-8 lg:mt-0">
          <h3 className="font-semibold text-neutral-900">Tautan Resmi Kampus</h3>
          <div className="flex flex-col gap-y-5 text-sm text-neutral-600">
            {[
              { label: "unpam.ac.id", href: "https://unpam.ac.id" },
              { label: "informatika.unpam.ac.id", href: "https://informatika.unpam.ac.id" },
              { label: "ftiunpam.com", href: "https://ftiunpam.com" },
            ].map(({ label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="inline-block hover:text-neutral-900 transition-colors duration-200"
              >
                {label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <div className="relative w-full select-none pointer-events-none">
        <div className="from-neutral-50 pointer-events-none absolute inset-x-0 top-0 z-3 w-full h-64 bg-linear-to-b" />
        <div className="sm:h-72 lg:h-100 flex items-center justify-center">
          <TextHoverEffectWrapper />
        </div>
      </div>
    </footer>
  );
}

function TextHoverEffectWrapper() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="w-full h-full"
    >
      <TextHoverEffect text="ASLAB" />
    </motion.div>
  );
}
