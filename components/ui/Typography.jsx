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
      case 'pill': return 'span';
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
      // EXACT match to original .h2 CSS breakpoints and sizes
      // Original: ≥1400px: 8rem, 1024px-1399px: 8rem, 740px-1023px: 5rem, ≤739px: 50px
      'text-[50px]',                    // Default: ≤739px: 50px
      'min-[740px]:text-[5rem]',        // ≥740px: 5rem  
      'min-[1024px]:text-[8rem]',       // ≥1024px: 8rem
      'min-[1400px]:text-[8rem]',       // ≥1400px: 8rem (same as 1024px+)
      'leading-[1.2]',                  // Original line-height: 1.2
      'font-medium',
      'whitespace-pre-line'             // Original had white-space: pre-line
    ].join(' '),
    
    h3: [
      'text-3xl lg:text-2xl md:text-xl',
      'leading-tight',
      'font-medium'
    ].join(' '),
    
    h4: [
      'text-2xl', // Uses CSS var --onio-font-size-h4 (4.8rem = 48px) FIXED
      'leading-[1.166667]', // Original line-height: 1.1666666667
      'font-medium',
      'whitespace-pre-line' // Original had white-space: pre-line
    ].join(' '),
    
    h5: [
      'text-xl', // Uses CSS var --onio-font-size-h5 (35px→26px→24px responsive) FIXED
      'leading-[1.142857]', // Original line-height: 1.1428571429
      'font-medium',
      'whitespace-pre-line' // Original had white-space: pre-line
    ].join(' '),
    
    h6: [
      'text-lg', // Uses CSS var --onio-font-size-h6 (27px→23.625px responsive) FIXED
      'leading-[1.185185]', // Original line-height: 1.1851851852
      'font-medium',
      'whitespace-pre-line' // Original had white-space: pre-line
    ].join(' '),

    // Section badge (replaces heading--block) - EXACT MATCH TO ORIGINAL CSS
    'section-badge': [
      'inline-flex items-center justify-center text-center',
      'font-medium',
      'rounded-[5rem]',
      'text-primary',
      'border-primary border-solid',
      'mb-[4.4rem]',
      // NO w-full - should be auto-width like original d-inline-block
      // Original breakpoint logic exactly with matching line-heights for perfect centering:
      // ≥1400px: font-size: 2rem, border: 2px solid, height: 3.6rem, line-height: 3.6rem, padding: 0 2.6rem
      '2xl:text-[2rem] 2xl:border-2 2xl:h-[3.6rem] 2xl:leading-[3.6rem] 2xl:px-[2.6rem]',
      // ≤1399px (1200px-1399px): font-size: 1.75rem, border: 2px solid, height: 3.6rem, line-height: 3.6rem
      'xl:max-2xl:text-[1.75rem] xl:max-2xl:border-2 xl:max-2xl:h-[3.6rem] xl:max-2xl:leading-[3.6rem] xl:max-2xl:px-[2.6rem]',
      // ≥992px and ≤1199px: font-size: 1.75rem, border: 2px solid, height: 3.6rem, line-height: 3.6rem
      'lg:max-xl:text-[1.75rem] lg:max-xl:border-2 lg:max-xl:h-[3.6rem] lg:max-xl:leading-[3.6rem] lg:max-xl:px-[2.6rem]',
      // ≤991.98px: font-size: 1.5rem, border: 1.5px solid, height: 3.2rem, line-height: 3.2rem, padding: 0 24px
      'max-lg:text-[1.5rem] max-lg:border-[1.5px] max-lg:h-[3.2rem] max-lg:leading-[3.2rem] max-lg:px-[24px]'
    ].join(' '),
    
    // Pill variant (alias for section-badge)
    pill: [
      'inline-flex items-center justify-center',
      'leading-[1.2]',
      'font-medium',
      'rounded-[5rem]',
      'text-primary',
      'border-primary border-solid',
      'mb-[4.4rem]',
      'relative top-[-0.02em]',
      // NO w-full - should be auto-width like original d-inline-block
      // Original breakpoint logic exactly:
      // ≥1400px: font-size: 2rem, border: 2px solid, height: 3.6rem, padding: 0 2.6rem
      '2xl:text-[2rem] 2xl:border-2 2xl:h-[3.6rem] 2xl:px-[2.6rem]',
      // ≤1399px (1200px-1399px): font-size: 1.75rem, border: 2px solid
      'xl:max-2xl:text-[1.75rem] xl:max-2xl:border-2 xl:max-2xl:h-[3.6rem] xl:max-2xl:px-[2.6rem]',
      // ≥992px and ≤1199px: font-size: 1.75rem, border: 2px solid
      'lg:max-xl:text-[1.75rem] lg:max-xl:border-2 lg:max-xl:h-[3.6rem] lg:max-xl:px-[2.6rem]',
      // ≤991.98px: font-size: 1.5rem, border: 1.5px solid, height: 3.2rem, padding: 0 24px
      'max-lg:text-[1.5rem] max-lg:border-[1.5px] max-lg:h-[3.2rem] max-lg:px-[24px]'
    ].join(' '),

    // Small heading (replaces heading--small)
    small: [
      'text-2xl md:text-xl sm:text-lg',
      'leading-tight',
      'font-medium'
    ].join(' '),

    // Body text variants (replaces desc-- classes)
    'body-xl': [
      'text-body-xl', // Uses CSS vars: 35px→26px→24px responsive matching desc--large exactly
      'leading-[1.142857]', // Matches desc--large line-height exactly
      'font-medium'
    ].join(' '),
    
    'body-large': [
      'text-body-lg lg:text-lg', // 18px
      'leading-relaxed',
      'font-medium'
    ].join(' '),
    
    'body': [
      'text-body lg:text-base', // 16px→20px responsive
      'leading-relaxed',
      'font-medium'
    ].join(' '),
    
    'body-small': [
      'text-body-sm', // 14px
      'leading-normal',
      'font-medium'
    ].join(' '),
    
    'body-xs': [
      'text-body-xs', // 12px
      'leading-normal',
      'font-medium'
    ].join(' '),

    // Semantic variants for specific use cases
    'section-description': [
      'text-body-lg', // Matches section-desc usage
      'leading-relaxed',
      'font-medium'
    ].join(' '),
    
    'accordion-description': [
      'text-body-sm', // Matches accordian__item__link__desc
      'leading-normal',
      'font-medium'
    ].join(' '),
    
    'feature-description': [
      'text-body-sm', // Matches focusFeature__info__desc
      'leading-normal',
      'font-medium'
    ].join(' ')
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

  // Handle section-badge/pill variants (white, solid)
  const getVariantClasses = () => {
    let baseClasses = variantStyles[variant] || variantStyles.body;
    
    // Handle white and solid modifiers for section-badge and pill variants
    if ((variant === 'section-badge' || variant === 'pill') && className) {
      if (className.includes('white')) {
        baseClasses = baseClasses.replace('text-primary border-primary', 'text-white border-white');
      }
      if (className.includes('solid')) {
        baseClasses = baseClasses.replace('text-primary border-primary', 'text-primary border-white bg-white');
      }
    }
    
    return baseClasses;
  };

  // Build class list
  const classes = [
    getVariantClasses(),
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