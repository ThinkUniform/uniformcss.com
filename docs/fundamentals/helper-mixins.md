---
title: Helper Mixins
description: Get started with built-in helper mixins.
date: 2021-01-08
---

## About Helper Mixins

Helper mixins allow you to conveniently add useful blocks of CSS with a simple syntax.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Screen Mixin

The `screen()` mixin wraps the content around a `@media` rule.

```scss
.element {
  @include screen(lg) {
    background: red;
  }
}
```

```css
@media (min-width: 1280px) {
  .element {
    background: red;
  }
}
```

---

## Apply Mixin <span class="ml-6 inline-flex align-items-center px-8 h-20 font-sm bold radius-full bg-blue bg-brighten-500 color-white align-middle">Beta</span>

The `apply()` mixin allows you to apply properties directly using shorthand utility class names. Behind the scene, it parses through the list of arguments and extends placeholder selectors that match the name.

```scss
.element {
  @include apply(
    'mb-24',
    'hover.mb-32',
    'p-20',
    'bg-white',
  )
}
```

To enable this feature, placeholders must be set to `true` in your configuration. This will generate Sass placeholder selectors for each property on compilation.

```scss
@use "uniform" as * with (
  $config: (
    placeholders: true,
  )
);
```