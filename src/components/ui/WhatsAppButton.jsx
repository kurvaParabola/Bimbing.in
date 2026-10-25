import React from 'react';
import Button from './Button.jsx';
import Icon from './Icon.jsx';
import { siteConfig } from '../../config/site.js';
import { getWhatsAppUrl } from '../../utils/whatsapp.js';
import { trackWhatsAppClick } from '../../utils/analytics.js';

/**
 * Bimbing.in — WhatsAppButton Component
 * Mengarahkan pengunjung ke chat WhatsApp dengan pesan terstruktur.
 * Sesuai PRD Bagian 12 dan Aturan Wajib.
 */
export default function WhatsAppButton({
  category,
  placement = 'general',
  label,
  variant = 'whatsapp',
  size = 'md',
  fullWidth = false,
  className = '',
  onClick,
}) {
  const isConfigured = siteConfig.whatsapp.isConfigured;
  const categoryName = typeof category === 'object' ? category?.name : category;
  const categoryId = typeof category === 'object' ? category?.id : category;

  const url = isConfigured ? getWhatsAppUrl({ categoryName }) : '';

  const handleClick = (e) => {
    if (!isConfigured) {
      e.preventDefault();
      // eslint-disable-next-line no-alert
      alert(
        'Nomor WhatsApp admin belum dikonfigurasi pada variabel lingkungan VITE_WA_NUMBER.'
      );
      return;
    }

    trackWhatsAppClick({
      placement,
      category: categoryId || 'general',
    });

    if (onClick) {
      onClick(e);
    }
  };

  const defaultLabel = categoryName
    ? `Konsultasi ${categoryName}`
    : 'Konsultasi via WhatsApp';

  const buttonLabel = label || defaultLabel;

  // Jika nomor belum dikonfigurasi, render tombol non-aktif yang aman
  if (!isConfigured) {
    return (
      <Button
        as="button"
        type="button"
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        className={className}
        aria-disabled="true"
        title="Nomor WhatsApp admin belum diatur"
        onClick={handleClick}
      >
        <Icon name="whatsapp" aria-hidden="true" size={size === 'sm' ? 16 : 20} />
        <span>{buttonLabel}</span>
      </Button>
    );
  }

  return (
    <Button
      as="a"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      className={className}
      onClick={handleClick}
    >
      <Icon name="whatsapp" aria-hidden="true" size={size === 'sm' ? 16 : 20} />
      <span>{buttonLabel}</span>
    </Button>
  );
}
