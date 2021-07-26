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
        0 1px 2px rgba(134, 144, 162, 0.1)
      ),
      xs: (
        0 2px 4px rgba(134, 144, 162, 0.15)
      ),
      sm: (
        0 3px 6px rgba(134, 144, 162, 0.2)
      ),
      md: (
        0 4px 8px rgba(134, 144, 162, 0.25)
      ),
      lg: (
        0 6px 12px rgba(134, 144, 162, 0.3)
      ),
      xl: (
        0 12px 24px rgba(134, 144, 162, 0.35)
      ),
      2xl: (
        0 24px 48px rgba(134, 144, 162, 0.4)
      ),

      focus: (
        0 0 0 4px rgba(0, 84, 203, 0.2)
      ),
      success: (
        0 0 0 4px rgba(18, 181, 57, 0.2)
      ),
      warning: (
        0 0 0 4px rgba(210, 127, 0, 0.2)
      ),
      danger: (
        0 0 0 4px rgba(203, 18, 0, 0.2)
      ),
      info: (
        0 0 0 4px rgba(0, 200, 177, 0.2)
      )
    )
  )
);
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

If you are using the precompiled version of Uniform, you can customize theme properties by overriding predefined CSS variables. 

```css
:root {
  --shadow-2xs: 0 1px 2px rgba(var(--gray-500), 0.1);
  --shadow-xs: 0 2px 4px rgba(var(--gray-500), 0.15);
  --shadow-sm: 0 3px 6px rgba(var(--gray-500), 0.2);
  --shadow-md: 0 4px 8px rgba(var(--gray-500), 0.25);
  --shadow-lg: 0 6px 12px rgba(var(--gray-500), 0.3);
  --shadow-xl: 0 12px 24px rgba(var(--gray-500), 0.35);
  --shadow-2xl: 0 24px 48px rgba(var(--gray-500), 0.4);
  --shadow-focus: 0 0 0 4px rgba(var(--blue-500), 0.2);
  --shadow-success: 0 0 0 4px rgba(var(--green-500), 0.2);
  --shadow-warning: 0 0 0 4px rgba(var(--yellow-500), 0.2);
  --shadow-danger: 0 0 0 4px rgba(var(--red-500), 0.2);
  --shadow-info: 0 0 0 4px rgba(var(--teal-500), 0.2);
}
```

---

## Disabling Defaults

If you wish to remove defaults, pass `null` to any theme property. Additionally, you can add your own by assigning theme settings to the `extend` map.

```scss
@use "uniform" as * with (
  $config: (
    shadows: null,
    
    extend: (
      shadows: (
        custom: 0 4px 8px rgba(var(--gray-500), 0.25)
      )
    )
  )
)