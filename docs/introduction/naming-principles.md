---
title: Naming Principles
description: How properties are named for scale and consistency.
date: 2021-01-05
---

## Naming Principles

Due to the immutable and low-level nature of utility classes, Uniform takes a careful and considered approach to how each shorthand and variants are named to ensure they are consistent and easy to remember.

---

## Principles we follow

The following is a list of principles Uniform follows when considering how properties and its variants are named.

### 1. Make use of verbose values

If the property values are verbose, self explanatory, and non-conflicting, then use the value as the shorthand.

```scss
.block { display: block; }
.ease-in-out { transition-timing-function: ease-in-out; }
.underline { color-decoration: underline; }
...
```

### 2. Truncate long property names

If the property name include words that can be shortened without confusion, shorten it.

```scss
.bg-black: { background-color: black; }
.bg-white: { background-color: white; }
...
```

### 3. Single-letter shorthands

Single-characters are only reserved for directions and `width`, `height`, `margin`, and `padding` properties e.g. `w`, `h`, `m`, `p`. For single letter properties, don't separate direction using a delimiter. For example, use `mr` for margin right instead of `m-r`.

```scss
.w-1: { width: 0.25rem; }
.p-2: { padding: 0.5rem; }

.mr-1: { margin-right 0.25rem; }
.mb-1: { margin-bottom 0.25rem; }
...
```

### 4. Single characters for directions

Common directional properties such as `top`, `right`, `bottom`, and `left` are represented with the first letter of the direction e.g. `border-t` for `border-top` etc. For multiple direction, combine the direction letters e.g. `tr` for `top-right`.

```scss
.radius-tl-sm. { border-top-left-radius: 0.25rem; }
.radius-tr-sm. { border-top-right-radius: 0.25rem; }
...
```

### 5. Simplify properties names

Simplify the property name to its most essential and ideal denominator, provided it does not cause confusion or conflict with others properties in the same family.

```scss
.text-left { text-align: left; }
.align-middle { vertical-align: middle; }
.font-xl { font-size: 1.25rem; }
...
```

When dealing with multi-word properties such as `line-height`, simplifying it to just `height` or `line` would misrepresent the meaning and cause confusion. In this case, use a different industry term such as `leading` instead.

### 6. Append unit as characters

Whenever conflicting situations arise, over-qualify the unit by appending an abbreviated characters that represent the unit. All negative values are suffixed with `n`, (short for negative).

```scss
50p: 50%,
n50p: -50%,
100p: 100%,   // p for percent
n100p: -100%,

100vw: 100vw, // vw for viewport width
100vh: 100vh, // vw for viewport width
...
```