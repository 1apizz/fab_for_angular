# Vertical Switcher FAB - Usage Examples

This document provides comprehensive usage examples for the Vertical Switcher FAB library.

## Table of Contents

1. [Basic Usage](#basic-usage)
2. [Glass Variant](#glass-variant)
3. [Solid Variant](#solid-variant)
4. [Custom Icons](#custom-icons)
5. [Positioning](#positioning)
6. [Theming](#theming)
7. [Without Toast Notifications](#without-toast-notifications)
8. [Dynamic Items](#dynamic-items)

---

## Basic Usage

The simplest implementation with default settings:

```typescript
import { Component } from '@angular/core';
import { FabComponent, FabItem } from 'vertical-switcher-fab';

@Component({
  selector: 'app-root',
  imports: [FabComponent],
  template: `
    <vsf-fab
      [items]="fabItems"
      [currentProductId]="currentProductId"
      (productChange)="onProductChange($event)"
    ></vsf-fab>
  `
})
export class AppComponent {
  currentProductId = 'dashboard';

  fabItems: FabItem[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      sub: 'Overview & analytics',
      tone: 'cyan',
      icon: '<svg>...</svg>',
      current: true
    },
    {
      id: 'analytics',
      label: 'Analytics',
      sub: 'Data & insights',
      tone: 'violet',
      icon: '<svg>...</svg>'
    }
  ];

  onProductChange(item: FabItem) {
    console.log('Switched to:', item.label);
    this.currentProductId = item.id;
  }
}
```

---

## Glass Variant

Use the iOS-style liquid glass effect (default):

```typescript
@Component({
  selector: 'app-glass',
  imports: [FabComponent],
  template: `
    <vsf-fab
      [items]="items"
      [variant]="'glass'"
      [position]="'right'"
      (productChange)="handleChange($event)"
    ></vsf-fab>
  `
})
export class GlassExampleComponent {
  items: FabItem[] = [...];

  handleChange(item: FabItem) {
    // Handle product change
  }
}
```

### Glass Variant Features:
- Backdrop blur effect
- Morphing FAB-to-menu animation
- Stacked coaster layers
- Unified glass card menu

---

## Solid Variant

Traditional material design style:

```typescript
@Component({
  selector: 'app-solid',
  imports: [FabComponent],
  template: `
    <vsf-fab
      [items]="items"
      [variant]="'solid'"
      [position]="'right'"
      (productChange)="handleChange($event)"
    ></vsf-fab>
  `
})
export class SolidExampleComponent {
  items: FabItem[] = [...];

  handleChange(item: FabItem) {
    // Handle product change
  }
}
```

### Solid Variant Features:
- Material design shadows
- Separate pill items
- Corner badge indicator
- Traditional expand animation

---

## Custom Icons

Icons should be provided as SVG strings. Here are examples for different types:

### Simple Icon

```typescript
const trendIcon = `
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="1.8"
       stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 17l6-6 4 4 8-9" />
    <path d="M14 6h7v7" />
  </svg>
`;

const item: FabItem = {
  id: 'analytics',
  label: 'Analytics',
  sub: 'Data insights',
  tone: 'cyan',
  icon: trendIcon
};
```

### Complex Icon (Star/Badge)

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

### Icon with Decorative Elements

```typescript
const decorativeIcon = `
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="1.6"
       stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="9.5" />
    <path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4" />
    <path d="M5.4 5.4l1.7 1.7M16.9 16.9l1.7 1.7M18.6 5.4l-1.7 1.7M7.1 16.9l-1.7 1.7" />
  </svg>
`;
```

---

## Positioning

### Right Position (Default)

```html
<vsf-fab
  [items]="items"
  [position]="'right'"
></vsf-fab>
```

Place FAB in bottom-right corner.

### Left Position

```html
<vsf-fab
  [items]="items"
  [position]="'left'"
></vsf-fab>
```

Place FAB in bottom-left corner.

---

## Theming

### Using CSS Custom Properties

Override the default theme in your global styles:

```scss
:root {
  // Brand colors
  --vsf-cyan: #00c9a7;
  --vsf-pink: #ff6b9d;
  --vsf-gold: #ffd93d;

  // Surfaces (dark theme)
  --vsf-bg: #1a1a2e;
  --vsf-surface: #16213e;
  --vsf-ink: #ffffff;

  // Typography
  --vsf-ff-body: 'Inter', sans-serif;
  --vsf-ff-display: 'Poppins', sans-serif;
}
```

### Light Theme

Add a light theme variant:

```scss
[data-theme='light'] {
  --vsf-bg: #f5f5f5;
  --vsf-surface: #ffffff;
  --vsf-ink: #1a1a2e;
  --vsf-border: #e0e0e0;
}
```

Then toggle the theme:

```typescript
document.body.setAttribute('data-theme', 'light');
```

---

## Without Toast Notifications

Disable toast notifications:

```html
<vsf-fab
  [items]="items"
  [showToast]="false"
  (productChange)="handleChange($event)"
></vsf-fab>
```

This is useful if you want to handle notifications yourself.

---

## Dynamic Items

### Adding Items Dynamically

```typescript
@Component({...})
export class DynamicComponent {
  items: FabItem[] = [
    { id: 'home', label: 'Home', sub: '', tone: 'cyan', icon: '...', current: true }
  ];

  addItem() {
    const newItem: FabItem = {
      id: `item-${Date.now()}`,
      label: 'New Product',
      sub: 'Just added',
      tone: 'violet',
      icon: '<svg>...</svg>'
    };
    this.items = [...this.items, newItem];
  }

  removeItem(id: string) {
    this.items = this.items.filter(item => item.id !== id);
  }
}
```

### Conditional Items

```typescript
@Component({...})
export class ConditionalComponent {
  isPremiumUser = false;

  get items(): FabItem[] {
    const baseItems: FabItem[] = [
      { id: 'home', label: 'Home', tone: 'cyan', icon: '...' }
    ];

    if (this.isPremiumUser) {
      baseItems.push({
        id: 'premium',
        label: 'Premium',
        sub: 'Exclusive features',
        tone: 'gold',
        icon: '...'
      });
    }

    return baseItems;
  }
}
```

---

## Advanced Example: Full Integration

Complete example with routing integration:

```typescript
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FabComponent, FabItem } from 'vertical-switcher-fab';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [FabComponent, RouterOutlet],
  template: `
    <router-outlet></router-outlet>

    <div class="fab-wrapper">
      <vsf-fab
        [items]="fabItems"
        [variant]="'glass'"
        [position]="'right'"
        [currentProductId]="currentRoute"
        (productChange)="navigateTo($event)"
      ></vsf-fab>
    </div>
  `,
  styles: [`
    .fab-wrapper {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 1000;
    }
  `]
})
export class AppComponent implements OnInit {
  currentRoute = 'dashboard';

  fabItems: FabItem[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      sub: 'Overview & analytics',
      tone: 'cyan',
      icon: `<svg>...</svg>`,
      current: true
    },
    {
      id: 'analytics',
      label: 'Analytics',
      sub: 'Data & insights',
      tone: 'violet',
      icon: `<svg>...</svg>`
    },
    {
      id: 'messages',
      label: 'Messages',
      sub: '12 unread',
      tone: 'pink',
      icon: `<svg>...</svg>`
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    // Update current route on navigation
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const route = event.urlAfterRedirects.split('/')[1];
        this.currentRoute = route || 'dashboard';
      });
  }

  navigateTo(item: FabItem) {
    this.router.navigate(['/', item.id]);
    this.currentRoute = item.id;
  }
}
```

---

## Best Practices

1. **Icon Size**: Keep SVG viewBox at `0 0 24 24` for consistency
2. **Tone Selection**: Match tone to your brand (cyan for tech, pink for entertainment, gold for premium)
3. **Labels**: Keep labels short (1-2 words) for best display
4. **Subtitles**: Use subtitles for context (e.g., "4,200 live events")
5. **Current Item**: Always mark one item as `current: true` for initial state

---

For more information, see the [Library README](projects/vertical-switcher-fab/README.md).
