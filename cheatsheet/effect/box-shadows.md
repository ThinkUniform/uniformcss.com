---
title: Box Shadows
description: <span class="color-heading-accent">Neatly organized</span> visual <br class="hidden sm.inline">reference for all shadows
date: 2021-01-03
---

## Drop Shadow Effects

The following table visually represents all drop shadow effects that are available.

<div class="bg-gray-100 p-20 radius-lg">
  <div class="grid grid-cols-1 gap-20">
    <div class="h-40 shadow-2xs bg-white radius-sm"></div>
    <div class="h-40 shadow-xs bg-white radius-sm"></div>
    <div class="h-40 shadow-sm bg-white radius-sm"></div>
    <div class="h-40 shadow-md bg-white radius-sm"></div>
    <div class="h-40 shadow-lg bg-white radius-sm"></div>
    <div class="h-40 shadow-xl bg-white radius-sm"></div>
    <div class="h-40 shadow-2xl bg-white radius-sm"></div>
  </div>
</div>

---

## Semantic Effects

The following table visually represents all input states and other semantic effects that are available.

<div class="bg-gray-100 p-20 radius-lg">
  <div class="grid grid-cols-1 gap-20">
    <input type="text" class="h-40 shadow-focus bg-white radius-sm" placeholder="Focus">
    <input type="text" class="h-40 shadow-success bg-white radius-sm" placeholder="Success">
    <input type="text" class="h-40 shadow-warning bg-white radius-sm" placeholder="Warning">
    <input type="text" class="h-40 shadow-danger bg-white radius-sm" placeholder="Danger">
    <input type="text" class="h-40 shadow-info bg-white radius-sm" placeholder="Info">
  </div>
</div>

---

## Basic Usage

Apply box shadow effect with the `shadow-<size>` utility.

```html
<div class="shadow-lg ...">
  ...
</div>
```

---

## CSS Variables

Customize radiuses by overriding the following CSS custom properties.

```css
:root {
  --shadow-2xs: 0 1px 2px rgba(134, 144, 162, 0.1);
  --shadow-xs: 0 2px 4px rgba(134, 144, 162, 0.15);
  --shadow-sm: 0 3px 6px rgba(134, 144, 162, 0.2);
  --shadow-md: 0 4px 8px rgba(134, 144, 162, 0.25);
  --shadow-lg: 0 6px 12px rgba(134, 144, 162, 0.3);
  --shadow-xl: 0 12px 24px rgba(134, 144, 162, 0.35);
  --shadow-2xl: 0 24px 48px rgba(134, 144, 162, 0.4);
  
  --shadow-focus: 0 0 0 4px rgba(0, 84, 203, 0.2);
  --shadow-success: 0 0 0 4px rgba(18, 181, 57, 0.2);
  --shadow-warning: 0 0 0 4px rgba(210, 127, 0, 0.2);
  --shadow-danger: 0 0 0 4px rgba(203, 18, 0, 0.2);
  --shadow-info: 0 0 0 4px rgba(0, 200, 177, 0.2);
}
```

