import React from 'react'

/**
 * Modern Button Component - Figma Design System Ready
 * 
 * This component demonstrates:
 * - Tailwind CSS integration with existing styled-components
 * - Figma Variables through CSS custom properties
 * - Design system consistency
 * - Backward compatibility
 */

const Button = ({ 
  variant = 'primary',
  size = 'medium', 
  children,
  className = '',
  disabled = false,
  ...props 
}) => {
  // Base classes that work with our Figma design tokens
  const baseClasses = `
    inline-flex items-center justify-center font-medium rounded-md 
    transition-all duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `.trim()

  // Variant styles using our Figma Variables
  const variantClasses = {
    primary: `
      bg-onio-primary text-white
      hover:opacity-90
      focus:ring-onio-primary
    `.trim(),
    secondary: `
      bg-onio-secondary text-white  
      hover:opacity-90
      focus:ring-onio-secondary
    `.trim(),
    outline: `
      border-2 border-onio-primary text-onio-primary bg-transparent
      hover:bg-onio-primary hover:text-white
      focus:ring-onio-primary
    `.trim(),
    ghost: `
      text-onio-dark bg-transparent
      hover:bg-onio-neutral
      focus:ring-gray-300
    `.trim()
  }

  // Size variations  
  const sizeClasses = {
    small: 'px-3 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  }

  const combinedClasses = `
    ${baseClasses} 
    ${variantClasses[variant] || variantClasses.primary} 
    ${sizeClasses[size] || sizeClasses.medium}
    ${className}
  `.replace(/\s+/g, ' ').trim()

  return (
    <button
      className={combinedClasses}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button

// Usage Examples:
// <Button variant="primary" size="medium">Primary Button</Button>
// <Button variant="outline" size="large">Outline Button</Button>
// <Button variant="ghost" size="small">Ghost Button</Button>