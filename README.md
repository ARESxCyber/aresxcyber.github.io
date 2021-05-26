# Cloud Solutions Tool Documentation

ARESx website repo, built with [docsify](https://docsify.js.org).

## Building locally

Docsify is an NPM package, which you can install using:
> npm i docsify-cli -g

You can then debug the documentation changes locally using:
> docsify serve ./docs

Docsify builds the documentation from markdown files, so you can embed pictures, code, etc... Refer to the documentation for the full markdown specs [here](https://docsify.js.org).

## Folders structure

Each sidebar element shall have its own folder with the main README.md file and any other attachements. For example:

```
|____Home
| |____README.md
| |____picture.png
|____Writeups
| |____README.md
| |____anotherPicture.png
```
