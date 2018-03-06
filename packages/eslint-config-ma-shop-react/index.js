module.exports = {
  extends: [
    'eslint-config-airbnb-base/rules/strict',
    'eslint-config-airbnb/rules/react',
    'eslint-config-airbnb/rules/react-a11y',
    'eslint-config-ma-shop',
  ].map(require.resolve),
  rules: {
    'multiline-ternary': 'off',
  },
}
