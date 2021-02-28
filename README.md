# Webpack 5 Boilerplate Frontend Typescript/Sass

![License MIT](https://img.shields.io/github/license/UnionPing/boilerplate_webpack)

This Webpack 5 Boilerplate with production and development options. Dev includes a livereload server using
source-mapping and a proxy preconfigured. THe package comes with the jQuery, Bootstrap as well as FontAwesome.

# Setup

best practice is that you should set your `package.json` to avoid submitting it to any package management (already done

```json5
{
  //...
  "private": true,
  //...
}
```

## Setup via Github template (recommended)

Just use the `Use this template` button on [this repository](https://github.com/UnionPing/boilerplate_webpack) <br/>
For mor information use
this [Guide](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template)

```shell
git clone https://github.com/you/new-project new-project
cd new-project
npm init
npm install
```

## Setup CLI

```shell
git clone https://github.com/UnionPing/boilerplate_webpack.git new-project
cd new-project
rm -R .git
npm init
npm install
```

after that you need to check your code t into the repo of your liking

# Development

Add your code and resources in `/src` of the project folder.

```shell
npm run build:dev
```

starts dev server on `localhost:8080` with livereload and sourcemap

## Bootstrap

if you don't like to use Bootstrap you have to:

1. Open `/src/index.ts` and remove `import * as bootstrap from "bootstrap";`
2. Open `/src/style/style.scss` and remove `@import "~bootstrap/scss/bootstrap.scss";`
3. Execute `npm uninstall --dev-save bootstrap @types/bootstrap`

## jQuery

if you don't like to use jQuery:

1. Open `/src/index.ts` and remove `import * as $ from "jquery";`
3. Execute `npm uninstall --dev-save jquery @types/jquery`

## Fontawesome

if you like to remove fontawesome:

1. Open `/src/index.ts` and remove `import 'import '@fortawesome/fontawesome-free/js/all.js';`
2. Open `/src/style/style.scss` and remove `@import '~@fortawesome/fontawesome-free/css/all.css';`
3. Execute `npm uninstall --dev-save bootstrap @types/bootstrap`

## Proxy server

in `/webpack/webpack.dev.js` you are able to configure a proxy.

# Deployment

```shell
npm run build:prod
```

creates production-ready files to <code>/dist</code> with:

1. compiles SASS(SCSS) to css
2. autoprefixer for vendor prefixes
3. compiles TypeScript to ES5
4. minifying for css/js