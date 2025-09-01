/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}', // For future App Router migration
  ],
  corePlugins: {
    // Disable Tailwind's container to avoid conflicts with Bootstrap
    container: false,
  },
  theme: {
    extend: {
      // Design Token System - CSS Custom Properties from Figma
      colors: {
        // Main design tokens (connected to Figma)
        'primary': 'var(--onio-color-primary)',
        'secondary': 'var(--onio-color-secondary)', 
        'accent': 'var(--onio-color-accent)',
        'muted': 'var(--onio-color-muted)',
        'background': 'var(--onio-color-background)',
        'white': 'var(--onio-color-white)',
        'alert': 'var(--onio-color-alert)',
        
        // Legacy aliases for backward compatibility (remove after full migration)
        'black': 'var(--onio-color-primary)',
        'grey': 'var(--onio-color-muted)', 
        'yellow': 'var(--onio-color-secondary)',
        'orange': 'var(--onio-color-accent)',
        'light-grey': 'var(--onio-color-background)',
        'danger': 'var(--onio-color-alert)',
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
        // Note: Base font is 62.5% so 1rem = 10px
        'xs': ['1.2rem', { lineHeight: '1.6rem' }],      // 12px
        'sm': ['1.4rem', { lineHeight: '2rem' }],        // 14px
        'base': ['1.6rem', { lineHeight: '2.4rem' }],    // 16px (default body text)
        'lg': ['1.8rem', { lineHeight: '2.8rem' }],      // 18px
        'xl': ['2rem', { lineHeight: '2.3rem' }],        // 20px (button text)
        '2xl': ['2.4rem', { lineHeight: '3.2rem' }],     // 24px
        '3xl': ['3rem', { lineHeight: '3.6rem' }],       // 30px
        '4xl': ['3.6rem', { lineHeight: '4rem' }],       // 36px
        '5xl': ['4.8rem', { lineHeight: '1' }],          // 48px
        '6xl': ['6rem', { lineHeight: '1' }],            // 60px
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
    'bg-primary',
    'bg-secondary', 
    'bg-accent',
    'bg-muted',
    'bg-background',
    'text-primary',
    'text-secondary',
    'text-accent', 
    'text-muted',
    'text-white',
  ]
}