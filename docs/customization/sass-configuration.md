---
title: Sass Configuration
description: Customizing Uniform CSS to your heart's content.
date: 2021-01-01
---

## How Configuration Works

Customizations in Uniform CSS are all handled from the root of your Sass project. The Sass implementation of Uniform CSS provides the most customization freedom. 

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Basic Usage

The `uniform` module can be configured by passing in settings to the `$config` map. To learn more about modules, visit the official [Sass docs](https://sass-lang.com/documentation/at-rules/use).

```scss
// main.scss
@use "uniform" as * with (
  $config: (
    important: true,
    // other settings here
  )
);
```

```css
/* main.css */
.text-left { text-align: left !important; }
.text-center { text-align: center !important; }
.text-right { text-align: right !important; }
...
```

---

## Setting Groups

It is helpful to note, there are four types of settings you can pass into your configuration, build, theme, utilities, and excludes. 

### Build Settings

Build settings control globally how your properties are constructed.

```scss
@use "uniform" as * with (
  $config: (
    important: true,
    // other build settings here
  )
);
```

### Theme Settings

Theme settings are universally shared settings such as breakpoints, sizes, and colors that affect multiple properties.

```scss
@use "uniform" as * with (
  $config: (\
    screens: (
      ...
    )
    colors: (
      ...
    ),
    // other theme settings here
  )
);
```

### Utilities Settings

Utilities settings specify the individual setting of each property.

```scss
@use "uniform" as * with (
  $config: (
    utilities: (
      text-align: (
        ...
      )
      // other utility settings here
    ),
  )
);
```

### Excludes Settings

Exclude and include settings specifies which properties should be excluded and included.

```scss
@use "uniform" as * with (
  $config: (
    excludes: (
      all,
      // other excluded properties
    ),
    includes: (
      background-color,
      text-align,
      // other included properties
    ),
  )
);
```
