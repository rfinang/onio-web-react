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
      // Onio Brand Colors - from GlobalStyles.js
      colors: {
        // Primary brand colors
        'black': '#222021',
        'grey': '#AEADAD',
        'yellow': '#D2FE24',
        'orange': '#FF6231',
        'white': '#ffffff',
        'light-grey': '#F5F5F5',
        'alert': '#EE4A26',
        
        // Semantic colors for components
        'primary': '#222021', // black
        'secondary': '#D2FE24', // yellow
        'accent': '#FF6231', // orange
        'muted': '#AEADAD', // grey
        'background': '#F5F5F5', // light-grey
        'danger': '#EE4A26', // alert
        
        // Keep Figma integration for future
        'onio-primary': 'var(--onio-primary, #222021)',
        'onio-secondary': 'var(--onio-secondary, #D2FE24)',
        'onio-accent': 'var(--onio-accent, #FF6231)',
        'onio-neutral': 'var(--onio-neutral, #F5F5F5)',
        'onio-dark': 'var(--onio-dark, #222021)',
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
    'bg-onio-primary',
    'bg-onio-secondary',
    'text-onio-primary',
    'text-onio-secondary',
  ]
}