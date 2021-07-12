---
title: Special Utilities
description: Learn about Uniform's extended properties
date: 2021-01-08
---

## About Special Utilities

Utility classes are low-level by design and typically only apply a single CSS property. Special utilities combine multiple CSS properties to provide extra commonly needed functionality.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

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

You can apply directional properties like `padding` and `margin` horizontally and vertically using the `x` and `y` shorthand. For more information, visit [directional shorthands](/docs/directional-shorthands).

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