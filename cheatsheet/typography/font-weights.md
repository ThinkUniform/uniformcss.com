---
title: Font Weights
description: Visual reference of all default font weights.
date: 2021-01-03
---

## Visual Reference

The following table visually represents all the font-weights that are available.

| Reference | Class | Weight |
| - | - | - |
| <span class="ultralight color-white text-3xl">Uniform</span> | `ultralight` | 100 |
| <span class="extralight color-white text-3xl">Uniform</span> | `extralight` | 200 |
| <span class="light color-white text-3xl">Uniform</span> | `light` | 300 |
| <span class="regular color-white text-3xl">Uniform</span> | `regular` | 400 |
| <span class="medium color-white text-3xl">Uniform</span> | `medium` | 500 |
| <span class="semibold color-white text-3xl">Uniform</span> | `semibold` | 600 |
| <span class="bold color-white text-3xl">Uniform</span> | `bold` | 700 |
| <span class="extrabold color-white text-3xl">Uniform</span> | `extrabold` | 800 |
| <span class="ultrabold color-white text-3xl">Uniform</span> | `ultrabold` | 900 |

{ .text-left }

---

## Basic Usage

Apply the `<weight>` utility to any text based element.

```html
<h1 class="extrabold">
  Extrabold Heading
</h1>
```

---

## CSS Variables

You can customize each `font-weight` by overriding the following CSS custom properties.

```css
:root {
  --ultralight: 100;
  --extralight: 200;
  --light: 300;
  --regular: 400;
  --medium: 500;
  --semibold: 600;
  --bold: 700;
  --extrabold: 800;
  --ultrabold: 900;
}
```

