module.exports = {
  overrides: [
    {
      files: [ '**/*.ts', '**/*.tsx' ],
      parser: '@typescript-eslint/parser',
      plugins: [ '@typescript-eslint' ],
      parserOptions: {
        ecmaVersion: 'latest',
        // @note this is required for projects that don't use babel
        requireConfigFile: false,
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        './rules/general',
        './rules/import',
        './rules/best-practices.js',
        './rules/style',
        // @note this overrides all other rules that stylistic
        // handles so it needs to be last
        // './rules/stylistic',
      ].map(require.resolve),
    },
  ],
}
