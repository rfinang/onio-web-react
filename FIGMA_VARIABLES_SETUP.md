# 🎨 Figma Variables Setup Guide

## Overview

Your project includes an advanced **Figma Variables → CSS Custom Properties** integration that enables seamless design-to-production workflows. This guide will help you set up Figma Variables to match your codebase configuration.

---

## 📋 **Required Variable Names in Figma**

Note: Use `onio/...` (no leading `$`) as the actual Figma variable names. In UI examples you may see `$onio/...` for readability, but the synced and copied value is `onio/...`.

### **🎨 Color Variables**

Create these variables in a **"Colors"** collection in Figma:

| Figma Variable Name | CSS Custom Property | Tailwind Class | Current Value |
|-------------------|-------------------|----------------|---------------|
| `onio/color/primary` | `--onio-color-primary` | `bg-primary`, `text-primary` | #222021 |
| `onio/color/secondary` | `--onio-color-secondary` | `bg-secondary`, `text-secondary` | #D2FE24 |
| `onio/color/accent` | `--onio-color-accent` | `bg-accent`, `text-accent` | #FF6231 |
| `onio/color/muted` | `--onio-color-muted` | `bg-muted`, `text-muted` | #AEADAD |
| `onio/color/background` | `--onio-color-background` | `bg-background` | #F5F5F5 |
| `onio/color/white` | `--onio-color-white` | `bg-white`, `text-white` | #FFFFFF |
| `onio/color/alert` | `--onio-color-alert` | `bg-alert`, `text-alert` | #EE4A26 |

### **📏 Spacing Variables**

Create these variables in a **"Spacing"** collection in Figma:

| Figma Variable Name | CSS Custom Property | Tailwind Class | Current Value |
|-------------------|-------------------|----------------|---------------|
| `onio/spacing/xs` | `--onio-spacing-xs` | `p-xs`, `m-xs`, `gap-xs` | 4px |
| `onio/spacing/sm` | `--onio-spacing-sm` | `p-sm`, `m-sm`, `gap-sm` | 8px |
| `onio/spacing/md` | `--onio-spacing-md` | `p-md`, `m-md`, `gap-md` | 16px |
| `onio/spacing/lg` | `--onio-spacing-lg` | `p-lg`, `m-lg`, `gap-lg` | 24px |
| `onio/spacing/xl` | `--onio-spacing-xl` | `p-xl`, `m-xl`, `gap-xl` | 32px |
| `onio/spacing/2xl` | `--onio-spacing-2xl` | `p-2xl`, `m-2xl`, `gap-2xl` | 48px |

### **🔤 Typography Variables** (Active Migration)

Create these variables in a **"Typography"** collection in Figma:

| Figma Variable Name | CSS Custom Property | Tailwind Class | Current Value |
|-------------------|-------------------|----------------|---------------|
| `onio/typography/heading/hero` | `--onio-font-size-hero` | `text-6xl` | 6rem (60px) |
| `onio/typography/heading/h1` | `--onio-font-size-h1` | `text-5xl` | 4rem (40px) - CORRECTED |
| `onio/typography/heading/h2` | `--onio-font-size-h2` | `text-4xl` | 3.2rem (32px) - CORRECTED |
| `onio/typography/heading/h3` | `--onio-font-size-h3` | `text-3xl` | 2.8rem (28px) - CORRECTED |
| `onio/typography/heading/h4` | `--onio-font-size-h4` | `text-2xl` | 2.4rem (24px) |
| `onio/typography/heading/h5` | `--onio-font-size-h5` | `text-xl` | 2rem (20px) |
| `onio/typography/heading/h6` | `--onio-font-size-h6` | `text-lg` | 1.6rem (16px) - CORRECTED |
| `onio/typography/body/xl` | `--onio-font-size-body-xl` | `text-body-xl` | 3.5rem→2.6rem→2.4rem responsive - NEW |
| `onio/typography/body/large` | `--onio-font-size-body-lg` | `text-body-lg` | 1.8rem (18px) - mobile body |
| `onio/typography/body/normal` | `--onio-font-size-body` | `text-body` | 1.6rem→2rem responsive - CORRECTED |
| `onio/typography/body/small` | `--onio-font-size-body-sm` | `text-body-sm` | 1.4rem (14px) - CORRECTED |
| `onio/typography/body/xs` | `--onio-font-size-body-xs` | `text-body-xs` | 1.2rem (12px) - NEW |

