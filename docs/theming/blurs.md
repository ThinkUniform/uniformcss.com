---
title: Blurs
description: Learn how to customize default blurs.
date: 2021-01-04
---

## Blur

Blur levels can be configured by passing in key value pairs to the `blurs` setting in your configuration.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Default Blurs

The following default blur configurations are applied. To see a more visual reference of all the blurs, visit [Cheatsheet](/cheatsheet/blurs).

```scss
@use "uniform" as * with (
  $config: (
    blurs: (
      2xs: 4px,
      xs: 8px,
      sm: 12px,
      md: 16px,
      lg: 24px,
      xl: 32px,
      2xl: 48px,
    )
  )
);
```

---

## Customizing via Sass

You can add your own blurs by passing in key value pairs to the `blurs` map in your configuration.

```scss
// main.scss

@use "uniform" as * with (
  $config: (
    blurs: (
      3xl: 72px
    ),
  )
);
```

```css
/* main.css */

:root {
  --blur-3xl: 72px;
}

.filter-blur-3xl {
  --filter-blur: var(--blur-3xl);
}
.backdrop-blur-3xl {
  --backdrop-blur: var(--blur-3xl);
}
...
```

---

## Customizing via CDN

If you are using the precompiled version of Uniform, you can customize theme properties by overriding predefined CSS variables. 

```css
:root {
  --blur-2xs: 4px;
  --blur-xs: 8px;
  --blur-sm: 12px;
  --blur-md: 16px;
  --blur-lg: 24px;
  --blur-xl: 32px;
  --blur-2xl: 48px;
}
```

---

## Disabling Defaults

If you wish to remove defaults, pass `null` to any theme property. Additionally, you can add your own by assigning theme settings to the `extend` map.

```scss
@use "uniform" as * with (
  $config: (
    blurs: null,

    extend: (
      blurs: (
        custom: 64px
      )
    )
  )
)
