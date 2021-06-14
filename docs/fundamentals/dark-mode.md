---
title: Dark Mode
description: Learn how to apply dark mode colors
date: 2021-01-08
---

## About Dark Mode

All color and opacity related properties such as `background-color`, `border-color`, and `color-opacity` can be applied conditionally based on dark mode.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Enabling Dark Mode Support

Dark mode is disabled by default, to enable, pass `true` to the `dark-mode-support` setting in your configuration.

```scss
// main.scss
@use "uniform" as * with (
  $config: (
    dark-mode-support: true
  )
);
```

---

## Basic Usage

To apply conditional dark mode colors, prepend the `dark` pseudo to the beginning of each class. When you assign the class `dark` to your body or parent container, the dark styling will be applied.

```html
<body class="dark">
  <div class="bg-white dark.bg-black ...">
    ...
  </div>
</body>
```

---

## Combining with Pseudos

You can combine the dark mode with other pseudos such as `hover` by prepending the `dark` class to the beginning of any pseudo conditional class.

```html
<button class="hover.bg-white dark.hover.bg-black ...">
  ...
</button>
```

