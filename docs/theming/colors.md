---
title: Colors
description: <span class="color-heading-accent">Override and extend</span> colors in Uniform CSS
date: 2021-01-02
---

## Colors

There are two ways of customizing colors in Uniform; Sass and CSS variables. The native Sass configuration method provides the most flexibility, whereas the CSS variables method is the easiest to configure but comes with limitations.



---

## Default Colors

The following default colors are applied. To see a more visual reference of all the colors, visit [Cheatsheet](/cheatsheet/colors).

:::radius-lg h-512 overflow-auto

```scss
@use "uniform" as * with (
  $config: (
    colors: (
      white: #ffffff,
      black: #000000,
      gray-50: #F4F5F7,
      gray-100: #E9EBF0,
      gray-200: #D3D8E0,
      gray-300: #BFC5D1,
      gray-400: #ABB2C1,
      gray-500: #8690A2,
      gray-600: #656F83,
      gray-700: #485164,
      gray-800: #2D3545,
      gray-900: #222836,
      gray-950: #171C26,
      red-50: #FDE1E5,
      red-100: #FBC3C9,
      red-200: #F7898F,
      red-300: #EF5659,
      red-400: #E72B26,
      red-500: #CB1200,
      red-600: #A01500,
      red-700: #841300,
      red-800: #691000,
      red-900: #4E0D00,
      red-950: #330800,
      orange-50: #FBEBD6,
      orange-100: #F8D5AF,
      orange-200: #F1A363,
      orange-300: #DF742E,
      orange-400: #CE4700,
      orange-500: #BE3E00,
      orange-600: #AD3700,
      orange-700: #8D2900,
      orange-800: #792200,
      orange-900: #661C00,
      orange-950: #401100,
      yellow-50: #FDF8D2,
      yellow-100: #FBEDA6,
      yellow-200: #F7CC4F,
      yellow-300: #ECA713,
      yellow-400: #E18C00,
      yellow-500: #D27F00,
      yellow-600: #C37300,
      yellow-700: #A45B00,
      yellow-800: #884B00,
      yellow-900: #6B3B00,
      yellow-950: #331B00,
      lime-50: #DCFBD2,
      lime-100: #C0F7A6,
      lime-200: #9CEF53,
      lime-300: #83DB0B,
      lime-400: #88C800,
      lime-500: #80B500,
      lime-600: #78A200,
      lime-700: #637D00,
      lime-800: #536800,
      lime-900: #425200,
      lime-950: #202600,
      green-50: #E3FBE0,
      green-100: #C4F7C1,
      green-200: #86EF8D,
      green-300: #4FDB63,
      green-400: #20C845,
      green-500: #12B539,
      green-600: #07A22F,
      green-700: #007D26,
      green-800: #006820,
      green-900: #00521A,
      green-950: #00260D,
      teal-50: #E7FDF3,
      teal-100: #D0FBE8,
      teal-200: #A3F7D6,
      teal-300: #4CEFC2,
      teal-400: #12DBB4,
      teal-500: #00C8B1,
      teal-600: #00A297,
      teal-700: #007D79,
      teal-800: #006865,
      teal-900: #005251,
      teal-950: #002626,
      cyan-50: #EAFDFD,
      cyan-100: #D5FAFB,
      cyan-200: #ACF2F7,
      cyan-300: #5DDAF0,
      cyan-400: #26B8DD,
      cyan-500: #0097CB,
      cyan-600: #0078A8,
      cyan-700: #005C85,
      cyan-800: #004D71,
      cyan-900: #003E5C,
      cyan-950: #002233,
      blue-50: #E8F1FD,
      blue-100: #D1E2FB,
      blue-200: #A3C6F7,
      blue-300: #4D91F0,
      blue-400: #1267DD,
      blue-500: #0054CB,
      blue-600: #0046A8,
      blue-700: #003785,
      blue-800: #002F71,
      blue-900: #00265C,
      blue-950: #001533,
      indigo-50: #F0F0FD,
      indigo-100: #E2E1FB,
      indigo-200: #C7C3F8,
      indigo-300: #9A8BF1,
      indigo-400: #7A60DF,
      indigo-500: #6039CE,
      indigo-600: #4A23AD,
      indigo-700: #38128D,
      indigo-800: #300D79,
      indigo-900: #280A66,
      indigo-950: #180440,
      purple-50: #F3EEFD,
      purple-100: #E8DDFB,
      purple-200: #D4BCF7,
      purple-300: #B47DEF,
      purple-400: #9A4EDB,
      purple-500: #8526C8,
      purple-600: #6B11A2,
      purple-700: #52027D,
      purple-800: #430068,
      purple-900: #360052,
      purple-950: #1A0026,
      pink-50: #FDEEFD,
      pink-100: #FBDCF9,
      pink-200: #F7BAF0,
      pink-300: #EF7AD4,
      pink-400: #DB4AAF,
      pink-500: #C82187,
      pink-600: #A20D63,
      pink-700: #7D0043,
      pink-800: #680036,
      pink-900: #52002A,
      pink-950: #260013
    )
  )
);
```

:::

---

## Customize via Sass

To customize colors, pass in key value pairs to the `colors` setting in your configuration. Color values must be defined in hexadecimal format. During the build process, colors will be automatically converted to RGB values.

```scss
// main.scss

@use "uniform" as * with (
  $config: (
    colors: (
      primary: #0054CB
    )
  )
);
```

```css
/* main.css */

:root {
  --primary: 0,84,203;
}

.bg-primary {
  --bg-opacity: 1;
  background-color: rgba(var(--primary), var(--bg-opacity));
}
...
```

---

## Disabling Default Colors

If you wish to remove defaults, pass `null` to any theme property. Additionally, you can add your own by assigning theme settings to the `extend` map.

```scss
// main.scss

@use "uniform" as * with (
  $config: (
    colors: null, // disable default colors

    extend: (
      colors: (
        sunset-50: #FBEBD6,
        sunset-100: #F8D5AF,
        sunset-200: #F1A363,
        sunset-300: #DF742E,
        sunset-400: #CE4700,
        sunset-500: #BE3E00,
        sunset-600: #AD3700,
        sunset-700: #8D2900,
        sunset-800: #792200,
        sunset-900: #661C00,
        sunset-950: #401100,
      )
    )
  )
);
```

---

## Customize via CDN

If you are using the precompiled version of Uniform, you can customize theme properties by overriding predefined CSS variables. This method can be particularly useful for when you wish to get started quickly without worrying about a Sass build process.

```css
/* main.css */

:root {
  --white: 255,255,255;
  --black: 0,0,0;
  --gray-50: 244,245,247;
  --gray-100: 233,235,240;
  --gray-200: 211,216,224;
  --gray-300: 191,197,209;
  --gray-400: 171,178,193;
  --gray-500: 134,144,162;
  --gray-600: 101,111,131;
  --gray-700: 72,81,100;
  --gray-800: 45,53,69;
  --gray-900: 34,40,54;
  --gray-950: 23,28,38;
  ...
}
```

---

## Customize Semantic Colors

Semantic colors are specific to the property and are not available at the global `colors` scope. To override semantic colors, define its CSS variables in `:root`.

```css
/* main.css */

:root {
  --bg-success: green;
  --bg-warning: yellow;
  --bg-danger: red;
  --bg-info: blue;

  --border-success: green;
  --border-warning: yellow;
  --border-danger: red;
  --border-info: blue;

  --color-success: green;
  --color-warning: yellow;
  --color-danger: red;
  --color-info: blue;
}
```