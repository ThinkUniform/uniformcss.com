---
title: Blurs
description: Visual reference of all default blurs.
date: 2021-01-03
---

## Visual Reference

The following table visually represents all the blurs that are available.

| Reference | Class | Blur |
| - | - | - |
| <div class="w-32 h-32 m-10 bg-tertiary filter filter-blur-2xs"></div> | `blur-2xs` | 4px |
| <div class="w-32 h-32 m-10 bg-tertiary filter filter-blur-xs"></div> | `blur-xs` | 8px |
| <div class="w-32 h-32 m-10 bg-tertiary filter filter-blur-sm"></div> | `blur-sm` | 12px |
| <div class="w-32 h-32 m-10 bg-tertiary filter filter-blur-md"></div> | `blur-md` | 16px |
| <div class="w-32 h-32 m-10 bg-tertiary filter filter-blur-lg"></div> | `blur-lg` | 24px |
| <div class="w-32 h-32 m-10 bg-tertiary filter filter-blur-xl"></div> | `blur-xl` | 32px |
| <div class="w-32 h-32 m-10 bg-tertiary filter filter-blur-2xl"></div> | `blur-2xl` | 48px |

{ .text-left }

---

## Basic Usage

Blurs only apply to blur related properties such as `filter` and `backdrop-filter`. Apply to blurs using `<property>-blur-<level>`.

```html
<div class="filter filter-blur-xl">
  ...
</div>
```

---


## CSS Variables

Customize blur levels by overriding the following CSS custom properties.

```css
:root {
  --blur-2xs: 4px;
  --blur-xs: 8px;
  --blur-sm: 12px;
  --blur-md: 16px;
  --blur-lg: 24px;
  --blur-xl: 32px;
  --blur-2xl: 48px;
}
```