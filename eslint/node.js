module.exports = {
  env: {
    node: true,
    'shared-node-browser': true,
  },
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
  rules: {
    'callback-return': [
      'error',
      [
        'next', 'done', 'send.error', 'send.success', 'send',
      ],
    ],
    'handle-callback-err': [ 'error', '^(e|err|error|.+Erro?r?)$' ],
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-sync': 'error', // unless there's a good reason to use it
  },
};
