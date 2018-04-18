module.exports = {
  rules: {
    // disallow use of console
    'no-console': [
      'warn',
      {
        allow: [ 'error', 'warn' ],
      },
    ],
  },
}
