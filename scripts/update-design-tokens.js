/**
 * Design Token Update Script
 * 
 * This script demonstrates how to update CSS custom properties from Figma tokens
 * In production, this would be integrated with Figma API or design token tools like:
 * - Style Dictionary
 * - Figma Tokens Plugin
 * - Design Token CLI tools
 */

const fs = require('fs');
const path = require('path');

// Example token data that would come from Figma API
const figmaTokens = {
  'onio-color-primary': '#222021',     // Updated from Figma
  'onio-color-secondary': '#D2FE24',   // Updated from Figma  
  'onio-color-accent': '#FF6231',      // Updated from Figma
  'onio-color-muted': '#AEADAD',       // Updated from Figma
  'onio-color-background': '#F5F5F5',  // Updated from Figma
  'onio-color-white': '#ffffff',       // Updated from Figma
  'onio-color-alert': '#EE4A26',       // Updated from Figma
};

function updateDesignTokens(tokens) {
  const globalStylesPath = path.join(__dirname, '../components/styles/GlobalStyles.js');
  
  try {
    let content = fs.readFileSync(globalStylesPath, 'utf8');
    
    // Update each token in the CSS custom properties
    Object.entries(tokens).forEach(([tokenName, tokenValue]) => {
      const regex = new RegExp(`--${tokenName}:\\s*#[0-9a-fA-F]{6};`, 'g');
      const replacement = `--${tokenName}: ${tokenValue};`;
      content = content.replace(regex, replacement);
    });
    
    fs.writeFileSync(globalStylesPath, content);
    console.log('✅ Design tokens updated successfully!');
    
    // Log the updates
    Object.entries(tokens).forEach(([tokenName, tokenValue]) => {
      console.log(`   --${tokenName}: ${tokenValue}`);
    });
    
  } catch (error) {
    console.error('❌ Error updating design tokens:', error);
  }
}

// Simulate a Figma token update
function simulateTokenUpdate() {
  console.log('🎨 Simulating Figma token update...\n');
  
  // Example: Change primary color to test the workflow
  const updatedTokens = {
    ...figmaTokens,
    'onio-color-primary': '#1a1a1a', // Slightly different black
  };
  
  updateDesignTokens(updatedTokens);
  
  console.log('\n🚀 Token update complete!');
  console.log('💡 Changes will be reflected in:');
  console.log('   - Tailwind classes (text-primary, bg-primary, etc.)');
  console.log('   - Styled-components using var(--onio-color-primary)');
  console.log('   - SVG strokes using var(--onio-color-primary)');
  console.log('   - All elements using the design token system');
}

// Run the simulation
if (require.main === module) {
  simulateTokenUpdate();
}

module.exports = { updateDesignTokens };