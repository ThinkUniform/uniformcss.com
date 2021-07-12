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

## Apply Mixin

The `apply()` mixin allows you to apply properties directly using shorthand utility class names. It is important to note, the `apply()` mixin will throw an error when trying to apply properties that are included in the `excludes` setting.

```scss
// main.scss

.parent {
  @include apply('p-40 shadow-2xs radius-2xl');
  .child {
    @include apply('hover.opacity-50 p-24 md.p-64');
  }
}
```

```css
/* main.css */

.parent {
  padding: 2.5rem;
  box-shadow: var(--shadow-2xs);
  border-radius: var(--radius-2xl);
}
.parent .child {
  padding: 1.5rem;
}
.parent .child:hover {
  opacity: 0.5;
}
@media (min-width: 1024px) {
  .parent .child {
    padding: 4rem;
  }
}
```
