let id_match
{
  // - declarations must end in lowercase letters
  // - multiple capital letters in a row aren't allowed
  // - numbers and symbols aren't allowed

  // only allow the use of a $ at the beginning of a variable
  // @example $woohoo
  const jquery = '\\$?'
  // @example wooHoo
  const camel_case = `[a-z]+${Array.from({ length: 5 }, () => '(?:[a-z]*[A-Z]{1}[a-z]+)?').join('')}`
  // Only allow specific accronyms on camel case and pascal case declarations.
  // This prevents bad naming conventions.
  // @examples
  // wooHooUI
  // WooHooUI
  const accronyms = [ 'UI' ].join('|')
  // ensure that snake case variables start and end with a letter
  // @exmaple woo_hoo
  const snake_case = '(?:[a-z][a-z_]+[a-z])'
  // Allow pascal case. This only allows 1 capital letter to start with
  // and then the rest are camel case rules. These should be used on
  // used for components and classes.
  // @examples
  // Woohoo
  // WooHoo
  const pascal_case = '(?:[A-Z]{1})?'
  const overrides = [
    // specific overrides for standard use cases
    'e',
    'i',
    'n',
    'a',
    'b',
    'x',
    'y',
    'P',
    't',
    // h1-h6 in react-native
    '[Hh][1-6]',
    // specific overrides for terribly named libraries
    'sha1',
    'S3FS',
    'i18n',
    'I18n',
    'selectV2',
    '__DEV__',
  ].join('|')
  id_match = `^${jquery}(?:(?:${pascal_case}${camel_case})(?:${accronyms})?|${snake_case}|(?:${overrides}))$`
}

module.exports = {
  rules: {
    // enforce line breaks after opening and before closing array brackets
    // https://eslint.org/docs/rules/array-bracket-newline
    // @todo remove when airbnb enables it
    // alternative 'consistent'
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
          'x',
          'y',
          'P',
          't',
        ],
      },
    ],

    // require identifiers to match the provided regular expression
    'id-match': [ 'error', id_match ],

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
    'no-multiple-empty-lines': [ 'error', { max: 4, maxEOF: 1 } ],

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

    // require or disallow an empty line between class members
    // https://eslint.org/docs/rules/lines-between-class-members
    // @todo remove this when it's published next major release
    'lines-between-class-members': [ 'error', 'always', { exceptAfterSingleLine: false } ],

    // enforce a particular style for multiline comments
    // https://eslint.org/docs/rules/multiline-comment-style
    'multiline-comment-style': 'off',

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

    // disallow else after a return in an if
    // https://eslint.org/docs/rules/no-else-return
    // @todo remove this when it's published
    'no-else-return': [ 'error', { allowElseIf: true } ],

    // Enforce the location of arrow function bodies with implicit returns
    // https://eslint.org/docs/rules/implicit-arrow-linebreak
    // @todo remove this when it's published
    'implicit-arrow-linebreak': [ 'error', 'beside' ],

    // this option sets a specific tab width for your code
    // https://eslint.org/docs/rules/indent
    // @todo remove this when it's published
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        // MemberExpression: null,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        CallExpression: {
          arguments: 1,
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
        ignoredNodes: [
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild',
        ],
        ignoreComments: false,
      },
    ],

    // enforce line breaks between braces
    // https://eslint.org/docs/rules/object-curly-newline
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          minProperties: 3,
          multiline: true,
          consistent: true,
        },
        ObjectPattern: {
          minProperties: 3,
          multiline: true,
          consistent: true,
        },
        ImportDeclaration: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
        ExportDeclaration: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
      },
    ],

    // enforce "same line" or "multiple line" on object properties.
    // https://eslint.org/docs/rules/object-property-newline
    'object-property-newline': 'error',

    // Requires operator at the beginning of the line in multiline statements
    // https://eslint.org/docs/rules/operator-linebreak
    'operator-linebreak': [
      'error',
      'before',
      {
        overrides: {
          '=': 'none',
          '&&': 'after',
          '||': 'after',
        },
      },
    ],
  },
}
