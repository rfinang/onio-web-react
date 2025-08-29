/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}', // For future App Router migration
  ],
  theme: {
    extend: {
      // Figma Variables Integration - CSS Custom Properties
      colors: {
        // These will sync with Figma Variables API
        'onio-primary': 'var(--onio-primary, #007bff)',
        'onio-secondary': 'var(--onio-secondary, #6c757d)',
        'onio-accent': 'var(--onio-accent, #28a745)',
        'onio-neutral': 'var(--onio-neutral, #f8f9fa)',
        'onio-dark': 'var(--onio-dark, #343a40)',
      },
      spacing: {
        // Custom spacing scale from Figma
        '18': '4.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      fontFamily: {
        'onio': ['Inter', 'system-ui', 'sans-serif'],
        'onio-display': ['Inter', 'Georgia', 'serif'],
      },
      fontSize: {
        // Design system typography scale
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'onio-light': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'onio-medium': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'onio-heavy': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  // Safelist classes that might be used dynamically
  safelist: [
    'bg-onio-primary',
    'bg-onio-secondary',
    'text-onio-primary',
    'text-onio-secondary',
  ]
}