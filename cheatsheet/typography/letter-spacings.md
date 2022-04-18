---
title: Letter Spacings
description: Visual reference of all default letter-spacings.
date: 2021-01-03
---

## Visual Reference

The following table visually represents all the letter-spacings that are available.

| Reference                                                                   | Class               | Tracking |
| --------------------------------------------------------------------------- | ------------------- | -------- |
| <span class="regular color-black text-3xl tracking-tightest">Uniform</span> | `tracking-tightest` | -0.08em  |
| <span class="regular color-black text-3xl tracking-tighter">Uniform</span>  | `tracking-tighter`  | -0.04em  |
| <span class="regular color-black text-3xl tracking-tight">Uniform</span>    | `tracking-tight`    | -0.02em  |
| <span class="regular color-black text-3xl tracking-normal">Uniform</span>   | `tracking-normal`   | 0        |
| <span class="regular color-black text-3xl tracking-loose">Uniform</span>    | `tracking-loose`    | 0.02em   |
| <span class="regular color-black text-3xl tracking-looser">Uniform</span>   | `tracking-looser`   | 0.04em   |
| <span class="regular color-black text-3xl tracking-loosest">Uniform</span>  | `tracking-loosest`  | 0.08em   |

{ .text-left }

---

## Basic Usage

Apply the `tracking-<variant>` utility to any text based element.

```html
<h1 class="tracking-tight">H1 Heading</h1>
```

---

## CSS Variables

You can customize each `tracking` by overriding the following CSS custom properties.

```css
:root {
  --tracking-tightest: -0.08em;
  --tracking-tighter: -0.04em;
  --tracking-tight: -0.02em;
  --tracking-normal: 0;
  --tracking-loose: 0.02em;
  --tracking-looser: 0.04em;
  --tracking-loosest: 0.08em;
}
```
