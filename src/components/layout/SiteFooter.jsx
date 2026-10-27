import React from 'react';
import WhatsAppButton from '../ui/WhatsAppButton.jsx';
import { siteConfig } from '../../config/site.js';
import './SiteFooter.css';

/**
 * Bimbing.in — SiteFooter Component
 * Footer semantik dengan disclaimer integritas akademik, informasi kontak, dan navigasi.
 * Sesuai PRD Bagian 8.3 (S09).
 */
export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Beranda', href: '#beranda' },
    ...siteConfig.navLinks,
  ];

  return (
    <footer className="bi-footer" role="contentinfo">
      <div className="bi-container">
        <div className="bi-footer__grid">
          {/* Kolom 1: Identitas & Kebijakan Integritas */}
          <div className="bi-footer__brand">
            <a
              href="#beranda"
              className="bi-footer__logo"
              aria-label={`${siteConfig.name} — Kembali ke atas`}
            >
              <img
                src="/Logo.png"
                alt=""
                className="bi-header__logo-img"
                width="22"
                height="22"
              />
              <span>{siteConfig.name}</span>
            </a>
            <p className="bi-footer__tagline">{siteConfig.tagline}</p>
            <p className="bi-footer__disclaimer">
              Bimbing.in adalah layanan pendampingan dan bimbingan belajar bertahap.
              Kami membantu Anda memahami konsep dan menyelesaikan masalah teknis sendiri,
              bukan jasa joki atau pengerjaan tugas akademik.
            </p>
          </div>

          {/* Kolom 2: Tautan Halaman */}
          <div>
            <h3 className="bi-footer__heading">Navigasi</h3>
            <ul className="bi-footer__links">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="bi-footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Kontak & Operasional */}
          <div>
            <h3 className="bi-footer__heading">Konsultasi</h3>
            <div className="bi-footer__info-item">
              <strong>Jam Respons Admin:</strong>
              <span>{siteConfig.operationalHours}</span>
            </div>
            <div className="bi-footer__info-item">
              <span>{siteConfig.responseNote}</span>
            </div>
            {siteConfig.whatsapp.isConfigured && siteConfig.whatsapp.displayNumber && (
              <div className="bi-footer__info-item">
                <strong>Nomor WhatsApp:</strong>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bi-footer__link"
                  style={{ display: 'inline', padding: 0 }}
                >
                  {siteConfig.whatsapp.displayNumber}
                </a>
              </div>
            )}
            <div style={{ marginTop: 'var(--spacing-16)' }}>
              <WhatsAppButton placement="footer" size="sm" />
            </div>
          </div>
        </div>

        {/* Baris Bawah: Hak Cipta */}
        <div className="bi-footer__bottom">
          <p>© {currentYear} {siteConfig.name}. Seluruh hak cipta dilindungi.</p>
          <p>Dibuat untuk mendampingi perjalanan belajar mahasiswa &amp; pelajar.</p>
        </div>
      </div>
    </footer>
  );
}
