# 🎨 Tailwind CSS Migration Guide

This document outlines the migration strategy from styled-components to Tailwind CSS for a cleaner, more maintainable styling system.

## 🚀 Quick Start

Visit **`/tailwind-demo`** to see all components and utilities in action.

## 📁 New File Structure

```
├── styles/
│   ├── tailwind.css                 # Main Tailwind imports
│   └── tailwind-components.css      # Custom component classes
├── components/
│   └── ui/                          # New Tailwind-based components
│       ├── Button.jsx               # Button component
│       ├── Card.jsx                 # Card component
│       └── index.js                 # Component exports
└── pages/
    └── tailwind-demo.js             # Demo page
```

## 🎨 Design System

### Brand Colors (Updated in `tailwind.config.js`)

```javascript
colors: {
  // Brand colors
  'primary': '#222021',    // black
  'secondary': '#D2FE24',  // yellow
  'accent': '#FF6231',     // orange
  'muted': '#AEADAD',      // grey
  'background': '#F5F5F5', // light-grey
  'danger': '#EE4A26',     // alert
}
```

### Component Classes

Use these pre-built component classes for consistency:

```css
/* Buttons */
.btn-primary, .btn-secondary, .btn-accent, .btn-outline, .btn-ghost

/* Typography */
.heading-1, .heading-2, .heading-3, .heading-4, .heading-5, .heading-6
.text-body, .text-body-lg, .text-small, .text-tiny

/* Cards */
.card, .card-bordered, .card-body, .card-header, .card-footer

/* Forms */
.input, .label, .select, .textarea, .checkbox, .radio

/* Layout */
.container-max, .section, .section-sm, .section-lg
```

## 🔄 Migration Strategy

### Phase 1: New Components ✅ (Complete)
- [x] Tailwind configuration with Onio brand colors
- [x] Component class library (`tailwind-components.css`)
- [x] React component examples (Button, Card)
- [x] Demo page at `/tailwind-demo`

### Phase 2: Gradual Migration

#### High Priority Components to Migrate:
1. **GlobalStyles.js** (543 lines) → Convert to utility classes
2. **Header.js** → Use new Button and layout classes
3. **Footer.js** → Use utility classes
4. **common/Heading.js** → Use typography classes

#### Migration Pattern:

**Before (Styled Components):**
```jsx
import styled from 'styled-components';

const StyledButton = styled.button`
  background: #222021;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  
  &:hover {
    background: rgba(34, 32, 33, 0.9);
  }
`;

export default function MyButton({ children }) {
  return <StyledButton>{children}</StyledButton>;
}
```

**After (Tailwind):**
```jsx
import { Button } from '../ui';

export default function MyButton({ children }) {
  return (
    <Button variant="primary">
      {children}
    </Button>
  );
}
```

### Phase 3: Cleanup
1. Remove styled-components dependency
2. Delete unused CSS files  
3. Remove Bootstrap CSS
4. Consolidate remaining CSS custom properties

## 🛠️ Available Components

### Button Component
```jsx
import { Button } from '../components/ui';

<Button 
  variant="primary"     // primary, secondary, accent, outline, ghost, danger
  size="md"            // sm, md, lg, xl
  fullWidth={false}    // boolean
  disabled={false}     // boolean
  loading={false}      // boolean
  leftIcon={<Icon />}  // React node
  onClick={handleClick}
>
  Button Text
</Button>
```

### Card Component
```jsx
import { Card } from '../components/ui';

<Card
  header={<h3>Title</h3>}
  footer={<Button>Action</Button>}
  shadow="md"          // none, sm, md, lg, xl, soft
  bordered={true}      // boolean
  hoverable={true}     // boolean
>
  Card content here
</Card>
```

## 📋 Utility Classes

### Layout
```html
<!-- Containers -->
<div class="container-max">Max width container</div>
<div class="container-fluid">Full width container</div>

<!-- Sections -->
<section class="section">Standard section spacing</section>
<section class="section-lg">Large section spacing</section>
```

### Typography
```html
<h1 class="heading-1">Display Heading</h1>
<h2 class="heading-2">Section Title</h2>
<p class="text-body">Body text</p>
<small class="text-small">Small text</small>
```

### Badges & Alerts
```html
<span class="badge badge-primary">New</span>
<div class="alert alert-success">Success message</div>
```

## 🎯 Migration Checklist

### For Each Component:
- [ ] Identify styled-components usage
- [ ] Map styles to Tailwind utilities or component classes
- [ ] Test responsive behavior
- [ ] Verify hover/focus states
- [ ] Check accessibility
- [ ] Update tests if needed

### File Updates:
- [ ] Update imports from styled-components to Tailwind
- [ ] Remove styled-component definitions
- [ ] Add Tailwind classes
- [ ] Test component in different contexts

## 🔍 Tools & Resources

### Tailwind CSS IntelliSense
Install VS Code extension for auto-completion and linting.

### Class Organization
Follow this order for better readability:
1. Layout (flex, grid, positioning)
2. Box model (width, height, padding, margin)  
3. Typography (font, text)
4. Visual (background, border, shadow)
5. Interactive (hover, focus, transition)

### Example:
```jsx
<div className="
  flex items-center justify-between
  w-full h-16 px-6 py-4
  text-lg font-medium
  bg-white border border-gray-200 rounded-lg shadow-sm
  hover:shadow-md focus:outline-none focus:ring-2 transition-all
">
```

## 🚧 Known Issues & Solutions

### 1. CSS Specificity
**Issue:** Tailwind classes not overriding existing styles
**Solution:** Use `!important` modifier: `!bg-primary`

### 2. Component Conflicts  
**Issue:** Old styled-components conflicting with Tailwind
**Solution:** Migrate components gradually, test thoroughly

### 3. Bundle Size
**Issue:** Unused Tailwind classes increasing bundle
**Solution:** Configure `purge` in `tailwind.config.js` (already set up)

## 📚 Next Steps

1. **View the demo**: Go to `/tailwind-demo` to see the system
2. **Start migrating**: Choose a simple component to start with
3. **Use the classes**: Apply utility classes in new components
4. **Iterate**: Gradually replace styled-components across the app
5. **Clean up**: Remove unused files and dependencies

## 🤝 Contributing

When adding new component patterns:
1. Add utility classes to `tailwind-components.css`
2. Create React component in `components/ui/`
3. Add example to `tailwind-demo.js`
4. Update this documentation

---

**Ready to migrate?** Start with `/tailwind-demo` to explore the new system! 🎉