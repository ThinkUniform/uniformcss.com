---
title: Pseudo Variants
description: Learn how classes can change based on pseudo interaction.
date: 2021-01-04
---

## Pseudo Interactions

Pseudos allow for utility properties to be conditionally applied based on user interaction. These include interactions such as `hover`, `focus`, and etc.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Pseudo Interactions

Pseudo interactions such as hover can be achieved by appending the pseudo variant to the beginning of your class name e.g. `<pseudo>.<property-variant>`.

<section class="flex align-items-center justify-content-center bg-tertiary bg-50 p-20 h-192 radius-md mb-24">
  <button class="p-12 px-20 bold color-white radius-sm bg-primary hover.bg-550">
    Hover on me
  </button>
</section>

```html
<button class="bg-primary hover.bg-550 ...">Hover on me</button>
```

---

## Pseudo Variant Chart

The following pseudo interactions are available to be activated for each property.

| Variant Name | Pseudo |
| - | - |
| `first` | `:first-child` |
| `last` | `:last-child` |
| `first-type` | `:first-of-type` |
| `last-type` | `:last-of-type` |
| `odd` | `:nth-child(odd)` |
| `even` | `:nth-child(even)` |
| `hover` | `:hover` |
| `focus` | `:focus` |
| `active` | `:active` |
| `visited` | `:visited` |
| `checked` | `:checked` |
| `disabled` | `:disabled` |
| `empty` | `:empty` |
| `focus-within` | `:focus-within` |
| `group-hover` | `.group:hover` |
| `group-focus` | `.group:focus` |

{.text-left style=""}

---

## Enabling Pseudos

By default, only a subset of properties have pseudo variants enabled. To see which pseudos are enabled for each property, refer to the [API Reference](/api-reference). You can enable pseudo variants by passing the variant names to the `pseudos` setting of each property.

```scss
@use "uniform" as * with (
  $config: (
    utility: (
      background-color: (
      	pseudos: (hover, active, focus, group-hover)
      ),
      border-color: (
      	pseudos: (focus-within)
      ),
      color: (
        pseudos: (focus)
      ),
    )
  )
);
```

---

## Pseudo Delimiter

By default, Uniform uses the `.` character to separate pseudos from the property. You can override the default breakpoint delimiter by defining the `pseudo-delimiter` setting in your configuration.

```scss
// main.scss
@use "uniform" as * with (
  $config: (
    pseudo-delimiter: '--',
  )
);
```

```css
/* main.css */
.hover--bg-red:hover { ... }
.hover--bg-orange:hover { ... }
...
```

---

## Extending Pseudos

You can extend the available set of pseudos by passing in key value pairs to the `pseudos` key in your configuration variable.

```scss
@use "uniform" as * with (
  $config: (
    pseudos: (
      nth4: ':nth-child(4)',
      nth5n: ':nth-child(5n)',
    ),
    utility: (
      background-color: (
        pseudos: (nth4, nth5n)
      )
    )
  )
);
```

```css
/* main.css */
.nth4\.block:nth-child(4),
.nth5n\.block:nth-child(5n) { 
  display: block;
}
```

---

### Group Hover

The `group-hover.<property>` is a unique hover pseudo property that allows you to apply properties when the parent container is hovered. You must assign the parent container with a `group` class.

<section class="flex align-items-center justify-content-center bg-tertiary bg-50 p-20 h-192 radius-md mb-24">
  <a class="group bg-white color-black hover.bg-black block p-20 radius-md">
    <h3 class="color-black group-hover.color-mint bold">Group Hover</h3>
    <p class="color-black group-hover.color-white">Hover on this card to see change</p>
  </a>
</section>

```html
<a class="group hover.bg-black">
  <h3 class="color-black group-hover.color-mint bold">Group Hover</h3>
  <p class="color-black group-hover.color-white">Hover on this card to see change</p>
</a>
```

---

### Group Focus

The `group-focus.<property>` functions in a similar way to `group-hover` but allows you to apply properties when the parent container is in focus. You must assign the parent container with a `group` class.

<section class="flex align-items-center justify-content-center bg-tertiary bg-50 p-20 h-192 radius-md mb-24">
  <button class="group bg-white color-black focus.bg-black block p-20 radius-md text-left">
    <h3 class="color-black group-focus.color-mint bold">Group Focus</h3>
    <p class="color-black group-focus.color-white">Focus on this card to see change</p>
  </button>
</section>

```html
<button class="group bg-white color-black focus.bg-black ...">
  <h3 class="color-black group-focus.color-mint bold">Group Focus</h3>
  <p class="color-black group-focus.color-white">Focus on this card to see change</p>
</button>
```

