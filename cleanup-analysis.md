# Codebase Cleanup Analysis Report

## ✅ Already Cleaned (190KB removed)
- migration-audit.json (22KB)
- validate-colors.js (7KB)  
- public/bootstrap.css (164KB)

## 🔍 Files to Review for Deletion

### Potentially Unused Styled Components
Run `grep -r "ComponentName" .` to verify these are not imported:

```bash
# About styles (potentially unused)
components/styles/about/About.js
components/styles/about/SayHello.js

# Blog styles (check dynamic imports)
components/styles/blog/BlogHeader.js
components/styles/blog/BlogLanding.js

# Common styles (verify not used in GlobalStyles)
components/styles/common/AnimationStyles.js
components/styles/common/Heading.js
components/styles/common/Pagelink.js
components/styles/common/Spacing.js

# Search/Video (likely unused)
components/styles/Search.js
components/styles/VideoItem.js
components/styles/block/SearchPopup.js

# Energy emulator (verify with team)
components/styles/energy-emulator/data-chart/DataTooltipStyled.js
components/styles/energy-emulator/PoweredProfilerStyled.js
components/styles/energy-emulator/power-solver/PowerSolverConfigBarsStyled.js
```

### Redundant Scripts to Consolidate
```bash
# Keep only what's in package.json scripts
scripts/debug-figma-mcp.js
scripts/figma-mcp-simple.js  
scripts/batch-migrate-styles.js
scripts/mass-replace-styled.js
```

### Duplicate Components
```bash
# CustomSelect - consolidate these two:
components/styles/common/CustomSelect.js
components/styles/common/CustomSelectStylesNew.js

# Storybook Button - keep only one:
stories/Button.stories.ts
stories/Button.tsx
stories/Components/Button.stories.jsx
```

## 📊 Cleanup Summary

| Category | Files | Size | Status |
|----------|-------|------|--------|
| Migration artifacts | 3 | 190KB | ✅ Deleted |
| Unused styles | ~25 | ~200KB | ⚠️ Needs verification |
| Redundant scripts | 4 | ~15KB | ⚠️ Review with team |
| Duplicate components | 5 | ~10KB | ⚠️ Pick one of each |
| **Total Potential** | **37 files** | **~415KB** | - |

## 🎯 Next Steps

1. **Verify unused styles**: Use the grep commands above to verify no imports
2. **Check dynamic imports**: Search for dynamic imports that might use these files
3. **Team review**: Confirm with team which Figma scripts are actively used
4. **Consolidate duplicates**: Merge similar components (CustomSelect, Button stories)

## 🚀 Quick Cleanup Commands

```bash
# Find all imports of a style file
grep -r "StyleFileName" . --include="*.js" --include="*.jsx" 

# Find unused dependencies
npm ls --depth=0 | grep "extraneous"

# Check file sizes
du -sh components/styles/**/*.js | sort -h

# Find duplicate file names
find . -name "*.js" -o -name "*.jsx" | rev | cut -d/ -f1 | rev | sort | uniq -d
```

## 💡 Recommendations

1. **Create a cleanup branch**: Test deletions safely
2. **Run tests after each deletion batch**: Ensure nothing breaks
3. **Use git clean**: `git clean -fd` after confirming changes
4. **Document decisions**: Note why files were kept/removed