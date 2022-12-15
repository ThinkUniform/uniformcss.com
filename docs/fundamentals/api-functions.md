---
title: API Functions
description: <span class="color-heading-accent">Get started</span> with built-in helper API functions
date: 2021-01-08
---

## About API Functions

If you are using the native Sass implementation of Uniform, you get access to useful helper functions that allow you to **directly access theme variable values**. This can be particularly useful when extracting components.



---

## How they work

Behind the scenes, all default and user-defined theme settings such as colors, sizes, and font values are merged and enclosed inside thee `$config` map. API functions essentially act as a get function that interacts with this map to pull theme values.

```scss
// Example custom element
.element {
  margin-bottom: size(40);
  padding: size(20, 24);
  background: fill(blue-500);
  font-size: font(xl);
  font-weight: font(semibold);
  line-height: leading(looser);
}

// Example custom loop using map
@each $breakpoint, $breakpoint-value in breakpoints() {
  // for each breakpoint, do the following
}

@each $fill, $fill-value in fills() {
  // for each fill, do the following
}
```

---

## Screen Functions

The `screen()` function fetches values from the `screen` map provided an existing variant is passed in as a parameter. `screens()` function fetches the entire map, useful for looping.

For more information on breakpoints, visit [media queries](/docs/media-queries).

```scss
@media (min-width: screen(lg)) {
  ...
}

// Will pull the following pixel value in your compiled css
@media (min-width: 1280px) {
  ...
}
```

```scss
@each $breakpoint, $breakpoint-value in screens() {
  // for each breakpoint, do the following
}
```

---

## Fill Functions

There are two color helper functions available. The `fill()` function fetches values from the `colors` and the `gradient()` function fetches values from the `gradients` map provided an existing variant is passed in as a parameter.

```scss
.element {
  background-color: fill(gray-500);
}

.element {
  background: gradient(gradient-x-from-white);
}
```

#### Controlling Fill Opacity

You can also pass a second argument to the `fill()` function to control opacity.

```scss
// main.scss
.element {
  background-color: fill(red-500, 0.5);
}
```

```css
/* main.css */
.element { 
  background-color: rgba(var(--red-500), 0.5); 
}
```

---

## Size Functions

The `size()` function fetches values from both positive and negative sizes.

```scss
.element {
  margin: size(n24); // -1.5rem (-24px)
  width: size(32);   // 2rem (32px)
}
```

The `size()` function can also accept multiple arguments for joint sizing units for shorthand properties.

```scss
.element {
  padding: size(24, 32); // 1.5rem 2rem
}
```

When pluralized, the `sizes()` function fetches all the sizes. By default, the sizes function will return both positive and negative sizes.

```scss
@each $size, $size-value in sizes() {
  // for each size, do the following
}
```

You can also return positive or negative sizes only with `positive-sizes()` and `negative-sizes()` functions.

```scss
@each $positive-size, $positive-size-value in positive-sizes() {
  // for each size, do the following
}

@each $positive-size, $positive-size-value in positive-sizes() {
  // for each size, do the following
}
```

For more information on sizing, visit [sizing system](/docs/sizing-system).

---

## Shadows Functions

The `shadow()` function fetches values from the `shadows` map. The `shadows()` function fetches the entire map.

```scss
.element {
  box-shadow: shadow(sm);
}
```

```scss
@each $shadow, $shadow-value in shadows() {
  // for each shadow, do the following
}
```

---

## Typography Functions

Uniform provides various functions to pull values from font related maps such as `font-sizes` and `font-families`.

#### Font Family

The `font-family()` function fetches values from the `font-families` map. When pluralized, the `font-families()` function fetches the entire map.

```scss
.element {
  font-family: font-family(sans);
}
```

```scss
@each $font-family, $font-family-value in font-families() {
  // for each font-family, do the following
}
```

#### Font Size

The `font()` function fetches values from the `font-sizes`. When pluralized, the `font-sizes()` function fetches the entire map.

```scss
.element {
  font-size: font(xl);
}
```

```scss
@each $font-size, $font-size-value in font-sizes() {
  // for each font-size, do the following
}
```

#### Font Weight

The `font()` function fetches values from the `font-weights` map. When pluralized, the `font-weights()` function fetches the entire map.

```scss
.element {
  font-weight: font(bold);
}
```

```scss
@each $font-weight, $font-weight-value in font-weights() {
  // for each font-weight, do the following
}
```

#### Line Height

The `leading()` function fetches values from the `leadings` map. When pluralized, the `leadings()` function fetches the entire map.

```scss
.element {
  line-height: leading(loose);
}
```

```scss
@each $leading, $leading-value in leadings() {
  // for each leading, do the following
}
```

#### Letter Spacing

The `tracking()` function fetches values from the `trackings` map. When pluralized, the `trackings()` function fetches the entire map.

```scss
.element {
  letter-spacing: tracking(loose);
}
```

```scss
@each $tracking, $tracking-value in trackings() {
  // for each tracking, do the following
}
```

---

## Font Shorthand

For `font-family`, `font-size`, `font-weight` properties, you can fetch values simply with the `font()` shorthand.

```scss
.element {
  font-family: font(sans);
  font-size: font(xl);
  font-weight: font(bold);
}
```

---

## Radius Functions

The `radius()` function fetches values from the `radiuses` map. When pluralized the `radiuses()` function fetches the entire map.

```scss
.element {
  letter-spacing: radius(xl);
}
```

```scss
@each $radius, $radius-value in radiuses() {
  // for each radius, do the following
}
```

---

## Other Helper Functions

In Additional to theme functions, Uniform also provides generic helper functions to help you perform certain tasks more easily.

#### Rem Function

The `rem()` function allows you easily convert a pixel value into a rem value.

```scss
.element {
  font-size: rem(18); // this will convert 18px to rem
}
```

