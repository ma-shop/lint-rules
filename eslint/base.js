module.exports = {
  'env': {
    'browser': true
  },
  'parserOptions': {
    'ecmaVersion': 5
  },
  'rules': {
    'block-scoped-var': 'error',
    'block-spacing': [ 'error', 'always' ],
    'brace-style': [ 'error' ],
    'comma-spacing': [ 'error', {
      'before': false,
      'after': true
    } ],
    'comma-style': [ 'error', 'last' ],
    complexity: [ 'error', 15 ],
    'computed-property-spacing': [ 'error', 'never' ],
    'consistent-this': [ 'error', 'self' ],
    curly: [ 'error', 'multi-line' ],
    'default-case': 'error',
    'dot-location': [ 'error', 'property' ],
    'dot-notation': [ 'error', { allowKeywords: true } ],
    'eol-last': 'error',
    eqeqeq: [ 'error', 'allow-null' ],
    'func-names': 'warn',
    'guard-for-in': 'error',
    'id-length': [
      'warn',
      {
        min: 2,
        max: 50,
        properties: 'always',
        exceptions: [ '_', '$', 'a', 'b', 'c', 'd', 'e', 'i', 'r', 's', 'v', 'x', 'y', 'z' ]
      }
    ],
    'id-match': [ 'error', '^(?:[a-z]{2,}([A-Z]{1}[a-z]+)*$)|([a-z_$]+$)' ],
    indent: [ 'error', 2, { SwitchCase: 1 } ],
    'key-spacing': [ 'error', {
      beforeColon: false,
      afterColon: true
    } ],
    'linebreak-style': [ 'error', 'unix' ],
    'max-depth': [ 'error', 5 ],
    'max-len': [ 'error', 150, 2, {
      ignoreUrls: true,
      ignorePattern: '^\\s*(var|const|let)\\s.+=\\s*(?:(?:[a-z.\\[\\]\'"]+\\s+\\+)|(?:\'|"))'
    } ],
    'max-nested-callbacks': [ 'error', 4 ],
    'max-params': [ 'warn', 4 ],
    'max-statements': [ 'warn', 25 ],
    'new-cap': [ 'error', { 'newIsCap': true } ],
    'new-parens': 'error',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': [ 'error', { allow: [ '~' ] } ],
    'no-caller': 'error',
    'no-catch-shadow': 'error',
    'no-cond-assign': [ 'error', 'except-parens' ],
    'no-continue': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-empty': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-parens': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'warn',
    'no-irregular-whitespace': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'warn',
    'no-loop-func': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': [ 'error', { max: 3, maxEOF: 1 } ],
    'no-native-reassign': 'error',
    'no-nested-ternary': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-new': 'error',
    'no-octal-escape': 'error',
    'no-octal': 'error',
    'no-proto': 'error',
    'no-redeclare': [ 'error', { builtinGlobals: true } ],
    'no-regex-spaces': 'error',
    'no-restricted-syntax': [ 'error', 'WithStatement' ],
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow-restricted-names': 'error',
    'no-shadow': 'error',
    'no-spaced-func': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef-init': 'error',
    'no-undef': 'error',
    'no-undefined': 'error',
    'no-underscore-dangle': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': [ 'error', {
      allowShortCircuit: true,
      allowTernary: true
    } ],
    'no-unused-vars': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-void': 'error',
    'no-warning-comments': [ 'warn', {
      terms: [ '@todo', '@fix', '@fixme' ],
      location: 'start'
    } ],
    'no-with': 'error',
    'object-curly-spacing': [ 'error', 'always' ],
    'one-var': [ 'error', {
      uninitialized: 'always',
      initialized: 'never'
    } ],
    'operator-assignment': [ 'error', 'always' ],
    'operator-linebreak': [ 'error', 'after' ],
    'padded-blocks': [ 'error', 'never' ],
    'quote-props': [ 'error', 'as-needed' ],
    quotes: [ 'error', 'single' ],
    'semi-spacing': 'error',
    semi: [ 'warn', 'always' ],
    'keyword-spacing': [ 'error', {
      before: true,
      after: true,
      overrides: {}
    } ],
    'space-before-blocks': [ 'error', 'always' ],
    'space-before-function-paren': [ 'error', 'never' ],
    'space-in-parens': [ 'error', 'never' ],
    'space-infix-ops': [ 'error', { int32Hint: true } ],
    'space-unary-ops': 'error',
    'spaced-comment': [ 'error', 'always', {
      line: {
        markers: [ '/', '#', '/#' ],
        exceptions: [ '-', '+', '/', '#' ]
      },
      block: {
        markers: [ '!', '*#' ],
        exceptions: [ '*', '#' ]
      }
    } ],
    'strict': [ 'off', 'global' ],
    'valid-typeof': 'error',
    'wrap-iife': [ 'error', 'inside' ],
    'yoda': 'error'
  }
};
