---
title: Shadow
description: Learn how to customize default shadows.
date: 2021-01-04
---

## Shadow

Box shadows can be configured by passing in key value pairs to the `shadows` setting in your configuration.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Default Shadows

The following default shadow configurations are applied. To see a more visual reference of all the shadows, visit [Cheatsheet](/cheatsheet/box-shadows).

```scss
@use "uniform" as * with (
  $config: (
    shadows: (
      2xs: (
        0 1px 2px 0 rgba(0, 0, 0, 0.1)
      ),
      xs: (
        0 2px 4px rgba(0, 0, 0, 0.15)
      ),
      sm: (
        0 3px 6px rgba(0, 0, 0, 0.2)
      ),
      md: (
        0 4px 8px rgba(0, 0, 0, 0.25)
      ),
      lg: (
        0 6px 12px rgba(0, 0, 0, 0.3)
      ),
      xl: (
        0 12px 24px rgba(0, 0, 0, 0.35)
      ),
      2xl: (
        0 24px 48px rgba(0, 0, 0, 0.4)
      ),
      focus: (
        0 0 0 4px hsla(220, 75%, 50%, 20%)
      ),
      info: (
        0 0 0 4px hsla(160, 80%, 50%, 20%)
      ),
      success: (
        0 0 0 4px hsla(80, 75%, 50%, 20%)
      ),
      warning: (
        0 0 0 4px hsla(40, 75%, 50%, 20%)
      ),
      danger: (
        0 0 0 4px hsla(0, 75%, 50%, 20%)
      )
    )
  )
)
```

---

## Customizing via Sass

You can add your own shadows by passing in key value pairs to the `shadows` map in your configuration.

```scss
// main.scss

@use "uniform" as * with (
  $config: (
    shadows: (
      card: ( 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23) ),
      chatbox: ( 0 20px 24px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.25) ),
    ),
  )
);
```

```css
/* main.css */

.shadow-card {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
.shadow-chatbox {
  box-shadow: 0 20px 24px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.25);
}
...
```

---

## Customizing via CDN

If you are using the CDN version of Uniform CSS, you can still customizing default settings by overriding CSS variables.

```css
:root {
  --shadow-card: 0 4px 60px 0 rgba(90, 134, 234, 0.2);
  --shadow-2xs: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  --shadow-xs: 0 2px 4px rgba(0, 0, 0, 0.15);
  --shadow-sm: 0 3px 6px rgba(0, 0, 0, 0.2);
  --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.25);
  --shadow-lg: 0 6px 12px rgba(0, 0, 0, 0.3);
  --shadow-xl: 0 12px 24px rgba(0, 0, 0, 0.35);
  --shadow-2xl: 0 24px 48px rgba(0, 0, 0, 0.4);
  --shadow-focus: 0 0 0 4px rgba(26, 94, 230, 0.2);
  --shadow-info: 0 0 0 4px rgba(26, 230, 162, 0.2);
  --shadow-success: 0 0 0 4px rgba(162, 230, 26, 0.2);
  --shadow-warning: 0 0 0 4px rgba(230, 162, 26, 0.2);
  --shadow-danger: 0 0 0 4px rgba(230, 26, 26, 0.2);
}
```

---

## Disabling Defaults

You can remove all default shadows by passing `null` to the `shadows` setting.

```scss
@use "uniform" as * with (
  $config: (
    shadows: null
  )
)
