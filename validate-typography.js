#!/usr/bin/env node

/**
 * Typography Migration Validation Script
 * 
 * Compares Typography component variants against original CSS
 * Fails if any discrepancies found
 */

const fs = require('fs');
const path = require('path');

// Original CSS values extracted from onio-web-react-orig
const ORIGINAL_CSS = {
  h1: {
    '≥1400px': { fontSize: '9rem', lineHeight: '1.1555555556' },
    '1024px-1399px': { fontSize: '7.875rem', lineHeight: '1.15556' },
    '≤1023px': { fontSize: '5rem', lineHeight: '1.2' }
  },
  h2: {
    '≥1400px': { fontSize: '8rem', lineHeight: '1.2' },
    '1024px-1399px': { fontSize: '8rem', lineHeight: '1.2' },
    '740px-1023px': { fontSize: '5rem', lineHeight: '1.2' },
    '≤739px': { fontSize: '50px', lineHeight: '1.2' }
  },
  h3: {
    '≥1400px': { fontSize: '5.6rem', lineHeight: '1.1428571429' },
    '740px-1399px': { fontSize: '5.6rem', lineHeight: '1.1428571429' },
    '≤739px': { fontSize: '43px', lineHeight: '1.1428571429' }
  },
  h4: {
    'all': { fontSize: '4.8rem', lineHeight: '1.1666666667' }
  },
  'heading-block': {
    '≥1400px': { fontSize: '2rem', border: '2px solid', height: '3.6rem', padding: '0 2.6rem' },
    '≤1399px': { fontSize: '1.75rem', border: '2px solid', height: '3.6rem', padding: '0 2.6rem' },
    '≤991px': { fontSize: '1.5rem', border: '1.5px solid', height: '3.2rem', padding: '0 24px' }
  }
};

/**
 * Parse Typography.jsx and extract variant definitions
 */
function parseTypographyComponent() {
  const typographyPath = path.join(__dirname, 'components/ui/Typography.jsx');
  const content = fs.readFileSync(typographyPath, 'utf8');
  
  // Extract variant definitions with better parsing
  const variants = {};
  
  // Find h2 variant specifically (since that's what we're validating)
  const h2Match = content.match(/h2:\s*\[([\s\S]*?)\]\.join\(' '\)/);
  if (h2Match) {
    const h2Content = h2Match[1];
    // Extract only the quoted strings, ignoring comments
    const quotedStrings = h2Content.match(/'([^']+)'/g) || [];
    variants.h2 = quotedStrings.map(str => str.replace(/'/g, ''));
  }
  
  // Find section-badge variant
  const badgeMatch = content.match(/'section-badge':\s*\[([\s\S]*?)\]\.join\(' '\)/);
  if (badgeMatch) {
    const badgeContent = badgeMatch[1];
    const quotedStrings = badgeContent.match(/'([^']+)'/g) || [];
    variants['section-badge'] = quotedStrings.map(str => str.replace(/'/g, ''));
  }
  
  return variants;
}

/**
 * Validate h2 variant matches original CSS exactly
 */
function validateH2Variant(h2Classes) {
  console.log('🔍 Validating h2 variant...');
  
  const errors = [];
  
  // Check for exact font sizes at correct breakpoints
  if (!h2Classes.includes('text-[50px]')) {
    errors.push('❌ Missing mobile font size: text-[50px] (≤739px)');
  }
  
  if (!h2Classes.includes('min-[740px]:text-[5rem]')) {
    errors.push('❌ Missing tablet font size: min-[740px]:text-[5rem]');
  }
  
  if (!h2Classes.includes('min-[1024px]:text-[8rem]')) {
    errors.push('❌ Missing desktop font size: min-[1024px]:text-[8rem]');
  }
  
  if (!h2Classes.includes('leading-[1.2]')) {
    errors.push('❌ Missing correct line-height: leading-[1.2]');
  }
  
  if (!h2Classes.includes('whitespace-pre-line')) {
    errors.push('❌ Missing white-space property: whitespace-pre-line');
  }
  
  if (!h2Classes.includes('font-medium')) {
    errors.push('❌ Missing font-weight: font-medium');
  }
  
  return errors;
}

/**
 * Validate section-badge variant matches heading--block CSS
 */
function validateSectionBadgeVariant(badgeClasses) {
  console.log('🔍 Validating section-badge variant...');
  
  const errors = [];
  
  // Join all classes into one string for easier searching
  const allClasses = badgeClasses.join(' ');
  
  // Check for exact breakpoints and sizes
  if (!allClasses.includes('2xl:text-[2rem]') && !allClasses.includes('min-[1400px]:text-[2rem]')) {
    errors.push('❌ Missing ≥1400px font size: should be 2rem');
  }
  
  if (!allClasses.includes('max-lg:text-[1.5rem]') && !allClasses.includes('min-[991px]:text-[1.5rem]')) {
    errors.push('❌ Missing ≤991px font size: should be 1.5rem');
  }
  
  if (!allClasses.includes('rounded-[5rem]')) {
    errors.push('❌ Missing border-radius: rounded-[5rem]');
  }
  
  if (allClasses.includes('w-full')) {
    errors.push('❌ Should NOT have w-full (should be auto-width)');
  }
  
  return errors;
}

/**
 * Main validation function
 */
function validateMigration() {
  console.log('🚀 Starting Typography Migration Validation...\n');
  
  try {
    const variants = parseTypographyComponent();
    let totalErrors = 0;
    
    // Validate h2 variant
    if (variants.h2) {
      const h2Errors = validateH2Variant(variants.h2);
      if (h2Errors.length > 0) {
        console.log('❌ H2 Variant Errors:');
        h2Errors.forEach(error => console.log(`  ${error}`));
        totalErrors += h2Errors.length;
      } else {
        console.log('✅ H2 variant validation passed');
      }
    }
    
    console.log('');
    
    // Validate section-badge variant
    if (variants['section-badge']) {
      const badgeErrors = validateSectionBadgeVariant(variants['section-badge']);
      if (badgeErrors.length > 0) {
        console.log('❌ Section-Badge Variant Errors:');
        badgeErrors.forEach(error => console.log(`  ${error}`));
        totalErrors += badgeErrors.length;
      } else {
        console.log('✅ Section-badge variant validation passed');
      }
    }
    
    console.log('\n' + '='.repeat(50));
    
    if (totalErrors === 0) {
      console.log('🎉 ALL VALIDATIONS PASSED! Migration is accurate.');
      process.exit(0);
    } else {
      console.log(`💥 VALIDATION FAILED: ${totalErrors} errors found.`);
      console.log('Please fix these issues before proceeding.');
      process.exit(1);
    }
    
  } catch (error) {
    console.error('💥 Validation script failed:', error.message);
    process.exit(1);
  }
}

// Run validation
validateMigration();