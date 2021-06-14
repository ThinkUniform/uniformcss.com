---
title: Base Colors
description: Visual reference of all default colors.
date: 2021-01-03
---

## Visual Reference

The following table visually represents all the colors that are available.

| Color | Name | HSL |
| - | - | - |
| { .bg-red } | `red` | h0 s50 l50 |
| { .bg-firebrick } | `firebrick` | h10 s60 l50 |
| { .bg-orange } | `orange` | h20 s70 l50 |
| { .bg-gold } | `gold` | h40 s90 l50 |
| { .bg-yellow } | `yellow` | h50 s100 l50 |
| { .bg-lime } | `lime` | h80 s70 l50 |
| { .bg-green } | `green` | h110 s60 l50 |
| { .bg-cyan } | `cyan` | h190 s60 l50 |
| { .bg-blue } | `blue` | h220 s70 l50 |
| { .bg-purple } | `purple` | h260 s90 l50 |
| { .bg-violet } | `violet` | h280 s70 l50 |
| { .bg-pink } | `pink` | h310 s60 l50 |
| { .bg-white } | `white` | h0 s0 l100 |
| { .bg-black } | `black` | h0 s0 l0 |
| { .bg-cool-gray } | `cool-gray` | h220 s10 l50 |
| { .bg-gray } | `gray` | h0 s0 l50 |
| { .bg-warm-gray } | `warm-gray` | h24 s10 l50 |
| { .bg-primary } | `primary` | h220 s80 l50 |
| { .bg-secondary } | `secondary` | h220 s60 l50 |
| { .bg-tertiary } | `tertiary` | h220 s40 l50 |
| { .bg-success } | `success` | h80 s60 l50 |
| { .bg-warning } | `warning` | h40 s60 l50 |
| { .bg-danger } | `danger` | h0 s60 l50 |


{ .text-left }

---

## Basic Usage

To apply colors, use the syntax `<property>-<color>`.

```html
<div class="bg-red">
  ...
</div>

<div class="border-blue border-1">
  ...
</div>

<h1 class="color-orange">
  ...
</h1>
```

---

## CSS Variables

Customize hue and saturation of colors by overriding the following CSS custom properties.

```css
:root {
  --red-hue: 5;
  --red-sat: 70%;
  --firebrick-hue: 15;
  --firebrick-sat: 75%;
  --orange-hue: 25;
  --orange-sat: 90%;
  --gold-hue: 35;
  --gold-sat: 90%;
  --yellow-hue: 50;
  --yellow-sat: 90%;
  --lime-hue: 80;
  --lime-sat: 70%;
  --green-hue: 120;
  --green-sat: 70%;
  --cyan-hue: 188;
  --cyan-sat: 70%;
  --blue-hue: 214;
  --blue-sat: 100%;
  --purple-hue: 258;
  --purple-sat: 85%;
  --violet-hue: 270;
  --violet-sat: 100%;
  --pink-hue: 288;
  --pink-sat: 75%;
  
  --white-hue: 0;
  --white-sat: 0%;
  --black-hue: 0;
  --black-sat: 0%;
  
  --cool-gray-hue: 220;
  --cool-gray-sat: 10%;
  --gray-hue: 0;
  --gray-sat: 0%;
  --warm-gray-hue: 24;
  --warm-gray-sat: 10%;

  --primary-hue: 220;
  --primary-sat: 80%;
  --secondary-hue: 220;
  --secondary-sat: 60%;
  --tertiary-hue: 220;
  --tertiary-sat: 40%;

  --success-hue: 80;
  --success-sat: 60%;
  --warning-hue: 40;
  --warning-sat: 60%;
  --danger-hue: 0;
  --danger-sat: 60%;
}
```

