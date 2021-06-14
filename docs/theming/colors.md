---
title: Colors
description: Learn how to customize and manipulate colors.
date: 2021-01-02
---

## Customizing Colors

All colors in Uniform are applied using the HSL model. This opens up opportunities to manipulate colors in a composable manner.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Default Colors

The following default color configurations are applied. To see a more visual reference of all the colors, tints, and shades, visit [Color System](/docs/color-system).

```scss
@use "uniform" as * with (
  $config: (
    colors: (
      red: ( hue: 0, sat: 50% ),
      firebrick: ( hue: 10, sat: 60% ),
      orange: ( hue: 20, sat: 70% ),
      gold: ( hue: 40, sat: 90% ),
      yellow: ( hue: 50, sat: 100% ),
      lime: ( hue: 80, sat: 70% ),
      green: ( hue: 110, sat: 60% ),
      cyan: ( hue: 190, sat: 60% ),
      blue: ( hue: 220, sat: 70% ),
      purple: ( hue: 260, sat: 90% ),
      violet: ( hue: 280, sat: 70% ),
      pink: ( hue: 310, sat: 60% ),
      
      white: ( hue: 0, sat: 0% ),
      black: ( hue: 0, sat: 0% ),

      cool-gray: ( hue: 220, sat: 10% ),
      gray: ( hue: 0, sat: 0% ),
      warm-gray: ( hue: 24, sat: 10% ),

      primary: ( hue: 220, sat: 80% ),
      secondary: ( hue: 220, sat: 60% ),
      tertiary: ( hue: 220, sat: 40% ),

      success: ( hue: 80, sat: 60% ),
      warning: ( hue: 40, sat: 60% ),
      danger: ( hue: 0, sat: 60% )
    ),
  )
)
```

---

## Customizing via Sass

To custom existing colors or add new ones, pass in key value pairs to the `colors` setting in your configuration. Values can be passed in as a map or static values. Colors that are passed in as `hue` and `sat` maps will automatically be assigned `50%` lightness and is able to take advantage of composable color manipulation properties such as `tints`, `shade`, and `opacity`. To learn more about how these colors work see [Color System](/docs/color-system).

```scss
// main.scss

@use "uniform" as * with (
  $config: (
    colors: (
      red: ( 
        hue: 10,
        sat: 63% 
      ),
      customPink: pink
    ),
  )
)
```

```css
/* main.css */

:root {
  --red-hue: 10;
  --red-sat: 63%;
}

.bg-red {
  --bg-ltn: 50%;
  --bg-opacity: 1;
  background-color: hsla(var(--red-hue), var(--red-sat), var(--bg-ltn), var(--bg-opacity));
}

.bg-customPink {
  --bg-ltn: 50%;
  --bg-opacity: 1;
  background-color: pink;
}
```

---

## Customizing Lightness Levels

Lightness control the `lightness` value of a HSL defined color. You can override or add new levels by passing in key value pairs to the `lightness` setting in your configuration.

```scss
// main.scss

@use "uniform" as * with (
  $config: (
    lightness: (
      white: 100%,
      50: 95%,
      100: 90%,
      150: 85%,
      200: 80%,
      250: 75%,
      300: 70%,
      350: 65%,
      400: 60%,
      450: 55%,
      500: 50%,
      550: 45%,
      600: 40%,
      650: 35%,
      700: 30%,
      750: 25%,
      800: 20%,
      850: 15%,
      900: 10%,
      950: 5%,
      black: 0%,
    )
  )
)
```

---

## Customizing Opacities

Opacities control the alpha value of a given color. You can override or add new levels by passing in key value pairs to the `opacities` setting in your configuration. The following opacity levels are supported by default.

```scss
// main.scss

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
    )
  )
)
```

---

## Customizing via CDN

If you are using the CDN implementation, you can still customize all existing theme properties by overriding CSS custom properties. This method can be particularly useful for when you just want to get started quickly without worrying about a Sass build process. To see the full list of CSS variables inspect element this page.

```css
/* main.css */

:root {
  --red-hue: 10;
  --red-sat: 63%;
  --blue-hue: 224;
  --blue-sat: 72%;

  --ltn-50: 98%;
  --ltn-600: 64%;
}
```
---

## Disabling Defaults

If you prefer to remove the default settings and add your own, simply pass `null` to any theme property. Additionally, you can add your own by assigning theme settings to the `extend` map.

```scss
// main.scss

@use "uniform" as * with (
  $config: (
    colors: null, // disable default colors
    lightness-levels: null,  // disable default lightness-levels

    extend: (
      colors: (
        red: ( hue: 10, sat: 63% ),
        custom: pink,
      ),
      lightness-levels: (
        100: 44.76%,
        200: 39.54%,
        300: 34.32%,
        400: 29.1%,
        500: 23.88%,
        600: 18.66%,
        700: 13.44%,
        800: 8.22%,
        900: 3%,
      )
    )
  )
)
```
