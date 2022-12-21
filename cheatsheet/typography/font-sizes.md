---
title: Font Sizes
description: <span class="color-heading-accent">Neatly organized</span> visual <br class="hidden sm.inline">reference for all font sizes
date: 2021-01-03
---

## Visual Reference

The following table visually represents all the font-sizes that are available.

:::markdown overflow-auto
| Size | Class | Pixel | Rem |
| - | - | - | - |
| <span class="semibold color-white text-2xs">2xs</span> | `text-2xs` | 10px | 0.625rem |
| <span class="semibold color-white text-xs">xs</span> | `text-xs` | 12px | 0.75rem |
| <span class="semibold color-white text-sm">sm</span> | `text-sm` | 14px | 0.875rem |
| <span class="semibold color-white text-md">md</span> | `text-md` | 16px | 1rem |
| <span class="semibold color-white text-lg">lg</span> | `text-lg` | 18px | 1.125rem |
| <span class="semibold color-white text-xl">xl</span> | `text-xl` | 20px | 1.25rem |
| <span class="semibold color-white text-2xl">2xl</span> | `text-2xl` | 24px | 1.5rem |
| <span class="semibold color-white text-3xl">3xl</span> | `text-3xl` | 28px | 1.75rem |
| <span class="semibold color-white text-4xl">4xl</span> | `text-4xl` | 32px | 2rem |
| <span class="semibold color-white text-5xl">5xl</span> | `text-5xl` | 36px | 2.25rem |
| <span class="semibold color-white text-6xl">6xl</span> | `text-6xl` | 40px | 2.5rem |
| <span class="semibold color-white text-7xl">7xl</span> | `text-7xl` | 48px | 3rem |
| <span class="semibold color-white text-8xl">8xl</span> | `text-8xl` | 56px | 3.5rem |
| <span class="semibold color-white text-9xl">9xl</span> | `text-9xl` | 64px | 4rem |
| <span class="semibold color-white text-10xl">10xl</span> | `text-10xl` | 72px | 4.5rem |
| <span class="semibold color-white text-11xl">11xl</span> | `text-11xl` | 80px | 5rem |
| <span class="semibold color-white text-12xl">12xl</span> | `text-12xl` | 96px | 6rem |

{ .text-left }
:::

---

## Basic Usage

Apply the `text-<size>` utility to any text based element.

```html
<h1 class="text-6xl">
  H1 Heading
</h1>
```

---

## CSS Variables

Customize the `font-size` and `line-height` of each size by overriding the following CSS custom properties.

```css
:root {
  --font-2xs: 0.625rem;
  --font-xs: 0.75rem;
  --font-sm: 0.875rem;
  --font-md: 1rem;
  --font-lg: 1.125rem;
  --font-xl: 1.25rem;
  --font-2xl: 1.5rem;
  --font-3xl: 1.75rem;
  --font-4xl: 2rem;
  --font-5xl: 2.25rem;
  --font-6xl: 2.5rem;
  --font-7xl: 3rem;
  --font-8xl: 3.5rem;
  --font-9xl: 4rem;
  --font-10xl: 4.5rem;
  --font-11xl: 5rem;
  --font-12xl: 6rem;

  --font-2xs-leading: 1.875;
  --font-xs-leading: 1.875;
  --font-sm-leading: 1.75;
  --font-md-leading: 1.75;
  --font-lg-leading: 1.625;
  --font-xl-leading: 1.625;
  --font-2xl-leading: 1.5;
  --font-3xl-leading: 1.375;
  --font-4xl-leading: 1.25;
  --font-5xl-leading: 1.25;
  --font-6xl-leading: 1.25;
  --font-7xl-leading: 1.25;
  --font-8xl-leading: 1.25;
  --font-9xl-leading: 1.125;
  --font-10xl-leading: 1.125;
  --font-11xl-leading: 1.125;
  --font-12xl-leading: 1.125;
}
```

