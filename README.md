# ARESx website

ARESx website repo, built with [docsify](https://docsify.js.org).

## Building locally

Docsify is an NPM package, which you can install using:

> npm i docsify-cli -g

You can then debug the website changes locally using:

> docsify serve ./docs

Docsify builds the website from markdown files, so you can embed pictures, code, etc... Refer to the documentation for the full markdown specs [here](https://docsify.js.org).

## Folders structure

Each sidebar page is a markdown file on its own. For CTF writeups, each CTF has a folder to include the different pictures and challenges. Each challenge has it's own markdown file. Then they are own embedded in the CTF main markdown file. For example:

```
|____CTF1
| |____main.md
| |____challenge1.md
| |____challenge2.md
| |____picture1.png
|____CTF2
| |____main.md
| |____challenge1.md
| |____picture1.png
| |____picture2.png
```

## Contributing

We use `main` as our main branch and the `./docs` folder is pushed on github pages on every `main` commit

You can use pull requests to contribute. First you will need to create a branch. Use the following naming conventions:

- `website/{type}/{description}` for branches involving work on the website design or maintenance
  - `type` is either `design` for design work (colors, layout, devops, etc...), `content` for added information (team info, fix text, etc...) or `bug-fix` (something that was broken and got fixed).
  - `description` is a 2-3 words summary of the branch main changes.
- `writeups/{ctf}/{member}` for branches involving writeups
  - `ctf` is the name of the CTF.
  - `member` is the name (discord or real) of the ARESx member authoring the branch.

There is a PR template to fill (simple summary and checkboxes) and all PRs require at least one review before being merged. Finally, make sure you **squash commits** when merging.
