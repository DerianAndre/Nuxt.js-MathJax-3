# Nuxt.js + MathJax 3
[MathJax 3](https://github.com/MathJax) vue compontent for [Nuxt.js](https://github.com/nuxt/nuxt.js) with re-rendering.

## Versions
```
	Nuxt:    2.15.8
	MathJax: 3.2.0
```
## Usage
Just like that
```html
	<Math data="E=mc^{2}" />
```
Or make it dynamic!, change the display
```html
	<Math :data="data" display="inline" />
```

## Props
| Name      | Type            | Values                   | Default         | Description                                                              |
| --------- | --------------- | ------------------------ | --------------- | ------------------------------------------------------------------------ |
| `data`    | String, Boolean | —                        | `false`         | The content to display with MathJax 3                                    |
| `safe`    | Boolean         | true, false              | `true`          | Render `data` as `text` (true) or `html` (false)                         |
| `display` | String          | block, inline, or custom | `block`         | The display style of the component                                       |
| `config`  | Object          | —                        | `{}`            | The configuration options for MathJax                                    |
| `update`  | Any             | —                        | `null`          | Force a MathJax re-render with typeset                                   |
| `source`  | String          | local, cdn               | `local`         | The source of the MathJax library, local in static or cdn from web.      |
| `file`    | String          | —                        | `tex-mml-chtml` | The configuration file name of MathJax (component file). DON'T put `.js` |


## Copy/Update MathJax files
```bash
# copy /mathjax/es5 to /static/mathjax/
$ npm copy

# copy /mathjax-full/es5 to /static/mathjax-full/
$ npm copy-full
```

## Build Setup
```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
