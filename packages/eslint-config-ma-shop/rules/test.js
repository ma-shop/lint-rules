module.exports = {
  settings: {
    ignore: [ '**/__snapshots__/**/*' ],
  },
  rules: {
    'no-undefined': 'off',
    'no-console': 'error',
    'max-lines': [
      'error',
      {
        max: 500,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
  },
  'overrides': [
    {
      // currently eslint doesn't allow you to configure an ignore file
      'files': [ '**/__snapshots__/**/*', '**/snapshots/**/*' ],
      'rules': {
        'max-lines': 'off',
        'quotes': 'off',
        'semi': 'off',
        'max-len': 'off',
        'no-tabs': 'off',
      },
    },
  ],
}
