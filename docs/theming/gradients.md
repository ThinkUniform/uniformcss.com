---
title: Gradients
description: <span class="color-heading-accent">Customize gradients</span> settings in Uniform CSS
date: 2021-01-02
---

## About Gradients

Uniform provides inline gradient support using the `bg-linear` utility. You can also add your own gradients using the `gradients` theme setting in your configuration.



---

## Applying Inline Gradient

To apply inline gradients, add the class `bg-linear`, `bg-radial`, or `bg-conic` to any element and override the `--<type>-gradient` CSS variable with your gradient value.

```html
<div class="bg-linear" style="--linear-gradient: to right, #40C6FF 0%, #505BED 100%;">
  ...
</div>

<div class="bg-radial" style="--radial-gradient: circle at 50% 50%, #40c6ff, #505bed;">
  ...
</div>

<div class="bg-conic" style="--conic-gradient: from 90deg at 50% 50%, #40c6ff, #505bed;">
  ...
</div>
```

---

## Default Gradients

The following default gradients are applied. To see a more visual reference of all the gradients, visit [Cheatsheet](/cheatsheet/gradients).

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
);
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
);
```

```css
/* main.css */

.bg-custom-gradient {
  background: linear-gradient(to right, red 0%, blue 100%);
}
```

---

## Customizing via CDN

If you are using the precompiled version of Uniform, you can customize theme properties by overriding predefined CSS variables. 

```css
/* main.css */

:root {
  --linear: linear-gradient(to right, #40C6FF 0%, #505BED 100%);
  --radial: radial-gradient(circle at 50% 50%, #40c6ff, #505bed);
  --conic: conic-gradient(from 90deg at 50% 50%, #40c6ff, #505bed);
}
```

---

## Disabling Defaults

If you wish to remove defaults, pass `null` to any theme property. Additionally, you can add your own by assigning theme settings to the `extend` map.

```scss
@use "uniform" as * with (
  $config: (
    gradients: null,
    
    extend: (
      gradients: (
        custom: linear-gradient(to right, #40C6FF 0%, #505BED 100%)
      )
    )
  )
)
