---
title: Media Queries
description: Learn how to apply classes that change across breakpoints.
date: 2021-01-03
---

## Responsive Design

You can apply responsive utility classes by appending the breakpoint variant to the beginning of your class name e.g. `<breakpoint-variant>.shorthand-variant`.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Mobile-First Design

Uniform uses a mobile-first CSS approach to allow for styles to be applied on mobile screens first before larger more complex screen layouts. This means that by default, **classes will cascade upwards in screen size** unless specified otherwise.

```html
<div class="h-10 sm.h-14 md.h-20 lg.h-24">
  10px height on mobile 
  14px height on small screen sizes 
  20px height on medium screen sizes 
  24px height on large screen sizes
</div>
```

---

## Breakpoint Variants

By default, there are **three** breakpoint variants available `sm`, `md`, and `lg`.

```scss
// sm
@media (min-width: 768px) {
  ...
}
// md
@media (min-width: 1024px) {
  ...
}
// lg
@media (min-width: 1280px) {
  ...
}
```

