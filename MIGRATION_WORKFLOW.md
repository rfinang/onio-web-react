# 🔄 Design System Migration Workflow

## 📋 **CRITICAL RULE: Always Update Both Files**

When making ANY design system migration changes, you MUST update both files simultaneously:

1. **`pages/design-system.js`** - Live examples and migration status
2. **`FIGMA_VARIABLES_SETUP.md`** - Figma variable definitions and progress

**⚠️ NEVER update one without the other - they must stay in sync.**

---

## 🎯 **Step-by-Step Migration Workflow**

### **Before Starting Any Migration:**

1. **Read current status** in both files to understand baseline
2. **Plan the specific changes** you'll make to both files
3. **Use TodoWrite tool** to track migration tasks

### **During Migration:**

#### **Step 1: Update FIGMA_VARIABLES_SETUP.md**
- [ ] Update migration status checkmarks (✅/🔄)
- [ ] Update instance counts (e.g., "~180 instances remaining")
- [ ] Add new Figma variable definitions if creating new tokens
- [ ] Update "MIGRATION STATUS" section with latest progress

#### **Step 2: Update pages/design-system.js**
- [ ] Add new migrated components with live examples
- [ ] Include Figma variables with click-to-copy functionality  
- [ ] Add practical usage code examples
- [ ] Keep focused on actual migrated components only (no progress tracking)

#### **Step 3: Verification**
- [ ] Check both files reflect the same migration status
- [ ] Ensure Figma variable names match exactly between files
- [ ] Verify progress indicators are consistent
- [ ] Test that all copy-to-clipboard Figma variables work

---

## 📝 **Template Updates for Common Migrations**

### **✅ When Completing a Component Migration:**

**In FIGMA_VARIABLES_SETUP.md:**
```markdown
**🚀 MIGRATION STATUS:**
- ✅ [ComponentName] component created with X variants
- ✅ [Specific fix]: description of what was fixed
- 🔄 ~X instances remaining for bulk migration
```

**In pages/design-system.js:**
```javascript
// Move from "Still Custom CSS" to completed
<li className="flex items-start">
  <span className="text-green-600 mr-2 mt-1">✅</span>
  <span className="line-through text-gray-500">[ComponentName] (COMPONENT CREATED!)</span>
</li>

// Add new section with live examples and Figma variables
<code 
  className="text-purple-600 cursor-pointer hover:bg-purple-50 px-2 py-1 rounded" 
  onClick={() => copyToClipboard('$onio/[component]/[variant]')}
>
  $onio/[component]/[variant]
</code>
```

### **🚧 When Adding New Figma Variable Definitions:**

**In FIGMA_VARIABLES_SETUP.md:**
```markdown
| `onio/[category]/[name]` | `--onio-[name]` | `[tailwind-class]` | [value] |
```

**In pages/design-system.js:**
```javascript
<code 
  className="text-purple-600 cursor-pointer hover:bg-purple-50 px-2 py-1 rounded block" 
  onClick={() => copyToClipboard('$onio/[category]/[name]')}
>
  $onio/[category]/[name]
</code>
<div className="text-sm text-gray-600">[tailwind-class] • var(--onio-[name]) • [value]</div>
```

### **📊 When Updating Migration Progress:**

**In FIGMA_VARIABLES_SETUP.md:**
```markdown
- 🔄 ~[new-count] instances remaining for bulk migration
```

**In pages/design-system.js:**
```javascript
// Update progress percentage
<span className="text-2xl font-bold text-green-600">~[new-percentage]%</span>
<div className="bg-green-500 h-3 rounded-full" style={{width: '[new-percentage]%'}}></div>

// Update navigation token counts
<a href="#[section]" className="block text-green-700 hover:text-green-900">[Icon] [Name] ([token-count] tokens)</a>
```

---

## 🔍 **Key Sections to Keep in Sync**

### **Migration Status Tracking:**
- **FIGMA_VARIABLES_SETUP.md**: `🚀 MIGRATION STATUS` sections
- **design-system.js**: "Migration Reality Check" and progress bars

### **Figma Variable Definitions:**
- **FIGMA_VARIABLES_SETUP.md**: Variable name tables with CSS mappings
- **design-system.js**: Click-to-copy code blocks with exact same variable names

### **Component Progress:**
- **FIGMA_VARIABLES_SETUP.md**: Component completion checkmarks (✅/🔄)  
- **design-system.js**: "Still Custom CSS" vs completed sections

### **Instance Counts:**
- **FIGMA_VARIABLES_SETUP.md**: "~X instances remaining"
- **design-system.js**: Progress percentages and token counts in navigation

---

## ⚡ **Quick Checklist for Every Migration**

**Before Committing Changes:**

- [ ] Both files show same migration status
- [ ] Figma variable names are identical in both files
- [ ] Progress percentages are consistent
- [ ] Navigation links work and token counts are accurate
- [ ] All new Figma variables have click-to-copy functionality
- [ ] Migration status sections reflect latest changes
- [ ] Instance counts are updated in both files

**After Changes:**
- [ ] Test design-system page loads without errors
- [ ] Verify copy-to-clipboard works for all new variables
- [ ] Check that progress indicators make sense
- [ ] Ensure both files tell the same story about migration status

---

## 🎨 **Figma Variable Naming Convention**

**Always use this exact format:**

```
$onio/[category]/[subcategory]/[name]
```

**Examples:**
- `$onio/color/primary` → `--onio-color-primary`
- `$onio/typography/heading/h1` → `--onio-font-size-h1`  
- `$onio/spacing/lg` → `--onio-spacing-lg`
- `$onio/button/secondary` → Tailwind component

**CSS Custom Property Pattern:**
- Remove `$` prefix
- Replace `/` with `-`
- Add `--` prefix
- Result: `--onio-[category]-[name]`

---

## 🚨 **Common Mistakes to Avoid**

❌ **Don't:**
- Update only one file and forget the other
- Use different Figma variable names between files
- Leave migration status inconsistent
- Add components without Figma variables
- Forget to update progress percentages
- Create navigation links that don't work

✅ **Do:**
- Always update both files in the same commit
- Double-check Figma variable names match exactly
- Keep progress indicators realistic and consistent
- Add live examples for every migrated component
- Include practical usage code snippets
- Test the design-system page after changes

---

## 📞 **Usage Instructions for Claude**

**When asked to migrate any design system component:**

1. **Start by reading both files** to understand current status
2. **Use TodoWrite** to plan the migration tasks
3. **Always update both files** with matching information
4. **Follow the templates** provided above
5. **Verify consistency** before completing

**Never make changes to just one file - they are a connected system that must stay synchronized.**