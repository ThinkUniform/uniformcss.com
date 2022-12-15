---
title: Radiuses
description: <span class="color-heading-accent">Customizing radius</span> settings in Uniform CSS
date: 2021-01-03
---

## Radius

Border radiuses can be configured by passing in key values pairs to the `radiuses` setting in your configuration.



---

## Default Radiuses

The following default radius configurations are applied. To see a visual reference of all available radiuses, visit [Cheatsheet](/cheatsheet/border-radiuses).

```scss
@use "uniform" as * with (
  $config: (
    radiuses: (
      2xs: rem(3),
      xs: rem(4),
      sm: rem(6),
      md: rem(8),
      lg: rem(12),
      xl: rem(16),
      2xl: rem(24)
    )
  )
);
```

---

## Customizing via Sass

To customize radiuses, pass in key value pairs to the `radiuses` map in your configuration. Customizations will be universally applied across all border radius related properties.

```scss
// main.scss
@use "uniform" as * with (
  $config: (
    radiuses: (
      custom: 5px,
      card: 7px,
    ),
  )
);
```

```css
/* main.css */
.radius-custom {
  border-radius: 5px;
}
.radius-card {
  border-radius: 7px;
}
...
```

---

## Customizing via CDN

If you are using the precompiled version of Uniform, you can customize theme properties by overriding predefined CSS variables. 

```css
:root {
  --radius-2xs: 0.1875rem;
  --radius-xs: 0.25rem;
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-2xl: 1.5rem;
}
```

---

## Disabling Defaults

If you wish to remove defaults, pass `null` to any theme property. Additionally, you can add your own by assigning theme settings to the `extend` map.

```scss
@use "uniform" as * with (
  $config: (
    radiuses: null,

    extend: (
      radiuses: (
        card: 8px
      )
    )
  )
)
