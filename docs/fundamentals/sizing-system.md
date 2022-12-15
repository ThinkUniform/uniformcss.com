---
title: Sizing System
description: <span class="color-heading-accent">Flexible sizing system</span> for pixel perfect adjustments.
date: 2021-01-02
---

## Sizing System

Uniform provides a broad range of sizes to help you achieve pixel perfect sizing. All sizes are implemented in `rem` however represented as the numerical `px` equivalent for easier reference. Most common pixel sizes are support by default.



---

## Sizes

Uniform supports the following sizes out of the box. These sizes are applied in varying degree of ranges across size related property such as `width` and `margin`. For a visual reference, refer to the [cheatsheet](/cheatsheet/sizing-scales).

| Level | Size | Pixel | Rem |
| - | - | - | - |
| 1 | `size-1` | 1px | 0.0625rem |
| 2 | `size-2` | 2px | 0.125rem |
| 3 | `size-4` | 4px | 0.25rem |
| 4 | `size-6` | 6px | 0.375rem |
| 5 | `size-8` | 8px | 0.5rem |
| 6 | `size-10` | 10px | 0.625rem |
| 7 | `size-12` | 12px | 0.75rem |
| 8 | `size-14` | 14px | 0.875rem |
| 9 | `size-16` | **16px** | **1rem (base)** |
| 10 | `size-18` | 18px | 1.125rem |
| 11 | `size-20` | 20px | 1.25rem |
| 12 | `size-24` | 24px | 1.5rem |
| 13 | `size-28` | 28px | 1.75rem |
| 14 | `size-32` | 32px | 2rem |
| 15 | `size-36` | 36px | 2.25rem |
| 16 | `size-40` | 40px | 2.5rem |
| 17 | `size-48` | 48px | 3rem |
| 18 | `size-56` | 56px | 3.5rem |
| 19 | `size-64` | 64px | 4rem |
| 20 | `size-72` | 72px | 4.5rem |
| 21 | `size-80` | 80px | 5rem |
| 22 | `size-96` | 96px | 6rem |
| 23 | `size-112` | 112px | 7rem |
| 24 | `size-128` | 128px | 8rem |
| 25 | `size-144` | 144px | 9rem |
| 26 | `size-160` | 160px | 10rem |
| 27 | `size-192` | 192px | 12rem |
| 28 | `size-224` | 224px | 14rem |
| 29 | `size-256` | 256px | 16rem |
| 30 | `size-288` | 288px | 18rem |
| 31 | `size-320` | 320px | 20rem |
| 32 | `size-384` | 384px | 24rem |
| 33 | `size-448` | 448px | 28rem |
| 34 | `size-512` | 512px | 32rem |
| 35 | `size-576` | 576px | 36rem |
| 36 | `size-640` | 640px | 40rem |
| 37 | `size-768` | 768px | 48rem |
| 38 | `size-896` | 896px | 56rem |
| 39 | `size-1024` | 1024px | 64rem |
| 40 | `size-1152` | 1152px | 72rem |
| 41 | `size-1280` | 1280px | 80rem |
| 42 | `size-1536` | 1536px | 96rem |



---

## Basic Usage

To apply colors, use the property shorthand followed by the color key.

```html
<div class="w-32 h-32">
  32px width
  32px height
</div>

<div class="mb-36">
  36px margin-bottom
</div>

<div class="mb-20 md.mb-24">
  20px margin-bottom on mobile
  24px margin-bottom on medium screen
</div>
```
