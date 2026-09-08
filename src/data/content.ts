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

export const coursesHeading = "Mata Kuliah Praktikum Asisten Laboratorium";

export const timeline: TimelineItem[] = [
  {
    name: "Algoritma & Pemrograman",
    description:
      "Penguasaan fondasi logika komputasi dan pemrograman terstruktur, mencakup struktur kontrol percabangan dan perulangan, modularitas fungsi, manipulasi array dan pointer, hingga pengenalan efisiensi algoritma komputasi menggunakan C/C++. Praktikum ini diselenggarakan pada Semester 1 (Dasar) dan Semester 3 (Lanjutan) dengan bobot 3 SKS.",
    date: "Semester 1",
    dateTime: "Sem-1",
  },
  {
    name: "Struktur Data",
    description:
      "Implementasi struktur data fundamental meliputi pointer, linked list, stack, queue, binary search tree, dan graph yang disertai pemahaman analisis optimasi memori dan kompleksitas waktu komputasi (Big-O). Praktikum ini diselenggarakan pada Semester 2 dengan bobot 3 SKS.",
    date: "Semester 2",
    dateTime: "Sem-2",
  },
  {
    name: "Pemrograman",
    description:
      "Penerapan paradigma Object-Oriented Programming (OOP) modern, mencakup konsep class, object, encapsulation, inheritance, polymorphism, dan exception handling untuk menghasilkan arsitektur perangkat lunak yang modular dan andal. Praktikum ini mencakup Pemrograman 1 (Semester 4) dan Pemrograman 2 (Semester 6) dengan bobot 3 SKS.",
    date: "Semester 3",
    dateTime: "Sem-3",
  },
  {
    name: "Basis Data",
    description:
      "Perancangan model basis data relasional melalui pemodelan ERD dan teknik normalisasi, penulisan query tingkat lanjut dengan SQL (DDL, DML, DCL), optimasi query menggunakan indexing, serta pengelolaan integritas dan keamanan database. Praktikum ini mencakup Basis Data 1 (Semester 3) dan Basis Data 2 (Semester 6) dengan bobot 3 SKS.",
    date: "Semester 3",
    dateTime: "Sem-3",
  },
  {
    name: "Jaringan Komputer",
    description:
      "Arsitektur jaringan komputer model OSI dan TCP/IP, skema addressing & subnetting IPv4/IPv6, konfigurasi perangkat jaringan router dan switch, implementasi VLAN, serta simulasi dan troubleshooting konektivitas jaringan secara komprehensif. Praktikum ini diselenggarakan pada Semester 4 dengan bobot 3 SKS.",
    date: "Semester 4",
    dateTime: "Sem-4",
  },
  {
    name: "Cloud Computing",
    description:
      "Implementasi arsitektur komputasi awan (IaaS, PaaS, SaaS), deployment dan isolasi aplikasi berbasis container menggunakan Docker, manajemen orkestrasi layanan, serta konfigurasi server virtual pada environment cloud. Praktikum ini diselenggarakan pada Semester 4 dengan bobot 3 SKS.",
    date: "Semester 4",
    dateTime: "Sem-4",
  },
  {
    name: "Pemrograman Web",
    description:
      "Rancang bangun aplikasi web modern, responsif, dan performan berbasis standar HTML5, modern CSS, JavaScript/TypeScript, konsumsi RESTful API, hingga integrasi arsitektur fullstack framework yang selaras dengan standar industri. Praktikum ini mencakup Pemrograman Web 1 (Semester 5) dan Pemrograman Web 2 (Semester 7) dengan bobot 3 SKS.",
    date: "Semester 5",
    dateTime: "Sem-5",
  },
  {
    name: "Mobile Programming",
    description:
      "Pengembangan aplikasi mobile modern multiplatform untuk platform Android dan iOS menggunakan Flutter dan Kotlin, mencakup implementasi clean architecture, manajemen state terstruktur, konsumsi web service, dan akses hardware perangkat. Praktikum ini diselenggarakan pada Semester 6 dengan bobot 3 SKS.",
    date: "Semester 6",
    dateTime: "Sem-6",
  },
  {
    name: "Data Mining",
    description:
      "Eksplorasi dan penambangan wawasan berharga dari himpunan data skala besar melalui tahapan data preprocessing, ekstraksi pola asosiasi, klastering data, dan pemodelan klasifikasi cerdas untuk analitika bisnis dan prediksi. Praktikum ini diselenggarakan pada Semester 6 dengan bobot 2 SKS.",
    date: "Semester 6",
    dateTime: "Sem-6",
  },
  {
    name: "Machine Learning",
    description:
      "Penerapan algoritma kecerdasan buatan berbasis supervised & unsupervised learning, pemodelan neural network fundamental, evaluasi performa metrik model prediktif, serta implementasi pipeline deployment model machine learning terintegrasi. Praktikum ini diselenggarakan pada Semester 7 dengan bobot 3 SKS.",
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
