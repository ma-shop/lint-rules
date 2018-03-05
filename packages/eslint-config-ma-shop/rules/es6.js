module.exports = {
  rules: {
    // enforces no braces where they can be omitted
    // https://eslint.org/docs/rules/arrow-body-style
    // turned off because it's handled by fat-arrow-same-line below
    'arrow-body-style': [
      'off',
      'as-needed',
      {
        requireReturnForObjectLiteral: true,
      },
    ],

    // require parens in arrow function arguments
    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': [ 'error', 'always' ],

    // removes multi line implicit returns that makes arrow functions confusing
    'fat-arrow-same-line/fat-arrow-same-line': 'error',

    // enforce the spacing around the * in generator functions
    // https://eslint.org/docs/rules/generator-star-spacing
    'generator-star-spacing': 'error',
  },
  plugins: [ 'fat-arrow-same-line' ],
}