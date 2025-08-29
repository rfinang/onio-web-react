import React from 'react'

/**
 * Modern Button Component - TypeScript + Figma Design System Ready
 * 
 * This component demonstrates:
 * - TypeScript integration with React + Next.js  
 * - Tailwind CSS with type-safe props
 * - Figma Variables through CSS custom properties
 * - Strict typing for design system consistency
 */

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'small' | 'medium' | 'large'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button visual variant */
  variant?: ButtonVariant
  /** Button size */
  size?: ButtonSize
  /** Button content */
  children: React.ReactNode
  /** Additional CSS classes */
  className?: string
  /** Disabled state */
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ 
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

  // Variant styles using our Figma Variables - type-safe
  const variantClasses: Record<ButtonVariant, string> = {
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

  // Size variations - type-safe
  const sizeClasses: Record<ButtonSize, string> = {
    small: 'px-3 py-2 text-sm',
    medium: 'px-6 py-3 text-base', 
    large: 'px-8 py-4 text-lg'
  }

  const combinedClasses = `
    ${baseClasses} 
    ${variantClasses[variant]} 
    ${sizeClasses[size]}
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

// TypeScript ensures type safety for all props:
// ✅ <Button variant="primary" size="medium">Valid</Button>
// ❌ <Button variant="invalid" size="wrong">Type Error</Button>