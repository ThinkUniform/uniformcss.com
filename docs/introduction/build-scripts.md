---
title: Build Scripts
description: Generating your stylesheet using build scripts.
date: 2021-01-03
---

## Build Scripts

Sass preprocessor is the only thing you need to get up and running. Uniform CSS comes with a predefined build commands in the `package.json`. The following **build commands** are available. By default, the following build scripts will automatically input `main.scss` and output files into the `dist` directory. You can modify `package.json` to change the output location.

> Please note, if you are using the built-in build scripts or using the Sass CLI to compile, ensure the `--load-path` is correctly set up. For more information on load paths visit [Dart Sass Command Line Interface](https://sass-lang.com/documentation/cli/dart-sass#load-path).

{% include shortcodes/video, id: 'tLqqi5gyxQg' %}

---

### uniform

The following command will compile `main.scss`.

```bash
yarn uniform
```

---

### uniform:compressed

The following command will compile `main.scss` with `--style compressed` enabled.

```bash
yarn uniform:compressed
```

---

### uniform:watch

The following command will compile `main.scss`, and watch for changes.

```bash
yarn uniform:watch
```

---

### uniform:watch-compressed

The following command will compile `main.scss`, and watch for changes with `--style compressed` enabled.

```bash
yarn uniform:watch-compressed
```

---

### uniform:purge

The following command will purge the output CSS based on the settings in `purgecss.config.js`. Make changes to `purgecss.config.js` to include all your markup template files and to ensure the correct amount of CSS is purged.

```bash
yarn uniform:purge
```

---

## Build Performance

Uniform CSS requires `dart-sass` version `1.33.0` and up. Using the Javascript version of Sass is slower than the stand-alone `dart` executable, therefore using the native `dart` version is recommended for fastest build time.