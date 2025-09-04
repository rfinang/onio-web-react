#!/usr/bin/env node
/**
 * Migration Audit (Non-Grid, Read-Only)
 * - Scans repo for legacy CSS patterns outside of Bootstrap grid
 * - Produces a JSON report and console summary
 * - Never fails (exit 0) to be safe for local runs/preview CI
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

process.chdir(path.join(__dirname, '..'));

const IGNORE = [
  'node_modules/**',
  '.next/**',
  'public/**',
  'tokens/**',
];

// Files to scan
const FILE_GLOBS = [
  'components/**/*.{js,jsx,ts,tsx}',
  'pages/**/*.{js,jsx,ts,tsx}',
  'styles/**/*.{css,scss}',
];

// Bootstrap grid files to exclude from checks
const GRID_FILES = new Set([
  'styles/bootstrap-grid.css',
  'public/bootstrap-grid-only.css',
]);

// Patterns
const HEX_RE = /#[0-9A-Fa-f]{3,6}/g;
const LEGACY_CLASSES = [
  'bg-dark', 'bg-red', 'bg-yellow', 'text-red',
  'btn--', 'pageLink--', 'iconLink--'
];
const LEGACY_VARS = ['var(--black)', 'var(--grey)'];

function isGridFile(file) {
  return GRID_FILES.has(file) || file.includes('bootstrap-grid');
}

function read(file) { return fs.readFileSync(file, 'utf8'); }

function scanFile(file) {
  const content = read(file);
  const lines = content.split(/\r?\n/);
  const issues = [];

  // 1) Hardcoded hex (ignore inline SVG/data and style directories if grid)
  lines.forEach((line, i) => {
    const matches = [...line.matchAll(HEX_RE)];
    if (!matches.length) return;
    const lower = line.toLowerCase();
    const inlined = (
      lower.includes('<svg') || lower.includes('</svg') ||
      lower.includes('stroke=') || lower.includes('fill=') ||
      lower.includes('data:image')
    );
    if (inlined) return;
    issues.push({ type: 'hex', line: i + 1, lineText: line.trim() });
  });

  // 2) Legacy classes (non-grid)
  LEGACY_CLASSES.forEach((klass) => {
    const re = new RegExp(`\\b${klass.replace(/[-]/g, '-')}\\b`);
    if (re.test(content)) issues.push({ type: 'legacy-class', value: klass });
  });

  // 3) Legacy var aliases
  LEGACY_VARS.forEach((v) => {
    if (content.includes(v)) issues.push({ type: 'legacy-var', value: v });
  });

  return issues;
}

function main() {
  const files = FILE_GLOBS.flatMap((g) => glob.sync(g, { ignore: IGNORE }));

  const report = { summary: {}, files: [] };
  let total = 0;

  files.forEach((file) => {
    if (isGridFile(file)) return; // ignore grid
    const issues = scanFile(file) || [];
    if (!issues.length) return;
    total += issues.length;
    report.files.push({ file, issues });
  });

  // Build summary
  const typeCounts = {};
  report.files.forEach(({ issues }) => {
    issues.forEach((it) => {
      typeCounts[it.type] = (typeCounts[it.type] || 0) + 1;
    });
  });
  report.summary = { total, byType: typeCounts };

  // Write report file
  const out = path.join(process.cwd(), 'migration-audit.json');
  fs.writeFileSync(out, JSON.stringify(report, null, 2));

  // Console summary
  console.log('🔎 Migration Audit (non-grid)');
  console.log(`   Files with issues: ${report.files.length}`);
  console.log(`   Total findings:   ${total}`);
  Object.entries(typeCounts).forEach(([k, v]) => {
    console.log(`   - ${k}: ${v}`);
  });
  console.log(`\n📄 Report: ${out}`);
  process.exit(0); // safe: never fail
}

main();

