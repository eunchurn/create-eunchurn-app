<div align="center">
<h1 align="center">✨ Create eunchurn App</h1>
<h6>Create your eunchurn Project.</h6>
<br/>
<img src="https://raw.githubusercontent.com/eunchurn/create-eunchurn-app/master/.github/assets/create-eunchurn-app.png" alt="screenshot"/>
<br/><br/>
<a href="https://github.com/eunchurn/create-eunchurn-app/actions/workflows/publish.yml"><img src="https://github.com/eunchurn/create-eunchurn-app/actions/workflows/publish.yml/badge.svg"></a>
<a href="https://npmjs.org/package/create-eunchurn-app"><img src="https://img.shields.io/npm/dw/create-eunchurn-app"/></a>
<img src="https://img.shields.io/bundlephobia/minzip/create-eunchurn-app"> <img src="https://img.shields.io/github/issues/eunchurn/create-eunchurn-app"><img src="https://img.shields.io/npm/v/create-eunchurn-app"> <img src="https://img.shields.io/npm/l/create-eunchurn-app">
</div>
Create eunchurn App

```
> npx create-eunchurn-app my-app

? description Hello. This is my app
? Author name Eunchurn Park
? Author email eunchurn@eunchurn.io
? License MIT
? Package manager to use for installing packages from npm pnpm
```

## Usage

```bash
npx create-eunchurn-app <name>
npm init eunchurn-app <name>
yarn create eunchurn-app <name>
```

## Templates

```bash
npx create-eunchurn-app <name> --template=<template>
```

### `default`

Default TypeScript App

```bash
npx create-eunchurn-app <name>
```

### `vanilla-ts`

Minimum setting for VanillaJS, HTML webpage
**required NodeJS version over 12.x**

- VanillaJS
- Typescript
- Webpack
- Pure CSS
- Autoprefixer (`postcss-loader`)
- Assets(`public`)
- Browser Sync (dev web server)
- Minimization(Image, HTML, CSS, JS) on production
- `gh-pages` Deployment

```bash
npx create-eunchurn-app <name> --template=vanilla-ts
```
