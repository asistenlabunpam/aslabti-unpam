"use client"

import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react";

export const SmoothScrollHero = () => {
  return (
    <div>
        <Hero />
        <Schedule />
    </div>
  );
};

const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100dvh)` }}
      className="relative w-full"
    >
      <CenterImage />
      <ParallaxImages />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-linear-to-b from-neutral-950/0 to-neutral-50" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-dvh w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage:
          "url(https://cdn.21st.dev/assets/mirror/3e/3ea1ee3ce8a8134c194baf880a7afabc7a43bad8d5672f7b0f74fff87344dcc4.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-50">
      <ParallaxImg
        src="https://cdn.21st.dev/assets/mirror/68/68fd4edf19855762d0020e6ddbf3fdd31b7f768a6c65014d50ec6b36ef305b54.jpg"
        alt="And example of a space launch"
        start={-200}
        end={200}
        className="w-1/3"
      />
      <ParallaxImg
        src="https://cdn.21st.dev/assets/mirror/bc/bca64f76b38b6b3e0f1c2357292903fc428e16d47b49005201be8ba51377ce8c.jpg"
        alt="An example of a space launch"
        start={200}
        end={-250}
        className="mx-auto w-2/3"
      />
      <ParallaxImg
        src="https://cdn.21st.dev/assets/mirror/04/04691b2e29925f30eac3817ea8f65d973484b711822252a13c15248859e464da.jpg"
        alt="Orbiting satellite"
        start={-200}
        end={200}
        className="ml-auto w-1/3"
      />
      <ParallaxImg
        src="https://cdn.21st.dev/assets/mirror/71/711f1a9ccb3786dcc00e8031191dc4d58c9377cefb54bf927806921a4a05a818.jpg"
        alt="Orbiting satellite"
        start={0}
        end={-500}
        className="ml-24 w-5/12"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }: { className?: string; alt: string; src: string; start: number; end: number }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

const Schedule = () => {
  return (
    <section
      id="launch-schedule"
      className="px-4 max-w-4xl mx-auto sm:px-6 lg:px-8"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-semibold uppercase text-neutral-950"
      >
        Frequently Asked Questions
      </motion.h1>
      
      <div className="space-y-9 divide-y divide-neutral-300">
        <ScheduleItem title="Apa itu platform ASLAB TI UNPAM?" date="Website ini adalah platform resmi Asisten Laboratorium Teknik Informatika Universitas Pamulang untuk mengakses informasi jadwal asistensi, kurikulum praktikum, modul, regulasi lab, dan berita acara kegiatan." />
        <ScheduleItem title="Mata kuliah praktikum apa saja yang didukung oleh ASLAB?" date="Terdapat 14 mata kuliah praktikum, mulai dari tingkat awal seperti Algoritma & Pemrograman dan Basis Data, hingga materi tingkat lanjut seperti Machine Learning, Cloud Computing, dan Mobile Programming." />
        <ScheduleItem title="Di mana saja lokasi ruang laboratorium komputer TI UNPAM?" date="Laboratorium tersebar di dua gedung kampus: Gedung A (Lantai 6) Ruang 611 dan Ruang 612 (fokus pada Jaringan Komputer dan Cloud Computing) dan Gedung C (Lantai 8) Ruang 773, 775, 776, dan 782 (fokus pada Pemrograman, Mobile Programming, Basis Data, dan Data Mining)." />
        <ScheduleItem title="Apa tugas utama asisten laboratorium saat sesi praktikum?" date="Aslab bertugas membimbing mahasiswa memahami materi teknis, menyiapkan perangkat keras, software, dan koneksi jaringan sebelum praktikum dimulai, mengawasi kepatuhan tata tertib, serta mengelola inventaris lab." />
        <ScheduleItem title="Apakah mahasiswa bisa mendaftar menjadi asisten lab lewat website ini?" date="Pendaftaran aslab baru dapat dipantau melalui menu Recruitment di bagian navigasi bawah saat periode seleksi dibuka." />
      </div>
    </section>
  );
};

const ScheduleItem = ({ title, date }: { title: string; date: string; }) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="pb-9 space-y-5"
    >
      <p className="text-xl text-neutral-950">{title}</p>
      <p className="text-sm/6 text-neutral-700">{date}</p>
    </motion.div>
  );
};