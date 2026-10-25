import React, { useEffect, useRef } from 'react';
import WhatsAppButton from '../ui/WhatsAppButton.jsx';
import Icon from '../ui/Icon.jsx';
import './MobileNavigation.css';

/**
 * Bimbing.in — MobileNavigation Drawer Component
 * Aksesibel via keyboard, Esc menutup, trap fokus sederhana.
 */
export default function MobileNavigation({
  isOpen,
  onClose,
  links = [],
  triggerRef,
}) {
  const panelRef = useRef(null);
  const closeBtnRef = useRef(null);

  // Keyboard handler (Esc) & Focus Management
  useEffect(() => {
    if (!isOpen) return;

    // Focus close button saat panel dibuka
    closeBtnRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        triggerRef?.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, triggerRef]);

  const handleLinkClick = () => {
    onClose();
    triggerRef?.current?.focus();
  };

  return (
    <div
      id="mobile-navigation"
      className={`bi-mobile-nav ${isOpen ? 'bi-mobile-nav--open' : ''}`.trim()}
      role="dialog"
      aria-modal="true"
      aria-label="Menu navigasi mobile"
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div
        className="bi-mobile-nav__backdrop"
        onClick={() => {
          onClose();
          triggerRef?.current?.focus();
        }}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div className="bi-mobile-nav__panel" ref={panelRef}>
        <div>
          <div className="bi-mobile-nav__header">
            <span className="bi-header__logo" style={{ fontSize: 'var(--text-body)' }}>
              <span className="bi-header__logo-badge" />
              <span>Bimbing.in</span>
            </span>
            <button
              ref={closeBtnRef}
              type="button"
              className="bi-mobile-nav__close-btn"
              onClick={() => {
                onClose();
                triggerRef?.current?.focus();
              }}
              aria-label="Tutup menu navigasi"
            >
              <Icon name="close" size={22} aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Navigasi Utama Mobile">
            <ul className="bi-mobile-nav__list">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="bi-mobile-nav__link"
                    onClick={handleLinkClick}
                  >
                    <span>{link.label}</span>
                    <Icon name="arrow-right" size={16} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="bi-mobile-nav__footer">
          <WhatsAppButton
            placement="mobile_menu"
            fullWidth
            onClick={handleLinkClick}
          />
          <p className="bi-mobile-nav__note">
            Konsultasi awal via WhatsApp, tanpa kewajiban memesan.
          </p>
        </div>
      </div>
    </div>
  );
}
