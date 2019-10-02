# lint-rules

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![David-DM](https://david-dm.org/ma-shop/lint-rules/dev-status.svg)](https://david-dm.org/ma-shop/lint-rules)

This project houses all the linting rules for Market America | Shop.com

### Install

We use [eslint](https://www.npmjs.com/package/eslint) to lint all of our projects

```bash
yarn add eslint --dev
```

## Prettier

In addition to [eslint](https://www.npmjs.com/package/eslint) we also use [prettier](https://prettier.io/docs/en/)
which is an opinionated code formatter. We **DO NOT** recommend using it for js files because it makes the code extremely hard to read. We do recommend using it with `json` files, and `md` files so you don't have to waste your time formatting them.

### Makefile

All the commands should be the same on each project for formatting code with
[prettier](https://prettier.io), and for linting code with
[stylelint](https://stylelint.io), and [eslint](https://eslint.org). Copy and
paste the following commands into your project and remove `lint-style` if it's
not needed.

```makefile
# formats and lints all the files
lint:
	@make lint-js lint-style lint-json lint-md --jobs

# formats your js code with prettier, then lints them with eslint
lint-js:
	@eslint --cache --fix '+(app|src|test)/**/*.{js,jsx}'

# formats your style code with prettier, then lints them with stylelint
lint-style:
	@prettier-stylelint-formatter '+(app|src|test)/**/*.+{css,scss,styl}' --write
	@stylelint '+(app|src|test)/**/*.{css,scss,styl}' --color --cache

# formats your markdown files with prettier
lint-md:
	@prettier '**/*.md' --parser markdown --single-quote --write

# formats your json files with prettier
lint-json:
	@prettier '**/*.json' --parser json --write
```

### Lint staged

Linting staged files is the easiest way to fix linting errors before it gets to
a pull request this keeps all the code consistent. We currently use
[husky](https://www.npmjs.com/package/husky) for a pre commit hook, and
[lint-staged](https://www.npmjs.com/package/lint-staged) to pull the files that
are staged for the commit.

```bash
yarn add husky lint-staged --dev
```

### package.json

Your `package.json` file should have these configs inside of them. There
shouldn't be a separate config file for each of these since all that does is
just add clutter

```json
{
  "scripts": {
    "precommit": "lint-staged"
  },
  "lint-staged": {
    "*.+(js|mjs|jsx)": ["eslint --cache --fix"],
    "*.scss": [
      "prettier --parser scss --single-quote --write",
      "stylelint --fix"
    ],
    "*.md": ["prettier --write --parser markdown", "git add"],
    "*.json": ["prettier --write --parser json", "git add"]
  },
  "eslintConfig": {
    "extends": ["<config>"]
  },
  "eslintIgnore": ["**/__snapshots__/**/*"],
  "stylelint": {
    "extends": ["<config>"]
  },
  "prettier": {
    "singleQuote": true,
    "trailingComma": "all",
    "semi": false,
    "arrowParens": "always"
  }
}
```

You will also want to add a `.prettierignore` file that contains the `package.json` file and any other files that are automatically generated, like `CHANGELOG.md`

## Contributing

To start contributing just fork/clone this repo and run `make install` to
install the dependencies to get started.
