---
title: Color System
description: Flexible colors to suit any design system.
date: 2021-01-02
---

## Color System

The ability to intuitively customize colors to suit your deisgn system is an important aspect of Uniform. Uniform provides a wide spectrum of colors, each with 11 tints and shades to choose from. Tints and Shades in Uniform follow the `50, 100, 200 ...` system commonly seen in other color systems.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

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

## Base Colors

The following base colors are available to be be applied to color related properties such as `border`, `color`, and `background-color`. Colors are generated using the [Colorbox](https://colorbox.io/) color generater developed by Lyft's design team. A importable json configuration can be found under the file `colorbox.json` inside the `uniform` directory.

:::markdown

| Color | Name { .w-160 } | HEX |
| - | - | - |
| { .bg-white } | `white` | `#ffffff` |
| { .bg-black } | `black` | `#000000` |
| { .bg-warm-gray-50 } | `warm-gray-50` | `#F7F6F5` |
| { .bg-warm-gray-100 } | `warm-gray-100` | `#F0EDEC` |
| { .bg-warm-gray-200 } | `warm-gray-200` | `#E0DCDA` |
| { .bg-warm-gray-300 } | `warm-gray-300` | `#D1CBC8` |
| { .bg-warm-gray-400 } | `warm-gray-400` | `#C1BAB6` |
| { .bg-warm-gray-500 } | `warm-gray-500` | `#A29994` |
| { .bg-warm-gray-600 } | `warm-gray-600` | `#837974` |
| { .bg-warm-gray-700 } | `warm-gray-700` | `#645B56` |
| { .bg-warm-gray-800 } | `warm-gray-800` | `#453D39` |
| { .bg-warm-gray-900 } | `warm-gray-900` | `#362F2C` |
| { .bg-warm-gray-950 } | `warm-gray-950` | `#26211F` |
| { .bg-gray-50 } | `gray-50` | `#F7F7F7` |
| { .bg-gray-100 } | `gray-100` | `#F0F0F0` |
| { .bg-gray-200 } | `gray-200` | `#E0E0E0` |
| { .bg-gray-300 } | `gray-300` | `#D1D1D1` |
| { .bg-gray-400 } | `gray-400` | `#C1C1C1` |
| { .bg-gray-500 } | `gray-500` | `#A2A2A2` |
| { .bg-gray-600 } | `gray-600` | `#838383` |
| { .bg-gray-700 } | `gray-700` | `#646464` |
| { .bg-gray-800 } | `gray-800` | `#454545` |
| { .bg-gray-900 } | `gray-900` | `#363636` |
| { .bg-gray-950 } | `gray-950` | `#262626` |
| { .bg-cool-gray-50 } | `cool-gray-50` | `#F4F5F7` |
| { .bg-cool-gray-100 } | `cool-gray-100` | `#E9EBF0` |
| { .bg-cool-gray-200 } | `cool-gray-200` | `#D3D8E0` |
| { .bg-cool-gray-300 } | `cool-gray-300` | `#BFC5D1` |
| { .bg-cool-gray-400 } | `cool-gray-400` | `#ABB2C1` |
| { .bg-cool-gray-500 } | `cool-gray-500` | `#8690A2` |
| { .bg-cool-gray-600 } | `cool-gray-600` | `#656F83` |
| { .bg-cool-gray-700 } | `cool-gray-700` | `#485164` |
| { .bg-cool-gray-800 } | `cool-gray-800` | `#2D3545` |
| { .bg-cool-gray-900 } | `cool-gray-900` | `#222836` |
| { .bg-cool-gray-950 } | `cool-gray-950` | `#171C26` |
| { .bg-red-50 } | `red-50` | `#FDE1E5` |
| { .bg-red-100 } | `red-100` | `#FBC3C9` |
| { .bg-red-200 } | `red-200` | `#F7898F` |
| { .bg-red-300 } | `red-300` | `#EF5659` |
| { .bg-red-400 } | `red-400` | `#E72B26` |
| { .bg-red-500 } | `red-500` | `#CB1200` |
| { .bg-red-600 } | `red-600` | `#A01500` |
| { .bg-red-700 } | `red-700` | `#841300` |
| { .bg-red-800 } | `red-800` | `#691000` |
| { .bg-red-900 } | `red-900` | `#4E0D00` |
| { .bg-red-950 } | `red-950` | `#330800` |
| { .bg-orange-50 } | `orange-50` | `#FBEBD6` |
| { .bg-orange-100 } | `orange-100` | `#F8D5AF` |
| { .bg-orange-200 } | `orange-200` | `#F1A363` |
| { .bg-orange-300 } | `orange-300` | `#DF742E` |
| { .bg-orange-400 } | `orange-400` | `#CE4700` |
| { .bg-orange-500 } | `orange-500` | `#BE3E00` |
| { .bg-orange-600 } | `orange-600` | `#AD3700` |
| { .bg-orange-700 } | `orange-700` | `#8D2900` |
| { .bg-orange-800 } | `orange-800` | `#792200` |
| { .bg-orange-900 } | `orange-900` | `#661C00` |
| { .bg-orange-950 } | `orange-950` | `#401100` |
| { .bg-yellow-50 } | `yellow-50` | `#FDF8D2` |
| { .bg-yellow-100 } | `yellow-100` | `#FBEDA6` |
| { .bg-yellow-200 } | `yellow-200` | `#F7CC4F` |
| { .bg-yellow-300 } | `yellow-300` | `#ECA713` |
| { .bg-yellow-400 } | `yellow-400` | `#E18C00` |
| { .bg-yellow-500 } | `yellow-500` | `#D27F00` |
| { .bg-yellow-600 } | `yellow-600` | `#C37300` |
| { .bg-yellow-700 } | `yellow-700` | `#A45B00` |
| { .bg-yellow-800 } | `yellow-800` | `#884B00` |
| { .bg-yellow-900 } | `yellow-900` | `#6B3B00` |
| { .bg-yellow-950 } | `yellow-950` | `#331B00` |
| { .bg-lime-50 } | `lime-50` | `#DCFBD2` |
| { .bg-lime-100 } | `lime-100` | `#C0F7A6` |
| { .bg-lime-200 } | `lime-200` | `#9CEF53` |
| { .bg-lime-300 } | `lime-300` | `#83DB0B` |
| { .bg-lime-400 } | `lime-400` | `#88C800` |
| { .bg-lime-500 } | `lime-500` | `#80B500` |
| { .bg-lime-600 } | `lime-600` | `#78A200` |
| { .bg-lime-700 } | `lime-700` | `#637D00` |
| { .bg-lime-800 } | `lime-800` | `#536800` |
| { .bg-lime-900 } | `lime-900` | `#425200` |
| { .bg-lime-950 } | `lime-950` | `#202600` |
| { .bg-green-50 } | `green-50` | `#E3FBE0` |
| { .bg-green-100 } | `green-100` | `#C4F7C1` |
| { .bg-green-200 } | `green-200` | `#86EF8D` |
| { .bg-green-300 } | `green-300` | `#4FDB63` |
| { .bg-green-400 } | `green-400` | `#20C845` |
| { .bg-green-500 } | `green-500` | `#12B539` |
| { .bg-green-600 } | `green-600` | `#07A22F` |
| { .bg-green-700 } | `green-700` | `#007D26` |
| { .bg-green-800 } | `green-800` | `#006820` |
| { .bg-green-900 } | `green-900` | `#00521A` |
| { .bg-green-950 } | `green-950` | `#00260D` |
| { .bg-teal-50 } | `teal-50` | `#E7FDF3` |
| { .bg-teal-100 } | `teal-100` | `#D0FBE8` |
| { .bg-teal-200 } | `teal-200` | `#A3F7D6` |
| { .bg-teal-300 } | `teal-300` | `#4CEFC2` |
| { .bg-teal-400 } | `teal-400` | `#12DBB4` |
| { .bg-teal-500 } | `teal-500` | `#00C8B1` |
| { .bg-teal-600 } | `teal-600` | `#00A297` |
| { .bg-teal-700 } | `teal-700` | `#007D79` |
| { .bg-teal-800 } | `teal-800` | `#006865` |
| { .bg-teal-900 } | `teal-900` | `#005251` |
| { .bg-teal-950 } | `teal-950` | `#002626` |
| { .bg-cyan-50 } | `cyan-50` | `#EAFDFD` |
| { .bg-cyan-100 } | `cyan-100` | `#D5FAFB` |
| { .bg-cyan-200 } | `cyan-200` | `#ACF2F7` |
| { .bg-cyan-300 } | `cyan-300` | `#5DDAF0` |
| { .bg-cyan-400 } | `cyan-400` | `#26B8DD` |
| { .bg-cyan-500 } | `cyan-500` | `#0097CB` |
| { .bg-cyan-600 } | `cyan-600` | `#0078A8` |
| { .bg-cyan-700 } | `cyan-700` | `#005C85` |
| { .bg-cyan-800 } | `cyan-800` | `#004D71` |
| { .bg-cyan-900 } | `cyan-900` | `#003E5C` |
| { .bg-cyan-950 } | `cyan-950` | `#002233` |
| { .bg-blue-50 } | `blue-50` | `#E8F1FD` |
| { .bg-blue-100 } | `blue-100` | `#D1E2FB` |
| { .bg-blue-200 } | `blue-200` | `#A3C6F7` |
| { .bg-blue-300 } | `blue-300` | `#4D91F0` |
| { .bg-blue-400 } | `blue-400` | `#1267DD` |
| { .bg-blue-500 } | `blue-500` | `#0054CB` |
| { .bg-blue-600 } | `blue-600` | `#0046A8` |
| { .bg-blue-700 } | `blue-700` | `#003785` |
| { .bg-blue-800 } | `blue-800` | `#002F71` |
| { .bg-blue-900 } | `blue-900` | `#00265C` |
| { .bg-blue-950 } | `blue-950` | `#001533` |
| { .bg-indigo-50 } | `indigo-50` | `#F0F0FD` |
| { .bg-indigo-100 } | `indigo-100` | `#E2E1FB` |
| { .bg-indigo-200 } | `indigo-200` | `#C7C3F8` |
| { .bg-indigo-300 } | `indigo-300` | `#9A8BF1` |
| { .bg-indigo-400 } | `indigo-400` | `#7A60DF` |
| { .bg-indigo-500 } | `indigo-500` | `#6039CE` |
| { .bg-indigo-600 } | `indigo-600` | `#4A23AD` |
| { .bg-indigo-700 } | `indigo-700` | `#38128D` |
| { .bg-indigo-800 } | `indigo-800` | `#300D79` |
| { .bg-indigo-900 } | `indigo-900` | `#280A66` |
| { .bg-indigo-950 } | `indigo-950` | `#180440` |
| { .bg-purple-50 } | `purple-50` | `#F3EEFD` |
| { .bg-purple-100 } | `purple-100` | `#E8DDFB` |
| { .bg-purple-200 } | `purple-200` | `#D4BCF7` |
| { .bg-purple-300 } | `purple-300` | `#B47DEF` |
| { .bg-purple-400 } | `purple-400` | `#9A4EDB` |
| { .bg-purple-500 } | `purple-500` | `#8526C8` |
| { .bg-purple-600 } | `purple-600` | `#6B11A2` |
| { .bg-purple-700 } | `purple-700` | `#52027D` |
| { .bg-purple-800 } | `purple-800` | `#430068` |
| { .bg-purple-900 } | `purple-900` | `#360052` |
| { .bg-purple-950 } | `purple-950` | `#1A0026` |
| { .bg-pink-50 } | `pink-50` | `#FDEEFD` |
| { .bg-pink-100 } | `pink-100` | `#FBDCF9` |
| { .bg-pink-200 } | `pink-200` | `#F7BAF0` |
| { .bg-pink-300 } | `pink-300` | `#EF7AD4` |
| { .bg-pink-400 } | `pink-400` | `#DB4AAF` |
| { .bg-pink-500 } | `pink-500` | `#C82187` |
| { .bg-pink-600 } | `pink-600` | `#A20D63` |
| { .bg-pink-700 } | `pink-700` | `#7D0043` |
| { .bg-pink-800 } | `pink-800` | `#680036` |
| { .bg-pink-900 } | `pink-900` | `#52002A` |
| { .bg-pink-950 } | `pink-950` | `#260013` |

:::

---

## Color Opacity

All colors are initially configured in hexadecimal format e.g. `#ffffff`. However, during the build process, Uniform will convert each color to their rgba equivalent values. By doing so, you can take advantage of the `opacity` property by manipulating the alpha channel of each color. For more information, check out [Opacities](/docs/opacities/).

| Color | Name { .w-160 } | Opacity |
| - | - | - |
| Opacity 2 { .bold .color-blue-500 .color-opacity-2  } | `opacity-2` | `opacity: 0.02;` |
| Opacity 4 { .bold .color-blue-500 .color-opacity-4  } | `opacity-4` | `opacity: 0.04;` |
| Opacity 6 { .bold .color-blue-500 .color-opacity-6  } | `opacity-6` | `opacity: 0.06;` |
| Opacity 8 { .bold .color-blue-500 .color-opacity-8  } | `opacity-8` | `opacity: 0.08;` |
| Opacity 10 { .bold .color-blue-500 .color-opacity-10  } | `opacity-10` | `opacity: 10;` |
| Opacity 15 { .bold .color-blue-500 .color-opacity-15  } | `opacity-15` | `opacity: 15;` |
| Opacity 20 { .bold .color-blue-500 .color-opacity-20  } | `opacity-20` | `opacity: 20;` |
| Opacity 25 { .bold .color-blue-500 .color-opacity-25  } | `opacity-25` | `opacity: 25;` |
| Opacity 30 { .bold .color-blue-500 .color-opacity-30  } | `opacity-30` | `opacity: 30;` |
| Opacity 35 { .bold .color-blue-500 .color-opacity-35  } | `opacity-35` | `opacity: 35;` |
| Opacity 40 { .bold .color-blue-500 .color-opacity-40  } | `opacity-40` | `opacity: 40;` |
| Opacity 45 { .bold .color-blue-500 .color-opacity-45  } | `opacity-45` | `opacity: 45;` |
| Opacity 50 { .bold .color-blue-500 .color-opacity-50  } | `opacity-50` | `opacity: 50;` |
| Opacity 55 { .bold .color-blue-500 .color-opacity-55  } | `opacity-55` | `opacity: 55;` |
| Opacity 60 { .bold .color-blue-500 .color-opacity-60  } | `opacity-60` | `opacity: 60;` |
| Opacity 65 { .bold .color-blue-500 .color-opacity-65  } | `opacity-65` | `opacity: 65;` |
| Opacity 70 { .bold .color-blue-500 .color-opacity-70  } | `opacity-70` | `opacity: 70;` |
| Opacity 75 { .bold .color-blue-500 .color-opacity-75  } | `opacity-75` | `opacity: 75;` |
| Opacity 80 { .bold .color-blue-500 .color-opacity-80  } | `opacity-80` | `opacity: 80;` |
| Opacity 85 { .bold .color-blue-500 .color-opacity-85  } | `opacity-85` | `opacity: 85;` |
| Opacity 90 { .bold .color-blue-500 .color-opacity-90  } | `opacity-90` | `opacity: 90;` |
| Opacity 95 { .bold .color-blue-500 .color-opacity-95  } | `opacity-95` | `opacity: 95;` |
| Opacity 100 { .bold .color-blue-500 .color-opacity-100  } | `opacity-100` | `opacity: 100;` |
