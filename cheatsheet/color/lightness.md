---
title: Lightness
description: Visual reference of all default tints and shades.
date: 2021-01-03
---

## Visual Reference

The following table visually represents all lightness levels that are available.

| Reference | Shade | Lightness |
| - | - | - |
| { .bg-primary .bg-white } | `white` | 100% |
| { .bg-primary .bg-50 } | `50` | 95% |
| { .bg-primary .bg-100 } | `100` | 90% |
| { .bg-primary .bg-150 } | `150` | 85% |
| { .bg-primary .bg-200 } | `200` | 80% |
| { .bg-primary .bg-250 } | `250` | 75% |
| { .bg-primary .bg-300 } | `300` | 70% |
| { .bg-primary .bg-350 } | `350` | 65% |
| { .bg-primary .bg-400 } | `400` | 60% |
| { .bg-primary .bg-450 } | `450` | 55% |
| { .bg-primary .bg-500 } | `500` | 50% |
| { .bg-primary .bg-550 } | `550` | 45% |
| { .bg-primary .bg-600 } | `600` | 40% |
| { .bg-primary .bg-650 } | `650` | 35% |
| { .bg-primary .bg-700 } | `700` | 30% |
| { .bg-primary .bg-750 } | `750` | 25% |
| { .bg-primary .bg-800 } | `800` | 20% |
| { .bg-primary .bg-850 } | `850` | 15% |
| { .bg-primary .bg-900 } | `900` | 10% |
| { .bg-primary .bg-950 } | `950` | 5% |
| { .bg-primary .bg-black } | `black` | 0% |

{ .text-left }

---

## Basic Usage

Combine shade properties to any color property to change the lightness of the color.

```html
<div class="bg-primary bg-400 hover.bg-550">
  ...
</div>
```

---

## CSS Variables

Customize the lightness levels by overriding the lightness CSS variables.

```css
:root {
  --ltn-white: 100%;
  --ltn-50: 95%;
  --ltn-100: 90%;
  --ltn-150: 85%;
  --ltn-200: 80%;
  --ltn-250: 75%;
  --ltn-300: 70%;
  --ltn-350: 65%;
  --ltn-400: 60%;
  --ltn-450: 55%;
  --ltn-500: 50%;
  --ltn-550: 45%;
  --ltn-600: 40%;
  --ltn-650: 35%;
  --ltn-700: 30%;
  --ltn-750: 25%;
  --ltn-800: 20%;
  --ltn-850: 15%;
  --ltn-900: 10%;
  --ltn-950: 5%;
  --ltn-black: 0%;
}
```

