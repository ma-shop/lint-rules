module.exports = {
  rules: {
    'max-len': [
      'error',
      {
        code: 100,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
        ignorePattern:
          // eslint-disable-next-line max-len
          "\\s*(console.(log|warn|info|error|debug).*|(?:(const|let)?([a-zA-Z-\\s]+[=:]\\s)?[`'][^\n]+[`'][,;]?))$",
        ignoreComments: false,
        ignoreStrings: false,
        ignoreTemplateLiterals: false,
      },
    ],

    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    // rule: https://eslint.org/docs/rules/no-param-reassign.html
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'children', // for react
          'options', // for options
          'settings', // for settings
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
  },
}
