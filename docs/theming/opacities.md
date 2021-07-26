---
title: Opacities
description: Learn how to customize opacity levels.
date: 2021-01-02
---

## Opacities

The `opacities` setting controls the levels for opacity related properties such as `opacity`, `background-opacity`, `border-opacity`, `color-opacity`.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Default Opacities

The following default opacities configurations are applied. To see a visual reference of each opacity, visit [Cheatsheet](/cheatsheet/opacities).

```scss
@use "uniform" as * with (
  $config: (
    opacities: (
      0: 0,
      2: 0.02,
      4: 0.04,
      6: 0.06,
      8: 0.08,
      10: 0.1,
      15: 0.15,
      20: 0.2,
      25: 0.25,
      30: 0.3,
      35: 0.35,
      40: 0.4,
      45: 0.45,
      50: 0.5,
      55: 0.55,
      60: 0.6,
      65: 0.65,
      70: 0.7,
      75: 0.75,
      80: 0.8,
      85: 0.85,
      90: 0.9,
      95: 0.95,
      100: 1,
    ),
  )
);
```

---

## Customizing via Sass

To customize opacities, pass in key value pairs to the `opacities` map in your configuration. Customizations will be universally applied across all opacity related properties.

```scss
// main.scss
@use "uniform" as * with (
  $config: (
    opacities: (
      opaque: 0.78
    ),
  )
);
```

```css
/* main.css */
.opacity-opaque {
  opacity-opaque: 0.78;
}
.bg-opacity-opaque {
  --bg-opacity: 0.78;
}
.color-opacity-opaque {
  --color-opacity: 0.78;
}
.border-opacity-opaque {
  --border-opacity: 0.78;
}
...
```

---

## Disabling Defaults

If you wish to remove defaults, pass `null` to any theme property. Additionally, you can add your own by assigning theme settings to the `extend` map.

```scss
@use "uniform" as * with (
  $config: (
    opacities: null,

    extend: (
      opacities: (
        opaque: 0.78
      )
    )
  )
)
