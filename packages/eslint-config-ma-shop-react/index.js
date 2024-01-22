module.exports = {
  extends: [
    'eslint-config-airbnb/rules/react',
    'eslint-config-airbnb/rules/react-a11y',
    'eslint-config-airbnb/rules/react-hooks',
    './rules/general',
    './rules/style',
    './rules/import',
  ].map(require.resolve),
  rules: {},
}
