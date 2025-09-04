#!/usr/bin/env node
/**
 * Legacy CSS Validator (Non-Grid)
 * - Flags legacy patterns outside of Bootstrap grid
 * - Supports flags:
 *    --no-fail         Do not exit with non-zero status
 *    --include-styles  Include all styles CSS files in scanning (for reports)
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

process.chdir(path.join(__dirname, '..'));

const argv = process.argv.slice(2);
const NO_FAIL = argv.includes('--no-fail');
const INCLUDE_STYLES = argv.includes('--include-styles');

const IGNORE = [
  'node_modules/**',
  '.next/**',
  'public/**',
];

const FILE_GLOBS = [
  'components/**/*.{js,jsx,ts,tsx}',
  'pages/**/*.{js,jsx,ts,tsx}',
  INCLUDE_STYLES ? 'styles/**/*.{css,scss}' : 'styles/!(bootstrap-grid).{css,scss}',
];

const HEX_RE = /#[0-9A-Fa-f]{3,6}/g;
const LEGACY_CLASSES = [
  'bg-dark', 'bg-red', 'bg-yellow', 'text-red',
  'btn--', 'pageLink--', 'iconLink--'
];
const LEGACY_VARS = ['var(--black)', 'var(--grey)'];

function isGridFile(file) {
  return file.includes('bootstrap-grid');
}

function scanFile(file) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split(/\r?\n/);
  const issues = [];

  // Hex colors (ignore inline SVG/data)
  lines.forEach((line, i) => {
    const matches = [...line.matchAll(HEX_RE)];
    if (!matches.length) return;
    const lower = line.toLowerCase();
    if (lower.includes('<svg') || lower.includes('</svg') || lower.includes('stroke=') || lower.includes('fill=') || lower.includes('data:image')) return;
    issues.push({ type: 'hex', line: i + 1, value: (matches[0] || [])[0], context: line.trim() });
  });

  // Legacy classes
  LEGACY_CLASSES.forEach((klass) => {
    const re = new RegExp(`\\b${klass.replace(/[-]/g, '-')}\\b`);
    if (re.test(content)) issues.push({ type: 'legacy-class', value: klass });
  });

  // Legacy var aliases
  LEGACY_VARS.forEach((v) => { if (content.includes(v)) issues.push({ type: 'legacy-var', value: v }); });

  return issues;
}

function main() {
  const files = FILE_GLOBS.flatMap((g) => glob.sync(g, { ignore: IGNORE }));
  const report = [];
  let total = 0;

  files.forEach((file) => {
    if (isGridFile(file)) return; // ignore grid files entirely
    const issues = scanFile(file) || [];
    if (!issues.length) return;
    total += issues.length;
    report.push({ file, issues });
  });

  if (total === 0) {
    console.log('✅ No legacy CSS found. Great job!');
    process.exit(0);
  }

  console.log(`❌ Found ${total} legacy occurrences in ${report.length} file(s):\n`);
  report.forEach(({ file, issues }) => {
    console.log(`• ${file}`);
    const byType = issues.reduce((acc, it) => { acc[it.type] = (acc[it.type] || 0) + 1; return acc; }, {});
    Object.entries(byType).forEach(([t, c]) => console.log(`   - ${t}: ${c}`));
  });

  if (NO_FAIL) process.exit(0);
  process.exit(1);
}

main();
