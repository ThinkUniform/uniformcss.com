---
title: Sizes
description: <span class="color-heading-accent">Customize the size scale</span> setting in Uniform CSS
date: 2021-01-04
---

## Sizes

Sizes are applied in varying degree of ranges across size related property such as `width` and `margin`. The sizing scale can be extended, replaced, and overwritten through your configuration. For more information on sizes, visit [Sizing System](/docs/sizing-system)



---

## Default Colors

The following default colors are applied. To see a more visual reference of all the colors, visit [Cheatsheet](/cheatsheet/colors).

:::radius-lg h-512 overflow-auto

```scss
@use "uniform" as * with (
  $config: (
    positive-sizes: (
      1: 0.062rem,
      2: 0.125rem,
      4: 0.25rem,
      6: 0.375rem,
      8: 0.5rem,
      10: 0.625rem,
      12: 0.75rem,
      14: 0.875rem,
      16: 1rem,
      18: 1.125rem,
      20: 1.25rem,
      24: 1.5rem,
      28: 1.75rem,
      32: 2rem,
      36: 2.25rem,
      40: 2.5rem,
      48: 3rem,
      56: 3.5rem,
      64: 4rem,
      72: 4.5rem,
      80: 5rem,
      96: 6rem,
      112: 7rem,
      128: 8rem,
      144: 9rem,
      160: 10rem,
      192: 12rem,
      224: 14rem,
      256: 16rem,
      288: 18rem,
      320: 20rem,
      384: 24rem,
      448: 28rem,
      512: 32rem,
      576: 36rem,
      640: 40rem,
      768: 48rem,
      896: 56rem,
      1024: 64rem,
      1152: 72rem,
      1280: 80rem,
      1536: 96rem
    ),

    negative-sizes: (
      n1: -0.062rem,
      n2: -0.125rem,
      n4: -0.25rem,
      n6: -0.375rem,
      n8: -0.5rem,
      n10: -0.625rem,
      n12: -0.75rem,
      n14: -0.875rem,
      n16: -1rem,
      n18: -1.125rem,
      n20: -1.25rem,
      n24: -1.5rem,
      n28: -1.75rem,
      n32: -2rem,
      n36: -2.25rem,
      n40: -2.5rem,
      n48: -3rem,
      n56: -3.5rem,
      n64: -4rem,
      n72: -4.5rem,
      n80: -5rem,
      n96: -6rem,
      n112: -7rem,
      n128: -8rem,
      n144: -9rem,
      n160: -10rem,
      n192: -12rem,
      n224: -14rem,
      n256: -16rem,
      n288: -18rem,
      n320: -20rem,
      n384: -24rem,
      n448: -28rem,
      n512: -32rem,
      n576: -36rem,
      n640: -40rem,
      n768: -48rem,
      n896: -56rem,
      n1024: -64rem,
      n1152: -72rem,
      n1280: -80rem,
      n1536: -96rem
    )
  )
);
```
:::

---

## Customizing via Sass

Size settings are available as two groups, `positive-sizes` and `negative-sizes`. You can add your own sizes by passing in key value pairs to each of these maps in your configuration.

```scss
// main.scss
@use "uniform" as * with (
  $config: (
    positive-sizes: (
      400: 400px
    ),
    negative-sizes: (
      n400: -400px
    )
  )
);
```

```css
/* main.css */
.mt-400 {
  margin-top: 400px;
}
.mt-n400 {
  margin-top: -400px;
}
...
```

### Why are there two groups?

During the Sass compilation process, the sizing maps are shared and used to generate size related properties. However, negative sizes are only used for properties such as `translate` and `margin` and do not apply to properties such as `width` and `padding`.

---

## Disabling Defaults

If you wish to remove defaults, pass `null` to any theme property. Additionally, you can add your own by assigning theme settings to the `extend` map.

```scss
@use "uniform" as * with (
  $config: (
    positive-sizes: null,
    negative-sizes: null,

    extend: (
      positive-sizes: (
        200: 200px
      ),
      negative-sizes: (
        n200: -200px
      )
    )
  )
)
