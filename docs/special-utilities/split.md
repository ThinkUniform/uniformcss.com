---
title: Split
description: Learn about the split special utility.
date: 2021-01-08
---

## About Split

The `split` utility applies horizontal or vertical dividing borders to child elements. This utility is useful in situations where you need to quickly apply dividing borders between child elements.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Basic Usage

To apply `split`, assign the class `split-x-<size>` or `split-y-<size>` to any parent element.

<div class="radius-md bg-tertiary bg-50 split-y-2 px-20 split-cool-gray mb-20">
  <div class="py-10">A</div>
  <div class="py-10">B</div>
  <div class="py-10">C</div>
  <div class="py-10">D</div>
</div>

```html
<div class="split-y-2 split-cool-gray">
  <div class="py-10">A</div>
  <div class="py-10">B</div>
  <div class="py-10">C</div>
  <div class="py-10">D</div>
</div>
```

```css
.split-gray > * + * {
  --split-ltn: 50%;
  --split-opacity: 1;
  border-color: hsla(var(--gray-hue), var(--gray-sat), var(--split-ltn), var(--split-opacity));
}

.split-y-2 > * + * {
  --split-top: 1;
  --split-bottom: 0;
  border-width: calc(var(--size-2) * var(--split-top)) 0 calc(var(--size-2) * var(--split-bottom)) 0;
}
```
---

## Split Widths

The `split` utility behaves similarly to the `border` utility and the same number of width variants apply.

```html
<div class="split-y-1 ...">
  ...
</div>

<div class="split-y-2 ...">
  ...
</div>

<div class="split-y-4 ...">
  ...
</div>

<div class="split-y-6 ...">
  ...
</div>

...
```

---

## Split Reverse

You can reverse direction of the `border` that is applied by assigning the `split-reverse` utility, this can be useful in situations where `flex-row-reverse` or `flex-col-reverse` is applied.

```html
<div class="split-x-2 split-reverse">
  <div>...</div>
  <div>...</div>
  <div>...</div>
  <div>...</div>
</div>
```

---

## Split Manipulation

All `border` related properties such as color, style, and opacity can be applied to the `split` utility.

```html
<div class="split-x-2 split-cool-gray split-300 split-dotted split-opacity-40">
  <div>...</div>
  <div>...</div>
  <div>...</div>
  <div>...</div>
</div>
```

---

## Disabling Split

To disable `split` utilities, pass in each utility name to the `exclude` setting in your configuration.

```scss
@use "uniform" as * with (
  $config: (
    exclude: (
      split-x,
      split-y,
      split-reverse,
      split-color,
      split-opacity,
      split-lightness,
      split-style      
    )
  )
);
```