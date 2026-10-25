import React from 'react';
import './Button.css';

/**
 * Bimbing.in — Button Component
 * Mendukung tag <button> dan <a> dengan styling pil dan sticker border.
 */
export default function Button({
  as: Component = 'button',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  ...props
}) {
  const classes = [
    'bi-btn',
    `bi-btn--${variant}`,
    `bi-btn--${size}`,
    fullWidth ? 'bi-btn--full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
