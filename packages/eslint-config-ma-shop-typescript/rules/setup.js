const path = require('node:path')


module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [ '@typescript-eslint' ],
  extends: [ 'plugin:import/typescript' ],
  parserOptions: {
    ecmaVersion: 'latest',
    // @note this is required for projects that don't use babel
    requireConfigFile: false,
    project: path.resolve('.', 'tsconfig.json'),
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        tsx: 'never',
        jsx: 'never',
        mjs: 'never',
      },
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: [
          '.jsx',
          '.tsx',
        ],
      },
    ],
  },
}
