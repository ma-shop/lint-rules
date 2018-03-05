module.exports = {
  rules: {
    // enforces getter/setter pairs in objects
    'accessor-pairs': [ 'error', { getWithoutSet: true } ],

    // @todo remove when airbnb enables it
    complexity: [ 'error', 11 ],

    // This happens way to often with option defaults so it's turned off
    'no-param-reassign': 'off',

    // disallow unmodified conditions of loops
    // https://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 'error',

    // disallow unnecessary .call() and .apply()
    // @todo remove when airbnb enables it
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

    // enforce spacing around the * in yield* expressions
    // https://eslint.org/docs/rules/yield-star-spacing
    'yield-star-spacing': [ 'error', 'before' ],
  },
}
