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
        ],
      },
    },
  },

  rules: {
    // allow the following file extentions to be imported
    // (without having to add the file extensions)
    // @todo remove when it's published
    'import/extensions': [ '.jsx', '.mjs', '.js' ],

    // this is different than airbnb because it targets different files
    'import/no-extraneous-dependencies': [
      'error',
      {
        // the following files can import devDependencies
        devDependencies: [
          'test/**',
          '**/*.+(test|config).{js,mjs,jsx,vue}',
          '+(.storybook|storybook|stories)/**',
          'scripts/**',
        ],
        optionalDependencies: false,
      },
    ],
  },
}