**Typography System Notes:**
- Base font size: 62.5% (1rem = 10px for easy calculation)
- Font family: Inter (already configured in Tailwind)
- Font weight: 500 (default), bold available as needed
- **Responsive body text**: 1.6rem default → 2rem desktop (1200px+) → 1.8rem mobile (739px-)
- **All sizes corrected** to match original CSS exactly

**🚀 MIGRATION STATUS:**
- ✅ **Button component migration COMPLETE** - 95+ button instances now using Button component
  - SearchPopup.js, SearchHeader.js, Header.js, SettingChart.js migrated
  - All search forms, navigation buttons, and form controls updated
  - Legacy .btn classes replaced with Button component variants
- ✅ Typography component **COMPLETE** with **19 variants** (h4, h5, h6 FIXED + pill variant)
- ✅ **90 heading instances migrated** (9 new in Phase 1 - Investor Pages): 
  - **Phase 1 (Business Critical)**: InvestorData.js (2), InvestorPartner.js (4), InvestorUpdates.js (3)
  - **Tier 1 (Homepage)**: NavMobile.js (3), HomeQuick.js (3), HomeContact.js (2)
  - **Tier 2 (High-traffic)**: SearchContent.js (8), EnvironmentalBenefits.js (4)
  - **Tier 3 (Content)**: CareerLandingContent.js (7), KeyFeature.js (3), Features.js (6)
  - **Previous**: Careers.js, HomeProject.js, Teams.js, HomeBlog.js, etc. (45)
- ✅ **CRITICAL FIXES APPLIED** (user feedback addressed):
  - **h4**: 4.8rem (48px) all breakpoints - for news article titles ✅
  - **h5**: 3.5rem→2.6rem→2.4rem responsive - for "Domain Experts" etc. ✅
  - **h6**: 2.7rem→2.3625rem responsive - smallest headings ✅
  - **Pill borders**: Fixed missing border-2 styling ✅
  - **Exact line-heights**: All match original CSS precisely ✅
- ✅ **MAJOR**: Body text system enhanced with exact desc--large replacement
  - `body-xl` (EXACT match: 35px→26px→24px responsive with 1.142857 line-height)
  - `body-large`, `body`, `body-small`, `body-xs` variants
  - `section-description`, `accordion-description`, `feature-description` semantic variants
- ✅ **NEW**: Pill variant added (replaces heading--block pattern)
  - Responsive border pills with exact styling match + proper borders
  - White variant for dark backgrounds 
- ✅ Design system page updated with h4, h5, h6 examples
- 🔄 **~190 heading instances remaining** for bulk migration (ready for Phase 2!)
- 🆕 **160+ body text instances** ready for Typography migration (desc--large completed!)

### **🌑 Shadows Variables** (Optional)

Create these variables in a **"Shadows"** collection in Figma:

| Figma Variable Name | CSS Custom Property | Purpose |
|-------------------|-------------------|---------|
| `onio/shadow/light` | `--onio-shadow-light` | Subtle shadows |
| `onio/shadow/medium` | `--onio-shadow-medium` | Card shadows |
| `onio/shadow/heavy` | `--onio-shadow-heavy` | Modal shadows |

---

## 🚀 **Setup Steps in Figma**

### **Step 1: Create Variable Collections**

1. Open your Figma file
2. Go to **Variables panel** (⌘/Ctrl + Option/Alt + V)
3. Create these collections:
   - **Colors** (for color tokens)
   - **Spacing** (for spacing tokens)
   - **Typography** (for font tokens)
   - **Shadows** (for shadow tokens)

