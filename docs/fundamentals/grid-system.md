---
title: Grid System
description: <span class="color-heading-accent">How to apply</span> basic 12 column grid layouts
date: 2021-01-06
---

## Getting started with Grid

Grids are a useful tool to help containerize page content in columns.



---

## Basic grid usage

You can build traditional grid systems using the `grid` display type with support up to `12` columns. You can combine the `grid` display property with the `grid-cols-<1-12>` property to set the column count.

<div class="bg-gray-50 p-20 radius-md mb-24">
  <div class="grid grid-cols-2 mb-20">
    <div class="h-40 bg-gray-200">
    </div>
    <div class="h-40 bg-gray-400">
    </div>
  </div>

  <div class="grid grid-cols-3 mb-20">
    <div class="h-40 bg-gray-200">
    </div>
    <div class="h-40 bg-gray-400">
    </div>
    <div class="h-40 bg-gray-200">
    </div>
  </div>

  <div class="grid grid-cols-4">
    <div class="h-40 bg-gray-400">
    </div>
    <div class="h-40 bg-gray-200">
    </div>
    <div class="h-40 bg-gray-400">
    </div>
    <div class="h-40 bg-gray-200">
    </div>
  </div>
</div>

```html
<div class="grid grid-cols-2">
  <div>...</div>
  <div>...</div>
</div>

<div class="grid grid-cols-3">
  <div>...</div>
  <div>...</div>
  <div>...</div>
</div>

<div class="grid grid-cols-4">
  <div>...</div>
  <div>...</div>
  <div>...</div>
  <div>...</div>
</div>
```

---

## Gutters

You can create gutters by applying the `gap-<size>` property. The `gap` property supports up to **29** sizes. To see a visual reference of each size please refer to the [cheatsheet](/cheatsheet/sizing-scales).

<div class="bg-gray-50 p-20 radius-md mb-24">
  <div class="grid grid-cols-2 mb-20 gap-36">
    <div class="h-40 bg-gray-200">
    </div>
    <div class="h-40 bg-gray-400">
    </div>
  </div>

  <div class="grid grid-cols-3 mb-20 gap-48">
    <div class="h-40 bg-gray-200">
    </div>
    <div class="h-40 bg-gray-400">
    </div>
    <div class="h-40 bg-gray-200">
    </div>
  </div>

  <div class="grid grid-cols-4 gap-18">
    <div class="h-40 bg-gray-400">
    </div>
    <div class="h-40 bg-gray-200">
    </div>
    <div class="h-40 bg-gray-400">
    </div>
    <div class="h-40 bg-gray-200">
    </div>
  </div>
</div>

```html
<div class="grid grid-cols-2 gap-36">...</div>

<div class="grid grid-cols-3 gap-48">...</div>

<div class="grid grid-cols-4 gap-18">...</div>
```

---

## Responsive Gutters

Gutters can be responsive by prefixing the `gap-<size>` property with the breakpoint variant. For more information on media queries, please refer to [media queries](/docs/media-queries/).

<div class="bg-gray-50 p-20 radius-md mb-24">
  <div class="grid grid-cols-3 gap-12 sm.gap-24 md.gap-28 lg.gap-36">
    <div class="h-40 bg-gray-200">
    </div>
    <div class="h-40 bg-gray-400">
    </div>
    <div class="h-40 bg-gray-200">
    </div>
  </div>
</div>

```html
<div class="grid grid-cols-3 gap-12 sm.gap-24 md.gap-28 lg.gap-36">...</div>
```

---

## Columns

You can specify the column count by applying the `col-<count>` property, if undefined, the column count will be 1.

<div class="bg-gray-50 p-20 radius-md mb-24">
  <div class="grid grid-cols-5 gap-14">
    <div class="h-40 bg-gray-400 col-1">
    </div>
    <div class="h-40 bg-gray-200 col-3">
    </div>
    <div class="h-40 bg-gray-400 col-1">
    </div>
  </div>
</div>

```html
<div class="grid grid-cols-5 gap-14">
  <div class="col-1">...</div>
  <div class="col-3">...</div>
  <div class="col-1">...</div>
</div>
```

---

## Responsive Columns

Both the grid column count and column span count can be responsive by prefixing the breakpoint variant. Adjust your browser width to see this in action.

<div class="bg-gray-50 p-20 radius-md mb-24">
  <div class="grid grid-cols-1 md.grid-cols-5 gap-14">
    <div class="h-40 bg-gray-400 col-1 md.col-1">
    </div>
    <div class="h-40 bg-gray-200 col-1 md.col-3">
    </div>
    <div class="h-40 bg-gray-400 col-1 md.col-1">
    </div>
  </div>
</div>

```html
<div class="grid grid-cols-1 md.grid-cols-5 gap-14">
  <div class="col-1 md.col-1">...</div>
  <div class="col-1 md.col-3">...</div>
  <div class="col-1 md.col-1">...</div>
</div>
```
