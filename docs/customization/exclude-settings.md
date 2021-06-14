---
title: Exclude Settings
description: Control which CSS properties are included and excluded.
date: 2021-01-03
---


## Exclude Settings

The `exclude` and `include` settings are a Sass list that tell Uniform which CSS properties should be included or excluded. By default all Uniform supported CSS properties are included.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Excluding Properties

There may be a time where you wish to exclude certain unused properties. You can achieve this by including the native CSS property name in the `exclude` map of your configuration.

```scss
// default values
@use "uniform" as * with (
  $config: (
    exclude: (
      background-color, 
      background-attachment, 
      letter-spacing,
    )
  )
);
```

---

## Excluding All Properties

If you wish to exclude all properties, simply pass in `all` in your exclude map.

```scss
// default values
@use "uniform" as * with (
  $config: (
    exclude: (
      all
    )
  )
);
```

---

## Including Properties

To include only a select set of CSS properties, pass in the native CSS property name you wish to include to the `include` map.

```scss
// default values
@use "uniform" as * with (
  $config: (
    exclude: (
      all
    ),
    include: (
      background-color,
      letter-spacing,
      margin,
      padding,
      display
    )
  )
);
```
