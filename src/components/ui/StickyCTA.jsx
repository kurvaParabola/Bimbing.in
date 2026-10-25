import React, { useState, useEffect } from 'react';
import WhatsAppButton from './WhatsAppButton.jsx';
import { siteConfig } from '../../config/site.js';
import './StickyCTA.css';

/**
 * Bimbing.in — StickyCTA Component (P1)
 * Muncul setelah hero keluar dari viewport, hilang saat mendekati S08 / footer.
 * Hanya aktif pada layar mobile (< 768px). Sesuai PRD Bagian 8.3 & FR-18.
 */
export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!siteConfig.features.stickyCTA) return;

    let isHeroVisible = true;
    let isFinalCtaVisible = false;

    const updateVisibility = () => {
      // Terlihat jika hero sudah lewat DAN final CTA belum terlihat
      setIsVisible(!isHeroVisible && !isFinalCtaVisible);
    };

    const heroEl = document.getElementById('beranda');
    const finalCtaEl = document.getElementById('kontak');
    const footerEl = document.querySelector('footer');

    if (!('IntersectionObserver' in window)) {
      // Fallback sederhana bila browser lawas
      const handleScroll = () => {
        const scrollY = window.scrollY || window.pageYOffset;
        setIsVisible(scrollY > 400);
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        isHeroVisible = entry.isIntersecting;
        updateVisibility();
      },
      { threshold: 0.1 }
    );

    const bottomObserver = new IntersectionObserver(
      (entries) => {
        isFinalCtaVisible = entries.some((entry) => entry.isIntersecting);
        updateVisibility();
      },
      { threshold: 0.05 }
    );

    if (heroEl) heroObserver.observe(heroEl);
    if (finalCtaEl) bottomObserver.observe(finalCtaEl);
    if (footerEl) bottomObserver.observe(footerEl);

    return () => {
      heroObserver.disconnect();
      bottomObserver.disconnect();
    };
  }, []);

  if (!siteConfig.features.stickyCTA) {
    return null;
  }

  return (
    <div
      className={`bi-sticky-cta ${isVisible ? 'bi-sticky-cta--visible' : ''}`.trim()}
      aria-hidden={!isVisible}
    >
      <div className="bi-sticky-cta__inner">
        <WhatsAppButton
          placement="sticky"
          label="Konsultasi via WhatsApp"
          size="md"
          fullWidth
        />
      </div>
    </div>
  );
}
