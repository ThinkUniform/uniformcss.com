---
title: Default Styles
description: Learn about default reset and starter styles
date: 2021-01-05
---

## About Default Styles

By default, Uniform applies reset of styles to flatten browser inconsistencies and provide a stable foundation to build utility properties on. Uniform also applies starter styles to help apply rudimentary formatting to common html elements. Both are optional and can be disabled through your configuration.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Reset Styles

The default browser reset styles are an adaptation of [Andy Bell's](https://piccalil.li/blog/a-modern-css-reset) modern CSS reset styling. The following default browser reset styles are applied. 

```scss
// reset everything
*, *::before,*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  border: 0 solid transparent;
}

// prevent iOS font size change
html {
  -webkit-text-size-adjust: 100%;
}

// reset body line-height
body {
  min-height: 100vh;
  line-height: 1;
  text-rendering: optimizeSpeed;
}

// all media elements set to block and full width
img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  max-width: 100%;
}

// inherit fonts for inputs and buttons
input,
button,
textarea,
select {
  font: inherit;
  line-height: inherit;
  color: inherit;
}

// collapse table
table {
  border-collapse: collapse;
  border-spacing: 0;
}

// assign button hover state
button, [role="button"] {
  cursor: pointer;
  background-color: transparent;
  -webkit-tap-highlight-color: transparent;
  &:focus {
    outline: 0;
  }
}

// reset anchor style
a {
  cursor: pointer;
  color: inherit;
  text-decoration: inherit;
  -webkit-tap-highlight-color: transparent;
}

// reset heading style
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

// reset list style
ol, ul {
  list-style: none;
}

// reset text input style
[type=date],
[type=datetime],
[type=datetime-local],
[type=email],
[type=month],
[type=number],
[type=password],
[type=search],
[type=tel],
[type=text],
[type=time],
[type=url],
[type=week],
textarea,
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  &:focus {
    outline: 0;
  }
}

// reset textarea style
textarea {
  // move the label to the top
  vertical-align: top;

  // turn off scroll bars in IE unless needed
  overflow: auto;
}

// reset checkbox and radio style
[type='checkbox'],
[type='radio'] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &:focus {
    outline: 0
  }
}

// remove all animations, transitions and smooth scroll for people that prefer not to see them
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## Starter Styles

The following default starter styles are applied.

```scss
sub, sup {
  position: relative;
  font-size: .75em;
}

sub {
  bottom: -0.25em;
  left: 0.25em;
}

sup {
  top: -0.5em;
  left: 0.25em;
}

pre, code {
  font-family: var(--font-mono);
}

[type=date],
[type=datetime],
[type=datetime-local],
[type=email],
[type=month],
[type=number],
[type=password],
[type=search],
[type=tel],
[type=text],
[type=time],
[type=url],
[type=week],
textarea,
select {
  padding: 0.5em 0.75em;
  font-size: 1rem;
  line-height: 1.5;
}

[type='checkbox'], 
[type='radio'] {
  width: 1em;
  height: 1em;
  &:checked {
    border-color: transparent;
    background-color: currentColor;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
  }
}

[type='checkbox'] {
  &:checked {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
  }
}

[type='radio'] {
  border-radius: 9999px;
  &:checked {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='white'/%3e%3c/svg%3e");
  }
}

select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right .75em center;
  background-size: 16px 12px;
}
```

---

## Disabling Default Styles

If you prefer to exclude default styles from your build, simply pass the following `excludes` setting in your configuration.

```scss
@use "uniform" as * with (
  $config: (
    excludes: (
      reset,
      starter
    )
  )
);
```
