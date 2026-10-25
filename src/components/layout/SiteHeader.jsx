import React, { useState, useRef } from 'react';
import MobileNavigation from './MobileNavigation.jsx';
import WhatsAppButton from '../ui/WhatsAppButton.jsx';
import Icon from '../ui/Icon.jsx';
import { siteConfig } from '../../config/site.js';
import './SiteHeader.css';

/**
 * Bimbing.in — SiteHeader Component
 * Sticky navigation bar dengan wordmark, tautan anchor, CTA WhatsApp, dan menu mobile.
 * Sesuai PRD Bagian 8.3 (S01).
 */
export default function SiteHeader() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const menuButtonRef = useRef(null);

  // Filter links berdasarkan feature flag
  const navLinks = [...siteConfig.navLinks];
  if (siteConfig.features.showMentors) {
    navLinks.splice(3, 0, { label: 'Mentor', href: '#mentor' });
  }

  return (
    <header className="bi-header" role="banner">
      <div className="bi-container bi-header__inner">
        {/* Wordmark Logo */}
        <a
          href="#beranda"
          className="bi-header__logo"
          aria-label={`${siteConfig.name} — Beranda`}
        >
          <img
            src="/Logo.jpg"
            alt=""
            className="bi-header__logo-img"
            width="26"
            height="26"
          />
          <span>{siteConfig.name}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="bi-header__nav" aria-label="Navigasi Utama">
          <ul className="bi-header__nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="bi-header__nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="bi-header__actions">
          <WhatsAppButton placement="header" size="sm" label="Konsultasi" />
        </div>

        {/* Mobile Hamburger Button */}
        <button
          ref={menuButtonRef}
          type="button"
          className="bi-header__menu-btn"
          aria-expanded={isMobileOpen}
          aria-controls="mobile-navigation"
          aria-label={isMobileOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
          onClick={() => setIsMobileOpen((prev) => !prev)}
        >
          <Icon name={isMobileOpen ? 'close' : 'menu'} size={24} aria-hidden="true" />
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <MobileNavigation
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        links={navLinks}
        triggerRef={menuButtonRef}
      />
    </header>
  );
}
