export interface FeatureItem {
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export interface NumberedFeature {
  number: string;
  title: string;
  description: string;
}

export interface TimelineItem {
  name: string;
  description: string;
  date: string;
  dateTime: string;
}

export const heroImages = [
  "https://assets.aceternity.com/components/hero-section-with-mesh-gradient.webp",
  "https://assets.aceternity.com/components/3d-globe.webp",
  "https://assets.aceternity.com/components/keyboard-2.webp",
  "https://assets.aceternity.com/components/hero-1.webp",
  "https://assets.aceternity.com/components/hero-2.webp",
  "https://assets.aceternity.com/components/hero-3.webp",
];

export const heroContent = {
  title: "Asisten Laboratorium Teknik Informatika Universitas Pamulang",
  description:
    "Pusat kegiatan praktikum, bimbingan asistensi akademik, dan eksplorasi teknologi terapan untuk mencetak generasi talenta digital yang unggul dan berdaya saing.",
};

export const aboutContent = {
  heading: "Visi & Komitmen Kami",
  vision:
    "Menjadi pusat pendukung utama perkuliahan berbasis praktik pada Program Studi Teknik Informatika Universitas Pamulang guna mendorong kemajuan belajar, keterampilan rekayasa perangkat lunak, serta inovasi teknologi.",
  mission:
    "Kami berdedikasi menyelenggarakan pendampingan praktikum yang terstruktur, mengelola fasilitas laboratorium komputasi modern di Kampus Viktor (Lt. 6 Gedung A dan Lt. 8 Gedung C), serta menyediakan modul ajar berkualitas. Melalui bimbingan intensif, bootcamp keahlian, dan forum berbagi ilmu, kami membina mahasiswa menguasai logika komputasi yang kuat dan siap bersaing di industri teknologi.",
};

export const pillarsHeading = "Layanan & Fokus Utama Laboratorium";

export const leftFeatures: NumberedFeature[] = [
  {
    number: "01",
    title: "Asistensi Praktikum Terpadu",
    description:
      "Pendampingan intensif pada setiap sesi praktikum untuk memperkuat logika pemrograman, analisis algoritma, dan problem solving.",
  },
  {
    number: "02",
    title: "Modul & Kurikulum Praktik",
    description:
      "Penyusunan modul praktikum resmi yang komprehensif, terstruktur, dan disesuaikan dengan kurikulum serta kebutuhan industri modern.",
  },
];

export const rightFeatures: NumberedFeature[] = [
  {
    number: "03",
    title: "Infrastruktur Komputasi Handal",
    description:
      "Pengelolaan workstation berspesifikasi tinggi, perangkat jaringan, dan lingkungan cloud yang stabil di lingkungan Kampus Viktor.",
  },
  {
    number: "04",
    title: "Bootcamp & Pengembangan Skill",
    description:
      "Penyelenggaraan workshop dan pelatihan berkala seputar Web Development, Mobile Apps, Database, hingga Cloud Architecture.",
  },
];

export const coursesHeading = "Mata Kuliah Praktikum Unggulan";

export const timeline: TimelineItem[] = [
  {
    name: "Algoritma & Pemrograman",
    description:
      "Fondasi logika pemrograman menggunakan C++, struktur kontrol perulangan dan percabangan, fungsi, array, string, serta pengenalan efisiensi algoritma.",
    date: "Semester 1",
    dateTime: "Sem-1",
  },
  {
    name: "Struktur Data",
    description:
      "Implementasi struktur data abstrak meliputi linked list, stack, queue, binary tree, dan graph dengan optimasi kompleksitas memori dan waktu.",
    date: "Semester 2",
    dateTime: "Sem-2",
  },
  {
    name: "Pemrograman",
    description:
      "Implementasi struktur data abstrak meliputi linked list, stack, queue, binary tree, dan graph dengan optimasi kompleksitas memori dan waktu.",
    date: "Semester 2",
    dateTime: "Sem-2",
  },
  {
    name: "Basis Data",
    description:
      "Perancangan relasi data (ERD, normalisasi), implementasi DDL/DML, query SQL teroptimasi, serta manajemen integritas dan keamanan data.",
    date: "Semester 3",
    dateTime: "Sem-3",
  },
  {
    name: "Jaringan Komputer",
    description:
      "Penguasaan arsitektur jaringan TCP/IP, subnetting, konfigurasi router & switch, serta implementasi komputasi awan (IaaS, PaaS, SaaS).",
    date: "Semester 4",
    dateTime: "Sem-4",
  },
  {
    name: "Cloud Computing",
    description:
      "Penguasaan arsitektur jaringan TCP/IP, subnetting, konfigurasi router & switch, serta implementasi komputasi awan (IaaS, PaaS, SaaS).",
    date: "Semester 4",
    dateTime: "Sem-4",
  },
  {
    name: "Pemrograman Web",
    description:
      "Pengembangan aplikasi web responsif dan interaktif berbasis HTML5, modern styling, RESTful API, dan arsitektur backend framework.",
    date: "Semester 5",
    dateTime: "Sem-5",
  },
  {
    name: "Mobile Programming",
    description:
      "Pembuatan aplikasi mobile interaktif berbasis Android/Flutter serta ekstraksi pola data berskala besar menggunakan teknik klastering dan klasifikasi.",
    date: "Semester 6",
    dateTime: "Sem-6",
  },
  {
    name: "Data Mining",
    description:
      "Pembuatan aplikasi mobile interaktif berbasis Android/Flutter serta ekstraksi pola data berskala besar menggunakan teknik klastering dan klasifikasi.",
    date: "Semester 6",
    dateTime: "Sem-6",
  },
  {
    name: "Machine Learning",
    description:
      "Pembuatan aplikasi mobile interaktif berbasis Android/Flutter serta ekstraksi pola data berskala besar menggunakan teknik klastering dan klasifikasi.",
    date: "Semester 6",
    dateTime: "Sem-6",
  },
];

export const labDetailsContent = {
  heading: "Standar Fasilitas & Lingkungan Praktikum",
  description:
    "Fasilitas laboratorium dirancang untuk menunjang performa komputasi mahasiswa dengan didukung ketersediaan perangkat lunak mutakhir dan asistensi teknis profesional.",
  box1Text:
    "Setiap unit komputer di laboratorium dilengkapi perangkat lunak IDE berlisensi, compiler terkini, serta akses internet berkecepatan tinggi untuk menunjang pengerjaan tugas dan riset mandiri secara optimal.",
  box2Text:
    "Asisten laboratorium yang bertugas telah melalui seleksi kompetensi dan pembekalan teknis mendalam, siap membantu penyelesaian kendala kode, instalasi environment, dan pemahaman materi praktikum.",
};

export const labRoomsSection = {
  title: "Aktivitas Asisten Laboratorium Teknik Informatika",
};

export const labRooms: FeatureItem[] = [
  {
    name: "Kamisan Teknik Informatika",
    description:
      "Ruang Lab 611 dan Lab 612 diperuntukkan bagi praktikum Jaringan Komputer, Sistem Operasi, dan Cloud Computing. Dilengkapi perangkat keras jaringan terintegrasi, router mikrotik, dan workstation simulasi.",
    imageSrc:
      "https://res.cloudinary.com/dhaonb1vn/image/upload/v1788840450/kamisan-4_tm2f7x.webp",
    imageAlt: "Ruang server dan perangkat jaringan komputer laboratorium.",
  },
  {
    name: "Asistensi Kelas Mahasiswa Bersama Dosen",
    description:
      "Ruang Lab 775 dan Lab 776 dirancang untuk praktikum Pemrograman Web, Mobile Programming, dan Pemrograman Terstruktur dengan environment software development terstandar.",
    imageSrc:
      "https://res.cloudinary.com/dhaonb1vn/image/upload/v1788840599/asistensi-algoritma-pemrograman_bfiw1x.webp",
    imageAlt: "Ruang komputer praktikum pemrograman perangkat lunak.",
  },
  {
    name: "Bootcamp & Pengembangan Skill Asisten Laboratorium",
    description:
      "Ruang Lab 782 difasilitasi perangkat komputasi analitik untuk mendukung mata kuliah Basis Data, Algoritma Pemrograman, dan Data Mining dalam pengolahan data volume besar.",
    imageSrc:
      "https://res.cloudinary.com/dhaonb1vn/image/upload/v1788840693/bootcamp-mobile-programming_zbnp7b.webp",
    imageAlt: "Workstation analisis data dan praktikum komputasi cerdas.",
  },
];

export const chapters = {
  chapter1: "SOP & Tata Tertib Praktikum Laboratorium",
  chapter2: "Program Asistensi & Bootcamp Mahasiswa",
  chapter3: "Rekrutmen Calon Asisten Laboratorium",
};

export const bottomCta = {
  title: "Maju & Berkembang Bersama Asisten Laboratorium Teknik Informatika",
};
