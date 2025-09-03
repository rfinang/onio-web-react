#!/usr/bin/env node

/**
 * Color System Migration Validation Script
 * 
 * Validates that:
 * 1. Design tokens are used instead of hardcoded colors
 * 2. Color accuracy matches original hex values
 * 3. No legacy color classes remain in components
 * 4. UI components use semantic color props
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Design token mapping from tailwind.config.js
const DESIGN_TOKENS = {
  'primary': '#222021',
  'secondary': '#D2FE24', 
  'accent': '#FF6231',
  'muted': '#AEADAD',
  'background': '#F5F5F5',
  'white': '#FFFFFF',
  'alert': '#EE4A26'
};

// Legacy color classes that should be replaced
const LEGACY_COLOR_CLASSES = [
  'bg-red', 'bg-wild', 'bg-dark',
  'text-center', // Not a color but often confused
  'bg-\\[#[0-9A-Fa-f]{6}\\]', // Arbitrary color values (some exceptions allowed)
  'text-\\[#[0-9A-Fa-f]{6}\\]'
];

console.log('🎨 Starting Color System Migration Validation...\n');

/**
 * Test 1: Check for legacy color classes in components
 */
function testLegacyColorClasses() {
  console.log('🔍 Testing for legacy color classes...');
  
  const componentFiles = glob.sync('components/**/*.{js,jsx}', { 
    ignore: ['components/styles/**', 'node_modules/**'] 
  });
  
  let violations = [];
  
  componentFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check for legacy color classes
    const legacyMatches = content.match(/className.*["'][^"']*\b(bg-red|bg-wild|bg-dark)\b[^"']*["']/g);
    if (legacyMatches) {
      violations.push({
        file,
        issue: 'Legacy color classes found',
        matches: legacyMatches
      });
    }
  });
  
  if (violations.length === 0) {
    console.log('✅ No legacy color classes found in components');
    return true;
  } else {
    console.log('❌ Legacy color classes found:');
    violations.forEach(v => {
      console.log(`   ${v.file}: ${v.matches.join(', ')}`);
    });
    return false;
  }
}

/**
 * Test 2: Verify design token usage in UI components
 */
function testDesignTokenUsage() {
  console.log('\n🔍 Testing design token usage in UI components...');
  
  const uiFiles = glob.sync('components/ui/*.{js,jsx}');
  let tokenCount = 0;
  let hardcodedCount = 0;
  
  uiFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    // Count design token usage
    const tokenMatches = content.match(/\b(bg-|text-|border-)(primary|secondary|accent|muted|background|white|alert)\b/g);
    if (tokenMatches) {
      tokenCount += tokenMatches.length;
    }
    
    // Count hardcoded colors (excluding SVG data URLs and stroke attributes)
    const hardcodedMatches = content.match(/#[0-9A-Fa-f]{6}(?![^<]*<\/svg>)/g);
    if (hardcodedMatches) {
      // Filter out acceptable hardcoded colors (SVG strokes, data URLs)
      const problematicColors = hardcodedMatches.filter(color => {
        const context = content.substring(
          Math.max(0, content.indexOf(color) - 50),
          content.indexOf(color) + 50
        );
        return !context.includes('stroke=') && !context.includes('data:image/svg');
      });
      hardcodedCount += problematicColors.length;
    }
  });
  
  console.log(`   Design token usage: ${tokenCount} instances`);
  console.log(`   Hardcoded colors: ${hardcodedCount} instances`);
  
  if (tokenCount > 0 && hardcodedCount === 0) {
    console.log('✅ UI components properly use design tokens');
    return true;
  } else if (hardcodedCount > 0) {
    console.log('❌ UI components still contain hardcoded colors');
    return false;
  } else {
    console.log('⚠️  No color usage detected in UI components');
    return true;
  }
}

/**
 * Test 3: Verify color accuracy against original design tokens
 */
function testColorAccuracy() {
  console.log('\n🔍 Testing color accuracy against design tokens...');
  
  const tailwindConfig = fs.readFileSync('tailwind.config.js', 'utf8');
  let accurate = true;
  
  Object.entries(DESIGN_TOKENS).forEach(([token, expectedHex]) => {
    const regex = new RegExp(`'${token}':\\s*['"]([^'"]+)['"]`);
    const match = tailwindConfig.match(regex);
    
    if (match && match[1] === expectedHex) {
      console.log(`   ✅ ${token}: ${match[1]} (correct)`);
    } else {
      console.log(`   ❌ ${token}: ${match ? match[1] : 'NOT FOUND'} (expected ${expectedHex})`);
      accurate = false;
    }
  });
  
  return accurate;
}

/**
 * Test 4: Check for consistent color usage patterns
 */
function testColorConsistency() {
  console.log('\n🔍 Testing color usage consistency...');
  
  const componentFiles = glob.sync('components/**/*.{js,jsx}', {
    ignore: ['components/styles/**', 'node_modules/**']
  });
  
  let inconsistencies = [];
  
  componentFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check for mixed color usage (hardcoded + tokens in same file)
    const hasTokens = /\b(bg-|text-|border-)(primary|secondary|accent|muted|background|white|alert)\b/.test(content);
    const hasHardcoded = /#[0-9A-Fa-f]{6}/.test(content);
    
    if (hasTokens && hasHardcoded) {
      // Check if hardcoded colors are acceptable (SVG, data URLs)
      const hardcodedMatches = content.match(/#[0-9A-Fa-f]{6}/g) || [];
      const problematic = hardcodedMatches.filter(color => {
        const context = content.substring(
          Math.max(0, content.indexOf(color) - 50),
          content.indexOf(color) + 50
        );
        return !context.includes('stroke=') && !context.includes('data:image/svg') && !context.includes('components/styles/');
      });
      
      if (problematic.length > 0) {
        inconsistencies.push({
          file,
          issue: 'Mixed color usage (tokens + hardcoded)',
          problematicColors: problematic
        });
      }
    }
  });
  
  if (inconsistencies.length === 0) {
    console.log('✅ Color usage is consistent across components');
    return true;
  } else {
    console.log('❌ Color usage inconsistencies found:');
    inconsistencies.forEach(i => {
      console.log(`   ${i.file}: ${i.problematicColors.join(', ')}`);
    });
    return false;
  }
}

/**
 * Run all color validation tests
 */
function runColorValidation() {
  const results = [
    testLegacyColorClasses(),
    testDesignTokenUsage(), 
    testColorAccuracy(),
    testColorConsistency()
  ];
  
  const passed = results.every(result => result);
  
  console.log('\n' + '='.repeat(50));
  if (passed) {
    console.log('🎉 ALL COLOR VALIDATIONS PASSED! Migration is accurate.');
  } else {
    console.log('❌ Some color validations failed. Please review and fix the issues above.');
    process.exit(1);
  }
}

// Run validation if script is executed directly
if (require.main === module) {
  runColorValidation();
}

module.exports = { runColorValidation };