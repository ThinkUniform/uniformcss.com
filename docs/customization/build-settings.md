---
title: Build Settings
description: Explore global build settings for Uniform.
date: 2021-01-03
---

## Build Settings

Build settings are global in influence and controls how your utility classes are generated. These include the option of appending a prefix, changing the shorthand delimiter, and applying `!important` tags and etc.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Build Setting Usage

Build settings control how classes should look on a global level.

```scss
// main.scss
@use "uniform" as * with (
  $config: (
    important: true,
    prefix: 'myPrefix-',
  )
);
```

```css
/* main.css */
.myPrefix-block { display: block !important; }
.myPrefix-inline { display: inline !important; }
...
```

---

## Basic Settings

The following basic build setting definitions apply.

| Setting | Default | Description |
| - | - | - |
| `important`{.code-a} | `false` | Apply `!important` to each property. |
| `prefix` | `null` | Append a namespace to the beginning of each class name. |
| `delimiter` | `'-'` | Specifies the delimiter that separates shorthand name to its variant. |
| `pseudo-delimiter` | `'.'` | Specifies the delimiter of pseudo variants. |
| `screen-delimiter` | `'.'` | Specifies the delimiter of breakpoint variants. |

{.text-left style=""}

---

## Advanced Settings

The following advanced build setting definitions apply.

| Setting | Default | Description |
| - | - | - |
| `output` | `css` | Controls the format of output. |
| `comma-compression` | `false` | Collapses pseudo variants. |
| `css-variables` | `true` | Enable theme overrides via CSS variables. |

{.text-left style=""}

### Output Mode

The Output mode setting control the format of how classes are represented. There are three different output modes, `css`, `json`, and `headless`. 

- When `output` is set as `'css'`, Uniform will generate classes as css. 

- When `output` is set as `'json'`, Uniform will generate a JSON schema of all available classes with customizations applied. This is particularly useful for auto-generating your own class references docs. 

- When `output` is set as `'headless'`, you will still have access to API Functions, the `apply` mixin, and other Uniform Sass features, however, no default classes will be included on compilation. 

```scss
// main.scss
@use "uniform" as * with (
  $config: (
    output: 'json',
    excludes: (all),
    includes: (text-align)
  )
);
```

```json
{
  "text-align": {
    "important": "false",
    "extra-selector": "",
    "responsive": "true",
    "pseudos": "none",
    "classes": {
      "text-left": {
        "text-align": "left"
      },
      "text-center": {
        "text-align": "center"
      },
      "text-right": {
        "text-align": "right"
      },
      "text-justify": {
        "text-align": "justify"
      }
    }
  }
}
...
```



### Comma Compression

When `comma-compression` is enabled, pseudo variants will be joined to its standard parent using the comma selector. Enabling this setting will reduce the final output size however slightly increase build time.

```scss
// main.scss

@use "uniform" as * with (
  $config: (    
    comma-compression: true
  )
);
```

```css
/* main.css */

.bg-opacity-50, 
.focus\.bg-opacity-50:focus, 
.group:hover .group-hover\.bg-opacity-50, 
.hover\.bg-opacity-50:hover {
  --bg-opacity: 0.5;
}
.bg-opacity-55, 
.focus\.bg-opacity-55:focus, 
.group:hover .group-hover\.bg-opacity-55, 
.hover\.bg-opacity-55:hover {
  --bg-opacity: 0.55;
}
.bg-opacity-60, 
.focus\.bg-opacity-60:focus, 
.group:hover .group-hover\.bg-opacity-60, 
.hover\.bg-opacity-60:hover {
  --bg-opacity: 0.6;
}
...
```

### CSS Variables

When `css-variables` is disabled, instead of using css custom properties, theme values becone statically represented.


```scss
// main.scss

@use "uniform" as * with (
  $config: (    
    css-variables: false // `true` by default
  )
);
```

```css
/* main.css */
.ultralight {
  font-weight: 100;
}

.extralight {
  font-weight: 200;
}

.light {
  font-weight: 300;
}

.regular {
  font-weight: 400;
}

...
...
```