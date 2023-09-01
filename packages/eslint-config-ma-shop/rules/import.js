module.exports = {
  // @todo remove when it's published
  settings: {
    'import/resolver': {
      node: {
        // adds support for other filetypes
        extensions: [
          '.jsx',
          '.mjs',
          '.js',
          '.json',
          '.ts',
          '.tsx',
        ],
      },
    },
  },

  rules: {
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: [
          'none',
          'all',
          'multiple',
          'single',
        ],
      },
    ],

    // Enforce a convention in module import order
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          [
            'internal',
            'parent',
            'sibling',
            'index',
          ],
        ],
        'newlines-between': 'always',
      },
    ],

    // Require a newline after the last import/require in a group
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
    'import/newline-after-import': [ 'error', { count: 2 } ],

    // Reports if a module's default export is unnamed
    // https://github.com/benmosher/eslint-plugin-import/blob/d9b712ac7fd1fddc391f7b234827925c160d956f/docs/rules/no-anonymous-default-export.md
    'import/no-anonymous-default-export': [
      'error',
      {
        allowArray: true,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowLiteral: false,
        allowObject: true,
      },
    ],

    // turn this off because it prevents consistency which
    // doesn't allow us to auto generate index files
    'import/prefer-default-export': 'off',

    // this is different than airbnb because it targets different files
    'import/no-extraneous-dependencies': [
      'error',
      {
        // the following files can import devDependencies
        devDependencies: [
          'test/**',
          'test-*/**',
          '**/*.+(test|config).{js,mjs,jsx,vue}',
          '+(.storybook|storybook|stories)/**',
          'scripts/**',
          'test-ui/**',
          '**/webpack.config.js', // webpack config
          '**/webpack.config.*.js', // webpack config
          '**/rollup.config.js', // rollup config
          '**/rollup.config.*.js', // rollup config
          '**/gulpfile.js', // gulp config
          '**/gulpfile.*.js', // gulp config
        ],
        optionalDependencies: false,
      },
    ],

    // @todo look into this because it's throwing a lot of errors
    'import/no-cycle': 'off',
  },
}
