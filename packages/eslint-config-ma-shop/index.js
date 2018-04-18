module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './rules/best-practices',
    './rules/node',
    './rules/style',
    './rules/variables',
    './rules/es6',
    './rules/errors',
    './rules/import',
  ].map(require.resolve),
  rules: {},
  parser: 'babel-eslint',
}
