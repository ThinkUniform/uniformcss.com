---
title: Ratio
description: Learn about the ratio special utility.
date: 2021-01-08
---

## About Ratio

The `ratio` special utility applies percentage based padding in order to simulate various common screen aspect ratios.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Basic Usage

To apply `ratio`, assign the class `ratio-<aspect-ratio>` to any element.



<div class="radius-md bg-gray-50 p-40 mb-20 gutter-y-40">
  <div>
    <div class="ratio-square relative radius-sm bg-gray-500 color-white">
      <div class="absolute top-50p left-50p transform translate-x-n50p translate-y-n50p font-2xl bold">
        Square 1:1
      </div>
    </div>
  </div>

  <div>
    <div class="ratio-16-9 relative radius-sm bg-gray-500 color-white">
      <div class="absolute top-50p left-50p transform translate-x-n50p translate-y-n50p font-2xl bold">
        16:9
      </div>
    </div>
  </div>

  <div>
    <div class="ratio-4-3 relative radius-sm bg-gray-500 color-white">
      <div class="absolute top-50p left-50p transform translate-x-n50p translate-y-n50p font-2xl bold">
        4:3
      </div>
    </div>
  </div>

  <div>
    <div class="ratio-2-1 relative radius-sm bg-gray-500 color-white">
      <div class="absolute top-50p left-50p transform translate-x-n50p translate-y-n50p font-2xl bold">
        2:1
      </div>
    </div>
  </div>

  <div>
    <div class="ratio-16-10 relative radius-sm bg-gray-500 color-white">
      <div class="absolute top-50p left-50p transform translate-x-n50p translate-y-n50p font-2xl bold">
        16:10
      </div>
    </div>
  </div>
</div>

```html
<div class="ratio-square">...</div>
<div class="ratio-16-9">...</div>
<div class="ratio-4-3">...</div>
<div class="ratio-2-1">...</div>
<div class="ratio-16-10">...</div>
```

---

## Disabling Ratio

To disable this special utility, simply pass in `ratio`to the `excludes` setting in your configuration.

```scss
@use "uniform" as * with (
  $config: (
    excludes: (
      ratio   
    )
  )
);
```
