---
title: Utilities Settings
description: Control individual CSS property settings.
date: 2021-01-03
---


## Utilities Settings

The `utilities` setting allows you to configure how each properties are generated. For example, you can replace and extend variants for any given property.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## How it works

Properties in Uniform CSS are constructed using a template data structure. By passing in your settings to the `utilities` map, you can override the default data set for esch property. Each property has a set number of settings available and if a certain setting is not specified in your configuration, Uniform will fall back to the default setting value instead.

```scss
// main.scss
@use "uniform" as * with (
  $config: (
    utilities: (
      text-align: (
        shorthand: text,
        responsive: false,
      ),
      margin-top: (
        shorthand: customMarginTop
      )
    )
  )
);
```

```css
/* main.css */
.text-left { text-align: left; }
.text-center { text-align: center; }
.text-right { text-align: right; }

.customMarginTop-1 { margin-top: 0.062rem; }
.customMarginTop-2 { margin-top: 0.125rem; }
...
```

---

## Utility Settings Table

The following utility setting definitions apply.

| Setting | Type | Description |
| - | - | - |
| `shorthand` | `string` | Shorthand word to represent property. |
| `responsive` | `boolean` | Set responsiveness. |
| `responsive-pseudos` | `boolean` | Responsiveness across pseudo variants. |
| `properties` | `list` | Raw CSS property. |
| `static-properties` | `map` | Custom properties inclusion. |
| `extra-selector` | `string` | Extra selector attached to end
| `variants` | `map` | Key value map of the variants. |
| `pseudos` | `list` | Supported pseudos. |

{.text-left style=""}

---

## Shorthand

The `shorthand` setting overrides the default keyword used to identify the property.

```scss
// main.scss
@use "uniform" as * with (
  $config: (
    utilities: (
      margin-top: (
        shorthand: customMarginTop
      ),
      margin-right: (
        shorthand: mr
      )
    )
  )
);
```

```css
/* main.css */
.customMarginTop-1 { margin-top: 0.062rem; }
.customMarginTop-2 { margin-top: 0.125rem; }
...

.mr-1 { margin-right: 0.062rem; }
.mr-2 { margin-right: 0.125rem; }
...
```

### Null Shorthand

If `null` is passed in as a value for `shorthand` the property will omit the shorthand and use the variant name to identify the property instead.

```scss
// main.scss
@use "uniform" as * with (
  $config: (
    utilities: (
      display: (
        shorthand: null,
        variants: (
          block: block,
          flex: flex
        )
      )
    )
  )
);
```

```css
/* main.css */
.block { display: block; }
.flex { display: flex; }
...
```

---

## Responsive

The `responsive` setting enables or disables the responsiveness of a given property.

```scss
// main.scss
@use "uniform" as * with (
  $config: (
    utilities: (
      text-align: (
        responsive: true,
      ),
    )
  )
);
```

```css
/* main.css */
@media (min-width: 768px) { 
  .sm\.text-left { text-align: left; }
  .sm\.text-center { text-align: center; }
  .sm\.text-right { text-align: right; }
}
@media (min-width: 1024px) { 
  .md\.text-left { text-align: left; }
  .md\.text-center { text-align: center; }
  .md\.text-right { text-align: right; }
}
@media (min-width: 1280px) { 
  .lg\.text-left { text-align: left; }
  .lg\.text-center { text-align: center; }
  .lg\.text-right { text-align: right; }
}
```

---

## Responsive Pseudos

The `responsive-pseudos` setting when enabled, will enable responsiveness across pseudos. By default, `responsive-pseudos` is disabled for all Uniform CSS properties.

```scss
// main.scss
@use "uniform" as * with (
  $config: (
    utilities: (
      float: (
        responsive: true,
        responsive-pseudos: true,
        pseudos: (hover)
      ),
    )
  )
);
```

```css
/* main.css */
@media (min-width: 768px) { 
  .sm\.float-left { float: left; }
  .sm\.float-right { float: right; }

  .sm\.hover\.float-left:hover { float: left; }
  .sm\.hover\.float-right:hover { float: right; }
}
...
```

