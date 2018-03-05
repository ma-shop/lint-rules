module.exports = {
  extends: [
    'stylelint-config-shopify/prettier',
    './rules/general.js',
    './rules/rule.js',
    './rules/at-rule.js',
    './rules/selector.js',
    './rules/order.js',
    './rules/scss.js',
  ].map(require.resolve),
}
