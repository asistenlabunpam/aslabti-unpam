'use client'

import { logo } from "@/constants"

const navigation = [
  { name: 'Beranda', href: '#' },
  { name: 'Mata Kuliah', href: '#' },
  { name: 'Ruang Lab', href: '#' },
  { name: 'Kontak', href: '#' },
]

export function AppHeader() {
  return (
    <header className="absolute top-0 left-0 z-30 bg-white/50 backdrop-blur-lg w-full">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Asisten Laboratorium Teknik Informatika Universitas Pamulang</span>
          <img
            alt="Logo Aslab TI Universitas Pamulang"
            src={logo}
            className="h-10 w-auto"
          />
        </a>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            =
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href}>
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
