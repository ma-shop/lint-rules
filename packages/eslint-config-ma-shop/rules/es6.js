module.exports = {
  rules: {
    // enforces no braces where they can be omitted
    // https://eslint.org/docs/rules/arrow-body-style
    // turned off because it's handled by fat-arrow-same-line below
    'arrow-body-style': 'off',

    // require parens in arrow function arguments
    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': [ 'error', 'always' ],

    // removes multi line implicit returns that makes arrow functions confusing
    // @todo update the eslint-plugin-fat-arrow-same-line package once tyler's PR gets merged
    // https://github.com/pzuraq/eslint-plugin-fat-arrow-same-line/pull/3
    'fat-arrow-same-line/fat-arrow-same-line': [
      'error',
      {
        allowTemplates: true,
        allowJSX: true,
        allowObjects: true,
      },
    ],
  },
  plugins: [ 'fat-arrow-same-line' ],
}
