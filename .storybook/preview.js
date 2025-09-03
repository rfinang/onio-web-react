// Commented out CSS imports temporarily to test
// import '../styles/figma-variables.css'
// import '../styles/tailwind.css'

export const parameters = {
  backgrounds: {
    default: 'white',
    values: [
      { name: 'light', value: '#F5F5F5' },
      { name: 'dark', value: '#333333' },
      { name: 'white', value: '#ffffff' },
    ],
  },
  controls: { 
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// Minimal decorator
export const decorators = [
  (Story) => (
    <div style={{ padding: '20px' }}>
      <Story />
    </div>
  ),
]