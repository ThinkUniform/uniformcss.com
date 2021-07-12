---
title: Managing File Size
description: Learn how to keep file-size in check.
date: 2021-01-04
---

## Managing File Size

Due to its low-level nature, utility-first CSS frameworks are generally known to be large in file-size. However, compared to other frameworks, Uniform CSS is uniquely designed to maintain a minimal footprint. The following guide also covers ways you can further reduce your output size.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## How Uniform Compares

Uniform comes in at **48kb brotli** and **675kb minified**. Below is a comparison of how Uniform ranks compared to other popular frameworks.

| Framework | Minified | Gzip | Brotli |
| -| - | - | - |
| Tailwind | 2927.5kb | 297.4kb | 74.3kb |
| Semantic UI | 628.5kb | 102.3kb | 79.6kb |
| **Uniform** | **444.5kb** | **64.7kb** | **38.2kb** |
| Bulma | 205.4kb | 27.1kb | 20.7kb |
| Foundation | 182.0kb | 38.5kb | 32.1kb |
| Bootstrap | 155.6kb | 22.9kb | 20.4kb |

{.text-left style=""}

---

## Merged Pseudos

Uniform compiles pseudos using comma seperators rather than duplicating whole sets of selectors. This makes it possible to activate multiple pseudo variants without much impact on final size.

```css
/* main.css */
.bg-red,
.hover\:bg-red:hover,
.focus\:bg-red:focus {
  ...;
}
```

---

## Tailored Configuration

**Uniform takes a more considered approach** in determining which properties should have responsive and pseudo variants activated by default. 

For example, it makes sense for color properties such as `background-color` to change on hover, however properties such as `flex-wrap` would rarely require this interaction. This type of selective activation of pseudo and responsive variants helps to drastically improve the size of your generated output.

You can of course, override the default settings and enable responsiveness, and customize variants for any CSS property.

```scss
@use "uniform" as * with (
  $config: (
    utilities: (
      background-color: (
        responsive: true,
        pseudos: ( hover, focus, active )
      ),
      letter-spacing: (
        responsive: false,
        pseudos: ( hover, focus )
      )
    )
  )
);
```

---

## Exclude unused properties

You can drastically further reduce your output size by excluding properties or variants you are unlikely to use.

```scss
// Remove default properties
@use "uniform" as * with (
  $config: (
    // remove default colors
    colors: null,

    // remove negative sizes
    negative-sizes: null,

    // exclude the following properties from build
    excludes: (
      background,
      background-attachment,
      opacity
    )
  )
);
```

---

## Remove unused CSS

For an even smaller output, you can utilize third-party tools such as **PurgeCSS** to treeshake and remove remove unused CSS. This tool will analyze your template and match selectors against your CSS. Using PurgeCSS in production will result in the smallest file size (usually under 10kb).

To learn more about setting up purge CSS, visit [PurgeCSS]("https://purgecss.com/").
