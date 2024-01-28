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

    // @todo don't allow `new`
    'unicorn/no-keyword-prefix': [
      'off',
      {
        disallowedPrefixes: [ 'new' ],
        checkProperties: true,
        onlyCamelCase: true,
      },
    ],




    // enable 1 by 1
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/empty-brace-spaces': 'off',
    'unicorn/error-message': 'off',
    'unicorn/escape-case': 'off',
    'unicorn/expiring-todo-comments': 'off',
    'unicorn/import-style': 'off',
    'unicorn/new-for-builtins': 'off',
    'unicorn/no-abusive-eslint-disable': 'off',
    'unicorn/no-array-method-this-argument': 'off',
    'unicorn/no-array-push-push': 'off',
    'unicorn/no-console-spaces': 'off',
    'unicorn/no-document-cookie': 'off',
    'unicorn/no-empty-file': 'off',
    'unicorn/no-for-loop': 'off',
    'unicorn/no-hex-escape': 'off',
    'unicorn/no-instanceof-array': 'off',
    'unicorn/no-invalid-remove-event-listener': 'off',
    'unicorn/no-lonely-if': 'off',
    'no-nested-ternary': 'off',
    'unicorn/no-nested-ternary': 'off',
    'unicorn/no-new-array': 'off',
    'unicorn/no-new-buffer': 'off',
    'unicorn/no-object-as-default-parameter': 'off',
    'unicorn/no-process-exit': 'off',
    'unicorn/no-static-only-class': 'off',
    'unicorn/no-thenable': 'off',
    'unicorn/no-this-assignment': 'off',
    'unicorn/no-typeof-undefined': 'off',
    'unicorn/no-unnecessary-await': 'off',
    'unicorn/no-unnecessary-polyfills': 'off',
    'unicorn/no-unreadable-array-destructuring': 'off',
    'unicorn/no-unreadable-iife': 'off',
    'unicorn/no-useless-fallback-in-spread': 'off',
    'unicorn/no-useless-length-check': 'off',
    'unicorn/no-useless-promise-resolve-reject': 'off',
    'unicorn/no-useless-spread': 'off',
    'unicorn/no-useless-switch-case': 'off',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/no-zero-fractions': 'off',
    'unicorn/number-literal-case': 'off',
    'unicorn/prefer-add-event-listener': 'off',
    'unicorn/prefer-array-find': 'off',
    'unicorn/prefer-array-flat': 'off',
    'unicorn/prefer-array-flat-map': 'off',
    'unicorn/prefer-array-index-of': 'off',
    'unicorn/prefer-array-some': 'off',
    'unicorn/prefer-at': 'off',
    'unicorn/prefer-blob-reading-methods': 'off',
    'unicorn/prefer-date-now': 'off',
    'unicorn/prefer-default-parameters': 'off',
    'unicorn/prefer-dom-node-append': 'off',
    'unicorn/prefer-dom-node-dataset': 'off',
    'unicorn/prefer-dom-node-remove': 'off',
    'unicorn/prefer-dom-node-text-content': 'off',
    'unicorn/prefer-event-target': 'off',
    'unicorn/prefer-export-from': 'off',
    'unicorn/prefer-includes': 'off',
    'unicorn/prefer-keyboard-event-key': 'off',
    'unicorn/prefer-logical-operator-over-ternary': 'off',
    'unicorn/prefer-math-trunc': 'off',
    'unicorn/prefer-modern-dom-apis': 'off',
    'unicorn/prefer-modern-math-apis': 'off',
    'unicorn/prefer-negative-index': 'off',
    'unicorn/prefer-node-protocol': 'off',
    'unicorn/prefer-object-from-entries': 'off',
    'unicorn/prefer-optional-catch-binding': 'off',
    'unicorn/prefer-prototype-methods': 'off',
    'unicorn/prefer-query-selector': 'off',
    'unicorn/prefer-reflect-apply': 'off',
    'unicorn/prefer-regexp-test': 'off',
    'unicorn/prefer-set-has': 'off',
    'unicorn/prefer-set-size': 'off',
    'unicorn/prefer-spread': 'off',
    'unicorn/prefer-string-replace-all': 'off',
    'unicorn/prefer-string-slice': 'off',
    'unicorn/prefer-string-starts-ends-with': 'off',
    'unicorn/prefer-string-trim-start-end': 'off',
    'unicorn/prefer-switch': 'off',
    'unicorn/prefer-top-level-await': 'off',
    'unicorn/prefer-type-error': 'off',
    'unicorn/relative-url-style': 'off',
    'unicorn/require-array-join-separator': 'off',
    'unicorn/require-number-to-fixed-digits-argument': 'off',
    'unicorn/template-indent': 'off',
    'unicorn/text-encoding-identifier-case': 'off',
    'unicorn/throw-new-error': 'off',
  },
}
