module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './rules/best-practices',
    './rules/node',
    './rules/style',
    './rules/variables',
    './rules/es6',
  ].map(require.resolve),
  rules: {},
  parser: 'babel-eslint',
}
