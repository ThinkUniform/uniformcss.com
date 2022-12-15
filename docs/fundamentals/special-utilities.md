---
title: Special Utilities
description: <span class="color-heading-accent">Everything to know</span> about special utilities
date: 2021-01-08
---

## About Special Utilities

Utility classes, in general, are low-level by design and typically only apply a single CSS property, therefore, utilities are typically named based on the CSS property it represents. However, there may be times where it might make sense to combine more than one CSS property or name a utility based on its purpose rather than the CSS property it represents.



---

## Text Size

The `text-<size>` special utility differs from `font-<size>` in that it applies both `font-size` and `line-height` properties. For more information, visit [Text Size](/docs/text-size).

```html
<h1 class="text-8xl">
  ...
</h1>
```

```css
.text-8xl {
  font-size: var(--font-8xl);
  line-height: var(--font-8xl-leading);
}
```

---

## Directional Shorthands

You can apply directional properties like `padding`, `border-width` and `margin` horizontally and vertically using the `x` and `y` shorthand. For more information, visit [Directional](/docs/directional).

```html
<div class="px-20 my-32">
  ...
</div>
```

```css
.px-20 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}

.my-32 {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
```

---

## Gutter

The `gutter` special utility applies margin-based horizontal or vertical spacing of child elements using the [Lobotomized Owl](https://alistapart.com/article/axiomatic-css-and-lobotomized-owls/) selector. For more information, visit [Gutter](/docs/gutter).

```html
<div class="gutter-x-20">
  <div>...</div>
  <div>...</div>
  <div>...</div>
</div>
```

```css
.gutter-x-20 > * + * {
  --gutter-right: 0,
  --gutter-left: 1,
  margin: 0 calc(var(--size-20) * var(--gutter-right)) 0 calc(var(--size-20) * var(--gutter-left));
}
```

---

## Ratio

The `ratio` special utility applies percentage based padding in order to simulate various common screen aspect ratios.

```html
<div class="ratio-16-9">
  ...
</div>
```

```css
.ratio-16-9 {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
}
```

---