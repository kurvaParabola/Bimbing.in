/**
 * Bimbing.in — Analytics Wrapper (P1)
 * Mengirim event tanpa menyimpan data pribadi. No-op bila belum dikonfigurasi.
 * Sesuai PRD Bagian 13.
 */

const ANALYTICS_ID = import.meta.env.VITE_ANALYTICS_ID || '';

/**
 * Mencatat klik CTA WhatsApp
 * @param {Object} params
 * @param {string} params.placement - Lokasi tombol (header, hero, service_card, etc.)
 * @param {string} [params.category='general'] - Kategori layanan jika ada
 */
export function trackWhatsAppClick({ placement, category = 'general' }) {
  if (!ANALYTICS_ID && typeof window === 'undefined') {
    return;
  }

  // Jika window.gtag ada
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'wa_cta_click', {
      event_category: 'engagement',
      placement,
      category,
    });
    return;
  }

  // Jika window.plausible ada
  if (typeof window !== 'undefined' && typeof window.plausible === 'function') {
    window.plausible('wa_cta_click', {
      props: { placement, category },
    });
    return;
  }

  // Log di console mode development jika analytics ID belum diisi
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.debug('[Analytics Track]', 'wa_cta_click', { placement, category });
  }
}
