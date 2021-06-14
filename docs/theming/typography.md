---
title: Typography
description: Learn how to customize typography related settings.
date: 2021-01-04
---

## Typography Properties

You can customize full range of typography based properties such as `line-height` and `font-size`. In this guide, you will learn which variants are available for each typography group and how you can customize them. For a visual reference of all typography properties and its variants, view the [Cheatsheet](/cheatsheet/font-sizes).

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Customizing Font Families

You can customize font-families by passing in key value pairs to the `font-families` setting in your configuration.

```scss
// main.scss

@use "uniform" as * with (
  $config: (
    font-families: (
      // custom
      helvetica: ("Helvetica Now Display", system-ui, sans-serif)
    ),
  )
)
```

```css
/* main.css */

.font-helvetica { font-family: "Helvetica Now Display", system-ui, sans-serif; }
```

---

## Customizing Font Sizes

You can customize font-sizes by passing in key value pairs to the `font-sizes` setting in your configuration. Font-size variants require both `font-size` and `line-height` to be defined. 

```scss
// main.scss

@use "uniform" as * with (
  $config: (
    font-sizes: (
      heading: (
        font-size: 40px,
        line-height: 1.2,
      )
    ),
  )
)
```

```css
/* main.css */

.text-heading {
  font-size: 40px;
  line-height: 1.2;
}
```

---

## Customizing Line Height

You can customize line-heights by passing in key value pairs to the `leadings` setting in your configuration.

```scss
// main.scss

@use "uniform" as * with (
  $config: (
    leadings: (
      custom: 1.2,
    ),
  )
)
```

```css
/* main.css */

.leading-custom {
  line-height: 1.2;
}
```

---

## Customizing Letter Spacing

You can customize letter-spacings by passing in key value pairs to the `trackings` setting in your configuration.

```scss
// main.scss

@use "uniform" as * with (
  $config: (
    trackings: (
      custom: 1em;
    ),
  )
)
```

```css
/* main.css */

.tracking-custom {
  letter-spacing: 1em;
}
```

---

## Customizing via CDN

If you are using the CDN version of Uniform CSS, you can still customizing default settings by overriding CSS variables. The following typography CSS variables can be overwritten.

### Font Family CSS Variables

```css
:root {
  --font-sans: sans-serif;
  --font-serif: serif;
  --font-mono: monospace;
}
```

### Font Size CSS Variables

```css
:root {
  --font-2xs: 0.625rem;
  --font-xs: 0.75rem;
  --font-sm: 0.875rem;
  --font-md: 1rem;
  --font-lg: 1.125rem;
  --font-xl: 1.25rem;
  --font-2xl: 1.5rem;
  --font-3xl: 1.75rem;
  --font-4xl: 2rem;
  --font-5xl: 2.25rem;
  --font-6xl: 2.5rem;
  --font-7xl: 3rem;
  --font-8xl: 3.5rem;
  --font-9xl: 4rem;
  --font-10xl: 4.5rem;
  --font-11xl: 5.5rem;
  --font-12xl: 6.5rem;
  --font-13xl: 7.5rem;
}
```

### Font Leading CSS Variables

```css
:root {
  --font-2xs-leading: var(--leading-loosest);
  --font-xs-leading: var(--leading-loosest);
  --font-sm-leading: var(--leading-looser);
  --font-md-leading: var(--leading-looser);
  --font-lg-leading: var(--leading-loose);
  --font-xl-leading: var(--leading-loose);
  --font-2xl-leading: var(--leading-normal);
  --font-3xl-leading: var(--leading-tight);
  --font-4xl-leading: var(--leading-tighter);
  --font-5xl-leading: var(--leading-tighter);
  --font-6xl-leading: var(--leading-tighter);
  --font-7xl-leading: var(--leading-tighter);
  --font-8xl-leading: var(--leading-tighter);
  --font-9xl-leading: var(--leading-tightest);
  --font-10xl-leading: var(--leading-tightest);
  --font-11xl-leading: var(--leading-tightest);
  --font-12xl-leading: var(--leading-tightest);
  --font-13xl-leading: var(--leading-tightest);
}
```

### Font Weight CSS Variables

```css
:root {
  --ultralight: 100;
  --extralight: 200;
  --light: 300;
  --regular: 400;
  --medium: 500;
  --semibold: 600;
  --bold: 700;
  --extrabold: 800;
  --ultrabold: 900;
}
```

### Leading CSS Variables

```css
:root {
  --leading-tightest: 1.125;
  --leading-tighter: 1.25;
  --leading-tight: 1.375;
  --leading-normal: 1.5;
  --leading-loose: 1.625;
  --leading-looser: 1.75;
  --leading-loosest: 1.875;
}
```

### Tracking CSS Variables

```css
:root {
  --tracking-tightest: -0.08em;
  --tracking-tighter: -0.04em;
  --tracking-tight: -0.02em;
  --tracking-normal: 0;
  --tracking-loose: 0.02em;
  --tracking-looser: 0.04em;
  --tracking-loosest: 0.08em;
}
```

## Disabling Defaults

You can remove all defaults by passing `null` to the each of the settings.

```scss
@use "uniform" as * with (
  $config: (
    font-sizes: null,
    leadings: null,
    ...
  )
)
