import StackedSections from "@/components/stacked-list";
import { motion } from "motion/react";
import { scaleUp, VIEWPORT } from "@/lib/animation";

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

function MyFirstChapter() {
  return (
    <motion.div
      variants={scaleUp}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className="flex h-dvh items-center justify-center bg-transparent"
    >
      <div className="mx-auto mt-16 max-w-2xl bg-white rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
        <div className="p-8 sm:p-10 lg:flex-auto">
          <h3 className="text-3xl font-semibold tracking-tight text-gray-900">
            SOP & Tata Tertib Praktikum
          </h3>
          <p className="mt-6 text-base/7 text-gray-600">
            Pedoman resmi operasional laboratorium untuk menjamin keselamatan kerja, ketertiban ruang komputasi, dan pemeliharaan perangkat praktikum sivitas akademika.
          </p>
          <div className="mt-10 flex items-center gap-x-4">
            <h4 className="flex-none text-sm/6 font-semibold text-indigo-600">
              Ketentuan Utama
            </h4>
            <div className="h-px flex-auto bg-gray-100" />
          </div>
          <ul
            role="list"
            className="mt-8 grid grid-cols-1 gap-4 text-sm/6 text-gray-600 sm:grid-cols-2 sm:gap-6"
          >
            {sopFeatures.map((feature) => (
              <li key={feature} className="flex gap-x-3">
                • {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:shrink-0">
          <div className="rounded-2xl bg-gray-50 py-10 text-center inset-ring inset-ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
            <div className="mx-auto max-w-xs px-8">
              <p className="text-base font-semibold text-gray-600">
                Standar Kepatuhan
              </p>
              <p className="mt-6 flex items-baseline justify-center gap-x-2">
                <span className="text-5xl font-semibold tracking-tight text-gray-900">
                  100%
                </span>
                <span className="text-sm/6 font-semibold tracking-wide text-gray-600">
                  Disiplin
                </span>
              </p>
              <a
                href="#"
                className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Unduh Dokumen SOP
              </a>
              <p className="mt-6 text-xs/5 text-gray-600">
                Berlaku di seluruh ruang laboratorium Kampus Viktor UNPAM
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MySecondChapter() {
  return (
    <motion.div
      variants={scaleUp}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className="flex h-dvh items-center justify-center bg-transparent"
    >
      <div className="mx-auto mt-16 max-w-2xl bg-white rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
        <div className="p-8 sm:p-10 lg:flex-auto">
          <h3 className="text-3xl font-semibold tracking-tight text-gray-900">
            Program Asistensi & Bootcamp
          </h3>
          <p className="mt-6 text-base/7 text-gray-600">
            Program bimbingan intensif dan pelatihan teknologi terapan untuk mempercepat pemahaman materi perkuliahan, logika pemrograman, dan kesiapan praktikum mahasiswa.
          </p>
          <div className="mt-10 flex items-center gap-x-4">
            <h4 className="flex-none text-sm/6 font-semibold text-indigo-600">
              Layanan Unggulan
            </h4>
            <div className="h-px flex-auto bg-gray-100" />
          </div>
          <ul
            role="list"
            className="mt-8 grid grid-cols-1 gap-4 text-sm/6 text-gray-600 sm:grid-cols-2 sm:gap-6"
          >
            {asistensiFeatures.map((feature) => (
              <li key={feature} className="flex gap-x-3">
                • {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:shrink-0">
          <div className="rounded-2xl bg-gray-50 py-10 text-center inset-ring inset-ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
            <div className="mx-auto max-w-xs px-8">
              <p className="text-base font-semibold text-gray-600">
                Akses Terbuka
              </p>
              <p className="mt-6 flex items-baseline justify-center gap-x-2">
                <span className="text-5xl font-semibold tracking-tight text-gray-900">
                  Gratis
                </span>
                <span className="text-sm/6 font-semibold tracking-wide text-gray-600">
                  Mahasiswa TI
                </span>
              </p>
              <a
                href="#"
                className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Lihat Jadwal Bootcamp
              </a>
              <p className="mt-6 text-xs/5 text-gray-600">
                Jadwal asistensi disesuaikan kalender akademik semester aktif
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MyThirdChapter() {
  return (
    <motion.div
      variants={scaleUp}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className="flex h-dvh items-center justify-center bg-transparent"
    >
      <div className="mx-auto mt-16 max-w-2xl bg-white rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
        <div className="p-8 sm:p-10 lg:flex-auto">
          <h3 className="text-3xl font-semibold tracking-tight text-gray-900">
            Rekrutmen Calon Asisten Lab
          </h3>
          <p className="mt-6 text-base/7 text-gray-600">
            Peluang pengabdian dan pengembangan diri bagi mahasiswa aktif Teknik Informatika berprestasi untuk bergabung dalam tim Asisten Laboratorium Teknik Informatika UNPAM.
          </p>
          <div className="mt-10 flex items-center gap-x-4">
            <h4 className="flex-none text-sm/6 font-semibold text-indigo-600">
              Tahapan Seleksi
            </h4>
            <div className="h-px flex-auto bg-gray-100" />
          </div>
          <ul
            role="list"
            className="mt-8 grid grid-cols-1 gap-4 text-sm/6 text-gray-600 sm:grid-cols-2 sm:gap-6"
          >
            {rekrutmenFeatures.map((feature) => (
              <li key={feature} className="flex gap-x-3">
                • {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:shrink-0">
          <div className="rounded-2xl bg-gray-50 py-10 text-center inset-ring inset-ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
            <div className="mx-auto max-w-xs px-8">
              <p className="text-base font-semibold text-gray-600">
                Pendaftaran Terbuka
              </p>
              <p className="mt-6 flex items-baseline justify-center gap-x-2">
                <span className="text-5xl font-semibold tracking-tight text-gray-900">
                  Tiap
                </span>
                <span className="text-sm/6 font-semibold tracking-wide text-gray-600">
                  Semester
                </span>
              </p>
              <a
                href="#"
                className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Informasi Rekrutmen
              </a>
              <p className="mt-6 text-xs/5 text-gray-600">
                Terbuka bagi mahasiswa Teknik Informatika semester 3 ke atas
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

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
