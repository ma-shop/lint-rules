module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    // @note this is required for projects that don't use babel
    requireConfigFile: false,
  },
  extends: [
    'eslint-config-airbnb/rules/react',
    'eslint-config-airbnb/rules/react-a11y',
    'eslint-config-airbnb/rules/react-hooks',
    './rules/general',
    './rules/import',
    './rules/style',
    // @note this overrides all other rules that stylistic
    // handles so it needs to be last
    './rules/stylistic',
  ].map(require.resolve),
  rules: {},
}
