---
title: CDN Configuration
description: <span class="color-heading-accent">Fastest way</span> to configure and get up and running
date: 2021-01-02
---

## Drop-in Configuration

Although you may not get the full customization freedom that the Sass version provides, the CDN version is the easiest way to customize and get started with Uniform.



---

## Accessing CDN Build

Simply load the stylesheet via CDN or locally and override variables using CSS variables (custom properties).

```html
<link href="https://cdn.jsdelivr.net/npm/uniformcss/css/uniform.min.css" rel="stylesheet">
```

```css
:root {
  --font-sans: 'Inter';
  --font-md: 0.937rem;
  --semibold: 500;
  --bold: 800;
}
```

---

## How it works

Behind the scenes, Uniform CSS generates CSS variables that are then applied to properties like `background-color`, `width`, and etc. Since these CSS variables are overridable, you can customize the default Uniform settings by defining your CSS variable overrides inside the `:root` pseudo selector. 

```css
/* myStyles.css */
:root {
  --font-sans: 'Inter';
  --extrabold: 800;
  --primary-hue: 46;
  ...
}
```

> To see a list of all variables that you can override, inspect this page to see the variables in your developer tools.