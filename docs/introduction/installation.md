---
title: Installation
description: Learn how to install and get started with Uniform CSS.
date: 2021-01-02
---

## Getting up and running

Uniform is super easy to get started and setup, all you need to do is add Uniform as a module to your `.scss` project or use the precompiled `.css` file. You can get started using the following ways:

1. Use **npm** to install the Uniform package. 
2. Use the **jsDelivr CDN** to link directly to the Uniform stylesheet.
3. Clone or download the project **directly** from the GitHub repository.

> Please note, Uniform CSS features newer Sass functionality and therefore require `dart-sass` version `1.33.0` and up to compile correctly.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Install via Clone

### 1. Clone the repository

Clone the Uniform CSS in the same directory as your main `main.scss` file.

```bash
# Change directory to where your main sass file lives
cd my-project/sass/

# Clone project
git clone https://github.com/ThinkUniform/uniformcss
```

### 2. Include Uniform module in your Sass project

Add the following line to your main `.scss` stylesheet to add Uniform in your project.

```scss
// main.scss
@use "uniform" as *;
```

### 3. Compile and watch for changes

Compile your Sass project using your preferred CSS preprocessor. Optionally, the Uniform `package.json` provides useful build scripts you can run to compile and watch Sass. For more information please check out the [build scripts](/docs/build-scripts) page.

```bash
yarn uniform
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

### 5. Add compiled stylesheet

Import the compiled stylesheet to your `<head>` inside your `html` and you will now have access to all the Uniform goodness.

```html
<link rel="stylesheet" href="uniform.css" />
```

> If you're unfamiliar with the `@use` rule or configuring modules in this way, you can learn more about the new Sass module system <a class="hover.underline" href="https://sass-lang.com/blog/the-module-system-is-launched" target="_black">here.</a>

---

## Install via NPM

### 1. Clone or install Uniform CSS

If you have <a class="hover.underline" href="https://nodejs.org/en/"  target="_black">Node.js</a> installed, you can load Uniform as a dependency.

```bash
# Install Uniform and its dependencies
npm install uniformcss
```

### 2. Include Uniform module in your Sass project

Add the following line to your main `.scss` stylesheet to add Uniform in your project.

```scss
@use "../node_modules/uniformcss/uniform" as *;
```

### 3. Compile and watch for changes

Compile your Sass project using your preferred CSS preprocessor. Optionally, the Uniform `package.json` provides useful build scripts you can run to compile and watch Sass. For more information please check out the [build scripts](/docs/build-scripts) page.

```bash
yarn uniform
```

> Please note, if you are using the built-in build scripts or using the Sass CLI to compile, ensure the `--load-path` of your build command includes the `node_module/uniformcss/` path. For more information on load paths visit [Dart Sass Command Line Interface](https://sass-lang.com/documentation/cli/dart-sass#load-path).

---

## Install via CDN

For a even quicker way to get started, simply add the following stylesheet in the head of your project.

```html
<link href="https://cdn.jsdelivr.net/ThinkUniform/uniformcss/css/uniform.min.css" rel="stylesheet" />
```

> Unlike the native installation, using the pre-compiled version will only allow for limited customizations, you will not get access to more advanced customization options such as prefixing and custom variants.
