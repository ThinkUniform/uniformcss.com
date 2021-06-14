---
title: Configuration
description: A quick introduction to how customization works.
date: 2021-01-10
---

## Customizing Uniform

Configuring Uniform to match your project is super intuitive and easy. There are **two ways** you can load and customize Uniform CSS, **Sass** and **CDN**. The CDN method can be configured using CSS variable overrides inside the `:root` pseudo element. The native Sass method can be configured using Sass's [module configuration](https://sass-lang.com/documentation/at-rules/use#configuration) method.

{% include shortcodes/video, id: 'tLqqi5gyxQg' %}

---

## Sass Configuration

The Sass configuration method is the best way to take full advantage of Uniform's customization features. You can customize almost every aspect of this framework using the new and awesome [module configuration](https://sass-lang.com/documentation/at-rules/use#configuration) method.

To apply configuration, load Uniform into your main sass project and override the module by passing in settings to the `$config` variable.

```scss
// main.scss
@use "uniform" as * with (
  $config: (
    // your settings go here
    important: true,
    prefix: myProject,
    colors: (
      custom-color-1: red,
      custom-color-2: blue
    ),
    ...
  )
);
```

```css
/* main.css */
.myProject-bg-custom-color-1 { background-color: red !important; }
.myProject-bg-custom-color-2 { background-color: blue !important; }
...
```

---

## CDN Configuration

The CDN configuration method is the easiest way get started, however you will only be able to override basic variables. It does not allow you to perform more deeper customizations that the Sass implementation provides.

To apply basic configuration, simply define CSS variable overrides inside a `:root` pseudo element. To see which CSS variables are available, please inspect element this page to see a full list.

```css
:root {
  --font-sans: 'inter', Helvetica, Arial, Sans-Serif;
  --primary-hue: 240;
  --primary-sat: 63%;
}
```
