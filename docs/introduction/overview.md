---
title: Overview
description: Quick dive into Uniform CSS and its features.
date: 2021-01-01
---

## Introducing Uniform

Uniform CSS is a utility-first CSS framework **built entirely in Sass**. This means you get the power of a utility-first workflow without losing the productiveness of Sass. You can get started via the CDN or as a Sass dependency.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## How Uniform is different

Here are some **top reasons** why Uniform CSS could be a great fit for you.

### 1. It's written entirely in Sass

Millions of projects are powered by Sass, Uniform **does not** take away any benefits of using Sass. Add Uniform directly into your Sass project with just **one line of code**.

```scss
// add this to your main styles.scss
@use "uniform" as *;
```

### 2. It's dead-easy to configure

Remove and extend colors? Check. Replace breakpoints? Check. Alias property names, add prefixes, modify syntax &mdash; you name it! Uniform is configurable to the last detail.

```scss
// main.scss
@use "uniform" as * with (
  $config: (
    important: true,
    prefix: myProject,
    delimiter: '-',
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

### 3. Built with CSS Variables in mind

Prefer not to worry about preprocessors and just start building your site? Just add the pre-packaged CDN version of Uniform and customize fonts and colors to match your project by activating and overriding CSS variables. It's that easy.

```html
<!-- index.html -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/UniformCSS/UniformCSS/css/uniform.min.css" />
```

```css
/* main.css */
:root {
  --font-sans: 'my-font', sans-serif;
  --primary-hue: 210;
}
```

### 4. You can add your own properties

While shiny new CSS specs become standardized, you don’t have to wait for Uniform. Add your own properties directly in your Sass configuration.

```scss
// main.scss
@use "uniform" as * with (
  $config: (
    utility: (
      leading-trim: (
        responsive: true,
        shorthand: leading,
        properties: (leading-trim),
        variants: (
          trim: both
        )
      ),
      text-edge: (
        shorthand: text,
        properties: (text-edge),
        variants: (
          cap: cap alphabetic
        )
      )
    )
  )
);
```

```css
/* main.css */
.leading-trim { leading-trim: both; }
.text-cap { text-edge: cap alphabetic; }
```

### 5. Built-in helper functions to access theme values

Prefer to write components the old fashioned way? You have all benefits of Sass while still having access to theme variables using helper functions.

```scss
// main.scss
.custom-element {
  padding: size(20, 24);
  font-weight: font-weight(bold);
  background-color: fill(primary, 600);
}
```

```css
/* main.css */
.custom-element {
  padding: 1.25rem 1.5rem;
  font-weight: var(--bold); /* 700 */
  background-color: hsl(var(--primary-hue), var(--primary-sat), var(--ltn-600));
}
```

### 6. Exclude or include only the properties you need

Every aspect of Uniform CSS is optional, you can easily remove all properties and only include what you need, as you need them.

```scss
// main.scss
@use "uniform" as * with (
  $config: (
    exclude: (
      all // exclude all
    ),
    include: (
      background-color, 
      margin, 
      padding,
      // only include these utility properties
    )
  )
);
```

### 7. Designed to be Lightweight

Lightweight in size but is packed with all the utility goodness. Uniform achieves this by ensuring each property is compiled with a careful selection of default pseudo and responsive variants.

---

## Benefits of utility-first

The utility-first approach is a CSS methodology that optimizes for CSS maintainability by defining highly reusable and immutable low-level classes that only serve one purpose. Many other different methodologies exist, however, this style of writing CSS is particularly well optimized to support application-based UI and rapid prototyping workflows due to its versatility and low-level design.

### 1. Simple to reuse and transfer

Since all utility properties are written in a pre-defined API-like manner, multiple projects can all share the same CSS library regardless of complexity. Not only does this make it incredibly easy to make incremental changes but transferring resources and assets between projects is fast, reusable, and frictionless. Just copy any component markup and paste it into any location of your choosing.

### 2. Easier to scale and maintain

Since all utility classes are pre-defined and predictable, you rarely have to worry about CSS bloat. Simply remove large amounts of the HTML without ever worrying about cleaning up its style footprint.

### 3. Quicker to onboard new develoeprs

Utility classes expose a well-defined set of styling APIs you can reference on an as needed basis. This makes it incredibly quick and easy for new developers to learn and synchronize themself with your project since all they are required to do is learn the API instead of the entire system.

### 4. Helps to avoid premature abstraction

In a more traditional setting, developers are required to specify a semantic name for every block, element, or modifier. This requirement adds extra cognitive load and can also lead to premature extrapolation of patterns and components.

With a utility-first approach, higher-level abstraction is encouraged but only when it makes sense or design patterns emerge. This helps to avoid premature extrapolation during the iterative phase of a component's lifecycle.

---

## Browser Support

Uniform CSS looks and performs great on all the latest version of modern browsers. Uniform CSS is tested and built to support the latest stable version of **Chrome**, **Firefox**, **Edge**, and **Safari**. **Uniform CSS does not support any version of IE, including IE 11**.