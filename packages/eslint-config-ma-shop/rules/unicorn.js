module.exports = {
  plugins: [ 'unicorn' ],
  extends: [ 'plugin:unicorn/recommended' ],
  rules: {
    // these rules are silly because they're disabling useful features
    'unicorn/no-null': 'off',
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/prefer-code-point': 'off',
    'unicorn/no-array-for-each': 'off',

    // @todo enable at some point
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/no-await-expression-member': 'off',
    // this might be useful. eg 10_000 === 10000 = true
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v50.0.1/docs/rules/numeric-separators-style.md
    'unicorn/numeric-separators-style': 'off',
    // this could be useful but need to see how it works with single line case statements
    'unicorn/switch-case-braces': 'off',
    // not sure about this one since it reorganizes regex's
    'unicorn/better-regex': 'off',

    // this could be useful, but worried it changes the way
    // we will think about logic
    'no-negated-condition': 'off',
    'unicorn/no-negated-condition': 'off',

    // @todo enable this
    // these are combined rules.
    'unicorn/prefer-native-coercion-functions': 'off',
    'no-implicit-coercion': [
      'off',
      {
        boolean: false,
        number: true,
        string: true,
        allow: [],
      },
    ],

    // makes catch's consistent
    'unicorn/catch-error-name': [
      'error',
      {
        name: 'err',
        ignore: [
          '^[a-zA-Z]+Err(?:or)?$',
          '^error$',
        ],
      },
    ],

    // changes parseInt to Number.parseInt
    'unicorn/prefer-number-properties': [
      'error',
      {
        checkInfinity: false,
      },
    ],

    // sometimes it's more readable to not destructure
    'unicorn/consistent-destructuring': 'off',

    // ternary aren't always the best
    'unicorn/prefer-ternary': 'off',

    // this check doesn't make statements more clear
    'unicorn/explicit-length-check': 'off',

    // @todo add suggested to switch from `TODO` to `@todo`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v50.0.1/docs/rules/string-content.md
    'unicorn/string-content': 'off',

    // @todo
    'unicorn/no-keyword-prefix': [
      'off',
      {
        disallowedPrefixes: [ 'new' ],
        checkProperties: true,
        onlyCamelCase: true,
      },
    ],
    // @todo enable this
    'unicorn/expiring-todo-comments': [
      'off',
      {
        terms: [
          '@todo',
          '@fixme',
        ],
      },
    ],
  },
}
