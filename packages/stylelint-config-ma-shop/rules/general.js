module.exports = {
  rules: {
    // Limit the depth of nesting.
    'max-nesting-depth': [
      3,
      {
        ignoreAtRules: [
          'include',
          'mixin',
          'function',
          'if',
          'else',
          'extend',
          'at-root',
          'each',
          'warn',
          'debug',
          'error',
          'return',
          'for',
          'content',
          'media',
        ],
      },
    ],
  },
};
