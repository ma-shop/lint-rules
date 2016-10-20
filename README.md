# lint-rules

This project houses all the linting rules for Market America | Shop.com

## Install

#### npm

```bash
npm install ma-shop/lint-rules --save-dev
```

#### yarn

```bash
yarn add ma-shop/lint-rules --dev
```

## Javascript

To setup your js linting just create a `.eslintrc.yaml` file in your root directory with the following content

```yaml
extends:
  - './node_modules/lint-rules/eslint/index.js'

```

### Avaliable files

 - `./node_modules/lint-rules/eslint/index.js` combines all the files into one
 - `./node_modules/lint-rules/eslint/base.js` are the base linting rules that apply everywhere
 - `./node_modules/lint-rules/eslint/esnext.js` linting rules for es6+ js projects
 - `./node_modules/lint-rules/eslint/node.js` node specific linting rules
 
 
## Styles

To setup your style linting just create a `.stylelintrc.yaml` file in your root directory with the following content

```yaml
extends:
  - 'lint-rules/stylelint/index.js'
```

### Avaliable files

 - `lint-rules/stylelint/index.js` are the base linting rules that apply everywhere
 - `lint-rules/stylelint/scss.js` are the linting rules for scss projects
