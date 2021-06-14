---
title: Gradients
description: Visual reference of all default gradients.
date: 2021-01-03
---


## Visual Reference

The following table visually represents all the gradients that are available.

:::markdown overflow-auto
| Reference | Class | Gradient |
| - | - | - |
| { .bg-linear } | `bg-linear` | `linear-gradient(var(--gradient, to right, #40C6FF 0%, #505BED 100%))` |
| { .bg-radial } | `bg-radial` | `radial-gradient(var(--gradient, circle at 50% 50%, #40c6ff, #505bed))` |
| { .bg-conic } | `bg-conic` | `conic-gradient(var(--gradient, from 90deg at 50% 50%, #40c6ff, #505bed))` |
| { .bg-linear-x-to-black } | `bg-linear-x-from-white` | `linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%)`</code></span>` |
| { .bg-linear-x-from-black } | `bg-linear-x-to-white` | `linear-gradient(to right, rgba(255, 255, 255, 0) 0%, white 100%)` |
| { .bg-linear-y-to-black } | `bg-linear-y-from-white` | `linear-gradient(to bottom, white 0%, rgba(255, 255, 255, 0) 100%)` |
| { .bg-linear-y-from-black } | `bg-linear-y-to-white` | `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, white 100%)` |
| { .bg-linear-x-from-black } | `bg-linear-x-from-black` | `linear-gradient(to right, black 0%, rgba(0, 0, 0, 0) 100%)` |
| { .bg-linear-x-to-black } | `bg-linear-x-to-black` | `linear-gradient(to right, rgba(0, 0, 0, 0) 0%, black 100%)` |
| { .bg-linear-y-from-black } | `bg-linear-y-from-black` | `linear-gradient(to bottom, black 0%, rgba(0, 0, 0, 0) 100%)` |
| { .bg-linear-y-to-black } | `bg-linear-y-to-black` | `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, black 100%)` |

{ .text-left style="--markdown-table-cell-padding: 0.75em;" }
:::



---

## Basic Usage

Combine shade properties to any color property to change the lightness of the color.

```html
<div class="bg-linear-y-from-white ...">
  ...
</div>
```

