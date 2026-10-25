import React from 'react';
import WhatsAppButton from '../ui/WhatsAppButton.jsx';
import Button from '../ui/Button.jsx';
import Icon from '../ui/Icon.jsx';
import { siteConfig } from '../../config/site.js';
import './HeroSection.css';

/**
 * Bimbing.in — HeroSection (S02)
 * Tipografi terpusat (centered) tanpa visual gambar/ilustrasi samping.
 */
export default function HeroSection() {
  return (
    <section id="beranda" className="bi-hero">
      <div className="bi-container">
        <div className="bi-hero__inner">
          <div className="bi-hero__eyebrow">
            <span>{siteConfig.tagline}</span>
          </div>

          <h1 className="bi-hero__title">
            Bimbingan akademik yang jelas, langkah demi langkah.
          </h1>

          <p className="bi-hero__subtitle">
            Ceritakan kebutuhanmu lewat WhatsApp, kami bantu kamu paham dan menyelesaikannya sendiri.
          </p>

          <div className="bi-hero__cta-group">
            <WhatsAppButton placement="hero" size="lg" />
            <Button as="a" href="#layanan" variant="ghost" size="lg">
              <span>Lihat Layanan</span>
              <Icon name="arrow-right" size={18} aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
