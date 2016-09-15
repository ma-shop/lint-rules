module.exports = {
  plugins: [
    'stylelint-scss'
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        'ignoreAtRules': [
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
          'content'
        ]
      }
    ],
    'scss/at-extend-no-missing-placeholder': true,
    'scss/at-function-pattern': '^[a-z]{2,}[a-z-]*$',
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-import-partial-extension-blacklist': /.*/,
    'scss/at-mixin-argumentless-call-parentheses': 'always',
    'scss/at-mixin-pattern': '^[a-z]{2,}[a-z-]*$',
    'scss/dollar-variable-colon-space-after': 'always-single-line',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-pattern': '^[a-z]{2,}[a-z-]*$',
    'scss/percent-placeholder-pattern': '^[a-z]{2,}[a-z-]*$',
    'scss/double-slash-comment-whitespace-inside': 'always',
    // note{!} open up issue to fix the following rules on stylelint-scss
    // 'scss/declaration-nested-properties': 'never',
    // 'scss/declaration-nested-properties-no-divided-groups': true,
    'scss/media-feature-value-dollar-variable': 'always',
    'scss/operator-no-newline-after': true,
    'scss/operator-no-newline-before': true,
    'scss/operator-no-unspaced': true,
    'scss/partial-no-import': true,
    'scss/selector-no-redundant-nesting-selector': true,
  }
};
