/**
 * Bimbing.in — Konfigurasi Situs & Integrasi
 * Sumber kebenaran tunggal untuk nomor WhatsApp, metadata situs, dan flag fitur.
 */

function normalizeWaNumber(number) {
  if (!number) return '';
  let cleaned = String(number).replace(/[^0-9]/g, '');
  // Konversi otomatis format lokal Indonesia (08...) ke format internasional WhatsApp (628...)
  if (cleaned.startsWith('0')) {
    cleaned = '62' + cleaned.slice(1);
  }
  return cleaned;
}

function formatDisplayNumber(number) {
  if (!number) return '';
  const cleaned = normalizeWaNumber(number);
  // Format 6285668773350 -> +62 856-6877-3350
  if (cleaned.startsWith('62') && cleaned.length >= 11) {
    const prefix = '+62';
    const part1 = cleaned.slice(2, 5);
    const part2 = cleaned.slice(5, 9);
    const part3 = cleaned.slice(9);
    return `${prefix} ${part1}-${part2}-${part3}`;
  }
  return cleaned;
}

// Default nomor WhatsApp resmi (informasi publik, aktif saat deploy tanpa file .env di git)
const DEFAULT_WA_NUMBER = '6285668773350';
const rawWaNumber = import.meta.env.VITE_WA_NUMBER || DEFAULT_WA_NUMBER;
const normalizedWaNumber = normalizeWaNumber(rawWaNumber);
const isPlaceholderNumber =
  !normalizedWaNumber ||
  normalizedWaNumber === '6281234567890' ||
  rawWaNumber === 'YOUR_PHONE_NUMBER';

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
    number: isPlaceholderNumber ? '' : normalizedWaNumber,
    rawNumber: rawWaNumber,
    displayNumber: isPlaceholderNumber ? '' : formatDisplayNumber(normalizedWaNumber),
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