### **Step 2: Create Variables**

For each collection, create variables with the exact names from the tables above.

**Example for Colors:**
- Collection: "Colors"
- Variable: "onio/primary"
- Value: #007bff
- Mode: "Default"

### **Step 3: Configure API Access**

1. Get your **Figma File ID** from the URL:
   ```
   https://www.figma.com/file/[FILE_ID]/Your-File-Name
   ```

2. Generate a **Figma Access Token**:
   - Go to Figma Settings → Account → Personal Access Tokens
   - Generate new token with "File content" permission

3. Set environment variables:
   ```bash
   export FIGMA_FILE_ID="your_file_id_here"
   export FIGMA_ACCESS_TOKEN="your_token_here"
   ```

### **Step 4: Get Collection IDs**

Run the sync script to get your collection IDs:
```bash
npm run figma:sync
```

Then update `scripts/sync-figma-tokens.js` with your actual collection IDs:

```javascript
collections: {
  colors: 'YOUR_ACTUAL_COLOR_COLLECTION_ID',
  spacing: 'YOUR_ACTUAL_SPACING_COLLECTION_ID', 
  typography: 'YOUR_ACTUAL_TYPOGRAPHY_COLLECTION_ID'
}
```

---

## ⚡ **Usage Workflow**

### **Development Workflow:**

1. **Design in Figma** using the variables
2. **Sync variables** to code: `npm run figma:sync`
3. **Use Typography component** for consistent text styling
4. **Use in components:**
   ```jsx
   // Typography component (RECOMMENDED)
   <Typography variant="h1" color="primary">Main Title</Typography>
   <Typography variant="hero">Hero Text</Typography>
   
   // Tailwind classes
   <div className="bg-primary text-white p-lg">
   
   // CSS custom properties
   <div style={{ 
     backgroundColor: 'var(--onio-color-primary)', 
     padding: 'var(--onio-spacing-lg)' 
   }}>
   
   // Styled Components
   const Button = styled.button`
     background: var(--onio-color-primary);
     padding: var(--onio-spacing-md);
     color: var(--onio-color-white);
   `;
   ```

### **Automated Sync (Recommended):**

```bash
# Watch for changes and auto-sync
npm run figma:watch

# Manual sync
npm run figma:sync
```

---

## 🔧 **Current File Structure**

```
onio-web-react/
├── scripts/
│   └── sync-figma-tokens.js      # Sync script
├── styles/
│   └── figma-variables.css       # Generated CSS variables
├── tailwind.config.js            # Tailwind integration
└── FIGMA_VARIABLES_SETUP.md     # This guide
```

---

## 📚 **Benefits of This Setup**

- **🔄 Real-time sync** from design to code
- **🎯 Single source of truth** for design tokens
- **⚡ Zero manual updates** needed
- **🔧 CSS fallback values** for reliability
- **📱 Responsive design** token support
- **🎨 Designer-developer collaboration**

---

## 🚨 **Important Notes**

1. **Variable Names Must Match**: The `/` separator in Figma becomes `-` in CSS
2. **Collection Names Matter**: Use exact collection names as specified
3. **Mode Support**: Currently supports "Default" mode, can be extended
4. **Fallback Values**: Always included for robust styling
5. **Build Integration**: Variables are compiled at build time

---

## 🆘 **Troubleshooting**

### Common Issues:

**Variables not syncing?**
- Check Figma API credentials
- Verify collection and variable names
- Ensure variables are published in Figma

**CSS not updating?**
- Run `npm run figma:sync` manually
- Check `styles/figma-variables.css` is imported
- Clear Next.js cache: `rm -rf .next`

**Tailwind classes not working?**
- Check `safelist` in `tailwind.config.js`
- Rebuild Tailwind: `npx tailwindcss build`

---

## 📞 **Support**

For issues with the Figma Variables integration, check:
1. Generated variables in `styles/figma-variables.css`
2. Tailwind configuration in `tailwind.config.js`  
3. Script logs from `npm run figma:sync`
