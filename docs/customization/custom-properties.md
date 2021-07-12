---
title: Custom Properties
description: Generating your own custom properties.
date: 2021-01-07
---

## Custom Properties

The `utility` map can also be used to generate your own custom properties.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Generating Custom Properties

You can use the same data structure of a utility setting to generate your own property.

```scss
// main.scss
@use "uniform" as * with (
  $config: (
    utilities: (
      leading-trim: (
        responsive: true,
        shorthand: leading,
        properties: (leading-trim),
        variants: (
          trimmer: both
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
.leading-trimmer { leading-trim: both; }
.text-cap { text-edge: cap alphabetic; }
...
```

---

## Excluding Custom Properties

Any new utilities generated through the `utility` settings map will behave like any other utility and can be included or excluded using the `includes` and `excludes` setting.

```scss
// default values
@use "uniform" as * with (
  $config: (
    utilities: (
      leading-trim: (
        responsive: true,
        shorthand: leading,
        properties: (leading-trim),
        variants: (
          trimmer: both
        )
      ),
    ),
    excludes: (
      all
    ),
    includes: (
      leading-trim
    )
  )
);
```

---

## Add to Core Library <span class="ml-6 inline-flex align-items-center px-8 h-20 font-sm bold radius-full bg-blue bg-brighten-500 color-white align-middle">Advanced</span>

Adding utilities through the `utility` map in your configuration is a quick way to add new properties however when adding many, your Uniform configuration may become long. To avoid this problem custom properties can also be added natively to the core library.

### 1. Build out your data structure

Create a new `sass` document and use the following template to configure your own custom property.

```scss
// leading-trim.scss
@use "uniform/core";
@use "sass:map";

$name: leading-trim;
$shorthand: leading-trim;
$responsive: false;
$responsive-pseudos: false;
$extra-selector: null;

$properties: (leading-trim);
$custom-properties: ();

$variants: ();

$pseudos: ();

$config: (
  utilities: (
    $name: (
      shorthand: $shorthand,
      responsive: $responsive,
      responsive-pseudos: $responsive-pseudos,
      extra-selector: $extra-selector,
      properties: $properties,
      custom-properties: $custom-properties,
      variants: (
        $variants,
      ),
      pseudos: (
        $pseudos,
      ),
    ),
  ),
);

core.$all-config: map.deep-merge(core.$all-config, $config);
```

### 2. Include custom property to the import list

Open `uniform/_index.scss` and include the newly created custom property using the `@use` after the last imported property.

```scss
// uniform/_index.scss
...
@use "utilities/svg/core-fill";
@use "utilities/svg/core-stroke";
@use "utilities/svg/core-stroke-width";

@use "utilities/leading-trim"; // include your custom property here
```

### 3. Override or customize custom property (optional)

Once your custom property has been added into the core library, it will behave like any other utility property. This means it can be configured, overwritten or extended like any other property inside the `utility` setting in your configuration.

```scss
// main.scss
@use "uniform" as * with (
  $config: (
    utilities: (
      leading-trim: (
        ...
      )
    )
  )
);
```
