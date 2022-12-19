---
title: Border Radiuses
description: Visual reference of all default radiuses.
date: 2021-01-03
---

## Visual Reference

The following table visually represents all the radiuses that are available.

| Reference | Class | Pixels | Rem |
| - | - | - | - |
| <div class="w-64 h-64 radius-none bg-black"></div> | `radius-none` | 0px | 0rem |
| <div class="w-64 h-64 radius-2xs bg-black"></div> | `radius-2xs` | 3px | 0.1875rem |
| <div class="w-64 h-64 radius-xs bg-black"></div> | `radius-xs` | 4px | 0.25rem |
| <div class="w-64 h-64 radius-sm bg-black"></div> | `radius-sm` | 6px | 0.375rem |
| <div class="w-64 h-64 radius-md bg-black"></div> | `radius-md` | 8px | 0.5rem |
| <div class="w-64 h-64 radius-lg bg-black"></div> | `radius-lg` | 12px | 0.75rem |
| <div class="w-64 h-64 radius-xl bg-black"></div> | `radius-xl` | 16px | 1rem |
| <div class="w-64 h-64 radius-2xl bg-black"></div> | `radius-2xl` | 24px | 1.5rem |
| <div class="w-64 h-64 radius-full bg-black"></div> | `radius-full` | 9999px | 9999px |



{ .text-left }

---

## Basic Usage

Apply border radiuses with the `radius-<size>` utility.

```html
<div class="radius-lg ...">
  ...
</div>
```

---

## CSS Variables

Customize radiuses by overriding the following CSS custom properties.

```css
:root {
  --radius-2xs: 0.1875rem;
  --radius-xs: 0.25rem;
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-2xl: 1.5rem;
}
```

