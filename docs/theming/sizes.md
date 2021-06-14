---
title: Sizes
description: Learn how to customize default sizing units.
date: 2021-01-04
---

## Sizes

Sizes are applied in varying degree of ranges across size related property such as `width` and `margin`. Sizing units can be extended, replaced, or overwritten through your configuration. For more information on sizes, visit [Sizing System](/docs/sizing-system)

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Customizing via Sass

Size settings are available as two groups, `positive-sizes` and `negative-sizes`. You can add your own sizes by passing in key value pairs to each of these maps in your configuration.

```scss
// main.scss
@use "uniform" as * with (
  $config: (
    positive-sizes: (
      400: 400px
    ),
    negative-sizes: (
      n400: -400px
    )
  )
);
```

```css
/* main.css */
.mt-400 {
  margin-top: 400px;
}
.mt-n400 {
  margin-top: -400px;
}
...
```

### Why are there two groups?

During the Sass compilation process, the sizing maps are shared and used to generate size related properties. However, negative sizes are only used for properties such as `translate` and `margin` and do not apply to properties such as `width` and `padding`.

---

## Disabling Defaults

You can remove all default radiuses by passing `null` to the `positive-sizes` or `negative-sizes` settings.

```scss
@use "uniform" as * with (
  $config: (
    positive-sizes: null,
    negative-sizes: null
  )
)
