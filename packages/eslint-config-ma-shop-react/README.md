# eslint-config-ma-shop-react

[![npm version](https://badge.fury.io/js/eslint-config-ma-shop-react.svg)](http://badge.fury.io/js/eslint-config-ma-shop-react)

This package provides marketamerica | SHOP.COM React eslint config as an
extensible shared config. Our linting rules are based off of
`eslint-config-ma-shop` and Airbnb's React specific lint rules.

## Install

```bash
yarn add eslint-config-ma-shop-react --dev
```

## Usage

Add the following into your your `package.json`

```json
"eslintConfig": {
  "extends": [ "ma-shop-react" ]
},
```

## Prettier

See [prettier setup](https://github.com/ma-shop/lint-rules#prettier) for details
on the configuration
