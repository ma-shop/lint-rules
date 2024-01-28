module.exports = {
  overrides: [
    {
      files: [ '**/*.ts', '**/*.tsx' ],
      extends: [ 'plugin:@typescript-eslint/recommended' ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
      },
      plugins: [ '@typescript-eslint' ],
      settings: {
        'import/extensions': [
          '.ts',
          '.tsx',
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
              '.ts',
              '.tsx',
            ],
          },
        },
      },
      rules: {
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            ts: 'never',
            tsx: 'never',
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

        '@typescript-eslint/adjacent-overload-signatures': 'error',

        '@typescript-eslint/array-type': [
          'error',
          {
            default: 'array-simple',
          },
        ],

        '@typescript-eslint/ban-types': [
          'error',
          {
            types: {
              Object: {
                message: 'Avoid using the `Object` type. Did you mean `object`?',
              },
              Function: {
                message: 'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.',
              },
              Boolean: {
                message: 'Avoid using the `Boolean` type. Did you mean `boolean`?',
              },
              Number: {
                message: 'Avoid using the `Number` type. Did you mean `number`?',
              },
              String: {
                message: 'Avoid using the `String` type. Did you mean `string`?',
              },
              Symbol: {
                message: 'Avoid using the `Symbol` type. Did you mean `symbol`?',
              },
            },
          },
        ],

        '@typescript-eslint/consistent-type-assertions': 'error',

        'dot-notation': [
          'error',
          {
            allowKeywords: true,
            allowPattern: '',
          },
        ],
        '@typescript-eslint/dot-notation': 'error',

        // not enabled by default
        // "@typescript-eslint/explicit-function-return-type": "off",

        // not enabled by default
        // "@typescript-eslint/explicit-module-boundary-types": "off",

        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'variable',
            format: [
              'camelCase',
              'UPPER_CASE',
              'PascalCase',
            ],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'forbid',
          },
        ],

        'no-empty-function': [
          'error',
          {
            allow: [
              'arrowFunctions',
              'functions',
              'methods',
            ],
          },
        ],
        '@typescript-eslint/no-empty-function': 'error',

        '@typescript-eslint/no-empty-interface': 'error',

        // "@typescript-eslint/no-explicit-any": "off",

        // not enabled by default
        // "@typescript-eslint/no-parameter-properties": "off",

        // '@typescript-eslint/ban-ts-comment': 'off',

        // '@typescript-eslint/no-explicit-any': 'off',

        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            vars: 'all',
            args: 'after-used',
            ignoreRestSiblings: true,
          },
        ],

        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': [
          'error',
          {
            hoist: 'all',
          },
        ],

        '@typescript-eslint/no-unused-expressions': 'error',

        // off by default
        // "@typescript-eslint/no-use-before-define": "off",

        '@typescript-eslint/prefer-for-of': 'error',

        '@typescript-eslint/prefer-function-type': 'error',

        '@typescript-eslint/prefer-namespace-keyword': 'error',

        '@typescript-eslint/triple-slash-reference': [
          'error',
          {
            path: 'always',
            types: 'prefer-import',
            lib: 'always',
          },
        ],

        // off by default
        // "@typescript-eslint/typedef": "off",

        '@typescript-eslint/unified-signatures': 'error',
      },
    },
  ],
}
