module.exports = {
  rules: {

    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    // rule: https://eslint.org/docs/rules/no-param-reassign.html
    // this is required because if not it will destroy performance in
    // certain situations https://jsperf.com/param-reassign-options
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'children', // for react
          'options', // for options
          'settings', // for settings
          'config', // for config
          'extras', // for extras
          'defaultConfig', // for webpack
          'baseConfig', // for webpack
          'operation', // for graphql
          'proto', // for prototypes
          'product', // for products
          'prev', // for reduce accumulators
          'acc', // for reduce accumulators
          'e', // for e.returnvalue
          'ctx', // for Koa routing
          'req', // for Express requests
          'request', // for Express requests
          'res', // for Express responses
          'response', // for Express responses
          '$scope', // for Angular 1 scopes
        ],
      },
    ],

    // disallow unmodified conditions of loops
    // https://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 'error',

    // disallow unnecessary .call() and .apply()
    // use `something(...args)` instead
    'no-useless-call': 'error',

    // disallow usage of configurable warning terms in comments: e.g. todo
    // @todo remove when airbnb enables it
    'no-warning-comments': [
      'warn',
      {
        terms: [ '@todo', '@fix', '@fixme' ],
        location: 'start',
      },
    ],

    // https://eslint.org/docs/rules/require-await
    'require-await': 'error',

    // this allows use of the optional chaining
    'no-unused-expressions': 'off',
    '@babel/no-unused-expressions': 'error',

    'consistent-return': 'off',

    'max-classes-per-file': [ 'error', 2 ],


    // turned off till we can look into it closer
    'default-param-last': 'off',
  },
}
