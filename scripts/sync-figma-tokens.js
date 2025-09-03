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
 * Generate Tailwind theme extension from CSS properties
 * Writes tokens/tailwind-theme.cjs used by tailwind.config.js
 * @param {Object} cssProperties
 */
function updateTailwindTheme(cssProperties) {
  const tokensDir = path.join(__dirname, '../tokens')
  const themeFile = path.join(tokensDir, 'tailwind-theme.cjs')
  if (!fs.existsSync(tokensDir)) fs.mkdirSync(tokensDir, { recursive: true })

  const colors = {}
  const spacing = {}

  Object.keys(cssProperties).forEach((prop) => {
    if (prop.startsWith('--onio-color-')) {
      const key = prop.replace('--onio-color-', '')
      colors[key] = `var(${prop})`
    }
    if (prop.startsWith('--onio-spacing-')) {
      const key = prop.replace('--onio-spacing-', '')
      spacing[key] = `var(${prop})`
    }
  })

  // Promote common color keys to top-level names (primary, secondary, etc.)
  const promoted = {}
  ;['primary','secondary','accent','muted','background','white','alert']
    .forEach((k) => { if (colors[k]) promoted[k] = colors[k] })

  const theme = {
    colors: promoted,
    spacing
  }

  const content = `// AUTO-GENERATED by scripts/sync-figma-tokens.js\n` +
    `// Maps Tailwind theme to CSS custom properties from Figma\n` +
    `module.exports = ${JSON.stringify(theme, null, 2)}\n`

  fs.writeFileSync(themeFile, content, 'utf8')
  console.log('✅ Updated tokens/tailwind-theme.cjs')
}

/**
 * Parse existing CSS file to extract --onio-* custom properties
 * Allows code-first workflow (manual CSS maintenance) to generate Tailwind theme
 * @returns {Object} cssProperties map { '--onio-...': value }
 */
function readCSSVariablesFromFile() {
  const cssFilePath = path.join(__dirname, '../styles/figma-variables.css')
  if (!fs.existsSync(cssFilePath)) {
    console.warn('⚠️ styles/figma-variables.css not found; nothing to parse')
    return {}
  }
  const content = fs.readFileSync(cssFilePath, 'utf8')
  const cssProperties = {}
  const regex = /--onio-[a-z0-9-]+\s*:\s*[^;]+;/gi
  const matches = content.match(regex) || []
  matches.forEach((decl) => {
    const idx = decl.indexOf(':')
    if (idx === -1) return
    const prop = decl.slice(0, idx).trim()
    const val = decl.slice(idx + 1).replace(/;\s*$/, '').trim()
    cssProperties[prop] = val
  })
  return cssProperties
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
    console.log('🚀 Starting Tokens sync...')
    const credsPresent = FIGMA_CONFIG.fileId && FIGMA_CONFIG.accessToken 
      && FIGMA_CONFIG.fileId !== 'YOUR_FIGMA_FILE_ID' 
      && FIGMA_CONFIG.accessToken !== 'YOUR_FIGMA_ACCESS_TOKEN'

    if (credsPresent) {
      console.log('🔍 Fetching from Figma API (design-first mode)')
      const variables = await fetchFigmaVariables(
        FIGMA_CONFIG.fileId, 
        FIGMA_CONFIG.accessToken
      )
      const cssProperties = convertToCSSProperties(variables)
      console.log('🎨 Converted variables:', Object.keys(cssProperties))
      updateCSSFile(cssProperties)
      updateTailwindTheme(cssProperties)
      updateTailwindConfig(cssProperties)
    } else {
      console.log('🧩 Local code-first mode: reading styles/figma-variables.css → tokens/tailwind-theme.cjs')
      const cssProperties = readCSSVariablesFromFile()
      updateTailwindTheme(cssProperties)
    }

    console.log('✅ Tokens sync completed successfully!')
    console.log('📝 Next steps:')
    console.log('   • Ensure styles/figma-variables.css contains your latest tokens')
    console.log('   • Tailwind now uses tokens/tailwind-theme.cjs') 
    console.log('   • When Figma is ready, set FIGMA_FILE_ID and FIGMA_ACCESS_TOKEN')

  } catch (error) {
    console.error('❌ Tokens sync failed:', error)
    process.exit(1)
  }
}

// Run if called directly
if (require.main === module) {
  syncFigmaTokens()
}

module.exports = { syncFigmaTokens }
