/**
 * Bimbing.in — WhatsApp Utility
 * Membuat URL Click to Chat dengan format standar dan encoding aman.
 * Sesuai PRD Bagian 12.
 */

import { siteConfig } from '../config/site.js';

/**
 * Membuat teks template pesan WhatsApp
 * @param {string} [categoryName] - Nama kategori jika spesifik
 * @returns {string} Teks pesan mentah
 */
export function getWhatsAppMessage(categoryName) {
  if (categoryName && categoryName.trim().length > 0) {
    return (
      `Halo Bimbing.in, saya ingin konsultasi bimbingan untuk kategori ${categoryName.trim()}.\n\n` +
      `Topik / mata kuliah: \n` +
      `Deadline (jika ada): `
    );
  }

  return (
    `Halo Bimbing.in, saya ingin konsultasi soal bimbingan belajar.\n\n` +
    `Topik / mata kuliah: \n` +
    `Deadline (jika ada): `
  );
}

/**
 * Membuat URL wa.me dengan encoding karakter yang benar
 * @param {Object} options
 * @param {string} [options.categoryName] - Nama kategori bimbingan
 * @param {string} [options.customMessage] - Pesan kustom jika diperlukan
 * @returns {string} URL WhatsApp siap pakai atau string kosong bila nomor belum dikonfigurasi
 */
export function getWhatsAppUrl({ categoryName, customMessage } = {}) {
  const number = siteConfig.whatsapp.number;

  if (!number) {
    return '';
  }

  const message = customMessage || getWhatsAppMessage(categoryName);
  const encodedText = encodeURIComponent(message);

  return `https://wa.me/${number}?text=${encodedText}`;
}
