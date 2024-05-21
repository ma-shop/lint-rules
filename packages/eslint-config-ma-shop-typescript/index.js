module.exports = {
  extends: [
    './rules/setup',
    './rules/general',
    './rules/import',
    './rules/best-practices.js',
    './rules/style',

    // @note this overrides all other rules that stylistic
    // handles so it needs to be last
    './rules/stylistic',
  ].map(require.resolve),
}
