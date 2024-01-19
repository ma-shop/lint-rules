module.exports = {
  extends: [ 'eslint-config-ma-shop/test' ].map(require.resolve),
  rules: {
    'react/jsx-one-expression-per-line': 'off',
    '@stylistic/jsx-one-expression-per-line': 'off',

    'react/jsx-filename-extension': 'off',
    '@stylistic/jsx-filename-extension': 'off',
  },
}
