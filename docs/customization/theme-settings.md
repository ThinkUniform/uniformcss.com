---
title: Theme Settings
description: <span class="color-heading-accent">Override or extend</span> style to match your theme
date: 2021-01-03
---


## Theme Settings

The `theme` setting are a set of values that are shared across multiple properties or specific to your project such as, sizing units, fonts, and colors.



---

## Theme Setting Usage

Theme settings are shared across multiple CSS properties.

```scss
// main.scss
@use "uniform" as * with (
  $config: (
    colors: (
      custom: #B20000,
    )
  )
);
```

```css
/* main.css */
.bg-custom { background-color: #B20000; }
.color-custom { color: #B20000; }
.border-custom { border-color: #B20000; }
...
```

---

## Default Theme Settings

Uniform CSS comes pre-set with default theme settings which are applied across its relevant properties. Theme settings are unique in that its values can be accessed using [api functions](/docs/api-functions).

```scss
// main.scss
@use "uniform" as * with (
  $config: (
    colors: ( ... ),
    screens: ( ... ),
  )
);
```

---

## Theme Settings Table

The following theme setting definitions apply.

| Setting | Description |
| - | - |
| `colors` | Set of base colors |
| `gradients` | Set of gradients |
| `opacity-levels` | Set of opacity-levels |
| `screens` | Set of breakpoints |
| `positive-sizes` | Set of positive sizes |
| `negative-sizes` | Set of negative sizes |
| `range-limits` | Specify the range limits for size properties |
| `shadows` | Set of shadows |
| `radiuses` | Set of radiuses |
| `font-families` | Set of font-families |
| `font-sizes` | Set of font-sizes |
| `font-weights` | Set of font-weights |
| `leadings` | Set of line-heights |
| `trackings` | Set of letter-spacings |
| `keyframes` | Set of keyframes |



---

## Overriding Theme Settings

To override base theme settings, pass key value pairs to each setting in your configuration. If your key already exists it will override the existing value.

```scss
// main.scss
@use "uniform" as * with (
  $config: (
    colors: (
      red: #B20000,
      ...
    ),
    leadings: (
      loose: 1.6,
      ...
    )
  )
);
```

```css
/* main.css */
.bg-red { background-color: #B20000; }
.color-red { color: #B20000; }
.border-red { color: #B20000; }
.leading-loose { line-height: 1.6 }
...
```

---

## Disabling Theme Settings

Passing in `null` will disable default settings. Additionally, you can pass in your own theme settings under the `extend` setting in your configuration.

```scss
// main.scss
@use "uniform" as * with (
  $config: (
    colors: null,
    gradients: null,

    extend: (
      colors: (
        primary: #0054CB
      ),
      gradients: (...),
      opacities: (...)
    )
  )
);
```
