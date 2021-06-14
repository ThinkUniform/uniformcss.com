---
title: Gradients
description: Learn how to customize and manipulate gradients.
date: 2021-01-02
---

## About Gradients

Uniform provides inline gradient support using the `bg-linear` utility. You can also add your own gradients using the `gradients` theme setting in your configuration. By default, Uniform also provides basic to and from, white and black gradients for horizontal and vertical directions.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Applying Inline Gradient

To apply inline gradients, add the class `bg-linear`, `bg-radial`, or `bg-conic` to any element and override the `--gradient` CSS variable with your gradient.

```html
<div class="bg-linear" style="--gradient: to right, #ffbebe, #4eff9d;">
  ...
</div>

<div class="bg-conic" style="--gradient: from 90deg at 50% 50%, #1f005c, #5b0060, #870160, #ac255e, #ca485c, #e16b5c, #f39060, #ffb56b;">
  ...
</div>
```

---

## Default Gradients

The following default gradient configurations are applied. To see a more visual reference of all the gradients, visit [Cheatsheet](/cheatsheet/gradients).

```scss
@use "uniform" as * with (
  $config: (
    gradients: (
      linear: linear-gradient(var(--gradient, to right, #40C6FF 0%, #505BED 100%)),
      radial: radial-gradient(var(--gradient, circle at 50% 50%, #40c6ff, #505bed)),
      conic: conic-gradient(var(--gradient, from 90deg at 50% 50%, #40c6ff, #505bed)),
      gradient-x-from-white: linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%),
      gradient-x-to-white: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%),
      gradient-y-from-white: linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%),
      gradient-y-to-white: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%),
      gradient-x-from-black: linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%),
      gradient-x-to-black: linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%),
      gradient-y-from-black: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%),
      gradient-y-to-black: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%),
    )
  )
)
```

---

## Customizing via Sass

You can add your own gradients by passing in key value pairs to the `gradients` map in your configuration.

```scss
// main.scss

@use "uniform" as * with (
  $config: (
    gradients: (
      custom-gradient: linear-gradient(to right, red 0%, blue 100%)
    )
  )
)
```

```css
/* main.css */

.bg-custom-gradient {
  background: linear-gradient(to right, red 0%, blue 100%);
}
```

---

## Customizing via CDN

If you are using the CDN implementation, you can override the following gradient variable.

```css
/* main.css */

:root {
  --linear: linear-gradient(var(--gradient, to right, #40C6FF 0%, #505BED 100%)),
  --radial: radial-gradient(var(--gradient, circle at 50% 50%, #40c6ff, #505bed)),
  --conic: conic-gradient(var(--gradient, from 90deg at 50% 50%, #40c6ff, #505bed)),
}
```

---

## Disabling Defaults

You can remove all default gradients by passing `null` to the `gradients` setting.

```scss
@use "uniform" as * with (
  $config: (
    gradients: null
  )
)
