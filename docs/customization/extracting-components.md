---
title: Extracting Components
description: <span class="color-heading-accent">How to extract</span> common component patterns
date: 2021-01-08
---

## Extracting Components

Uniform encourages the extraction of components when clear and repeating design patterns emerge. The following guide will cover the various ways you can extract components.



---

## Using API Functions

You can build custom components and still get access to theme variables using API Functions. To learn more, refer to the page on [API Functions](/docs/api-functions).

```scss
// main.scss
.custom-element {
  display: block;
  padding: size(20);
  font-family: font(sans);
  font-weight: font(semibold);
  border-radius: radius(md);
  box-shadow: shadow(sm);

  &:hover {
    box-shadow: shadow(md);
  }
}
```

---

## Using @apply Mixin

The `apply()` mixin allows you to apply properties directly using shorthand utility class names. The `apply()` mixin can also be nested inside a parent.

```scss
.parent {
  @include apply('p-40 shadow-2xs radius-2xl');
  &__child {
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
.parent__child {
  padding: 1.5rem;
}
.parent__child:hover {
  opacity: 0.5;
}
@media (min-width: 1024px) {
  .parent__child {
    padding: 4rem;
  }
}
```