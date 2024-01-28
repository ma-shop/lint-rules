module.exports = {
  // @todo remove beacuse it's handled by other configs
  parserOptions: {
    ecmaVersion: 'latest',
    // @note this is required for projects that don't use babel
    requireConfigFile: false,
  },
  extends: [
    './rules/general',
    './rules/import',
    './rules/style',
    // @note this overrides all other rules that stylistic
    // handles so it needs to be last
    // './rules/stylistic',
  ].map(require.resolve),
  rules: {},
}
