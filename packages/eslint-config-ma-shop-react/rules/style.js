const baseStyleRules = require('eslint-config-ma-shop/rules/style').rules


module.exports = {
  rules: {
    'no-underscore-dangle': baseStyleRules['no-underscore-dangle'],

    '@stylistic/jsx-child-element-spacing': [ 'off' ],

    '@stylistic/jsx-closing-bracket-location': [
      'error',
      'line-aligned',
    ],

    '@stylistic/jsx-closing-tag-location': [ 'error' ],

    '@stylistic/jsx-curly-brace-presence': [
      'error',
      {
        props: 'never',
        children: 'never',
      },
    ],

    '@stylistic/jsx-curly-newline': [
      'error',
      {
        multiline: 'consistent',
        singleline: 'consistent',
      },
    ],

    '@stylistic/jsx-curly-spacing': [
      'error',
      'never',
      {
        allowMultiline: true,
      },
    ],

    '@stylistic/jsx-equals-spacing': [
      'error',
      'never',
    ],

    '@stylistic/jsx-first-prop-new-line': [
      'error',
      'multiline-multiprop',
    ],

    '@stylistic/jsx-indent': [
      'error',
      2,
    ],

    '@stylistic/jsx-indent-props': [
      'error',
      2,
    ],

    '@stylistic/jsx-max-props-per-line': [
      'error',
      {
        maximum: 1,
        when: 'multiline',
      },
    ],

    // https://eslint.style/rules/default/jsx-newline
    // 'jsx-newline': [ 'error' ],

    '@stylistic/jsx-one-expression-per-line': [
      'error',
      {
        allow: 'single-child',
      },
    ],

    '@stylistic/jsx-props-no-multi-spaces': [ 'error' ],

    // @todo change this
    'jsx-quotes': [
      'off',
      'prefer-double',
    ],

    // https://eslint.style/rules/default/jsx-self-closing-comp
    // "jsx-self-closing-comp": [ "error" ],

    '@stylistic/jsx-sort-props': [
      'off',
      {
        ignoreCase: true,
        callbacksLast: false,
        shorthandFirst: false,
        shorthandLast: false,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],

    '@stylistic/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      },
    ],

    '@stylistic/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
      },
    ],
  },
}
