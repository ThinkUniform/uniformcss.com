---
title: Gutter
description: Learn about the gutter special utility.
date: 2021-01-08
---

## About Gutter

The `gutter` utility applies margin-based horizontal or vertical spacing of child elements using the [Lobotomized Owl](https://alistapart.com/article/axiomatic-css-and-lobotomized-owls/) selector technique. This utility is useful in situations where you need to quickly apply equal spacing between child elements.

> **Important** the `gutter` special utility will most likely be reduced in range limit once flexbox `gap` becomes more widely supported by browsers.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Basic Usage

To apply `gutter`, assign the class `gutter-x-<size>` or `gutter-y-<size>` to any parent element.

<div class="flex radius-md bg-gray-50 p-20 gutter-x-20 mb-20">
  <div class="flex align-items-center justify-content-center w-40 h-40 radius-sm bg-gray-500 color-white">1</div>
  <div class="flex align-items-center justify-content-center w-40 h-40 radius-sm bg-gray-500 color-white">2</div>
  <div class="flex align-items-center justify-content-center w-40 h-40 radius-sm bg-gray-500 color-white">3</div>
  <div class="flex align-items-center justify-content-center w-40 h-40 radius-sm bg-gray-500 color-white">4</div>
</div>

```html
<div class="gutter-x-20">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>
```

```css
.gutter-x-20 > * + * {
  --gutter-right: 0;
  --gutter-left: 1;
  margin: 0 calc(1.25rem * var(--gutter-right)) 0 calc(1.25rem * var(--gutter-left));
}
```

---

## Gutter Reverse

You can reverse direction of the `margin` that is applied by assigning the `gutter-reverse` utility, this can be useful in situations where `flex-row-reverse` or `flex-col-reverse` is applied.

<div class="flex flex-row-reverse radius-md bg-gray-50 p-20 gutter-x-20 gutter-reverse mb-20">
  <div class="flex align-items-center justify-content-center w-40 h-40 radius-sm bg-gray-500 color-white">1</div>
  <div class="flex align-items-center justify-content-center w-40 h-40 radius-sm bg-gray-500 color-white">2</div>
  <div class="flex align-items-center justify-content-center w-40 h-40 radius-sm bg-gray-500 color-white">3</div>
  <div class="flex align-items-center justify-content-center w-40 h-40 radius-sm bg-gray-500 color-white">4</div>
</div>

```html
<div class="flex flex-row-reverse gutter-x-20 gutter-reverse">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>
```

---

## Disabling Gutter

To disable this special utility, simply pass in the `gutter` properties to the `excludes` setting in your configuration.

```scss
@use "uniform" as * with (
  $config: (
    excludes: (
      gutter-x,
      gutter-y,
      gutter-reverse,     
    )
  )
);
```
