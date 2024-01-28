module.exports = {
  rules: {
    // https://eslint.style/rules/default/member-delimiter-style
    '@stylistic/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: true,
        },
        singleline: {
          delimiter: 'comma',
          requireLast: true,
        },
        multilineDetection: 'brackets',
      },
    ],


    '@stylistic/type-annotation-spacing': [ 'error' ],

    '@stylistic/type-generic-spacing': [ 'error' ],

    '@stylistic/type-named-tuple-spacing': [ 'error' ],
  },
}
