---
title: Breakpoints
description: Customize breakpoints for all responsive properties
date: 2021-01-01
---

## Breakpoints

By default, responsive properties will be generated for each breakpoint. Breakpoints are defined as `screens` in Uniform and breakpoints can be overwritten or extended.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Breakpoint Variant Chart

By default, there are **3 breakpoints**. The following default breakpoint configurations are applied.

```scss
@use "uniform" as * with (
  $config: (
    screens: (
      sm: 768px,
      md: 1024px,
      lg: 1280px
    ),
  )
)
```

---

## Basic Usage

The following example showcases how the variants can be applied.

```html
<div class="h-10 sm.h-14 md.h-20 lg.h-24">
  10px height on mobile
  14px height on small screen sizes
  20px height on medium screen sizes
  24px height on large screen sizes
</div>
```

---

## Breakpoint Delimiter

By default, Uniform uses the `.` character to separate the breakpoints and pseudos from the property. You can override the default breakpoint delimiter by defining `screen-delimiter` in your configuration.

```scss
// main.scss
@use "uniform" as * with (
  $config: (
    screen-delimiter: '__',
  )
);
```

```css
/* main.css */
@media (min-width: 1024px) {
  .sm__block {
    display: block;
  }
  .sm__flex {
    display: flex;
  }
  ...
}
```

---

## Enabling Responsiveness

By design, Uniform only enables responsiveness to a subset of CSS properties. You can enable responsiveness by passing `responsive: true` to each property setting in your configuration. To see which properties are responsive, please refer to the [API Reference](/api-reference).

```scss
@use "uniform" as * with (
  $config: (
    utility: (
      letter-spacing: ( responsive: true ),
      list-style-type: ( responsive: true ),
      color-transform: ( responsive: true )
    )
  )
);
```

---

## Extending Breakpoints

You can change the number of breakpoints and even change their `min-width` values by passing in your own key value pairs to the `screens` setting in your configuration.

```scss
@use "uniform" as * with (
  $config: (
    screens: (
      custom-breakpoint: 1920px
    )
  )
);
```

```css
/* main.css */
@media (min-width: 1920px) {
  .custom-breakpoint\.block {
    display: block;
  }
  .custom-breakpoint\.flex {
    display: flex;
  }
  ...;
}
```

---

## Overriding Existing Breakpoints

You can replace existing breakpoints by overriding existing keys in the `screens` setting of your configuration.

```scss
@use "uniform" as * with (
  $config: (
    screens: (
      md: 1920px
    )
  )
);
```

```css
/* main.css */
@media (min-width: 1920px) {
  .md\.block {
    display: block;
  }
  .md\.flex {
    display: flex;
  }
  ...
}
```
