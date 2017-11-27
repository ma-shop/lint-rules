# eslint-config-ma-shop

[![npm version](https://badge.fury.io/js/eslint-config-ma-shop.svg)](http://badge.fury.io/js/eslint-config-ma-shop)

This package provides marketamerica | SHOP.COM base JS .eslintrc (without React
plugins) as an extensible shared config. Our linting rules are based off of
Airbnb with a few minor modifications to their original rules so for

## Install

#### npm

```bash
npm install eslint-config-ma-shop --save-dev
```

#### yarn

```bash
yarn add eslint-config-ma-shop --dev
```

## Usage

Add the following into your your `package.json`

```json
"eslintConfig": {
  "extends": [ "ma-shop" ]
},
```

## Prettier

This config should always be use with [prettier](https://prettier.io/docs/en/)
which is an opinionated code formatter that makes our code formatting consistent
without having to be nitpicky on PRs.

See [prettier setup](https://github.com/ma-shop/lint-rules#prettier) for details
on the configuration
