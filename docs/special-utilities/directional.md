---
title: Directional
description: Learn about directional shorthand special utilities
date: 2021-01-08
---

## About directional shorthands

In Uniform, directional utilities such as `padding`, `margin`, and `border` can be applied both horizontally and vertically, saving you from having to apply the utility twice in order to achieve a `left` `right` or `top` `bottom` applied result.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Basic Usage

To apply directional utilities horizontally or vertically, append `x` or `y` to define direction.

```html
<div class="px-20 my-36 border-x-1 x-20 xy-0 ...">
  <!--
  - 20px padding, left and right
  - 36px margin, top and bottom
  - 1px border-width, left and right
  - 20px left and right
  - 0px top, right, bottom, left
  -->
</div>
```

---

## Disabling Wrapper

To disable, simply pass in the utility name to the `excludes` setting in your configuration. The following properties have directional shorthands enabled.

```scss
@use "uniform" as * with (
  $config: (
    excludes: (
      padding-x,
      padding-y,
      margin-x,
      margin-y,
      border-x-width,
      border-y-width,
      x,
      y,
      xy
    )
  )
);
```