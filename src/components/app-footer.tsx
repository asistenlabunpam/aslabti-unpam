import { logo } from "@/constants";
import { motion } from "motion/react";
import {
  fadeLeft,
  fadeRight,
  fadeUp,
  staggerContainer,
  VIEWPORT,
} from "@/lib/animation";
import { TextHoverEffect } from "./text-hover-effect";

interface SocialLinkItem {
  name: string;
  href: string;
  path: string;
}

interface NavLinkItem {
  label: string;
  href: string;
}

interface ContactItem {
  text: string;
  href?: string;
}

const SOCIAL_LINKS: readonly SocialLinkItem[] = [
  {
    name: "Instagram",
    href: "https://instagram.com/aslabti_unpam",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@aslabti.unpam",
    path: "M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@aslabtiunpam",
    path: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z",
  },
  {
    name: "GitHub",
    href: "https://github.com/asistenlabunpam",
    path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/aslabti_unpam",
    path: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z",
  },
];

const CAMPUS_LINKS: readonly NavLinkItem[] = [
  { label: "unpam.ac.id", href: "https://unpam.ac.id" },
  { label: "informatika.unpam.ac.id", href: "https://informatika.unpam.ac.id" },
  { label: "ftiunpam.com", href: "https://ftiunpam.com" },
];

const CONTACT_INFO: readonly ContactItem[] = [
  {
    text: "laporanpraktikum.aslab@gmail.com",
    href: "mailto:laporanpraktikum.aslab@gmail.com",
  },
  {
    text: "+62 877-7247-0069",
    href: "https://wa.me/6287772470069",
  },
  {
    text: "Jl. Raya Puspitek, Buaran, Kec. Pamulang, Kota Tangerang Selatan, Banten 15310",
  },
];

function SocialButton({ name, href, path }: SocialLinkItem) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      className="size-8 p-2 rounded-full border border-neutral-300 shadow-sm inline-flex items-center justify-center hover:border-neutral-400 transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-full"
        aria-hidden="true"
      >
        <path d={path} />
      </svg>
    </a>
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

export function AppFooter() {
  return (
    <footer id="kontak" className="pt-32 w-full overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 2xl:px-0">
        <motion.div
          variants={staggerContainer(0.12, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid pb-13 lg:grid-cols-4 lg:gap-x-8"
        >
          <motion.div variants={fadeLeft} className="max-w-lg lg:col-span-2">
            <a href="/" aria-label="Beranda Aslab TI Universitas Pamulang">
              <img
                alt="Logo Aslab TI Universitas Pamulang"
                src={logo}
                className="h-10 w-auto"
              />
            </a>

            <p className="my-6 text-sm/6 text-neutral-600">
              Unit penunjang kegiatan praktikum, asistensi akademik, dan
              pengembangan riset teknologi pada Program Studi Teknik Informatika
              Universitas Pamulang.
            </p>

            <div className="flex items-center gap-x-3.5">
              {SOCIAL_LINKS.map((social) => (
                <SocialButton key={social.name} {...social} />
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="w-full space-y-8 mt-8 lg:mt-0"
          >
            <h3 className="font-semibold text-neutral-900">
              Tautan Resmi Kampus
            </h3>
            <div className="flex flex-col gap-y-5 text-sm text-neutral-600">
              {CAMPUS_LINKS.map(({ label, href }) => (
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

          <motion.div
            variants={fadeRight}
            className="w-full space-y-8 mt-8 lg:mt-0"
          >
            <h3 className="font-semibold text-neutral-900">Informasi</h3>
            <div className="flex flex-col gap-y-5 text-sm text-neutral-600">
              {CONTACT_INFO.map((item) => (
                <motion.div
                  key={item.text}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="inline-block"
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-neutral-900 transition-colors duration-200"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <p className="hover:text-neutral-900 transition-colors duration-200">
                      {item.text}
                    </p>
                  )}
                </motion.div>
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

        <div className="flex max-sm:flex-col justify-between items-center text-sm/6 py-3">
          <div>
            <p className="text-neutral-500">
              &copy; {new Date().getFullYear()} Aslab TI Universitas Pamulang.
              All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-x-6">
            <a
              href="https://satu.unpam.ac.id"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 transition-colors"
            >
              satu.unpam.ac.id
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
