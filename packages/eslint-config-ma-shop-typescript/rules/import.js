module.exports = {
  extends: [ 'plugin:import/typescript' ],
  settings: {
    // 'import/resolver': {
    //   // You will also need to install and configure the TypeScript resolver
    //   // See also https://github.com/import-js/eslint-import-resolver-typescript#configuration
    //   typescript: true,
    //   node: true,
    // },
    'import/extensions': [
      '.js',
      '.ts',
      '.tsx',
      '.jsx',
      '.mjs',
    ],
    'import/parsers': {
      '@typescript-eslint/parser': [
        '.ts',
        '.tsx',
      ],
    },
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.json',
          '.jsx',
          '.mjs',
          '.ts',
          '.tsx',
        ],
      },
    },
  },
  rules: {
    'import/consistent-type-specifier-style': [ 'error' ],
  },
}
