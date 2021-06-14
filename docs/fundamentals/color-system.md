---
title: Color System
description: Flexible HSL color system to fit any design.
date: 2021-01-02
---

## Color System

The ability to customize colors to match design is an important aspect of Uniform CSS. Colors in Uniform are produced using the HSL model which means each color can be manipulated using composable classes to adjust its lightness intensity.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Colors

The base colors are based on the color wheel which consists of three primary colors, three secondary colors, and six tertiary colors. There are also agnostically named colors that are designed to work with your brand and form states.

The following can be applied to color related properties such as `border`, `color`, and `background-color` properties. By default, each color has a lightness value set to `50%`. This is to ensure the `lightness` utilities work consistently and universally across all colors.

<div class="grid grid-cols-2 sm.grid-cols-3 gap-10 overflow-hidden">
  <div class="radius-sm p-12 flex bg-red">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">red • h0 s50</span>
  </div>
  <div class="radius-sm p-12 flex bg-firebrick">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">firebrick • h10 s60</span>
  </div>
  <div class="radius-sm p-12 flex bg-orange">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">orange • h20 s70</span>
  </div>
  <div class="radius-sm p-12 flex bg-gold">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">gold • h40 s90</span>
  </div>
  <div class="radius-sm p-12 flex bg-yellow">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">yellow • h50 s100</span>
  </div>
  <div class="radius-sm p-12 flex bg-lime">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">lime • h80 s70</span>
  </div>
  <div class="radius-sm p-12 flex bg-green">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">green • h110 s60</span>
  </div>
  <div class="radius-sm p-12 flex bg-cyan">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">cyan • h190 s60</span>
  </div>
  <div class="radius-sm p-12 flex flex bg-blue">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">blue • h220 s70</span>
  </div>
  <div class="radius-sm p-12 flex bg-purple">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">purple • h260 s90</span>
  </div>
  <div class="radius-sm p-12 flex bg-violet">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">violet • h280 s70</span>
  </div>
  <div class="radius-sm p-12 flex bg-pink">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">pink • h310 s60</span>
  </div>
  <div class="radius-sm p-12 flex bg-white border-1 border-gray border-200">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">white</span>
  </div>
  <div class="radius-sm p-12 flex bg-black border-1 border-white border-opacity-20">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">black</span>
  </div>
  <div class="radius-sm p-12 flex bg-cool-gray">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">cool-gray • h220 s10</span>
  </div>
  <div class="radius-sm p-12 flex bg-gray">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">gray • h220 s5</span>
  </div>
  <div class="radius-sm p-12 flex bg-warm-gray">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">warm-gray • h24 s10</span>
  </div>
  <div class="radius-sm p-12 flex bg-primary">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">primary • h220 s80</span>
  </div>
  <div class="radius-sm p-12 flex bg-secondary">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">secondary • h220 s60</span>
  </div>
  <div class="radius-sm p-12 flex bg-tertiary">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">tertiary • h220 s40</span>
  </div>
  <div class="radius-sm p-12 flex bg-success">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">success • h80 s60</span>
  </div>
  <div class="radius-sm p-12 flex bg-warning">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">warning • h40 s60</span>
  </div>
  <div class="radius-sm p-12 flex bg-danger">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">danger • h0 s60</span>
  </div>
</div>


---

## Basic Usage

To apply colors, use `<property-shorthand>-<color>`.

```html
<div class="bg-pink color-white">
  pink background with white text
</div>
<div class="color-blue">
  blue text
</div>
<div class="border-1 border-orange">
  1 pixel orange border
</div>
```

---

## Lightness

Since colors are defined using the HSL model, it is possible to control the lightness level without having to define every tint and shade.

