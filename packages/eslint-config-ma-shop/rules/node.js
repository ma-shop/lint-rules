module.exports = {
  rules: {
    // enforces error handling in callbacks (node environment)
    'handle-callback-err': [ 'error', '^(e|err|error|.+Erro?r?)$' ],

    // disallow use of synchronous methods
    'no-sync': 'error', // unless there's a good reason to use it
  },
};