---

## Extra Selectors

The `extra-selector` setting when defined, will apply CSS combinators to the end of the utility. This can be useful for achieving features such as the lobotomized owl.

```scss
// main.scss
@use "uniform" as * with (
  $config: (
    utilities: (
      gutter-y: (
        shorthand: gutter-y,
        properties: (margin-top),
        extra-selector: '> * + *',
        variants: (
          10: 10px;
        );
      ),
    )
  )
);
```

```css
/* main.css */
.gutter-y-10 > * + * { 
  margin-top: 10px;
}
...
```


---

## Properties

The `properties` setting specifies the CSS property to include. You can include multiple properties to be applied.

```scss
// main.scss
@use "uniform" as * with (
  $config: (
    utilities: (
      padding-x: (
        shorthand: px,
        properties: (
          padding-left, 
          padding-right
        )
      ),
    )
  )
);
```

```css
/* main.css */
.px-0 { 
  padding-left: 0;
  padding-right: 0;
}
.px-1 { 
  padding-left: 0.062rem;
  padding-right: 0.062rem;
}
.px-2 { 
  padding-left: 0.125rem;
  padding-right: 0.125rem;
}
...
```

---

## Static Properties

The `static-properties` setting specifies static properties to include with each property. This can be useful for properties that need to include resetting custom properties such as `background-color`. The `static-properties` setting must be passed in as a map with key value pairs.

```scss
// main.scss
@use "uniform" as * with (
  $config: (
    utilities: (
      background-color: (
        static-properties: (
          --bg-ltn: 50%,
          --bg-opacity: 1,
        )
      ),
    )
  )
);
```

```css
/* main.css */
.bg-red { 
  --bg-ltn: 50%,
  --bg-opacity: 1,
  background-color: ...;
}
.bg-blue { 
  --bg-ltn: 50%,
  --bg-opacity: 1,
  background-color: ...;
}
...
```

---

## Variants

The `variants` setting specifies which variants should be generated for a given CSS property. Settings must be passed in as a map with key value pairs.

```scss
// main.scss
@use "uniform" as * with (
  $config: (
    utilities: (
      margin: (
        shorthand: m,
        properties: (margin),
        variants: (
          1: 0.062rem,
          2: 0.125rem,
          custom: 180px,
        )
      ),
    )
  )
);
```

```css
/* main.css */
.m-1 { 
  margin: 0.062rem,
}
.m-2 { 
  margin: 0.125rem,
}
.m-custom { 
  margin: 180px,
}
...
```

### Null Variants

If `null` is passed in as a value for a variant key the property will omit the variant and use the shorthand instead.

```scss
// main.scss
@use "uniform" as * with (
  $config: (
    utilities: (
      transition-property: (
        shorthand: transition,
        properties: (transition-property),
        variants: (
          null: (
            background-color,
            border-color,
            color,
            fill,
            stroke,
            opacity,
            box-shadow,
            transform,
          )
        )
      ),
    )
  )
);
```

```css
/* main.css */
.transition { 
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
}
...
```

---

## Pseudos

The `pseudos` setting specifies which pseudos set should be generated for a given CSS property. Settings must be passed in as a list.

```scss
// main.scss
@use "uniform" as * with (
  $config: (
    utilities: (
      background-color: (
        pseudos: (
          hover, focus, group-hover
        )
      ),
    )
  )
);
```

---

## Disabling Defaults

Passing in `null` will disable all default settings. If you wish to disable defaults and apply your own, you can do so by applying your own settings to the `extend` map.

```scss
// main.scss
@use "uniform" as * with (
  $config: (
    utility : (
      background-color: (
        variants: null,
        pseudos: null,
        extend: (
          variants: (
            mainRed: red,
            mainBlue: blue
          ),
          pseudos: (hover, focus)
        )
      )
    )
  )
);
```

```css
/* main.css */
.bg-mainRed { background-color: red; }
.bg-mainBlue { background-color: blue; }
```