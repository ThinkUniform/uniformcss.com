---
title: Installation
description: Learn how to install and get started with Uniform CSS.
date: 2021-01-09
---

## Getting up and running

Uniform is super easy to get started and setup, all you need to do is add Uniform as a module to your `.scss` project or use the precompiled `.css` file. You can get started using the following ways:

1. Use **npm** to install the Uniform package. 
2. Use the **jsDelivr CDN** to link directly to the Uniform stylesheet.
3. Clone or download the project **directly** from the GitHub repository.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Native installation

The native installation is the recommended way to get setup. Native setups provide the full functionality of Uniform CSS giving you access to customization and useful helper functions.

### 1. Clone or install Uniform CSS

If you have <a class="hover.underline" href="https://nodejs.org/en/"  target="_black">Node.js</a> installed, you can load Uniform as a dependency. Alternatively you can download or clone the project directly.

```bash
# Install dependencies
npm install uniformcss

# or Clone project
git clone https://github.com/UniformCSS/UniformCSS
```

### 2. Include Uniform in your Sass project

Add the following line to your main `.scss` stylesheet to add Uniform in your project.

```scss
// main.scss
@use "uniform" as *;

// or the following if using the npm option
@use "../node_modules/uniformcss/sass/uniform" as *;
```

### 3. Compile and watch for changes

Compile your Sass project using your preferred CSS preprocessor. Optionally, the Uniform `package.json` provides useful build scripts you can run to compile and watch Sass. For more information please check out the [build scripts](/docs/build-scripts) page.

```bash
npm run uniform
```

> Please note, Uniform CSS features newer Sass functionality and therefore require `dart-sass` version `1.33.0` and up to compile correctly.

### 4. Add compiled stylesheet

Import the compiled stylesheet to your `<head>` inside your `html` and you will now have access to all the Uniform goodness.

```html
<link rel="stylesheet" href="uniform.css" />
```

### 4. Configure Uniform (optional)

Optionally, you can customize Uniform directly in your `.scss` stylesheet. For more information, visit [configuration](/docs/configuration).

```scss
// main.scss
@use "uniform" as * with (
  $config: (
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

> If you're unfamiliar with the `@use` rule or configuring modules in this way, you can learn more about the new Sass module system <a class="hover.underline" href="https://sass-lang.com/blog/the-module-system-is-launched" target="_black">here.</a>

---

## Install with CDN

For a even quicker way to get started, simply add the following stylesheet in the head of your project.

```html
<link href="https://cdn.jsdelivr.net/UniformCSS/UniformCSS/sass/uniform.min.css" rel="stylesheet" />
```

> Unlike the native installation, using the pre-compiled version of Uniform will only allow for limited customizations, you will not get access to more advanced customization options such as prefixing and custom variants.
