---
title: Range Limits
description: Learn how to customize sizing range limits.
date: 2021-01-04
---

## Range Limits

Size based properties such as `width` and `margin` utilize the [size maps](/docs/sizing-system) to generate each variant, however, each of these properties pull different range of sizes. The `range-limits` setting allows you to control how many sizes are pulled to generate the variants for each size based property.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Default Range Limits

The following default range limit configurations are applied for each property type. For each property, the list represents the beginning and end range of supported size levels. For example, `(1, 32)` means that up to `32` levels of sizes are supported.

```scss
@use "uniform" as * with (
  $config: (
    range-limits: (
      margin: (1, 32),
      padding: (1, 32),
      width: (1, 36),
      min-width: (24, 36),
      max-width: (24, 42),
      height: (1, 36),
      min-height: (24, 36),
      max-height: (24, 36),
      gap: (1, 32),
      gutter: (1, 32),
      border-width: (1, 4),
      top: (1, 32),
      right: (1, 32),
      bottom: (1, 32),
      left: (1, 32),
      translate: (1, 32)
    ),
  )
);
```

---

## Customizing Range Limits

You can customize range limit by passing in key value pairs to the `range-limits` setting in your configuration.


```scss
// main.scss

@use "uniform" as * with (
  $config: (
    range-limits: (
      margin: (1, 3),
      padding: (1, 3)
    ),
  )
);
```

```css
/* main.css */

.mt-1 {
  margin-top: 1px;
}

.mt-2 {
  margin-top: 2px;
}

.mt-3 {
  margin-top: 3px;
}

.p-1 {
 padding: 1px;
}

.p-2 {
 padding: 2px;
}

.p-3 {
 padding: 3px;
}

```
