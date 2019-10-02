module.exports = {
  extends: [ 'eslint-config-ma-shop-react/storybook' ].map(require.resolve),
  rules: {
    'react-native/no-color-literals': 'off',
  },
}
