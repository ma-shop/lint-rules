module.exports = {
  rules: {
    'at-rule-no-unknown': [
      true,
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
        ],
      },
    ],
    // Specify a pattern for Sass/SCSS-like function names.
    'scss/at-function-pattern': '^[a-z]+(?:[a-z-]{3,})?$',
    // Specify a pattern for Sass/SCSS-like mixin names.
    'scss/at-mixin-pattern': '^[a-z]+(?:[a-z-]{3,})?$',
    // Specify a pattern for Sass-like variables.
    'scss/dollar-variable-pattern': '^[a-z]+(?:[a-z_-]{3,})?(?:h[1-6])?$',
    // Specify a pattern for %-placeholders.
    'scss/percent-placeholder-pattern': '^[a-z](?:[a-z_-]{3,})?$',
    // Specify blacklist of disallowed file extensions for partial names in @import commands.
    'scss/at-import-partial-extension-blacklist': /.*/,

    // always require parentheses in argumentless @mixin calls.
    'scss/at-mixin-argumentless-call-parentheses': 'always',

    // Require a media feature value be a $-variable or disallow $-variables in
    // media feature values.
    'scss/media-feature-value-dollar-variable': 'always',

    // Disallow non-CSS `@imports` in partial files.
    'scss/partial-no-import': null,

    ////////////////////////////////////////////

    // // Require or disallow a newline after the closing brace of @else statements.
    // 'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
    // // Require a single space or disallow whitespace after the closing brace of @else statements.
    // 'scss/at-else-closing-brace-space-after': 'always-intermediate',
    // // Require an empty line or disallow empty lines before @-else.
    // 'scss/at-else-empty-line-before': 'never',
    //
    // // Require or disallow a newline after the closing brace of @if statements.
    // 'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
    // // Require a single space or disallow whitespace after the closing brace of @if statements.
    // 'scss/at-if-closing-brace-space-after': 'always-intermediate',

    // // Require or disallow properties with - in their names to be in a form of a nested group.
    // 'scss/declaration-nested-properties': 'never',
    // // Disallow nested properties of the same "namespace" be divided into multiple groups.
    // 'scss/declaration-nested-properties-no-divided-groups': true,
  },
}
