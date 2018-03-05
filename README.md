# lint-rules

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![David-DM](https://david-dm.org/ma-shop/lint-rules/dev-status.svg)](https://david-dm.org/ma-shop/lint-rules)

This project houses all the linting rules for Market America | Shop.com

## Prettier

All config packages should always be use with
[prettier](https://prettier.io/docs/en/) which is an opinionated code formatter
that makes our code formatting consistent without having to be nitpicky on PRs.
This helps the person reviewing code concentrate on what the code is doing and
not how the code is formatted.

### Install

We use [prettier-eslint-cli](https://www.npmjs.com/package/prettier-eslint-cli)
to run [prettier](https://prettier.io/docs/en/) which will run `prettier`, then
`eslint --fix`

We also use
[prettier-stylelint-formatter](https://www.npmjs.com/package/prettier-stylelint-formatter)
to run [prettier](https://prettier.io/docs/en/) which will run `prettier` with
`stylelint`

#### npm

```bash
npm install prettier-eslint-cli prettier-stylelint-formatter --save-dev
```

#### yarn

```bash
yarn add prettier-eslint-cli prettier-stylelint-formatter --dev
```

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
	@prettier-eslint '+(app|src|test)/**/*.jsx?' --write --list-different
	@eslint --cache '+(app|src|test)/**/*.jsx?'

# formats your style code with prettier, then lints them with stylelint
lint-style:
	@prettier-stylelint-formatter '+(app|src|test)/**/*.+(css|scss|styl)' --write
	@stylelint '+(app|src|test)/**/*.+(css|scss|styl)' --color --cache

# formats your markdown files with prettier
lint-md:
	@prettier '**/*.md' --parser markdown --single-quote --write

# formats your json files with prettier
lint-json:
	@prettier '**/*.json' --parser json --write
```

### package.json

Your `package.json` file should have these configs inside of them. There
shouldn't be a separate config file for each of these since all that does is
just add clutter

```json
"eslintConfig": {
  "extends": [
    "ma-shop"
  ],
},
"stylelint": {
  "extends": [
    "stylelint-config-ma-shop"
  ],
},
"prettier": {
  "singleQuote": true,
  "trailingComma": "all"
}
```

## Contributing

To start contributing just fork/clone this repo and run `make install` to
install the dependencies to get started.
