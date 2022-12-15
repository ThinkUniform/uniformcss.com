---
title: Dark Mode
description: <span class="color-heading-accent">Learn how to apply</span> dark mode or other theme colors
date: 2021-01-08
---

## About Dark Mode

If your application or website require dark mode support, Uniform recommends supporting themes through semantic setup of colors. 

The web in general currently goes about achieving dark mode in either declarative or semantic ways. Certain utility-first frameworks achieve dark mode in a declarative way through the use of a `dark` pseudo similar to how the `group-hover` pseudo behaves. This means each element would require its own conditional dark color utility to be declared.   

**There are several limitations to this approach:**

- You are limited to either light or dark, an in-between "dim" mode similar to what Github's interface provides is not be possible.
- Every colored element requires the conditional dark color declaration.
- A dark pseudo variant would be required for every color.
- Color systems don't always translate well into dark mode and base color adjustments need to be made.

To get around these limitations, Uniform provides CSS variable color hooks that can be used to semantically handle the support of themes.



---

## Using CSS Variables

You can extend the basic color set to include semantically named colors. Colors that are plugged into the `colors` setting in your configuration will automatically create CSS variable hooks that you can then use to override using CSS variables. 

```scss
// main.scss

@use "uniform" as * with (
  $config: (
    colors: (
      background: #ffffff,
      body: #656F83,
      navbar: #0046A8
    )
  )
);

.dark {
  --background: var(--black);
  --body: rgba(var(--gray-300), 1);
  --navbar: rgba(var(--gray-950), 1);
}
.dim {
  --background: var(--black);
  --body: rgba(var(--gray-600), 1);
  --navbar: rgba(var(--gray-50), 1);
}
```

```html
<body class="dim bg-background color-body">
  <nav class="bg-navbar">
    ...
  </nav>
</body>

```

---

## Using Apply Mixin

You can create your own variant with the `apply()` variant then apply `dark` variants that gets triggered when nested inside the `.dark` parent class.

```scss
// main.scss
@use "uniform" as *;

// set defaults
.bg-background {
  @include apply('bg-white');
}
.bg-navbar {
  @include apply('bg-gray-200');
}
.color-body {
  @include apply('color-gray-600');
}

// set dark variant
.dark {
  .bg-background {
    @include apply('bg-black');
  }
  .bg-navbar {
    @include apply('bg-gray-900');
  }
  .color-body {
    @include apply('color-gray-300');
  }
}
```

---

## Using API Functions

Similar to the apply mixin, you can also achieve the same result using `fill()` API function.

```scss
// main.scss
@use "uniform" as *;

// set defaults
.bg-background {
  background-color: fill('bg-white');
}
.bg-navbar {
  background-color: fill('bg-gray-200');
}
.color-body {
  background-color: fill('color-gray-600');
}

// set dark variant
.dark {
  .bg-background {
    background-color: fill('bg-black');
  }
  .bg-navbar {
    background-color: fill('bg-gray-900');
  }
  .color-body {
    background-color: fill('color-gray-300');
  }
}
```