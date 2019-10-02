module.exports = {
  extends: [ 'eslint-config-ma-shop/storybook' ].map(require.resolve),
  rules: {
    'react/prefer-stateless-function': 'off',
  },
}
