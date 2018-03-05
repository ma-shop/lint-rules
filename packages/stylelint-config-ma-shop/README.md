# eslint-config-ma-shop-react-native

[![npm version](https://badge.fury.io/js/eslint-config-ma-shop-react-native.svg)](http://badge.fury.io/js/eslint-config-ma-shop-react-native)

This package provides marketamerica | SHOP.COM React Native eslint config as an
extensible shared config. Our linting rules are based off of
`eslint-config-ma-shop-react` and React Native specific rules.

## Install

#### npm

```bash
npm install stylelint-config-ma-shop --save-dev
```

#### yarn

```bash
yarn add stylelint-config-ma-shop --dev
```

## Usage

Add the following into your your `package.json`

```json
"stylelint": {
  "extends": [ "stylelint-config-ma-shop" ]
},
```

## Prettier

This config should always be use with [prettier](https://prettier.io/docs/en/)
which is an opinionated code formatter that makes our code formatting consistent
without having to be nitpicky on PRs.

See [prettier setup](https://github.com/ma-shop/lint-rules#prettier) for details
on the configuration
