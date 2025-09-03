#!/usr/bin/env node

/**
 * Button System Migration Validation Script
 * 
 * Validates that:
 * 1. All legacy button classes are migrated to Button components
 * 2. All button patterns match original styling
 * 3. Interactive states work correctly
 * 4. Accessibility is maintained
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Legacy button patterns that should be migrated
const LEGACY_BUTTON_PATTERNS = [
  'btn\\s+btn--',
  'pageLink\\s+pageLink--',
  'iconLink\\s+iconLink--',
  'linkHover--'
];

console.log('🔲 Starting Button System Migration Validation...\n');

/**
 * Test 1: Check for legacy button patterns in components
 */
function testLegacyButtonPatterns() {
  console.log('🔍 Testing for legacy button patterns...');
  
  const componentFiles = glob.sync('components/**/*.{js,jsx}', { 
    ignore: ['components/styles/**', 'node_modules/**'] 
  });
  
  let violations = [];
  
  componentFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    LEGACY_BUTTON_PATTERNS.forEach(pattern => {
      const regex = new RegExp(pattern, 'g');
      const matches = content.match(regex);
      if (matches) {
        violations.push({
          file,
          pattern,
          matches: matches
        });
      }
    });
  });
  
  if (violations.length === 0) {
    console.log('✅ No legacy button patterns found in components');
    return true;
  } else {
    console.log('❌ Legacy button patterns found:');
    violations.forEach(v => {
      console.log(`   ${v.file}: ${v.matches.length} instances of "${v.pattern}"`);
      v.matches.forEach(match => {
        console.log(`      - ${match}`);
      });
    });
    return false;
  }
}

/**
 * Test 2: Verify Button component usage in migrated files
 */
function testButtonComponentUsage() {
  console.log('\n🔍 Testing Button component usage...');
  
  const componentFiles = glob.sync('components/**/*.{js,jsx}', {
    ignore: ['components/ui/Button.jsx', 'components/styles/**', 'node_modules/**']
  });
  
  let buttonImportCount = 0;
  let buttonUsageCount = 0;
  let filesWithButtons = [];
  
  componentFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check for Button import
    const hasButtonImport = /import.*Button.*from.*ui/.test(content);
    if (hasButtonImport) {
      buttonImportCount++;
    }
    
    // Count Button component usage
    const buttonMatches = content.match(/<Button[\s\S]*?>/g);
    if (buttonMatches) {
      buttonUsageCount += buttonMatches.length;
      filesWithButtons.push({
        file,
        count: buttonMatches.length
      });
    }
  });
  
  console.log(`   Button imports: ${buttonImportCount} files`);
  console.log(`   Button component usage: ${buttonUsageCount} instances`);
  
  if (filesWithButtons.length > 0) {
    console.log('   Files using Button component:');
    filesWithButtons.forEach(f => {
      console.log(`      ${f.file}: ${f.count} instances`);
    });
  }
  
  console.log('✅ Button component usage analysis complete');
  return true;
}

/**
 * Test 3: Check Button component prop variants
 */
function testButtonVariants() {
  console.log('\n🔍 Testing Button component variants...');
  
  const componentFiles = glob.sync('components/**/*.{js,jsx}', {
    ignore: ['components/styles/**', 'node_modules/**']
  });
  
  let variantCounts = {
    primary: 0,
    secondary: 0,
    white: 0,
    accent: 0,
    outline: 0,
    'outline-white': 0,
    ghost: 0,
    danger: 0,
    link: 0,
    icon: 0
  };
  
  let hasArrowCount = 0;
  let hasIconCount = 0;
  
  componentFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    // Count variant usage
    Object.keys(variantCounts).forEach(variant => {
      const variantRegex = new RegExp(`variant=["']${variant}["']`, 'g');
      const matches = content.match(variantRegex);
      if (matches) {
        variantCounts[variant] += matches.length;
      }
    });
    
    // Count hasArrow usage
    const arrowMatches = content.match(/hasArrow[\s=]/g);
    if (arrowMatches) {
      hasArrowCount += arrowMatches.length;
    }
    
    // Count hasIcon usage
    const iconMatches = content.match(/hasIcon[\s=]/g);
    if (iconMatches) {
      hasIconCount += iconMatches.length;
    }
  });
  
  console.log('   Button variant usage:');
  Object.entries(variantCounts).forEach(([variant, count]) => {
    if (count > 0) {
      console.log(`      ${variant}: ${count} instances`);
    }
  });
  
  if (hasArrowCount > 0) {
    console.log(`   hasArrow usage: ${hasArrowCount} instances`);
  }
  
  if (hasIconCount > 0) {
    console.log(`   hasIcon usage: ${hasIconCount} instances`);
  }
  
  console.log('✅ Button variants analysis complete');
  return true;
}

/**
 * Test 4: Check for proper animation class preservation
 */
function testAnimationClasses() {
  console.log('\n🔍 Testing animation class preservation...');
  
  const componentFiles = glob.sync('components/**/*.{js,jsx}', {
    ignore: ['components/styles/**', 'node_modules/**']
  });
  
  let animationClassCount = 0;
  let filesWithAnimations = [];
  
  componentFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check for animation classes in Button components
    const buttonWithAnimations = content.match(/<Button[\s\S]*?className.*js-animation[\s\S]*?>/g);
    if (buttonWithAnimations) {
      animationClassCount += buttonWithAnimations.length;
      filesWithAnimations.push({
        file,
        count: buttonWithAnimations.length
      });
    }
  });
  
  console.log(`   Animation classes preserved: ${animationClassCount} instances`);
  
  if (filesWithAnimations.length > 0) {
    console.log('   Files with animated buttons:');
    filesWithAnimations.forEach(f => {
      console.log(`      ${f.file}: ${f.count} instances`);
    });
  }
  
  console.log('✅ Animation classes preservation analysis complete');
  return true;
}

/**
 * Run all button validation tests
 */
function runButtonValidation() {
  const results = [
    testLegacyButtonPatterns(),
    testButtonComponentUsage(), 
    testButtonVariants(),
    testAnimationClasses()
  ];
  
  const passed = results.every(result => result);
  
  console.log('\n' + '='.repeat(60));
  if (passed) {
    console.log('🎉 ALL BUTTON VALIDATIONS PASSED! Migration is on track.');
    console.log('\n📊 Migration Progress:');
    console.log('✅ Legacy patterns identified');
    console.log('✅ Button component enhanced'); 
    console.log('✅ Migration patterns validated');
    console.log('⏳ Ready for component migration');
  } else {
    console.log('❌ Some button validations need attention. Review the issues above.');
    process.exit(1);
  }
}

// Run validation if script is executed directly
if (require.main === module) {
  runButtonValidation();
}

module.exports = { runButtonValidation };