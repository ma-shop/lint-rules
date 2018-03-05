module.exports = {
  rules: {
    // enforce line breaks after opening and before closing array brackets
    // https://eslint.org/docs/rules/array-bracket-newline
    // @todo remove when airbnb enables it
    'array-bracket-newline': [ 'error', { multiline: true, minItems: 4 } ],

    // enforce line breaks between array elements
    // https://eslint.org/docs/rules/array-element-newline
    // @todo remove when airbnb enables it
    'array-element-newline': [ 'error', { multiline: true, minItems: 4 } ],

    // enforce spacing inside array brackets
    'array-bracket-spacing': [ 'error', 'always' ],

    // use camelcase for functions and snake case for data
    camelcase: 'off',

    // disallow certain syntax forms
    // https://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': [
      'error',

      {
        // ```js
        // for (var variable in object) {
        //   if (object.hasOwnProperty(variable)) {
        //    // do something
        //   }
        // }
        // ```
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },

      {
        // function *foo() {
        //  // do something
        // }
        selector: 'FunctionDeclaration[generator=true]',
        message:
          'In 99.9% of cases you should be using async/await instead of a generator function',
      },

      // awesome: for (const foo of bar) {
      //   // do something
      // }
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },

      // with (me) {
      //   // do something
      // }
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    // this option enforces minimum and maximum identifier lengths
    // (variable names, property names etc.)
    'id-length': [
      'warn',
      {
        min: 2,
        max: 50,
        properties: 'always',
        exceptions: [
          '_',
          '$',
          'e',
          'i',
          'n',
          'a',
          'b',
        ],
      },
    ],

    // require identifiers to match the provided regular expression
    // @todo update for alexa/google/react
    'id-match': [ 'error', '^(?:[a-z]{2,}([A-Z]{1}[a-z]+)*$)|([a-z_$]+$)|(sha1)' ],

    // enforce position of line comments
    // https://eslint.org/docs/rules/line-comment-position
    // @todo remove when airbnb enables it
    'line-comment-position': [
      'off',
      {
        position: 'above',
        ignorePattern: '.{0,50}',
        applyDefaultPatterns: true,
      },
    ],

    // specify the max number of lines in a file
    // https://eslint.org/docs/rules/max-lines
    // @todo remove when airbnb enables it
    'max-lines': [
      'error',
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true,
      },
    ],

    // limits the number of parameters that can be used in the function declaration.
    // @todo remove when airbnb enables it
    'max-params': [ 'warn', 3 ],

    // restrict the number of statements per line
    // https://eslint.org/docs/rules/max-statements-per-line
    // @todo remove when airbnb enables it
    'max-statements-per-line': [ 'error', { max: 1 } ],

    // require multiline ternary
    // https://eslint.org/docs/rules/multiline-ternary
    // @todo remove when airbnb enables it
    'multiline-ternary': [ 'error', 'never' ],

    // this is handled by prettier in a much better way
    'newline-per-chained-call': [ 'off' ],

    // disallow multiple empty lines and only one newline at the end
    'no-multiple-empty-lines': [ 'error', { max: 3, maxEOF: 1 } ],

    // they are pointless and serve no purpose except for a hand full of cases
    // So save hundreds of characters per file
    // Also they get added after transpiling
    semi: [ 'warn', 'never' ],

    // require or disallow a space immediately following the // or /* in a comment
    // https://eslint.org/docs/rules/spaced-comment
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: [
            '/',
            '#',
            '/#',
            '-',
            '+',
          ],
          exceptions: [
            '-',
            '+',
            '/',
            '#',
          ],
        },
        block: {
          markers: [ '!', '*#' ],
          exceptions: [
            '*',
            '#',
            '=',
            '!',
          ],
          balanced: true,
        },
      },
    ],

    // require or disallow space before function opening parenthesis
    // https://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'always', // makes function declaration search able
        asyncArrow: 'always',
      },
    ],
  },
}
