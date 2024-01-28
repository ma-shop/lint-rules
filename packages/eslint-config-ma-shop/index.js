module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    // @note this is required for projects that don't use babel
    requireConfigFile: false,
  },
  plugins: [ '@stylistic' ],
  extends: [
    'eslint-config-airbnb-base',
    // this disables all legacy configs since airbnb hasn't yet.
    // Everything below this point will use stylistic
    './rules/stylistic',
    './rules/best-practices',
    './rules/node',
    './rules/style',
    './rules/variables',
    './rules/errors',
    './rules/import',
    './rules/unicorn',
  ].map(require.resolve),
  rules: {},
}
