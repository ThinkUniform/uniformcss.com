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
)
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

.filter-blur-3xl {
  --filter-blur: var(--blur-2xl);
}
.backdrop-blur-3xl {
  --backdrop-blur: var(--blur-md);
}
...
```

---

## Customizing via CDN

If you are using the CDN version of Uniform CSS, you can still customizing default settings by overriding CSS variables.

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

You can remove all default blurs by passing `null` to the `blurs` setting.

```scss
@use "uniform" as * with (
  $config: (
    blurs: null
  )
)
