module.exports = {
  extends: [ 'eslint-config-ma-shop/test' ].map(require.resolve),
  rules: {
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-filename-extension': 'off',
  },
}