<div class="grid grid-cols-2 sm.grid-cols-3 gap-10 overflow-hidden mb-24">
  <div class="radius-sm p-12 flex bg-primary bg-white border-1 border-gray border-200">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">white • 100%</span>
  </div>
  <div class="radius-sm p-12 flex bg-primary bg-50">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">50 • 95%</span>
  </div>
  <div class="radius-sm p-12 flex bg-primary bg-100">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">100 • 90%</span>
  </div>
  <div class="radius-sm p-12 flex bg-primary bg-150">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">150 • 85%</span>
  </div>
  <div class="radius-sm p-12 flex bg-primary bg-200">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">200 • 80%</span>
  </div>
  <div class="radius-sm p-12 flex bg-primary bg-250">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">250 • 75%</span>
  </div>
  <div class="radius-sm p-12 flex bg-primary bg-300">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">300 • 70%</span>
  </div>
  <div class="radius-sm p-12 flex bg-primary bg-350">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">350 • 65%</span>
  </div>
  <div class="radius-sm p-12 flex bg-primary bg-400">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">400 • 60%</span>
  </div>
  <div class="radius-sm p-12 flex bg-primary bg-450 border-1 border-white border-opacity-20">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">450 • 55%</span>
  </div>
  <div class="radius-sm p-12 flex bg-primary bg-500 border-1 border-white border-opacity-20">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">500 • 50%</span>
  </div>
  <div class="radius-sm p-12 flex bg-primary bg-550 border-1 border-white border-opacity-20">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">550 • 45%</span>
  </div>
  <div class="radius-sm p-12 flex bg-primary bg-600 border-1 border-white border-opacity-20">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">600 • 40%</span>
  </div>
  <div class="radius-sm p-12 flex bg-primary bg-650 border-1 border-white border-opacity-20">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">650 • 35%</span>
  </div>
  <div class="radius-sm p-12 flex bg-primary bg-700 border-1 border-white border-opacity-20">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">700 • 30%</span>
  </div>
  <div class="radius-sm p-12 flex bg-primary bg-750 border-1 border-white border-opacity-20">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">750 • 25%</span>
  </div>
  <div class="radius-sm p-12 flex bg-primary bg-800 border-1 border-white border-opacity-20">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">800 • 20%</span>
  </div>
  <div class="radius-sm p-12 flex bg-primary bg-850 border-1 border-white border-opacity-20">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">850 • 15%</span>
  </div>
  <div class="radius-sm p-12 flex bg-primary bg-900 border-1 border-white border-opacity-20">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">900 • 10%</span>
  </div>
  <div class="radius-sm p-12 flex bg-primary bg-950 border-1 border-white border-opacity-20">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">950 • 5%</span>
  </div>
  <div class="radius-sm p-12 flex bg-primary bg-black border-1 border-white border-opacity-20">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">black • 0%</span>
  </div>
</div>


```html
<div class="bg-primary bg-white">...</div>
<div class="bg-primary bg-50">...</div>
<div class="bg-primary bg-100">...</div>
<div class="bg-primary bg-150">...</div>
<div class="bg-primary bg-200">...</div>
<div class="bg-primary bg-250">...</div>
<div class="bg-primary bg-300">...</div>
<div class="bg-primary bg-350">...</div>
<div class="bg-primary bg-400">...</div>
<div class="bg-primary bg-450">...</div>
<div class="bg-primary bg-500">...</div>
<div class="bg-primary bg-550">...</div>
<div class="bg-primary bg-600">...</div>
<div class="bg-primary bg-650">...</div>
<div class="bg-primary bg-700">...</div>
<div class="bg-primary bg-750">...</div>
<div class="bg-primary bg-800">...</div>
<div class="bg-primary bg-850">...</div>
<div class="bg-primary bg-900">...</div>
<div class="bg-primary bg-950">...</div>
<div class="bg-primary bg-black">...</div>
```

---

## Opacity

The opacity of each color can be controlled using `<property>-<opacity>`.

<div class="grid grid-cols-2 sm.grid-cols-3 gap-10 overflow-hidden mb-24">
  <div class="radius-sm p-12 flex bg-blue bg-opacity-0 border-1 border-gray border-200">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">opacity-0</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-opacity-2 border-1 border-gray border-200">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">opacity-2</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-opacity-4 border-1 border-gray border-200">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">opacity-4</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-opacity-6">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">opacity-6</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-opacity-8">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">opacity-8</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-opacity-10">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">opacity-10</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-opacity-15">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">opacity-15</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-opacity-20">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">opacity-20</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-opacity-25">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">opacity-25</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-opacity-30">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">opacity-30</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-opacity-35">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">opacity-35</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-opacity-40">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">opacity-40</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-opacity-45">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">opacity-45</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-opacity-50">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">opacity-50</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-opacity-55">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">opacity-55</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-opacity-60">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">opacity-60</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-opacity-65">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">opacity-65</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-opacity-70">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">opacity-70</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-opacity-75">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">opacity-75</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-opacity-80">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">opacity-80</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-opacity-85">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">opacity-85</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-opacity-90">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">opacity-90</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-opacity-95">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">opacity-95</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-opacity-100">
    <span class="font-xs leading-none bold inline-flex px-6 py-4 radius-xs bg-black bg-opacity-20 color-white">opacity-100</span>
  </div>
</div>

```html
<div class="bg-blue bg-opacity-0">...</div>
<div class="bg-blue bg-opacity-2">...</div>
<div class="bg-blue bg-opacity-4">...</div>
<div class="bg-blue bg-opacity-6">...</div>
<div class="bg-blue bg-opacity-8">...</div>
<div class="bg-blue bg-opacity-10">...</div>
<div class="bg-blue bg-opacity-20">...</div>
<div class="bg-blue bg-opacity-20">...</div>
<div class="bg-blue bg-opacity-40">...</div>
<div class="bg-blue bg-opacity-50">...</div>
<div class="bg-blue bg-opacity-80">...</div>
<div class="bg-blue bg-opacity-90">...</div>
<div class="bg-blue bg-opacity-100">...</div>
```