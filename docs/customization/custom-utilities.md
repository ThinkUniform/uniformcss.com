---
title: Custom Utilities
description: Generating your own custom utilities.
date: 2021-01-07
---

## Custom Utilities

The `utilities` map can also be used to generate your own custom utilities.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Generating Custom Utilities

Use the following data structure to generate your own property.

```scss
// main.scss
@use "uniform" as * with (
  $config: (
    utilities: (
      heading: (
        important: true,
        shorthand: text,
        responsive: true,
        responsive-pseudos: false,
        extra-selector: null,
        properties: (font-size),
        static-properties: (),
        variants: (
          1: 24px,
          2: 28px,
        ),
        pseudos: (none)
      )
    )
  )
);
```

```css
/* main.css */
.heading-1 { font-size: 24px; }
.heading-2 { font-size: 28px; }
...
```

---

## Excluding Custom Utilities

Any new utilities generated through the `utilities` settings map will behave like any other utility and can be included or excluded using the `includes` and `excludes` setting.

```scss
// default values
@use "uniform" as * with (
  $config: (
    utilities: (
      heading: (
        important: true,
        shorthand: text,
        responsive: true,
        responsive-pseudos: false,
        extra-selector: null,
        properties: (font-size),
        static-properties: (),
        variants: (
          1: 24px,
          2: 28px,
        ),
        pseudos: (none)
      )
    ),
    excludes: (
      all
    ),
    includes: (
      heading
    )
  )
);
```

---

## Multi-Property Custom Utility

Any new utilities generated through the `utilities` settings map will behave like any other utility and can be included or excluded using the `includes` and `excludes` setting.

```scss
// default values
@use "uniform" as * with (
  $config: (
    utilities: (
      heading: (
        important: false,
        shorthand: heading,
        responsive: false,
        responsive-pseudos: false,
        properties: (),
        static-properties: (),
        variants: (
          1: (
            font-size: 24px,
            line-height: 160,
            font-weight: 700
          ),
          2: (
            font-size: 18px,
            line-height: 140,
            font-weight: 800
          ),
        ),
        pseudos: (none)
      )
    ),
    excludes: (all),
    includes: (heading)
  )
);
```

```css
.heading-1 {
  font-size: 24px;
  line-height: 160;
  font-weight: 700;
}

.heading-2 {
  font-size: 18px;
  line-height: 140;
  font-weight: 800;
}
```

---

## Add to Core Library <span class="ml-6 inline-flex align-items-center px-8 h-20 font-sm bold radius-full bg-blue bg-brighten-500 color-white align-middle">Advanced</span>

Adding utilities through the `utilities` map in your configuration is a quick way to add new properties however when adding many, your Uniform configuration may become long. To avoid this problem custom utilities can also be added natively to the core library.

### 1. Build out your data structure

Create a new `sass` document and use the following template to configure your own custom property.

```scss
// uniform/utilities/heading.scss
@use "uniform/core";
@use "sass:map";

$config: (
  utilities: (
    heading: (
      important: true,
      shorthand: text,
      responsive: true,
      responsive-pseudos: false,
      extra-selector: null,
      properties: (font-size),
      static-properties: (),
      variants: (
        1: 24px,
        2: 28px,
      ),
      pseudos: (none)
    )
  )
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

@use "utilities/heading"; // include your custom property here
```

### 3. Override or customize custom property (optional)

Once your custom property has been added into the core library, it will behave like any other utility property. This means it can be configured, overwritten or extended like any other property inside the `utilities` setting in your configuration.

```scss
// main.scss
@use "uniform" as * with (
  $config: (
    utilities: (
      heading: (
        ...
      )
    )
  )
);
```
