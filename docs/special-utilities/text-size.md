---
title: Text Size
description: Learn about the text size special utility
date: 2021-01-02
---

## About Text Size

Unlike the `font-<size>` utility, the `text-<size>` applies both `font-size` and `line-height` properties to any text element. This is the recommended way of styling text since it provides two commonly used text styling properties in one.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Basic Usage

You can apply text sizing by applying the `text-<size>` utility. This utility is responsive and can also be applied conditionally based on breakpoint.

```html
<h1 class="text-xl md.text-4xl">
  ...
</h1>
```

```css
.text-xl {
  font-size: var(--font-xl);
  line-height: var(--font-4xl-leading);
}
```

---

## Disabling Text Size

To disable this utility, pass `text-size` to the `excludes` setting in your configuration.

```scss
@use "uniform" as * with (
  $config: (
    excludes: (
      text-size
    )
  )
);
```