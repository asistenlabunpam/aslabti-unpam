import StackedSections from "@/components/stacked-list";
import { motion } from "motion/react";
import {
  scaleUp,
  staggerContainer,
  staggerItem,
  fadeUp,
  fadeLeft,
  VIEWPORT,
  VIEWPORT_TIGHT,
} from "@/lib/animation";

const sopFeatures = [
  "Kehadiran tepat waktu sesuai jadwal praktikum",
  "Penggunaan kartu identitas praktikum resmi",
  "Larangan mengubah konfigurasi hardware lab",
  "Menjaga kebersihan dan ketertiban ruang komputasi",
];

const asistensiFeatures = [
  "Bimbingan problem solving dan debugging intensif",
  "Akses modul ajar praktikum dan studi kasus",
  "Workshop dan bootcamp spesialisasi teknologi",
  "Sesi asistensi kelompok terpadu bersama dosen",
];

const rekrutmenFeatures = [
  "Seleksi administrasi dan uji logika pemrograman",
  "Wawancara komitmen dan simulasi microteaching",
  "Program pelatihan teknis dan kepemimpinan",
  "Sertifikasi kompetensi dan pengalaman profesional",
];

type ChapterCardProps = {
  title: string;
  description: string;
  features: string[];
  featuresLabel: string;
  statValue: string;
  statUnit: string;
  statLabel: string;
  ctaLabel: string;
};

function ChapterCard({
  title,
  description,
  features,
  featuresLabel,
  statValue,
  statUnit,
  statLabel,
  ctaLabel,
}: ChapterCardProps) {
  return (
    <motion.div
      variants={scaleUp}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className="flex h-dvh items-center justify-center bg-transparent px-4 sm:px-6"
    >
      <div className="mx-auto mt-16 w-full max-w-2xl bg-white rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_TIGHT}
          className="p-8 sm:p-10 lg:flex-auto"
        >
          <motion.h3
            variants={fadeUp}
            className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl"
          >
            {title}
          </motion.h3>
          <motion.p variants={fadeUp} className="mt-6 text-base/7 text-gray-600">
            {description}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex items-center gap-x-4">
            <h4 className="flex-none text-sm/6 font-semibold text-indigo-600">
              {featuresLabel}
            </h4>
            <div className="h-px flex-auto bg-gray-100" />
          </motion.div>

          <motion.ul
            role="list"
            variants={staggerContainer(0.08, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_TIGHT}
            className="mt-8 grid grid-cols-1 gap-4 text-sm/6 text-gray-600 sm:grid-cols-2 sm:gap-6"
          >
            {features.map((feature) => (
              <motion.li
                key={feature}
                variants={staggerItem}
                className="flex gap-x-3"
              >
                <motion.span
                  className="text-indigo-500 flex-none mt-0.5"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={VIEWPORT_TIGHT}
                  transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.1 }}
                >
                  •
                </motion.span>
                {feature}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:shrink-0">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_TIGHT}
            className="rounded-2xl bg-gray-50 py-10 text-center inset-ring inset-ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 h-full"
          >
            <div className="mx-auto max-w-xs px-8">
              <p className="text-base font-semibold text-gray-600">{statLabel}</p>

              <motion.p
                className="mt-6 flex items-baseline justify-center gap-x-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_TIGHT}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="text-5xl font-semibold tracking-tight text-gray-900">
                  {statValue}
                </span>
                <span className="text-sm/6 font-semibold tracking-wide text-gray-600">
                  {statUnit}
                </span>
              </motion.p>

              <motion.a
                href="#"
                className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_TIGHT}
                transition={{ duration: 0.5, delay: 0.45 }}
                whileHover={{
                  backgroundColor: "#4338ca",
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.97, transition: { duration: 0.1 } }}
              >
                {ctaLabel}
              </motion.a>

              <motion.p
                className="mt-6 text-xs/5 text-gray-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={VIEWPORT_TIGHT}
                transition={{ duration: 0.5, delay: 0.55 }}
              >
                Berlaku di seluruh ruang laboratorium Kampus Viktor UNPAM
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Chapter instances ────────────────────────────────────────────────────────

function MyFirstChapter() {
  return (
    <ChapterCard
      title="SOP & Tata Tertib Praktikum"
      description="Pedoman resmi operasional laboratorium untuk menjamin keselamatan kerja, ketertiban ruang komputasi, dan pemeliharaan perangkat praktikum sivitas akademika."
      features={sopFeatures}
      featuresLabel="Ketentuan Utama"
      statValue="100%"
      statUnit="Disiplin"
      statLabel="Standar Kepatuhan"
      ctaLabel="Unduh Dokumen SOP"
    />
  );
}

function MySecondChapter() {
  return (
    <ChapterCard
      title="Program Asistensi & Bootcamp"
      description="Program bimbingan intensif dan pelatihan teknologi terapan untuk mempercepat pemahaman materi perkuliahan, logika pemrograman, dan kesiapan praktikum mahasiswa."
      features={asistensiFeatures}
      featuresLabel="Layanan Unggulan"
      statValue="Gratis"
      statUnit="Mahasiswa TI"
      statLabel="Akses Terbuka"
      ctaLabel="Lihat Jadwal Bootcamp"
    />
  );
}

function MyThirdChapter() {
  return (
    <ChapterCard
      title="Rekrutmen Calon Asisten Lab"
      description="Peluang pengabdian dan pengembangan diri bagi mahasiswa aktif Teknik Informatika berprestasi untuk bergabung dalam tim Asisten Laboratorium Teknik Informatika UNPAM."
      features={rekrutmenFeatures}
      featuresLabel="Tahapan Seleksi"
      statValue="Tiap"
      statUnit="Semester"
      statLabel="Pendaftaran Terbuka"
      ctaLabel="Informasi Rekrutmen"
    />
  );
}

// ─── Export ───────────────────────────────────────────────────────────────────

export function ChaptersSection() {
  return (
    <section className="w-full py-20">
      <StackedSections stackOffset={48}>
        <MyFirstChapter />
        <MySecondChapter />
        <MyThirdChapter />
      </StackedSections>
    </section>
  );
}
