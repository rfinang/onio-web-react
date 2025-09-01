import React from 'react';

/**
 * Typography Component - Onio Design System
 * 
 * Replaces legacy heading classes with Tailwind-based typography system
 * Maintains responsive scaling and animation compatibility
 * 
 * Usage:
 *   <Typography variant="h1">Main Title</Typography>
 *   <Typography variant="hero">Hero Text</Typography>
 *   <Typography variant="section-badge">Badge Text</Typography>
 */

const Typography = ({ 
  variant = 'body', 
  as: Component, 
  className = '',
  children,
  color,
  animation = false,
  ...props 
}) => {
  // Determine HTML element based on variant or 'as' prop
  const getComponent = () => {
    if (Component) return Component;
    
    switch (variant) {
      case 'hero': return 'h1';
      case 'h1': return 'h1';
      case 'h2': return 'h2';
      case 'h3': return 'h3';
      case 'h4': return 'h4';
      case 'h5': return 'h5';
      case 'h6': return 'h6';
      case 'section-badge': return 'h4';
      default: return 'p';
    }
  };

  // Typography variant styles matching current design
  const variantStyles = {
    // Hero text (replaces heading--supper)
    hero: [
      // Base: Large responsive text with tight line height
      'text-6xl xl:text-[16.791vw] lg:text-[17.578vw] md:text-[16.927vw] sm:text-[9rem]',
      'leading-[0.47] sm:leading-[0.96]',
      'font-medium'
    ].join(' '),

    // Standard headings (replaces h1-h6 Bootstrap classes)
    h1: [
      'text-5xl lg:text-4xl md:text-3xl', 
      'leading-tight',
      'font-medium'
    ].join(' '),
    
    h2: [
      'text-4xl lg:text-3xl md:text-2xl',
      'leading-tight', 
      'font-medium'
    ].join(' '),
    
    h3: [
      'text-3xl lg:text-2xl md:text-xl',
      'leading-tight',
      'font-medium'
    ].join(' '),
    
    h4: [
      'text-2xl lg:text-xl md:text-lg',
      'leading-snug',
      'font-medium'
    ].join(' '),
    
    h5: [
      'text-xl lg:text-lg md:text-base',
      'leading-snug',
      'font-medium'
    ].join(' '),
    
    h6: [
      'text-lg lg:text-base md:text-sm',
      'leading-normal',
      'font-medium'
    ].join(' '),

    // Section badge (replaces heading--block)
    'section-badge': [
      'inline-block px-8 py-3 mb-7',
      'text-xl lg:text-lg md:text-base',
      'leading-tight',
      'font-medium',
      'rounded-full',
      'border-2 border-primary',
      'text-primary'
    ].join(' '),

    // Small heading (replaces heading--small)
    small: [
      'text-2xl md:text-xl sm:text-lg',
      'leading-tight',
      'font-medium'
    ].join(' '),

    // Body text variants
    'body-large': 'text-base leading-relaxed',
    'body': 'text-sm leading-normal',
    'body-small': 'text-xs leading-normal'
  };

  // Color classes (use existing design tokens)
  const colorStyles = {
    primary: 'text-primary',
    secondary: 'text-secondary', 
    accent: 'text-accent',
    muted: 'text-muted',
    white: 'text-white'
  };

  // Animation classes (preserve existing animation system)
  const animationStyles = {
    chars: 'js-animation--chars',
    lines: 'js-animation--lines', 
    fade: 'js-animation--fade'
  };

  // Build class list
  const classes = [
    variantStyles[variant] || variantStyles.body,
    color && colorStyles[color],
    animation && animationStyles[animation],
    className
  ].filter(Boolean).join(' ');

  const TagName = getComponent();

  return (
    <TagName 
      className={classes}
      {...props}
    >
      {children}
    </TagName>
  );
};

export default Typography;