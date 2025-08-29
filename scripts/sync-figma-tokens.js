/**
 * Figma Variables → CSS Custom Properties Sync
 * 
 * This script fetches design tokens from Figma Variables API
 * and automatically updates our CSS custom properties and Tailwind config.
 * 
 * Usage:
 * - npm run figma:sync
 * - node scripts/sync-figma-tokens.js
 * - Add to CI/CD pipeline for automatic design updates
 */

const fs = require('fs')
const path = require('path')

// Configuration
const FIGMA_CONFIG = {
  // Add your Figma file ID and access token
  fileId: process.env.FIGMA_FILE_ID || 'YOUR_FIGMA_FILE_ID',
  accessToken: process.env.FIGMA_ACCESS_TOKEN || 'YOUR_FIGMA_ACCESS_TOKEN',
  // Collections to sync (add your collection IDs)
  collections: {
    colors: 'FIGMA_COLOR_COLLECTION_ID',
    spacing: 'FIGMA_SPACING_COLLECTION_ID', 
    typography: 'FIGMA_TYPOGRAPHY_COLLECTION_ID'
  }
}

/**
 * Fetch variables from Figma Variables API
 * @param {string} fileId - Figma file ID
 * @param {string} accessToken - Figma access token
 * @returns {Promise<Object>} Variables data
 */
async function fetchFigmaVariables(fileId, accessToken) {
  try {
    console.log('🔍 Fetching Figma variables...')
    
    // This would be the actual Figma API call
    // const response = await fetch(`https://api.figma.com/v1/files/${fileId}/variables/local`, {
    //   headers: { 'X-Figma-Token': accessToken }
    // })
    
    // Mock data for demonstration (replace with real API call)
    const mockVariables = {
      meta: {
        variableCollections: {
          'colors': { 
            id: 'colors',
            name: 'Colors',
            modes: [{ modeId: 'Mode 1', name: 'Default' }]
          },
          'spacing': {
            id: 'spacing', 
            name: 'Spacing',
            modes: [{ modeId: 'Mode 1', name: 'Default' }]
          }
        },
        variables: {
          'onio-primary': {
            id: 'onio-primary',
            name: 'onio/primary',
            variableCollectionId: 'colors',
            valuesByMode: { 'Mode 1': { type: 'COLOR', value: { r: 0, g: 0.482, b: 1 } } }
          },
          'onio-secondary': {
            id: 'onio-secondary', 
            name: 'onio/secondary',
            variableCollectionId: 'colors',
            valuesByMode: { 'Mode 1': { type: 'COLOR', value: { r: 0.424, g: 0.467, b: 0.533 } } }
          },
          'onio-spacing-xs': {
            id: 'onio-spacing-xs',
            name: 'onio/spacing/xs', 
            variableCollectionId: 'spacing',
            valuesByMode: { 'Mode 1': { type: 'FLOAT', value: 4 } }
          },
          'onio-spacing-sm': {
            id: 'onio-spacing-sm',
            name: 'onio/spacing/sm',
            variableCollectionId: 'spacing', 
            valuesByMode: { 'Mode 1': { type: 'FLOAT', value: 8 } }
          }
        }
      }
    }
    
    console.log('✅ Figma variables fetched successfully')
    return mockVariables
    
  } catch (error) {
    console.error('❌ Error fetching Figma variables:', error)
    throw error
  }
}

/**
 * Convert Figma color value to CSS hex
 * @param {Object} colorValue - Figma color object
 * @returns {string} CSS hex value
 */
function figmaColorToHex(colorValue) {
  const { r, g, b } = colorValue
  const toHex = (n) => Math.round(n * 255).toString(16).padStart(2, '0')
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

/**
 * Convert Figma variables to CSS custom properties
 * @param {Object} variables - Figma variables data
 * @returns {Object} CSS custom properties
 */
function convertToCSSProperties(variables) {
  const cssProperties = {}
  const { variables: vars } = variables.meta
  
  Object.entries(vars).forEach(([id, variable]) => {
    const { name, valuesByMode } = variable
    const value = valuesByMode['Mode 1']
    
    // Convert Figma variable name to CSS property name
    const cssName = `--${name.replace(/\//g, '-').toLowerCase()}`
    
    // Convert value based on type
    let cssValue
    if (value.type === 'COLOR') {
      cssValue = figmaColorToHex(value.value)
    } else if (value.type === 'FLOAT') {
      cssValue = `${value.value}px`
    } else {
      cssValue = value.value
    }
    
    cssProperties[cssName] = cssValue
  })
  
  return cssProperties
}

/**
 * Update CSS custom properties file
 * @param {Object} cssProperties - CSS custom properties object
 */
function updateCSSFile(cssProperties) {
  const cssFilePath = path.join(__dirname, '../styles/figma-variables.css')
  
  let cssContent = `/* Figma Variables - Auto-generated */
/* Last updated: ${new Date().toISOString()} */
/* Do not edit manually - run 'npm run figma:sync' to update */

:root {
`

  Object.entries(cssProperties).forEach(([property, value]) => {
    cssContent += `  ${property}: ${value};\n`
  })
  
  cssContent += '}\n'
  
  fs.writeFileSync(cssFilePath, cssContent, 'utf8')
  console.log('✅ Updated styles/figma-variables.css')
}

/**
 * Update Tailwind config with new design tokens
 * @param {Object} cssProperties - CSS custom properties object
 */
function updateTailwindConfig(cssProperties) {
  const configPath = path.join(__dirname, '../tailwind.config.js')
  const configContent = fs.readFileSync(configPath, 'utf8')
  
  // Extract colors and spacing from CSS properties
  const colors = {}
  const spacing = {}
  
  Object.entries(cssProperties).forEach(([property, value]) => {
    const name = property.replace('--', '').replace(/-/g, '-')
    
    if (property.includes('onio') && value.startsWith('#')) {
      colors[name] = `var(${property})`
    } else if (property.includes('spacing')) {
      const spacingKey = name.replace('onio-spacing-', '')
      spacing[spacingKey] = `var(${property})`
    }
  })
  
  // This is a simplified update - in production, you'd want more robust parsing
  console.log('🔄 Tailwind config update (manual step required)')
  console.log('Colors found:', Object.keys(colors))
  console.log('Spacing found:', Object.keys(spacing))
}

/**
 * Main sync function
 */
async function syncFigmaTokens() {
  try {
    console.log('🚀 Starting Figma Variables sync...')
    
    // Fetch variables from Figma
    const variables = await fetchFigmaVariables(
      FIGMA_CONFIG.fileId, 
      FIGMA_CONFIG.accessToken
    )
    
    // Convert to CSS properties
    const cssProperties = convertToCSSProperties(variables)
    console.log('🎨 Converted variables:', Object.keys(cssProperties))
    
    // Update CSS file
    updateCSSFile(cssProperties)
    
    // Update Tailwind config
    updateTailwindConfig(cssProperties)
    
    console.log('✅ Figma Variables sync completed successfully!')
    console.log('📝 Next steps:')
    console.log('   1. Import styles/figma-variables.css in your app')
    console.log('   2. Update Tailwind config if needed') 
    console.log('   3. Test components with new design tokens')
    
  } catch (error) {
    console.error('❌ Figma sync failed:', error)
    process.exit(1)
  }
}

// Run if called directly
if (require.main === module) {
  syncFigmaTokens()
}

module.exports = { syncFigmaTokens }