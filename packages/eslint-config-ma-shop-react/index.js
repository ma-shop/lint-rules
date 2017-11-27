module.exports = {
  extends: [
    'eslint-config-ma-shop',
    'eslint-config-airbnb-base/rules/strict',
    'eslint-config-airbnb/rules/react',
    'eslint-config-airbnb/rules/react-a11y',
  ].map(require.resolve),
  rules: {},
};
