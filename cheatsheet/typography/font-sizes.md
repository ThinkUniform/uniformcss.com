---
title: Font Sizes
description: Visual reference of all default font sizes.
date: 2021-01-03
---

## Visual Reference

The following table visually represents all the font-sizes that are available.

:::markdown overflow-x-auto overflow-y-hidden
| Size | Class | Pixel | Rem |
| - | - | - | - |
| <span class="semibold color-black text-2xs">2xs</span> | `text-2xs` | 10px | 0.625rem |
| <span class="semibold color-black text-xs">xs</span> | `text-xs` | 12px | 0.75rem |
| <span class="semibold color-black text-sm">sm</span> | `text-sm` | 14px | 0.875rem |
| <span class="semibold color-black text-md">md</span> | `text-md` | 16px | 1rem |
| <span class="semibold color-black text-lg">lg</span> | `text-lg` | 18px | 1.125rem |
| <span class="semibold color-black text-xl">xl</span> | `text-xl` | 20px | 1.25rem |
| <span class="semibold color-black text-2xl">2xl</span> | `text-2xl` | 24px | 1.5rem |
| <span class="semibold color-black text-3xl">3xl</span> | `text-3xl` | 28px | 1.75rem |
| <span class="semibold color-black text-4xl">4xl</span> | `text-4xl` | 32px | 2rem |
| <span class="semibold color-black text-5xl">5xl</span> | `text-5xl` | 36px | 2.25rem |
| <span class="semibold color-black text-6xl">6xl</span> | `text-6xl` | 40px | 2.5rem |
| <span class="semibold color-black text-7xl">7xl</span> | `text-7xl` | 48px | 3rem |
| <span class="semibold color-black text-8xl">8xl</span> | `text-8xl` | 56px | 3.5rem |
| <span class="semibold color-black text-9xl">9xl</span> | `text-9xl` | 64px | 4rem |
| <span class="semibold color-black text-10xl">10xl</span> | `text-10xl` | 72px | 4.5rem |
| <span class="semibold color-black text-11xl">11xl</span> | `text-11xl` | 88px | 5.5rem |
| <span class="semibold color-black text-12xl">12xl</span> | `text-12xl` | 104px | 6.5rem |
| <span class="semibold color-black text-13xl">13xl</span> | `text-13xl` | 120px | 7.5rem |

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
  --font-11xl: 5.5rem;
  --font-12xl: 6.5rem;
  --font-13xl: 7.5rem;

  --font-2xs-leading: var(--leading-loosest);
  --font-xs-leading: var(--leading-loosest);
  --font-sm-leading: var(--leading-looser);
  --font-md-leading: var(--leading-looser);
  --font-lg-leading: var(--leading-loose);
  --font-xl-leading: var(--leading-loose);
  --font-2xl-leading: var(--leading-normal);
  --font-3xl-leading: var(--leading-tight);
  --font-4xl-leading: var(--leading-tighter);
  --font-5xl-leading: var(--leading-tighter);
  --font-6xl-leading: var(--leading-tighter);
  --font-7xl-leading: var(--leading-tighter);
  --font-8xl-leading: var(--leading-tighter);
  --font-9xl-leading: var(--leading-tightest);
  --font-10xl-leading: var(--leading-tightest);
  --font-11xl-leading: var(--leading-tightest);
  --font-12xl-leading: var(--leading-tightest);
  --font-13xl-leading: var(--leading-tightest);
}
```

