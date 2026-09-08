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

export interface AboutTimelineItem {
  name: string;
  description: string;
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
  title: "Asisten Laboratorium Teknik Informatika",
  description:
    "Pusat kegiatan praktikum, bimbingan asistensi akademik, dan eksplorasi teknologi terapan untuk mencetak talenta digital yang unggul, adaptif, dan berdaya saing global.",
};

export const aboutContent = {
  heading: "Dedikasi & Komitmen Laboratorium",
  vision:
    "Asisten Laboratorium Teknik Informatika Universitas Pamulang merupakan entitas garda terdepan dalam mendukung ekosistem akademik berbasis praktika dan riset teknologi. Terdiri dari talenta mahasiswa terpilih melalui seleksi kompetensi yang ketat, tim ini memadukan keunggulan teknis, profesionalisme, serta dedikasi tinggi dalam memfasilitasi kegiatan belajar mengajar di laboratorium.",
  mission:
    "Berperan sebagai mitra strategis dosen, asisten laboratorium bertindak sebagai fasilitator pembelajaran yang adaptif dalam membimbing mahasiswa dalam pemecahan masalah teknis, penguasaan materi praktikum, serta eksplorasi teknologi mutakhir.",
};

export const aboutTimeline: AboutTimelineItem[] = [
  {
    name: "Visi Laboratorium",
    description:
      "Menjadi pusat keunggulan pendukung pembelajaran praktika berbasis teknologi yang adaptif, kolaboratif, dan berdaya saing global pada Program Studi Teknik Informatika Universitas Pamulang.",
  },
  {
    name: "Misi & Strategi Utama",
    description:
      "Menyediakan infrastruktur komputasi yang andal, menyelenggarakan pendampingan praktikum terstruktur, mengembangkan kompetensi talenta digital melalui pelatihan berkala, serta menumbuhkan ekosistem transfer pengetahuan yang profesional dan berintegritas tinggi.",
  },
];

export const pillarsHeading = "Layanan & Fokus Utama Laboratorium";

export const leftFeatures: NumberedFeature[] = [
  {
    number: "01",
    title: "Asistensi Praktikum Terpadu",
    description:
      "Pendampingan intensif pada setiap sesi praktikum untuk memperkuat pemahaman logika pemrograman, analisis algoritma, dan pemecahan masalah komputasi secara terarah.",
  },
  {
    number: "02",
    title: "Modul & Kurikulum Terstandar",
    description:
      "Penyusunan modul ajar praktikum resmi yang komprehensif, relevan dengan kurikulum akademik terkini, dan selaras dengan standar kebutuhan industri teknologi.",
  },
];

export const rightFeatures: NumberedFeature[] = [
  {
    number: "03",
    title: "Infrastruktur Komputasi Andal",
    description:
      "Pengelolaan workstation berperforma tinggi, perangkat jaringan enterprise, dan environment komputasi awan yang stabil di Kampus Viktor.",
  },
  {
    number: "04",
    title: "Bootcamp & Pengembangan Skill",
    description:
      "Penyelenggaraan workshop teknis berkala seputar Web & Mobile Development, Database Architecture, Cyber Security, hingga Artificial Intelligence.",
  },
];

export const coursesHeading = "Mata Kuliah Praktikum Unggulan";

