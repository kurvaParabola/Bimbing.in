/**
 * Bimbing.in — Katalog Layanan (Data Source)
 * Sesuai PRD Bagian 7 dan 8.3 (S03).
 * Dilarang memuat harga, klaim superlatif, atau janji nilai/kelulusan.
 */

// [PLACEHOLDER] Draft kategori awal; dikonfirmasi sebelum peluncuran
export const servicesData = [
  {
    id: 'programming',
    name: 'Programming & Development',
    shortDescription: 'Pendampingan logika pemrograman, pengembangan aplikasi, dan pemecahan kendala teknis.',
    topics: [
      'Dasar logika pemrograman (Python, Java, C/C++)',
      'Pengembangan aplikasi web (HTML, CSS, JS, React)',
      'Debugging error & refactoring kode',
      'Struktur proyek dan version control (Git)',
    ],
    icon: 'code',
    waContext: 'Programming & Development',
    isActive: true,
    order: 1,
  },
  {
    id: 'data',
    name: 'Database & Data Analysis',
    shortDescription: 'Pendampingan perancangan struktur basis data, manipulasi query, dan eksplorasi data.',
    topics: [
      'Desain skema tabel & relasi (ERD, Normalisasi)',
      'Query SQL (MySQL, PostgreSQL)',
      'Pembersihan & persiapan data',
      'Analisis & visualisasi data dasar',
    ],
    icon: 'database',
    waContext: 'Database & Data Analysis',
    isActive: true,
    order: 2,
  },
  {
    id: 'uiux',
    name: 'UI/UX Design',
    shortDescription: 'Pendampingan perancangan antarmuka pengguna yang terstruktur dan mudah digunakan.',
    topics: [
      'Penyusunan alur pengguna (user flow) & wireframing',
      'Pembuatan prototipe interaktif di Figma',
      'Penerapan prinsip desain visual & hierarki',
      'Evaluasi kegunaan (usability heuristic)',
    ],
    icon: 'palette',
    waContext: 'UI/UX Design',
    isActive: true,
    order: 3,
  },
  {
    id: 'iot',
    name: 'IoT & Microcontroller',
    shortDescription: 'Pendampingan perancangan sistem perangkat keras, sensor, dan mikrokontroler.',
    topics: [
      'Pemrograman mikrokontroler (Arduino, ESP32/ESP8266)',
      'Integrasi sensor dan aktuator dasar',
      'Rangkaian elektronika & troubleshooting sirkuit',
      'Pengiriman data sensor (MQTT/HTTP dasar)',
    ],
    icon: 'cpu',
    waContext: 'IoT & Microcontroller',
    isActive: true,
    order: 4,
  },
];
