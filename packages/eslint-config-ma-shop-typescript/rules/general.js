module.exports = {
  extends: [ 'plugin:@typescript-eslint/recommended' ],
  parser: '@typescript-eslint/parser',
  plugins: [ '@typescript-eslint' ],
  settings: {
    settings: {
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

    '@typescript-eslint/array-type': [
      'error',
      'array-simple',
    ],

    '@typescript-eslint/ban-ts-comment': 'off',

    '@typescript-eslint/no-explicit-any': 'off',

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],


    '@stylistic/type-annotation-spacing': [ 'error' ],

    '@stylistic/type-generic-spacing': [ 'error' ],

    '@stylistic/type-named-tuple-spacing': [ 'error' ],
  },
}
