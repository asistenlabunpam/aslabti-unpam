import { logo } from "@/constants";
import { TextHoverEffect } from "./text-hover-effect";

export function AppFooter() {
  return (
    <footer id="kontak" className="pt-32 w-full">
      <div className="grid px-4 pb-13 max-w-7xl mx-auto sm:px-6 lg:grid-cols-4 lg:gap-x-8 lg:px-8 2xl:px-0">
        <div className="max-w-lg lg:col-span-2">
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
        </div>

        <div className="w-full space-y-8">
          <h3 className="font-semibold text-neutral-900">
            Sosial Media
          </h3>
          <div className="flex flex-col gap-y-5 text-sm text-neutral-600">
            <a href="#">Instagram</a>
            <a href="#">TikTok</a>
            <a href="#">GitHub</a>
          </div>
        </div>

        <div className="w-full space-y-8">
          <h3 className="font-semibold text-neutral-900">
            Tautan Resmi Kampus
          </h3>
          <div className="flex flex-col gap-y-5 text-sm text-neutral-600">
            <a
              href="https://unpam.ac.id"
              target="_blank"
              rel="noopener noreferrer"
            >
              unpam.ac.id
            </a>
            <a
              href="https://informatika.unpam.ac.id"
              target="_blank"
              rel="noopener noreferrer"
            >
              informatika.unpam.ac.id
            </a>
            <a
              href="https://ftiunpam.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              ftiunpam.com
            </a>
          </div>
        </div>
      </div>

      <div className="relative w-full select-none pointer-events-none">
        <div className="from-neutral-50 pointer-events-none absolute inset-x-0 top-0 z-3 w-full h-64 bg-linear-to-b" />
        <div className="sm:h-72 lg:h-100 flex items-center justify-center">
          <TextHoverEffect text="ASLAB" />
        </div>
      </div>
    </footer>
  );
}
