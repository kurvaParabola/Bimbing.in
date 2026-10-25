/**
 * Bimbing.in — Konfigurasi Situs & Integrasi
 * Sumber kebenaran tunggal untuk nomor WhatsApp, metadata situs, dan flag fitur.
 */

const rawWaNumber = import.meta.env.VITE_WA_NUMBER || '';
const isPlaceholderNumber = !rawWaNumber || rawWaNumber === '6281234567890' || rawWaNumber === 'YOUR_PHONE_NUMBER';

if (isPlaceholderNumber) {
  // Peringatan keras saat build/dev sesuai PRD 12.2
  // eslint-disable-next-line no-console
  console.warn(
    '[Bimbing.in Config Warning] VITE_WA_NUMBER belum dikonfigurasi atau masih bernilai placeholder. ' +
    'Tombol WhatsApp tidak akan mengarah ke nomor palsu.'
  );
}

export const siteConfig = {
  name: 'Bimbing.in',
  tagline: 'Teman Belajar, Teman Bertumbuh',
  description:
    'Layanan pendampingan belajar akademik untuk pemrograman, database, analisis data, UI/UX, dan IoT. Konsultasi langsung lewat chat WhatsApp.',
  url: 'https://bimbing.in',

  // WhatsApp Configuration
  whatsapp: {
    number: isPlaceholderNumber ? '' : rawWaNumber.replace(/[^0-9]/g, ''),
    rawNumber: rawWaNumber,
    isConfigured: !isPlaceholderNumber,
  },

  // Feature Flags
  features: {
    // S06 Mentor/Team dimatikan di MVP (PRD Bagian 8.3)
    showMentors: false,
    // Sticky CTA mobile aktif (PRD Bagian 8.3 P1)
    stickyCTA: true,
  },

  // Navigation Links
  // Catatan: Jika showMentors true, link mentor ditambahkan secara kondisional
  navLinks: [
    { label: 'Layanan', href: '#layanan' },
    { label: 'Cara Kerja', href: '#cara-kerja' },
    { label: 'Prinsip', href: '#prinsip' },
    { label: 'FAQ', href: '#faq' },
  ],

  // Operasional & Kontak
  // [KONFIRMASI: Jam operasional dan waktu balas admin]
  operationalHours: 'Senin – Sabtu, 09.00 – 21.00 WIB',
  responseNote: 'Admin biasanya membalas dalam hitungan menit pada jam operasional.',

  // Social Links
  // [KONFIRMASI: Tautan media sosial resmi belum ada, dilarang membuat tautan palsu]
  socials: [],
};
