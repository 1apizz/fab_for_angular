# Icon Guide for Vertical Switcher FAB

This guide shows you how to easily add and customize icons for your FAB items.

## 📝 Icon Format

Icons are provided as **SVG strings**. This gives you maximum flexibility and keeps the bundle size small (no icon font needed).

## ✨ Quick Start

### Basic Icon Setup

```typescript
const item: FabItem = {
  id: 'dashboard',
  label: 'Dashboard',
  sub: 'Overview',
  tone: 'cyan',
  icon: '<svg>...</svg>'  // Your SVG here
};
```

## 🎨 Icon Collection

Here's a ready-to-use collection of icons for common use cases:

### 1. Trending/Chart Icon
```typescript
const trendIcon = `
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="1.8"
       stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 17l6-6 4 4 8-9" />
    <path d="M14 6h7v7" />
  </svg>
`;
```

### 2. Badge/Token Icon
```typescript
const badgeIcon = `
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="1.6"
       stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="9.5" />
    <path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4" />
    <path d="M5.4 5.4l1.7 1.7M16.9 16.9l1.7 1.7M18.6 5.4l-1.7 1.7M7.1 16.9l-1.7 1.7" />
  </svg>
`;
```

### 3. Star/Achievement Icon
```typescript
const starIcon = `
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="1.6"
       stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="9.5" />
    <path d="M12 6.6L7.8 9.65l1.6 4.95h5.2L16.2 9.65z" />
    <path d="M12 6.6V3M16.2 9.65L19.6 7.5M14.6 14.6l2.4 3.4M9.4 14.6L7 18M7.8 9.65L4.4 7.5" />
  </svg>
`;
```

### 4. Chat/Social Icon
```typescript
const chatIcon = `
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="1.8"
       stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 11.5a8.4 8.4 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.4 8.4 0 01-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.4 8.4 0 013.8-.9h.5a8.5 8.5 0 018 8v.5z" />
  </svg>
`;
```

### 5. Search Icon
```typescript
const searchIcon = `
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="1.8"
       stroke-linecap="round">
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.3-4.3" />
  </svg>
`;
```

### 6. Settings/Gear Icon
```typescript
const settingsIcon = `
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="1.8"
       stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 004.6 15a1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09A1.65 1.65 0 004.6 9 1.65 1.65 0 004.27 7.18l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z" />
  </svg>
`;
```

### 7. Home Icon
```typescript
const homeIcon = `
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="1.8"
       stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
`;
```

### 8. User/Profile Icon
```typescript
const userIcon = `
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="1.8"
       stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0116 0" />
  </svg>
`;
```

## 🛠️ Using Icon Libraries

### From Heroicons (Recommended)

1. Visit [heroicons.com](https://heroicons.com)
2. Find your icon
3. Copy the SVG code
4. Adjust dimensions to 22x22 for consistency:

```typescript
// Before (from Heroicons)
const icon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="..." />
</svg>`;

// After (optimized for FAB)
const icon = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="..." />
</svg>`;
```

### From Lucide Icons

1. Visit [lucide.dev](https://lucide.dev)
2. Find your icon
3. Copy SVG code
4. Already optimized for use!

### From Feather Icons

1. Visit [feathericons.com](https://feathericons.com)
2. Click on icon
3. Copy SVG markup
4. Use directly (already 24x24 viewBox)

## 💡 Best Practices

### 1. Consistent Sizing
Always use `width="22" height="22"` for icons:
```typescript
icon: '<svg width="22" height="22" viewBox="0 0 24 24">...</svg>'
```

### 2. Use currentColor
Let the component control the color:
```typescript
stroke="currentColor"  // Good ✅
stroke="#5DD5D7"       // Bad ❌ (hardcoded)
```

### 3. Optimize Stroke Width
Use 1.6-1.8 for best appearance:
```typescript
stroke-width="1.8"  // Recommended
```

### 4. Keep ViewBox Standard
Use `viewBox="0 0 24 24"` for consistency:
```typescript
viewBox="0 0 24 24"  // Standard ✅
viewBox="0 0 16 16"  // Avoid ❌
```

## 🔧 Advanced: Icon Helper

Create a helper for easier management:

```typescript
// icons.ts
export const ICONS = {
  dashboard: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>`,

  analytics: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-9" /><path d="M14 6h7v7" /></svg>`,

  // Add more...
} as const;

// Usage
const fabItems: FabItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    sub: 'Overview & analytics',
    tone: 'cyan',
    icon: ICONS.dashboard
  },
  {
    id: 'analytics',
    label: 'Analytics',
    sub: 'Data insights',
    tone: 'violet',
    icon: ICONS.analytics
  }
];
```

## 🎨 Custom SVG Icons

### Create Your Own

```typescript
const customIcon = `
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
    <!-- Your paths here -->
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v4l2 2" />
  </svg>
`;
```

### From Figma/Sketch

1. Export as SVG
2. Open in text editor
3. Remove unnecessary attributes:
   - `xmlns:xlink`
   - `id` attributes
   - `class` attributes
4. Set `stroke="currentColor"`
5. Adjust `width` and `height` to 22

## 📦 Icon Font Alternative

If you prefer icon fonts (Font Awesome, Material Icons):

```typescript
// Using Font Awesome classes
const item: FabItem = {
  id: 'home',
  label: 'Home',
  tone: 'cyan',
  icon: '<i class="fas fa-home"></i>'  // Font Awesome
};

// Using Material Icons
icon: '<span class="material-icons">home</span>'
```

**Note**: You'll need to include the icon font stylesheet in your app.

## 🎯 Summary

**Easiest Method:**
1. Visit heroicons.com or lucide.dev
2. Find your icon
3. Copy SVG code
4. Set width/height to 22
5. Paste into `icon` property

**That's it!** The component handles the rest automatically. 🚀

---

For more examples, see [EXAMPLES.md](EXAMPLES.md#custom-icons)