export const timeline: TimelineItem[] = [
  {
    name: "Algoritma & Pemrograman",
    description:
      "Fondasi logika pemrograman menggunakan C++, struktur kontrol perulangan dan percabangan, fungsi modular, array, string, serta pengenalan efisiensi algoritma komputasi.",
    date: "Semester 1",
    dateTime: "Sem-1",
  },
  {
    name: "Struktur Data",
    description:
      "Implementasi struktur data fundamental meliputi pointer, linked list, stack, queue, binary tree, dan graph dengan analisis optimasi kompleksitas memori dan waktu.",
    date: "Semester 2",
    dateTime: "Sem-2",
  },
  {
    name: "Pemrograman Berorientasi Objek",
    description:
      "Penerapan paradigma OOP modern mencakup class, object, encapsulation, inheritance, polymorphism, dan exception handling untuk rancang bangun software modular.",
    date: "Semester 3",
    dateTime: "Sem-3",
  },
  {
    name: "Sistem Basis Data",
    description:
      "Perancangan model relasional (ERD & normalisasi), manipulasi data tingkat lanjut dengan SQL (DDL/DML), indexing, serta manajemen integritas dan keamanan database.",
    date: "Semester 3",
    dateTime: "Sem-3",
  },
  {
    name: "Jaringan Komputer",
    description:
      "Arsitektur jaringan model OSI & TCP/IP, addressing & subnetting IPv4/IPv6, konfigurasi router & switch, VLAN, serta troubleshooting konektivitas jaringan komputer.",
    date: "Semester 4",
    dateTime: "Sem-4",
  },
  {
    name: "Komputasi Awan (Cloud)",
    description:
      "Implementasi arsitektur cloud (IaaS, PaaS, SaaS), deployment container dengan Docker, orkestrasi layanan, dan konfigurasi server virtual di lingkungan cloud.",
    date: "Semester 4",
    dateTime: "Sem-4",
  },
  {
    name: "Pemrograman Web",
    description:
      "Pengembangan aplikasi web modern dan responsif berbasis HTML5, CSS framework, JavaScript/TypeScript, konsumsi RESTful API, dan integrasi fullstack framework.",
    date: "Semester 5",
    dateTime: "Sem-5",
  },
  {
    name: "Pemrograman Bergerak (Mobile)",
    description:
      "Rancang bangun aplikasi mobile Android multiplatform dengan Flutter dan Kotlin, manajemen state terstruktur, konsumsi API, dan pemanfaatan hardware perangkat.",
    date: "Semester 6",
    dateTime: "Sem-6",
  },
  {
    name: "Data Mining & Analitika",
    description:
      "Eksplorasi data volume besar melalui teknik data preprocessing, association rules, klastering, dan klasifikasi algoritma cerdas untuk menghasilkan insight presisi.",
    date: "Semester 6",
    dateTime: "Sem-6",
  },
  {
    name: "Machine Learning & AI",
    description:
      "Penerapan model prediktif berbasis supervised & unsupervised learning, neural network dasar, evaluasi performa algoritma, dan deployment pipeline machine learning.",
    date: "Semester 7",
    dateTime: "Sem-7",
  },
];

export const labDetailsContent = {
  heading: "Standar Fasilitas & Lingkungan Praktikum",
  description:
    "Laboratorium komputer dirancang dengan standar fasilitas modern guna menciptakan suasana belajar komputasi yang nyaman, kondusif, dan berorientasi praktik.",
  box1Text:
    "Setiap unit workstation di laboratorium dilengkapi software development environment berlisensi, compiler terkini, serta akses internet berkecepatan tinggi untuk menunjang kegiatan praktikum dan eksplorasi riset mahasiswa.",
  box2Text:
    "Seluruh kegiatan praktikum didampingi oleh asisten laboratorium yang telah melalui seleksi kompetensi ketat dan pembekalan teknis mendalam, siap membantu penyelesaian kendala kode dan troubleshooting.",
};

export const labRoomsSection = {
  title: "Aktivitas Asisten Laboratorium Teknik Informatika",
};

export const labRooms: FeatureItem[] = [
  {
    name: "Kamisan Teknik Informatika",
    description:
      "Program forum mingguan rutin setiap Kamis sebagai ruang diskusi terbuka, bedah teknologi terkini, peer coding clinic, dan penguatan kompetensi teknis antarasisten laboratorium.",
    imageSrc:
      "https://res.cloudinary.com/dhaonb1vn/image/upload/v1788840450/kamisan-4_tm2f7x.webp",
    imageAlt: "Dokumentasi kegiatan forum mingguan Kamisan Asisten Laboratorium Teknik Informatika.",
  },
  {
    name: "Asistensi Kelas Mahasiswa Bersama Dosen",
    description:
      "Pendampingan langsung pada sesi perkuliahan praktikum di laboratorium, membantu dosen dalam membimbing mahasiswa, memecahkan kendala teknis (troubleshooting), serta evaluasi tugas laboratorium.",
    imageSrc:
      "https://res.cloudinary.com/dhaonb1vn/image/upload/v1788840599/asistensi-algoritma-pemrograman_bfiw1x.webp",
    imageAlt: "Suasana asistensi praktikum mahasiswa di laboratorium komputer bersama dosen pengampu.",
  },
  {
    name: "Bootcamp & Pengembangan Skill Asisten Laboratorium",
    description:
      "Pelatihan intensif berkala guna meningkatkan standar kecakapan asisten laboratorium dalam bidang software engineering, cloud computing, cybersecurity, serta metodologi pengajaran yang efektif.",
    imageSrc:
      "https://res.cloudinary.com/dhaonb1vn/image/upload/v1788840693/bootcamp-mobile-programming_zbnp7b.webp",
    imageAlt: "Sesi bootcamp internal pelatihan teknis dan pengembangan skill asisten laboratorium.",
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
