---
title: Default Styles
description: Learn about default reset and starter styles
date: 2021-01-05
---

## About Default Styles

By default, Uniform applies reset of styles to flatten browser inconsistencies and provide a stable foundation to build utility properties on. Uniform also applies starter styles to help apply rudimentary formatting to common html elements. Both are optional and can be disabled through your configuration.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Main points worth noting

All elements have no default `margin` or `padding`, and all elements have a transparent border applied to make it easy to apply borders.

```css
* {
  margin: 0;
  padding: 0;
  border: 0 solid transparent;
}
```

Body has a default `line-height` of 1.

```css
body {
  min-height: 100vh;
  line-height: 1;
  text-rendering: optimizeSpeed;
}
```

All media elements are set to `display: block`.

```css
img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  max-width: 100%;
}
```

---

## Disabling Default Styles

If you prefer to exclude default styles from your build, simply pass the following `exclude` setting in your configuration.

```scss
@use "uniform" as * with (
  $config: (
    exclude: (
      reset,
      starter
    )
  )
);
```
