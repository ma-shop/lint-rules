module.exports = {
  extends: [
    './rules/base',
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
